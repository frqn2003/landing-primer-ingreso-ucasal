import { useEffect, useMemo, useRef, useState } from 'react'
import { modalidades } from '../../data/modalidades'
import { facultades } from '../../data/facultades'
import CartaCarrera from './CartaCarrera'

type Career = {
    codcar: number
    slug: string
    nombre: string
    descripcion: string
    duracion: string
    modalidad: number[]
    sector: number
}

type Props = { careers: Career[] }

export default function ExploradorCarreras({ careers }: Props) {
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
            const { code } = (e as CustomEvent).detail
            setModalities([code])
        }
        window.addEventListener('preselect-modalidad', handlePreselectModalidad)
        return () => window.removeEventListener('preselect-modalidad', handlePreselectModalidad)
    }, [])

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
    }, [careers])
    const facultadCounts = useMemo(() => {
        const counts = new Map<number, number>()
        for (const f of facultades) {
            counts.set(f.code, careers.filter((c) => c.sector === f.code).length)
        }
        return counts
    }, [careers])

    return <section id="carreras" className="bg-white py-20" aria-labelledby="career-title">
        <div className="contenedor">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-(--rojo-ucasal)">Oferta académica</p><h2 id="career-title" className="mt-3 text-3xl font-black text-(--azul-dark-ucasal) sm:text-4xl">Encontrá tu carrera</h2><p className="mt-4 max-w-2xl text-lg text-slate-600">Buscá por nombre o filtrá según la modalidad que preferís.</p></div>
                <div className="grid gap-3 sm:grid-cols-[minmax(220px,1fr)_170px_200px] lg:w-[620px]">
                    <label className="sr-only" htmlFor="career-search">Buscar carrera</label><input id="career-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar carrera..." className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-(--azul-ucasal) focus:ring-2 focus:ring-(--azul-ucasal)/20" />
                    <div className="relative" ref={modalidadRef}>
                        <button type="button" onClick={() => setModalidadAbierta((v) => !v)} aria-expanded={modalidadAbierta} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-left text-sm">
                            Modalidad{modalities.length > 0 ? ` (${modalities.length})` : ''}
                        </button>
                        {modalidadAbierta && (
                            <fieldset className="absolute z-10 mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-lg">
                                <legend className="sr-only">Modalidad</legend>
                                {modalidades.map((m) => (
                                    <label key={m.code} className="flex items-center justify-between gap-2 text-sm">
                                        <span className="flex items-center gap-2">
                                            <input type="checkbox" checked={modalities.includes(m.code)} onChange={() => toggleModalidad(m.code)} />
                                            {m.label}
                                        </span>
                                        <span className="text-slate-400">{modalidadCounts.get(m.code) ?? 0}</span>
                                    </label>
                                ))}
                            </fieldset>
                        )}
                    </div>
                    <div className="relative" ref={facultadRef}>
                        <button type="button" onClick={() => setFacultadAbierta((v) => !v)} aria-expanded={facultadAbierta} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-left text-sm">
                            Facultad{faculties.length > 0 ? ` (${faculties.length})` : ''}
                        </button>
                        {facultadAbierta && (
                            <fieldset className="absolute z-10 mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-lg">
                                <legend className="sr-only">Facultad</legend>
                                {facultades.map((f) => (
                                    <label key={f.code} className="flex items-center justify-between gap-2 text-sm">
                                        <span className="flex items-center gap-2">
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
            <p className="mt-8 text-sm text-slate-500" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'carrera encontrada' : 'carreras encontradas'}</p>
            {filtered.length > 0 ?
                <div className="relative mt-5">
                    <div className="max-h-[70vh] overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50 p-4 pr-3 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-track]:bg-transparent">
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
