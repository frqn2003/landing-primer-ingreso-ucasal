const iconos = {
    balanza: '<path d="M12 3v18M5 21h14M3 7h18M6 7l-4 7h8L6 7Zm12 0-4 7h8l-4-7Z"/>',
    maletin: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
    acuerdo: '<path d="m2 12 4-4 4 1 2-1 4 1 4-1 2 4-5 5-3-2-2 2-2-2-2 1-4-4Zm8-3 3 2 3-1 3 3"/>',
    documento: '<path d="M6 3h8l4 4v14H6zM14 3v4h4M9 11h6M9 15h6M9 18h4"/>',
    huella: '<path d="M7 11a5 5 0 1 1 10 0c0 5-1 8-2 10M10 21c1-3 1-6 1-10a1 1 0 1 1 2 0c0 3 0 7-1 10M4 12v-1a8 8 0 0 1 16 0c0 3 0 5-1 8M7 15c0 2 0 3-1 5"/>',
    lupa: '<circle cx="10" cy="10" r="6"/><path d="m15 15 5 5M8 10h4M10 8v4"/>',
    informe: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 9h6M9 13h6M9 17h4"/>',
    identificacion: '<circle cx="9" cy="8" r="3"/><path d="M3 19c0-3 2-5 6-5 2 0 3 .5 4 1"/><circle cx="17" cy="16" r="3"/><path d="m19 18 2 2"/>',
    rompecabezas: '<path d="M4 4h6v2a2 2 0 1 0 4 0V4h6v6h-2a2 2 0 1 0 0 4h2v6h-6v-2a2 2 0 1 0-4 0v2H4v-6h2a2 2 0 1 0 0-4H4Z"/>',
    equipo: '<circle cx="12" cy="8" r="3"/><circle cx="5" cy="10" r="2"/><circle cx="19" cy="10" r="2"/><path d="M6 20c0-4 2-6 6-6s6 2 6 6M2 19c0-3 1-5 4-5M22 19c0-3-1-5-4-5"/>',
    regla: '<path d="m4 16 12-12 4 4L8 20l-4-4Zm8-8 2 2m-5 1 2 2m-5 1 2 2"/>',
    construccion: '<path d="M4 21h16M7 21V9l5-4 5 4v12M10 21v-6h4v6M3 9l9-7 9 7"/>',
    hoja: '<path d="M20 4C10 4 5 7 5 13a6 6 0 0 0 6 6c6 0 9-5 9-15ZM4 21c3-5 6-8 12-11"/>',
    patrimonio: '<path d="M4 21V8l8-5 8 5v13M2 21h20M9 21v-7a3 3 0 0 1 6 0v7M8 10h.01M16 10h.01"/>',
    mapa: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Zm6-3v15m6-12v15"/>',
    codigo: '<path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16"/>',
    datos: '<ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v7c0 2 3 3 7 3s7-1 7-3V5M5 12v7c0 2 3 3 7 3s7-1 7-3v-7"/>',
    seguridad: '<path d="M12 2 4 5v6c0 5 3 9 8 11 5-2 8-6 8-11V5l-8-3Z"/><path d="M12 8v5m0 3h.01"/>',
    red: '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v5M5 17v-3h14v3M12 12v2"/>',
    proyecto: '<rect x="3" y="4" width="18" height="13" rx="1"/><path d="M8 21h8m-4-4v4M7 13l3-3 3 2 4-4"/>',
    auditoria: '<path d="M5 3h14v18H5zM8 8l1 1 2-2m2 1h3M8 14l1 1 2-2m2 1h3"/>',
    grafico: '<path d="M3 20h18M5 17V9h3v8m3 0V5h3v12m3 0v-6h3v6"/>',
    objetivo: '<circle cx="11" cy="13" r="8"/><circle cx="11" cy="13" r="4"/><path d="m11 13 9-9m-4 0h4v4"/>',
    cohete: '<path d="M5 15c1-5 5-9 14-10 0 9-4 13-9 14l-5-4Zm0 0-2 2v3h3l2-2m4-7h.01"/><circle cx="14" cy="10" r="2"/>',
    conversacion: '<path d="M3 4h13v10H9l-4 3v-3H3V4Zm13 4h5v10h-3v3l-4-3h-3v-4"/>',
    firma: '<path d="M3 18c3-1 5-5 5-8 0-2-2-2-2 1 0 5 1 7 3 7 1 0 2-3 3-3s0 3 2 3c1 0 2-2 3-2s1 2 4 2"/>',
    impuestos: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Zm3 13 6-7M9 9h.01M15 16h.01"/>',
    calculadora: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 6h8v4H8zM8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01"/>',
    edificio: '<path d="M5 21V4h14v17M3 21h18M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M11 21v-3h2v3"/>',
} as const;

export function iconoTarjeta(nombre: keyof typeof iconos): string {
    const trazos = iconos[nombre].replace(/<(path|rect|circle|ellipse)\b/g, '<$1 pathLength="1"');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1c4d86" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <style>
            .base { opacity: .7; }
            .recorrido { stroke-dasharray: .22 .78; animation: recorrer 3s linear infinite; }
            @keyframes recorrer { to { stroke-dashoffset: -1; } }
            @media (prefers-reduced-motion: reduce) {
                .base { opacity: 1; }
                .recorrido { display: none; }
            }
        </style>
        <g class="base">${trazos}</g>
        <g class="recorrido">${trazos}</g>
    </svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
