/**
 * El catálogo recortado a lo que de verdad usa cada isla de React.
 *
 * Importar `./carreras` desde un componente React mete los 355 KB del catálogo
 * entero en el bundle del navegador —descripciones largas, perfil del egresado
 * y planes de estudio de las 88 carreras—, y encima el explorador recibía esos
 * mismos registros completos serializados como props dentro del HTML: 303 KB de
 * los 656 KB que pesaba index.html. Nada de eso se lee en el navegador; los
 * planes y el perfil los arma CareerDetail.astro durante el build.
 *
 * OJO: el recorte tiene que pasar en el servidor. Un `.map()` adentro de un
 * componente React no sirve de nada, porque el bundler igual necesita incluir
 * el objeto original para poder recorrerlo. Por eso las islas no importan el
 * catálogo: lo reciben por props desde el .astro que las renderiza.
 *
 * Son dos recortes distintos porque las dos islas necesitan cosas distintas, y
 * en la Home conviven las dos: el explorador arma cartas (imagen, facultad,
 * duración, buscador por texto) y el formulario solo arma un desplegable.
 */
/** Lo que necesitan ExploradorCarreras y CartaCarrera. */
export interface CarreraCliente {
    codcar: number;
    slug: string;
    nombre: string;
    /** La usa el buscador del explorador: sin ella "notarial" no encuentra Escribanía. */
    descripcion: string;
    duracion: string;
    modalidad: number[];
    sector: number;
}

/**
 * Lo que necesitan Form y useCarrerasCascada: el desplegable de carreras y la
 * tarjeta de "tu carrera". `sector` no se muestra, viaja al CRM en un input
 * oculto.
 */
export interface CarreraFormulario {
    codcar: number;
    nombre: string;
    duracion: string;
    modalidad: number[];
    sector: number;
}

/* Genéricos y no `CarreraCliente & Record<string, unknown>`: las interfaces de
   TypeScript no traen índice implícito, así que una carrera declarada con
   `interface` (la de CareerDetail.astro, por ejemplo) no encaja en un Record y
   el check falla aunque tenga todos los campos. Con `extends` alcanza con que
   el registro tenga al menos lo que el recorte necesita, venga de donde venga
   y traiga los extras que traiga. */
export function paraExplorador<T extends CarreraCliente>(
    carreras: T[],
): CarreraCliente[] {
    return carreras.map(
        ({ codcar, slug, nombre, descripcion, duracion, modalidad, sector }) => ({
            codcar,
            slug,
            nombre,
            descripcion,
            duracion,
            modalidad,
            sector,
        }),
    );
}

export function paraFormulario<T extends CarreraFormulario>(
    carreras: T[],
): CarreraFormulario[] {
    return carreras.map(({ codcar, nombre, duracion, modalidad, sector }) => ({
        codcar,
        nombre,
        duracion,
        modalidad,
        sector,
    }));
}
