import { formatModalidades, getFacultad } from '../../lib/utils'

type Career = {
    codcar: number
    slug: string
    nombre: string
    descripcion: string
    duracion: string
    modalidad: number[]
    sector: number
}

type Props = { career: Career; base?: string }

export default function CartaCarrera({ career, base = import.meta.env.BASE_URL }: Props) {
    return (
        <div
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
            <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{formatModalidades(career.modalidad)}</span>
                <span className="text-sm font-semibold text-slate-500">{career.duracion}</span>
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-400">{getFacultad(career.sector)}</p>
            <h3 className="mt-1 text-xl font-bold text-(--azul-dark-ucasal)">{career.nombre}</h3>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{career.descripcion}</p>
            <a href={`${base}${career.slug}?from=landing`} className="mt-6 inline-flex font-bold text-(--rojo-ucasal) hover:underline">Ver carrera →</a>
        </div>
    )
}
