/**
 * Convenios con los que el arancel sale bonificado.
 *
 * Los logos van en `public/convenios/` y se nombran en `logo` con la ruta
 * relativa al `base` del build (ej. "convenios/enacom.svg"). Mientras un
 * convenio no tenga logo, la cinta muestra su nombre en un chip: así la sección
 * ya funciona y cada logo aparece a medida que se suben los archivos.
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
    { nombre: "ENACOM" },
    { nombre: "UPSAFIP" }, // (confirmar) sigla del gremio del personal superior de AFIP
    { nombre: "ARCA" },
    { nombre: "A.E.F.I.P." },
    { nombre: "ICA" }, // (confirmar) Instituto de Capacitación
    { nombre: "Servicio Penitenciario Federal" },
    { nombre: "Fundación Bomberos de Argentina" },
    { nombre: "FAGE" }, // (confirmar) Federación Argentina de Gastroenterología
    { nombre: "Fundación Unión" },
    { nombre: "SUPARA" },
    { nombre: "UTEDYC" },
    { nombre: "UTI C.G.T.R.A." }, // (confirmar)
    { nombre: "Ledesma" },
    { nombre: "HSBC" },
    { nombre: "Seaboard" },
    { nombre: "OSDE" },
    { nombre: "SanCor Salud" },
    { nombre: "Banco Macro" },
    { nombre: "Keller Williams" },
];
