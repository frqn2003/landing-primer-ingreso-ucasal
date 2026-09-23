/**
 * A qué formulario de inscripción manda el botón "Quiero inscribirme".
 *
 * Hay cuatro destinos posibles y el orden entre ellos importa, porque una misma
 * carrera puede caer en más de una regla (Podología CCC y Producción de
 * Bioimágenes CCC son CCC *y* sector 13). De mayor a menor prioridad:
 *
 *   1. Sector 13 (Cs. de la Salud) → sin destino. Todavía no existe la página
 *      de inscripción de estas carreras, así que el botón no navega a ningún
 *      lado: en la subpágina baja al formulario de contacto y en la pantalla de
 *      gracias directamente no se muestra.
 *   2. Ciclo de Complementación Curricular (CCC) → formulario propio de CCC.
 *   3. Sede "Modalidad Home" (idSede 500) → formulario de admisión. Solo aplica
 *      después de enviar el formulario: antes de eso no se sabe qué sede va a
 *      elegir el visitante.
 *   4. Resto → el alta de inscripciones de siempre.
 *
 * Vive acá y no en cada componente porque el mismo botón aparece en la navbar
 * de la subpágina de carrera y en la pantalla de gracias, y las dos tienen que
 * resolver lo mismo.
 */

/** Lo mínimo que hace falta de una carrera para elegir su formulario. */
export interface CarreraInscripcion {
    codcar: number;
    nombre: string;
    sector: number;
}

/** Sede ficticia que la API usa para "tu sede no es cercana" (modalidad Home). */
export const ID_SEDE_HOME = 500;

/** Cs. de la Salud: sin página de inscripción propia por ahora. */
export const SECTOR_SIN_INSCRIPCION = 13;

const URL_GENERAL = "https://www.ucasal.edu.ar/inscripciones/";
export const URL_CCC = "https://www.ucasal.edu.ar/carreras/ccc-form.php";
export const URL_HOME = "https://ucasal.edu.ar/carreras/admision-form.php";

/**
 * Las carreras de ciclo de complementación se reconocen por el sufijo del
 * nombre: los 14 registros de src/data/carreras.ts terminan en "- CCC". El slug
 * no sirve (licenciatura-en-seguridad y la de corretaje no lo llevan) y tampoco
 * hay un campo propio en los datos.
 */
export function esCCC(carrera: CarreraInscripcion): boolean {
    return carrera.nombre.trimEnd().endsWith("- CCC");
}

/** True si la carrera todavía no tiene a dónde mandar al inscripto. */
export function sinInscripcion(carrera: CarreraInscripcion): boolean {
    return carrera.sector === SECTOR_SIN_INSCRIPCION;
}

/**
 * Destino del botón, o `null` si la carrera no tiene inscripción todavía.
 *
 * - `carrera` ausente (pantalla de gracias de la home sin datos) cae al link
 *   general, que es lo que se mostraba antes de todo esto.
 * - `idSede` solo se pasa cuando ya se envió el formulario.
 * - `utmMedium` se agrega únicamente al link general: los formularios de CCC y
 *   de admisión se usan tal cual los entrega admisiones.
 */
export function urlInscripcion({
    carrera,
    idSede,
    utmMedium,
}: {
    carrera?: CarreraInscripcion | null;
    idSede?: number | string | null;
    utmMedium?: string;
} = {}): string | null {
    if (carrera && sinInscripcion(carrera)) return null;
    if (carrera && esCCC(carrera)) return URL_CCC;
    if (idSede != null && Number(idSede) === ID_SEDE_HOME) return URL_HOME;

    const utm = new URLSearchParams({ utm_source: "landing_primer_ingreso" });
    if (utmMedium) utm.set("utm_medium", utmMedium);
    return `${URL_GENERAL}?${utm.toString()}`;
}

/**
 * Los codcar que se apartan del link general, para que la pantalla de gracias
 * pueda resolver el destino en el navegador: ahí la carrera llega por
 * querystring (la manda Form.tsx) y no por props del build.
 *
 * Son 22 números entre las dos listas, así que viajan enteras sin problema.
 */
export function codcarsPorRegla(carreras: CarreraInscripcion[]) {
    return {
        sinInscripcion: carreras.filter(sinInscripcion).map((c) => c.codcar),
        ccc: carreras
            .filter((c) => !sinInscripcion(c) && esCCC(c))
            .map((c) => c.codcar),
    };
}
