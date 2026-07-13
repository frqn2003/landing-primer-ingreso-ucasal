export function sanitizarTexto(texto: string): string{
    const ar_borrar = ["'",'"','/','\\\\','<','>',':'];
    return texto.replace(new RegExp(ar_borrar.join('|'), 'g'), '');
}