
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
            className={`flex min-w-0 text-center gap-2 rounded-2xl  backdrop-blur-xltext-white shadow-lg ring-3 ring-(--rojo-ucasal)  ${onSubPage ? 'flex-row bg-white py-4' : 'flex-col bg-white/20 sm:px-5 sm:py-3 px-3 py-1.5'}`}
        >
            {promocion.descuento ? (
                <>
                    {onSubPage ? (
                        <div className="flex flex-col flex-1 text-black text-center items-center gap-3">
                            <span className="text-[1.8rem] leading-none text-center font-bold sm:text-4xl uppercase px-4">
                                {promocion.descuento} off matrícula
                            </span>
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

export function PromocionVigente({ onSubPage = false }: { onSubPage?: boolean }) {
    const { promocion } = usePromocionVigente();
    return promocion ? (
        <>
            {onSubPage && (
                <h3 className="text-lg md:text-xl font-semibold uppercase text-center tracking-wide text-black/80 max-w-xl">
                    Aprovecha la promoción
                </h3>
            )}
            <CeldaPromocion promocion={promocion} onSubPage={onSubPage} />
        </>
    ) : null;
}