import { useEffect, useMemo, useRef, useState } from 'react'
import { modalidades as todasLasModalidades } from '../../data/modalidades'
import { facultades } from '../../data/facultades'
import CartaCarrera from './CartaCarrera'

const BASE_URL = import.meta.env.BASE_URL

type Career = {
    codcar: number
    slug: string
    nombre: string
    descripcion: string
    duracion: string
    modalidad: number[]
    sector: number
}

type Props = {
    careers: Career[]
    /**
     * Códigos de modo que se ofrecen en esta landing. En el build online llega
     * solo [7], así que el filtro de modalidad muestra únicamente Online.
     * Lo resuelve index.astro con `modosCarrera` de src/config/modalidad.ts;
     * viene por props para no arrastrar la config al bundle del navegador.
     */
    modosDisponibles?: number[]
}

export default function ExploradorCarreras({ careers, modosDisponibles }: Props) {
    const modalidades = useMemo(() => modosDisponibles
        ? todasLasModalidades.filter((m) => modosDisponibles.includes(m.code))
        : todasLasModalidades, [modosDisponibles])
    const [query, setQuery] = useState('')
    const [modalities, setModalities] = useState<number[]>([])
    const [faculties, setFaculties] = useState<number[]>([])

    function toggleModalidad(code: number) {
        setModalities((prev) => prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code])
    }
    function toggleFacultad(code: number) {
        setFaculties((prev) => prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code])
    }

    const [modalidadAbierta, setModalidadAbierta] = useState(false)
    const [facultadAbierta, setFacultadAbierta] = useState(false)
    const modalidadRef = useRef<HTMLDivElement>(null)
    const facultadRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickFuera(e: MouseEvent) {
            if (modalidadRef.current && !modalidadRef.current.contains(e.target as Node)) setModalidadAbierta(false)
            if (facultadRef.current && !facultadRef.current.contains(e.target as Node)) setFacultadAbierta(false)
        }
        document.addEventListener('mousedown', handleClickFuera)
        return () => document.removeEventListener('mousedown', handleClickFuera)
    }, [])

    /* Preselección de modalidad desde el CTA de la sección "Modalidades" */
    useEffect(() => {
        function handlePreselectModalidad(e: Event) {
            if (modalidades.length <= 1) return /* el filtro está oculto: no dejar estado sin forma de limpiarlo */
            const { code } = (e as CustomEvent).detail
            setModalities([code])
        }
        window.addEventListener('preselect-modalidad', handlePreselectModalidad)
        return () => window.removeEventListener('preselect-modalidad', handlePreselectModalidad)
    }, [modalidades])

    const filtered = useMemo(() => careers.filter((career) => {
        const matchesQuery = `${career.nombre} ${career.descripcion}`.toLowerCase().includes(query.toLowerCase())
        const matchesModality = modalities.length === 0 || career.modalidad.some((m) => modalities.includes(m))
        const matchesFaculty = faculties.length === 0 || faculties.includes(career.sector)
        return matchesQuery && matchesModality && matchesFaculty
    }), [careers, modalities, faculties, query])

    /* Cantidad de carreras por opción, independiente de los demás filtros activos (para mostrar junto a cada checkbox) */
    const modalidadCounts = useMemo(() => {
        const counts = new Map<number, number>()
        for (const m of modalidades) {
            counts.set(m.code, careers.filter((c) => c.modalidad.includes(m.code)).length)
        }
        return counts
    }, [careers, modalidades])
    const facultadCounts = useMemo(() => {
        const counts = new Map<number, number>()
        for (const f of facultades) {
            counts.set(f.code, careers.filter((c) => c.sector === f.code).length)
        }
        return counts
    }, [careers])
    /* Facultades sin carreras en este build no aparecen en el filtro */
    const facultadesVisibles = useMemo(
        () => facultades.filter((f) => (facultadCounts.get(f.code) ?? 0) > 0),
        [facultadCounts])

    return <section id="carreras" className="py-20 seccion-snap flex-col relative" aria-labelledby="career-title">
        <img src={BASE_URL + 'fondos/blanco.webp'} alt="" className="absolute inset-0 h-full w-full object-cover -z-10 bg-center" />
        <div className="contenedor flex w-full min-w-0 flex-col lg:min-h-0 lg:flex-1">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div><h2 id="career-title" className="mt-3 text-3xl font-black text-(--azul-dark-ucasal) sm:text-4xl">Encontrá tu carrera</h2><p className="mt-4 max-w-2xl text-base text-slate-600">Buscá por nombre o por los filtros</p></div>
                <div className="grid gap-3 sm:grid-cols-2 lg:w-220">
                    <label className="sr-only" htmlFor="career-search">Buscar carrera</label><input id="career-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar carrera..." className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-(--azul-ucasal) focus:ring-2 focus:ring-(--azul-ucasal)/20" />
                    <div className={`flex flex-row w-full max-md:grid gap-4 ${modalidades.length > 1 ? 'max-md:grid-cols-2' : 'max-md:grid-cols-1'}`}>
                        {/* Con una sola modalidad disponible (build online) el filtro no aporta nada */}
                        {modalidades.length > 1 && (
                            <div className="relative w-full" ref={modalidadRef}>
                                <button type="button" onClick={() => setModalidadAbierta((v) => !v)} aria-expanded={modalidadAbierta} className="w-full cursor-pointer rounded-xl border border-slate-300 px-4 py-3 text-left text-sm">
                                    Modalidad{modalities.length > 0 ? ` (${modalities.length})` : ''}
                                </button>
                                {modalidadAbierta && (
                                    <fieldset className="absolute z-50 mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-lg">
                                        <legend className="sr-only">Modalidad</legend>
                                        {modalidades.map((m) => (
                                            <label key={m.code} className="flex items-center justify-between gap-2 text-sm">
                                                <span className="flex items-center gap-2 cursor-pointer">
                                                    <input type="checkbox" checked={modalities.includes(m.code)} onChange={() => toggleModalidad(m.code)} />
                                                    {m.label}
                                                </span>
                                                <span className="text-slate-400">{modalidadCounts.get(m.code) ?? 0}</span>
                                            </label>
                                        ))}
                                    </fieldset>
                                )}
                            </div>
                        )}
                        <div className="relative w-full" ref={facultadRef}>
                            <button type="button" onClick={() => setFacultadAbierta((v) => !v)} aria-expanded={facultadAbierta} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-left text-sm cursor-pointer">
                                Facultad{faculties.length > 0 ? ` (${faculties.length})` : ''}
                            </button>
                            {facultadAbierta && (
                                <fieldset className="absolute z-50 mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-lg">
                                    <legend className="sr-only">Facultad</legend>
                                    {facultadesVisibles.map((f) => (
                                        <label key={f.code} className="flex items-center justify-between gap-2 text-sm">
                                            <span className="flex items-center gap-2 cursor-pointer">
                                                <input type="checkbox" checked={faculties.includes(f.code)} onChange={() => toggleFacultad(f.code)} />
                                                {f.label}
                                            </span>
                                            <span className="text-slate-400">{facultadCounts.get(f.code) ?? 0}</span>
                                        </label>
                                    ))}
                                </fieldset>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-8 text-sm text-slate-500" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'carrera encontrada' : 'carreras encontradas'}</p>
            {filtered.length > 0 ?
                <div className="relative mt-5 lg:min-h-0 lg:flex-1">
                    <div className="max-h-[70vh] lg:h-full lg:max-h-none overflow-y-auto rounded-2xl border border-black/30 bg-slate-50 p-4 pr-3 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-track]:bg-transparent">
                        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">{filtered.map((career) =>
                            <CartaCarrera key={career.codcar} career={career} base={import.meta.env.BASE_URL} />
                        )}
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 rounded-b-2xl bg-gradient-to-t from-slate-50 to-transparent"></div>
                </div>
                :
                <div className="mt-5 rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-600">No encontramos carreras con esos filtros.
                </div>}
        </div>
    </section>
}
