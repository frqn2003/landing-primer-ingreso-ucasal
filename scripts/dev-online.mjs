/**
 * Levanta el dev server de la landing ONLINE al lado del de presencial.
 *
 * Por qué hace falta un script y no alcanza un `astro dev` en package.json:
 *
 * 1. Astro admite un solo dev server por proyecto, anotado en .astro/dev.json.
 *    El segundo necesita `--ignore-lock` para arrancar sin pisar ese archivo
 *    (queda sin seguimiento: `astro dev stop|status|logs` solo ven el primero).
 *
 * 2. Astro detecta si lo corre un agente de IA (Claude Code, Cursor, Devin…) y
 *    en ese caso lo manda al background solo, lo cual es incompatible con
 *    `--ignore-lock` y falla. La única forma de desactivar esa detección es
 *    tener ASTRO_DEV_BACKGROUND definido, y no se puede setear una variable de
 *    entorno inline en un script de npm que funcione también en Windows.
 *
 * Resultado: `npm run dev:online` levanta el segundo server en cualquier
 * terminal y en cualquier orden respecto de `npm run dev`.
 */
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const astro = join(raiz, "node_modules", "astro", "bin", "astro.mjs");

const argumentos = [
    astro,
    "dev",
    "--mode",
    "online",
    "--port",
    "4322",
    "--ignore-lock",
    // Lo que se pase después de `npm run dev:online --` (por ejemplo --host).
    ...process.argv.slice(2),
];

const proceso = spawn(process.execPath, argumentos, {
    cwd: raiz,
    stdio: "inherit",
    env: { ...process.env, ASTRO_DEV_BACKGROUND: "1" },
});

proceso.on("exit", (codigo, senal) => {
    if (senal) process.kill(process.pid, senal);
    else process.exit(codigo ?? 0);
});
