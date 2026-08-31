/**
 * Barra que cierra el hero: a la izquierda la promoción vigente, a la derecha
 * los datos institucionales.
 *
 * La promoción va destacada (fondo rojo, el número grande) y los datos en
 * vidrio, para que la jerarquía se lea de un vistazo.
 *
 * En mobile no hay lugar para los tres datos al lado de la promoción, así que
 * la celda de la derecha muestra uno solo y va rotando con efecto de máquina de
 * escribir: se escribe, se sostiene, se borra y entra el siguiente. Nada se
 * desplaza, así que la barra no cambia de alto mientras rota.
 *
 * Sin promoción vigente la celda de la izquierda no se dibuja y los datos toman
 * todo el ancho.
 */
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { Promocion } from "../../data/promociones";
import { usePromocionVigente } from "../../hooks/usePromocionVigente";

interface Dato {
    numero: string;
    etiqueta: string;
}

interface Props {
    promociones: Promocion[];
    /**
     * Los datos institucionales, que cambian según el build: la landing online
     * suma los suyos (trayectoria virtual y red de sedes). Llegan por props
     * desde Hero.astro porque viven en src/config/contenido.ts, que no viaja al
     * bundle del navegador.
     */
    datos?: Dato[];
}

const DATOS_POR_DEFECTO: Dato[] = [
    { numero: "+60", etiqueta: "Años enseñando" },
    { numero: "+40.000", etiqueta: "Estudiantes" },
    { numero: "+5.000", etiqueta: "Becados" },
];

/** Desde este ancho entran los tres datos al lado de la promoción. */
const CONSULTA_ESCRITORIO = "(min-width: 768px)";

/** A partir de acá el plazo se comunica como urgencia. */
const DIAS_URGENCIA = 7;

/* Ritmo de la máquina de escribir, en ms. */
const MS_LETRA = 55;
const MS_BORRADO = 25;
const MS_SOSTENIDO = 2400;
const MS_ENTRE_DATOS = 300;

function textoPlazo(fechaFin: string): string {
    const fecha = new Date(fechaFin);
    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    return `Hasta el ${dia}/${mes}`;
}

function textoDias(dias: number): string {
    if (dias === 0) return "¡Último día!";
    const unidad = dias === 1 ? "día" : "días";
    return dias <= DIAS_URGENCIA
        ? `¡Últimos ${dias} ${unidad}!`
        : `Quedan ${dias} ${unidad}`;
}

/**
 * True cuando la media query da true, y se actualiza si cambia el tamaño.
 *
 * Con useSyncExternalStore y no con un useState + useEffect: el valor se lee
 * durante el render (no un tick después), así que la celda de datos no dibuja
 * primero la variante equivocada. En el servidor devuelve false, que es la
 * variante mobile, y React la corrige al hidratar sin avisos de mismatch.
 */
function useMediaQuery(consulta: string): boolean {
    const suscribir = useCallback(
        (avisar: () => void) => {
            const mq = matchMedia(consulta);
            mq.addEventListener("change", avisar);
            return () => mq.removeEventListener("change", avisar);
        },
        [consulta],
    );

    return useSyncExternalStore(
        suscribir,
        () => matchMedia(consulta).matches,
        () => false,
    );
}

function CeldaPromocion({
    promocion,
    dias,
}: {
    promocion: Promocion;
    dias: number;
}) {
    return (
        <div
            role="status"
            aria-label="Promoción vigente"
            className="flex min-w-0 flex-col text-center gap-2 rounded-2xl bg-white/20 backdrop-blur-xl px-3 py-1.5 text-white shadow-lg ring-3 ring-(--rojo-ucasal) sm:px-5 sm:py-3"
        >
            {promocion.descuento ? (
                <div className="flex flex-col flex-1 md:flex-row text-center gap-1 items-center sm:gap-6">
                    <span className="text-[1.8rem] leading-none text-center font-bold sm:text-4xl uppercase border-(--rojo-ucasal) md:border-r-3 px-4">
                        {promocion.descuento} off <br className="hidden md:block" /><span className="whitespace-normal leading-12 md:text-[1.6rem]">matrícula</span>
                    </span>
                    <div className="flex flex-row md:flex-col items-center text-lg md:gap-2 gap-5">
                        <span className=" whitespace-nowrap text-white/80 block">
                            {textoPlazo(promocion.fecha_fin)}
                        </span>
                        <span className="w-fit rounded-lg bg-(--rojo-ucasal)/50 px-2 py-1 font-bold whitespace-nowrap">
                            {textoDias(dias)}
                        </span>
                    </div>
                </div>
            ) : (
                <span className="text-base leading-tight font-black uppercase sm:text-2xl">
                    {promocion.subtitulo || "Cuotas sin interés"}
                </span>
            )}


        </div>
    );
}

/** Los tres datos, uno al lado del otro. Es lo que se ve en escritorio. */
function DatosFijos({ datos }: { datos: Dato[] }) {
    return (
        <div className="flex flex-1 items-center divide-x divide-white">
            {datos.map((dato) => (
                <div
                    key={dato.numero}
                    className="flex flex-1 flex-col items-center px-3 text-center"
                >
                    <span className="text-2xl leading-none text-center font-bold sm:text-3xl">
                        {dato.numero}
                    </span>
                    <span className="mt-1 text-sm text-white">{dato.etiqueta}</span>
                </div>
            ))}
        </div>
    );
}

/**
 * Un dato a la vez, escribiéndose y borrándose. Con "prefers-reduced-motion" no
 * se anima: el dato entra completo y rota igual.
 */
function DatoEscribiendo({ datos }: { datos: Dato[] }) {
    const [indice, setIndice] = useState(0);
    const [largo, setLargo] = useState(0);
    const [borrando, setBorrando] = useState(false);
    const sinMovimiento = useMediaQuery("(prefers-reduced-motion: reduce)");

    const dato = datos[indice];
    const texto = `${dato.numero} ${dato.etiqueta}`;

    // El timeout se reprograma en cada paso: escribir una letra, sostener el
    // dato completo, borrar una letra, pasar al siguiente.
    const temporizador = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (sinMovimiento) {
            setLargo(texto.length);
            temporizador.current = window.setTimeout(
                () => setIndice((i) => (i + 1) % datos.length),
                MS_SOSTENIDO,
            );
            return () => clearTimeout(temporizador.current);
        }

        let espera = MS_LETRA;
        let paso: () => void;

        if (!borrando && largo < texto.length) {
            paso = () => setLargo((l) => l + 1);
        } else if (!borrando) {
            espera = MS_SOSTENIDO;
            paso = () => setBorrando(true);
        } else if (largo > 0) {
            espera = MS_BORRADO;
            paso = () => setLargo((l) => l - 1);
        } else {
            espera = MS_ENTRE_DATOS;
            paso = () => {
                setBorrando(false);
                setIndice((i) => (i + 1) % datos.length);
            };
        }

        temporizador.current = window.setTimeout(paso, espera);
        return () => clearTimeout(temporizador.current);
    }, [borrando, largo, texto, sinMovimiento, datos.length]);

    const visible = texto.slice(0, largo);
    const numero = visible.slice(0, dato.numero.length);
    const etiqueta = visible.slice(dato.numero.length).trimStart();
    // El cursor acompaña a la línea que se está escribiendo.
    const enElNumero = largo <= dato.numero.length;

    const cursor = (
        <span className="ml-0.5 inline-block h-[0.9em] w-px animate-pulse bg-white/70 align-middle" />
    );

    return (
        <div className="flex min-w-0 flex-1 flex-col items-center justify-center text-center">
            <span aria-hidden="true" className="flex flex-row sm:flex-col gap-2">
                <span className="flex h-6 items-center text-xl leading-none font-black">
                    {numero}
                    {enElNumero && cursor}
                </span>
                <span className="flex items-center text-xs leading-none text-white/75 first-letter:uppercase">
                    {etiqueta}
                    {!enElNumero && cursor}
                </span>
            </span>

            <ul className="sr-only">
                {datos.map((d) => (
                    <li key={d.numero}>{`${d.numero} ${d.etiqueta}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default function BarraHero({
    promociones,
    datos = DATOS_POR_DEFECTO,
}: Props) {
    const { promocion, dias } = usePromocionVigente(promociones);
    const escritorio = useMediaQuery(CONSULTA_ESCRITORIO);

    return (
        <div className="w-full max-w-full sm:max-w-6xl">
            <div className="flex flex-col md:flex-row items-stretch gap-2 sm:gap-12">
                {promocion && <CeldaPromocion promocion={promocion} dias={dias} />}

                <div className="flex min-w-0 flex-1 items-center rounded-xl ring-2 ring-white bg-white/10 backdrop-blur-xl px-3 py-2.5 text-white">
                    {escritorio ? (
                        <DatosFijos datos={datos} />
                    ) : (
                        <DatoEscribiendo datos={datos} />
                    )}
                </div>
            </div>
        </div>
    );
}
