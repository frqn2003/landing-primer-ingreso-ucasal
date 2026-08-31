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

/* Guarda la promesa, no el valor: si la cascada pide el mismo (codcar, modo)
   dos veces antes de que resuelva el primer fetch, se reusa el que ya está en
   vuelo en lugar de disparar otro. */
const cacheIndividual: Record<string, Promise<any>> = {}

function getCarreraModo(codcar: string, modo: number | string): Promise<any> {
    const key = `${codcar}_${modo}`
    if (!cacheIndividual[key]) {
        cacheIndividual[key] = fetch(`/landing/consultas/getCarrerasJson.php?modo=${modo}&codcar=${codcar}&tipcar=Grado,Pregrado,Intermedio`)
            .then(res => res.json())
            .then(data => data[0] ?? null)
            /* Un fetch fallido no queda cacheado: si no se borra la clave, el
               reintento devolvería para siempre la promesa rechazada. */
            .catch(error => {
                delete cacheIndividual[key]
                throw error
            })
    }
    return cacheIndividual[key]
}

/**
 * La API devuelve una fila por par (codcar, modo), no una fila por carrera con
 * las modalidades adentro. Una carrera mixta como Contador Público (14) sale
 * como dos registros —modo 1 y modo 7—, cada uno con SUS sedes: las de modo 1
 * son las presenciales y las de modo 7 las online. Por eso hay que pedir un
 * modo por vez y devolver las dos filas: si se trae solo la primera, el
 * selector muestra las dos modalidades pero al elegir la segunda no hay
 * registro que la respalde y la cascada se queda sin localidades.
 *
 * @param modos Modos a pedir para esta carrera, ya recortados a los que ofrece
 * la landing.
 */
export function getCarreraApi(codcar: string, modos: (number | string)[]): Promise<any[]> {
    return Promise.allSettled(modos.map(modo => getCarreraModo(codcar, modo)))
        .then(resultados => resultados
            .filter(r => r.status === 'fulfilled')
            .map(r => (r as PromiseFulfilledResult<any>).value)
            /* Un modo que la API no tiene cargado devuelve [] -> null. */
            .filter(Boolean))
}
