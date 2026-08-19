/**
 * Las promociones de matrícula que publica el JSON de la landing de ingreso.
*/

export interface Promocion {
    nombre: string;
    fecha_inicio: string;
    fecha_fin: string;
    descuento: string | null;
    subtitulo: string;
}

const URL_DATOS =
    "https://www.ucasal.edu.ar/landing/ingreso/assets/datosLanding.json";

/**
 * De qué clave del JSON salen las promociones.
 *
 * OJO: no todas las claves tienen la misma forma, y la forma de una misma clave
 * cambia cuando arranca una campaña nueva. La barra del hero necesita
 * `descuento` + `subtitulo`; las claves que traen `mensajes` con HTML son del
 * ticker viejo y de ahí no sale un descuento (hoy, `promociones_dinamicas_postgrados`).
 * Las entradas que no sirven se descartan en `esPromocion`, con un aviso en el
 * log del build.
 */
const CLAVE_PROMOCIONES = "promociones_dinamicas";

/** Deja pasar solo lo que la barra puede dibujar como promoción. */
function esPromocion(item: unknown): item is Promocion {
    const p = item as Promocion;
    return (
        typeof p?.fecha_inicio === "string" &&
        typeof p?.fecha_fin === "string" &&
        typeof p?.subtitulo === "string" &&
        (typeof p?.descuento === "string" || p?.descuento === null)
    );
}

/**
 * Devuelve la lista de promociones publicada, o vacía si el JSON no responde.
 */
export async function obtenerPromociones(): Promise<Promocion[]> {
    try {
        const respuesta = await fetch(URL_DATOS);
        if (!respuesta.ok) {
            throw new Error(`El JSON respondió ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        const publicadas = datos?.[CLAVE_PROMOCIONES];
        if (!Array.isArray(publicadas)) return [];

        // Se descartan las que no tienen descuento en vez de mostrarlas a
        // medias: con la forma de `mensajes` la barra anunciaría una promoción
        // que el JSON no dice.
        const promociones = publicadas.filter(esPromocion);
        if (promociones.length < publicadas.length) {
            console.warn(
                `[promociones] ${publicadas.length - promociones.length} de ` +
                    `${publicadas.length} entradas de "${CLAVE_PROMOCIONES}" no ` +
                    `tienen descuento/subtitulo y se ignoran. Si la barra del ` +
                    `hero no muestra la promoción, revisá que la clave sea la ` +
                    `de la campaña vigente.`,
            );
        }

        return promociones;
    } catch (error) {
        console.warn(
            `[promociones] No se pudieron leer las promociones de ${URL_DATOS}, ` +
                `la landing se arma sin la promoción en la barra del hero.`,
            error,
        );
        return [];
    }
}
