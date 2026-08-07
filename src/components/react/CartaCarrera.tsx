import { getNombreModalidades, getNombreFacultad } from '../../lib/utils'

type Career = {
    codcar: number
    slug: string
    nombre: string
    duracion: string
    modalidad: number[]
    sector: number
}

type Props = { career: Career; base?: string }

export default function CartaCarrera({ career, base = import.meta.env.BASE_URL }: Props) {
    const tituloCarrera = career.nombre?.trim().split(' ') || []
    const tituloCarreraClase = tituloCarrera?.length >= 7 ? 'text-[11px] xl:text-sm 2xl:text-base' : (tituloCarrera?.length >= 3 ? 'text-sm lg:text-md xl:text-base 2xl:text-lg' : 'text-base md:text-lg')
    return (
        <div className='bg-white rounded-2xl shadow-sm flex flex-col h-75 sm:h-80 border border-slate-300'>
            <div className='h-[35%] md:h-[50%] relative'>
                <img src={`${base}cards/${career.codcar}.webp`} alt={career.nombre} className='w-full h-full object-cover rounded-t-2xl' loading='lazy'/>
                <div className="bg-black/40 sm:bg-black/15 absolute top-0 left-0 w-full h-full rounded-t-2xl"></div>
                <div className="absolute top-4 right-2 z-10 sm:hidden">
                    <a href={`${base}${career.slug}?from=landing`} className="sm:hidden flex flecha-carrera"><span>↗</span></a>
                </div>
            </div>
            <div className='h-[65%] md:h-[50%] flex flex-col px-3 p-4'>
                <h4 className={`font-bold text-(--azul-dark-ucasal) leading-tight ${tituloCarreraClase}`}>{career.nombre}</h4>
                <h5 className='text-xs md:text-sm font-semibold text-slate-500 mt-1'>{getNombreFacultad(career.sector)} • <span className='inline'>{career.duracion}</span><span className='inline'> • {getNombreModalidades(career.modalidad)}</span></h5>
                <div className='w-full flex max-md:flex-col max-md:items-start max-md:justify-end justify-between items-end h-full text-sm font-semibold text-slate-500'>
                    <button
                        onClick={() => {
                            document.getElementById('pedidoinfo')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="btn-shimmer bg-linear-to-r from-(--rojo-ucasal) to-(--rojo-dark-ucasal) hover:shadow-[0_0_14px_2px_rgba(216,49,53,0.5)] text-white border border-(--rojo-ucasal) shadow-sm transition-all duration-300 py-2 px-4 rounded-xl font-bold text-xs sm:text-[14px] gap-1 flex justify-center items-center max-xl:w-full cursor-pointer"
                    >
                        Solicitar Información
                    </button>
                    <a href={`${base}${career.slug}?from=landing`} className="sm:flex hidden flecha-carrera"><span>↗</span></a>

                </div>
            </div>
        </div>
    )
}
