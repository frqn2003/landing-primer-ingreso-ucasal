import { modalidades } from '../data/modalidades';
import { facultades } from '../data/facultades';

export function sanitizarTexto(texto: string): string{
    const ar_borrar = ["'",'"','/','\\\\','<','>',':'];
    return texto.replace(new RegExp(ar_borrar.join('|'), 'g'), '');
}

export function getModalidadLabel(code: number): string {
    return modalidades.find((m) => m.code === code)?.label ?? 'Consultar modalidad';
}

export function getNombreFacultad(sector: number): string {
    return facultades.find((f) => f.code === sector)?.label ?? 'Consultar facultad';
}

export function getNombreModalidades(codes: number[]): string {
    const labels = codes.map(getModalidadLabel);
    if (labels.length <= 1) return labels[0] ?? 'Consultar modalidad';
    if (labels.length === 2) return labels.join(' y ');
    return `${labels.slice(0, -1).join(', ')} y ${labels[labels.length - 1]}`;
}
