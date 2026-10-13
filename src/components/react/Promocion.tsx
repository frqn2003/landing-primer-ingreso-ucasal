
import type { Promocion } from "../../data/promociones";
import { usePromocionVigente } from "../../hooks/usePromocionVigente";

function textoPlazo(fechaFin: string): string {
    const fecha = new Date(fechaFin);
    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    return `Hasta el ${dia}/${mes}`;
}
export default function CeldaPromocion({
    promocion,
    onSubPage = false,
}: {
    promocion: Promocion;
    onSubPage?: boolean;
}) {
    return (
        <div
            role="status"
            aria-label="Promoción vigente"
            className={`flex min-w-0 text-center gap-2 rounded-2xl text-white ${onSubPage ? 'flex-row text-white py-2' : 'flex-col bg-white/20 sm:px-5 sm:py-3 px-3 py-1.5 ring-3 ring-(--rojo-ucasal) shadow-lg backdrop-blur-xl'}`}
        >
            {promocion.descuento ? (
                <>
                    {onSubPage ? (
                        <div className="flex flex-col flex-1 text-center items-center gap-3">
                            <p className="text-6xl text-center font-bold sm:text-7xl uppercase px-4 text-shadow-[2px_3px_6px_rgba(0,0,0,0.6)]">
                                {promocion.descuento} off <span className="block lowercase text-4xl md:text-[2.6rem] text-shadow-[2px_3px_6px_rgba(0,0,0,0.6)]">en tu matrícula</span>
                            </p>
                            <div className="flex flex-row md:flex-col items-center text-lg">
                                <span className="whitespace-nowrap block">
                                    {textoPlazo(promocion.fecha_fin)}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col flex-1 md:flex-row text-center gap-1 items-center sm:gap-6">
                            <span className="text-[1.8rem] leading-none text-center font-bold sm:text-4xl uppercase border-(--rojo-ucasal) md:border-r-3 px-4">
                                {promocion.descuento} off <br className="hidden md:block" /><span className="whitespace-normal leading-12 md:text-[1.6rem]">matrícula</span>
                            </span>
                            <div className="flex flex-row md:flex-col items-center text-lg md:gap-2 gap-5">
                                <span className=" whitespace-nowrap text-white/80 block">
                                    {textoPlazo(promocion.fecha_fin)}
                                </span>
                            </div>
                        </div>
                    )}
                </>
            ) : <span className="text-base leading-tight font-black uppercase sm:text-2xl">
                {promocion.subtitulo || "Cuotas sin interés"}
            </span>}

        </div>
    );
}

export function PromocionVigente({ onSubPage }: { onSubPage?: boolean }) {
    const { promocion } = usePromocionVigente();
    return promocion ? (
        <>
            <CeldaPromocion promocion={promocion} onSubPage={onSubPage} />
        </>
    ) : null;
}