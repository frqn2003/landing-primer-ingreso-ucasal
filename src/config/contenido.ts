/**
 * Los textos que cambian entre presencial y online.
 *
 * Se importa solo desde componentes .astro: el frontmatter corre en tiempo de
 * build, así que nada de esto viaja al bundle del navegador. Si algún día lo
 * necesita un componente React, pasalo por props en vez de importarlo ahí.
 */
import { modalidad, type Modalidad } from "./modalidad";

/* ───────────────────────────── Navegación ─────────────────────────────── */

/**
 * Cómo se llama en el navbar la sección de sedes. El id de la sección sigue
 * siendo "sedes" en las dos landings: lo único que cambia es la etiqueta.
 */
const etiquetasSedes: Record<Modalidad, string> = {
    presencial: "Campus",
    online: "Sedes",
};

export const etiquetaSedes = etiquetasSedes[modalidad];

/* ────────────────────────────── Beneficios ────────────────────────────── */

interface Beneficio {
    codigo: string;
    titulo: string;
    descripcion: string;
    /** Ruta relativa al `base` del build. */
    imagen: string;
}

// Las fotos de /cards son PLACEHOLDERS (stock genérico del explorador de
// carreras). Cuando estén las fotos reales, dejalas en /public/beneficios/ y
// cambiá solo el campo `imagen` de cada item.
const beneficiosPorModalidad: Record<Modalidad, Beneficio[]> = {
    presencial: [
        {
            codigo: "campus",
            titulo: "Campus en Castañares",
            descripcion:
                "45 hectáreas al pie del cerro: aulas, laboratorios, comedor y espacios verdes para estudiar y quedarte.",
            imagen: "beneficios/pile.webp",
        },
        {
            codigo: "edificios-nuevos",
            titulo: "Edificios nuevos y modernos",
            descripcion:
                "Aulas equipadas, wifi en todo el predio y laboratorios pensados para la práctica desde el primer año.",
            imagen: "cards/9.webp",
        },
        {
            codigo: "becas",
            titulo: "Becas y ayudas económicas",
            descripcion:
                "Hay una beca para cada situación: por mérito, por hermanos, por deporte o por convenio con tu empresa.",
            imagen: "cards/10.webp",
        },
        {
            codigo: "biblioteca",
            titulo: "Biblioteca y biblioteca digital",
            descripcion:
                "Retirá material en sala o accedé desde tu casa a bases de datos y libros digitales, las 24 horas.",
            imagen: "cards/11.webp",
        },
        {
            codigo: "deportes",
            titulo: "Deportes y actividades recreativas",
            descripcion:
                "Natación, fútbol, vóley y talleres culturales: la vida universitaria también pasa fuera del aula.",
            imagen: "cards/14.webp",
        },
        {
            codigo: "practicas",
            titulo: "Prácticas profesionales y pasantías",
            descripcion:
                "Sumás experiencia real antes de recibirte, con intercambios y bolsa de trabajo para dar el primer paso.",
            imagen: "cards/15.webp",
        },
        {
            codigo: "validez",
            titulo: "Título con validez nacional",
            descripcion:
                "Carreras oficiales reconocidas por el Ministerio de Educación, habilitadas para ejercer en todo el país.",
            imagen: "cards/16.webp",
        },
    ],
    online: [
        {
            codigo: "convalidacion",
            titulo: "Empezá donde te quedaste",
            descripcion:
                "Convalidá materias aprobadas en otras instituciones y avanzá más rápido en tu carrera.",
            imagen: "cards/57.webp",
        },
        {
            codigo: "a-tu-ritmo",
            titulo: "Capacitate a tu ritmo",
            descripcion:
                "Accedé a las clases cuando quieras y repasalas las veces que necesites.",
            imagen: "cards/58.webp",
        },
        {
            codigo: "desde-donde-estes",
            titulo: "Cursá desde donde estés",
            descripcion:
                "Tu carrera de manera totalmente online, sin desplazamientos ni horarios fijos.",
            imagen: "cards/96.webp",
        },
        {
            codigo: "sin-costos-extra",
            titulo: "Rendí sin costos extra",
            descripcion:
                "El derecho de examen ya está incluido, sin cargos adicionales.",
            imagen: "cards/133.webp",
        },
        {
            codigo: "tecnologia",
            titulo: "Potenciá tu aprendizaje con tecnología",
            descripcion:
                "Una plataforma con inteligencia artificial que acompaña y mejora tu experiencia de estudio.",
            imagen: "cards/138.webp",
        },
        {
            codigo: "validez",
            titulo: "Estudiá con validez nacional",
            descripcion:
                "Formate online con la misma validez que la modalidad presencial.",
            imagen: "cards/161.webp",
        },
        {
            codigo: "bibliografia",
            titulo: "Adquirí tu bibliografía, a un clic",
            descripcion:
                "Material de estudio digitalizado, disponible desde cualquier dispositivo.",
            imagen: "cards/175.webp",
        },
        {
            codigo: "sedes",
            titulo: "Conocé tu sede más cercana",
            descripcion:
                "Contamos con sedes en distintos puntos para acompañarte cuando lo necesites.",
            imagen: "cards/196.webp",
        },
    ],
};

export const beneficios = beneficiosPorModalidad[modalidad];

/* ──────────────────────────────── Sedes ───────────────────────────────── */

/**
 * Bloque de la izquierda de la sección de sedes: el campus 360 para presencial,
 * el mapa de sedes del país para online. Los dos son páginas externas de UCASAL
 * que se muestran embebidas.
 */
interface Embebido {
    /** Título de la sección. */
    titulo: string;
    /** Bajada corta arriba del embebido. */
    copete: string;
    /** URL que se embebe. */
    url: string;
    /** Descripción del iframe para lectores de pantalla. */
    tituloEmbebido: string;
    /** Texto del link de salida, por si el embebido no carga. */
    textoEnlace: string;
    /** Relación de aspecto del embebido en desktop. */
    proporcion: string;
}

const sedesPorModalidad: Record<Modalidad, Embebido> = {
    presencial: {
        titulo: "Conocé el campus por dentro",
        copete: "Recorré el campus de Castañares en 360°, aula por aula, antes de venir.",
        url: "https://www.ucasal.edu.ar/proyecto360/",
        tituloEmbebido: "Recorrido virtual 360° del campus de UCASAL en Castañares",
        textoEnlace: "Abrir el recorrido en una pestaña nueva",
        proporcion: "16 / 10",
    },
    online: {
        titulo: "Encontrá tu sede más cercana",
        copete: "Tenemos sedes y centros de apoyo en todo el país para rendir y hacer trámites.",
        url: "https://ucasal.edu.ar/mapa_sedes/mapa_sedes_ucasal.html",
        tituloEmbebido: "Mapa de sedes y centros de apoyo de UCASAL en el país",
        textoEnlace: "Abrir el mapa en una pestaña nueva",
        proporcion: "4 / 3",
    },
};

export const sedes = sedesPorModalidad[modalidad];

/* ─────────────────────────── Preguntas frecuentes ─────────────────────── */

/**
 * BORRADOR: los textos son una primera pasada, hay que confirmarlos con la
 * información oficial de cada modalidad antes de publicar.
 */
interface Pregunta {
    pregunta: string;
    respuesta: string;
}

const preguntasPorModalidad: Record<Modalidad, Pregunta[]> = {
    presencial: [
        {
            pregunta: "¿Dónde curso?",
            respuesta:
                "En el campus de Castañares, en Salta. Las clases, los laboratorios y la biblioteca están en el mismo predio.",
        },
        {
            pregunta: "¿Cómo elijo una carrera?",
            respuesta:
                "Explorá el catálogo, mirá el plan de estudios de cada propuesta y escribinos antes de decidir.",
        },
        {
            pregunta: "¿Qué necesito para inscribirme?",
            respuesta:
                "El título secundario o el certificado de alumno del último año, tu DNI y completar la inscripción online.",
        },
        {
            pregunta: "¿Hay becas disponibles?",
            respuesta:
                "Sí, hay becas por mérito, por hermanos, deportivas y por convenio. Consultanos cuál te corresponde.",
        },
        {
            pregunta: "¿Cómo recibo asesoramiento?",
            respuesta:
                "Completá el formulario y nuestro equipo se pone en contacto para orientarte.",
        },
    ],
    online: [
        {
            pregunta: "¿Cómo se cursa online?",
            respuesta:
                "Accedés a las clases cuando quieras y las repasás las veces que necesites, sin horarios fijos.",
        },
        {
            pregunta: "¿Tengo que viajar a Salta?",
            respuesta:
                "No. Rendís en la sede o centro de apoyo más cercano a tu ciudad; en el mapa podés ver dónde está.",
        },
        {
            pregunta: "¿Puedo convalidar materias que ya aprobé?",
            respuesta:
                "Sí. Si cursaste en otra institución, convalidás las materias aprobadas y avanzás más rápido.",
        },
        {
            pregunta: "¿El título es el mismo que el presencial?",
            respuesta:
                "Sí. Es un título oficial con validez nacional, con la misma validez que la modalidad presencial.",
        },
        {
            pregunta: "¿Qué necesito para inscribirme?",
            respuesta:
                "El título secundario o el certificado de alumno del último año, tu DNI y completar la inscripción online.",
        },
        {
            pregunta: "¿Cómo recibo asesoramiento?",
            respuesta:
                "Completá el formulario y nuestro equipo se pone en contacto para orientarte.",
        },
    ],
};

export const preguntasFrecuentes = preguntasPorModalidad[modalidad];

/* ───────────────────────────── Testimonios ───────────────────────────── */

interface Testimonio {
    nombre: string;
    imagen: string;
    carrera: string;
    frase: string;
    /**
     * En qué landing se muestra. "ambas" es el default seguro para cuando no
     * sabemos en qué modalidad cursó la persona.
     */
    modalidad: Modalidad | "ambas";
}

/**
 * OJO, ESTO NECESITA CONFIRMACIÓN: el campo `modalidad` lo inferí, no vino con
 * los testimonios. Son personas reales, así que clasificar mal implica
 * atribuirle a alguien una modalidad que no cursó. Confirmar con Comunicación
 * antes de publicar.
 *
 * Base de cada inferencia:
 * - "online": la carrera se vende únicamente en modo 7 según src/data/carreras.ts.
 * - "presencial": la carrera exige cursada física (práctica, instrumento, campo).
 * - "ambas": no hay con qué decidir; se muestra en las dos landings.
 */
const todosLosTestimonios: Testimonio[] = [
    {
        nombre: "Benjamin Elizalde",
        imagen: "/testimonios/benjamin-elizalde.jpg",
        carrera: "Licenciatura en Comercialización",
        frase: "La facultad está siempre a disposición",
        // La carrera figura como modalidad [7] en el catálogo.
        modalidad: "online",
    },
    {
        nombre: "Tania Elizabeth Flores",
        imagen: "/testimonios/tania-elizabeth-flores.jpg",
        carrera: "Corredor Inmobiliario y Martillero Público",
        frase:
            "El apoyo de los profesores y del equipo UCASAL es fundamental: siempre están para guiarte. Como mamá, valoro mucho esa ayuda para equilibrar familia, trabajo y estudio.",
        // La carrera figura como modalidad [7] en el catálogo.
        modalidad: "online",
    },
    {
        nombre: "Luciana Gennari",
        imagen: "/testimonios/luciana-gennari.jpg",
        carrera: "Kinesiología",
        frase:
            "Para poder rendir bien académicamente y en entrenamiento, la universidad me da una ayuda gigante",
        modalidad: "presencial",
    },
    {
        nombre: "Nahuel Agustín Artigas",
        imagen: "/testimonios/nahuel-agustin-artigas.jpg",
        carrera: "Profesorado en Educación Física",
        frase:
            "Son todos sentimientos de alegría y felicidad porque pude realizar un sueño que tenía, que era recibirme",
        modalidad: "presencial",
    },
    {
        nombre: "Luciano Marcelo Sato",
        imagen: "/testimonios/luciano-marcelo-sato.jpg",
        carrera: "Licenciatura en Artes Musicales",
        frase:
            "Nos permite integrarnos muy fácil al mundo laboral en muchos aspectos, capacitándonos mucho en el día a día",
        modalidad: "presencial",
    },
    {
        nombre: "Ebaneo Valdez Kao",
        imagen: "/testimonios/ebaneo-valdez-kao.jpg",
        carrera: "Ingeniería en Informática",
        frase: "Puedo ejercer mi profesión desde cualquier parte del mundo",
        // La frase habla de la profesión, no de cómo cursó: sin dato.
        modalidad: "ambas",
    },
    {
        nombre: "Nicolás Ovejero",
        imagen: "/testimonios/nicolas-ovejero.jpg",
        carrera: "Licenciatura en Turismo",
        frase:
            "Le agradezco a la universidad por brindarnos una herramienta fundamental: el capital humano, los profesores y sobre todo los compañeros",
        modalidad: "ambas",
    },
];

export const testimonios = todosLosTestimonios.filter(
    (t) => t.modalidad === modalidad || t.modalidad === "ambas",
);
