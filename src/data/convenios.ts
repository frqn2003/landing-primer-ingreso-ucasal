/**
 * Convenios con los que el arancel sale bonificado.
 *
 * Los logos se nombran en `logo` con la ruta relativa al `base` del build
 * (ej. "convenios/enacom.svg"). Hay tres casos y el valor de `logo` se escribe
 * igual en los tres; Convenios.astro decide por la extensión:
 *
 * - `.svg` en `src/assets/convenios/`: se pega dentro del HTML, así el CSS
 *   llega a las figuras de adentro. Solo para vectores de verdad.
 * - `.webp` en `src/assets/convenios/`: logos que son foto, no vector. Salen
 *   por `<Image>` con srcset. Acá están los que venían como un PNG gigante
 *   embebido en un SVG, que inline hacían un build de 26 GB.
 * - `.png` o `.jpg` en `public/convenios/`: se sirven como `<img>` tal cual.
 *
 * Mientras un convenio no tenga logo, la cinta muestra su nombre en un chip:
 * así la sección ya funciona y cada logo aparece a medida que se suben los
 * archivos.
 *
 * En el servidor ya existen tres, de la landing 2022, si los quieren reusar:
 * /landing/ingreso-carreras-2022/convenios/{macro,naranjax,nacion}.svg
 *
 * OJO, ESTO NECESITA CONFIRMACIÓN: la lista se transcribió de la placa
 * "Protocolos Nacionales", así que hay que chequear dos cosas antes de publicar.
 *
 * 1. Los nombres marcados con "(confirmar)" son la lectura de una sigla, no un
 *    nombre oficial.
 * 2. Faltan cinco convenios de la placa cuyos escudos no se leen: dos crestas
 *    provinciales, un círculo con un sol, un escudo con laurel y un cuadrado
 *    celeste con las letras "tc". Hay que pedir esos nombres y sumarlos acá.
 */

export interface Convenio {
    /** Nombre que se lee en el chip y que va en el alt del logo. */
    nombre: string;
    /** Ruta del logo relativa al `base`. Sin logo, se muestra el nombre. */
    logo?: string;
}

export const convenios: Convenio[] = [
    { nombre: "ENACOM", logo: "convenios/ENACOM.svg" },
    { nombre: "UPSAFIP", logo: "convenios/usp.webp" }, // (confirmar) sigla del gremio del personal superior de AFIP
    { nombre: "ARCA", logo: "convenios/ARCA.webp" },
    { nombre: "A.E.F.I.P.", logo: "convenios/eafip.webp" },
    { nombre: "ICA", logo: "convenios/ica.webp" }, // (confirmar) Instituto de Capacitación
    { nombre: "Servicio Penitenciario Federal", logo: "convenios/federal.webp" },
    { nombre: "Fundación Bomberos de Argentina", logo: "convenios/bomberos.webp" },
    { nombre: "FAGE", logo: "convenios/gastroenterologia.webp" }, // (confirmar) Federación Argentina de Gastroenterología
    { nombre: "Fundación Unión", logo: "convenios/union.webp" },
    { nombre: "SUPARA", logo: "convenios/supara.webp" },
    { nombre: "UTEDYC", logo: "convenios/Utedyc.webp" },
    { nombre: "UTI C.G.T.R.A.", logo: "convenios/Uti.webp" }, // (confirmar)
    { nombre: "Ledesma", logo: "convenios/ledesma.svg" },
    { nombre: "HSBC", logo: "convenios/hsbc.svg" },
    { nombre: "Seaboard", logo: "convenios/seabord.svg" },
    { nombre: "OSDE", logo: "convenios/osde.svg" },
    { nombre: "SanCor Salud", logo: "convenios/sancor.svg" },
    { nombre: "Banco Macro", logo: "convenios/macro.svg" },
    { nombre: "Keller Williams", logo: "convenios/Keller.webp" },
    { nombre: "AMUGENAL", logo: "convenios/amugenal.webp" },
    { nombre: "Ejército Argentino", logo: "convenios/Ejército.webp" },
    { nombre: "LC", logo: "convenios/LC.webp" },
    { nombre: "Policía", logo: "convenios/policia.webp" },
];
