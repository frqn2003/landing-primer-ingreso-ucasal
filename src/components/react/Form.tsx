import { useEffect, useRef, useState } from "react"
import dataCarreras from '../../data/carreras'
import intlTelInput from 'intl-tel-input'
import 'intl-tel-input/styles'
import { clarityEvent, clarityUpgrade } from '../../lib/clarity'
import { useCarrerasCascada } from '../../hooks/useCarrerasCascada'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "../../lib/schemas"
import { Aranceles } from "./Aranceles"

const BASE_URL = import.meta.env.BASE_URL

const RECAPTCHA_SITE_KEY = '6LfSBnAsAAAAANxuGFb77-exJXGHRWQGrCsGZMnr'
let recaptchaPromise: Promise<any> | null = null

function cargarRecaptcha() {
    const grecaptcha = (window as any).grecaptcha
    if (grecaptcha) return Promise.resolve(grecaptcha)
    if (recaptchaPromise) return recaptchaPromise

    recaptchaPromise = new Promise((resolve, reject) => {
        const scriptExistente = document.getElementById('recaptcha-script') as HTMLScriptElement | null
        if (scriptExistente) {
            scriptExistente.addEventListener('load', () => resolve((window as any).grecaptcha), { once: true })
            scriptExistente.addEventListener('error', reject, { once: true })
            return
        }

        const script = document.createElement('script')
        script.id = 'recaptcha-script'
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
        script.async = true
        script.defer = true
        script.onload = () => resolve((window as any).grecaptcha)
        script.onerror = reject
        document.head.appendChild(script)
    })

    return recaptchaPromise
}

function normalizar(texto: string) {
    return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
}

const IconoPresencial = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V7l8-4 8 4v14M4 21h16M9 21v-6h6v6" />
    </svg>
)

const IconoOnline = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-5">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9Z" />
    </svg>
)

const IconoBuscar = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-4 text-gray-400 shrink-0">
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="M21 21l-3.5-3.5" />
    </svg>
)

export default function Form({ codcarInicial, onSubPage }: { codcarInicial?: string, onSubPage?: boolean }) {
    const { register, handleSubmit, formState: { errors, isSubmitted }, watch, setValue } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cbx_carrera: codcarInicial ?? '',
        }
    })
    const {
        containerRef,
        apiCargando,
        codcar,
        modalidad,
        idProvincia,
        idSede,
        modos,
        localidades,
        sedeSeleccionada,
        idSedeReal,
        carreraCompleta,
        seleccionarCodcar,
        seleccionarModalidad,
        seleccionarProvincia,
        seleccionarLocalidad,
    } = useCarrerasCascada({
        codcarInicial,
        onSubPage,
        onModalidadChange: (v) => { setValue('cbx_modo', v, { shouldValidate: true }) },
        onProvinciaChange: (v) => { setValue('cbx_provincia', v, { shouldValidate: true }) },
        onSedeChange: (v) => { setValue('cbx_sede', v, { shouldValidate: true }) },
        onCodcarChange: (v) => { setValue('cbx_carrera', v) },
    })
    const nombre = watch('nombre')
    const email = watch('email')
    const codArea = watch('cod_area')
    const tel = watch('tel')
    const [enviando, setEnviando] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const [ddiPais, setDdiPais] = useState('')
    const formRef = useRef<HTMLFormElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    /* Sincronizar containerRef del hook con el form element */
    const setFormRef = (el: HTMLFormElement | null) => {
        formRef.current = el; (containerRef as React.RefObject<HTMLElement | null>).current = el
    }
    const itiRef = useRef<ReturnType<typeof intlTelInput> | null>(null)
    const urlParametros = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '')
    const parametros = {
        utm_source: urlParametros.get('utm_source'),
        utm_medium: urlParametros.get('utm_medium'),
        utm_campaign: urlParametros.get('utm_campaign'),
        utm_term: urlParametros.get('utm_term'),
        utm_content: urlParametros.get('utm_content'),
        idconversion: urlParametros.get('id_conversion'),
        campaignid: urlParametros.get('campaignid'),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : ''
    }
    const [carreraBloqueada, setCarreraBloqueada] = useState(Boolean(codcarInicial))
    const [buscarLocalidad, setBuscarLocalidad] = useState('')
    const [localidadAbierta, setLocalidadAbierta] = useState(false)
    const localidadRef = useRef<HTMLDivElement>(null)

    {/* Helper de estado visual */ }
    const claseBorde = (habilitado: boolean, completado: boolean) => {
        if (completado) return 'border-green-500'
        if (isSubmitted && !completado) return 'border-red-500'
        if (habilitado) return 'border-blue-500'
        return 'border-gray-300'
    }

    const todosCompletos = !!carreraCompleta && !!nombre && !!email && !!ddiPais && !!codArea && !!tel
    const carreraSeleccionadaLocal = dataCarreras.find(c => String(c.codcar) === String(codcar))
    const sectorCarrera = carreraSeleccionadaLocal?.sector

    /* Sedes */
    const localidadesFiltradas = localidades.filter((l: any) => {
        if (!buscarLocalidad) return true

        const q = normalizar(buscarLocalidad)

        return normalizar(l.nombre_provincia).includes(q) || normalizar(l.nombre_sede).includes(q)
    })

    const sedeHome = localidadesFiltradas.find(l => Number(l.id_sede) === 500)

    const sedesNoHome = localidadesFiltradas.filter(l => Number(l.id_sede) !== 500)

    const localidadesAgrupadas: {
        nombre_provincia: string,
        items: any[]
    }[] = Object.values(
        sedesNoHome.reduce((acc: Record<string,
            { nombre_provincia: string, items: any[] }>, l: any) => {

            const key = String(l.id_provincia)

            if (!acc[key]) {
                acc[key] = {
                    nombre_provincia: l.nombre_provincia,
                    items: [],
                }
            }
            acc[key].items.push(l)
            return acc
        }, {})
    )

    if (sedeHome) {
        localidadesAgrupadas.push({
            nombre_provincia: 'Sedes Home',
            items: [sedeHome]
        })
    }
    useEffect(() => {
        if (phoneRef.current) {
            itiRef.current = intlTelInput(phoneRef.current, {
                initialCountry: 'ar',
                separateDialCode: true,
                loadUtils: () => import('intl-tel-input/utils'),
            })
            const updateDialCode = () => {
                const dialCode = itiRef.current?.getSelectedCountry()?.dialCode ?? ''
                setDdiPais(dialCode)
            }
            updateDialCode()
            const elemento = phoneRef.current
            elemento.addEventListener('countrychange', updateDialCode)
            elemento.addEventListener('input', updateDialCode)

            return () => {
                itiRef.current?.destroy()
                elemento.removeEventListener('countrychange', updateDialCode)
                elemento.removeEventListener('input', updateDialCode)
            }
        }
    }, [])

    /* Cargar reCAPTCHA cuando el form entra en viewport */
    useEffect(() => {
        const form = formRef.current
        if (!form) return
        const observer = new IntersectionObserver(
            entries => {
                if (entries.some(entry => entry.isIntersecting)) {
                    cargarRecaptcha().catch(console.error)
                    observer.disconnect()
                }
            },
            { rootMargin: '800px 0px' }
        )
        observer.observe(form)
        return () => observer.disconnect()
    }, [])

    /* Cerrar el buscador de localidad al hacer click afuera */
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (localidadRef.current && !localidadRef.current.contains(e.target as Node)) {
                setLocalidadAbierta(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    useEffect(() => {
        if (sedeSeleccionada) {
            setBuscarLocalidad(
                Number(sedeSeleccionada.id_sede) === 500
                    ? 'Home'
                    : sedeSeleccionada.nombre_sede
            )
        }
    }, [
        sedeSeleccionada?.id_sede,
        sedeSeleccionada?.nombre_sede,
    ])

    const localidadHabilitada = !!codcar && !!modalidad
    const labelModalidad = carreraSeleccionadaLocal?.modalidad.length > 1 ? 'Presencial y Virtual' : carreraSeleccionadaLocal?.modalidad.includes(7) ? 'Virtual' : 'Presencial'

    return (
        <form ref={setFormRef} role="form" id="pedidoinfo" method="post" encType="multipart/form-data" action="/postulantes_mail1.php"
            autoComplete="on"
            onSubmit={handleSubmit(
                async () => {
                    setEnviando(true)
                    let recaptchaToken = '';
                    try {
                        const grecaptcha = await cargarRecaptcha()
                        recaptchaToken = await new Promise((resolve, reject) => {
                            grecaptcha.ready(function () {
                                grecaptcha
                                    .execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
                                    .then(resolve)
                                    .catch(reject);
                            });
                        });
                    } catch (e) {
                        console.error('Error obteniendo token reCAPTCHA:', e)
                    }
                    (document.getElementById('g-recaptcha-response') as HTMLInputElement).value = recaptchaToken

                    const formEl = document.getElementById('pedidoinfo') as HTMLFormElement
                    const formData = new FormData(formEl)

                    await fetch('/postulantes_mail1.php', { method: 'POST', body: formData })

                        ; (window as any).dataLayer?.push({ event: 'form_enviado_pedidoinfo', form_id: 'pedidoinfo' })
                    onSubPage ? clarityEvent('formulario-enviado-especifica') : clarityEvent('formulario-enviado-general')
                    clarityEvent('formulario-enviado')
                    clarityUpgrade('conversion-formulario')

                    const resumen = new URLSearchParams({
                        nombre: nombre ?? '',
                        email: email ?? '',
                        carrera: carreraSeleccionadaLocal?.nombre ?? '',
                        modo: modalidad ?? '',
                        sede: Number(sedeSeleccionada?.id_sede) === 500
                            ? 'Modalidad Home (tu sede no es cercana)'
                            : sedeSeleccionada?.nombre_sede ?? '',
                    })
                    window.location.assign(`${BASE_URL}gracias?${resumen.toString()}`)
                },
                (_errors) => {
                    clarityEvent('formulario-invalido')
                })}
            className={`bg-white rounded-lg shadow-2xl ${onSubPage ? 'px-6 py-4' : 'p-6'}`}>
            <input type="hidden" value="4" name="id_origen" />
            <input type="hidden" name="cbx_sede" value={idSedeReal} />
            <input type="hidden" name="sector" value={sectorCarrera} />
            <input type="hidden" value="postulantes" name="tabla" />
            <input type="hidden" id="agent" name="agent" value={parametros.userAgent || ''} />
            <input type="hidden" name="utm_source" value={parametros.utm_source || ''} />
            <input type="hidden" name="utm_medium" value={parametros.utm_medium || ''} />
            <input type="hidden" name="utm_term" value={parametros.utm_term || ''} />
            <input type="hidden" name="utm_content" value={parametros.utm_content || ''} />
            <input type="hidden" name="utm_campaign" value={parametros.utm_campaign || ''} />
            <input type="hidden" name="idconversion" value={parametros.idconversion || ''} />
            <input type="hidden" name="campaignid" value={parametros.campaignid || ''} />
            <input type="hidden" name="tkp" value={`${BASE_URL}gracias`} />
            <input type="hidden" name="fkp" value={`${BASE_URL}gracias?id=404`} />

            {!onSubPage && (
                <div className="flex justify-center">
                    <p className="text-xl my-2 text-black degrade-azul font-bold">
                        Consulta sobre nuestras carreras y sus aranceles
                    </p>
                </div>
            )}

            {/* 1 · CARRERA */}
            <div className="border-b border-black/10 pb-4 mb-4">
                <p className="text-xs font-bold text-(--azul-ucasal) tracking-wide uppercase mb-2">Elegí tu carrera</p>
                {carreraBloqueada ? (
                    <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-white p-3 text-black">
                        <span className="text-base text-black flex flex-col max-w-[45%]">
                            {carreraSeleccionadaLocal?.nombre}
                            <span className="text-xs text-gray-600">{carreraSeleccionadaLocal?.duracion}</span>
                        </span>
                        <div className="flex flex-row items-center gap-2 md:gap-6">
                            <div className={`items-center h-full justify-end flex text-xs border-gray-200 border rounded text-white py-1 px-2 ${carreraSeleccionadaLocal?.modalidad.length > 1 ? 'bg-gradient-to-r from-15% from-(--rojo-ucasal) to-(--azul-ucasal) to-70%' : carreraSeleccionadaLocal?.modalidad.includes(7) ? 'bg-(--azul-ucasal)' : 'bg-(--rojo-ucasal)'}`}>{labelModalidad}</div>
                            <div className='h-6 border border-black'></div>
                            <button
                                type="button"
                                onClick={() => {
                                    setValue('cbx_carrera', '')
                                    seleccionarCodcar('')
                                    setBuscarLocalidad('')
                                    setLocalidadAbierta(false)
                                    setCarreraBloqueada(false)
                                }}
                                className="rounded border border-gray-300 bg-white px-3 py-1 text-sm text-black cursor-pointer border"
                            >
                                Cambiar
                            </button>
                        </div>
                    </div>
                ) : (
                    <fieldset className="flex max-h-50 flex-col gap-2 overflow-y-auto rounded-lg border border-gray-300 bg-white p-2 text-black">
                        {dataCarreras.map((carrera) => {
                            const value = carrera.codcar.toString()
                            const labelModalidad = carrera.modalidad.length > 1 ? 'Presencial y Virtual' : carrera.modalidad.includes(7) ? 'Virtual' : 'Presencial'
                            return (
                                <div key={carrera.codcar} className='border-b border-gray-200 last:border-b-0 w-full'>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setValue('cbx_carrera', value, {
                                                shouldValidate: true,
                                            })
                                            seleccionarCodcar(value)
                                            setCarreraBloqueada(true)
                                        }}
                                        className="text-left w-full p-2 cursor-pointer flex flex-row items-center justify-between hover:bg-black/10"
                                    >
                                        <span className="text-base text-black flex flex-col max-w-[45%]">
                                            {carrera.nombre}
                                            <span className="text-xs text-gray-600">{carrera.duracion}</span>
                                        </span>
                                        <div className={`items-center h-full justify-end flex text-xs border-gray-200 border rounded text-white py-1 px-2 ${carrera.modalidad.length > 1 ? 'bg-gradient-to-r from-15% from-(--rojo-ucasal) to-(--azul-ucasal) to-70%' : carrera.modalidad.includes(7) ? 'bg-(--azul-ucasal)' : 'bg-(--rojo-ucasal)'}`}>{labelModalidad}</div>
                                    </button>
                                </div>
                            )
                        })}
                    </fieldset>
                )}
                {!codcarInicial && <input type="hidden" name="cbx_carrera" value={codcar} />}
            </div>

            {/* 2 · CÓMO SE CURSA */}
            <div className={`border-b border-black/10 pb-4 mb-4 transition-opacity ${codcar ? '' : 'opacity-50'}`}>
                <p className="text-xs font-bold text-(--azul-ucasal) tracking-wide uppercase mb-2">Elegí tu modalidad</p>
                <div className="flex flex-row w-full gap-3">
                    {(codcar ? modos : [{ modalidad: 1 }, { modalidad: 7 }]).map((m: any) => {
                        const esOnline = m.modalidad === 7
                        const seleccionado = !!codcar && String(modalidad) === String(m.modalidad)
                        return (
                            <button key={m.modalidad} type="button"
                                disabled={!codcar}
                                onClick={() => {
                                    setValue('cbx_modo', String(m.modalidad), { shouldValidate: true })
                                    seleccionarModalidad(String(m.modalidad))
                                }}
                                className={`flex flex-row items-start gap-2 rounded-lg border p-3 text-left w-full transition-colors ${!codcar ? 'cursor-not-allowed bg-gray-100 border-gray-200' : seleccionado && esOnline ? 'border-(--azul-ucasal) bg-blue-50 cursor-pointer' : seleccionado && !esOnline ? 'border-(--rojo-ucasal) bg-red-50 cursor-pointer' : 'border-gray-300 bg-white hover:bg-gray-50 cursor-pointer'}`}
                            >
                                <span className={`flex items-center justify-center w-9 h-9 rounded-md ${seleccionado && esOnline ? 'bg-(--azul-ucasal) text-white' : seleccionado && !esOnline ? 'bg-(--rojo-ucasal) text-white' : 'bg-gray-100 text-gray-500'}`}>
                                    {esOnline ? <IconoOnline /> : <IconoPresencial />}
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-black">{esOnline ? 'Online' : 'Presencial'}</span>
                                    <span className="text-xs text-gray-500">{esOnline ? 'Desde donde estés' : 'Cursás en una sede'}</span>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* 3 · DESDE QUÉ LOCALIDAD */}
            <div className={`border-b border-black/10 pb-4 mb-4 transition-opacity ${localidadHabilitada ? '' : 'opacity-50'}`}>
                <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-bold text-(--azul-ucasal) tracking-wide uppercase">Elegí tu localidad</p>
                    {localidadHabilitada && (
                        <span className="text-xs text-gray-500">
                            {apiCargando ? 'Cargando...' : `${localidades.length} localidades`}
                        </span>
                    )}
                </div>
                <div ref={localidadRef} className="relative">
                    <div className={`flex items-center gap-2 rounded-lg border p-2 ${claseBorde(localidadHabilitada, !!idSede)} ${localidadHabilitada ? 'bg-white' : 'bg-gray-100 cursor-not-allowed'}`}>
                        <IconoBuscar />
                        <input
                            type="text"
                            disabled={!localidadHabilitada}
                            placeholder="Escribí tu ciudad, pueblo o provincia: Monteros, Orán, Jujuy..."
                            className="w-full bg-transparent text-xs sm:text-sm text-gray-900 focus:outline-none disabled:cursor-not-allowed placeholder:text-gray-400"
                            value={buscarLocalidad}
                            onFocus={() => setLocalidadAbierta(true)}
                            onChange={e => {
                                setBuscarLocalidad(e.target.value)
                                setLocalidadAbierta(true)
                                if (idProvincia) seleccionarProvincia('')
                            }}
                        />
                    </div>
                    {localidadAbierta && localidadHabilitada && (
                        <div className="absolute z-20 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-300 bg-white shadow-lg">
                            {localidadesAgrupadas.length === 0 && (
                                <p className="p-3 text-xs text-gray-500">No encontramos coincidencias.</p>
                            )}
                            {localidadesAgrupadas.map(grupo => (
                                <div key={grupo.nombre_provincia}>
                                    <p className="sticky top-0 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-500">{grupo.nombre_provincia}</p>
                                    {grupo.items.map((item: any) => (
                                        <button
                                            key={`${item.id_provincia}-${item.id_sede}`}
                                            type="button"
                                            onClick={() => {
                                                seleccionarLocalidad(String(item.id_provincia), item)
                                                setBuscarLocalidad(
                                                    Number(item.id_sede) === 500
                                                        ? 'Modalidad Home (tu sede no es cercana)'
                                                        : item.nombre_sede
                                                )
                                                setLocalidadAbierta(false)
                                            }}
                                            className="flex w-full items-center justify-between px-3 py-2 text-left text-sm text-black hover:bg-black/5 cursor-pointer"
                                        >
                                            <span className="font-bold">
                                                {Number(item.id_sede) === 500
                                                    ? 'Modalidad Home (tu sede no es cercana)'
                                                    : item.nombre_sede}
                                            </span>
                                            <span
                                                className={`text-xs font-semibold px-2 py-0.5 rounded ${Number(item.id_sede) === 500
                                                    ? 'bg-rose-100 text-rose-600'
                                                    : 'bg-emerald-100 text-emerald-700'
                                                    }`}
                                            >
                                                {Number(item.id_sede) === 500 ? 'Home' : 'Sede'}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* 4 · CÓMO TE CONTACTAMOS */}
            <div className={`transition-opacity ${carreraCompleta ? '' : 'opacity-50'}`}>
                <p className="text-xs font-bold text-(--azul-ucasal) tracking-wide uppercase mb-2">Cómo te contactamos</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className={`rounded-lg border ${!carreraCompleta ? 'bg-gray-100 border-gray-200 pointer-events-none' : `bg-white ${claseBorde(carreraCompleta, !!nombre && !errors.nombre)}`}`}>
                        <input type="text" {...register("nombre")} id="nombre"
                            className="block w-full p-2 text-sm text-gray-900 bg-transparent rounded-md appearance-none focus:outline-none disabled:cursor-not-allowed placeholder:text-gray-400"
                            placeholder="Nombre completo"
                            disabled={!carreraCompleta}
                            autoComplete="name"
                            aria-invalid={!!errors.nombre}
                            aria-describedby={errors.nombre ? 'error-nombre' : undefined}
                        />
                    </div>
                    <div className={`rounded-lg border ${!carreraCompleta ? 'bg-gray-100 border-gray-200 pointer-events-none' : `bg-white ${claseBorde(carreraCompleta, !!email && !errors.email)}`}`}>
                        <input type="email" id="email"
                            className="block w-full p-2 text-sm text-gray-900 bg-transparent rounded-md appearance-none focus:outline-none disabled:cursor-not-allowed placeholder:text-gray-400"
                            placeholder="Email"
                            disabled={!carreraCompleta}
                            autoComplete="email"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'error-email' : undefined}
                            {...register('email')} />
                    </div>
                </div>
                {(errors.nombre || errors.email) && (
                    <div className="flex flex-col gap-0.5 mt-1">
                        {errors.nombre && <p id="error-nombre" className="text-red-500 text-xs" role="alert">{errors.nombre.message}</p>}
                        {errors.email && <p id="error-email" className="text-red-500 text-xs" role="alert">{errors.email.message}</p>}
                    </div>
                )}

                <div className={`flex flex-row gap-2 mt-3 ${!carreraCompleta ? 'pointer-events-none opacity-75' : ''}`}>
                    <div className={`rounded-lg border shrink-0 ${!carreraCompleta ? 'bg-gray-100 border-gray-200' : 'bg-white border-gray-300'}`}>
                        <input name="tipo_tel" type="hidden" value="cel" />
                        <input type="hidden" name="ddi_pais" value={ddiPais} />
                        <input type="tel" ref={phoneRef} id="phone" autoComplete="off"
                            className="p-2 text-sm text-gray-900 bg-transparent rounded-md appearance-none focus:outline-none caret-transparent disabled:cursor-not-allowed"
                            disabled={!carreraCompleta}
                            onKeyDown={e => e.preventDefault()}
                            onPaste={e => e.preventDefault()}
                            onDrop={e => e.preventDefault()} />
                    </div>
                    <div className={`rounded-lg border w-16 ${!carreraCompleta ? 'bg-gray-100 border-gray-200' : `bg-white ${claseBorde(carreraCompleta, !!codArea && !errors.cod_area)}`}`}>
                        <input type="tel" id="cod" size={4} maxLength={4} pattern="[0-9]*" inputMode="numeric"
                            className="block w-full p-2 text-sm text-gray-900 bg-transparent rounded-md appearance-none focus:outline-none disabled:cursor-not-allowed placeholder:text-gray-400"
                            placeholder="Cód. área"
                            disabled={!carreraCompleta}
                            autoComplete="tel-area-code"
                            aria-invalid={!!errors.cod_area}
                            aria-describedby={errors.cod_area ? 'error-cod_area' : undefined}
                            {...register('cod_area')} />
                    </div>
                    <span className="text-[0.8rem] text-gray-700 px-1 border border-gray-500 flex justify-center items-center my-auto w-fit h-fit rounded shrink-0">15</span>
                    <div className={`rounded-lg border flex-1 ${!carreraCompleta ? 'bg-gray-100 border-gray-200' : `bg-white ${claseBorde(carreraCompleta, !!tel && !errors.tel)}`}`}>
                        <input type="tel" id="tel" size={8} maxLength={8} inputMode="numeric" pattern="[0-9]+"
                            className="block w-full p-2 text-sm text-gray-900 bg-transparent rounded-md appearance-none focus:outline-none disabled:cursor-not-allowed placeholder:text-gray-400"
                            placeholder="Número sin 0 ni 15"
                            disabled={!carreraCompleta}
                            autoComplete="tel-local"
                            aria-invalid={!!errors.tel}
                            aria-describedby={errors.tel ? 'error-tel' : undefined}
                            {...register('tel')} />
                    </div>
                </div>
                {(errors.cod_area || errors.tel) && (
                    <div className="flex flex-col gap-0.5 mt-1">
                        {errors.cod_area && <p id="error-cod_area" className="text-red-500 text-xs" role="alert">{errors.cod_area.message}</p>}
                        {errors.tel && <p id="error-tel" className="text-red-500 text-xs" role="alert">{errors.tel.message}</p>}
                    </div>
                )}
            </div>

            {todosCompletos && sectorCarrera && (
                <Aranceles
                    codcar={codcar}
                    modalidad={modalidad}
                    idSede={idSedeReal}
                    sector={sectorCarrera}
                    enabled={todosCompletos && !!sectorCarrera && !!idSedeReal}
                />
            )}
            <p className="text-[10px] md:text-xs mt-3 inline-block text-gray-600">
                Al enviar aceptás los <button onClick={() => setModalOpen(true)} className="inline-block text-blue-500 cursor-pointer" type="button">T&eacute;rminos y Condiciones de Privacidad</button> y autorizás a UCASAL a contactarte con información académica.
            </p>
            {
                modalOpen && (
                    <div className="fixed inset-0 z-50 overflow-hidden">
                        <div onClick={() => setModalOpen(false)} className="fixed inset-0 bg-black/50 transition-opacity" role="presentation"></div>

                        <div className="fixed inset-0 flex items-center justify-center p-4">
                            <div
                                className="relative bg-white rounded-xl shadow-2xl w-full max-w-5xl h-full max-h-[70vh] flex flex-col animate-scale-up">

                                <div
                                    className="flex items-center justify-between p-6 border-b border-gray-200 bg-linear-to-r from-blue-50 to-indigo-50">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                            </path>
                                        </svg>
                                        <h2 className="text-2xl font-semibold text-gray-900">
                                            T&eacute;rminos y Condiciones de Privacidad
                                        </h2>
                                    </div>
                                    <button onClick={() => setModalOpen(false)}
                                        className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100" type="button">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>

                                <div className="flex-1 p-3 md:p-6 overflow-hidden">
                                    <div className="bg-gray-50 rounded-lg p-2 md:p-4 h-full relative">
                                        <iframe
                                            src="https://www.ucasal.edu.ar/wp-content/uploads/2023/10/Politicas-de-Privacidad-UCASAL-1.pdf#view=FitH"
                                            className="w-full h-full rounded-lg border border-gray-300 shadow-inner"
                                            title="Términos y Condiciones de Privacidad" frameBorder={0}></iframe>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 p-6 bg-gray-50">
                                    <div className="flex justify-center">
                                        <button onClick={() => setModalOpen(false)}
                                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg" type="button">
                                            Cerrar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" />
            <input type="hidden" id="fecha_formulario" name="fecha_formulario" />
            <div className="flex justify-center mt-4">
                <button id="formButton" type="submit"
                    disabled={!todosCompletos}
                    style={enviando ? { display: 'none' } : undefined}
                    className={`w-full font-bold text-sm px-5 py-3 text-center text-white rounded-lg transition-colors duration-200 ease-in-out ${todosCompletos ? 'boton-form-glow cursor-pointer hover:opacity-90' : 'cursor-not-allowed bg-gray-300'}`}
                >
                    <span>Quiero que me contacten</span>
                </button>
                <div id="spinnerContainer" className={enviando ? '' : 'hidden'} role="status">
                    <svg className="w-8 h-8 text-gray-200 animate-spin fill-[#B11111]" viewBox="0 0 100 101" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor" />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </form>
    )
}
