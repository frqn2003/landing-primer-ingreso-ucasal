import { useMemo, useState } from 'react'

type Career = {
  codcar: number
  slug: string
  nombre: string
  descripcion: string
  duracion: string
  modalidad: number
  sector: number
}

type Props = { careers: Career[] }

const modalityLabels: Record<number, string> = { 1: 'Presencial', 7: 'A distancia' }

export default function ExploradorCarreras({ careers }: Props) {
  const [query, setQuery] = useState('')
  const [modality, setModality] = useState('todas')
  const filtered = useMemo(() => careers.filter((career) => {
    const matchesQuery = `${career.nombre} ${career.descripcion}`.toLowerCase().includes(query.toLowerCase())
    const matchesModality = modality === 'todas' || modality === String(career.modalidad)
    return matchesQuery && matchesModality
  }), [careers, modality, query])

  return <section id="carreras" className="bg-white py-20" aria-labelledby="career-title">
    <div className="contenedor mx-auto max-w-7xl">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-(--rojo-ucasal)">Oferta académica</p><h2 id="career-title" className="mt-3 text-3xl font-black text-(--azul-dark-ucasal) sm:text-4xl">Encontrá tu carrera</h2><p className="mt-4 max-w-2xl text-lg text-slate-600">Buscá por nombre o filtrá según la modalidad que preferís.</p></div>
        <div className="grid gap-3 sm:grid-cols-[minmax(220px,1fr)_180px] lg:w-[480px]"><label className="sr-only" htmlFor="career-search">Buscar carrera</label><input id="career-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar carrera..." className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-(--azul-ucasal) focus:ring-2 focus:ring-(--azul-ucasal)/20" /><label className="sr-only" htmlFor="career-modality">Filtrar por modalidad</label><select id="career-modality" value={modality} onChange={(event) => setModality(event.target.value)} className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-(--azul-ucasal) focus:ring-2 focus:ring-(--azul-ucasal)/20"><option value="todas">Todas</option><option value="1">Presencial</option><option value="7">A distancia</option></select></div>
      </div>
      <p className="mt-8 text-sm text-slate-500" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'carrera encontrada' : 'carreras encontradas'}</p>
      {filtered.length > 0 ? <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((career) => <article key={career.codcar} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="flex items-start justify-between gap-4"><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{modalityLabels[career.modalidad] ?? 'Consultar modalidad'}</span><span className="text-sm font-semibold text-slate-500">{career.duracion}</span></div><h3 className="mt-5 text-xl font-bold text-(--azul-dark-ucasal)">{career.nombre}</h3><p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{career.descripcion}</p><a href={`${import.meta.env.BASE_URL}${career.slug}`} className="mt-6 inline-flex font-bold text-(--rojo-ucasal) hover:underline">Ver carrera →</a></article>)}</div> : <div className="mt-5 rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-600">No encontramos carreras con esos filtros.</div>}
    </div>
  </section>
}
