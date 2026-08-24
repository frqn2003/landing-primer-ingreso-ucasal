/**
 * Convenios con los que el arancel sale bonificado.
 *
 * Los logos se nombran en `logo` con la ruta relativa al `base` del build
 * (ej. "convenios/enacom.svg"). El `.svg` va en `src/assets/convenios/` y
 * Convenios.astro lo pega dentro del HTML, así el CSS llega a las figuras de
 * adentro; el `.png` o `.jpg` va en `public/convenios/` y se sirve como `<img>`.
 * El valor de `logo` se escribe igual en los dos casos.
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
    { nombre: "ENACOM", logo: "convenios/ENACOM.png" },
    { nombre: "UPSAFIP", logo: "convenios/AFIP.png" }, // (confirmar) sigla del gremio del personal superior de AFIP
    { nombre: "ARCA", logo: "convenios/ARCA.png" },
    { nombre: "A.E.F.I.P.", logo: "convenios/aefip.png" },
    { nombre: "ICA", logo: "convenios/ICA.png" }, // (confirmar) Instituto de Capacitación
    { nombre: "Servicio Penitenciario Federal", logo: "convenios/federal.png" },
    { nombre: "Fundación Bomberos de Argentina", logo: "convenios/bomberos.png" },
    { nombre: "FAGE", logo: "convenios/gastroenterología.png" }, // (confirmar) Federación Argentina de Gastroenterología
    { nombre: "Fundación Unión", logo: "convenios/union.png" },
    { nombre: "SUPARA", logo: "convenios/hsbc.svg" },
    { nombre: "UTEDYC", logo: "convenios/hsbc.svg" },
    { nombre: "UTI C.G.T.R.A.", logo: "convenios/hsbc.svg" }, // (confirmar)
    { nombre: "Ledesma", logo: "convenios/hsbc.svg" },
    { nombre: "HSBC", logo: "convenios/hsbc.svg" },
    { nombre: "Seaboard", logo: "convenios/SEABOARD.png" },
    { nombre: "OSDE", logo: "convenios/OSDE.jpg" },
    { nombre: "SanCor Salud", logo: "convenios/SanCorSalud.png" },
    { nombre: "Banco Macro", logo: "convenios/Macro.jpg" },
    { nombre: "Keller Williams", logo: "convenios/Keller.jpg" },
    { nombre: "AMUGENAL", logo: "convenios/Amugenal.png" },
    { nombre: "Ejército Argentino", logo: "convenios/Ejército Argentino.png" },
    { nombre: "LC", logo: "convenios/LC.jpg" },
    { nombre: "Policía", logo: "convenios/policia.png" },
];
