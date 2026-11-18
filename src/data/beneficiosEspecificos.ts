import type { ImageMetadata } from "astro";
import hospital from "../assets/beneficios-especificos/hospital.webp";
import cirugia from "../assets/beneficios-especificos/cirugia.webp";
import animales from "../assets/beneficios-especificos/animales.webp";
import diagnostico from "../assets/beneficios-especificos/laboratorio.webp";
import { iconoTarjeta } from "./iconosTarjetas";

export interface BeneficioEspecifico {
    titulo: string;
    descripcion: string;
    imagen: ImageMetadata;
    alt: string;
    ilustrativa?: boolean;
}

export const beneficiosEspecificos: Partial<Record<number, BeneficioEspecifico[]>> = {
    123: [
        {
            titulo: "Dos hospitales para practicar",
            descripcion: "Practicarás con pequeños y grandes animales en hospitales con quirófanos, laboratorios y distintas especialidades.",
            imagen: hospital,
            alt: "Fachada de la Facultad de Veterinaria.",
        },
        {
            titulo: "De la clínica a la cirugía",
            descripcion: "Planificarás y ejecutarás cirugías en el quirófano del hospital.",
            imagen: cirugia,
            alt: "Equipamiento de anestesia y monitoreo para la práctica veterinaria.",
        },
        {
            titulo: "Animales de compañía, de campo y exóticos",
            descripcion: "Te formarás para diagnosticar, prevenir y tratar enfermedades de diferentes animales.",
            imagen: animales,
            alt: "Una persona junto a dos caballos.",
        },
        {
            titulo: "Llegá a un diagnóstico con evidencia",
            descripcion: "Realizarás tus prácticas en laboratorios de investigación preparados para vos.",
            imagen: diagnostico,
            alt: "Dos personas observan muestras con microscopios en un laboratorio.",
        },
    ],
};

export interface Tarjeta {
    titulo: string;
    descripcion: string;
    icono: ImageMetadata | string;
}

export const tarjetas: Record<number, Tarjeta[]> = {
    16: [
        {
            titulo: "Litigio y representación",
            descripcion: "Representarás y defenderás a tus clientes en juicios.",
            icono: iconoTarjeta("balanza"),
        },
        {
            titulo: "Asesoramiento legal",
            descripcion: "Asesorarás a personas, empresas e instituciones.",
            icono: iconoTarjeta("maletin"),
        },
        {
            titulo: "Mediación y negociación",
            descripcion: "Resolverás conflictos sin llegar a juicio.",
            icono: iconoTarjeta("acuerdo"),
        },
        {
            titulo: "Contratos y dictámenes",
            descripcion: "Redactarás e interpretarás contratos y dictámenes.",
            icono: iconoTarjeta("documento"),
        },
    ],
    46: [
        {
            titulo: "Escena del hecho",
            descripcion: "Procesarás la escena y preservarás las evidencias.",
            icono: iconoTarjeta("huella"),
        },
        {
            titulo: "Peritajes",
            descripcion: "Harás peritajes balísticos, documentológicos, de huellas y de accidentes viales.",
            icono: iconoTarjeta("lupa"),
        },
        {
            titulo: "Asesoramiento judicial",
            descripcion: "Elaborarás informes periciales para jueces y fiscales.",
            icono: iconoTarjeta("informe"),
        },
        {
            titulo: "Reconstrucción de hechos",
            descripcion: "Determinarás cómo y en qué circunstancias ocurrió un delito.",
            icono: iconoTarjeta("rompecabezas"),
        },
    ],
    26: [
        {
            titulo: "Diseño de espacios",
            descripcion: "Diseñarás casas, edificios, espacios públicos y paisajes, desde la primera idea hasta el proyecto final.",
            icono: iconoTarjeta("regla"),
        },
        {
            titulo: "Arquitectura sustentable",
            descripcion: "Proyectarás edificios que ahorren energía y cuiden el ambiente.",
            icono: iconoTarjeta("hoja"),
        },
        {
            titulo: "Patrimonio",
            descripcion: "Recuperarás edificios históricos y cuidarás el patrimonio de las ciudades.",
            icono: iconoTarjeta("patrimonio"),
        },
        {
            titulo: "Urbanismo",
            descripcion: "Planificarás el crecimiento de ciudades y pueblos para que sean más agradables para vivir.",
            icono: iconoTarjeta("mapa"),
        },
    ],
    84: [
        {
            titulo: "Desarrollador/a de software",
            descripcion: "Crearás aplicaciones, sistemas y plataformas.",
            icono: iconoTarjeta("codigo"),
        },
        {
            titulo: "Especialista en datos e IA",
            descripcion: "Analizarás datos y entrenarás sistemas inteligentes.",
            icono: iconoTarjeta("datos"),
        },
        {
            titulo: "Especialista en ciberseguridad",
            descripcion: "Protegerás sistemas e investigarás incidentes.",
            icono: iconoTarjeta("seguridad"),
        },
        {
            titulo: "Redes e infraestructura",
            descripcion: "Administrarás redes, servidores y sistemas distribuidos.",
            icono: iconoTarjeta("red"),
        },
    ],
    11: [
        {
            titulo: "Dirección de empresas",
            descripcion: "Planificarás y dirigirás organizaciones de cualquier tamaño.",
            icono: iconoTarjeta("maletin"),
        },
        {
            titulo: "Finanzas e inversiones",
            descripcion: "Tomarás decisiones financieras y evaluarás proyectos de inversión.",
            icono: iconoTarjeta("grafico"),
        },
        {
            titulo: "Emprendimiento e innovación",
            descripcion: "Crearás tu propio negocio o impulsarás la transformación digital.",
            icono: iconoTarjeta("cohete"),
        },
        {
            titulo: "Consultoría",
            descripcion: "Asesorarás a empresas para mejorar su gestión.",
            icono: iconoTarjeta("conversacion"),
        },
    ],
    /* 14: [
        {
            titulo: "Estados y balances",
            descripcion: "Elaborarás, auditarás y firmarás estados contables.",
            icono: iconoTarjeta("firma"),
        },
        {
            titulo: "Impuestos",
            descripcion: "Asesorarás en impuestos y planificación fiscal.",
            icono: iconoTarjeta("impuestos"),
        },
        {
            titulo: "Auditoría",
            descripcion: "Harás auditorías internas y externas y valuarás empresas.",
            icono: iconoTarjeta("lupa"),
        },
        {
            titulo: "Peritajes judiciales",
            descripcion: "Actuarás como perito contable en la justicia.",
            icono: iconoTarjeta("balanza"),
        },
        {
            titulo: "Costos y finanzas",
            descripcion: "Gestionarás costos, presupuestos y proyecciones financieras.",
            icono: iconoTarjeta("calculadora"),
        },
        {
            titulo: "Tu propio estudio",
            descripcion: "Ejercerás de forma independiente o asesorarás a empresas.",
            icono: iconoTarjeta("edificio"),
        },
    ], */
};
