import { de } from "zod/locales";

const data = [
    // ── SEDE A ──
    {
        codcar: 16,
        sector: 3,
        slug: "abogacia",
        nombre: "Abogacía",
        descripcion: "La carrera de Abogacía forma profesionales con capacidad para asesorar y representar a personas u organizaciones en la resolución de conflictos jurídicos. Los estudiantes dominan herramientas de derecho civil, penal, comercial, procesal y constitucional, junto con técnicas de argumentación y litigación. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones fundamentadas en el ámbito público y privado.",
        duracion: "5 años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Patrocinar y representar a clientes en litigios judiciales y extrajudiciales.",
                "Asesorar legalmente a personas, empresas e instituciones públicas o privadas.",
                "Intervenir en la mediación, negociación y resolución alternativa de conflictos.",
                "Redactar e interpretar contratos, convenios y dictámenes jurídicos.",
                "Analizar y aplicar la normativa vigente en materia civil, penal, comercial, laboral y administrativa.",
                "Desempeñarse en la función pública, la carrera judicial o la investigación jurídica.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Introducción a la Filosofía",
                    "Historia Constitucional Argentina",
                    "Introducción al Derecho",
                    "Derecho Privado Parte General",
                    "Sociología",
                    "Derecho Romano",
                    "Derecho Político",
                    "Lógica y Argumentación Jurídica"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Teología I",
                    "Derecho Penal Parte General",
                    "Teoría General de las Obligaciones",
                    "Constitución, Derechos Humanos y Garantías",
                    "Metodología de la Investigación",
                    "Economía Política",
                    "Derecho de Daños y Responsabilidad",
                    "Derecho Constitucional del Poder"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Teología II",
                    "Derecho Penal Parte Especial",
                    "Derecho Procesal Civil I",
                    "Teoría General de Contratos",
                    "Derecho Empresarial",
                    "Derecho Procesal Civil II",
                    "Derecho Comercial de los Usuarios y Consumidores",
                    "Derecho Ambiental y de los Recursos Naturales",
                    "Seminario Electivo I",
                    "Contratos en Particular"
                ]
            },
            {
                semestre: "4° Año",
                materias: [
                    "Derecho Procesal Penal I",
                    "Derecho Administrativo",
                    "Derechos Reales",
                    "Práctica Profesional I",
                    "Doctrina Social de la Iglesia",
                    "Derecho Procesal Penal II",
                    "Derecho Societario",
                    "Derecho Individual y Colectivo del Trabajo y de la Seguridad Social",
                    "Derecho Internacional Público y de la Integración",
                    "Métodos Participativos de Resolución de Conflictos"
                ]
            },
            {
                semestre: "5° Año",
                materias: [
                    "Práctica Profesional II",
                    "Filosofía del Derecho",
                    "Derecho de Familia",
                    "Derecho Concursal",
                    "Derecho Público Provincial y Municipal",
                    "Derecho Financiero y Tributario",
                    "Ética Profesional",
                    "Derecho Internacional Privado",
                    "Derecho Sucesorio",
                    "Seminario Electivo II"
                ]
            }
        ]
    },
    {
        codcar: 244,
        sector: 3,
        slug: "corredor-inmobiliario-y-martillero-publico",
        nombre: "Corredor Inmobiliario y Martillero Público",
        descripcion: "La carrera de Corredor Inmobiliario y Martillero Público de UCASAL forma profesionales capacitados para gestionar operaciones inmobiliarias, realizar tasaciones y peritajes, y actuar como auxiliares de la justicia en remates y ejecuciones de sentencias, además de gestionar trámites de inscripción registral.",
        duracion: "2 años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Intermediar en operaciones de compra, venta, permuta y alquiler de bienes inmuebles.",
                "Tasar bienes muebles, inmuebles, marcas, patentes y derechos con criterio técnico y conocimiento del mercado.",
                "Organizar, ejecutar y dirigir subastas y remates públicos, privados y judiciales.",
                "Asesorar de manera integral a clientes en negocios inmobiliarios, contractuales y de inversión.",
                "Interpretar y aplicar la normativa legal, fiscal y urbana vinculada a la actividad comercial e inmobiliaria.",
                "Gestionar y administrar emprendimientos, fideicomisos y desarrollos inmobiliarios.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Filosofía",
                    "Matemática y Estadística",
                    "Informática",
                    "Principios de Remates y Corretaje",
                    "Principios de Tasación",
                    "Derecho Privado I (Civil)",
                    "Teología",
                    "Introducción Matemática Financiera",
                    "Contabilidad y Administración",
                    "Derecho Privado II (Contratos y Obligaciones)",
                    "Derecho Privado III (Derecho Comercial)",
                    "Topografía y Geodesia"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Negociación Comercial",
                    "Tasación y Venta de Inmuebles",
                    "Remates y Subastas",
                    "Aspectos Financieros de Negocios Inmobiliarios",
                    "Marketing Inmobiliario",
                    "Principios de Derecho Procesal",
                    "Principios de Arquitectura, Construcción y Urbanismo",
                    "Ética y Práctica Profesional",
                    "Tasación y Venta de Bienes Muebles y Semovientes",
                    "Evaluación de Proyectos Inmobiliarios",
                    "Administración de Consorcios",
                    "Elementos de Derecho Registral"
                ]
            }
        ]
    },
    {
        codcar: 14,
        sector: 2,
        slug: "contador-publico",
        nombre: "Contador Público",
        descripcion: "La carrera de Contador Público de UCASAL forma profesionales con sólida base en contabilidad, costos, impuestos, auditoría y gestión de organizaciones. Los egresados pueden actuar como peritos en el ámbito judicial y ejercer de forma independiente o en relación de dependencia, en organizaciones públicas y privadas, asesorando y liderando procesos administrativo-contables con criterio ético y humanístico.",
        duracion: "4 años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Diseñar, administrar e interpretar sistemas de información contable y financiera en organizaciones públicas y privadas.",
                "Elaborar, auditar y firmar estados contables y financieros de acuerdo con normas nacionales e internacionales.",
                "Asesorar en materia tributaria, liquidación de impuestos y planificación fiscal estratégica.",
                "Realizar auditorías internas y externas, peritajes judiciales y valuación de empresas.",
                "Dictaminar sobre la situación económico-financiera para la toma de decisiones empresariales.",
                "Gestionar costos, presupuestos y proyecciones financieras para optimizar la rentabilidad.",
                "Ejercer la consultoría gerencial, el liderazgo de equipos financieros y el ejercicio libre de la profesión.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Filosofía",
                    "Historia Económica",
                    "Matemáticas I",
                    "Introducción a la Economía I",
                    "Administración I",
                    "Contabilidad I",
                    "Derecho Civil I",
                    "Geografía Económica",
                    "Matemáticas II",
                    "Introducción a la Economía II",
                    "Administración II",
                    "Contabilidad II",
                    "Derecho Civil II"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Teología",
                    "Inglés Técnico",
                    "Matemáticas III",
                    "Economía I",
                    "Contabilidad III",
                    "Derecho Constitucional",
                    "Matemática Financiera",
                    "Economía II",
                    "Gestión de Empresas",
                    "Contabilidad IV",
                    "Derecho Administrativo"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Doctrina Social de la Iglesia",
                    "Costos y Presupuestos",
                    "Finanzas Públicas",
                    "Estadística",
                    "Administración Financiera I",
                    "Análisis e Interpretación de Estados Contables",
                    "Derecho Comercial I",
                    "Metodología de la Investigación",
                    "Administración Financiera II",
                    "Contabilidad Pública",
                    "Contabilidad Gerencial",
                    "Derecho Comercial II",
                    "Derecho Tributario"
                ]
            },
            {
                semestre: "4° Año",
                materias: [
                    "Ética Profesional",
                    "Sistemas Informáticos",
                    "Auditoría I",
                    "Actuación Profesional",
                    "Teoría y Técnica Impositiva I",
                    "Derecho del Trabajo y de la Seguridad Social",
                    "Auditoría de Sistemas",
                    "Auditoría II",
                    "Teoría y Técnica Impositiva II",
                    "Derecho Concursal"
                ]
            }
        ]
    },
    {
        codcar: 360,
        sector: 4,
        slug: "tecnicatura-en-seguridad-informatica",
        nombre: "Tecnicatura en Seguridad Informática",
        descripcion: "La Tecnicatura en Seguridad Informática de UCASAL forma profesionales capacitados para proteger sistemas, redes y datos de organizaciones públicas y privadas, identificando, evaluando y mitigando riesgos cibernéticos. La formación se orienta al trabajo como colaborador del profesional informático responsable del área TIC, con criterio analítico y adaptabilidad ante escenarios de alta incertidumbre.",
        duracion: "2½ años",
        modalidad: [7],
        perfilEgresado: {
            items: [
                "Administrar políticas y herramientas para proteger datos e infraestructuras.",
                "Monitorizar redes para detectar, mitigar y prevenir ciberamenazas.",
                "Realizar pruebas de vulnerabilidad en sistemas y aplicaciones.",
                "Colaborar en planes de contingencia y respuesta ante incidentes.",
                "Aplicar normativas y estándares internacionales de ciberseguridad.",
                "Configurar firewalls, sistemas de cifrado y detección de intrusos.",
                "Asesorar a organizaciones en el uso seguro de tecnologías.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Desarrollo de Aplicaciones",
                    "Componentes Informáticos",
                    "Almacenamiento de Datos",
                    "Política y Organización de la Seguridad",
                    "Formación Integral",
                    "Tecnología de las Comunicaciones I",
                    "Evaluación y Tratamiento de los Riesgos",
                    "Gestión de Activos de TI"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Tecnología de las Comunicaciones II",
                    "Servidores",
                    "Seguridad de los RRHH",
                    "Protección Física y Ambiental",
                    "Seguridad del Software",
                    "Gestión de las Comunicaciones y Operaciones",
                    "Control de Accesos",
                    "Forensia Digital"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Trabajo Final Integrador",
                    "Prueba de Suficiencia de Idioma Inglés",
                    "Prueba de Suficiencia en Matemática y Física",
                    "Adquisición, Desarrollo y Mantenimiento de Sistemas",
                    "Gestión de los Incidentes",
                    "Continuidad y Cumplimiento"
                ]
            }
        ]
    },
    {
        codcar: 355,
        sector: 3,
        slug: "escribania",
        nombre: "Escribanía",
        descripcion: "La carrera de Escribanía de UCASAL forma profesionales habilitados para ejercer la función notarial: confeccionar y autorizar instrumentos públicos, asesorar en materia notarial e instrumental, redactar documentos privados y realizar el estudio de títulos dominiales inmobiliarios. La formación combina bases teórico-prácticas del derecho civil, registral y notarial, con un fuerte compromiso ético y responsabilidad social como funcionario público.",
        duracion: "4½ años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Redactar y autorizar escrituras públicas, contratos y documentos notariales.",
                "Dar fe pública de actos, hechos y negocios jurídicos.",
                "Asesorar a las partes sobre el encuadre legal de sus acuerdos.",
                "Tramitar e inscribir actos en el Registro de la Propiedad e inmuebles.",
                "Autenticar firmas, fotocopias y certificar la validez de documentos.",
                "Intervenir en la constitución de sociedades, fideicomisos y actas notariales.",
                "Ejercer la función notarial respetando la ética y la normativa vigente.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Introducción al Derecho",
                    "Derecho Privado Parte General",
                    "Historia Constitucional Argentina",
                    "Introducción a la Filosofía",
                    "Teología I",
                    "Derecho Constitucional, Derechos Humanos y Garantías",
                    "Metodología de la Investigación",
                    "Sociología"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Teología I",
                    "Teoría General de las Obligaciones",
                    "Elementos del Derecho Penal",
                    "Teología II",
                    "Derecho Empresarial",
                    "Economía Política",
                    "Derecho de Daños y Responsabilidad",
                    "Derecho Comercial y de los Usuarios y Consumidores",
                    "Derecho Ambiental y de los Recursos Naturales"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Teoría General de los Contratos",
                    "Teoría Gral. del Proceso y Métodos de Resolución de Conflictos",
                    "Derecho Societario",
                    "Derecho Administrativo",
                    "Contratos en Particular",
                    "Derecho de las Nuevas Tecnologías",
                    "Doctrina Social de la Iglesia",
                    "Derecho Internacional",
                    "Redacción Documental y Notarial"
                ]
            },
            {
                semestre: "4° Año",
                materias: [
                    "Derechos Reales",
                    "Derecho Notarial",
                    "Derecho Individual y Colectivo del Trabajo y de la Seguridad Social",
                    "Derecho de Familia",
                    "Derecho Registral",
                    "Ética Profesional",
                    "Derecho Sucesorio",
                    "Derecho Concursal",
                    "Práctica Registral",
                    "Práctica Notarial"
                ]
            },
            {
                semestre: "5° Año",
                materias: [
                    "Práctica Registral",
                    "Práctica Notarial",
                    "Derecho Financiero y Tributario"
                ]
            }
        ]
    },
    {
        codcar: 11,
        sector: 2,
        slug: "administracion-de-empresas",
        nombre: "Licenciatura en Administración de Empresas",
        descripcion: "La Licenciatura en Administración de Empresas de UCASAL forma profesionales capacitados para gestionar organizaciones de todo tipo y tamaño, con dominio de planificación estratégica, recursos humanos, finanzas, marketing y operaciones. Combina teoría y práctica para desarrollar liderazgo y toma de decisiones en entornos dinámicos, tanto en empresas privadas como en organismos públicos.",
        duracion: "4 años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Planificar, dirigir y controlar la gestión integral de todo tipo de organizaciones.",
                "Formular y evaluar proyectos de inversión y planes de negocios estratégicos.",
                "Tomar decisiones financieras, operativas y de comercialización con visión global.",
                "Liderar equipos de trabajo, optimizar procesos y gestionar el talento humano.",
                "Diseñar estrategias de innovación, transformación digital y desarrollo empresarial.",
                "Analizar mercados y entornos económicos para identificar oportunidades de negocio.",
                "Ejercer la consultoría gerencial y el asesoramiento ejecutivo a empresas.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Filosofía",
                    "Historia Económica",
                    "Matemáticas I",
                    "Introducción a la Economía I",
                    "Administración I",
                    "Contabilidad I",
                    "Derecho Civil I",
                    "Geografía Económica",
                    "Matemáticas II",
                    "Introducción a la Economía II",
                    "Administración II",
                    "Contabilidad II",
                    "Derecho Civil II"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Teología",
                    "Inglés Técnico",
                    "Matemáticas III",
                    "Microeconomía",
                    "Administración III",
                    "Contabilidad III",
                    "Derecho Constitucional",
                    "Matemática Financiera",
                    "Macroeconomía",
                    "Sistemas de Información",
                    "Contabilidad IV",
                    "Derecho Administrativo"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Doctrina Social de la Iglesia",
                    "Costos y Presupuestos",
                    "Comercialización I",
                    "Estadística",
                    "Administración Financiera I",
                    "Análisis e Interpretación de Estados Contables",
                    "Derecho Comercial I",
                    "Metodología de la Investigación",
                    "Comercialización II",
                    "Administración Financiera II",
                    "Planeamiento Estratégico",
                    "Derecho Comercial II"
                ]
            },
            {
                semestre: "4° Año",
                materias: [
                    "Trabajo Final de Graduación",
                    "Ética Profesional",
                    "Régimen Tributario",
                    "Métodos y Modelos Decisionales",
                    "Administración de la Producción y de las Operaciones",
                    "Gestión de las Personas en las Organizaciones I",
                    "Derecho del Trabajo y de la Seguridad Social",
                    "Seminarios de Actualización y Tendencias Profesionales",
                    "Formulación y Evaluación de Proyectos",
                    "Control de Gestión",
                    "Dirección Estratégica",
                    "Gestión de las Personas en las Organizaciones II"
                ]
            }
        ]
    },
    {
        codcar: 383,
        sector: 4,
        slug: "tecnicatura-en-operaciones-mineras-e-industriales",
        nombre: "Tecnicatura en Operaciones Mineras e Industriales",
        descripcion: "La Tecnicatura en Operaciones Mineras e Industriales de UCASAL forma profesionales capacitados para seleccionar, operar y mantener equipos de los procesos industriales del sector minero, cumpliendo procedimientos, buenas prácticas y normativas de seguridad y cuidado ambiental. Incluye formación en mantenimiento preventivo y correctivo de equipos e identificación de riesgos, con salida laboral en empresas mineras de gran envergadura.",
        duracion: "2½ años",
        modalidad: [7],
        perfilEgresado: {
            items: [
                "Supervisar y controlar los procesos operativos de extracción y procesamiento de minerales.",
                "Aplicar y hacer cumplir las normas de seguridad, higiene y protección ambiental en mina.",
                "Asistir en la planificación, logística y coordinación del trabajo en yacimientos.",
                "Controlar el uso, mantenimiento y operación eficiente de maquinaria e insumos mineros.",
                "Tomar y procesar muestras para el control de calidad en laboratorios o campo.",
                "Colaborar en el análisis de riesgos y en la respuesta ante emergencias operativas.",
                "Coordinar equipos de trabajo operarios respetando los estándares de la industria.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Introducción a la Minería",
                    "Química para Minería",
                    "Introducción a la Termodinámica",
                    "Gestión de Mantenimiento",
                    "Filosofía",
                    "Higiene y Seguridad en el Sector Minero",
                    "Manejo de Recurso Humano",
                    "Herramientas para la Gestión 1",
                    "Máquinas Térmicas"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Estadística Aplicada: Análisis y Procesamiento de Datos",
                    "Electricidad y Electrónica Industrial",
                    "Gestión de Activos Físicos",
                    "Medio Ambiente y Gestión de la Calidad en Minería",
                    "Teología",
                    "Doctrina Social de la Iglesia",
                    "Elementos de Máquinas",
                    "Instalaciones Auxiliares",
                    "Instrumentación, Control y Automatización"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Mecánica de Fluidos Aplicada",
                    "Técnicas de Mantenimiento Predictivas",
                    "Tribología y Lubricación",
                    "Selección de Equipo Pesado Minero",
                    "Ética Ambiental",
                    "Trabajo Final Integrador",
                    "Prueba de Suficiencia en Idioma Inglés",
                    "Prueba de Suficiencia en Matemática y Física"
                ]
            }
        ]
    },
    {
        codcar: 138,
        sector: 4,
        slug: "higiene-y-seguridad",
        nombre: "Licenciatura en Higiene y Seguridad",
        descripcion: "La Licenciatura en Higiene y Seguridad en el Trabajo de UCASAL forma profesionales capacitados para diseñar, implementar y liderar programas de prevención y protección de riesgos laborales, cuidando la integridad de las personas y los recursos materiales y ambientales de las organizaciones. La carrera ofrece título intermedio de Técnico en Higiene y Seguridad en el Trabajo.",
        duracion: "4 años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Diseñar, evaluar y gestionar programas integrales de prevención de riesgos laborales e higiene industrial.",
                "Planificar y supervisar normas de seguridad en obras, industrias y establecimientos públicos o privados.",
                "Diagnosticar, medir y controlar factores de riesgo ambiental, físico, químico, biológico y ergonómico.",
                "Elaborar planes de contingencia, gestión de emergencias y protocolos de evacuación.",
                "Investigar accidentes y enfermedades profesionales para establecer medidas correctivas y preventivas.",
                "Capacitar al personal en normativas de seguridad, salud ocupacional y uso de elementos de protección.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Psicología Laboral",
                    "Sociología y Ética",
                    "Álgebra",
                    "Organización Industrial",
                    "Medicina Laboral, Biomecánica y Fisiología del Trabajo",
                    "Seguridad Industrial I (Organización y Prevención- Normas Auditoría)",
                    "Relaciones Humanas I",
                    "Toxicología Laboral y Control de Contaminantes",
                    "Tratamientos de Residuos I",
                    "Física I",
                    "Seguridad Industrial II",
                    "Seguridad Industrial III",
                    "Relaciones Humanas II"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Estudio del Trabajo",
                    "Ambiente del Trabajo I (Iluminación y Color - Colores de Seguridad)",
                    "Química I",
                    "Estadísticas y Costos Aplicados a la Higiene y Seguridad",
                    "Higiene Industrial (Ruido y Vibraciones)",
                    "Ergonomía",
                    "Metodología de la Investigación",
                    "Trabajo de Campo Integrador",
                    "Ambiente del Trabajo II (Ventilación - Control de la Contaminación y Carga Térmica)",
                    "Selección y Capacitación",
                    "Derecho Laboral",
                    "Seguridad Industrial IV (Incendio y Explosión - Evacuación)",
                    "Seguridad Industrial V (Protección Personal - Protección Radiológica)",
                    "Análisis de Riesgos"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Filosofía",
                    "Tratamientos de Residuos II",
                    "Ambiente del Trabajo III",
                    "Inglés I",
                    "Sistemas de Representación y Fundamentos de Informática I",
                    "Física II",
                    "Gestión Ambiental I",
                    "Análisis Matemático",
                    "Química II",
                    "Sistemas de Representación y Fundamentos de Informática II",
                    "Administración Estratégica",
                    "Recursos Humanos"
                ]
            },
            {
                semestre: "4° Año",
                materias: [
                    "Teología",
                    "Gestión Ambiental II",
                    "Inglés II",
                    "Termodinámica",
                    "Tecnología de Materiales",
                    "Seguridad en el Manejo",
                    "Doctrina Social",
                    "Didáctica de la Educación Laboral",
                    "Tesis",
                    "Incendios",
                    "Introducción a la Dirección Financiera",
                    "Formulación y Evaluación de Proyectos",
                    "Máquinas y Herramientas"
                ]
            }
        ]
    },
    // ── SEDE B ──
    {
        codcar: 96,
        sector: 2,
        slug: "tecnicatura-univ-en-gestion-de-calidad",
        nombre: "Tecnicatura Univ. en Gestión de Calidad",
        descripcion: "La Tecnicatura Universitaria en Gestión de Calidad de UCASAL forma profesionales capacitados para diseñar, implementar y auditar sistemas de gestión de calidad, seguridad y medio ambiente según normas ISO. Incluye control estadístico de procesos, buenas prácticas de manufactura, mejora continua y auditorías internas, con salida laboral en empresas industriales, de servicios y organismos públicos.",
        duracion: "2½ años",
        modalidad: [7],
        perfilEgresado: {
            items: [
                "Diseñar, implementar y auditar sistemas de gestión de calidad bajo normas ISO.",
                "Controlar y optimizar procesos productivos y de servicios para asegurar estándares.",
                "Medir y analizar indicadores de calidad para promover la mejora continua.",
                "Elaborar manuales de procedimientos, protocolos y documentación técnica.",
                "Prevenir fallas, reducir desperdicios y gestionar los riesgos operativos.",
                "Capacitar al personal en buenas prácticas, seguridad y cultura de calidad.",
                "Asesorar a empresas e instituciones en la certificación y acreditación de procesos.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Filosofía",
                    "Análisis Matemático",
                    "Análisis de Costos",
                    "Administración Estratégica",
                    "Introducción a la Calidad",
                    "Buenas Prácticas de Manufactura",
                    "Teología",
                    "Buenas Prácticas Agrícolas",
                    "Sistema de Gestión Ambiental",
                    "Costos Relacionados con la Calidad",
                    "Estadística I (Descriptiva)",
                    "Sistema de Gestión de Salud y Seguridad"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Informática",
                    "Estadística II (Inferencial)",
                    "Auditoría Operativa",
                    "Herramientas de Calidad I",
                    "Sistema de Gestión de Calidad",
                    "Derecho del Consumidor",
                    "Inglés",
                    "Requisitos Laborales y de Ensayo",
                    "Herramientas de Calidad II",
                    "Normas IRAM Sector I",
                    "Satisfacción del Cliente",
                    "Sistema Integrado de Gestión"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Trabajo Final Integrador",
                    "Seminario de Trabajo Final",
                    "Responsabilidad Social Empresaria",
                    "Normas IRAM Sector II",
                    "Normas IRAM Sector III",
                    "Mejora Continua",
                    "HACCP"
                ]
            }
        ]
    },
    {
        codcar: 336,
        sector: 2,
        slug: "recursos-humanos",
        nombre: "Licenciatura en Recursos Humanos",
        descripcion: "La Licenciatura en Recursos Humanos de UCASAL forma profesionales capacitados para gestionar integralmente el capital humano de las organizaciones: procesos de selección, capacitación, desarrollo, evaluación de desempeño, remuneraciones y relaciones laborales. Combina psicología organizacional, derecho laboral y herramientas de gestión, con título intermedio de Analista Universitario en Recursos Humanos.",
        duracion: "4 años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Diseñar y gestionar estrategias de atracción, selección e inducción del talento.",
                "Administrar planes de capacitación, desarrollo profesional y evaluación del desempeño.",
                "Liderar la comunicación interna, el clima organizacional y la cultura corporativa.",
                "Gestionar las relaciones laborales, la negociación colectiva y el marco legal del trabajo.",
                "Planificar políticas de compensación, beneficios y estructura salarial.",
                "Diseñar programas de bienestar, seguridad ocupacional y retención del personal.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Filosofía",
                    "Psicología I",
                    "Comprensión y Producción de Textos",
                    "Principios de Economía",
                    "Introducción a la Administración de las Organizaciones",
                    "Historia Social y Económica",
                    "Tecnologías de Información y Comunicación (TICS)",
                    "Sistemas Administrativocontables",
                    "Introducción a los Recursos Humanos",
                    "Redacción y Estilo",
                    "Introducción a las Relaciones Públicas"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Introducción al Pensamiento Cristiano",
                    "Psicología II",
                    "Economía Laboral",
                    "Derecho del Trabajo",
                    "Teorías de la Comunicación",
                    "Sistemas de Información y Control",
                    "Costos y Control Presupuestario",
                    "Estadística Aplicada",
                    "Desarrollo Organizacional",
                    "Derecho Procesal Laboral, Arbitraje y Conflicto Laboral"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Doctrina Social Cristiana",
                    "Sociología del Trabajo",
                    "Reclutamiento y Selección",
                    "Administración de Remuneraciones y Beneficios- I",
                    "Higiene, Seguridad en el Trabajo",
                    "Metodología de la Investigación I",
                    "Prueba de Suficiencia de Lengua Inglesa",
                    "Análisis Financiero",
                    "Capacitación y Desarrollo",
                    "Administración Estratégica",
                    "Estrategias de Negociación y Resolución de Conflictos",
                    "Administración de Remuneraciones y Beneficios- II"
                ]
            },
            {
                semestre: "4° Año",
                materias: [
                    "Ética Profesional y Responsabilidad Social",
                    "Metodología de la Investigación II",
                    "Dirección de Marketing",
                    "Dirección y Planificación Estratégica de Recursos Humanos",
                    "Relaciones Laborales",
                    "Seminario de Actualización",
                    "Trabajo Final de Graduación",
                    "Gestión de Calidad",
                    "Recursos Humanos Basados en Competencias",
                    "Auditoría de Recursos Humanos"
                ]
            }
        ]
    },
    {
        codcar: 10,
        sector: 2,
        slug: "economia",
        nombre: "Licenciatura en Economía",
        descripcion: "La Licenciatura en Economía de UCASAL forma profesionales capacitados para relacionar teorías, modelos y métodos económicos con organizaciones públicas y privadas, comprendiendo fenómenos micro y macroeconómicos para asesorar sobre la marcha de la economía y el diseño de políticas económicas. La formación habilita el desempeño en el sector público, las finanzas, la economía de empresas y el comercio exterior.",
        duracion: "4 años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Analizar y proyectar variables macroeconómicas y microeconómicas para la toma de decisiones.",
                "Diseñar, evaluar y ejecutar políticas públicas y proyectos de inversión pública o privada.",
                "Diagnosticar el funcionamiento de mercados locales e internacionales y tendencias financieras.",
                "Asesorar a empresas e instituciones en planificación estratégica y gestión de riesgos.",
                "Desarrollar modelos econométricos para el análisis cuantitativo de datos económicos.",
                "Evaluar el impacto económico de regulaciones, normativas y transformaciones globales.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Historia Económica",
                    "Matemáticas I",
                    "Introducción a la Economía I",
                    "Administración I",
                    "Contabilidad I",
                    "Geografía Económica",
                    "Matemáticas II",
                    "Geometría Analítica",
                    "Introducción a la Economía II",
                    "Administración II",
                    "Contabilidad II"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Inglés Técnico",
                    "Matemáticas III",
                    "Microeconomía",
                    "Contabilidad III",
                    "Derecho Constitucional",
                    "Matemática Financiera",
                    "Macroeconomía",
                    "Administración Tributaria",
                    "Contabilidad IV",
                    "Derecho Político"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Comercio Internacional",
                    "Costos",
                    "Microeconomía Avanzada",
                    "Estadística",
                    "Análisis e Interpretación de Estados Contables",
                    "Metodología de la Investigación",
                    "Sociología Económica",
                    "Matemáticas para Economistas",
                    "Ciclos Económicos",
                    "Finanzas Públicas y Política Fiscal"
                ]
            },
            {
                semestre: "4° Año",
                materias: [
                    "Ética Profesional",
                    "Desarrollo Económico",
                    "Política Económica",
                    "Economía Cuantitativa I",
                    "Administración Financiera",
                    "Antropología Económica",
                    "Teoría Monetaria",
                    "Sistemas Económicos Comparados",
                    "Economía Cuantitativa II",
                    "Estructura Económica",
                    "Contabilidad Nacional"
                ]
            }
        ]
    },
    {
        codcar: 15,
        sector: 2,
        slug: "comercializacion",
        nombre: "Licenciatura en Comercialización",
        descripcion: "La Licenciatura en Comercialización de UCASAL forma profesionales capacitados para diseñar y desarrollar estrategias y acciones comerciales, analizando fenómenos del consumo para posicionar organizaciones en mercados nacionales e internacionales mediante herramientas de marketing digital. Incluye investigación de mercados, estrategias de productos y precios, planificación de ventas y comercialización internacional, con título intermedio de Analista en Marketing.",
        duracion: "4 años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Diseñar e implementar planes de marketing integrales y estrategias de ventas.",
                "Analizar el mercado, tendencias de consumo y el comportamiento de los clientes.",
                "Desarrollar estrategias de posicionamiento, fijación de precios y lanzamiento de productos.",
                "Liderar campañas de marketing digital, comercio electrónico y redes sociales.",
                "Gestionar la comunicación de marca, relaciones públicas y la experiencia del cliente.",
                "Planificar canales de distribución, logística comercial y alianzas estratégicas.",
                "Evaluar métricas comerciales e indicadores clave para optimizar la rentabilidad del negocio.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Inglés",
                    "Informática",
                    "Microeconomía",
                    "Análisis Cuantitativo",
                    "Fundamentos de Marketing",
                    "Innovación y Creatividad Empresarial",
                    "Estrategias de Textos Comerciales",
                    "Tecnología de la Información y la Comunicación (TIC)",
                    "Macroeconomía",
                    "Comportamiento del Consumidor",
                    "Estrategias de Producto y Servicios",
                    "Administración Estratégica"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Filosofía",
                    "Antropología del Consumidor",
                    "Metodología de la Investigación",
                    "Estadística",
                    "Gestión de Procesos y Calidad",
                    "Sistemas de Información Contable",
                    "Teología",
                    "Estrategias de Distribución",
                    "Sistema de Información Financiera",
                    "Investigación de Mercados I",
                    "Neuromarketing",
                    "Aspectos Legales de los Negocios"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Costos y Presupuestos",
                    "Negocios Internacionales",
                    "Investigación de Mercado II",
                    "Técnicas de Ventas",
                    "Estrategias de Comunicación",
                    "Endomarketing",
                    "Doctrina Social de la Iglesia",
                    "Estrategias de Precio",
                    "Inteligencia y Negociación Empresarial",
                    "Escenarios de Negocios",
                    "Marketing Personal",
                    "Marketing Digital",
                    "Diseño Gráfico y Publicitario"
                ]
            },
            {
                semestre: "4° Año",
                materias: [
                    "Ética Profesional",
                    "Formulación y Evaluación de Proyectos",
                    "Marketing Estratégico",
                    "Plan de Marketing",
                    "Social Media Marketing",
                    "Seminario de Actualización",
                    "Trabajo Final de Graduación",
                    "Plan de Negocio Digital",
                    "Marketing Sectorial",
                    "Taller de Emprendedurismo"
                ]
            }
        ]
    },
    {
        codcar: 161,
        sector: 2,
        slug: "tec-universitaria-en-gestion-de-bancos-empresas-financieras-y-de-seguros",
        nombre: "Tecnicatura Univ. en Gestión de Bancos, Empresas Financieras y de Seguros",
        descripcion: "La Tecnicatura en Gestión de Bancos, Empresas Financieras y de Seguros de UCASAL forma profesionales capacitados para operar procesos administrativos en entidades financieras y aseguradoras, participar en la formulación de planes de negocio, intervenir en la comercialización de productos financieros y de seguros, y asesorar a clientes según sus necesidades. Título de pregrado, con validez nacional.",
        duracion: "3 años",
        modalidad: [7],
        perfilEgresado: {
            items: [
                "Administrar operaciones comerciales, bancarias, financieras y del mercado asegurador.",
                "Asesorar a clientes en la elección de productos financieros, de inversión y coberturas de seguros.",
                "Evaluar y gestionar solicitudes de crédito, riesgos crediticios y carteras de clientes.",
                "Colaborar en la liquidación, tramitación y seguimiento de siniestros e indemnizaciones.",
                "Aplicar normativas vigentes del sistema financiero, bursátil y de la Superintendencia de Seguros.",
                "Diseñar e implementar estrategias comerciales para la fidelización de clientes.",
                "Analizar indicadores económico-financieros para optimizar la toma de decisiones institucionales.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Matemática",
                    "Economía",
                    "Administración de Organizaciones",
                    "Instituciones de Derecho Civil y Comercial",
                    "Filosofía",
                    "Sistema Financiero",
                    "Marco Legal de los Seguros",
                    "Matemática Financiera",
                    "Contabilidad Aplicada"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Estadística",
                    "Teología",
                    "Seguros Patrimoniales I (Seguros de Cosas)",
                    "Análisis de Estados Contables",
                    "Productos y Servicios del Sistema Financiero",
                    "Administración Financiera",
                    "Calidad y Experiencia en Clientes",
                    "Seguros Patrimoniales II (Seguros de Responsabilidad Civil)",
                    "Estrategias de Marketing",
                    "Doctrina Social de la Iglesia"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Seguros sobre Personas",
                    "Mercado de Capitales",
                    "Venta Consultiva",
                    "Gestión y Control Financiero",
                    "Ética Profesional",
                    "Operaciones Financieras",
                    "Transformación Digital y Omnicanalidad",
                    "Dirección Estratégica",
                    "Inglés Técnico",
                    "Práctica Profesional (1)"
                ]
            }
        ]
    },
    {
        codcar: 147,
        sector: 2,
        slug: "licenciatura-finanzas",
        nombre: "Licenciatura en Finanzas",
        descripcion: "La Licenciatura en Finanzas propone una formación sólida para comprender, analizar y gestionar decisiones financieras en organizaciones, mercados e instituciones. El plan articula conocimientos de finanzas, economía, administración, matemática, estadística, econometría y normativa con una capa tecnológica diferencial: ciencia de datos e inteligencia artificial aplicada a las finanzas.",
        duracion: "4 años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Analizar mercados financieros, tasas y activos de renta fija y variable.",
                "Diseñar y evaluar proyectos de inversión y financiamiento.",
                "Aplicar herramientas de econometría, estadística y ciencia de datos a las finanzas.",
                "Gestionar riesgos financieros en empresas, bancos y otras instituciones.",
                "Interpretar estados contables y valuar activos y empresas.",
                "Actuar con criterio ético y responsabilidad profesional en la toma de decisiones financieras."
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Filosofía",
                    "Matemáticas I",
                    "Microeconomía",
                    "Administración I",
                    "Finanzas I",
                    "Derecho Civil",
                    "Matemáticas II",
                    "Macroeconomía",
                    "Administración II",
                    "Finanzas II",
                    "Inglés I"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Teología",
                    "Impuestos",
                    "Estadística I",
                    "Finanzas Internacionales",
                    "Derecho Comercial y Societario",
                    "Matemática Financiera",
                    "Estadística II",
                    "Formulación y Evaluación de Proyectos",
                    "Inglés II",
                    "Instituciones del Sistema Financiero"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Pensamiento Social Cristiano",
                    "Econometría I",
                    "Política Monetaria y Fiscal",
                    "Contabilidad General",
                    "Finanzas Públicas",
                    "Normativa del Mercado de Capitales",
                    "Econometría II",
                    "Análisis e Interpretación de los Estados Contables",
                    "Mercado de Capitales",
                    "Metodología de la Investigación",
                    "Sistema Bancario y No Bancario"
                ]
            },
            {
                semestre: "4° Año",
                materias: [
                    "Ética Profesional",
                    "IA Aplicada a las Finanzas",
                    "Ciencia de Datos I",
                    "Valuación de Activos Financieros, Títulos de Renta Fija y Renta Variable",
                    "Ciencia de Datos II",
                    "Seminario de Actualización Profesional",
                    "Valuación de Empresas",
                    "Inglés III",
                    "Trabajo Final Graduación"
                ]
            }
        ]
    },
    {
        codcar: 363,
        sector: 3,
        slug: "procuracion",
        nombre: "Procuración",
        descripcion: "La carrera de Procuración de UCASAL forma profesionales habilitados para actuar como auxiliares de la justicia, gestionando expedientes y trámites judiciales en distintos fueros. La formación abarca derecho procesal civil, comercial y laboral, redacción de escritos y seguimiento de actuaciones procesales, con salida laboral en estudios jurídicos, tribunales y organismos del Estado. Título de pregrado, con validez nacional.",
        duracion: "3 años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Representar a las partes en juicios civiles, comerciales, laborales y administrativos.",
                "Presentar y hacer seguimiento de escritos, cédulas, oficios y trámites judiciales.",
                "Tramitar expedientes en juzgados, tribunales y organismos públicos o privados.",
                "Diligenciar mandamientos, notificaciones y medidas cautelares interpuestas por abogados.",
                "Administrar y organizar la documentación, agendas y plazos de los procesos judiciales.",
                "Asesorar a clientes sobre la marcha y estado técnico-procesal de sus causas.",
                "Colaborar en estudios jurídicos optimizando la gestión de los procedimientos legales.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Introducción al Derecho",
                    "Derecho Privado Parte General",
                    "Historia Constitucional Argentina",
                    "Introducción a la Filosofía",
                    "Teología I",
                    "Derecho Constitucional, Derechos Humanos y Garantías",
                    "Lógica y Argumentación Jurídica",
                    "Sociología"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Teoría General de las Obligaciones",
                    "Elementos del Derecho Penal",
                    "Teología II",
                    "Derecho Empresarial",
                    "Doctrina Social de la Iglesia",
                    "Derecho de Daños y Responsabilidad",
                    "Derecho Comercial y, de los Usuarios y Consumidores",
                    "Teoría General de los Contratos",
                    "Derecho de las Nuevas Tecnologías"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Derecho Administrativo",
                    "Derechos Reales",
                    "Derecho Individual y Colectivo del Trabajo y de la Seguridad Social",
                    "Contratos en Particular",
                    "Teoría General de Proceso y Métodos de Resolución de Conflicto",
                    "Práctica Profesional",
                    "Taller de Redacción y Gestión Documental Administrativa, Notarial y Judicial",
                    "Derecho Societario",
                    "Derecho de Familia",
                    "Derecho Concursal",
                    "Derecho Sucesorio"
                ]
            }
        ]
    },
    {
        codcar: 378,
        sector: 8,
        slug: "tecn-univ-en-organizacion-y-direccion-de-eventos-y-ceremonial",
        nombre: "Tecnicatura Univ. en Organización y Dirección de Eventos y Ceremonial",
        descripcion: "La Tecnicatura Universitaria en Organización y Dirección de Eventos y Ceremonial forma profesionales con capacidad para planificar y coordinar encuentros institucionales y sociales. Los estudiantes dominan herramientas de protocolo, relaciones públicas, logística, presupuesto, ambientación y marketing estratégico. La carrera combina teoría y práctica para desarrollar líderes capaces de diseñar experiencias únicas en el sector público y privado.",
        duracion: "2 años",
        modalidad: [7],
        perfilEgresado: {
            items: [
                "Planificar, coordinar y dirigir eventos corporativos, sociales, culturales y oficiales.",
                "Aplicar normas de protocolo, ceremonial y etiqueta en el ámbito público y privado.",
                "Gestionar proveedores, presupuestos, logística y ambientación de cada encuentro.",
                "Diseñar planes de comunicación, relaciones públicas y difusión para eventos.",
                "Prevenir riesgos, coordinar la seguridad y elaborar planes de contingencia.",
                "Liderar equipos de trabajo y supervisar el desarrollo operativo en tiempo real.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Introducción a la Organización de Eventos",
                    "Relaciones Públicas",
                    "Taller de Comunicación",
                    "Fundamentos del Ceremonial",
                    "Filosofía",
                    "Planificación, Producción y Logística de Eventos",
                    "Gastronomía y Hospitalidad",
                    "Comunicación Digital y Manejo de Redes",
                    "Ceremonial Oficial y Diplomático"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Organización y Ceremonial de Eventos Empresariales y Sociales",
                    "Eventos Culturales, Educativos y Académicos",
                    "Dirección del Personal",
                    "Taller I: Imagen, Sonido y Montaje",
                    "Teología",
                    "Ceremonial Situado",
                    "Megaeventos",
                    "Estrategias de Marketing de Servicios",
                    "Taller II: Tecnología Aplicada a Eventos",
                    "Doctrina Social"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Empresas de Eventos",
                    "Eventos Digitales",
                    "Ética Profesional",
                    "Inglés Técnico",
                    "Práctica Profesional"
                ]
            }
        ]
    },
    // ── SEDE C ──
    {
        codcar: 196,
        sector: 3,
        slug: "licenciatura-en-seguridad",
        nombre: "Licenciatura en Seguridad - CCC",
        descripcion: "La Licenciatura en Seguridad forma profesionales con capacidad para diseñar y gestionar proyectos integrales de protección e intervención ciudadana. Los estudiantes dominan herramientas de gestión de riesgos, investigación operativa, legislación, políticas de seguridad y resolución de conflictos. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en organismos públicos y empresas privadas.",
        duracion: "2 años",
        modalidad: [7],
        perfilEgresado: {
            items: [
                "Diseñar y coordinar planes integrales de seguridad pública y privada.",
                "Asesorar en la gestión de riesgos, prevención del delito y protección patrimonial.",
                "Dirigir y supervisar equipos operativos y fuerzas de seguridad.",
                "Diseñar estrategias de respuesta rápida ante emergencias y manejo de crisis.",
                "Aplicar normativas legales, derechos humanos y procedimientos judiciales vigentes.",
                "Integrar auditorías de seguridad y auditorías en tecnologías de la información.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Doctrina Social de la Iglesia",
                    "Seminario I: Legislación sobre Seguridad",
                    "Introducción a la Seguridad",
                    "Derecho Constitucional",
                    "Derecho Procesal Civil, Comercial y Laboral",
                    "Psicología Criminal",
                    "Seminario II: Ética Profesional",
                    "Sociología Criminal",
                    "Seguridad Privada",
                    "Medicina del Trabajo",
                    "Criminalística"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Seminario III: Seguridad Vial",
                    "Estadística Aplicada",
                    "Criminología",
                    "Introducción a la Ciencia Política",
                    "Seguridad Pública",
                    "Relaciones Interpersonales e Institucionales",
                    "Trabajo Final Integrador",
                    "Seminario IV: Taller de Seguridad Informática",
                    "Economía",
                    "Planeamiento y Organización en Seguridad",
                    "Seguridad Bancaria",
                    "Seguridad Industrial"
                ]
            }
        ]
    },
    {
        codcar: 214,
        sector: 2,
        slug: "comercio-internacional",
        nombre: "Licenciatura en Comercio Internacional",
        descripcion: "La Licenciatura en Comercio Internacional forma profesionales con capacidad para gestionar operaciones y negocios en los mercados globales. Los estudiantes dominan herramientas de logística internacional, legislación aduanera, finanzas de comercio exterior, negociación e inteligencia comercial. La carrera combina teoría y práctica para desarrollar líderes capaces de diseñar estrategias de internacionalización en empresas e instituciones.",
        duracion: "4 años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Diseñar estrategias de internacionalización para empresas en mercados globales.",
                "Gestionar operaciones de importación, exportación, aduanas y logística.",
                "Analizar mercados externos, aranceles y tendencias del comercio global.",
                "Negociar con clientes, proveedores e instituciones internacionales.",
                "Aplicar la normativa legal, tributaria y cambiaria del comercio exterior.",
                "Evaluar la viabilidad y riesgos de proyectos de negocios internacionales.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Historia Política y Económica Universal",
                    "Inglés I",
                    "Microeconomía",
                    "Introducción al Comercio Exterior",
                    "Análisis Cuantitativo",
                    "Fundamentos de Marketing",
                    "Geografía Económica",
                    "Inglés II",
                    "Informática",
                    "Macroeconomía",
                    "Introducción a la Administración",
                    "Logística y Transporte I"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Filosofía",
                    "Inglés de Comercio Exterior I",
                    "Importación",
                    "Estadística",
                    "Gestión de Calidad",
                    "Sistemas de Información Contable",
                    "Introducción al Derecho",
                    "Teología",
                    "Inglés de Comercio Exterior II",
                    "Matemática Financiera",
                    "Investigación de Mercados Internacionales",
                    "Exportación",
                    "Logística y Transporte II",
                    "Aspectos Legales de los Negocios"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Metodología de la Investigación",
                    "Portugués I",
                    "Costos y Presupuestos",
                    "Economía Internacional",
                    "Clasificación Arancelaria y Valoración Aduanera",
                    "Marketing Internacional",
                    "Doctrina Social de la Iglesia",
                    "Trabajo de Aplicación",
                    "Portugués II",
                    "Régimen Tributario e Impositivo del Comercio Exterior",
                    "Integración y Cooperación Internacional",
                    "Aspectos Financieros y Bancarios",
                    "Marketing Digital"
                ]
            },
            {
                semestre: "4° Año",
                materias: [
                    "Ética Profesional",
                    "Alianzas Estratégicas para el Comercio Exterior",
                    "Agronegocios",
                    "Formulación y Evaluación de Proyectos de Comercio Exterior",
                    "Logística Comercial",
                    "Derecho Penal y Contencioso Aduanero",
                    "Seminario de Actualización",
                    "Taller de Investigación",
                    "Negociación Internacional",
                    "Taller de Emprendedurismo"
                ]
            }
        ]
    },
    {
        codcar: 133,
        sector: 2,
        slug: "administracion-agropecuaria",
        nombre: "Licenciatura en Administración Agropecuaria",
        descripcion: "La Licenciatura en Administración Agropecuaria forma profesionales capacitados para dirigir y optimizar negocios del sector agroindustrial. Los egresados dominan herramientas de gestión financiera, planificación estratégica, comercialización y sustentabilidad ambiental. La carrera integra la visión técnica con el análisis de mercados para formar líderes capaces de tomar decisiones eficientes en cadenas de valor agrícolas y ganaderas.",
        duracion: "4 años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Planificar, dirigir y optimizar empresas del sector agropecuario y agroindustrial.",
                "Formular y evaluar proyectos de inversión agrícola, ganadera y biotecnológica.",
                "Gestionar cadenas de valor, procesos de producción y logística agroalimentaria.",
                "Comercializar productos agropecuarios en mercados nacionales e internacionales.",
                "Administrar recursos financieros, costos operativos y riesgos climáticos o de mercado.",
                "Aplicar criterios de sostenibilidad, innovación tecnológica y producción limpia.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Producción Agropecuaria I",
                    "Filosofía",
                    "Matemática",
                    "Economía I",
                    "Contabilidad I",
                    "Teología",
                    "Producción Agropecuaria II",
                    "Economía II",
                    "Administración I",
                    "Contabilidad II"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Doctrina Social de la Iglesia",
                    "Tecnología I",
                    "Comercialización I",
                    "Estadística Aplicada",
                    "Administración II",
                    "Agroindustrias",
                    "Tecnología II",
                    "Ética Profesional",
                    "Trabajo Final de Integración",
                    "Comercialización II",
                    "Administración Financiera I",
                    "Práctica Profesional",
                    "Derecho I"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Producción Agropecuaria III",
                    "Sistemas de Costos Agropecuarios",
                    "Economía III",
                    "Métodos y Modelos Decisionales",
                    "Derecho II",
                    "Sanidad y Calidad Vegetal",
                    "Sanidad y Calidad Animal",
                    "Metodología de la Investigación",
                    "Administración Financiera II",
                    "Gestión de los Recursos Humanos"
                ]
            },
            {
                semestre: "4° Año",
                materias: [
                    "Recursos Forestales",
                    "Investigación de Mercados",
                    "Agronegocios I",
                    "Sistemas de Información Gerencial",
                    "Teoría y Técnica Impositiva",
                    "Tesina de Licenciatura",
                    "Ecología y Medio Ambiente",
                    "Formulación y Evaluación de Proyectos",
                    "Control de Gestión",
                    "Agronegocios II"
                ]
            }
        ]
    },
    {
        codcar: 9,
        sector: 2,
        slug: "tecnicatura-univ-en-secretariado-ejecutivo",
        nombre: "Tecnicatura Univ. en Secretariado Ejecutivo",
        descripcion: "La Tecnicatura Universitaria en Secretariado Ejecutivo forma profesionales con capacidad para gestionar de manera integral la comunicación e imagen institucional. Los estudiantes dominan herramientas de administración de agenda, redacción corporativa, relaciones públicas, protocolo y tecnologías digitales. La carrera combina teoría y práctica para desarrollar asistentes clave capaces de optimizar flujos de trabajo en empresas y organismos.",
        duracion: "2 años",
        modalidad: [7],
        perfilEgresado: {
            items: [
                "Asistir de manera integral a la alta dirección y mandos medios en la gestión operativa diaria.",
                "Coordinar agendas, viajes, reuniones ejecutivas y eventos corporativos.",
                "Redactar, gestionar y organizar la documentación, correspondencia y archivos de la empresa.",
                "Facilitar la comunicación interna y externa actuando como nexo clave entre áreas y clientes.",
                "Aplicar herramientas de gestión digital, ofimática avanzada y administración del tiempo.",
                "Supervisar tareas administrativas y de atención al público.",
                "Optimizar flujos de trabajo organizacionales para mejorar la eficiencia del sector.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Herramientas Tecnológicas I",
                    "Problematización Integradora",
                    "Comunicación y Producción de Textos",
                    "Contexto y Administración Organizacional",
                    "Filosofía",
                    "Herramientas Tecnológicas II",
                    "Marco Jurídico Organizacional",
                    "Taller de Comunicación",
                    "Gestión Informática y Documental"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Teología",
                    "Relaciones Públicas y Marketing",
                    "Lengua Inglesa I",
                    "Sistemas y Procesos Administrativos",
                    "Comunicación Digital y Manejo de Redes",
                    "Lengua Inglesa II",
                    "Estrategias e Innovación",
                    "Funciones y Técnicas de Secretariado",
                    "Resolución de Problemas y Mejora",
                    "Documentación Social de la Iglesia"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Práctica Profesional",
                    "Ética Profesional",
                    "Lengua Inglesa III"
                ]
            }
        ]
    },
    {
        codcar: 250,
        sector: 2,
        slug: "administracion-de-negocios-digitales",
        nombre: "Licenciatura en Administración de Negocios Digitales",
        descripcion: "La Licenciatura en Administración de Negocios Digitales forma profesionales con capacidad para liderar la transformación digital en organizaciones de todo tipo. Los estudiantes dominan herramientas de comercio electrónico, analítica de datos, economía digital, marketing de precisión e innovación. La carrera combina teoría y práctica para desarrollar líderes capaces de gestionar modelos tecnológicos y optimizar procesos en el entorno global.",
        duracion: "4 años",
        modalidad: [7],
        perfilEgresado: {
            items: [
                "Diseñar y liderar modelos de negocio digitales, innovadores y escalables.",
                "Gestionar la transformación digital e integración tecnológica en organizaciones.",
                "Crear y optimizar estrategias de comercio electrónico y venta omnicanal.",
                "Tomar decisiones estratégicas basadas en analítica web y datos de consumo.",
                "Desarrollar estrategias de marketing digital, crecimiento y captación.",
                "Liderar equipos multidisciplinarios bajo metodologías ágiles.",
                "Administrar proyectos de innovación, startups y productos tecnológicos.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Filosofía",
                    "Matemática I",
                    "Economía I",
                    "Administración I",
                    "Herramientas Informáticas I",
                    "Contabilidad I",
                    "Matemática II",
                    "Economía II",
                    "Administración II",
                    "Herramientas Informáticas II"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Teología",
                    "Instituciones de Derecho Civil y Comercial",
                    "Matemática Financiera",
                    "Contabilidad II",
                    "Fundamentos de Marketing",
                    "Inglés Técnico",
                    "Administración III",
                    "Derecho del Trabajo y la Seguridad Social",
                    "Estadística I",
                    "Comercio Electrónico"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Doctrina Social de la Iglesia",
                    "Costos",
                    "Contabilidad Gerencial",
                    "Derecho Societario",
                    "Marketing Digital",
                    "Gestión de Personas",
                    "Finanzas Operativas",
                    "Dirección Estratégicas",
                    "Estadística II",
                    "Desarrollo de Productos Digitales"
                ]
            },
            {
                semestre: "4° Año",
                materias: [
                    "Ética Profesional",
                    "Dirección de Operaciones",
                    "Régimen Tributario",
                    "Big Data y Analítica Digital",
                    "Finanzas Corporativas",
                    "Métodos y Modelos Cuantitativos",
                    "Inteligencia Aplicada a los Negocios",
                    "Gestión de Proyectos y Emprendimientos",
                    "Control de Gestión",
                    "Negocios Digitales Avanzados",
                    "Trabajo Final de Graduación"
                ]
            }
        ]
    },
    {
        codcar: 175,
        sector: 8,
        slug: "guia-universitario-de-turismo",
        nombre: "Guía Universitario de Turismo",
        descripcion: "El Guía Universitario de Turismo forma profesionales con capacidad para conducir, orientar y asistir a grupos en diversos recorridos turísticos. Los estudiantes dominan herramientas de geografía, patrimonio histórico y cultural, técnicas de guiado, primeros auxilios e idiomas. La carrera combina teoría y práctica para desarrollar líderes capaces de enriquecer la experiencia del visitante en circuitos públicos y privados.",
        duracion: "2½ años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Guiar, orientar y acompañar a visitantes individuales y grupos de turistas.",
                "Difundir e interpretar el patrimonio cultural, histórico y natural del destino.",
                "Actuar como coordinador en empresas de viajes y salidas grupales.",
                "Diseñar visitas guiadas temáticas e itinerarios turísticos específicos.",
                "Aplicar técnicas de conducción grupal, comunicación e idiomas extranjeros.",
                "Prestar servicios de recepción, asistencia y atención al turista.",
                "Promover el turismo sostenible y la concientización ambiental en la comunidad.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Italiano Turístico",
                    "Historia de Salta",
                    "Estructura del Mercado Turístico",
                    "Primeros Auxilios",
                    "Dinámica del Paisaje y Recursos Territoriales I",
                    "Arqueología",
                    "Prácticas: Técnicas de Guiado",
                    "Filosofía",
                    "Antropología",
                    "Habilidades de Comunicación",
                    "Dinámica del Paisaje y Recursos Territoriales II",
                    "Prácticas: Reconocimiento de Circuitos"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Francés Turístico",
                    "Teología",
                    "Folklore",
                    "Animación y Recreación",
                    "Seminario Optativo",
                    "Historia Argentina",
                    "Dinámica de Grupo",
                    "Historia del Arte",
                    "Patrimonio Cultural",
                    "Gastronomía y Enología",
                    "Prácticas: Técnicas de Interpretación Patrimonial"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Práctica Profesional",
                    "Derecho del Turismo",
                    "Turismo Activo",
                    "Turismo Cultural y Religioso",
                    "Guiado de Circuitos Turísticos en Español y en Inglés"
                ]
            }
        ]
    },
    {
        codcar: 58,
        sector: 4,
        slug: "licenciatura-en-ciencia-de-datos",
        nombre: "Licenciatura en Ciencia de Datos",
        descripcion: "La Licenciatura en Ciencia de Datos forma profesionales capacitados para extraer conocimiento valioso a partir de grandes volúmenes de datos. Los estudiantes aprenden programación, estadística avanzada, inteligencia artificial y machine learning para transformar datos complejos en decisiones estratégicas. La carrera combina teoría y práctica para formar líderes analíticos que impulsen la innovación y optimicen procesos en diversas industrias.",
        duracion: "4 años",
        modalidad: [7],
        perfilEgresado: {
            items: [
                "Extraer, limpiar y procesar grandes volúmenes de datos (Big Data) de diversas fuentes.",
                "Diseñar modelos estadísticos, matemáticos y de aprendizaje automático (Machine Learning).",
                "Generar algoritmos de Inteligencia Artificial para automatizar la toma de decisiones.",
                "Crear visualizaciones claras y tableros interactivos para comunicar hallazgos clave.",
                "Descubrir patrones, tendencias y conocimientos predictivos para la estrategia del negocio.",
                "Aplicar normativas de ética, privacidad y gobernanza en el uso de la información.",
                "Desarrollar soluciones analíticas para optimizar procesos industriales, financieros y sociales.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Álgebra Lineal",
                    "Cálculo Diferencial e Integral I",
                    "Programación I",
                    "Introducción a la Estructura de Datos",
                    "Doctrina Social de la Iglesia",
                    "Geometría Analítica",
                    "Cálculo Diferencial e Integral II",
                    "Programación II",
                    "Análisis de Algoritmos Computacionales"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Matemática Discreta",
                    "Base de Datos Estructurados",
                    "Computación Concurrente",
                    "Probabilidad y Estadística Científica",
                    "Ética Profesional",
                    "Modelos y Simulación",
                    "Base de Datos No Estructurados",
                    "Análisis de Datos Masivos",
                    "Gestión Empresarial"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Fundamentos de Inteligencia Artificial",
                    "Programación para Ciencia de Datos",
                    "Análisis de Datos Estratégicos",
                    "Modelos de Gran Escala",
                    "Simulación Estocástica",
                    "Plataformas de Computación en la Nube",
                    "Macrodatos I",
                    "Herramientas de Visualización de Estructura de Datos",
                    "Minería de Datos",
                    "Investigación Operativa"
                ]
            },
            {
                semestre: "4° Año",
                materias: [
                    "Prueba de Suficiencia en Idioma Inglés",
                    "Metodologías de Investigación",
                    "Macrodatos II",
                    "Administración de Proyectos IT",
                    "Inteligencia Empresarial y Análisis de Negocio",
                    "La Dirección Estratégica Basada en Ciencias de Datos",
                    "Trabajo Final",
                    "Sistemas Inteligentes",
                    "Análisis de Datos Aplicados a la Industria",
                    "Neurociencias y Ciencia de Datos",
                    "Normas y Regulaciones para la Utilización de Datos"
                ]
            }
        ]
    },
    {
        codcar: 401,
        sector: 3,
        slug: "licenciatura-en-corretaje-tasacion-y-administracion-de-consorcios",
        nombre: "Licenciatura en Corretaje, Tasación y Administración de Consorcios - CCC",
        descripcion: "Esta carrera forma profesionales especializados en el mercado inmobiliario, la valuación de bienes y la gestión de propiedad horizontal. Los egresados pueden ejercer como corredores, tasadores, administradores de consorcios y asesores en transacciones inmobiliarias, combinando formación jurídica, económica y técnica para operar con eficiencia en el ámbito público y privado.",
        duracion: "1½ años",
        modalidad: [7],
        perfilEgresado: {
            items: [
                "Intermediar en operaciones de compra, venta, alquiler y subastas de bienes muebles e inmuebles.",
                "Realizar tasaciones, valuaciones e informes periciales con criterio técnico.",
                "Administrar consorcios de propiedad horizontal y gestionar conflictos vecinales.",
                "Asesorar en cuestiones legales, contractuales y registrales del sector inmobiliario.",
                "Diseñar y gestionar proyectos inmobiliarios sustentables con enfoque ecológico.",
                "Aplicar herramientas digitales y metodologías de investigación en la práctica profesional.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Semestre",
                materias: [
                    "Antropología Filosófica",
                    "Desarrollos Inmobiliarios",
                    "Tasación Rural de Animales e Intangibles",
                    "Metodología y Técnicas de la Investigación",
                    "Evaluación y Valoración de Bienes",
                    "Negociación Comercial Transcultural y Relaciones Humanas",
                ]
            },
            {
                semestre: "2° Semestre",
                materias: [
                    "Tasación de Bienes Industriales y Tecnológicos",
                    "Desarrollo Urbanístico y Estilos Arquitectónicos",
                    "Herramientas Tecnológicas de Creación y Organización",
                    "Remates y Subastas Internacionales",
                    "Dirección y Gestión de Proyectos 1",
                    "Antropología Teológica",
                    "Seminario Electivo",
                ]
            },
            {
                semestre: "3° Semestre",
                materias: [
                    "Dirección y Gestión de Poryectos 2",
                    "Administración de consorcios comerciales",
                    "Marketing digital inmobiliario",
                    "Inglés Técnico Avanzado",
                    "Liderazgo y Cooperación Internacional",
                    "Humanismo y Pensamiento Social Cristiano",
                    "Práctica Profesional Integral"
                ]
            }
        ]
    },
    {
        codcar: 57,
        sector: 4,
        slug: 'tecnicatura-universitaria-topografia-y-geomatica',
        nombre: 'Tecnicatura Universitaria en Topografía y Geomática',
        modalidad: [1],
        duracion: '3 años',
        descripcion: 'Esta carrera busca formar profesionales capacitados para desempeñar funciones técnicas y operativas en el campo del levantamiento territorial, la medición del espacio físico y la gestión de datos georreferenciados. \n\nA lo largo de la carrera, adquirirás dominio de instrumental clásico y tecnologías modernas como GNSS, estaciones totales y drones, junto con herramientas de software para el procesamiento e interpretación de datos espaciales.\n\nLos egresados pueden insertarse en organismos públicos, empresas de ingeniería, estudios de agrimensura, constructoras y consultoras ambientales, colaborando en proyectos de mensura, catastro, obras viales y ordenamiento territorial bajo la supervisión del Ingeniero Agrimensor.',
        perfilEgresado: {
            items: [
                'Actuar en colaboración con Ingenieros Agrimensores y otros profesionales afines, desarrollando tareas bajo supervisión profesional y de acuerdo con la normativa técnica y legal vigente',
                'Realizar relevamientos topográficos, trazados de obras, procesamiento de datos geoespaciales y representación cartográfica, aplicando normas y estándares de calidad',
                'Utilizar estaciones totales, sistemas GNSS, drones, software CAD, sistemas de información geográfica (SIG) y otras tecnologías aplicadas a la topografía y la geomática',
                'Interpretar planos, operar instrumental técnico, gestionar datos territoriales y colaborar en equipos interdisciplinarios vinculados a obras civiles, estudios ambientales, catastro, agrimensura y planificación territorial',
                'Desempeñarse con compromiso ético y social, incorporando una visión integral del territorio, el bien común, la responsabilidad ambiental y el desarrollo sostenible'
            ]
        },
        planEstudios: [
            {
                semestre: '1° Año',
                materias: [
                    'Filosofía',
                    'Matemática',
                    'Cálculo I',
                    'Informática',
                    'Física I',
                    'Sistemas de Representación',
                    'Álgebra Lineal',
                    'Cálculo II',
                    'Física II',
                    'Dibujo asistido por Computadora'
                ]
            },
            {
                semestre: '2° Año',
                materias: [
                    'Teología',
                    'Cálculo III',
                    'Física III',
                    'Probabilidad y Estadística',
                    'Topografía I',
                    'Geometría Analítica',
                    'Dibujo Topográfico',
                    'Pensamiento Social Cristiano',
                    'Teoría de Errores y Compensación',
                    'Geodesia I',
                    'Geografía Física y Geomorfología'
                ]
            },
            {
                semestre: '3° Año',
                materias: [
                    'Topografía II',
                    'Información Rural y Agrofísica',
                    'Ética Profesional',
                    'Geodesia II',
                    'Fotografía Específica I',
                    'Fotografía Específica II',
                    'Topografía de Obras Civiles',
                    'Trabajo Final Integrador',
                    'Seguridad Laboral y Ambiental'
                ]
            }
        ],
    },
    {
        codcar: 105,
        sector: 1,
        slug: "licenciatura-en-psicologia",
        nombre: "Licenciatura en Psicología",
        descripcion: "La Licenciatura en Psicología forma profesionales con capacidad para comprender, evaluar e intervenir en el comportamiento humano y la salud mental. Los estudiantes dominan herramientas de psicodiagnóstico, evaluación clínica, psicología social, neurociencias y diversas psicoterapias. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en los ámbitos clínico, educativo, laboral y comunitario.",
        duracion: "5 años",
        modalidad: [1],
        cio: {
            materias: ["Módulo Disciplinar CIO", "MIVU - COEDU"]
        },
        perfilEgresado: {
            items: [
                "Evaluar, diagnosticar e intervenir en la salud mental de personas y comunidades.",
                "Brindar atención clínica, psicoterapéutica y acompañamiento en distintos procesos de vida.",
                "Intervenir en instituciones educativas, laborales, jurídicas y socio-comunitarias.",
                "Diseñar e implementar programas de prevención, promoción de la salud y bienestar.",
                "Elaborar peritajes psicológicos, informes técnicos y evaluaciones psicodiagnósticas.",
                "Desarrollar investigaciones científicas para el avance de las ciencias del comportamiento.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía I",
                        "Neuropsicología",
                        "Metodología de la Investigación en Psicología I",
                        "Historia de la Psicología",
                        "Psicología General",
                        "Historia del Pensamiento Sociopolítico",
                        "Antropología Cultural",
                        "Lingüística"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología I",
                        "Psicología Evolutiva y Cultura (Niño y Adolescente)",
                        "Psicología Profunda",
                        "Estadística (Descriptiva y Muestral)",
                        "Filosofía II",
                        "Psicolingüística",
                        "Sociología",
                        "Antropología Filosófica",
                        "Psicología Experimental",
                        "Psicología de la Personalidad",
                        "Introducción al Psicodiagnóstico"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Psicología Educacional",
                        "Suficiencia Idiomática",
                        "Teología II",
                        "Psicometría",
                        "Psicología Social",
                        "Psicología Evolutiva y Cultura de Adultez y Senectud",
                        "Psicología del Deporte",
                        "Psicopatología Infanto Juvenil (General y Especial)",
                        "Dinámica de Grupo",
                        "Técnicas Proyectivas I",
                        "Psicopatología del Adulto (General Especial)",
                        "Seminario I"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Psicología Laboral",
                        "Doctrina Social",
                        "Orientación Vocacional y Profesional",
                        "Técnicas Proyectivas II",
                        "Psicología Especial y de la Diversidad",
                        "Seminario II",
                        "Ética Profesional",
                        "Psicología de las Relaciones Humanas",
                        "Psicodiagnóstico",
                        "Psicología Comunitaria",
                        "Psicología Clínica I (Psicoanálisis)",
                        "Drogodependencia y Abordajes Transdisciplinarios"
                    ]
                },
                {
                    "semestre": "5° Año",
                    "materias": [
                        "Psicología Clínica II",
                        "Psicología de las Organizaciones",
                        "Psicoterapia de Grupo",
                        "Psicología Forense",
                        "Metodología de la Investigación en Psicología II",
                        "Salud Pública",
                        "Trabajo Integrador Final",
                        "Práctica Pre Profesional Jurídico Forense",
                        "Práctica Pre Profesional Socio Comunitaria",
                        "Práctica Pre-Profesional Educacional",
                        "Práctica Pre-Profesional Laboral",
                        "Práctica Pre-Profesional Clínica"
                    ]
                }
            ]
        },


    },
    {
        codcar: 46,
        sector: 3,
        slug: "licenciatura-en-criminalistica",
        nombre: "Licenciatura en Criminalística",
        descripcion: "La Licenciatura en Criminalística forma profesionales con capacidad para investigar, analizar y reconstruir hechos delictivos mediante métodos científicos. Los estudiantes dominan herramientas de balística, papiloscopía, accidentología, documentología y ciencias forenses. La carrera combina teoría y práctica para desarrollar líderes capaces de redactar peritajes judiciales y tomar decisiones estratégicas en el ámbito público y privado.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Procesar la escena del crimen recolectando y preservando evidencias físicas.",
                "Realizar peritajes balísticos, dactiloscópicos, documentológicos y accidentes viales.",
                "Asesorar a jueces y fiscales mediante la elaboración de informes periciales.",
                "Utilizar tecnología avanzada en laboratorios de análisis forense.",
                "Determinar la mecánica y circunstancias en la comisión de un delito.",
                "Coordinar equipos multidisciplinarios en investigaciones judiciales y policiales.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Método y Técnica de Investigación Científica y Estadística Aplicada",
                        "Análisis Matemático I",
                        "Química I (General e Inorgánica)",
                        "Inspecciones Oculares y Levantamiento de Rastros",
                        "Tecnografía Pericial I",
                        "Filosofía",
                        "Derecho Penal",
                        "Teología",
                        "Derecho Procesal Penal (General)"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Identidad Humana",
                        "Análisis Matemático II",
                        "Química II (Orgánica)",
                        "Fototécnicas Audiovisuales",
                        "Documentología I",
                        "Física I",
                        "Balística I",
                        "Tecnografía Pericial II",
                        "Pasantías en el Registro Nacional de Reincidencia y Prácticas en la Dirección de Policía Científica",
                        "Derecho Procesal Penal",
                        "Derecho Procesal Civil, Comercial y Laboral"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Deontología Pericial",
                        "Química Analítica",
                        "Informática I",
                        "Documentología II",
                        "Física II",
                        "Probabilidades y Estadística",
                        "Balística II",
                        "Accidentología I"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Análisis Químico Instrumental",
                        "Química Legal",
                        "Informática II",
                        "Medicina Legal",
                        "Tecnología Aplicada",
                        "Accidentología II",
                        "Toxicología",
                        "Psicología General y Criminal",
                        "Criminología General"
                    ]
                }
            ]
        },


    },
    {
        codcar: 26,
        sector: 5,
        slug: "arquitectura",
        nombre: "Arquitectura",
        descripcion: "La carrera de Arquitectura forma profesionales con capacidad para diseñar, proyectar y dirigir obras que transforman el hábitat y el entorno urbano. Los estudiantes dominan herramientas de diseño arquitectónico, sistemas constructivos, representación digital, sustentabilidad y gestión de proyectos. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en el ámbito público y privado.",
        duracion: "5 años",
        modalidad: [1],
        cio: {
            materias: ["Medios de expresión", "COEDU", "Matemática", "Sistemas de Representación", "MIVU"]
        },
        perfilEgresado: {
            items: [
                "Diseñar y proyectar espacios habitables, urbanos, arquitectónicos y del paisaje.",
                "Dirigir, supervisar y ejecutar obras de construcción e infraestructura.",
                "Aplicar criterios de sostenibilidad, eficiencia energética y respeto ambiental.",
                "Restaurar, poner en valor y conservar el patrimonio arquitectónico y urbano.",
                "Presupuestar, gestionar e inspeccionar obras en el ámbito público y privado.",
                "Desarrollar proyectos urbanísticos y ordenamiento territorial sustentable.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Matemática",
                        "Construcciones I",
                        "Medios de Expresión I",
                        "Diseño I",
                        "Sistemas de Representación",
                        "Teoría de la Arquitectura",
                        "Introducción a la Cultura",
                        "Física"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Historia de la Arquitectura I",
                        "Construcciones II",
                        "Medios de Expresión II",
                        "Diseño II",
                        "Instalaciones I",
                        "Estructuras I",
                        "Dibujo Asistido por Computadora I",
                        "Crítica de la Arquitectura",
                        "Doctrina Social de la Iglesia"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Historia de la Arquitectura II",
                        "Planeamiento I",
                        "Construcciones III",
                        "Medios de Expresión III",
                        "Diseño III",
                        "Instalaciones II",
                        "Estructuras II",
                        "Dibujo Asistido por Computadora II"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Historia de la Arquitectura III",
                        "Organización de Obras",
                        "Planeamiento II",
                        "Ambiente y Arquitectura",
                        "Diseño IV",
                        "Estructuras III",
                        "Tecnología de la Información (Electiva)",
                        "Emprendedurismo (Electiva)",
                        "Patologías de la Construcción (Electiva)",
                        "Topografía (Electiva)",
                        "Paisaje I (Electiva)",
                        "Paisajismo (Electiva)",
                        "Arquitectura del Turismo (Electiva)",
                        "Paisaje II (Electiva)",
                        "Arquitectura Latinoamericana del Siglo XXI (Electiva)",
                        "Proceso de Diseño Digital (Electiva)",
                        "Planificación del Territorio: Medición y Catastro (Electiva)",
                        "Arquitectura Sustentable y Edificios Inteligentes Domótica (Electiva)",
                        "Turismo Accesible - Parques Accesibilidades (Electiva)",
                        "Prueba de Nivelación de Idiomas",
                        "Planificación y Gestión de Proyectos (Electiva)",
                        "Preservación Urbana (Electiva)",
                        "Accesibilidad al Medio Físico (Electiva)",
                        "Construcciones de Madera (Electiva)",
                        "Diseño y Gestión de la Ciudad Sustentable (Electiva)",
                        "Sistemas de Información Geográfica para la Gestión Territorial (Electiva)",
                        "REVIT I (Electiva)",
                        "Diseño Inclusivo y Emocional (Electiva)",
                        "Taller de Composición Plástica (Electiva)",
                        "Storytelling (Electiva)",
                        "Electiva I"
                    ]
                },
                {
                    "semestre": "5° Año",
                    "materias": [
                        "Trabajo Final Integrador",
                        "Legal",
                        "Seguridad en la Construcción",
                        "Diseño V",
                        "Estructuras IV",
                        "Ética",
                        "Psicología (Electiva)",
                        "Croquis y Perspectiva (Electiva)",
                        "Arquitectura Solar (Electiva)",
                        "Materiales y Técnicas Regionales (Electiva)",
                        "Plantas y Jardines (Electiva)",
                        "Resoluciones Constructivas No Convencionales (Electiva)",
                        "Modelado BIM con Archicad (Electiva)",
                        "Metodología de la Investigación",
                        "Energías Renovables Aplicadas a la Arquitectura (Electiva)",
                        "Interiores Comerciales y Diseño Temporario (Electiva)",
                        "Diseño Arquitectónico para una Modernidad Apropiada (Electiva)",
                        "Inteligencia Artificial Aplicada al Diseño (Electiva)",
                        "Gestión de Emprendimientos Arquitectónicos (Electiva)",
                        "Práctica Profesional Supervisada",
                        "Electiva II"
                    ]
                }
            ]
        },


    },
    {
        codcar: 123,
        sector: 9,
        slug: "ciencias-veterinarias",
        nombre: "Ciencias Veterinarias",
        descripcion: "La carrera de Ciencias Veterinarias forma profesionales con capacidad para promover la salud animal, la producción agropecuaria y la salud pública. Los estudiantes dominan herramientas de medicina clínica, cirugía, diagnóstico epidemiológico, bioseguridad y tecnología de los alimentos. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en el ámbito público y privado.",
        duracion: "5½ años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Diagnosticar, prevenir y tratar enfermedades en animales domésticos, de producción y exóticos.",
                "Planificar y ejecutar cirugías, tratamientos médicos y planes sanitarios integrales.",
                "Garantizar la inocuidad alimentaria e inspeccionar la producción de origen animal.",
                "Dirigir la gestión técnica, nutricional y reproductiva en establecimientos agropecuarios.",
                "Diseñar estrategias de salud pública para prevenir zoonosis y proteger el medio ambiente.",
                "Liderar investigaciones biomédicas y administrar clínicas o centros veterinarios.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Bioquímica",
                        "Biofísica",
                        "Histología y Embriología",
                        "Anatomía Comparada",
                        "Filosofía",
                        "Bioestadística"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Fisiología",
                        "Patología Básica y Anatomía Patológica",
                        "Microbiología",
                        "Genética",
                        "Parasitología",
                        "Teología",
                        "Economía y Administración Rural"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Zootecnia General",
                        "Semiología",
                        "Ética Profesional",
                        "Seminario I",
                        "Farmacología",
                        "Nutrición y Alimentación Animal",
                        "Inmunología"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Enfermedades Infecciosas",
                        "Obstetricia y Reproducción",
                        "Patología Médica",
                        "Patología Quirúrgica",
                        "Cirugía y Anestesiología",
                        "Producción de Rumiantes Menores",
                        "Seminario II",
                        "Enfermedades Parasitarias",
                        "Producción Porcina"
                    ]
                },
                {
                    "semestre": "5° Año",
                    "materias": [
                        "Práctica Hospitalaria de Animales de Compañía",
                        "Práctica Hospitalaria de Grandes Animales",
                        "Producción de Aves y Especies No Tradicionales",
                        "Salud Pública y Epidemiología",
                        "Bromatología",
                        "Producción Bovina",
                        "Recursos Faunísticos, Medicina de Fauna y Animales Exóticos",
                        "Tecnología de los Alimentos",
                        "Producción Equina"
                    ]
                },
                {
                    "semestre": "6° Año",
                    "materias": [
                        "Residencia en Tecnología de los Alimentos y Salud Pública",
                        "Residencia",
                        "Taller de Integración de Práctica Profesional",
                        "Taller de Integración del Ciclo Básico",
                        "Pasturas y Forrajes (Optativa)",
                        "Piscicultura (Optativa)",
                        "Producción y Tecnología de los Derivados Lácteos (Optativa)",
                        "Producción y Tecnología de los Derivados Cárnicos (Optativa)",
                        "Microbiología de los Alimentos (Optativa)",
                        "Análisis Clínicos (Optativa)",
                        "Etología (Optativa)",
                        "Camélidos Americanos (Optativa)",
                        "Producción Canina (Optativa)",
                        "Marketing Agropecuario (Optativa)",
                        "Diagnóstico por Imágenes (Optativa)"
                    ]
                }
            ]
        },


    },
    {
        codcar: 84,
        sector: 4,
        slug: "ingenieria-en-informatica",
        nombre: "Ingeniería en Informática",
        descripcion: "La carrera de Ingeniería en Informática forma profesionales con capacidad para diseñar, desarrollar y gestionar sistemas tecnológicos complejos. Los estudiantes dominan herramientas de programación avanzada, arquitectura de software, bases de datos, redes, ciberseguridad e inteligencia artificial. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en el ámbito público y privado.",
        duracion: "5 años",
        modalidad: [1],
        cio: {
            materias: ["Matemática Física - Química", "Resolución de problemas con algoritmos ", "Curso Introductorio a la Vida Universitaria General"]
        },
        perfilEgresado: {
            items: [
                "Diseñar, desarrollar y liderar proyectos de software, redes y arquitecturas tecnológicas complejas.",
                "Obtener el título intermedio de pregrado al cumplir los primeros tres años.",
                "Administrar bases de datos, infraestructura de red y estrategias de ciberseguridad.",
                "Dirigir equipos multidisciplinarios aplicando metodologías de desarrollo e innovación tecnológica.",
                "Implementar soluciones integrales enfocadas en la transformación digital y el análisis de datos.",
                "Auditar sistemas informáticos y asesorar a empresas en la optimización de sus procesos.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Álgebra Lineal I",
                        "Análisis Matemático I",
                        "Química para Ingenieros",
                        "Fundamentos de Informática",
                        "Prueba de Suficiencia en Comunicación Oral y Escrita",
                        "Prueba de Suficiencia de Idioma Inglés",
                        "Álgebra Lineal II",
                        "Análisis Matemático II",
                        "Introducción a la Informática",
                        "Física I"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Estructura de Datos y Algoritmos",
                        "Arquitectura de Computadores",
                        "Análisis Matemático III",
                        "Lenguajes I",
                        "Física II",
                        "Economía de la Empresa",
                        "Probabilidad y Estadística I",
                        "Cálculo Avanzado",
                        "Lenguajes II",
                        "Sistemas I",
                        "Introducción a los Sistemas Operativos",
                        "Física Aplicada",
                        "Economía y Finanzas",
                        "Probabilidad y Estadística II"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Sistemas Operativos",
                        "Sistemas II",
                        "Redes I",
                        "Doctrina Social de la Iglesia",
                        "Análisis Numérico",
                        "Lenguajes III",
                        "Bases de Datos I",
                        "Proyectos Informáticos I",
                        "Práctica Profesional Supervisada Técnico",
                        "Ética Profesional",
                        "Lenguajes IV",
                        "Bases de Datos II",
                        "Proyectos Informáticos II",
                        "Higiene y Seguridad"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Ingeniería de Software",
                        "Sistemas III",
                        "Redes II",
                        "Bases de Datos III",
                        "Investigación Operativa I",
                        "Dirección de Proyectos",
                        "Compiladores",
                        "Análisis de Datos",
                        "Investigación Operativa II"
                    ]
                },
                {
                    "semestre": "5° Año",
                    "materias": [
                        "Modelos y Simulación",
                        "Sistemas Inteligentes",
                        "Auditoría de Sistemas",
                        "Técnicas Avanzadas de Análisis de Datos",
                        "Recursos Humanos",
                        "Ingeniería Legal",
                        "Práctica Profesional Supervisada Ingeniero",
                        "Proyecto de Grado",
                        "Seguridad Informática",
                        "Estrategia e Informática",
                        "Redes III",
                        "Legislación Informática"
                    ]
                }
            ]
        },


    },
    {
        codcar: 19,
        sector: 4,
        slug: "ingenieria-industrial",
        nombre: "Ingeniería Industrial",
        descripcion: "La carrera de Ingeniería Industrial forma profesionales con capacidad para optimizar procesos, recursos e infraestructuras en organizaciones de bienes y servicios. Los estudiantes dominan herramientas de gestión de operaciones, logística, economía, control de calidad y dirección de proyectos. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en el ámbito público y privado.",
        duracion: "5 años",
        modalidad: [1],
        cio: {
            materias: ["Física-Quimica", "Matemáticas", "Resolución de Problemas", "MIVU"]
        },
        perfilEgresado: {
            items: [
                "Diseñar, optimizar y dirigir sistemas de producción de bienes y servicios.",
                "Obtener el título intermedio de pregrado durante la carrera.",
                "Planificar y gestionar la logística, supply chain y operaciones.",
                "Controlar la calidad, seguridad laboral y sustentabilidad ambiental.",
                "Evaluar la viabilidad económica, costos y proyectos de inversión.",
                "Liderar equipos de trabajo y procesos de innovación industrial.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Álgebra Lineal I",
                        "Análisis Matemático I",
                        "Química para Ingenieros",
                        "Prueba de Suficiencia en Ofimática",
                        "Fundamentos de Informática",
                        "Organización y Administración",
                        "Prueba de Suficiencia en Comunicación Oral y Escrita",
                        "Prueba de Suficiencia de Idioma Inglés",
                        "Álgebra Lineal II",
                        "Análisis Matemático II",
                        "Química para Ingenieros II",
                        "Física I",
                        "Dibujo y Sistemas de Representación"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Estabilidad y Resistencia de Materiales",
                        "Análisis Matemático III",
                        "Física II",
                        "Economía de la Empresa",
                        "Probabilidad y Estadística",
                        "Análisis Matemático IV",
                        "Física III",
                        "Economía y Finanzas",
                        "Probabilidad y Estadística II",
                        "Conocimiento y Estudio de Materiales"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Mecánica y Mecanismos",
                        "Doctrina Social de la Iglesia",
                        "Análisis Numérico",
                        "Termodinámica",
                        "Investigación Operativa I",
                        "Organización Industrial",
                        "Electrotecnia",
                        "Práctica Profesional Supervisada Técnico",
                        "Ética Profesional",
                        "Costos Industriales",
                        "Investigación Operativa II",
                        "Máquinas Térmicas",
                        "Máquinas Eléctricas",
                        "Mecánica de Fluidos",
                        "Higiene y Seguridad"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Construcciones Industriales",
                        "Comercialización y Análisis de Mercados",
                        "Planeamiento y Control de Gestión",
                        "Instalaciones Termomecánicas",
                        "Instalaciones Eléctricas",
                        "Higiene y Seguridad Industrial",
                        "Operaciones Industriales I",
                        "Formulación y Evaluación de Proyectos",
                        "Planeamiento y Control de las Operaciones",
                        "Logística",
                        "Gestión de Activos Físicos (Optativa)",
                        "Operaciones Industriales II",
                        "Instalaciones Auxiliares"
                    ]
                },
                {
                    "semestre": "5° Año",
                    "materias": [
                        "Diseño Asistido por Computadora (Optativa)",
                        "Sistemas I (Optativa)",
                        "Costos para la Gestión (Optativa)",
                        "Auditoría (Optativa)",
                        "Recursos Humanos",
                        "Instrumentación, Control y Automatización",
                        "Gestión de Calidad",
                        "Formación de Emprendedores (Optativa)",
                        "Estrategias de Negociación y Resolución de Conflictos (Optativa)",
                        "Escenarios de Negocios (Optativa)",
                        "Administración de PYMES (Optativa)",
                        "Ingeniería Legal",
                        "Derecho del Trabajo (Optativa)",
                        "Derecho Colectivo del Trabajo y de la Seguridad Social (Optativa)",
                        "Ingeniería Ambiental",
                        "Tecnologías y Procesos de Producción",
                        "Práctica Profesional Supervisada Ingeniero",
                        "Proyecto de Grado",
                        "Emprendedurismo y Planes de Negocios (Optativa)",
                        "Legislación Industrial"
                    ]
                }
            ]
        },


    },
    {
        codcar: 31,
        sector: 7,
        slug: "profesorado-en-educacion-fisica",
        nombre: "Profesorado en Educación Física",
        descripcion: "El Profesorado en Educación Física forma profesionales con capacidad para planificar y conducir procesos educativos, deportivos y recreativos. Los estudiantes dominan herramientas de didáctica, pedagogía, anatomía, desarrollo motor, deportes individuales y grupales. La carrera combina teoría y práctica para desarrollar docentes capaces de tomar decisiones pedagógicas estratégicas en ámbitos escolares y comunitarios.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Planificar y dictar clases de educación física en todos los niveles educativos.",
                "Planificar y dirigir entrenamientos deportivos, recreativos y de acondicionamiento físico.",
                "Diseñar programas de inclusión y actividad física para la salud comunitaria.",
                "Organizar y coordinar eventos, campamentos y actividades al aire libre.",
                "Asesorar a clubes, centros deportivos e instituciones públicas o privadas.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Gimnasia Formativa",
                        "Recreación",
                        "Atletismo I",
                        "Filosofía",
                        "Desarrollo Psico-Motriz",
                        "Psicología General y Evolutiva",
                        "Juegos Motores",
                        "Anatomía Funcional",
                        "Didáctica General I",
                        "Comunicación y Expresión",
                        "Currículum I"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Natación y Deportes Acuáticos I",
                        "Gimnasia Artística y Deportiva",
                        "Fútbol",
                        "Atletismo II",
                        "Psicología de la Actividad Física y del Deporte",
                        "Didáctica Específica y Currículum II",
                        "Metodología del Aprendizaje Motor",
                        "Vida con la Naturaleza y Medio Ambiente",
                        "Fisiología de la Actividad Física",
                        "Handbol",
                        "Historia y Fundamentos de la Educación Física"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Natación y Deportes Acuáticos II",
                        "Básquetbol",
                        "Gimnasia Rítmica y Aeróbica",
                        "Hockey",
                        "Voleibol",
                        "Evaluación Educativa y Estadística",
                        "Introducción a la Metodología de la Investigación",
                        "Informática Aplicada",
                        "Práctica I",
                        "Doctrina Social"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Análisis Biomecánico en la Actividad Física y el Deporte",
                        "Educación Rítmica y Danza",
                        "Rugby",
                        "Educación Física Especial",
                        "Política, Gestión y Administración Educativa",
                        "Educación y Nutrición para la Salud",
                        "Práctica III: Entrenamiento Deportivo",
                        "Práctica II",
                        "Ética Profesional"
                    ]
                }
            ]
        },


    },
    {
        codcar: 323,
        sector: 21,
        slug: "formacion-docente-para-profesionales",
        nombre: "Formación Docente para Profesionales",
        descripcion: "La Formación Docente para Profesionales capacita a graduados universitarios para la enseñanza pedagógica en el sistema educativo. Los estudiantes dominan herramientas de didáctica, planificación curricular, evaluación de aprendizajes, tecnologías educativas y gestión escolar. La carrera combina teoría y práctica para desarrollar educadores capaces de tomar decisiones estratégicas e impactar en el aula pública y privada.",
        duracion: "2 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Ejercer la docencia en nivel superior y universitario según su título base.",
                "Diseñar, gestionar y evaluar proyectos pedagógicos e innovaciones educativas.",
                "Aplicar estrategias didácticas y metodologías adaptadas a diversos entornos.",
                "Integrar recursos digitales y tecnologías en el proceso de enseñanza.",
                "Asesorar pedagógicamente en instituciones públicas y privadas.",
                "Promover la inclusión educativa y el respeto por la diversidad.",
                "Participar en investigaciones y proyectos de mejora institucional.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Práctica I",
                        "Filosofía de la Educación",
                        "Didáctica",
                        "Currículum",
                        "Sujetos Educativos en Educación Secundaria",
                        "Psicología Educacional",
                        "Evaluación de los Aprendizajes",
                        "Programación Curricular",
                        "Problemáticas Educativas Contemporáneas"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Práctica II",
                        "Taller de Sistematización de las Prácticas Docentes",
                        "Humanismo y Doctrina Social de la Iglesia",
                        "Estratégias Didácticas y de Aprendizaje",
                        "Sujetos Educativos en Educación Superior",
                        "Ética y Deontología Profesional",
                        "Política Educativa",
                        "TIC en el Aula"
                    ]
                }
            ]
        },


    },
    {
        codcar: 69,
        sector: 1,
        slug: "licenciatura-en-psicopedagogia",
        nombre: "Licenciatura en Psicopedagogía",
        descripcion: "La Licenciatura en Psicopedagogía forma profesionales con capacidad para diagnosticar, prevenir e intervenir en los procesos de aprendizaje humano en todas las etapas de la vida. Los estudiantes dominan herramientas de evaluación psicopedagógica, neuropsicología, orientación vocacional, inclusión educativa y tecnologías aplicadas.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Prevenir, diagnosticar y abordar dificultades en los procesos de aprendizaje.",
                "Diseñar e implementar estrategias de intervención orientadas al desarrollo cognitivo y emocional.",
                "Realizar orientación vocacional, ocupacional y profesional.",
                "Elaborar informes psicopedagógicos y peritajes en ámbitos educativos, de salud y judiciales.",
                "Integrar equipos interdisciplinarios para promover la inclusión y la diversidad en contextos de aprendizaje.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Introducción a la Psicopedagogía",
                        "Bases Neurofisiológicas del Aprendizaje",
                        "Metodología de la Investigación",
                        "Historia Social de la Educación Argentina",
                        "Antropología",
                        "Psicología General",
                        "Pedagogía General",
                        "TIC",
                        "Lingüística"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Neuropsicología",
                        "Psicolingüística",
                        "Diagnóstico Psicopedagógico",
                        "Psicología del Desarrollo en el Niño y el Adolescente",
                        "Teorías del Aprendizaje",
                        "Estadística Aplicada",
                        "Psicología Profunda",
                        "Psicopedagogía Institucional",
                        "Didáctica General"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Psicopatología",
                        "Psicopedagogía en las Organizaciones",
                        "Tratamiento y Orientación Psicopedagógico",
                        "Técnicas de Evaluación Diagnóstica",
                        "Doctrina Social",
                        "Psicología del Desarrollo del Adulto y el Geronte",
                        "Neuropsicopedagogía (Evaluación e Intervenciones)",
                        "Ética y Deontología Profesional",
                        "Intervenciones Psicopedagógicas en Lengua y Matemática",
                        "Mediación Educacional y Resolución de Conflictos",
                        "Inglés"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Psicopedagogía en Contextos Sociales Complejos",
                        "Psicopedagogía y Atención Primaria de la Salud",
                        "Dinámica de Grupos y Educación",
                        "Práctica Preprofesional Supervisada en el Campo Educacional",
                        "Práctica Pre-Profesional Supervisada en el Campo de la Atención",
                        "Con Orientación Clínica y Neuropsicológica Escritura Académica (Seminario Electivo I)",
                        "Seminario Electivo I",
                        "Psicopedagogía e Inclusión del Sujeto con Discapacidad",
                        "Orientación Vocacional, Ocupacional y Profesional",
                        "Práctica Preprofesional Supervisada en el Campo de la Salud y",
                        "Sociocomunitario",
                        "Práctica Preprofesional Supervisada en el Campo Laboral y Organizacional Seminario II - Práctica de Investigación en Psicopedagogía",
                        "Seminario Electivo II"
                    ]
                }
            ]
        },


    },
    {
        codcar: 220,
        sector: 1,
        slug: "licenciatura-en-imagen-y-sonido",
        nombre: "Licenciatura en Imagen y Sonido",
        descripcion: "La Licenciatura en Imagen y Sonido forma profesionales con capacidad para concebir, producir y dirigir realizaciones audiovisuales y multimedia innovadoras. Los estudiantes dominan herramientas de producción cinematográfica, edición de video, diseño sonoro, guión, iluminación y postproducción digital. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones creativas en el ámbito público y privado.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Diseñar, dirigir y producir contenidos audiovisuales para cine, televisión, plataformas digitales y medios interactivos.",
                "Obtener el título intermedio de pregrado durante la carrera.",
                "Operar y gestionar la postproducción de imagen, montaje, edición y diseño sonoro.",
                "Coordinar la realización técnica, iluminación y cámara en rodajes y grabaciones.",
                "Planificar presupuestos, planes de rodaje y viabilidad financiera de proyectos creativos.",
                "Desarrollar narrativas transmediáticas, guiones y propuestas de comunicación audiovisual integral.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Lengua Inglesa Elemental",
                        "Pensamiento Filosófico I",
                        "Sistemas Operativos de Computación y Edición Audio Visuales",
                        "Electroacústica",
                        "Electrónica Análoga y Digital",
                        "Operación de Estudio de Radio I",
                        "Fundamentos de Tecnología",
                        "Pensamiento Filosófico II",
                        "Electrónica de la Imagen y Sonido",
                        "Electricidad y Electrónica de las Telecomunicaciones I",
                        "Composición y Fotografía",
                        "Operación de Estudio de TV I",
                        "Introducción a la Edición y Post-Producción de AV"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Lengua Inglesa Intermedia",
                        "Teología I",
                        "Historia de la Cultura I",
                        "Semiótica General y Aplicada",
                        "Audio Perceptiva y Lenguaje Acústico Musical I",
                        "Sistemas de Digitalización de Audio",
                        "Lenguajes y Sistemas Audio Visuales I",
                        "Teología II",
                        "Historia de la Cultura II",
                        "Electricidad y Electrónica de las Telecomunicaciones II",
                        "Electrónica Aplicada a Plantas Transmisoras",
                        "Audio Perceptiva y Lenguaje Acústico Musical II",
                        "Diseño de Imagen y Sonido I"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Metodología de la Investigación en Comunicaciones",
                        "Sistemas de Edición Digital",
                        "Operación de Sistemas de Audio Profesional",
                        "Semiología de la Publicidad",
                        "Generación Electrónica de Imágenes",
                        "Lenguajes y Sistemas Audio Visuales II",
                        "Diseño de Imagen y Sonido II",
                        "Doctrina Social de la Iglesia",
                        "Régimen Legal de las Comunicaciones",
                        "Electricidad y Electrónica de las Telecomunicaciones III",
                        "Práctica Electrónica de Equipamientos de Radio y TV",
                        "Audio Perceptiva y Lenguaje Acústico Musical III",
                        "Operación de Estudio de Radio II y Televisión II",
                        "Postproducción"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Diseño Arquitectónico",
                        "Dibujo Técnico",
                        "Práctica y Producción de Montaje",
                        "Proyecto de Tesis",
                        "Higiene y Seguridad en Telecomunicación",
                        "Acústica Preventiva y Forense",
                        "Análisis de Señales",
                        "Ética Profesional",
                        "Práctica Profesional",
                        "Taller de Tesis",
                        "Medio Ambiente y EIAS"
                    ]
                }
            ]
        },


    },
    {
        codcar: 18,
        sector: 4,
        slug: "ingenieria-civil",
        nombre: "Ingeniería Civil",
        descripcion: "La carrera de Ingeniería Civil forma profesionales con capacidad para planificar, diseñar, construir y mantener infraestructuras esenciales para el desarrollo socioeconómico. Los estudiantes dominan herramientas de cálculo estructural, hidráulica, geotecnia, vías de transporte y gestión de obras. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en el ámbito público y privado.",
        duracion: "5 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Diseñar, calcular y proyectar estructuras, obras edilicias y de infraestructura vial o hidráulica.",
                "Obtener el título intermedio de pregrado durante la carrera.",
                "Dirigir, supervisar y certificar la ejecución de obras públicas y privadas.",
                "Planificar y controlar costos, presupuestos, cronogramas y logística de obra.",
                "Evaluar el impacto ambiental y garantizar la seguridad en el ámbito de la construcción.",
                "Realizar peritajes, tasaciones y auditorías técnicas en proyectos de ingeniería.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Álgebra Lineal I",
                        "Análisis Matemático I",
                        "Química para Ingenieros",
                        "Fundamentos de Informática",
                        "Prueba de Suficiencia en Comunicación Oral y Escrita",
                        "Geología y Mineralogía",
                        "Prueba de Suficiencia de Idioma Inglés",
                        "Álgebra Lineal II",
                        "Análisis Matemático II",
                        "Física I",
                        "Dibujo y Sistemas de Representación"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Estabilidad y Resistencia de Materiales",
                        "Análisis Matemático III",
                        "Física II",
                        "Economía de la Empresa",
                        "Probabilidad y Estadística",
                        "Dibujo Asistido por Computadora",
                        "Análisis Matemático IV",
                        "Física III",
                        "Economía y Finanzas",
                        "Conocimiento y Estudio de Materiales",
                        "Instalaciones en Edificios",
                        "Planeamiento y Urbanismo"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Estabilidad II",
                        "Topografía",
                        "Construcción de Edificios",
                        "Hidráulica General",
                        "Elementos de Arquitectura",
                        "Doctrina Social de la Iglesia",
                        "Análisis Numérico",
                        "Administración de Obras",
                        "Ética Profesional",
                        "Higiene y Seguridad",
                        "Práctica Profesional Supervisada Técnico"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Estabilidad III",
                        "Hormigón Armado",
                        "Recursos Humanos",
                        "Mecánica de Suelos",
                        "Dinámica Estructural",
                        "Fundaciones",
                        "Hidrología",
                        "Instalaciones Complementarias",
                        "Vías de Comunicación"
                    ]
                },
                {
                    "semestre": "5° Año",
                    "materias": [
                        "Construcciones Metálicas y de Madera",
                        "Construcción de Carreteras",
                        "Auditoría de Sistemas",
                        "Ingeniería Legal",
                        "Construcciones de Hormigón Armado",
                        "Hidráulica Aplicada",
                        "Proyecto Final",
                        "Contratación de Obras",
                        "Puentes",
                        "Ingeniería Sanitaria",
                        "Práctica Profesional Supervisada Ingeniero"
                    ]
                }
            ]
        },


    },
    {
        codcar: 238,
        sector: 7,
        slug: "tecnicatura-univ-en-actividad-fisica-y-fitness",
        nombre: "Tecnicatura Univ. en Actividad Física y Fitness",
        descripcion: "La Tecnicatura Universitaria en Actividad Física y Fitness forma profesionales con capacidad para planificar, programar y coordinar entrenamientos orientados a la salud y el rendimiento. Los estudiantes dominan herramientas de preparación física, fisiología del ejercicio, evaluación deportiva, biomecánica y gestión de centros de entrenamiento.",
        duracion: "2 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Diseñar programas de entrenamiento orientados a la salud y condición física.",
                "Dirigir rutinas y clases grupales en gimnasios, centros deportivos y clubes.",
                "Evaluar las capacidades físicas y antropométricas de los usuarios para personalizar el entrenamiento.",
                "Aplicar técnicas de acondicionamiento físico adaptadas a diferentes edades y objetivos.",
                "Asesorar en hábitos saludables, prevención de lesiones y calidad de vida.",
                "Gestionar y coordinar espacios o emprendimientos vinculados al área del fitness.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Aeróbica y STEP",
                        "Gimnasia Formativa y Correctiva Postural",
                        "Anatomía y Fisiología del Ejercicio",
                        "Localizada y Spinning",
                        "Pilates",
                        "Filosofía",
                        "Didáctica General",
                        "Teología",
                        "Psicología de la Actividad Física y el Fitness",
                        "Informática Aplicada al Fitness",
                        "Estética Corporal, Masoterapia y Reflexología",
                        "Práctica I"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Introducción a la Metodología de la Investigación",
                        "Musculación",
                        "Educación y Nutrición para la Salud",
                        "Prevención y Rehabilitación de Lesiones",
                        "Aerobox y Ritmos",
                        "Gimnasia Especial",
                        "Stretching y Gimnasias Blandas",
                        "Marketing y Gestión",
                        "Doctrina Social",
                        "Yoga",
                        "Gimnasia Acuática y Tercera Edad",
                        "Análisis Biomecánico",
                        "Práctica II: Entrenamiento del Fitness y Personal Trainer"
                    ]
                }
            ]
        },


    },
    {
        codcar: 17,
        sector: 3,
        slug: "licenciatura-en-relaciones-internacionales",
        nombre: "Licenciatura en Relaciones Internacionales",
        descripcion: "La Licenciatura en Relaciones Internacionales de UCASAL forma profesionales capacitados para evaluar críticamente los factores que influyen en la política exterior y asesorar a instituciones públicas y empresas privadas sobre la dinámica entre Estados, bloques económicos y organismos internacionales. Habilita para desempeñarse en organismos gubernamentales, ONGs, empresas privadas, docencia e investigación, e ingresar al Servicio Exterior de la Nación.",
        duracion: "4 años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Analizar y prospectar la coyuntura política, económica y social a nivel global.",
                "Diseñar e implementar estrategias de inserción internacional para entidades públicas y privadas.",
                "Asesorar en procesos de negociación colectiva, diplomacia e integración regional.",
                "Planificar y gestionar proyectos de cooperación internacional y desarrollo sustentable.",
                "Evaluar riesgos geopolíticos y oportunidades en el comercio global y los mercados internacionales.",
                "Representar a organizaciones en foros internacionales, cumbres y organismos de cooperación.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Historia Universal Contemporánea",
                    "Introducción al Derecho",
                    "Introducción a las Ciencias Políticas",
                    "Introducción a las Relaciones Internacionales",
                    "Historia Constitucional Argentina",
                    "Filosofía I",
                    "Economía I",
                    "Metodología y Técnicas de la Investigación I",
                    "Computación I",
                    "Inglés I"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Historia Contemporánea de América",
                    "Derecho Constitucional",
                    "Relaciones Internacionales I",
                    "Ciencias Políticas I",
                    "Derecho Internacional Público I",
                    "Filosofía II",
                    "Economía II",
                    "Metodología y Técnica de la Investigación II",
                    "Derecho de los Recursos Naturales y Medio Ambiente",
                    "Computación II",
                    "Inglés II"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Sociología General y Argentina",
                    "Economía III",
                    "Teoría de las Relaciones Internacionales",
                    "Elementos del Derecho Civil, Comercial y Empresarial en las RR. II.",
                    "Ciencias Políticas II",
                    "Derecho Internacional Público II",
                    "Derecho Internacional",
                    "Teología I",
                    "Teología II",
                    "Inglés III",
                    "Portugués I"
                ]
            },
            {
                semestre: "4° Año",
                materias: [
                    "Relaciones Internacionales II",
                    "Política Exterior Argentina",
                    "Derecho Internacional Privado",
                    "Geopolítica",
                    "Doctrina Social de la Iglesia",
                    "Estrategia I",
                    "Estrategia II",
                    "Portugués II",
                    "Seminario: Problemática Económica Argentina Contemporánea",
                    "Seminario: Problemática Política Exterior Actual en la Argentina",
                    "Trabajo Final (Tesis)"
                ]
            }
        ]
    },
    {
        codcar: 173,
        sector: 5,
        slug: "diseno-industrial",
        nombre: "Diseño Industrial",
        descripcion: "La carrera de Diseño Industrial forma profesionales con capacidad para proyectar, desarrollar e innovar en productos y sistemas de producción sustentables. Los estudiantes dominan herramientas de modelado 3D, ciencia de materiales, procesos de fabricación, ergonomía y gestión del diseño. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en el ámbito público y privado.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Concebir y proyectar productos para fabricación en serie, industrial o artesanal.",
                "Desarrollar modelos tridimensionales, maquetas y prototipos funcionales.",
                "Seleccionar materiales, tecnologías y procesos productivos eficientes.",
                "Asesorar a empresas e industrias en innovación y gestión de productos.",
                "Elaborar peritajes, tasaciones y presupuestos en el ámbito del diseño y la producción.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Introducción al Proceso de Diseño",
                        "Introducción a la Tecnología",
                        "Dibujo I",
                        "Introducción al Lenguaje Visual I",
                        "Doctrina Social de la Iglesia",
                        "Historia del Arte y del Diseño",
                        "Diseño de Productos I",
                        "Diseño de Productos II",
                        "Materiales y Procesos I",
                        "Morfología I",
                        "Dibujo II"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Historia del Diseño I",
                        "Inglés I",
                        "Materiales y Procesos II",
                        "Morfología II",
                        "Dibujo III",
                        "Historia del Diseño II",
                        "Inglés II",
                        "Diseño de Productos III",
                        "Diseño de Productos IV",
                        "Materiales y Procesos III",
                        "Morfología III",
                        "Dibujo IV"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Semiótica",
                        "Resoluciones Constructivas No Convencionales (Electiva)",
                        "Materiales y Procesos IV",
                        "Morfología IV",
                        "Teoría y Crítica del Diseño I",
                        "Ergonomía (Electiva)",
                        "Biomateriales (Electiva)",
                        "Investigación en Diseño",
                        "Diseño UX-UI",
                        "Animación 3D",
                        "Factor Local (Electiva)",
                        "Dibujo y Renderizado Digital de Productos (Electiva)",
                        "Gestión Empresarial y Comercialización",
                        "Diseño de Productos V",
                        "Diseño de Productos VI",
                        "Materiales y Procesos V",
                        "Teoría y Crítica del Diseño II",
                        "Diseño y Fabricación de Espacios Expositivos (Electiva)",
                        "Mobiliario Urbano (Electiva)",
                        "Equipamiento (Electiva)",
                        "Diseño de Señalética (Electiva)",
                        "Diseño Universal (Electiva)",
                        "Diseño Social (Electiva)",
                        "Comunicación de Producto (Electiva)",
                        "Textiles Experimentales (Electiva)",
                        "Diseño Gráfico y Comunicación"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Teología",
                        "Legislación",
                        "Empresa de Diseño I",
                        "Diseño de Mobiliario (Electiva)",
                        "Ética",
                        "Práctica Profesional",
                        "Diseño de Productos VII",
                        "Diseño de Productos VIII",
                        "Empresa de Diseño II",
                        "Renderizado Digital (Electiva)",
                        "Diseño de Packaging (Electiva)"
                    ]
                }
            ]
        },


    },
    {
        codcar: 179,
        sector: 5,
        slug: "licenciatura-en-diseno-de-interiores",
        nombre: "Licenciatura en Diseño de Interiores",
        descripcion: "La Licenciatura en Diseño de Interiores forma profesionales con capacidad para proyectar, transformar y optimizar espacios funcionales, estéticos y sostenibles. Los estudiantes dominan herramientas de representación tridimensional, iluminación, teoría del color, selección de materiales y ergonomía. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Proyectar, diseñar y equipar espacios residenciales, comerciales y corporativos.",
                "Seleccionar materiales, iluminación, mobiliario y revestimientos con criterios estéticos y funcionales.",
                "Dirigir, supervisar y controlar la ejecución y terminación de obras de interiorismo.",
                "Presupuestar y gestionar proyectos integrales optimizando costos y recursos.",
                "Desarrollar propuestas sustentables y accesibles priorizando el bienestar del usuario.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Diseño I",
                        "Introducción al Proceso de Diseño",
                        "Introducción a la Tecnología",
                        "Introducción al Lenguaje Visual",
                        "Dibujo I",
                        "Teología",
                        "Historia del Arte y el Diseño I",
                        "Diseño II",
                        "Materiales y Procesos I",
                        "Morfología I",
                        "Dibujo II"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Historia del Arte y el Diseño II",
                        "Diseño III",
                        "Instalaciones I",
                        "Materiales y Procesos II",
                        "Morfología II",
                        "Dibujo III",
                        "Historia del Arte y el Diseño III",
                        "Diseño IV",
                        "Instalaciones II",
                        "Materiales y Procesos III",
                        "Morfología III",
                        "Dibujo IV"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Doctrina Social de la Iglesia",
                        "Historia del Arte y el Diseño IV",
                        "Semiótica",
                        "Inglés I",
                        "Cómputo y Presupuesto",
                        "Diseño V",
                        "Dibujo V",
                        "Ética",
                        "Metodología de la Investigación",
                        "Inglés II",
                        "Gestión Empresarial y Comercialización",
                        "Diseño VI",
                        "Resoluciones Constructivas No Convencionales - RCNC (Electiva)",
                        "Diseño de Señalética (Electiva)",
                        "Renderizado Digital (Electiva)",
                        "Diseño Universal (Electiva)",
                        "Inteligencia Artificial Aplicada al Diseño (Electiva)",
                        "Taller de Creatividad (Electiva)",
                        "Textiles Experimentales (Electiva)",
                        "Storytelling (Electiva)",
                        "Diseño Gráfico y Comunicación"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Legislación",
                        "Paisajismo",
                        "Diseño VII",
                        "Luminotecnia",
                        "Patrimonio Cultural",
                        "Ergonomía (Electiva)",
                        "Modelado BIM con Archicad (Electiva)",
                        "Biomateriales (Electiva)",
                        "Factor Local (Electiva)",
                        "Diseño VIII",
                        "Desarrollo y Estratégias del Diseño Comercial",
                        "Workshops Multidisciplinarios",
                        "Equipamiento (Electiva)",
                        "Práctica Profesional Supervisada"
                    ]
                }
            ]
        },


    },
    {
        codcar: 4,
        sector: 1,
        slug: "profesorado-en-ingles",
        nombre: "Profesorado en Inglés",
        descripcion: "El Profesorado en Inglés forma profesionales con capacidad para planificar, conducir y evaluar procesos de enseñanza del idioma anglosajón. Los estudiantes dominan herramientas de lingüística aplicada, fonética, literatura, didáctica específica y tecnologías de la educación. La carrera combina teoría y práctica para desarrollar docentes capaces de tomar decisiones pedagógicas estratégicas.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Planificar y dictar clases de lengua inglesa en todos los niveles del sistema educativo.",
                "Diseñar materiales didácticos y recursos multimediales para la enseñanza del idioma.",
                "Aplicar metodologías de aprendizaje adaptadas a diferentes edades y contextos.",
                "Evaluar procesos de adquisición de competencias lingüísticas e interculturales.",
                "Asesorar y coordinar departamentos de lenguas extranjeras en instituciones públicas y privadas.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía I",
                        "Pedagogía I",
                        "Historia de la Cultura I",
                        "Lengua Castellana I",
                        "Lengua Inglesa I",
                        "Gramática Inglesa I",
                        "Fonética y Práctica de Laboratorio Dirigido I",
                        "Filosofía II",
                        "Pedagogía II",
                        "Historia de la Cultura II",
                        "Lengua Castellana II",
                        "Lengua Inglesa II",
                        "Gramática Inglesa II",
                        "Fonética y Práctica de Laboratorio Dirigido II"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología I",
                        "Psicología Evolutiva I",
                        "Lengua Castellana III",
                        "Literatura Inglesa I",
                        "Lengua Inglesa III",
                        "Gramática Inglesa III",
                        "Fonética y Práctica de Laboratorio Dirigido III",
                        "Legislación y Organización Escolar",
                        "Teología II",
                        "Psicología Evolutiva II",
                        "Lengua Castellana IV",
                        "Literatura Inglesa II",
                        "Lengua Inglesa IV",
                        "Gramática Inglesa IV",
                        "Fonética y Práctica de Laboratorio Dirigido IV",
                        "Planeamiento Institucional"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Doctrina Social de la Iglesia",
                        "Psicología Educacional",
                        "Literatura Inglesa III",
                        "Lingüística I",
                        "Lengua Inglesa V",
                        "Composición Escrita I",
                        "Administración y Conducción Escolar",
                        "Didáctica General",
                        "Investigación Educativa",
                        "Literatura Inglesa IV",
                        "Lingüística II",
                        "Lengua Inglesa VI",
                        "Composición Escrita II"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Didáctica Especial",
                        "Evaluación de los Aprendizajes",
                        "Estructuras Lingüísticas Comparadas (Seminario)",
                        "Literatura Inglesa V",
                        "Composición Escrita III",
                        "Composición Oral I",
                        "Lengua Inglesa y Práctica de Laboratorio Avanzado I",
                        "Ética Profesional",
                        "Metodología y Práctica de la Enseñanza",
                        "Literatura Inglesa VI",
                        "Composición Escrita IV",
                        "Composición Oral II",
                        "Lengua Inglesa y Práctica de Laboratorio Avanzado II"
                    ]
                }
            ]
        },


    },
    {
        codcar: 6,
        sector: 1,
        slug: "profesorado-en-psicologia",
        nombre: "Profesorado en Psicología",
        descripcion: "El Profesorado en Psicología forma profesionales con capacidad para planificar, conducir y evaluar procesos formativos y de enseñanza de la psicología. Los estudiantes dominan herramientas de didáctica, teorías del aprendizaje, desarrollo psicológico, tecnologías educativas y gestión pedagógica. La carrera combina teoría y práctica para desarrollar docentes capaces de tomar decisiones estratégicas en ámbitos educativos públicos y privados.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Planificar y dictar clases de Psicología y disciplinas afines en los niveles secundario y superior.",
                "Diseñar e implementar proyectos socioeducativos y de orientación escolar.",
                "Aplicar estrategias didácticas adaptadas a diversos procesos de aprendizaje y desarrollo.",
                "Asesorar pedagógicamente a instituciones educativas públicas y privadas.",
                "Promover la inclusión, la convivencia escolar y la prevención en salud mental dentro del aula.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Neuropsicología",
                        "Sistema Educativo y Currículum",
                        "Metodología de la Investigación",
                        "Historia de la Psicología",
                        "Psicología General",
                        "Instituciones Educativas",
                        "Introducción a la Educación y Sujeto del Aprendizaje",
                        "Práctica I: Contexto Comunidad-Escuela Análisis Institucional",
                        "Lingüística"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Psicología Evolutiva y Cultura (Niño y Adolescente)",
                        "Psicología Profunda",
                        "Historia de la Educación Latinoamericana y Argentina",
                        "Estadística (Descriptiva y Muestral)",
                        "Filosofía y Epistemología de la Educación",
                        "Planeamiento, Programación y Diseño de Proyectos Educativos",
                        "Práctica II: Gestión Institucional, Currículum, Enseñanza y",
                        "Programación Educativa Psicología Experimental",
                        "Psicología de la Personalidad",
                        "Didáctica General"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Psicología Educacional",
                        "Psicometría",
                        "Psicología Social",
                        "Psicología Evolutiva y Cultura de Adultez y Senectud",
                        "Psicopatología Infanto Juvenil (General y Especial)",
                        "Dinámica de Grupo",
                        "Técnicas Proyectivas",
                        "Psicopatología del Adulto (General Especial)",
                        "Didáctica Especial de la Psicología",
                        "Práctica III: Observaciones y Prácticas de la Enseñanza en Contextos de Nivel Medio o Secundario"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Doctrina Social",
                        "Orientación Vocacional",
                        "Psicología Especial y de la Diversidad",
                        "Evaluación Educativa",
                        "Mediación Educativa y Resolución de Conflictos",
                        "Trastornos Escolares y Problemas de Aprendizaje",
                        "Ética Profesional",
                        "Psicología de las Relaciones Humanas",
                        "Práctica IV: Observaciones y Prácticas de la Enseñanza en",
                        "Contextos de Nivel Superior Prueba de Suficiencia Idiomática",
                        "Tecnología de la Comunicación y la Información",
                        "Drogodependencia y Abordajes Transdisciplinarios"
                    ]
                }
            ]
        },


    },
    {
        codcar: 109,
        sector: 1,
        slug: "traductor-publico-en-ingles",
        nombre: "Traductor Público en Inglés",
        descripcion: "La carrera de Traductor Público en Inglés forma profesionales con capacidad para brindar fe pública en la traducción e interpretación de documentos legales. Los estudiantes dominan herramientas de traducción jurídica, terminología técnica, lingüística aplicada, derecho comparado y edición. La carrera combina teoría y práctica para desarrollar expertos capaces de tomar decisiones estratégicas e intervenir en el ámbito legal público y privado.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Traducir y validar con fe pública documentos de carácter legal, técnico, comercial y literario.",
                "Obtener el título intermedio de pregrado durante la carrera.",
                "Actuar como perito traductor e intérprete en el ámbito judicial y legislativo.",
                "Intervenir en negociaciones internacionales, eventos corporativos y conferencias.",
                "Aplicar tecnologías y herramientas de traducción asistida por computadora (CAT tools).",
                "Asesorar a empresas y organismos en proyectos de localización y comunicación intercultural.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía I",
                        "Lengua Castellana I",
                        "Lengua Inglesa I",
                        "Gramática Inglesa I",
                        "Fonética y Práctica de Laboratorio Dirigido I",
                        "Introducción a la Traducción I",
                        "Filosofía II",
                        "Lengua Castellana II",
                        "Lengua Inglesa II",
                        "Gramática Inglesa II",
                        "Fonética y Práctica de Laboratorio Dirigido II",
                        "Introducción a la Traducción II",
                        "Derecho I"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología I",
                        "Lengua Castellana III",
                        "Literatura Inglesa I",
                        "Lengua Inglesa III",
                        "Gramática Inglesa III",
                        "Traducción Científico-Técnica",
                        "Fonética y Práctica de Laboratorio Dirigido III",
                        "Derecho II",
                        "Teología II",
                        "Lengua Castellana IV",
                        "Literatura Inglesa II",
                        "Lengua Inglesa IV",
                        "Gramática Inglesa IV",
                        "Traducción Jurídica",
                        "Fonética y Práctica de Laboratorio Dirigido IV",
                        "Derecho III"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Suficiencia Idiomática",
                        "Suficiencia Informática",
                        "Doctrina Social de la Iglesia",
                        "Literatura Inglesa III",
                        "Lingüística I",
                        "Lengua Inglesa V",
                        "Composición Escrita I",
                        "Traducción Literaria",
                        "Derecho IV",
                        "Ética Profesional",
                        "Seminario de Traducción I",
                        "Literatura Inglesa IV",
                        "Lingüística II",
                        "Lengua Inglesa VI",
                        "Composición Escrita II",
                        "Traducción Literaria y Periodística"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Seminario de Traducción II",
                        "Estructuras Lingüísticas Comparadas (Seminario)",
                        "Terminología",
                        "Composición Escrita III",
                        "Lengua Inglesa y Práctica de Laboratorio Dirigido Avanzado I",
                        "Composición Oral I",
                        "Derecho Comparado",
                        "Seminario de Traducción III",
                        "Seminario de Derecho",
                        "Trabajo Final",
                        "Composición Escrita IV",
                        "Lengua Inglesa y Práctica de Laboratorio Dirigido Avanzado II",
                        "Composición Oral II",
                        "Régimen Legal del Traductor Público"
                    ]
                }
            ]
        },


    },
    {
        codcar: 142,
        sector: 6,
        slug: "licenciatura-en-trabajo-social",
        nombre: "Licenciatura en Trabajo Social",
        descripcion: "La Licenciatura en Trabajo Social forma profesionales con capacidad para intervenir en problemáticas sociales y promover los derechos humanos y el bienestar comunitario. Los estudiantes dominan herramientas de diagnóstico social, gestión de políticas públicas, planificación de proyectos, mediación e investigación. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en el ámbito público y privado.",
        duracion: "5 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Diseñar e implementar políticas, planes y proyectos de desarrollo e inclusión social.",
                "Intervenir en familias, grupos y comunidades para promover y restituir derechos.",
                "Elaborar diagnósticos, informes sociales y peritajes en ámbitos judiciales, de salud y educativos.",
                "Coordinar equipos interdisciplinarios en instituciones públicas y organizaciones de la sociedad civil.",
                "Asesorar y gestionar recursos para la atención de situaciones de vulnerabilidad y vulneración de derechos.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Psicología del Desarrollo y de la Subjetividad",
                        "Sociología",
                        "Fundamentos del Trabajo Social",
                        "Práctica Profesionalizante I: Introducción a la Intervención",
                        "Epistemología de las Ciencias Sociales y del Trabajo Social",
                        "Historia Social y Política Latinoamericana",
                        "Comprensión y Producción de Textos",
                        "Historia Social y Política Argentina",
                        "Trabajo Social y Procesos Grupales e Instituciones I",
                        "Derecho y Trabajo Social I"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Antropología Sociocultural",
                        "Metodología de la Investigación en las Ciencias Sociales",
                        "Teoría Social",
                        "Trabajo Social y Procesos Grupales e Instituciones II",
                        "Práctica Profesionalizante II: Grupo",
                        "Técnicas, Instrumentos y Procedimientos del Trabajo Social",
                        "Informática",
                        "Economía Social y Política",
                        "Estado y Políticas Públicas",
                        "Trabajo Social, Territorio y Comunidad I",
                        "Estudios Socio Demográficos I"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Psicología Social e Institucional",
                        "Metodología de la Investigación Aplicada al Trabajo Social",
                        "Planificación y Trabajo Social",
                        "Trabajo Social, Territorio y Comunidad II",
                        "Práctica Profesionalizante III: Comunidad",
                        "Doctrina Social de la Iglesia I",
                        "Prácticas Discursivas en Trabajo Social",
                        "Estudios Socio Demográficos II",
                        "Políticas Sociales Contemporáneas",
                        "Doctrina Social de la Iglesia II",
                        "Trabajo Social con Familias I"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Trabajo Social con Familias II",
                        "Prácticas Profesionalizantes IV: Familia",
                        "Ética",
                        "Seminario Actualización I",
                        "Idioma",
                        "Derecho y Trabajo Social II",
                        "Seminario Actualización II",
                        "Gestión de las Organizaciones Sociales",
                        "Trabajo Social y Perspectiva de Género",
                        "Práctica Integradora"
                    ]
                },
                {
                    "semestre": "5° Año",
                    "materias": [
                        "Taller de Trabajo Integrador Final (TIF)",
                        "Normativas del Ejercicio Profesional",
                        "Práctica Integradora II"
                    ]
                }
            ]
        },


    },
    {
        codcar: 117,
        sector: 4,
        slug: "ingenieria-en-telecomunicaciones",
        nombre: "Ingeniería en Telecomunicaciones",
        descripcion: "La carrera de Ingeniería en Telecomunicaciones forma profesionales con capacidad para diseñar, implementar y gestionar redes y sistemas de comunicación complejos. Los estudiantes dominan herramientas de transmisión de datos, radiocomunicaciones, procesamiento de señales, telefonía móvil y seguridad en redes. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en el ámbito público y privado.",
        duracion: "5 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Diseñar y gestionar redes y sistemas de comunicación.",
                "Obtener el título intermedio de pregrado.",
                "Desplegar infraestructura de redes inalámbricas, fibra óptica y satelital.",
                "Garantizar la seguridad e integridad en la transmisión de datos.",
                "Dirigir y auditar proyectos tecnológicos e integración de IoT.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Álgebra Lineal I",
                        "Análisis Matemático I",
                        "Química para Ingenieros",
                        "Fundamentos de Informática",
                        "Prueba de Suficiencia en Comunicación Oral y Escrita",
                        "Prueba de Suficiencia de Idioma Inglés",
                        "Álgebra Lineal II",
                        "Análisis Matemático II",
                        "Introducción a la Programación",
                        "Física I",
                        "Sistemas de Representación"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Arquitectura de Computadores",
                        "Análisis Matemático III",
                        "Estructura de Datos y Algoritmos",
                        "Lenguajes",
                        "Física II",
                        "Economía de la Empresa",
                        "Probabilidad y Estadística I",
                        "Análisis Matemático IV",
                        "Comunicaciones Básicas",
                        "Programación Aplicada",
                        "Física III",
                        "Economía y Finanzas",
                        "Probabilidad y Estadística II"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Propagación y Radiación Electromagnética",
                        "Doctrina Social de la Iglesia",
                        "Análisis Numérico",
                        "Redes I",
                        "Sistemas y Señales",
                        "Teoría de Circuitos I",
                        "Práctica Profesional Supervisada Técnico",
                        "Ética Profesional",
                        "Sistemas Operativos",
                        "Redes II",
                        "Electrónica I",
                        "Teoría de Circuitos II",
                        "Teoría de la Información y Comunicación"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Medidas Eléctricas y Electrónicas",
                        "Comunicaciones Digitales",
                        "Sistemas de Comunicaciones",
                        "Investigación Operativa",
                        "Gestión de Proyectos",
                        "Electrónica II",
                        "Antenas",
                        "Sistemas de Conmutación",
                        "Sistemas de Transmisión",
                        "Técnicas Digitales",
                        "Redes III",
                        "Sistemas Inalámbricos",
                        "Higiene y Seguridad"
                    ]
                },
                {
                    "semestre": "5° Año",
                    "materias": [
                        "Sistemas de Telecomunicaciones",
                        "Sistemas de Ayuda a la Navegación",
                        "Seguridad y Criptografía",
                        "Recursos Humanos",
                        "Ingeniería Legal",
                        "Comunicaciones Móviles",
                        "Medios Ópticos",
                        "Práctica Profesional Supervisada Ingeniero",
                        "Proyecto de Grado",
                        "Redes Inteligentes",
                        "Sistemas de Entornos",
                        "Legislación Específica",
                        "T.V. Digital y Procesamiento de Imágenes"
                    ]
                }
            ]
        },


    },
    {
        codcar: 343,
        sector: 21,
        slug: "profesorado-universitario-en-educacion-primaria",
        nombre: "Profesorado Universitario en Educación Primaria",
        descripcion: "El Profesorado Universitario en Educación Primaria forma profesionales con capacidad para planificar, conducir y evaluar procesos de enseñanza en el primer nivel del sistema educativo. Los estudiantes dominan herramientas de didáctica general y específica, psicología del desarrollo, gestión pedagógica, inclusión escolar y tecnologías de la educación. La carrera combina teoría y práctica para formar docentes en el ámbito público y privado.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Ejercer la docencia en el nivel primario en instituciones públicas y privadas.",
                "Diseñar e implementar propuestas didácticas adaptadas al currículo y al contexto del aula.",
                "Evaluar procesos de enseñanza y aprendizaje en niños de nivel primario.",
                "Asesorar e integrar equipos pedagógicos y proyectos socioeducativos.",
                "Promover la inclusión, la diversidad y el acompañamiento integral en el ámbito escolar.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Didáctica General",
                        "Práctica I: Contexto, Comunidad y Escuela",
                        "Didáctica de las Matemáticas I",
                        "Historia y Geografía Argentina y Latinoamericana",
                        "Didáctica de las Ciencias Naturales I",
                        "Taller de Lectura y Escritura Académica",
                        "Didáctica de Lengua y Literatura I",
                        "Didáctica de las Ciencias Sociales I",
                        "Humanismo y Doctrina",
                        "Taller de Educación Artística I (Comunicación y Expresión",
                        "Corporal) Sociología de la Educación",
                        "Antropología Filosófica",
                        "Psicología Educacional"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Didáctica de la Matemática II",
                        "Sujeto de la Educación Primaria",
                        "Práctica II: Gestión Institucional, Currículum y Enseñanza",
                        "Taller de Educación Artística II (Teatro y Música)",
                        "Didáctica de las Ciencias Naturales II",
                        "Didáctica de la Lengua y Literatura II",
                        "Didáctica de las Ciencias Sociales II",
                        "Pedagogía",
                        "Evaluación de los Aprendizajes",
                        "Educación Sexual Integral",
                        "Taller de Juegos, Objetos Lúdicos y Aprendizaje"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Práctica III: Coordinación de Grupos y Enseñanza",
                        "Problemática de la Educación Primaria",
                        "Taller de Educación Artística III (Plástica y Folklore)",
                        "Inglés",
                        "Taller de Pedagogía y Didáctica del Juego",
                        "Taller de Alfabetización",
                        "Filosofía de la Educación",
                        "Elaboración y Evaluación de Proyectos Educativos",
                        "Taller de Literatura para el Nivel Primario"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Taller de Tecnología y su Didáctica",
                        "Práctica y Residencia IV: Residencia Taller Integrado (Diseño,",
                        "Enseñanza y Evaluación de la Matemática, la Lengua y Literatura, las Ciencias Sociales y las Ciencias Naturales - Taller de Sistematización de Experiencias Pedagogías Contemporáneas",
                        "Taller: Mediación Escolar y Resolución de Conflictos",
                        "Inclusión Escolar",
                        "Ética y Deontología Profesional",
                        "Formación Ética, Ciudadana y su Didáctica",
                        "Educación Rural e Intercultural"
                    ]
                }
            ]
        },


    },
    {
        codcar: 320,
        sector: 11,
        slug: "licenciatura-en-teologia",
        nombre: "Licenciatura en Teología",
        descripcion: "La Licenciatura en Teología forma profesionales con capacidad para investigar, interpretar y reflexionar sobre la fe y el fenómeno religioso en el contexto socio-cultural actual. Los estudiantes dominan herramientas de exégesis bíblica, teología sistemática, historia de la Iglesia, filosofía y diálogo ecuménico e interreligioso.",
        duracion: "5 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Investigar y reflexionar sobre la fe cristiana y las ciencias sagradas.",
                "Asesorar en formación doctrinal, catequética y agentes de pastoral.",
                "Elaborar propuestas socio-comunitarias con fundamentación ética y teológica.",
                "Integrar equipos docentes e investigativos en el ámbito académico.",
                "Promover el diálogo ecuménico e interreligioso en diversos contextos culturales.",
                "Brindar orientación espiritual y ética a instituciones y comunidades.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Teología Fundamental I: Teología de la Revelación",
                        "Introducción a las Sagradas Escrituras I: Hermenéutica Bíblica",
                        "Introducción a la Patrología I: Padres Prenicenos",
                        "Lógica",
                        "Introducción a la Filosofía",
                        "Historia de la Filosofía I: Antigua",
                        "Latin I",
                        "Teología Fundamental II: Introducción a la Teología",
                        "Introducción a las Sagradas Escrituras II: Historia y Arqueología Bíblica",
                        "Introducción a la Patrología II: Padres Postnicenos",
                        "Filosofía de la Naturaleza",
                        "Filosofía de la Religión",
                        "Seminario: Filosofía Social y Política",
                        "Historia de la Filosofía II: Medieval",
                        "Latin II"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología Dogmática I a: Dios Uno y Trino I",
                        "Exégesis Bíblica I: Evangelios Sinópticos-Hechos",
                        "Introducción a la Teología Litúrgica",
                        "Antropología Filosófica",
                        "Gnoseología y Filosofía del Lenguaje",
                        "Taller de Metodología de Investigación Científica I",
                        "Historia de la Filosofía III: Moderna y Contemporánea",
                        "Griego Bíblico I",
                        "Teología Dogmática I B: Dios Uno y Trino II",
                        "Exégesis Bíblica II: Corpus Joánico",
                        "Sacramentos en General",
                        "Metafísica",
                        "Ética Filosófica",
                        "Taller de Metodología de Investigación Científica II",
                        "Seminario: Animación Bíblica de la Pastoral",
                        "Historia de la Iglesia Antigua",
                        "Griego Bíblico II"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Exégesis Bíblica III: Pentateuco",
                        "Teología Dogmática II a: Cristología I",
                        "Teología Dogmática III a: Teología de la Creación",
                        "Teología Moral I: Moral Fundamental",
                        "Sacramentos en Especial I: Iniciación Cristiana, Bautismo- Confirmación-Eucaristía",
                        "Teología Pastoral I: Fundamental",
                        "Historia de la Iglesia Medieval",
                        "Hebreo Bíblico I",
                        "Exégesis Bíblica IV: Libros Históricos",
                        "Teología Moral II: Virtudes-Mandamientos",
                        "Sacramentos en Especial II: Curación, Reconciliación-Unción de los Enfermos",
                        "Teología Pastoral II: Especial",
                        "Teología Dogmática II B: Cristología II",
                        "Teología Dogmática III B: Antropología Teológica",
                        "Seminario: Pensamiento Teológico Latinoamericano",
                        "Historia de la Iglesia Moderna y Contemporánea",
                        "Hebreo Bíblico II"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Exégesis Bíblica V: San Pablo",
                        "Teología Dogmática IV a: Gracia I",
                        "Teología Dogmática V a: Eclesiología I",
                        "Teología Moral III: Bioética",
                        "Sacramentos en Especial III: al Servicio de la Comunidad, Matrimonio-Orden Sagrado",
                        "Catequética I: Fundamental",
                        "Historia de la Iglesia Latinoamericana y Argentina",
                        "Idioma Extranjero: Inglés I",
                        "Derecho Canónico I",
                        "Exégesis Bíblica VI: Cartas Apostólicas-Hebreos",
                        "Teología Moral IV: Moral Sexual",
                        "Teología Dogmática IV B: Gracia II",
                        "Teología Dogmática V B: Eclesiología II",
                        "Catequética II: Especial",
                        "Síntesis Teológica I",
                        "Idioma Extranjero: Inglés II",
                        "Derecho Canónico II"
                    ]
                },
                {
                    "semestre": "5° Año",
                    "materias": [
                        "Doctrina Social de la Iglesia",
                        "Teología Espiritual",
                        "Síntesis Teológica II",
                        "Teología Dogmática VI: Pneumatología",
                        "Exégesis Bíblica VII: Libros Sapienciales y Poéticos",
                        "Mariología",
                        "Idioma Extranjero: Inglés III",
                        "Derecho Canónico III",
                        "Teología Dogmática VII: Escatología",
                        "Exégesis Bíblica VIII: Libros Proféticos",
                        "Eucaristía",
                        "Seminario: Ecumenismo",
                        "Idioma Extranjero: Inglés IV",
                        "Derecho Canónico IV"
                    ]
                }
            ]
        },


    },
    {
        codcar: 385,
        sector: 1,
        slug: "licenciatura-en-comunicaciones",
        nombre: "Licenciatura en Comunicaciones",
        descripcion: "La Licenciatura en Comunicaciones forma profesionales con capacidad para planificar, gestionar y ejecutar estrategias de comunicación efectivas e innovadoras. Los estudiantes dominan herramientas de gestión de medios, producción de contenidos, comunicación institucional, marketing digital y opinión pública. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en el ámbito público y privado.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Diseñar y gestionar estrategias de comunicación institucional, corporativa y digital.",
                "Obtener el título intermedio de pregrado al finalizar el 5.º semestre.",
                "Crear, producir y gestionar contenidos creativos para medios tradicionales y plataformas multimedia.",
                "Planificar y ejecutar campañas de publicidad, relaciones públicas y gestión de imagen.",
                "Analizar audiencias, tendencias mediáticas y métricas para la toma de decisiones estratégicas.",
                "Coordinar la comunicación de crisis, la reputación de marca y la responsabilidad social.",
                "Liderar proyectos de transformación digital y gestión de medios en organizaciones públicas o privadas.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Taller de Locución",
                        "Historia Contemporánea I",
                        "Herramientas Digitales I",
                        "Taller de Cámara e Iluminación",
                        "Administración y Educación Financiera",
                        "Taller de Redacción para Medios Digitales",
                        "Formatos y Narrativas",
                        "Historia Contemporánea II",
                        "Herramientas Digitales II",
                        "Teoría de la Comunicación",
                        "Diseño Visual"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Community Management",
                        "Taller de Comunicación Multimedia y Transmedia I",
                        "Comunicación Interpersonal",
                        "Semiótica de la Comunicación",
                        "Principios de Programación",
                        "Pensamiento Social Cristiano I",
                        "Psicología de la Comunicación",
                        "Taller de Realización Audiovisual",
                        "Taller de Comunicación Multimedia y Transmedia II",
                        "Comunicación Institucional",
                        "Análisis y Elaboración de Discursos"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Pensamiento Social Cristiano II",
                        "Comunicación en Crisis",
                        "Planificación de la Comunicación",
                        "Ciencia de Datos",
                        "Métrica y Analítica Digital",
                        "Práctica Pre-Profesional",
                        "Publicidad Online",
                        "Sociedad y Cultura Digital",
                        "Comunicación Política y Gubernamental",
                        "Técnicas de Investigación",
                        "Oratoria",
                        "Mercadotecnia Aplicada"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Ética y Deontología Profesional",
                        "Diseño Editorial I",
                        "Crítica Literaria y Audiovisual I",
                        "Audiencias e Innovación",
                        "Tendencias Tecnológicas",
                        "Trabajo Integrador Final I (*)",
                        "Diseño Editorial II",
                        "Crítica Literaria y Audiovisual II",
                        "Modelos de Negocios",
                        "Taller de Aplicación de Datos",
                        "Opinión Pública",
                        "Trabajo Integrador Final II"
                    ]
                }
            ]
        },

    },
    {
        codcar: 47,
        sector: 21,
        slug: "profesorado-universitario-en-educacion-inicial",
        nombre: "Profesorado Universitario en Educación Inicial",
        descripcion: "El Profesorado Universitario en Educación Inicial forma profesionales con capacidad para planificar, conducir y evaluar procesos de enseñanza en las primeras etapas de la infancia. Los estudiantes dominan herramientas de didáctica, desarrollo infantil, juego pedagógico, inclusión escolar y expresión artística.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Ejercer la docencia en salas de jardín maternal y jardín de infantes en instituciones públicas y privadas.",
                "Diseñar e implementar propuestas didácticas lúdicas y adaptadas.",
                "Evaluar y acompañar los procesos de desarrollo, juego y aprendizaje.",
                "Integrar equipos pedagógicos e institucionales para orientar a las familias y a la comunidad.",
                "Promover la inclusión, la diversidad y el bienestar integral de los niños desde sus primeros años.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Didáctica General",
                        "Sujeto del Aprendizaje",
                        "Práctica I: Contexto, Comunidad y Escuela",
                        "Problemática de la Educación Inicial",
                        "Taller de Dinámica de Grupos",
                        "Historia y Geografía Argentina y Latinoamericana I",
                        "Taller de Lectura y Escritura Académica",
                        "Humanismo y Doctrina",
                        "Taller de Educación Artística I (Comunicación y Expresión Corporal)",
                        "Sociología de la Educación",
                        "Antropología Filosófica",
                        "Psicología Educacional"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Psicología del Desarrollo Infantil",
                        "Taller Psicomotricidad de la Educacíon Inicial",
                        "Práctica II: Currículum, Organizadores Escolares y Programación de la Enseñanza",
                        "Didáctica de la Educación Inicial",
                        "Ciencias Sociales y su Didáctica",
                        "Ciencias Naturales y su Didáctica",
                        "Taller de Educación Artística II (Teatro y Música)",
                        "Lengua y Literatura y su Didáctica",
                        "Matemática y su Didáctica",
                        "Psicolingüística",
                        "Pedagogía",
                        "Evaluación de Aprendizajes",
                        "Educación Sexual Integral",
                        "Taller de Juegos, Objetos Lúdicos y Aprendizaje"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Neuropsicología Infantil",
                        "Taller de Educación Artística III (Artes Visuales y Técnicas)",
                        "Práctica III: Práctica de la Enseñanza en Jardín Maternal, 2 y 3",
                        "Año Inglés",
                        "Taller de Alfabetización Inicial",
                        "Educación Temprana",
                        "Taller de Pedagogía y Didáctica del Juego",
                        "Filosofía de la Educación",
                        "Elaboración y Evaluación de Proyectos Educativos",
                        "Taller de Literatura Infantil"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Taller de Tecnología y su Didáctica",
                        "Práctica IV: Residencia e Intercambio de Experiencias. Jardín",
                        "Inicial. Sala de 4 y 5 Años. Pedagogías Contemporáneas",
                        "Taller: Mediación Escolar y Resolución de Conflictos",
                        "Inclusión Escolar",
                        "Ética y Deontología Profesional",
                        "Investigación Educativa",
                        "Educación Rural e Intercultural"
                    ]
                }
            ]
        },


    },
    {
        codcar: 68,
        sector: 3,
        slug: "perito-en-accidentologia",
        nombre: "Perito en Accidentología",
        descripcion: "La carrera de Perito en Accidentología forma profesionales capacitados para investigar, analizar y reconstruir siniestros viales mediante el método científico. Los estudiantes dominan herramientas de física aplicada a colisiones, fotogrametría, mecánica vehicular, legislación de tránsito y criminología. Su formación busca esclarecer hechos complejos para aportar evidencia técnica determinante en procesos judiciales e investigaciones de aseguradoras.",
        duracion: "2 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Investigar y reconstruir técnicamente accidentes de tránsito, laborales y de diversa índole.",
                "Elaborar dictámenes periciales e informes técnicos para el ámbito judicial, policial o privado.",
                "Determinar causas, mecánicas, velocidades y factores de riesgo intervinientes en un siniestro.",
                "Evaluar y aplicar normativas de seguridad vial y prevención de riesgos.",
                "Asesorar a compañías de seguros, organismos públicos y empresas en la gestión de siniestralidad.",
                "Participar en inspecciones oculares, levantamiento de huellas y análisis de evidencias en la escena.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Análisis Matemático I",
                        "Química I",
                        "Derecho Procesal Penal",
                        "Medicina Legal",
                        "Tecnografía Pericial I",
                        "Filosofía I",
                        "Física I",
                        "Derecho Penal",
                        "Accidentología I",
                        "Filosofía II",
                        "Física II",
                        "Accidentología II"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Deontología Pericial",
                        "Análisis Matemático II",
                        "Química Aplicada",
                        "Tecnografía Pericial II",
                        "Teología I",
                        "Fotografía I",
                        "Física III",
                        "Accidentología III",
                        "Teología II",
                        "Fotografía Aplicada",
                        "Física IV",
                        "Derecho Procesal Civil, Comercial y Laboral",
                        "Accidentología IV"
                    ]
                }
            ]
        },


    },
    {
        codcar: 86,
        sector: 8,
        slug: "licenciatura-en-turismo",
        nombre: "Licenciatura en Turismo",
        descripcion: "La Licenciatura en Turismo forma profesionales con capacidad para planificar, gestionar y desarrollar proyectos turísticos sostenibles. Los estudiantes dominan herramientas de gestión hotelera, administración de agencias, patrimonio cultural, marketing turístico y políticas públicas. La carrera combina teoría y práctica para desarrollar líderes capaces de impulsar destinos competitivos e innovar en el sector público y privado.",
        duracion: "4 años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Diseñar, comercializar y gestionar productos, circuitos y destinos turísticos.",
                "Administrar empresas del sector turístico, como agencias de viajes, hoteles y transportes.",
                "Planificar políticas públicas y estrategias de desarrollo turístico regional y local.",
                "Organizar y promover eventos, turismo de reuniones y experiencias culturales o de naturaleza.",
                "Evaluar el impacto ambiental, socioeconómico y cultural de proyectos turísticos.",
                "Aplicar tecnologías de la información y marketing digital.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Inglés Turístico I",
                        "Italiano",
                        "Geografía del Turismo I",
                        "Antropología Cultural",
                        "Historia I",
                        "Estructura del Mercado Turístico",
                        "Marketing Turístico",
                        "Economía del Turismo",
                        "Geografía del Turismo II",
                        "Epistemología del Turismo",
                        "Historia II",
                        "Administración de Empresas Turísticas"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Inglés Turístico II",
                        "Francés",
                        "Metodología de la Investigación",
                        "Creatividad, Innovación y Tecnologías Digitales",
                        "Estadística Aplicada al Turismo",
                        "Seminario: Habilidades de Comunicación",
                        "Destinos Turísticos I",
                        "Empresas de Servicios de Alojamiento",
                        "Costos y Análisis Financiero",
                        "Organización Turística",
                        "Investigación de Mercados",
                        "Destinos Turísticos II",
                        "Empresas de Servicio de Alimentación"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Inglés Turístico III",
                        "Ética Profesional",
                        "Canales de Distribución Turística",
                        "Macroeconomía del Turismo",
                        "Creatividad y Diseño de Productos Innovadores",
                        "Relaciones Públicas",
                        "Diseño de Circuitos Turísticos",
                        "Doctrina Social de la Iglesia",
                        "Organización de Congresos Eventos y Protocolo",
                        "Derecho del Turismo",
                        "Agencias de Viajes",
                        "Turismo Activo"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Práctica Profesional",
                        "Trabajo Final de Licenciatura",
                        "Inglés Turístico IV",
                        "Pastoral del Turismo",
                        "Gestión de Recursos Humanos",
                        "Promoción y Publicidad",
                        "Planificación para el Desarrollo Turístico Sostenible",
                        "Consultoría Turística",
                        "Marketing Internacional",
                        "Gestión de Calidad",
                        "Dirección Estratégica",
                        "Formulación de Proyectos Turísticos",
                        "Liderazgo e Innovación en las Organizaciones"
                    ]
                }
            ],
            7: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Inglés Turístico I",
                        "Italiano",
                        "Geografía del Turismo I",
                        "Antropología Cultural",
                        "Historia I",
                        "Estructura del Mercado Turístico",
                        "Marketing Turístico",
                        "Economía del Turismo",
                        "Geografía del Turismo II",
                        "Epistemología del Turismo",
                        "Historia II",
                        "Administración de Empresas Turísticas"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Inglés Turístico II",
                        "Francés",
                        "Metodología de la Investigación Aplicada al Turismo",
                        "Creatividad, Innovación y Tecnologías Digitales",
                        "Estadística Aplicada al Turismo",
                        "Seminario: Habilidades de Comunicación",
                        "Destinos Turísticos I",
                        "Empresas de Servicios de Alojamiento",
                        "Costos y Análisis Financiero",
                        "Organización Turística",
                        "Investigación de Mercados",
                        "Destinos Turísticos II",
                        "Empresas de Servicio de Alimentación"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Inglés Turístico III",
                        "Ética Profesional",
                        "Canales de Distribución Turística",
                        "Macroeconomía del Turismo",
                        "Creatividad y Diseño de Productos Innovadores",
                        "Relaciones Públicas",
                        "Diseño de Circuitos Turísticos",
                        "Pensamiento Social Cristiano",
                        "Organización de Congresos Eventos y Protocolo",
                        "Planificación de Marketing",
                        "Derecho del Turismo",
                        "Agencias de Viajes",
                        "Turismo Activo"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Práctica Profesional",
                        "Trabajo Final de Licenciatura",
                        "Inglés Turístico IV",
                        "Pastoral del Turismo",
                        "Gestión de Recursos Humanos",
                        "Promoción y Publicidad Turística",
                        "Planificación para el Desarrollo Turístico Sostenible",
                        "Consultoría Turística",
                        "Marketing Internacional",
                        "Gestión de Calidad",
                        "Dirección Estratégica",
                        "Formulación de Proyectos Turísticos",
                        "Liderazgo e Innovación Organizacional"
                    ]
                }
            ]
        },


    },
    {
        codcar: 222,
        sector: 1,
        slug: "licenciatura-en-publicidad",
        nombre: "Licenciatura en Publicidad",
        descripcion: "La Licenciatura en Publicidad forma profesionales capaces de diseñar, implementar y liderar campañas creativas de comunicación estratégica. Los estudiantes dominan herramientas de branding, comportamiento del consumidor, dirección de arte, planificación de medios digitales y redacción publicitaria. La propuesta fomenta una visión innovadora enfocada en posicionar marcas de manera efectiva en entornos altamente competitivos.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Diseñar y ejecutar estrategias creativas de comunicación, marcas y posicionamiento de mercado.",
                "Obtener el título intermedio de pregrado (Técnico Universitario en Publicidad).",
                "Planificar, implementar y optimizar campañas publicitarias en medios tradicionales y digitales.",
                "Investigar el comportamiento del consumidor, tendencias de mercado y analítica de audiencias.",
                "Gestionar la comunicación de marcas, relaciones públicas y la identidad corporativa.",
                "Dirigir proyectos en agencias de publicidad, departamentos de marketing y emprendimientos propios.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Lengua Inglesa Elemental",
                        "Taller de Redacción",
                        "Pensamiento Filosófico I",
                        "Psicología Social",
                        "Teoría de la Comunicación I",
                        "Diseño en Comunicación Visual",
                        "Expresión Oral y Escrita",
                        "Pensamiento Filosófico II",
                        "Psicología de la Motivación",
                        "Informática",
                        "Estadística",
                        "Teoría de la Comunicación II"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Lengua Inglesa Intermedia",
                        "Teología I",
                        "Semiótica General y Aplicada",
                        "Taller de Fotografía",
                        "Introducción a la Comunicación Publicitaria",
                        "Diseño y Producción Audiovisual",
                        "Pensamiento y Producción Creativa I",
                        "Teología II",
                        "Mercadotecnia",
                        "Estética e Historia del Arte",
                        "Pensamiento y Producción Creativa II",
                        "Comunicación Publicitaria",
                        "Taller de Producción Audiovisual"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Metodología de la Investigación en Comunicaciones",
                        "Comportamiento del Consumidor",
                        "Administración de la Empresa de Comunicación",
                        "Semiología de la Publicidad",
                        "Planificación de Medios I",
                        "Comunicaciones Integradas",
                        "Doctrina Social de la Iglesia",
                        "Comunicación Digital",
                        "Dirección y Atención de Cuentas",
                        "Marketing Social y Político",
                        "Régimen Legal de las Comunicaciones",
                        "Planificación de Medios II"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Educomunicación",
                        "Proyecto de Tesis",
                        "Sociología",
                        "Comunicaciones Comerciales",
                        "Comunicación en las Organizaciones",
                        "Análisis del Discurso",
                        "Agencia de Publicidad",
                        "Ética Profesional",
                        "Taller de Tesis",
                        "Historia de los Movimientos Sociales y Políticos",
                        "Planificación",
                        "Comunicación Política",
                        "Opinión Pública",
                        "Práctica Profesional Asistida"
                    ]
                }
            ]
        },


    },
    {
        codcar: 223,
        sector: 1,
        slug: "licenciatura-en-periodismo",
        nombre: "Licenciatura en Periodismo",
        descripcion: "La Licenciatura en Periodismo forma profesionales capacitados para investigar, redactar y difundir información rigurosa en múltiples plataformas analógicas y digitales. Los estudiantes dominan herramientas de producción narrativa, investigación periodística, gestión de contenidos, ética de los medios y análisis geopolítico. Su formación impulsa un pensamiento crítico capaz de interpretar la realidad y generar impacto en la opinión pública.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Investigar, redactar y producir contenidos periodísticos para medios gráficos, audiovisuales y digitales.",
                "Obtener el título intermedio de pregrado (Técnico Universitario en Periodismo).",
                "Realizar cobertura de noticias en tiempo real, entrevistas y crónicas.",
                "Editar y gestionar medios informativos, portales de noticias y nuevos formatos narrativos.",
                "Analizar la realidad social, política y cultural con criterio ético y responsabilidad social.",
                "Gestionar la comunicación informativa y de prensa en instituciones públicas, privadas u organizaciones.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Historia Contemporánea I",
                        "Administración y Educación Financiera",
                        "Taller de Locución",
                        "Taller de Cámara e Iluminación",
                        "Herramientas Digitales I",
                        "Historia Contemporánea II",
                        "Formatos y Narrativas",
                        "Teoría de la Comunicación",
                        "Herramientas Digitales II",
                        "Diseño Visual",
                        "Taller de Redacción e Investigación Periodística"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Historia de las Ideas Políticas",
                        "Principios de Programación",
                        "Semiótica de la Comunicación",
                        "Taller de Creación de Contenidos Multimedia y Transmedia I",
                        "Taller de Periodismo de Actualidad",
                        "Pensamiento Social Cristiano I",
                        "Psicología de la Comunicación",
                        "Taller de Creación de Contenidos Multimedia y Transmedia II",
                        "Análisis y Elaboración de Discursos",
                        "Taller de Periodismo Interpretativo",
                        "Taller de Periodismo Audiovisual"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Pensamiento Social Cristiano II",
                        "Ciencia de Datos",
                        "Economía Política",
                        "Periodismo Especializado I",
                        "Métrica y Analítica Digital",
                        "Práctica Pre-Profesional",
                        "Técnicas de Investigación",
                        "Oratoria",
                        "Periodismo Especializado II",
                        "Sociedad y Cultura Digital",
                        "Comunicación Política y Gubernamental",
                        "Periodismo de Investigación"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Ética y Deontología Profesional",
                        "Trabajo Integrador Final I",
                        "Crítica Literaria y Audiovisual I",
                        "Diseño Editorial I",
                        "Audiencias e Innovación",
                        "Tendencias Tecnológicas",
                        "Trabajo Integrador Final II",
                        "Crítica Literaria y Audiovisual II",
                        "Diseño Editorial II",
                        "Modelos de Negocios",
                        "Opinión Pública",
                        "Periodismo de Datos"
                    ]
                }
            ]
        },


    },
    {
        codcar: 231,
        sector: 9,
        slug: "licenciatura-en-produccion-animal",
        nombre: "Licenciatura en Producción Animal",
        descripcion: "La Licenciatura en Producción Animal forma profesionales capacitados para optimizar la cría, nutrición y manejo integral del ganado mediante la aplicación de criterios científicos y tecnológicos. Los estudiantes dominan herramientas de genética, bioseguridad, reproducción, bienestar animal y eficiencia operativa. Su perfil responde a la creciente demanda de sistemas agropecuarios sostenibles, rentables y respetuosos con el medio ambiente.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Planificar, dirigir y optimizar sistemas de producción ganadera e insumos de origen animal.",
                "Formular dietas y estrategias nutricionales para mejorar el rendimiento y la salud del rodeo.",
                "Implementar programas de reproducción, mejoramiento genético y bienestar animal.",
                "Gestionar la sustentabilidad ambiental, la bioseguridad y el manejo eficiente de los recursos.",
                "Asesorar a empresas agropecuarias, dirigir proyectos productivos y aplicar innovaciones tecnológicas en el sector.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Fundamentos de Química",
                        "Fundamentos de Física Aplicada",
                        "Introducción a la Economía",
                        "Fundamentos de Biología",
                        "Instalaciones y Mecanización Rural",
                        "Teología",
                        "Anatomía y Fisiología",
                        "Sistemas Agroproductivos Regionales",
                        "Inglés Técnico I",
                        "Bioestadística",
                        "Administración de Empresas"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Doctrina Social de la Iglesia",
                        "Pasturas y Forrajes",
                        "Fundamentos de Salud Animal",
                        "Nutrición y Alimentación Animal",
                        "Introducción a la Producción Bovina",
                        "Genética y Mejoramiento",
                        "Taller de Integración",
                        "Manejo Sanitario",
                        "Reproducción Animal",
                        "Introducción a Producciones Menores",
                        "Ética Profesional I",
                        "Planificación y Proyectos I"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Producción Bovina de Carne",
                        "Comercialización Pecuaria I",
                        "Gestión Empresarial",
                        "Legislación Agropecuaria",
                        "Microbiología Aplicada",
                        "Conservación de Forrajes y Alimentos",
                        "Nociones de Sanidad y Terapéutica Vegetal",
                        "Inglés Técnico II",
                        "Producción Equina",
                        "Producción de Rumiantes Menores"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Producciones de Granja",
                        "Producción Porcina",
                        "Piscicultura",
                        "Producción Bovina de Leche",
                        "Ética Profesional II",
                        "Producción Agropecuaria Sustentable",
                        "Apicultura",
                        "Informática Aplicada",
                        "Comercialización Pecuaria II",
                        "Planificación y Proyectos II",
                        "Agroindustrias",
                        "Práctica Profesional Supervisada"
                    ]
                }
            ]
        },


    },
    {
        codcar: 32,
        sector: 7,
        slug: "licenciatura-en-educacion-fisica",
        nombre: "Licenciatura en Educación Física",
        descripcion: "La Licenciatura en Educación Física forma profesionales capacitados para diseñar, dirigir y evaluar programas de formación motriz, entrenamiento deportivo y promoción de la salud. Los estudiantes dominan herramientas de fisiología del ejercicio, biomecánica, pedagogía, gestión deportiva y preparación física avanzada. Su perfil busca liderar proyectos educativos y de alto rendimiento que mejoren la calidad de vida de las personas.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Diseñar, dirigir y evaluar programas de educación física, deporte y recreación en diversos contextos.",
                "Planificar el entrenamiento deportivo de alto rendimiento y la preparación física adaptada.",
                "Promover la actividad física orientada a la salud, la prevención de enfermedades y el bienestar integral.",
                "Liderar y gestionar instituciones, clubes, gimnasios y proyectos deportivos.",
                "Formular y ejecutar proyectos de investigación en el campo de la motricidad humana.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Gimnasia Formativa",
                        "Recreación",
                        "Atletismo I",
                        "Filosofía",
                        "Desarrollo Psico-Motriz",
                        "Psicología General y Evolutiva",
                        "Juegos Motores",
                        "Anatomía Funcional",
                        "Didáctica General",
                        "Comunicación y Expresión"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Natación y Deportes Acuáticos I",
                        "Gimnasia Artística y Deportiva",
                        "Fútbol",
                        "Atletismo II",
                        "Psicología de la Actividad Física y del Deporte",
                        "Metodología del Aprendizaje Motor",
                        "Didáctica Específica",
                        "Vida con la Naturaleza y Medio Ambiente",
                        "Fisiología de la Actividad Física",
                        "Handbol",
                        "Historia y Fundamentos de la Educación Física"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Natación y Deportes Acuáticos II",
                        "Básquetbol",
                        "Gimnasia Rítmica y Aeróbica",
                        "Hockey",
                        "Voleibol",
                        "Introducción a la Metodología de la Investigación",
                        "Informática Aplicada",
                        "Estadística",
                        "Doctrina Social"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Nutrición Deportiva",
                        "Descripción, Estadística y Metrología Deportiva",
                        "Análisis de la Estrategia de los Deportes",
                        "Planeamiento y Gestión de Políticas en Educación Física y Deporte",
                        "Gimnasia y Deportes para Personas con Necesidades Especiales",
                        "Metodología de la Investigación",
                        "Tesis",
                        "Organización, Planificación y Control del Deporte y la Actividad Física",
                        "Fisiología de la Actividad Física y Entrenamiento Deportivo"
                    ]
                }
            ]
        },


    },
    {
        codcar: 139,
        sector: 20,
        slug: "licenciatura-en-artes-musicales",
        nombre: "Licenciatura en Artes Musicales",
        descripcion: "La Licenciatura en Artes Musicales forma profesionales capacitados para la ejecución, composición, análisis e interpretación en diversos lenguajes y estilos sonoros. Los estudiantes dominan herramientas de armonía, contrapunto, entrenamiento auditivo, producción musical, tecnología aplicada e historia de la música. Su perfil fomenta la innovación artística y la excelencia técnica para destacar en la creación e industria cultural.",
        duracion: "5 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Interpretar, componer y arreglar obras musicales en diversos géneros y estilos.",
                "Obtener el título intermedio de pregrado (Técnico Universitario en Artes Musicales).",
                "Dirigir agrupaciones vocales e instrumentales en proyectos artísticos e institucionales.",
                "Aplicar tecnologías aplicadas a la producción, grabación y edición de sonido musical.",
                "Desarrollar proyectos de investigación, crítica y gestión cultural en el ámbito musical.",
                "Ejercer la docencia y la formación artística en instituciones educativas y comunitarias.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Historia de la Música I",
                        "Contrapunto y Armonía I",
                        "Instrumento Principal I / Canto I (Guitarra)",
                        "Instrumento Principal I / Canto I (Piano)",
                        "Instrumento Principal I / Canto I (Violín)",
                        "Instrumento Principal I / Canto I (Violoncello)",
                        "Instrumento Principal I / Canto I (Análisis Musical)",
                        "Instrumento Principal I / Canto I (Flauta Dulce)",
                        "Instrumento Principal I / Canto I (Clarinete)",
                        "Instrumento Principal I / Canto I (Canto)",
                        "Instrumento de Teclado Complementario I (Piano u Órgano)",
                        "Práctica de Conjunto I (Coral)"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Historia de la Música II",
                        "Contrapunto y Armonía II",
                        "Instrumento Principal II / Canto II (Guitarra)",
                        "Instrumento Principal II / Canto II (Piano)",
                        "Instrumento Principal II / Canto II (Violín)",
                        "Instrumento Principal II / Canto II (Violoncello)",
                        "Instrumento Principal II / Canto II (Introducción a la Instrumentación y Composición)",
                        "Instrumento Principal II / Canto II (Técnica de Dirección y Repertorio)",
                        "Instrumento Principal II / Canto II (Flauta Dulce)",
                        "Instrumento Principal II / Canto II (Clarinete)",
                        "Instrumento Principal II / Canto II (Canto)",
                        "Instrumento de Teclado Complementario II (Piano)",
                        "Práctica de Conjunto II (Coral)",
                        "Acústica Musical y Organología General"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Historia de la Música III",
                        "Contrapunto y Armonía III",
                        "Instrumento Principal III / Canto III (Guitarra)",
                        "Instrumento Principal III / Canto III (Piano)",
                        "Instrumento Principal III / Canto III (Violín)",
                        "Instrumento Principal III / Canto III (Violoncello)",
                        "Instrumento Principal III / Canto III (Introducción a la Instrumentación y Composición)",
                        "Instrumento Principal III / Canto III (Técnica de Dirección y Repertorio)",
                        "Instrumento Principal III / Canto III (Flauta Dulce)",
                        "Instrumento Principal III / Canto III (Clarinete)",
                        "Instrumento Principal III / Canto III (Canto)",
                        "Instrumento de Teclado Complementario III (Piano u Órgano)",
                        "Práctica de Conjunto III (Instrumental)",
                        "Formas y Géneros Musicales I",
                        "Doctrina Social de la Iglesia",
                        "Ética Profesional",
                        "Dirección I: Introducción a la Dirección Coral"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Dirección II: Coral y Orquestal",
                        "Formas y Géneros Musicales II",
                        "Contrapunto y Armonía IV: Estudio de la Fuga",
                        "Instrumentación y Orquestación I",
                        "Instrumento Principal IV / Canto IV (Guitarra)",
                        "Instrumento Principal IV / Canto IV (Piano)",
                        "Instrumento Principal IV / Canto IV (Violín)",
                        "Instrumento Principal IV / Canto IV (Violoncello)",
                        "Instrumento Principal IV / Canto IV (Flauta Dulce)",
                        "Instrumento Principal IV / Canto IV (Clarinete)",
                        "Instrumento Principal IV / Canto IV (Canto)",
                        "Composición I",
                        "Filosofía del Arte",
                        "Historia de la Música Sacra",
                        "Bajo Cifrado y Continuo",
                        "Historia de la Música IV: Sudamericana y Argentina",
                        "Estética Musical",
                        "Canto Gregoriano I",
                        "Canto Gregoriano II"
                    ]
                },
                {
                    "semestre": "5° Año",
                    "materias": [
                        "Dirección III: Coral y Orquestal",
                        "Contrapunto y Armonía V",
                        "Instrumentación y Orquestación II",
                        "Instrumento Principal V / Canto V (Guitarra)",
                        "Instrumento Principal V / Canto V (Piano)",
                        "Instrumento Principal V / Canto V (Violín)",
                        "Instrumento Principal V / Canto V (Violoncello)",
                        "Instrumento Principal V / Canto V (Flauta Dulce)",
                        "Instrumento Principal V / Canto V (Clarinete)",
                        "Instrumento Principal V / Canto V (Canto)",
                        "Composición II",
                        "Metodología de la Investigación",
                        "Recital de Cámara o con Coro y/u Orquesta",
                        "Transcripción y Reducción de Partituras",
                        "Seminario (Tesis)"
                    ]
                }
            ]
        },


    },
    {
        codcar: 30,
        sector: 2,
        slug: "licenciatura-en-relaciones-publicas-e-institucionales",
        nombre: "Licenciatura en Relaciones Públicas e Institucionales",
        descripcion: "La Licenciatura en Relaciones Públicas e Institucionales forma profesionales capaces de diseñar y gestionar estrategias de comunicación integral para diversas organizaciones. Su plan de estudios integra la gestión de imagen corporativa, la resolución de crisis, la organización de eventos y las relaciones con los medios digitales. Propone un espacio académico para comprender el vínculo institucional y construir puentes de diálogo transparentes.",
        duracion: "4 años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Diseñar e implementar estrategias de comunicación institucional, reputación e imagen de marca.",
                "Gestionar las relaciones de la organización con la prensa, líderes de opinión y la comunidad.",
                "Liderar la comunicación de crisis para prevenir, mitigar y proteger la identidad corporativa.",
                "Planificar y coordinar eventos corporativos, congresos, ceremoniales y protocolos oficiales.",
                "Diseñar planes de comunicación interna para fortalecer el clima y la cultura organizacional.",
                "Desarrollar programas de responsabilidad social empresarial y vinculación con la comunidad.",
                "Asesorar a directivos en el relacionamiento estratégico con organismos públicos y privados.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Comprensión y Producción de Textos",
                        "Principios de Economía",
                        "Introducción a la Administración de las Organizaciones",
                        "Introducción a las Relaciones Públicas",
                        "Psicología Social y Organizacional",
                        "Historia Social y Económica",
                        "Tecnología de la Información y de la Comunicación I",
                        "Redacción y Estilo",
                        "Teoría de la Comunicación"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Introducción al Pensamiento Cristiano",
                        "Lengua Inglesa I",
                        "Marketing",
                        "Comunicación Organizacional",
                        "Ceremonial y Protocolo",
                        "Lengua Inglesa II",
                        "Tecnología de la Información y de la Comunicación II",
                        "Estadística",
                        "Oratoria",
                        "Publicidad y Promoción"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Doctrina Social Cristiana",
                        "Medios Digitales",
                        "Producción y Organización de Eventos",
                        "Identidad e Imagen Corporativa",
                        "Diseño Gráfico",
                        "Gestión del Personal",
                        "Administración de las Relaciones Públicas",
                        "Opinión Pública",
                        "Gestión Comunitaria y Cultural"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Trabajo Final de Graduación",
                        "Ética y Responsabilidad Social",
                        "Metodología de la Investigación",
                        "Semiótica",
                        "Taller de Community Manager",
                        "Relaciones Internacionales",
                        "Seminarios de Actualización y Tendencias Profesionales",
                        "Estrategias de Negociación",
                        "Dirección Estratégica de las Relaciones Públicas",
                        "Asuntos Públicos"
                    ]
                }
            ],
            7: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Comprensión y Producción de Textos",
                        "Principios de Economía",
                        "Introducción a la Administración de las Organizaciones",
                        "Introducción a las Relaciones Públicas",
                        "Psicología Social y Organizacional",
                        "Historia Social y Económica",
                        "Tecnologías de la Información y Comunicación I",
                        "Redacción y Estilo",
                        "Teoría de la Comunicación"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Introducción al Pensamiento Cristiano",
                        "Lengua Inglesa I",
                        "Marketing",
                        "Comunicación Organizacional",
                        "Ceremonial y Protocolo",
                        "Lengua Inglesa II",
                        "Tecnologías de la Información y Comunicación II",
                        "Estadística",
                        "Oratoria",
                        "Publicidad y Promoción"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Doctrina Social Cristiana",
                        "Medios Digitales",
                        "Producción y Organización de Eventos",
                        "Identidad e Imagen Corporativa",
                        "Diseño Gráfico",
                        "Gestión del Personal",
                        "Administración de las Relaciones Públicas",
                        "Opinión Pública",
                        "Gestión Comunitaria y Cultural"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Trabajo Final de Graduación",
                        "Ética y Responsabilidad Social",
                        "Metodología de la Investigación",
                        "Semiótica",
                        "Taller de Community Manager",
                        "Relaciones Internacionales",
                        "Seminarios de Actualización y Tendencias Profesionales",
                        "Estrategias de Negociación",
                        "Dirección Estratégica de las Relaciones Públicas",
                        "Asuntos Públicos"
                    ]
                }
            ]
        },


    },
    {
        codcar: 100,
        sector: 1,
        slug: "licenciatura-en-filosofia",
        nombre: "Licenciatura en Filosofía",
        descripcion: "La Licenciatura en Filosofía forma profesionales capacitados para examinar, cuestionar y comprender de manera rigurosa los grandes dilemas del pensamiento humano y la sociedad. Los estudiantes dominan herramientas de lógica, epistemología, ética, metafísica, historia de las ideas y análisis del discurso. Esta propuesta impulsa una sólida capacidad analítica y argumentativa clave para abordar las problemáticas contemporáneas.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Investigar y analizar temas éticos, políticos y sociales.",
                "Desarrollar proyectos de investigación en ciencias humanas.",
                "Asesorar a instituciones en ética y responsabilidad social.",
                "Producir textos y material de divulgación cultural.",
                "Ejercer la docencia e integrar equipos interdisciplinarios.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Introducción a la Filosofía",
                        "Lógica y Pensamiento Crítico",
                        "Introducción a la Psicología",
                        "Historia de la Filosofía Antigua y Lectura e Interpretación de",
                        "Autores de Textos de la Filosofía Antigua Lengua Clásica I",
                        "Pedagogía General",
                        "Política Educativa",
                        "Institución y Gestión Escolar"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología I",
                        "Filosofía de la Naturaleza",
                        "Antropología Filosófica",
                        "Práctica Docente I (Contexto y Escuela)",
                        "Historia de la Filosofía Medieval y Lectura e Interpretación de",
                        "Autores de Textos de la Filosofía Antigua Medieval Lengua Clásica II",
                        "Filosofía de la Educación",
                        "Psicología del Adolescente y del Adulto",
                        "Psicología Educacional",
                        "Didáctica General"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Teología II",
                        "Filosofía de la Historia",
                        "Ética",
                        "Gnoseología",
                        "Práctica Docente II (Diseño Curricular Institucional)",
                        "Historia de la Filosofía Moderna Lectura e Interpretación de",
                        "Autores de Textos de la Filosofía Antigua Moderna Estética",
                        "Didáctica Especial",
                        "Seminario sobre el Uso de las Tecnologías de la Información y las Comunicaciones en Educación"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Doctrina Social de la Iglesia",
                        "Metafísica I",
                        "Filosofía de la Ciencia",
                        "Filosofía del Lenguaje",
                        "Práctica Docente III (Proyectos Áulicos)",
                        "Historia de la Filosofía Contemporánea y Lectura e Interpretación de Autores de Textos de la Filosofía Antigua Contemporánea",
                        "Currículum y Evaluación Educativa",
                        "Investigación Educativa"
                    ]
                },
                {
                    "semestre": "5° Año",
                    "materias": [
                        "Metafísica II",
                        "Filosofía de la Religión",
                        "Filosofía Social y Política",
                        "Pensamiento Argentino y Latinoamericano",
                        "Ética Aplicada",
                        "Tesis",
                        "Taller de Diseño de Tesis (Metodología de la Investigación Científica)",
                        "Espacio Curricular de Configuración Alternativa I",
                        "Espacio Curricular de Configuración Alternativa II"
                    ]
                }
            ]
        },


    },
    {
        codcar: 132,
        sector: 3,
        slug: "ciencias-politicas",
        nombre: "Ciencias Políticas",
        descripcion: "La Licenciatura en Ciencias Políticas forma profesionales capacitados para analizar, interpretar y gestionar los procesos de poder, las instituciones públicas y la dinámica social. Los estudiantes dominan herramientas de teoría política, relaciones internacionales, políticas públicas, opinión pública y análisis legislativo. Esta formación impulsa la toma de decisiones estratégicas en el diseño e implementación de proyectos gubernamentales y sociales.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Analizar procesos políticos, políticas públicas y relaciones internacionales.",
                "Diseñar y evaluar estrategias de gestión pública y gobernanza.",
                "Asesorar a organismos estatales, empresas y ONGs.",
                "Planificar campañas electorales, comunicación y opinión pública.",
                "Investigar y redactar informes sobre la realidad sociopolítica.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía I",
                        "Historia del Pensamiento Político",
                        "Taller de Lectura y Escritura Académica",
                        "Introducción a las Ciencias Políticas",
                        "Introducción al Derecho y Sistema Constitucional",
                        "Filosofía II",
                        "Sociología",
                        "Relaciones Internacionales I",
                        "Teoría Política I",
                        "Oratoria y Argumentación I"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología I",
                        "Relaciones Internacionales II",
                        "Teoría Política II",
                        "Oratoria y Argumentación II",
                        "Metodología de la Investigación Social",
                        "Teología II",
                        "Economía Política",
                        "Comunicación Política",
                        "Políticas Públicas I",
                        "Derecho Electoral y Partidos Políticos"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Pensamiento Social Cristiano I",
                        "Tecnologías de la Información y Comunicación",
                        "Políticas Públicas II",
                        "Sistemas Políticos Comparados",
                        "Opinión Pública y Análisis de Encuestas",
                        "Pensamiento Social Cristiano II",
                        "Estadística Aplicada a las Ciencias Políticas",
                        "Gestión de Proyectos Políticos y Sociales",
                        "Gobierno y Administración Pública",
                        "Técnica Documental y Legislativa"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Geopolítica y Estrategia",
                        "Ética Profesional",
                        "Integración y Cooperación Internacional",
                        "Teoría y Práctica de la Negociación",
                        "Derechos Humanos",
                        "Psicología Política",
                        "Práctica Profesional",
                        "Liderazgo Político y Gestión de Crisis",
                        "Marketing y Diseño de Campañas Políticas",
                        "Seguridad y Defensa",
                        "Política y Medio Ambiente"
                    ]
                }
            ]
        },


    },
    {
        codcar: 372,
        sector: 3,
        slug: "tecnicatura-en-administracion-y-gestion-judicial",
        nombre: "Tecnicatura en Administración y Gestión Judicial",
        descripcion: "La Tecnicatura en Administración y Gestión Judicial forma profesionales capacitados para coordinar, optimizar y modernizar los procedimientos operativos dentro del sistema de justicia. Los estudiantes dominan herramientas de derecho procesal, expediente digital, gestión documental, organización de la oficina judicial y atención al usuario. Esta titulación fortalece la eficiencia institucional para agilizar la tramitación de causas.",
        duracion: "2 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Administrar y optimizar procesos en juzgados y organismos judiciales.",
                "Gestionar documentación, expedientes electrónicos y trámites procesales.",
                "Aplicar normativas legales y sistemas informáticos del ámbito judicial.",
                "Colaborar en la atención al público y recepción de escritos procesales.",
                "Asesorar en logística administrativa a estudios jurídicos y consultoras.",
                "Integrar equipos de trabajo en la función pública u organismos afines.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Recursos Humanos y Gestión de Calidad",
                        "Introducción al Derecho",
                        "Lógica y Argumentación Jurídica",
                        "Gestión Judicial I",
                        "Estructura y Funcionamiento del Poder Judicial y Ministerio",
                        "Público Teología",
                        "Gestión Judicial II",
                        "Bases del Derecho Constitucional y Derechos Humanos",
                        "Bases del Derecho Civil",
                        "Bases del Derecho Penal y Contravencional"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Doctrina Social de la Iglesia",
                        "Recursos Tecnológicos Aplicados a la Administración de Justicia",
                        "Bases del Derecho de Familia",
                        "Bases del Derecho Laboral",
                        "Bases del Derecho Administrativo",
                        "Taller de Ética y Práctica Profesional",
                        "Trabajo Final Integrador",
                        "Métodos Alternativos de Resolución de Conflictos",
                        "Teoría General del Proceso Civil",
                        "Teoría General del Proceso Penal"
                    ]
                }
            ]
        },


    },
    {
        codcar: 7,
        sector: 1,
        slug: "locutor-nacional",
        nombre: "Locutor Nacional",
        descripcion: "La carrera de Locutor Nacional forma profesionales capacitados para dominar el uso de la voz, la comunicación oral y la conducción en medios de difusión tradicionales y digitales. Los estudiantes dominan herramientas de foniatría, locución comercial, oratoria, lectura interpretativa, doblaje y articulación periodística. Esta propuesta fortalece la versatilidad sonora y el rigor comunicacional para liderar producciones audiovisuales.",
        duracion: "3 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Conducir programas de radio, televisión y medios digitales.",
                "Realizar doblajes, narraciones y locuciones publicitarias o institucionales.",
                "Aplicar técnicas de oratoria, fonación y manejo de la voz.",
                "Producir contenidos sonoros y realizar lecturas informativas.",
                "Moderar eventos, presentaciones protocolares y conferencias.",
                "Gestionar proyectos de comunicación sonora y podcasts independientes.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Historia Americana y Argentina",
                    "Inglés I",
                    "Cuerpo y Voz",
                    "Práctica Integral de Radio I",
                    "Locución I",
                    "Foniatría I",
                    "Práctica Integral de Televisión I",
                    "Fundamentos de Tecnología",
                    "Libretos y Guiones",
                    "Introducción a los Medios de Comunicación Social",
                    "Pronunciación de Francés",
                    "Pronunciación de Alemán"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Historia Argentina y Contemporánea",
                    "Literatura",
                    "Inglés II",
                    "Actuación Dramática",
                    "Principios de Estética e Historia del Arte",
                    "Práctica Integral de Radio II",
                    "Locución II",
                    "Foniatría II",
                    "Práctica Integral de Televisión II",
                    "Oratoria",
                    "Pronunciación de Italiano",
                    "Redacción Periodística",
                    "Taller de Investigación Periodística",
                    "Programa para Niño"
                ]
            },
            {
                semestre: "3° Año",
                materias: [
                    "Historia de la Radiodifusión",
                    "Inglés III",
                    "Portugués",
                    "Informática",
                    "Asuntos Legales",
                    "Práctica Integral de Radio III",
                    "Locución III",
                    "Foniatría III",
                    "Práctica Integral de Televisión III",
                    "Doblaje",
                    "Interpretación Radial",
                    "Música Popular",
                    "Música Clásica",
                    "Examen de Habilitación: Locutor Nacional"
                ]
            }
        ]
    },
    {
        codcar: 54,
        sector: 1,
        slug: "productor-y-director-para-radio-y-television",
        nombre: "Productor y Director para Radio y Televisión",
        descripcion: "La carrera de Productor y Director para Radio y Televisión forma profesionales capacitados para diseñar, realizar y coordinar contenidos audiovisuales y sonoros en múltiples plataformas. Los estudiantes dominan herramientas de guion, dirección de cámaras, edición digital, diseño de producción, puesta en aire y gestión de proyectos. Esta propuesta fomenta la innovación narrativa e impulsa la creación de formatos de alto impacto comunicacional.",
        duracion: "3 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Diseñar, planificar y dirigir proyectos de medios radiales, televisivos y multimediales.",
                "Elaborar guiones, contenidos creativos y formatos para distintos géneros audiovisuales.",
                "Gestionar las etapas de preproducción, realización, edición y postproducción.",
                "Administrar presupuestos, recursos técnicos y equipos de trabajo en medios de comunicación.",
                "Obtener el carnet habilitante de validez nacional otorgado mediante convenio con el ISER.",
                "Liderar emprendimientos independientes, productoras audiovisuales y contenidos digitales.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Dirección de Arte",
                        "Producción y Realización Audiovisual I",
                        "Producción y Realización Radiofónica I",
                        "Taller de Libretos y Guiones",
                        "Fundamentos de Tecnología",
                        "Sonido y Musicalización"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Régimen Legal de la Radiodifusión",
                        "Producción y Realización Audiovisual II",
                        "Producción y Realización Radiofónica II",
                        "Edición y Montaje",
                        "Guión Audiovisual",
                        "Producción Ejecutiva"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Literatura",
                        "Radio y Televisión Educativa",
                        "Gestión y Administración de la Producción",
                        "Postproducción",
                        "Producción y Realización Audiovisual III",
                        "Producción y Realización Radiofónica III",
                        "Examen de Habilitación: Productor y Director para Radio y TV"
                    ]
                }
            ]
        },


    },
    {
        codcar: 348,
        sector: 2,
        slug: "tecnicatura-univ-en-administracion-y-gestion-universitaria",
        nombre: "Tecnicatura Univ. en Administración y Gestión Universitaria",
        descripcion: "La Tecnicatura Universitaria en Administración y Gestión Universitaria forma profesionales capacitados para coordinar, planificar y optimizar los procesos institucionales del ámbito académico superior. Los estudiantes dominan herramientas de legislación universitaria, gestión contable, administración de recursos humanos, archivos y procedimientos presupuestarios. Esta titulación promueve la modernización técnica para garantizar una atención y gobernanza eficiente.",
        duracion: "2½ años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Gestionar procesos administrativos y académicos en instituciones de educación superior.",
                "Tramitar expedientes, normativas y documentación propia del ámbito universitario.",
                "Operar sistemas informáticos de gestión académica, de alumnos y administrativa.",
                "Organizar recursos humanos, financieros y logísticos dentro de la universidad.",
                "Atender y orientar a estudiantes, docentes y público general sobre trámites institucionales.",
                "Colaborar en la planificación, autoevaluación y mejora continua de proyectos educativos.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Situación y Problemática de la Educación Superior",
                        "Estrategias de Comprensión y Producción de Textos",
                        "Introducción a la Administración de Organizaciones",
                        "Instituciones del Derecho",
                        "Análisis y Comportamiento Organizacional",
                        "Sistemas Informáticos",
                        "Administración de Organizaciones Universitarias",
                        "Política y Legislación de la Educación Superior"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Tecnologías de la Información Aplicadas a la Gestión Universitaria",
                        "Estadística",
                        "Marketing de Servicios Educativos",
                        "Sistemas y Procedimientos Administrativos",
                        "Comunicación Organizacional",
                        "Antropología Teológica",
                        "Gestión de Costos y Presupuestos",
                        "Gestión del Personal",
                        "Planeamiento Estratégico"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Taller de Análisis y Resolución de Problemas",
                        "Trabajo Final de Aplicación",
                        "Identidad y Organización de las Universidades Católicas",
                        "Responsabilidad Social Universitaria"
                    ]
                }
            ]
        },


    },
    {
        codcar: 249,
        sector: 21,
        slug: "profesorado-universitario-campo-disciplinar-segun-titulacion-de-base-ccc",
        nombre: "Profesorado Universitario (Campo Disciplinar según Titulación de Base) - CCC",
        descripcion: "El Profesorado Universitario para Titulados de Base forma profesionales capacitados para planificar, conducir y evaluar procesos de enseñanza en el nivel superior y universitario. Los estudiantes dominan herramientas de pedagogía, didáctica general y específica, psicología del aprendizaje, diseño curricular y tecnologías educativas. Esta propuesta brinda la fundamentación docente necesaria para transformar el saber disciplinar de origen en una práctica pedagógica de excelencia.",
        duracion: "2 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Ejercer la docencia universitaria y en el nivel superior según su título de base.",
                "Planificar, implementar y evaluar procesos de enseñanza y aprendizaje.",
                "Diseñar propuestas didácticas e innovaciones pedagógicas adaptadas.",
                "Integrar equipos de investigación, gestión y orientación educativa.",
                "Asesorar en el diseño curricular y evaluación institucional.",
                "Producir materiales educativos y contenidos para diversos entornos de aprendizaje.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Práctica I. Análisis de Contextos y de las Instituciones Educativas",
                        "Taller de Lectura y Escritura Académica",
                        "Filosofía de la Educación",
                        "Didáctica",
                        "Currículum",
                        "Sujetos del Aprendizaje I",
                        "Psicología Educacional",
                        "Evaluación de los Aprendizajes",
                        "Programación de la Enseñanza",
                        "Nuevas Tecnologías en Educación"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Práctica II. Diseño, Práctica y Reflexión de la Enseñanza en el Nivel Secundario y Superior",
                        "Taller de Sistematización de las Prácticas Docentes",
                        "Humanismo y Doctrina Social de la Iglesia",
                        "Ética y Deontología Profesional",
                        "Sujetos del Aprendizaje II",
                        "Estratégias Didácticas y de Aprendizaje",
                        "Pedagogía",
                        "Política de la Educación Argentina"
                    ]
                }
            ]
        },


    },
    {
        codcar: 332,
        sector: 6,
        slug: "licenciatura-en-trabajo-social-ccc",
        nombre: "Licenciatura en Trabajo Social - CCC",
        descripcion: "La Licenciatura en Trabajo Social (Ciclo de Complementación Curricular) forma profesionales capacitados para diseñar, gestionar y evaluar intervenciones comunitarias y políticas públicas orientadas al bienestar social. Los estudiantes dominan herramientas de diagnóstico territorial, mediación de conflictos, derechos humanos, metodologías participativas y formulación de proyectos sociales. Esta propuesta profundiza la práctica técnica previa con un marco teórico avanzado.",
        duracion: "2 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Diseñar, gestionar y evaluar políticas públicas y proyectos sociales.",
                "Intervenir en situaciones complejas de vulnerabilidad familiar y comunitaria.",
                "Dirigir equipos interdisciplinarios en instituciones públicas, privadas u ONGs.",
                "Elaborar informes sociales y peritajes técnicos para el ámbito judicial.",
                "Promover el desarrollo comunitario, los derechos humanos y la inclusión social.",
                "Desarrollar investigaciones académicas sobre la realidad y las dinámicas sociales.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Historia Social y Política de América Latina y Argentina",
                        "Teoría Social",
                        "Investigación en Trabajo Social I",
                        "Estado y Políticas Públicas",
                        "Humanismo y Doctrina Social",
                        "Procesos Sociales Contemporáneos en América Latina",
                        "Gestión de Organizaciones Sociales",
                        "Investigación en Trabajo Social II",
                        "Técnicas de Intervención Complementarias",
                        "Economía Social y Política"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Ética Profesional y Trabajo Social",
                        "Seminario de Actualización Profesional",
                        "Seminario de Investigación Aplicada",
                        "Taller de Tutoría de Sistematización y Trabajo Final"
                    ]
                }
            ]
        },


    },
    {
        codcar: 113,
        sector: 21,
        slug: "licenciatura-en-gestion-educativa-ciclo-de-licenciatura",
        nombre: "Licenciatura en Gestión Educativa - Ciclo de Licenciatura",
        descripcion: "La Licenciatura en Gestión Educativa forma profesionales con capacidad para liderar y transformar instituciones en los distintos niveles del sistema. Los estudiantes dominan herramientas de planificación curricular, evaluación institucional, legislación escolar, gestión de equipos y política educativa. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en contextos diversos.",
        duracion: "2 años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Liderar y gestionar instituciones educativas de diversos niveles y modalidades.",
                "Diseñar, evaluar y ejecutar proyectos pedagógicos e institucionales innovadores.",
                "Asesorar en la planificación de políticas educativas y proyectos curriculares.",
                "Dirigir equipos docentes fomentando el trabajo colaborativo y el buen clima escolar.",
                "Gestionar recursos administrativos, financieros y tecnológicos en entornos educativos.",
                "Desarrollar estrategias de evaluación institucional y mejora continua de la calidad.",
                "Implementar programas de inclusión, orientación y vinculación comunitaria.",
            ]
        },
        planEstudiosPorModalidad: {
            7: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Introducción a la Filosofía",
                        "Pensamiento Científico",
                        "Sujeto y Sociedad",
                        "Mediación y Conflicto",
                        "Humanismo y Doctrina Social",
                        "Metodología de la Investigación I",
                        "Diseño y Gestión Curricular",
                        "Relaciones Humanas e Institucionales"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Metodología de la Investigación II",
                        "Seminario de Tesis I",
                        "Gestión de TICS",
                        "Planeamiento Estratégico",
                        "Modelos de Organización y Administración",
                        "Ética y Deontología Profesional",
                        "Política Educativa",
                        "Evaluación y Calidad Educativa",
                        "Gestión de Recursos Humanos (Sem. OPT.)",
                        "Seminario de Tesis II",
                        "Economía de la Educación"
                    ]
                }
            ]
        },


    },
    {
        codcar: 94,
        sector: 1,
        slug: "licenciatura-en-ingles-ciclo-de-licenciatura",
        nombre: "Licenciatura en Inglés - Ciclo de Licenciatura",
        descripcion: "La Licenciatura en Inglés (Ciclo de Licenciatura) forma profesionales capacitados para abordar la lengua inglesa desde una perspectiva lingüística, literaria e intercultural avanzada. Los estudiantes dominan herramientas de análisis del discurso, crítica literaria, traducción, lingüística aplicada y producción académica especializada. Esta propuesta profundiza los conocimientos previos para impulsar la investigación, la edición y la consultoría lingüística internacional.",
        duracion: "2 años",
        modalidad: [1],
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Civilización de los Pueblos de Habla Inglesa I",
                        "Literatura Inglesa I",
                        "Ensayo",
                        "Composición Oral Avanzada I",
                        "Tesina en Inglés",
                        "Civilización de los Pueblos de Habla Inglesa II",
                        "Literatura Inglesa II",
                        "Composición Oral Avanzada II",
                        "Lingüística",
                        "Orientaciones Curriculares",
                        "Didáctica de la Lengua Inglesa",
                        "Seminario de Metodología para la Investigación Científica",
                        "Humanismo y Doctrina Social de la Iglesia",
                        "Tecnología Educativa",
                        "Lengua Castellana",
                        "Composición Escrita Avanzada"
                    ]
                }
            ]
        },


    },
    {
        codcar: 186,
        sector: 7,
        slug: "licenciatura-en-entrenamiento-deportivo-ccc",
        nombre: "Licenciatura en Entrenamiento Deportivo - CCC",
        descripcion: "La Licenciatura en Entrenamiento Deportivo forma profesionales con capacidad para planificar y optimizar procesos de alto rendimiento e iniciación atlética. Los estudiantes dominan herramientas de preparación física, fisiología del ejercicio, biomecánica, nutrición aplicada y tecnología deportiva. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en instituciones, clubes y federaciones.",
        duracion: "1½ años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Diseñar y supervisar programas de preparación física para deportistas de alto rendimiento.",
                "Planificar el entrenamiento deportivo según principios fisiológicos y biomecánicos.",
                "Liderar cuerpos técnicos y equipos multidisciplinarios en clubes y federaciones.",
                "Aplicar tecnologías avanzadas para la evaluación y monitoreo del rendimiento.",
                "Desarrollar estrategias de prevención de lesiones y readaptación física.",
                "Dirigir proyectos de investigación aplicados a las ciencias del deporte.",
                "Gestionar centros de entrenamiento, academias y programas deportivos.",
            ]
        },
        planEstudiosPorModalidad: {
            7: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Ética Profesional",
                        "Metodología de la Investigación",
                        "Suplementación Deportiva",
                        "Entrenamiento Deportivo General y Específico",
                        "Evaluaciones Deportivas",
                        "Nutrición Aplicada al Entrenamiento Deportivo",
                        "Fisiología y Bioquímica Aplicada a la Nutrición y el Deporte",
                        "Organización, Planificación y Control del Entrenamiento Deportivo",
                        "Endocrinología Aplicada al Entrenamiento Deportivo",
                        "Informática Aplicada al Entrenamiento Deportivo",
                        "Legislación Deportiva",
                        "Psicología Deportiva",
                        "Neurociencias y Entrenamiento Deportivo",
                        "Trabajo Final Integrador"
                    ]
                }
            ]
        },

    },
    {
        codcar: 146,
        sector: 3,
        slug: "escribania-ccc",
        nombre: "Escribanía - CCC",
        descripcion: "La carrera de Escribanía forma profesionales con capacidad para ejercer la fe pública y brindar asesoramiento en actos jurídicos y notariales. Los estudiantes dominan herramientas de derecho notarial, registral, inmobiliario, contractual, tributario y técnica de redacción de escrituras. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas e intervenir con rigor ético en el ámbito legal.",
        duracion: "1 año",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Redactar y autorizar escrituras públicas, actas y documentos notariales.",
                "Asesorar de forma imparcial en contratos, actos jurídicos y derecho de propiedad.",
                "Dar fe pública respecto a hechos, actos y contratos privados o públicos.",
                "Realizar estudios de títulos y verificar la legalidad de operaciones inmobiliarias.",
                "Intervenir en trámites sucesorios, constitutivos de sociedades y fideicomisos.",
                "Dirigir y administrar la gestión operativa de una escribanía o registro notarial.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Práctica Registral",
                        "Práctica Notarial",
                        "Redacción Documental y Notarial",
                        "Derecho de las Nuevas Tecnologías",
                        "Derecho Notarial",
                        "Derecho Registral",
                        "Doctrina Social de la Iglesia",
                        "Derecho Societario"
                    ]
                }
            ]
        },


    },
    {
        codcar: 104,
        sector: 7,
        slug: "licenciatura-en-educacion-fisica-ciclo-de-licenciatura",
        nombre: "Licenciatura en Educación Física - Ciclo de Licenciatura",
        descripcion: "La Licenciatura en Educación Física (Ciclo de Licenciatura) forma profesionales capacitados para conducir, investigar y gestionar programas complejos de actividad física, salud y entrenamiento de alto rendimiento. Los estudiantes dominan herramientas de fisiología avanzada, biomecánica aplicada, planificación deportiva, metodología de la investigación y gestión institucional. Esta propuesta complementa la titulación previa con un enfoque científico y directivo.",
        duracion: "1½ años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Diseñar, dirigir y evaluar proyectos de investigación en ciencias del deporte.",
                "Planificar el entrenamiento deportivo de alto rendimiento y la preparación física.",
                "Gestionar y administrar instituciones, clubes, gimnasios y centros deportivos.",
                "Formular programas de actividad física orientados a la salud y calidad de vida.",
                "Asesorar a organismos públicos y privados en políticas deportivas y recreativas.",
                "Coordinar equipos interdisciplinarios en el ámbito de la salud, el deporte y la educación.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Humanismo y Doctrina Social",
                    "Sistema Educativo",
                    "Corrientes Didácticas y Contemporáneas",
                    "Nutrición Deportiva",
                    "Descripción, Estadística y Metrología Deportiva",
                    "Análisis de la Estrategia de los Deportes",
                    "Planeamiento y Gestión de Políticas en Educación Física y Deporte",
                    "Gimnasia y Deportes para Personas con Necesidades Especiales",
                    "Metodología de la Investigación",
                    "Tesis",
                    "Organización, Planificación y Control del Deporte y la Actividad Física",
                    "Fisiología de la Actividad Física y Entrenamiento Deportivo"
                ]
            }
        ]
    },
    {
        codcar: 148,
        sector: 5,
        slug: "licenciatura-en-diseno-de-interiores-ciclo-de-licenciatura",
        nombre: "Licenciatura en Diseño de Interiores - Ciclo de Licenciatura",
        descripcion: "La Licenciatura en Diseño de Interiores (Ciclo de Licenciatura) forma profesionales capacitados para proyectar, transformar y gestionar espacios habitables, comerciales e institucionales con rigor técnico y estético. Los estudiantes dominan herramientas de arquitectura interior, tecnología de materiales, iluminación avanzada, modelado tridimensional y gestión de obras. Esta propuesta profundiza la formación previa para liderar proyectos conceptuales e innovadores.",
        duracion: "1 año",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Diseñar y optimizar espacios interiores complejos, funcionales y sostenibles.",
                "Dirigir y supervisar proyectos de ambientación, arquitectura interior y equipamiento.",
                "Aplicar criterios de iluminación, acústica, ergonomía y selección de materiales.",
                "Desarrollar proyectos de investigación e innovación en el campo del diseño.",
                "Asesorar a empresas, estudios de arquitectura y clientes particulares.",
                "Gestionar presupuestos, cronogramas de obra y emprendimientos creativos propios.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Computación Avanzada",
                        "Diseño de Interiores IV",
                        "Gerenciamiento y Marketing Aplicado",
                        "Patrimonio Cultural",
                        "Técnicas de Restauración",
                        "Metodología de la Investigación",
                        "Luminotecnia",
                        "Interiores Comerciales y Diseño Temporario (Electiva)",
                        "Práctica Profesional Supervisada"
                    ]
                }
            ]
        },


    },
    {
        codcar: 187,
        sector: 7,
        slug: "licenciatura-en-lenguajes-expresivos-ccc",
        nombre: "Licenciatura en Lenguajes Expresivos - CCC",
        descripcion: "La Licenciatura en Lenguajes Expresivos forma profesionales con capacidad para integrar el arte, la comunicación y el cuerpo en proyectos educativos y socio-culturales. Los estudiantes dominan herramientas de expresión corporal, semiótica, producción artística, dinámicas grupales y gestión cultural. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en instituciones públicas y privadas.",
        duracion: "1½ años",
        modalidad: [1, 7],
        perfilEgresado: {
            items: [
                "Diseñar proyectos socioeducativos basados en lenguajes artísticos y expresivos.",
                "Integrar el arte, la música, el teatro y la expresión corporal en ámbitos educativos.",
                "Asesorar en el diseño de currículos e innovaciones pedagógicas en educación artística.",
                "Facilitar procesos de inclusión, diversidad y transformación social a través del arte.",
                "Dirigir y coordinar talleres, centros culturales y programas de desarrollo creativo.",
                "Desarrollar investigaciones interdisciplinarias sobre la expresión y la comunicación.",
            ]
        },
        planEstudiosPorModalidad: {
            7: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Antropología Filosófica",
                        "Investigación Socio Antropológica",
                        "Cuerpo, Educación y Sociedad",
                        "Artística Interdisciplinaria el Circo",
                        "Pedagogía del Juego",
                        "Metodología de la Investigación",
                        "Arte Expresión Corporal Danza",
                        "Arte, Comunicación y Expresión Literaria"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Recreación Educación y Cultural",
                        "La Creatividad en el Aprendizaje",
                        "Trabajo Final Integrador",
                        "Arte y Expresión Musical",
                        "Arte y Expresión Teatral",
                        "Juegoteca y Espacios de Infancias"
                    ]
                }
            ]
        },


    },
    {
        codcar: 1200,
        sector: 13,
        slug: "licenciatura-en-kinesiologia-y-fisioterapia",
        nombre: "Licenciatura en Kinesiología y Fisioterapia",
        descripcion: "La Licenciatura en Kinesiología y Fisioterapia forma profesionales capacitados para evaluar, prevenir, rehabilitar y optimizar el movimiento humano y la funcionalidad física. Los estudiantes dominan herramientas de biomecánica, anatomía clínica, fisioterapia aplicada, rehabilitación deportiva, kinesioterapia y técnicas manuales avanzadas. Esta propuesta potencia la atención integral de la salud para restaurar la calidad de vida de las personas.",
        duracion: "5 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Evaluar, diagnosticar e intervenir en la rehabilitación física y motriz de los pacientes.",
                "Aplicar técnicas de kinesiología respiratoria, deportiva, neurológica y traumatológica.",
                "Diseñar programas de prevención, ergonomía y promoción de la salud postural.",
                "Operar equipamiento fisioterapéutico de última tecnología para la recuperación funcional.",
                "Dirigir centros de rehabilitación, consultorios o integrar equipos de salud interdisciplinarios.",
                "Desarrollar investigaciones clínicas e innovaciones en el campo de la motricidad humana.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Biofísica",
                        "Anatomía",
                        "Fisiología",
                        "Histología",
                        "Filosofía",
                        "Introducción a la Kinesiología y Fisioterapia",
                        "Psicología",
                        "Informática",
                        "Historia de la Medicina y de Rehabilitación"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Introducción al Pensamiento Cristiano",
                        "Neurología",
                        "Fisiología del Ejercicio",
                        "Biomecánica y Anatomía Funcional",
                        "Fisioterapia",
                        "Kinesioterapia"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Doctrina Social",
                        "Semiopatología",
                        "Kinefilaxia",
                        "Semiopatología Quirúrgica",
                        "Clínica Fisiátrica Médica",
                        "Diagnóstico por Imágenes. Imagenología"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Técnicas Kinésicas I. Rehabilitación Traumatológica y Reumatológica",
                        "Técnicas Kinésicas II. Rehabilitación Cardíaca y Respiratorias",
                        "Técnicas Kinésicas III. Rehabilitación Neurológica",
                        "Kinesiología Deportiva",
                        "Evaluaciones Kinésicas",
                        "Psicomotricidad",
                        "Ortesis y Prótesis",
                        "Kinefisiatría Estética"
                    ]
                },
                {
                    "semestre": "5° Año",
                    "materias": [
                        "Ética Profesional",
                        "Prácticas Hospitalaria Institucional y de Centros de Rehabilitación",
                        "Metodología de la Investigación Científica",
                        "Kinesiología Legal y Deontología",
                        "Trabajo Final de Graduación"
                    ]
                }
            ]
        },


    },
    {
        codcar: 1204,
        sector: 13,
        slug: "tecnicatura-univ-en-produccion-de-bio-imagenes",
        nombre: "Tecnicatura Univ. en Producción de Bio-Imágenes",
        descripcion: "La Tecnicatura Universitaria en Producción de Bio-Imágenes forma profesionales capacitados para obtener, procesar y gestionar imágenes de diagnóstico y tratamiento médico con alta precisión. Los estudiantes dominan herramientas de radiología digital, tomografía computada, resonancia magnética, ecografía y protocolos de protección radiológica. Esta propuesta promueve la excelencia técnica en la asistencia diagnóstica e interdisciplinaria.",
        duracion: "3 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Obtener imágenes médicas de alta calidad para el diagnóstico y tratamiento de pacientes.",
                "Operar equipos radiológicos, tomógrafos, resonadores e instrumental de última tecnología.",
                "Aplicar normas de bioseguridad, radioprotección y control de calidad en el área.",
                "Colaborar directamente con el médico especialista en los distintos procedimientos.",
                "Asistir en la atención, posicionamiento y cuidado del paciente durante los estudios.",
                "Integrar equipos interdisciplinarios en centros de salud, hospitales y clínicas.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Pensamiento Cristiano",
                        "Inglés Técnico",
                        "Anatomía Humana I",
                        "Radiología I (Ósea)",
                        "Práctica Obligatoria I",
                        "Química Biológica",
                        "Física y Electroradiología"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Doctrina Social de la Iglesia",
                        "Anatomía Humana II",
                        "Radiología II (Esplácnica)",
                        "Práctica Obligatoria II",
                        "Fisiología Humana",
                        "Laboratorio Radiológico",
                        "Informática",
                        "Farmacología Radiológica"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Ética",
                        "Seminario",
                        "Tomografía Computada",
                        "Resonancia Magnética",
                        "Ecografía",
                        "Hemodinamia y Angiología",
                        "Medicina Nuclear",
                        "Radioterapia y Radioprotección"
                    ]
                }
            ]
        },


    },
    {
        codcar: 1202,
        sector: 13,
        slug: "licenciatura-en-fonoaudiologia",
        nombre: "Licenciatura en Fonoaudiología",
        descripcion: "La Licenciatura en Fonoaudiología forma profesionales capacitados para evaluar, diagnosticar y rehabilitar los trastornos de la comunicación humana, la voz, el habla, el lenguaje y la audición. Los estudiantes dominan herramientas de audiología clínica, terapia vocal, motricidad orofacial, neurofisiología y estimulación temprana. Esta propuesta promueve el bienestar integrativo y la reinserción comunicativa del paciente.",
        duracion: "5 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Evaluar, diagnosticar y rehabilitar trastornos del habla, lenguaje, voz y audición.",
                "Implementar terapias para alteraciones de la deglución y motricidad orofacial.",
                "Realizar estudios audiológicos y participar en la selección y adaptación de audífonos.",
                "Diseñar programas de prevención y promoción de la salud vocal y auditiva.",
                "Integrar equipos de salud en hospitales, clínicas, centros de rehabilitación y escuelas.",
                "Desarrollar investigaciones científicas y asesorar en proyectos de comunicación humana.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Práctica Profesional I",
                        "Filosofía",
                        "Lingüística I",
                        "Anatomía",
                        "Introducción a la Fonoaudiología",
                        "Psicología",
                        "Lingüística II",
                        "Física Acústica",
                        "Fisiología"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Práctica Profesional II",
                        "Teología",
                        "Neurología",
                        "Inglés I",
                        "Biología Celular, Embriología y Genética",
                        "Metodología de la Investigación I",
                        "Fisiopatología de la Audición",
                        "Fisiopatología de la Voz",
                        "Neurodesarrollo"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Práctica Profesional III",
                        "Audiometría y Audiología",
                        "Metodología de la Investigación II",
                        "Patología del Lenguaje I",
                        "Psicomotricidad y Fonoaudiología",
                        "Inglés II",
                        "Patología del Lenguaje II",
                        "Salud Pública I",
                        "Atención Temprana"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Práctica Profesional IV",
                        "Educación Vocal",
                        "Electiva I (Evaluación Neuropsicológica)",
                        "Corrientes Didácticas",
                        "Laberintología",
                        "Audiología Infantil",
                        "Doctrina Social",
                        "Psicolingüística",
                        "Terapéutica Vocal",
                        "Terapéutica Audiológica",
                        "Electiva I (Epidemiología para Fonoaudiólogos)"
                    ]
                },
                {
                    "semestre": "5° Año",
                    "materias": [
                        "Taller de Trabajo Final",
                        "Salud Pública II",
                        "Terapéutica del Lenguaje",
                        "Fonoestomatología",
                        "Deontología y Ética Profesional",
                        "Trabajo Final",
                        "Electiva II (Intervención Fonoaudiológica en Disfagia del Niño y el Adulto)",
                        "Gerontología y Fonoaudilogía",
                        "Trastornos Lingüísticos y Aprendizaje Escolar",
                        "Electiva II (Fonoaudiología en UTI)",
                        "Práctica Profesional Supervisada"
                    ]
                }
            ]
        },


    },
    {
        codcar: 1203,
        sector: 13,
        slug: "tecnicatura-univ-en-podologia",
        nombre: "Tecnicatura Univ. en Podología",
        descripcion: "La Tecnicatura Universitaria en Podología forma profesionales capacitados para prevenir, diagnosticar y tratar las afecciones biomecánicas y dérmicas del pie. Los estudiantes dominan herramientas de anatomía clínica, ortopodología, quiropodología, biomecánica de la marcha, cuidado del pie de riesgo y asepsia médica. Esta propuesta fortalece la atención primaria e interdisciplinaria para garantizar la movilidad y salud integral.",
        duracion: "3 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Prevenir, diagnosticar y tratar afecciones y patologías del pie.",
                "Realizar procedimientos podológicos no quirúrgicos mediante técnicas e instrumental bioseguro.",
                "Atender y cuidar el pie de riesgo en pacientes con diabetes o enfermedades vasculares.",
                "Asesorar en el uso de plantillas, calzado adecuado y pautas de higiene postural.",
                "Colaborar con médicos y equipos de salud para un abordaje integral del paciente.",
                "Administrar y gestionar consultorios podológicos o centros de atención de la salud.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Morfofisiología",
                        "Fundamentos de Podología",
                        "Patología Podológica I",
                        "Filosofía",
                        "Introducción a la Informática",
                        "Terapéutica Podológica I"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Patología Podológica II",
                        "Terapéutica Podológica II",
                        "Dermatología y Farmacología",
                        "Doctrina Social",
                        "Patología Médica",
                        "Ortopodología Protésica I"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Fundamentos de Psicología",
                        "Rol del Podólogo en el Equipo Multidisciplinario de Salud",
                        "Ortopodología Protésica II",
                        "Epidemiología y Salud Pública",
                        "Inglés Técnico",
                        "Fundamentos de Administración en Podología",
                        "Patología Quirúrgica",
                        "Patología Podológica III"
                    ]
                }
            ]
        },


    },
    {
        codcar: 341,
        sector: 13,
        slug: "licenciatura-en-podologia-ccc",
        nombre: "Licenciatura en Podología - CCC",
        descripcion: "La Licenciatura en Podología (Ciclo de Complementación Curricular) forma profesionales capacitados para investigar, dirigir y profundizar el abordaje clínico de patologías complejas del pie. Los estudiantes dominan herramientas de pie diabético avanzado, cirugía menor podológica, gestión hospitalaria, biomecánica clínica y metodología de la investigación. Esta propuesta fortalece el perfil de grado para integrar equipos médicos multidisciplinarios.",
        duracion: "1½ años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Diseñar, gestionar y evaluar proyectos de investigación en el área de la salud podológica.",
                "Profundizar en el abordaje integral y complejo del pie de riesgo (diabético, biomecánico y vascular).",
                "Integrar y liderar equipos de salud interdisciplinarios en clínicas, hospitales y centros de rehabilitación.",
                "Participar en la gestión, dirección y administración de servicios de podología públicos o privados.",
                "Asesorar en el diseño de programas de prevención, salud pública y ergonomía biomecánica.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Humanismo y Doctrina Social de la Iglesia",
                        "Podología Integral",
                        "Biomecánica",
                        "Farmacología Aplicada",
                        "Estudio Funcional Podológico en Patologías Ortopédicas y Traumatológicas",
                        "Terapia Física Podológica"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Ética y Deontología Profesional",
                        "Trabajo Integrador",
                        "Metodología de la Investigación",
                        "Marketing Aplicado a Podología"
                    ]
                }
            ]
        },


    },
    {
        codcar: 1201,
        sector: 13,
        slug: "licenciatura-en-terapia-ocupacional",
        nombre: "Licenciatura en Terapia Ocupacional",
        descripcion: "La Licenciatura en Terapia Ocupacional forma profesionales capacitados para evaluar, promover y rehabilitar la autonomía de personas con limitaciones físicas, cognitivas o sociales. Los estudiantes dominan herramientas de adaptación del entorno, tecnología asistiva, ergonomía, análisis de la ocupación y salud mental. Esta propuesta impulsa la inclusión e independencia para mejorar la calidad de vida en cada etapa vital.",
        duracion: "5 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Evaluar e intervenir en el desempeño ocupacional de personas con limitaciones físicas, cognitivas o sociales.",
                "Diseñar y aplicar planes de rehabilitación para favorecer la autonomía en las actividades de la vida diaria.",
                "Indicar, diseñar y adaptar dispositivos de tecnología asistiva, órtesis y adaptaciones del entorno.",
                "Promover la inclusión laboral, educativa y social en niños, adultos y personas mayores.",
                "Integrar equipos interdisciplinarios en hospitales, centros de rehabilitación, escuelas y organismos comunitarios.",
                "Desarrollar proyectos de investigación y gestionar programas de salud pública y bienestar ocupacional.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía y Antropología Social",
                        "Introducción a la Terapia Ocupacional",
                        "Anátomo-Fisiología I",
                        "Ocupaciones Terapéuticas I",
                        "Psicología General",
                        "Salud Pública",
                        "Anátomo-Fisiología II",
                        "Ocupaciones Terapéuticas II",
                        "Terapia Ocupacional y Contextos de Intervención"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Neurología",
                        "Psicología del Desarrollo I",
                        "Biomecánica y Patologías del Movimiento",
                        "Clínica Médica",
                        "Psicología del Desarrollo II",
                        "Ortesis y Ayudas Técnicas",
                        "Ocupaciones Terapéuticas III",
                        "Terapia Ocupacional en Traumatología y Neurología",
                        "Práctica Pre-Profesional: Observación en Campo"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Psiquiatría y Psicopatología",
                        "Ocupaciones Terapéuticas IV",
                        "Terapia Ocupacional en Salud Mental",
                        "Terapia Ocupacional y Neurodesarrollo",
                        "Práctica Pre-Profesional: Traumatología y Neurología",
                        "Inglés Técnico",
                        "Teoría y Técnica de los Grupos",
                        "Terapia Ocupacional Laboral",
                        "Práctica Pre-Profesional: Salud Mental"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Deontología y Bioética",
                        "Metodología y Ética de la Investigación",
                        "Informática Aplicada",
                        "Práctica Pre-Profesional Laboral",
                        "Doctrina Social",
                        "Seminario I: Interdisciplina",
                        "Investigación en Terapia Ocupacional",
                        "Estadística Aplicada",
                        "Organización y Administración de Servicios de Terapia Ocupacional"
                    ]
                },
                {
                    "semestre": "5° Año",
                    "materias": [
                        "Seminario II: Razonamiento Clínico",
                        "Práctica Pre-Profesional: Comunitaria",
                        "Seminario III: Conductas Adictivas",
                        "Trabajo de Investigación Final"
                    ]
                }
            ]
        },


    },
    {
        codcar: 371,
        sector: 13,
        slug: "licenciatura-en-produccion-de-bioimagenes-ccc",
        nombre: "Licenciatura en Producción de Bioimágenes - CCC",
        descripcion: "La Licenciatura en Producción de Bioimágenes (Ciclo de Complementación Curricular) forma profesionales capacitados para dirigir, investigar y gestionar servicios de diagnóstico y tratamiento por imágenes de alta complejidad. Los estudiantes dominan herramientas de tomografía avanzada, resonancia magnética funcional, medicina nuclear, gestión hospitalaria y seguridad radiológica. Esta propuesta profundiza la práctica previa para liderar equipos técnicos.",
        duracion: "2 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Administrar y coordinar servicios de diagnóstico por imágenes en centros de salud.",
                "Aplicar y supervisar tecnologías avanzadas como tomografía, resonancia y medicina nuclear.",
                "Implementar y auditar programas de radioprotección, bioseguridad y control de calidad.",
                "Diseñar y dirigir proyectos de investigación científica y docencia universitaria.",
                "Asesorar en la adquisición, gestión e innovación de equipamiento médico.",
                "Liderar e integrar equipos de trabajo interdisciplinarios en el área de la salud.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Aplicación de Radiología Convencional (Radiología Ósea/Esplágnologica, Principios Farmacológicos Práctica Hospitalaria)",
                        "Práctica Hospitalaria (Psicología General-Informática-Salud Pública Práctica Hospitalaria)",
                        "Inglés Técnico",
                        "Anátomo - Fisiología (Anatomía Descriptiva/Anatomía Topográfica/Fisiología Humana)",
                        "Fundamentos de Radiología Convencional (Física/Química/Lab. Radiológico)",
                        "Doctrina Social de la Iglesia",
                        "Metodología de la Investigación Científica",
                        "Relaciones Anatomo-Radiológicas",
                        "Arquitectura Hospitalaria"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Medicina Nuclear",
                        "Hemodinamia y Angiografía",
                        "Tomografía Axial Computarizada",
                        "Resonancia Nuclear Magnética",
                        "Radioterapia y Radio Protección (Radiodensitometría Ósea, Mamografía y Digitalización Radiológica)",
                        "Trabajo Final",
                        "Seminario Bioética Legal",
                        "Seminario (Manejo del Personal y del Paciente)"
                    ]
                }
            ]
        },


    },
    {
        codcar: 1169,
        sector: 13,
        slug: "licenciatura-en-psicomotricidad",
        nombre: "Licenciatura en Psicomotricidad",
        descripcion: "La Licenciatura en Psicomotricidad forma profesionales capacitados para evaluar, prevenir, diagnosticar y abordar las manifestaciones corporales en relación con el desarrollo global del sujeto. Los estudiantes dominan herramientas de observación psicomotriz, técnicas corporales, juego terapéutico, neurodesarrollo y estimulación temprana. Esta propuesta promueve el bienestar integrativo y la inclusión en los ámbitos de salud, educación y comunidad.",
        duracion: "5 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Diagnosticar y abordar el desarrollo psicomotor en todas las etapas de la vida.",
                "Diseñar e implementar terapias de estimulación, prevención y reeducación corporal.",
                "Tratar alteraciones de la postura, el equilibrio, la coordinación y la expresividad.",
                "Integrar equipos interdisciplinarios en salud, educación e inclusión social.",
                "Desarrollar investigaciones científicas y ejercer la docencia universitaria.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía y Antropología",
                        "Psicología General",
                        "Introducción a la Psicomotricidad",
                        "Neurología y Neurociencias",
                        "Anatomía y Fisiología Humana y del Movimiento",
                        "Teología",
                        "Psicología del Desarrollo I",
                        "Modelos y Corrientes Psicológicas",
                        "Atención Temprana para la Primera Infancia I"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Psicopatología I",
                        "Psicología del Desarrollo II",
                        "Evolución Psicomotriz",
                        "Formación Corporal Personal I",
                        "Alteraciones del Neurodesarrollo y Patologías del Aparato",
                        "Locomotor Psicopatología II",
                        "Teoría y Técnica de los Grupos",
                        "Atención Temprana para la Primera Infancia II",
                        "Formación Corporal Personal II",
                        "Práctica Pre-Profesional I: Observación en Campo"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Modelos y Enfoques en Psicomotricidad",
                        "Formación Corporal Personal III",
                        "Neurofisiopatología",
                        "Práctica Preprofesional II: Conocimiento de las Instituciones",
                        "Psicomotricidad en Educación",
                        "Evaluación Psicomotriz I",
                        "Inglés o Francés Técnico",
                        "Formación Corporal Personal IV",
                        "Práctica Preprofesional III: Comunitaria"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Doctrina Social",
                        "Evaluación Psicomotriz II",
                        "Formación Corporal Personal V",
                        "Trastornos Psicomotores",
                        "Metodología de la Investigación I",
                        "Terapia y Clínica Psicomotriz",
                        "Formación Corporal Personal VI",
                        "Práctica Preprofesional IV: Gerontopsicomotricidad"
                    ]
                },
                {
                    "semestre": "5° Año",
                    "materias": [
                        "Ética y Deontología",
                        "Informática y Estadística Aplicada",
                        "Formación Corporal Personal VII",
                        "Elaboración del Rol del Psicomotricista",
                        "Bioética",
                        "Metodología de la Investigación II",
                        "Trabajo de Investigación Final",
                        "Taller de Tesina"
                    ]
                }
            ]
        },


    },
    {
        codcar: 292,
        sector: 8,
        slug: "licenciatura-en-gastronomia",
        nombre: "Licenciatura en Gastronomía",
        descripcion: "La Licenciatura en Gastronomía forma profesionales capacitados para dirigir, diseñar y optimizar proyectos culinarios e industrias de la alimentación a nivel internacional. Los estudiantes dominan herramientas de alta cocina, enología, química de los alimentos, gestión de restaurantes, seguridad e higiene y administración financiera. Esta propuesta combina el arte culinario con la innovación empresarial para liderar la cultura gastronómica.",
        duracion: "4 años",
        modalidad: [1],
        perfilEgresado: {
            items: [
                "Diseñar, planificar y dirigir proyectos gastronómicos y emprendimientos de servicios de alimentación.",
                "Gestionar la administración, costos, logística y calidad en cocinas profesionales y establecimientos hoteleros.",
                "Investigar y rescatar productos regionales, tendencias culinarias e innovaciones alimentarias.",
                "Coordinar equipos de trabajo culinario bajo estrictas normas de bromatología, seguridad e higiene.",
                "Asesorar a empresas del sector en diseño de menús, optimización de procesos y experiencias culinarias.",
            ]
        },
        planEstudiosPorModalidad: {
            1: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Antropología de la Alimentación",
                        "Química de los Alimentos",
                        "Economía del Sector Turístico",
                        "Turismo y Gastronomía",
                        "Análisis Sensorial y Físico de los Alimentos",
                        "Cocina I: Técnicas y Procesos Fundamentales",
                        "Historia Cultural de la Gastronomía",
                        "Bromatología, Higiene y Seguridad en Gastrronomía",
                        "Materias Primas, Equipamientos e Insumos Gastronómicos",
                        "Práctica de Cocina I",
                        "Taller de Cocina Regional",
                        "Fundamentos de Administración Gastronómica"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología",
                        "Elaboración de Costos y Presupuestos",
                        "Nutrición Humana",
                        "Cocina II: Técnicas y Procesos Avanzados",
                        "Territorio y Patrimonio Cultural Gastronómico",
                        "Panificación",
                        "Pensamiento Social Cristiano I",
                        "Control y Gestión de Stock",
                        "Práctica de Cocina II",
                        "Cocina Dulce: Repostería Básica",
                        "Taller de Cocina Internacional",
                        "Creatividad y Diseño de Productos Gastronómicos Innovadores",
                        "Arte y Gastronomía"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Pensamiento Social Cristiano II",
                        "Gestión de Ingresos y Rendimientos",
                        "Legislación",
                        "Relaciones Públicas",
                        "Fermentación Alimentaria",
                        "Enología, Cata y Degustación de Vinos",
                        "Informática Aplicada a la Gestión Gastronómica",
                        "Gestión de Recursos Humanos",
                        "Marketing y Desarrollo de Marca",
                        "Organización y Gestión de Eventos",
                        "Bar y Coctelería",
                        "Taller: Servicio y Atención al Cliente"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Ética",
                        "Técnicas de Investigación",
                        "Modelo de Negocio y Emprendimientos Gastronómicos",
                        "Gestión de Calidad",
                        "Servicio de Catering y Banquetes",
                        "Trabajo Integrador",
                        "Prueba de Suficiencia Idiomática: Italiano",
                        "Prueba de Suficiencia Idiomática: Francés",
                        "Proyecto de Inversión",
                        "Fundamentos de Diseño para Gastronomía",
                        "Gestión y Dirección de Alimentos y Bebidas",
                        "Gestión Sostenible de Gastronomía",
                        "Prácticas Profesionales"
                    ]
                }
            ]
        },


    },
    {
        codcar: 393,
        sector: 3,
        slug: "licenciatura-en-criminologia",
        nombre: "Licenciatura en Criminología",
        descripcion: "La Licenciatura en Criminología forma profesionales con capacidad para analizar, prevenir y comprender el fenómeno delictivo en la sociedad actual. Los estudiantes dominan herramientas de victimología, política criminal, investigación delictiva, psicología forense y sociología de la desviación. La carrera combina teoría y práctica para desarrollar líderes capaces de diseñar estrategias de seguridad pública y privada en diversos organismos.",
        duracion: "4 años",
        modalidad: [7],
        perfilEgresado: {
            items: [
                "Investigar las causas y dinámicas de la conducta criminal.",
                "Diseñar políticas públicas de prevención y seguridad ciudadana.",
                "Elaborar perfiles criminológicos para investigaciones judiciales y policiales.",
                "Asesorar en programas penitenciarios de resocialización social.",
                "Realizar peritajes técnicos y evaluar riesgos de reincidencia.",
                "Desarrollar estrategias de asistencia y apoyo integral a víctimas.",
            ]
        },
        planEstudiosPorModalidad: {
            7: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía I",
                        "Antropología Social y Forense",
                        "Psicología Criminológica",
                        "Corrientes Criminológicas",
                        "Delito, Contexto Social y Comunicación",
                        "Filosofía II",
                        "Seminario: Inglés",
                        "Derecho Penal",
                        "Sociología del Delito",
                        "Violencia, Control y Exclusión Social"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Teología I",
                        "Seminario: Técnicas de Comunicación Científica - Criminológica",
                        "Derecho Procesal Penal",
                        "Seguridad Pública",
                        "Psiquiatría y Psicología Forense",
                        "Teología II",
                        "Victimología",
                        "Psicopatología Criminal",
                        "Criminología",
                        "Técnicas de Investigación Criminal"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Pensamiento Social Cristiano I",
                        "Medicina Legal",
                        "Análisis Criminal",
                        "Principios Constitucionales y Criminología",
                        "Derechos Humanos",
                        "Pensamiento Social Cristiano II",
                        "Estadística Aplicada",
                        "Delincuencia Organizada y Narcocriminalidad",
                        "Criminología Vial",
                        "Ejecución Penal y Tratamiento de Internos"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Ética Profesional",
                        "Metodología de la Investigación",
                        "Seminario: Investigación Criminal en Lavado de Activos",
                        "Seminario: Delitos Asistidos Tecnológicamente",
                        "Delincuencia Juvenil",
                        "Trabajo Final",
                        "Seminario: Elaboración de Perfiles Criminales",
                        "Política Criminal",
                        "Métodos Alternativos para la Resolución de Conflictos",
                        "Taller: Informe Criminológico"
                    ]
                }
            ]
        },


    },
    {
        codcar: 185,
        sector: 5,
        slug: "licenciatura-en-gestion-eficiente-de-la-energia",
        nombre: "Licenciatura en Gestión Eficiente de la Energía",
        descripcion: "La Licenciatura en Gestión Eficiente de la Energía forma profesionales con capacidad para optimizar el consumo energético en organizaciones y procesos productivos. Los estudiantes dominan herramientas de auditoría energética, fuentes renovables, legislación ambiental, sustentabilidad y costos. La carrera combina teoría y práctica para desarrollar líderes capaces de diseñar proyectos sustentables e implementar soluciones eficientes en empresas y organismos.",
        duracion: "4 años",
        modalidad: [7],
        perfilEgresado: {
            items: [
                "Diseñar estrategias de consumo sustentable y eficiencia energética.",
                "Auditar y diagnosticar el uso de la energía en empresas e industrias.",
                "Desarrollar proyectos de energías renovables para reducir la huella de carbono.",
                "Optimizar costos operativos y asegurar el cumplimiento de normas ambientales.",
            ]
        },
        planEstudiosPorModalidad: {
            7: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Filosofía",
                        "Energía y Sostenibilidad",
                        "Introducción a la Matemática",
                        "Fundamentos de Física",
                        "Ingeniería Energética",
                        "Teología",
                        "Procesos de Cambio Social",
                        "Introducción a la Energía",
                        "Análisis de Ciclo de Vida (Materiales y Energía)",
                        "Práctica de Integración: Gestión Energética en Distintos Establecimientos"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Introducción a los Mecanismos de Conservación y Uso Eficiente de la Energía",
                        "Enfoques y Herramientas de Modelación Energética y de Materiales",
                        "Tecnologías de Eficiencia Energética",
                        "Energías Renovables",
                        "Introducción a los Métodos de Diseño, Cálculo y Evaluación de Eficiencia Energética",
                        "Eficiencia Energética en Sistemas de Transporte",
                        "Eficiencia Energética y Optimización de Procesos Productivos",
                        "Eficiencia Energética en Edificios",
                        "Eficiencia Energética en el Sector Agropecuario",
                        "Práctica de Integración: Planes de Eficiencia Energ. para Distintos Tipos de Establecimientos e Instituciones",
                        "Estratégias y Herramientas de Comunicación"
                    ]
                },
                {
                    "semestre": "3° Año",
                    "materias": [
                        "Economía y Mercados Energéticos",
                        "Seminario de Cálculo y Evaluación de Eficiencia Energética",
                        "Formulación de Proyectos",
                        "Legislación Energética",
                        "Seminario de Diseño de Edificios Sustentables",
                        "Doctrina Social de la Iglesia",
                        "Integración de la Eficiencia Energética en el Diseño Urbanístico",
                        "Práctica de Integración: Asistencia Técnica a Municipios Provinciales",
                        "Diseño de Sistemas Eficientes",
                        "Gestión de Cadenas de Valor",
                        "Evaluación Económica, Ambiental y Social de Proyectos",
                        "Estándares y Sistemas de Certificación"
                    ]
                },
                {
                    "semestre": "4° Año",
                    "materias": [
                        "Ética",
                        "Metodología de la Investigación",
                        "Planificación Urbana Sustentable",
                        "Integración de Eficiencia Energética y Energía Renovable",
                        "Práctica de Integración: Proyectos en Parques Industriales,",
                        "Instituciones Educativas y Zonas Turísticas Locales Gestión de Proyectos",
                        "Prácticas de Divulgación Social",
                        "Trabajo Final de Graduación",
                        "Práctica Pre Profesional Supervisada"
                    ]
                }
            ]
        },


    },
    {
        codcar: 361,
        sector: 3,
        slug: "licenciatura-en-criminologia-ccc",
        nombre: "Licenciatura en Criminología - CCC",
        descripcion: "La Licenciatura en Criminología forma profesionales con capacidad para profundizar en el análisis, prevención y abordaje integral del fenómeno delictivo. Los estudiantes dominan herramientas de política criminal, investigación avanzada, victimología, psicología forense y seguridad pública. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en instituciones del sistema penal y gubernamental.",
        duracion: "2 años",
        modalidad: [7],
        perfilEgresado: {
            items: [
                "Diseñar e implementar políticas públicas de prevención del delito y seguridad.",
                "Analizar dinámicas delictivas mediante investigaciones criminológicas avanzadas.",
                "Elaborar perfiles criminales para la asistencia en procesos judiciales y policiales.",
                "Asesorar en sistemas penitenciarios sobre rehabilitación y reinserción social.",
                "Realizar peritajes técnicos y evaluaciones de riesgo de reincidencia.",
                "Implementar modelos de asistencia y protección a víctimas de delitos.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Sociología del Delito",
                    "Doctrina Social de la Iglesia",
                    "Psicología Social Aplicada",
                    "Corrientes Criminológicas",
                    "Ciencias Sociales y Jurídicas Aplicadas a la Criminología",
                    "Psiquiatría y Psicología Forense",
                    "Delito, Contexto Social y Medios de Comunicación",
                    "Victimología",
                    "Estadística",
                    "Criminología",
                    "Violencia, Control y Exclusión Social",
                    "Metodología en la Investigación Criminal",
                    "Delincuencia Organizada y Narcocriminalidad",
                    "Medicina Legal y Ciencias Forenses"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Psicopatología Criminal",
                    "Ética Profesional",
                    "Delincuencia Informática",
                    "Sistemas de Seguridad Policial y Penitenciario",
                    "Análisis Criminal",
                    "Principios Constitucionales y Criminología",
                    "Derechos Humanos",
                    "Trabajo Final Integrador",
                    "Diseño, Planificación y Evaluación de Programas y Proyectos",
                    "Seminario Trabajo Integrador",
                    "Elaboración de Perfiles Criminológicos",
                    "Drogadicción Social y Toxicología",
                    "Mediación y Resolución de Conflictos",
                    "Política Criminal",
                    "Metodología de la Investigación Social"
                ]
            }
        ]
    },
    {
        codcar: 194,
        sector: 7,
        slug: "licenciatura-en-educacion-fisica-ccc",
        nombre: "Licenciatura en Educación Física - CCC",
        descripcion: "La Licenciatura en Educación Física forma profesionales con capacidad para liderar y optimizar programas de actividad física, deporte y salud. Los estudiantes dominan herramientas de entrenamiento deportivo, rendimiento corporal, gestión de instituciones deportivas e investigación en ciencias del movimiento. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en el ámbito educativo y deportivo.",
        duracion: "1½ años",
        modalidad: [7],
        perfilEgresado: {
            items: [
                "Diseñar, gestionar y evaluar proyectos deportivos, recreativos y de salud.",
                "Dirigir y asesorar en instituciones educativas, clubes, gimnasios y centros de alto rendimiento.",
                "Planificar programas de entrenamiento físico adaptados a distintas edades y necesidades.",
                "Desarrollar proyectos de investigación en ciencias del deporte y actividad física.",
                "Implementar estrategias de promoción de la salud y hábitos de vida saludables.",
                "Liderar equipos multidisciplinarios en el ámbito de la gestión deportiva.",
            ]
        },
        planEstudiosPorModalidad: {
            7: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Humanismo y Doctrina Social",
                        "Planeamiento y Gestión de Políticas en Educación Física y Deporte",
                        "Sistema Educativo",
                        "Metodología de la Investigación",
                        "Fisiología de la Actividad Física y Entrenamiento Deportivo",
                        "Gimnasia y Deportes para Personas con Necesidades Especiales",
                        "Corrientes Didácticas Contemporáneas",
                        "Proyecto de Tesis",
                        "Organización, Planificación y Control del Deporte y la Actividad Física"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Nutrición Deportiva",
                        "Descripción, Estadística y Metrología Deportiva",
                        "Análisis de la Estrategia de los Deportes",
                        "Tesis (Trabajo Final)"
                    ]
                }
            ]
        },


    },
    {
        codcar: 395,
        sector: 7,
        slug: "licenciatura-en-recreacion-y-ocio-educativo-ccc",
        nombre: "Licenciatura en Recreación y Ocio Educativo - CCC",
        descripcion: "La Licenciatura en Recreación y Ocio Educativo forma profesionales con capacidad para diseñar e implementar proyectos socioeducativos, comunitarios y de tiempo libre. Los estudiantes dominan herramientas de animación sociocultural, dinámicas lúdicas, pedagogía del ocio, políticas públicas y gestión comunitaria. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en instituciones diversas.",
        duracion: "1½ años",
        modalidad: [7],
        perfilEgresado: {
            items: [
                "Diseñar y gestionar proyectos educativos, recreativos y de tiempo libre.",
                "Promover el bienestar, el desarrollo humano y la inclusión a través del juego.",
                "Asesorar a instituciones educativas, sociales y turísticas en planes de recreación.",
                "Liderar equipos de animación sociocultural, ludotecas y centros comunitarios.",
                "Implementar estrategias de aprendizaje experiencial y dinámicas de grupo.",
                "Desarrollar investigaciones sobre el impacto del ocio en la sociedad y la salud.",
                "Formular programas de ocio saludable para distintas etapas del ciclo vital.",
            ]
        },
        planEstudiosPorModalidad: {
            7: [
                {
                    "semestre": "1° Año",
                    "materias": [
                        "Recreación Educativa",
                        "Antropología Filosófica",
                        "Juego y Cultura",
                        "Pedagogía de la Recreación",
                        "Sociología de la Recreación",
                        "Ocio Ciudadanía y Desarrollo Social",
                        "Lúdica",
                        "Recreación y Prácticas Cuidadas",
                        "Antropología Teológica",
                        "Educación Popular y Social",
                        "Metodología de la Investigación",
                        "Trabajo Final Integrador I"
                    ]
                },
                {
                    "semestre": "2° Año",
                    "materias": [
                        "Humanismo y Pensamiento Social Cristiano",
                        "Recreación Comunitaria",
                        "Animación Sociocultural e Interculturalidad",
                        "Pensamiento Crítico Latinoamericano",
                        "Trabajo Final Integrador II",
                        "Ocio, Inclusión y Diversidad"
                    ]
                }
            ]
        },


    },
    {
        codcar: 374,
        sector: 2,
        slug: "licenciatura-en-comercio-internacional-ccc",
        nombre: "Licenciatura en Comercio Internacional - CCC",
        descripcion: "La Licenciatura en Comercio Internacional forma profesionales con capacidad para optimizar la inserción estratégica de organizaciones en mercados globales. Los estudiantes dominan herramientas de logística internacional, legislación aduanera, finanzas de comercio exterior, negociación e inteligencia comercial. La carrera combina teoría y práctica para desarrollar líderes capaces de tomar decisiones estratégicas en empresas e instituciones.",
        duracion: "2 años",
        modalidad: [7],
        perfilEgresado: {
            items: [
                "Diseñar estrategias de internacionalización de empresas en mercados globales.",
                "Planificar y ejecutar operaciones de importación, exportación, aduanas y logística.",
                "Analizar mercados externos, barreras arancelarias y tendencias del comercio global.",
                "Negociar convenios comerciales con clientes, proveedores e instituciones internacionales.",
                "Aplicar la legislación aduanera, tributaria y el régimen cambiario del sector.",
                "Evaluar la viabilidad económica, financiera y de riesgo en proyectos globales.",
                "Liderar departamentos de comercio exterior e integración en cadenas de valor.",
            ]
        },
        planEstudios: [
            {
                semestre: "1° Año",
                materias: [
                    "Doctrina Social de la Iglesia",
                    "Metodología de la Investigación",
                    "Portugués I",
                    "Costos y Presupuestos",
                    "Economía Internacional",
                    "Clasificación Arancelaria y Valoración Aduanera",
                    "Marketing Internacional",
                    "Trabajo de Aplicación",
                    "Portugués II",
                    "Integración y Cooperación Internacional",
                    "Régimen Tributario del Comercio Exterior",
                    "Aspectos Financieros y Bancarios",
                    "Marketing Digital"
                ]
            },
            {
                semestre: "2° Año",
                materias: [
                    "Ética Profesional",
                    "Alianzas Estratégicas para el Comercio Exterior",
                    "Agronegocios",
                    "Formulación y Evaluación de Proyectos de Comercio Exterior",
                    "Logística Comercial",
                    "Derecho Penal y Contencioso Aduanero",
                    "Seminario de Actualización",
                    "Taller de Investigación",
                    "Negociación Internacional",
                    "Taller de Emprendedurismo",
                    "Práctica Profesional Supervisada"
                ]
            }
        ]
    },
]
export default data;
