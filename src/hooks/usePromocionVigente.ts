import { useEffect, useState } from 'react'
import { obtenerPromociones, type Promocion } from '../data/promociones'

/** Cada cuánto se recalculan la vigencia y los días restantes. */
const REFRESCO_MS = 60_000
const REFRESCO_DATOS_MS = 300_000

interface UsePromocionVigenteReturn {
    /** La promoción que está corriendo ahora, o null si ninguna. */
    promocion: Promocion | null
    /** Días que le quedan a esa promoción (0 si vence hoy). */
    dias: number
    /**
     * False hasta que hidrata. La vigencia depende de la fecha del visitante,
     * así que en el HTML del build no se puede decidir: los componentes que
     * usan el hook no dibujan la promoción hasta que esto es true, y así no hay
     * diferencia entre lo que sirve el servidor y lo que arma React.
     */
    montado: boolean
}

/**
 * Lee las promociones publicadas en el navegador, elige la vigente y lleva la
 * cuenta de los días que le quedan. Ver src/data/promociones.ts.
 *
 * Un solo reloj para las dos cosas: cuando una promoción se vence con la
 * pestaña abierta, lo que se muestra pasa solo a la siguiente o desaparece.
 */
export function usePromocionVigente(): UsePromocionVigenteReturn {
    const [ahora, setAhora] = useState<Date | null>(null)
    const [promociones, setPromociones] = useState<Promocion[]>([])

    useEffect(() => {
        const controlador = new AbortController()
        const actualizar = async () => {
            const publicadas = await obtenerPromociones(controlador.signal)
            if (!controlador.signal.aborted) setPromociones(publicadas)
        }

        setAhora(new Date())
        void actualizar()
        const intervalo = setInterval(() => setAhora(new Date()), REFRESCO_MS)
        const intervaloDatos = setInterval(() => void actualizar(), REFRESCO_DATOS_MS)
        return () => {
            controlador.abort()
            clearInterval(intervalo)
            clearInterval(intervaloDatos)
        }
    }, [])

    if (!ahora) return { promocion: null, dias: 0, montado: false }

    const promocion = promociones.find(
        (p) => ahora >= new Date(p.fecha_inicio) && ahora <= new Date(p.fecha_fin),
    ) ?? null

    const dias = promocion
        ? Math.max(0, Math.ceil((new Date(promocion.fecha_fin).getTime() - ahora.getTime()) / 86_400_000))
        : 0

    return { promocion, dias, montado: true }
}
