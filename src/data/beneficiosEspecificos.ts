import type { ImageMetadata } from "astro";
import hospital from "../assets/beneficios-especificos/hospital.JPG";
import cirugia from "../assets/beneficios-especificos/ciru.JPG";
import animales from "../assets/beneficios-especificos/cabra.JPG";
import diagnostico from "../assets/beneficios-especificos/lab.JPG";

export interface BeneficioEspecifico {
    titulo: string;
    descripcion: string;
    imagen: ImageMetadata;
    alt: string;
    ilustrativa?: boolean;
}

export const beneficiosEspecificos: Record<number, BeneficioEspecifico[]> = {
    123: [
        {
            titulo: "Dos hospitales para practicar",
            descripcion: "Para pequeños y grandes animales, con quirófanos, laboratorios y todo tipo de especialidades",
            imagen: hospital,
            alt: "Fachada del Hospital Escuela de UCASAL.",
        },
        {
            titulo: "De la clínica a la cirugía",
            descripcion: "Planificá y ejecutá cirugías en el quirofano del hospital.",
            imagen: cirugia,
            alt: "Quirófano equipado para la práctica veterinaria.",
        },
        {
            titulo: "Animales de compañía, de campo y exóticos",
            descripcion: "Formate para diagnosticar, prevenir y tratar enfermedades de diferentes animales",
            imagen: animales,
            alt: "Una cabra en un corral.",
        },
        {
            titulo: "Llegá a un diagnóstico con evidencia",
            descripcion: "Laboratorios de investigación preparados para tus prácticas.",
            imagen: diagnostico,
            alt: "Microscopio en un laboratorio.",
        },
    ],
};
