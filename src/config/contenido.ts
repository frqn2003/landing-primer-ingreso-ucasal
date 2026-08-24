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

/* ─────────────────────────────── Hero ─────────────────────────────────── */

/** El párrafo que acompaña al título del hero. */
const descripcionesHero: Record<Modalidad, string> = {
    presencial:
        "Transformá tu futuro profesional en nuestra universidad, alcanzá tu título con validez nacional, cursá con la modalidad que prefieras y accedé a todos los beneficios.",
    online:
        "Estudiá online respaldado por una universidad con trayectoria y una red nacional que te acompaña.",
};

export const descripcionHero = descripcionesHero[modalidad];

interface DatoHero {
    numero: string;
    etiqueta: string;
}

/**
 * Los datos institucionales de la barra del hero. La landing online suma los
 * dos propios del online (trayectoria virtual y red de sedes).
 *
 * Los consume BarraHero.tsx, que es React: llegan por props desde Hero.astro
 * para no arrastrar este módulo al bundle del navegador.
 */
const datosHeroPorModalidad: Record<Modalidad, DatoHero[]> = {
    presencial: [
        { numero: "+60", etiqueta: "Años enseñando" },
        { numero: "+40.000", etiqueta: "Estudiantes" },
        { numero: "+5.000", etiqueta: "Becados" },
    ],
    online: [
        { numero: "+35", etiqueta: "Años de educación virtual" },
        { numero: "+120", etiqueta: "Sedes" },
        { numero: "+60", etiqueta: "Años enseñando" },
        { numero: "+40.000", etiqueta: "Estudiantes" },
        { numero: "+5.000", etiqueta: "Becados" },
    ],
};

export const datosHero = datosHeroPorModalidad[modalidad];

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
            imagen: "beneficios/campus.webp",
        },
        {
            codigo: "edificios-nuevos",
            titulo: "Edificios nuevos y modernos",
            descripcion:
                "Aulas equipadas, wifi en todo el predio y laboratorios pensados para la práctica desde el primer año.",
            imagen: "beneficios/edificios-nuevos.webp",
        },
        {
            codigo: "becas",
            titulo: "Becas y ayudas económicas",
            descripcion:
                "Hay una beca para cada situación: por mérito, por hermanos, por deporte o por convenio con tu empresa.",
            imagen: "beneficios/becas.webp",
        },
        {
            codigo: "biblioteca",
            titulo: "Biblioteca y biblioteca digital",
            descripcion:
                "Retirá material en sala o accedé desde tu casa a bases de datos y libros digitales, las 24 horas.",
            imagen: "beneficios/biblioteca.webp",
        },
        {
            codigo: "deportes",
            titulo: "Deportes y actividades recreativas",
            descripcion:
                "Natación, fútbol, vóley y talleres culturales: la vida universitaria también pasa fuera del aula.",
            imagen: "beneficios/pile.webp",
        },
        {
            codigo: "practicas",
            titulo: "Prácticas profesionales y pasantías",
            descripcion:
                "Sumás experiencia real antes de recibirte, con intercambios y bolsa de trabajo para dar el primer paso.",
            imagen: "beneficios/practicas.webp",
        },
        {
            codigo: "validez",
            titulo: "Título con validez nacional",
            descripcion:
                "Carreras oficiales reconocidas por el Ministerio de Educación, habilitadas para ejercer en todo el país.",
            imagen: "beneficios/titulos.webp",
        },
    ],
    online: [
        {
            codigo: "convalidacion",
            titulo: "Empezá donde te quedaste",
            descripcion:
                "Convalidá materias aprobadas en otras instituciones y avanzá más rápido en tu carrera.",
            imagen: "beneficios/convalidacion.webp",
        },
        {
            codigo: "becas",
            titulo: "Becas y ayudas económicas",
            descripcion:
                "Hay una beca para cada situación: por mérito, por hermanos, por deporte o por convenio con tu empresa.",
            imagen: "beneficios/becas.webp",
        },
        {
            codigo: "cursar",
            titulo: "Cursá desde donde estés",
            descripcion:
                "Tu carrera de manera totalmente online, sin desplazamientos ni horarios fijos.",
            imagen: "beneficios/cursar.webp",
        },
        {
            codigo: "sin-costos-extra",
            titulo: "Rendí sin costos extra",
            descripcion:
                "El derecho de examen ya está incluido, sin cargos adicionales.",
            imagen: "beneficios/sin-costos-extra.webp",
        },
        {
            codigo: "tecnologia",
            titulo: "Potenciá tu aprendizaje con tecnología",
            descripcion:
                "Una plataforma con inteligencia artificial que acompaña y mejora tu experiencia de estudio.",
            imagen: "beneficios/tecnologia.webp",
        },
        {
            codigo: "validez",
            titulo: "Estudiá con validez nacional",
            descripcion:
                "Formate online con la misma validez que la modalidad presencial. Carreras oficiales reconocidas por el Ministerio de Educación.",
            imagen: "beneficios/titulos.webp",
        },
        {
            codigo: "bibliografia",
            titulo: "Adquirí tu bibliografía, a un clic",
            descripcion:
                "Material de estudio digitalizado, disponible desde cualquier dispositivo.",
            imagen: "beneficios/bibliografia.webp",
        },
        {
            codigo: "sedes",
            titulo: "Conocé tu sede más cercana",
            descripcion:
                "Contamos con sedes en distintos puntos para acompañarte cuando lo necesites.",
            imagen: "beneficios/sedes.webp",
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
            pregunta: "¿Cuándo empiezan las clases?",
            respuesta:
                "Las clases del ciclo lectivo 2027 empiezan entre la primera y segunda semana de marzo dependiendo tu carrera. Inscribite ahora y asegurá tu lugar en UCASAL.",
        },
        {
            pregunta:
                "¿Qué medios de pago están disponibles y qué tipo de becas ofrecen?",
            respuesta:
                "UCASAL ofrece planes de financiamiento a partir de las cuotas sin interés, además de tener un amplio sistema de becas para cada situación particular. Consultá con un asesor y accedé a distintas opciones para empezar tu carrera universitaria.",
        },
        {
            pregunta: "¿Tengo que pagar derecho de exámen para rendir?",
            respuesta:
                "No, en UCASAL solo se abona la matrícula de inscripción y una cuota mensual. Los exámenes parciales y finales son sin cargo.",
        },
        {
            pregunta:
                "¿Puedo solicitar equivalencias si ya cursé en otra universidad?",
            respuesta:
                "Sí, en UCASAL podés solicitar equivalencias de materias cursadas en otras instituciones, consultá en nuestra web o contactá a un asesor para validarlas.",
        },
        {
            pregunta:
                "¿Hay laboratorios, talleres o clínicas donde pueda poner en práctica mi carrera?",
            respuesta:
                "Sí, UCASAL cuenta con espacios equipados para que te formes en tu área a partir de la práctica y no solo con la teoría.",
        },
    ],
    online: [
        {
            pregunta: "¿Cuándo empiezan las clases?",
            respuesta:
                "Las clases del ciclo lectivo 2027 empiezan entre la primera y segunda semana de marzo dependiendo tu carrera. Inscribite ahora y asegurá tu lugar en UCASAL.",
        },
        {
            pregunta:
                "¿Qué medios de pago están disponibles y qué tipo de becas ofrecen?",
            respuesta:
                "UCASAL ofrece planes de financiamiento a partir de las cuotas sin interés, además de tener un amplio sistema de becas para cada situación particular. Consultá con un asesor y accedé a distintas opciones para empezar tu carrera universitaria.",
        },
        {
            pregunta: "¿Tengo que pagar derecho de exámen para rendir?",
            respuesta:
                "No, en UCASAL solo se abona la matrícula de inscripción y una cuota mensual. Los exámenes parciales y finales son sin cargo.",
        },
        {
            pregunta: "¿Cómo es la modalidad online?",
            respuesta:
                "El cursado online se realiza a través del campus virtual de UCASAL, donde podés acceder a clases grabadas, foros y material de estudio las 24 horas. Además contás a partir de la plataforma el contacto directo con docentes y compañeros.",
        },
        {
            pregunta:
                "¿Puedo solicitar equivalencias si ya cursé en otra universidad?",
            respuesta:
                "Sí, en UCASAL podés solicitar equivalencias de materias cursadas en otras instituciones, consultá en nuestra web o contactá a un asesor para validarlas.",
        },
        {
            pregunta: "¿Cómo y dónde se rinden los exámenes?",
            respuesta:
                "Los trabajos prácticos y parciales se realizan a través de la plataforma virtual. Los exámenes finales pueden ser virtuales si vivís lejos de una sede o presenciales en la sede más cercana a tu localidad.",
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
