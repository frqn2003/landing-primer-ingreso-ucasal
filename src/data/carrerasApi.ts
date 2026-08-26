import data from './carreras'

const modosUnicos = [...new Set(data.flatMap(c => c.modalidad))]

/* Clave de sesion por juego de modos: las dos landings pueden convivir en el
   mismo origen y con una sola clave la cache de la presencial le servia sedes
   de modo 1 a la online. */
const claveCache = (modos: number[]) =>
    `cache_carreras_api_ucasal_${[...modos].sort((a, b) => a - b).join('-')}`

let cache: any[] | null = null
let promesa: Promise<any[]> | null = null

const DEV_MODE = false

/**
 * @param modos Modos de cursado a pedir. La cascada pasa los de esta landing,
 * asi que el build online no consulta ni recibe las sedes de modo 1.
 */
export function getCarrerasApi(modos: number[] = modosUnicos): Promise<any[]> {
    if (cache) return Promise.resolve(cache)
    if (promesa) return promesa


    const stored = sessionStorage.getItem(claveCache(modos))
    if (stored) {
        cache = JSON.parse(stored)
        return Promise.resolve(cache as any[])
    }

    if (DEV_MODE) {
        promesa = fetch(`${import.meta.env.BASE_URL}src/assets/mock-carreras.json`)
            .then(res => res.json())
            .then(data => {
                cache = data
                return cache as any[]
            })
        return promesa
    }

    promesa = Promise.allSettled(
        modos.map(modo =>
            fetch(`/landing/consultas/getCarrerasJson.php?modo=${modo}&tipcar=Grado,Pregrado,Intermedio`)
                .then(res => res.json())
        )
    ).then(resultados => {
        cache = resultados
            .filter(r => r.status === 'fulfilled')
            .flatMap(r => (r as PromiseFulfilledResult<any>).value)
        return cache as any[]
    })
    return promesa
}

/* Para las landings específicas se carga una sola vez el JSON con esa carrera específica */

const cacheIndividual: Record<string, any> = {}

export function getCarreraApi(codcar: string, modo: string): Promise<any> {
    const key = `${codcar}_${modo}`
    if (cacheIndividual[key]) return Promise.resolve(cacheIndividual[key])

    return fetch(`/landing/consultas/getCarrerasJson.php?modo=${modo}&codcar=${codcar}&tipcar=Grado,Pregrado,Intermedio`)
        .then(res => res.json())
        .then(data => {
            cacheIndividual[key] = data[0] ?? null
            return cacheIndividual[key]
        })
}
