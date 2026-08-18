/**
 * Qué variante de la landing se está armando, y qué modos de cursado entran en
 * cada una.
 *
 * La modalidad se fija en tiempo de build con PUBLIC_MODALIDAD (ver
 * .env.presencial y .env.online).
 *
 * Este módulo lo importan también componentes React, así que se mantiene chico
 * a propósito: solo el flag y números. Los textos que cambian por modalidad van
 * en contenido.ts, que solo se usa desde .astro y no viaja al navegador.
 */

export const MODALIDADES = ["presencial", "online"] as const;

export type Modalidad = (typeof MODALIDADES)[number];

function validar(valor: unknown): Modalidad {
    if (MODALIDADES.includes(valor as Modalidad)) return valor as Modalidad;

    // Falla el build en vez de publicar la variante equivocada en silencio.
    throw new Error(
        `PUBLIC_MODALIDAD tiene el valor ${JSON.stringify(valor)}, y solo acepta ` +
            `${MODALIDADES.join(" o ")}. Usá los scripts build:presencial / ` +
            `build:online, que cargan el .env correspondiente.`,
    );
}

export const modalidad = validar(import.meta.env.PUBLIC_MODALIDAD);

export const esPresencial = modalidad === "presencial";
export const esOnline = modalidad === "online";

/** Códigos de modo de cursado que usan la API y los datos de carreras. */
export const MODO_PRESENCIAL = 1;
export const MODO_ONLINE = 7;
export const MODO_HOME = 8;

/**
 * Modos que se ofrecen para elegir una carrera: en la landing online no se
 * vende presencial, así que queda solo online.
 *
 * Filtra el listado de carreras, el selector de modalidad del formulario y el
 * filtro del explorador.
 */
export const modosCarrera: number[] = esOnline
    ? [MODO_ONLINE]
    : [MODO_PRESENCIAL, MODO_ONLINE];

/**
 * Modos que se muestran en la sección "Modalidades": la landing online muestra
 * Online y Home; la presencial, las tres.
 */
export const modosPuerta: number[] = esOnline
    ? [MODO_ONLINE, MODO_HOME]
    : [MODO_PRESENCIAL, MODO_ONLINE, MODO_HOME];

/** True si la carrera se vende en alguno de los modos de esta landing. */
export function carreraEnModalidad(modalidadesCarrera: number[]): boolean {
    return modalidadesCarrera.some((modo) => modosCarrera.includes(modo));
}

/** Deja solo las carreras que se venden en esta landing. */
export function filtrarCarreras<T extends { modalidad: number[] }>(
    carreras: T[],
): T[] {
    return carreras.filter((carrera) => carreraEnModalidad(carrera.modalidad));
}
