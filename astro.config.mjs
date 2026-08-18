// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// La landing se arma dos veces, una por modalidad, y cada build sale de su
// propio archivo .env. El modo llega por CLI (`astro build --mode online`),
// pero Astro no se lo pasa a este archivo de configuración, así que lo leemos
// de los argumentos. Sin --mode asumimos presencial, que es lo que sirve para
// `astro dev`.
const indiceModo = process.argv.indexOf('--mode');
const modo = indiceModo === -1 ? 'presencial' : process.argv[indiceModo + 1];

// Prefijo vacío = cargar todas las variables, no solo las PUBLIC_.
const env = loadEnv(modo, process.cwd(), '');

if (!env.RUTA_BASE || !env.PUBLIC_MODALIDAD) {
  throw new Error(
    `Falta RUTA_BASE o PUBLIC_MODALIDAD para el modo "${modo}". Revisá que ` +
      `exista .env.${modo} y usá los scripts build:presencial / build:online.`,
  );
}

// Vite arma `import.meta.env` con su propio modo ("development" en `astro dev`),
// así que no vería .env.presencial. Pasándolo por process.env queda disponible
// igual, y este archivo es el único lugar que decide de dónde sale la modalidad.
process.env.PUBLIC_MODALIDAD = env.PUBLIC_MODALIDAD;

// https://astro.build/config
export default defineConfig({
  base: env.RUTA_BASE,
  outDir: env.CARPETA_BUILD,
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});
