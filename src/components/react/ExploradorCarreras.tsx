import { useMemo, useState } from 'react'
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
    const [modality, setModality] = useState('todas')
    const [faculty, setFaculty] = useState('todas')
    const filtered = useMemo(() => careers.filter((career) => {
        const matchesQuery = `${career.nombre} ${career.descripcion}`.toLowerCase().includes(query.toLowerCase())
        const matchesModality = modality === 'todas' || career.modalidad.includes(Number(modality))
        const matchesFaculty = faculty === 'todas' || career.sector === Number(faculty)
        return matchesQuery && matchesModality && matchesFaculty
    }), [careers, modality, faculty, query])

    return <section id="carreras" className="bg-white py-20" aria-labelledby="career-title">
        <div className="contenedor">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-(--rojo-ucasal)">Oferta académica</p><h2 id="career-title" className="mt-3 text-3xl font-black text-(--azul-dark-ucasal) sm:text-4xl">Encontrá tu carrera</h2><p className="mt-4 max-w-2xl text-lg text-slate-600">Buscá por nombre o filtrá según la modalidad que preferís.</p></div>
                <div className="grid gap-3 sm:grid-cols-[minmax(220px,1fr)_170px_200px] lg:w-[620px]">
                    <label className="sr-only" htmlFor="career-search">Buscar carrera</label><input id="career-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar carrera..." className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-(--azul-ucasal) focus:ring-2 focus:ring-(--azul-ucasal)/20" />
                    <label className="sr-only" htmlFor="career-modality">Filtrar por modalidad</label><select id="career-modality" value={modality} onChange={(event) => setModality(event.target.value)} className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-(--azul-ucasal) focus:ring-2 focus:ring-(--azul-ucasal)/20">
                        <option value="todas">Todas las modalidades</option>
                        {modalidades.map((m) => <option key={m.code} value={m.code}>{m.label}</option>)}
                    </select>
                    <label className="sr-only" htmlFor="career-faculty">Filtrar por facultad</label><select id="career-faculty" value={faculty} onChange={(event) => setFaculty(event.target.value)} className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-(--azul-ucasal) focus:ring-2 focus:ring-(--azul-ucasal)/20">
                        <option value="todas">Todas las facultades</option>
                        {facultades.map((f) => <option key={f.code} value={f.code}>{f.label}</option>)}
                    </select>
                </div>
            </div>
            <p className="mt-8 text-sm text-slate-500" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'carrera encontrada' : 'carreras encontradas'}</p>
            {filtered.length > 0 ?
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((career) =>
                    <CartaCarrera key={career.codcar} career={career} base={import.meta.env.BASE_URL} />
                )}
                </div>
                :
                <div className="mt-5 rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-600">No encontramos carreras con esos filtros.
                </div>}
        </div>
    </section>
}
