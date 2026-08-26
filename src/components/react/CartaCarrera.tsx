import { getNombreModalidades, getNombreFacultad } from '../../lib/utils'
type Career = {
    codcar: number
    slug: string
    nombre: string
    duracion: string
    modalidad: number[]
    sector: number
}

const cartas = import.meta.glob('/src/assets/cards/*.webp', { eager: true, query: '?url', import: 'default' })


type Props = { career: Career; base?: string }

export default function CartaCarrera({ career, base = import.meta.env.BASE_URL }: Props) {
    const imagenCarta = cartas[`/src/assets/cards/${career.codcar}.webp`] || ''
    const tituloCarrera = career.nombre?.trim().split(' ') || []
    const tituloCarreraClase = tituloCarrera?.length >= 7 ? 'text-[11px] xl:text-sm 2xl:text-base' : (tituloCarrera?.length >= 3 ? 'text-sm lg:text-md xl:text-base 2xl:text-lg' : 'text-base md:text-lg')
    const href = `${base}${career.slug}?from=landing`

    return (
        <div className='relative bg-white rounded-2xl shadow-sm flex flex-col h-60 sm:h-80 group border border-slate-200 hover:border-(--rojo-ucasal) transition-all duration-300'>
            {/* En sm+ toda la carta es clickeable gracias a este link superpuesto */}
            <a href={href} aria-label={career.nombre} className='absolute inset-0 z-10 hidden sm:block rounded-2xl'></a>
            <div className='h-[35%] md:h-[50%] relative'>
                <img src={imagenCarta}
                    alt={career.nombre}
                    className='w-full h-full object-cover rounded-t-2xl'
                    loading='lazy'
                    decoding='async'
                />
                <div className="bg-black/40 sm:bg-black/15 absolute top-0 left-0 w-full h-full rounded-t-2xl"></div>
                <div className="absolute top-4 right-2 z-10 sm:hidden">
                    <a href={`${base}${career.slug}?from=landing`} className="sm:hidden flex flecha-carrera-mobile"><span>↗</span></a>
                </div>
            </div>
            <div className='h-[65%] md:h-[50%] flex flex-col px-3 p-4'>
                <div>
                    <h4 className={`font-bold text-(--azul-dark-ucasal) leading-tight ${tituloCarreraClase}`}>{career.nombre}</h4>
                    <h5 className='text-xs md:text-sm font-semibold text-slate-500 mt-1'>{getNombreFacultad(career.sector)} • <span className='inline'>{career.duracion}</span><span className='inline'> • {getNombreModalidades(career.modalidad)}</span></h5>
                </div>
                <div className='w-full flex justify-center items-center mt-auto'>
                    <a href={href} className="sm:flex hidden flecha-carrera relative z-20 gap-2 overflow-hidden">
                        <span>Explorar más</span>
                        <span className="inline-block -translate-x-10 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 group-hover:-rotate-35 group-hover:-translate-y-0.5 font-bold text-2xl">→</span>
                    </a>

                </div>
            </div>
        </div>
    )
}
