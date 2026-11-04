/**
 * Atribución persistente de campañas (UTM + click IDs de Google Ads).
 *
 * Problema: el formulario leía los parámetros solo de la URL actual. Si la
 * persona llegaba desde un anuncio, navegaba a otra página de la landing, o
 * volvía otro día sin el `?gclid=...`, el lead entraba a Salesforce sin
 * fuente, mientras Google Ads sí contaba la conversión (su cookie dura 90
 * días). Eso es lo que hace que los números no coincidan.
 *
 * Solución: cada página de la landing guarda los parámetros en localStorage
 * cuando vienen en la URL, y el formulario los toma de ahí si la URL actual
 * no trae ninguno.
 *
 * Se guardan en dos grupos independientes:
 *
 * - UTM (`utm_*`, `campaignid`, `id_conversion`): último clic. Cualquier
 *   visita que llegue con parámetros de campaña (UTM o click ID) es un toque
 *   nuevo y reemplaza el grupo entero con lo que traiga la URL, aunque sea
 *   nada: un clic de Google con solo `gclid` (auto-tagging) no puede quedar
 *   con los UTM de una visita anterior de Meta. Es lo que usa Salesforce
 *   para decir de qué canal vino el lead.
 *
 * - Click IDs de Google (`gclid`, `gbraid`, `wbraid`): solo se reemplazan
 *   con otro clic de Google, y viven sus 90 días aunque en el medio haya
 *   visitas de otras plataformas. Así, si alguien entra por Google y después
 *   convierte desde Meta, el lead queda atribuido a Meta pero conserva el
 *   gclid, y se puede importar a Google Ads como conversión offline.
 *
 * Cada grupo vence a los 90 días de su último clic, igual que la ventana de
 * conversión por defecto de Google Ads. Las visitas sin parámetros (directas,
 * orgánicas) no tocan nada.
 *
 * Solo se usa en el formulario de interesados de la landing. Los links a
 * los formularios de inscripción (src/lib/inscripcion.ts, Navbar, Enviado)
 * llevan sus propios UTM a propósito y no leen nada de acá.
 *
 * El costo es una lectura de localStorage y una resta por carga de página.
 */

export const CLAVES_UTM = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'campaignid',
    'id_conversion',
] as const

export const CLAVES_CLICK_ID = ['gclid', 'gbraid', 'wbraid'] as const

export type ClaveAtribucion = typeof CLAVES_UTM[number] | typeof CLAVES_CLICK_ID[number]
export type Atribucion = Partial<Record<ClaveAtribucion, string>>

const STORAGE_UTM = 'ucasal_attr'
const STORAGE_CLICK_ID = 'ucasal_click_ids'
const VIGENCIA_MS = 90 * 24 * 60 * 60 * 1000

function desdeUrl(params: URLSearchParams, claves: readonly ClaveAtribucion[]): Atribucion {
    const datos: Atribucion = {}
    for (const clave of claves) {
        const valor = params.get(clave)
        if (valor) datos[clave] = valor
    }
    return datos
}

const vacio = (datos: Atribucion) => Object.keys(datos).length === 0

function leerGuardada(clave: string): Atribucion {
    try {
        const crudo = localStorage.getItem(clave)
        if (!crudo) return {}
        const { ts, ...datos } = JSON.parse(crudo) as { ts?: number } & Atribucion
        if (typeof ts !== 'number' || Date.now() - ts > VIGENCIA_MS) {
            localStorage.removeItem(clave)
            return {}
        }
        return datos
    } catch {
        /* Storage bloqueado (modo privado, cookies deshabilitadas) o JSON roto. */
        return {}
    }
}

function escribir(clave: string, datos: Atribucion) {
    try {
        if (vacio(datos)) localStorage.removeItem(clave)
        else localStorage.setItem(clave, JSON.stringify({ ts: Date.now(), ...datos }))
    } catch {
        /* Sin storage: el formulario igual toma lo que venga en la URL. */
    }
}

function leerUrl() {
    const params = new URLSearchParams(window.location.search)
    return {
        utm: desdeUrl(params, CLAVES_UTM),
        clickIds: desdeUrl(params, CLAVES_CLICK_ID),
    }
}

/** Guarda los parámetros de la URL actual si trae alguno. Correr en cada página. */
export function guardarAtribucion(): void {
    if (typeof window === 'undefined') return
    const { utm, clickIds } = leerUrl()
    if (vacio(utm) && vacio(clickIds)) return

    /* Toque nuevo: los UTM se reemplazan siempre, aunque la URL no traiga. */
    escribir(STORAGE_UTM, utm)
    /* Los click IDs solo con otro clic de Google. */
    if (!vacio(clickIds)) escribir(STORAGE_CLICK_ID, clickIds)
}

/**
 * Atribución a enviar con el formulario, con las mismas reglas que
 * `guardarAtribucion` pero sin depender de que ya haya corrido.
 */
export function obtenerAtribucion(): Atribucion {
    if (typeof window === 'undefined') return {}
    const { utm, clickIds } = leerUrl()
    const toqueNuevo = !vacio(utm) || !vacio(clickIds)

    return {
        ...(toqueNuevo ? utm : leerGuardada(STORAGE_UTM)),
        ...(vacio(clickIds) ? leerGuardada(STORAGE_CLICK_ID) : clickIds),
    }
}
