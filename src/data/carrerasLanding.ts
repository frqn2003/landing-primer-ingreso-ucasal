/**
 * El catálogo tal como lo ve ESTA landing.
 *
 * Hace dos cosas, y la segunda es la que importa:
 *
 * 1. Deja solo las carreras que se venden en los modos de este build.
 * 2. Recorta el array `modalidad` de cada carrera a esos mismos modos.
 *
 * Sin el paso 2 una carrera que se dicta [1,7] llegaba entera a los componentes
 * y en la landing online la carta y el detalle anunciaban "Presencial y Online".
 * Recortando acá, en el borde de los datos, todo lo que lee `modalidad` —cartas,
 * detalle, contador del filtro, badges del formulario— queda coherente sin que
 * cada componente tenga que acordarse de filtrar.
 *
 * Importalo desde .astro. Los componentes React reciben el listado por props
 * (ver index.astro) para no arrastrar la config del build al bundle.
 */
import data from "./carreras";
import { filtrarCarreras, modosCarrera } from "../config/modalidad";

const carrerasLanding = filtrarCarreras(data).map((carrera) => ({
    ...carrera,
    modalidad: carrera.modalidad.filter((modo) => modosCarrera.includes(modo)),
}));

export default carrerasLanding;
