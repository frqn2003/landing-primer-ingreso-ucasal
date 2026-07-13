import { useState, type FormEvent } from 'react'
import { z } from 'zod'

const schema = z.object({
  nombre: z.string().trim().min(2, 'Ingresá tu nombre.'),
  email: z.string().trim().email('Ingresá un email válido.'),
  telefono: z.string().trim().min(7, 'Ingresá un teléfono válido.'),
  carrera: z.string().min(1, 'Elegí una carrera.'),
  modalidad: z.string().min(1, 'Elegí una modalidad.'),
})

type Career = { slug: string; nombre: string }
type Props = { careers: Career[] }

type Status = { type: 'idle' | 'loading' | 'success' | 'error'; message: string }

export default function Form({ careers }: Props) {
  const [status, setStatus] = useState<Status>({ type: 'idle', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const values = Object.fromEntries(form.entries())
    const result = schema.safeParse(values)

    if (!result.success) {
      setErrors(Object.fromEntries(result.error.issues.map((issue) => [String(issue.path[0]), issue.message])))
      return
    }

    setErrors({})
    setStatus({ type: 'loading', message: 'Enviando tus datos...' })

    try {
      const endpoint = import.meta.env.PUBLIC_LEAD_ENDPOINT ?? '/postulantes_mail1.php'
      const response = await fetch(endpoint, { method: 'POST', body: form })
      if (!response.ok) throw new Error('lead request failed')
      setStatus({ type: 'success', message: '¡Listo! Recibimos tu consulta y pronto nos vamos a comunicar.' })
      event.currentTarget.reset()
      window.location.assign(`${import.meta.env.BASE_URL}gracias`)
    } catch {
      setStatus({ type: 'error', message: 'No pudimos enviar el formulario. Revisá tu conexión e intentá nuevamente.' })
    }
  }

  return <section id="contacto" className="bg-(--azul-dark-ucasal) py-20 text-white" aria-labelledby="contact-title">
    <div className="contenedor mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">Asesoramiento</p><h2 id="contact-title" className="mt-3 text-3xl font-black sm:text-4xl">¿Querés que te ayudemos a elegir?</h2><p className="mt-5 text-lg leading-8 text-white/75">Dejanos tus datos y recibí información sobre carreras, modalidades e inscripción.</p></div>
      <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl sm:p-8" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          {(['nombre', 'email', 'telefono'] as const).map((field) => <label className="grid gap-2 text-sm font-semibold sm:last:col-span-2" htmlFor={field}>{field === 'nombre' ? 'Nombre y apellido' : field === 'email' ? 'Email' : 'Teléfono'}<input id={field} name={field} type={field === 'email' ? 'email' : 'text'} className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-(--azul-ucasal) focus:ring-2 focus:ring-(--azul-ucasal)/20" />{errors[field] && <span className="font-normal text-red-600">{errors[field]}</span>}</label>)}
          <label className="grid gap-2 text-sm font-semibold" htmlFor="carrera">Carrera<select id="carrera" name="carrera" defaultValue="" className="rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-(--azul-ucasal)"><option value="" disabled>Elegí una carrera</option>{careers.map((career) => <option value={career.slug}>{career.nombre}</option>)}</select>{errors.carrera && <span className="font-normal text-red-600">{errors.carrera}</span>}</label>
          <label className="grid gap-2 text-sm font-semibold" htmlFor="modalidad">Modalidad<select id="modalidad" name="modalidad" defaultValue="" className="rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-(--azul-ucasal)"><option value="" disabled>Elegí una modalidad</option><option value="presencial">Presencial</option><option value="distancia">A distancia</option><option value="hibrida">Híbrida</option></select>{errors.modalidad && <span className="font-normal text-red-600">{errors.modalidad}</span>}</label>
        </div>
        {status.message && <p role="status" className={`mt-5 rounded-xl p-4 text-sm ${status.type === 'error' ? 'bg-red-50 text-red-700' : status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-slate-100 text-slate-700'}`}>{status.message}</p>}
        <button type="submit" disabled={status.type === 'loading'} className="mt-6 w-full rounded-xl bg-(--rojo-ucasal) px-5 py-3 font-bold text-white transition hover:bg-(--rojo-dark-ucasal) disabled:cursor-wait disabled:opacity-60">{status.type === 'loading' ? 'Enviando...' : 'Quiero recibir información'}</button>
      </form>
    </div>
  </section>
}
