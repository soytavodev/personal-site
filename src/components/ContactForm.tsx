import { useState, type FormEvent } from 'react'

// Formulario de Formspree: los mensajes llegan al correo de Gustavo.
const FORMSPREE_URL = 'https://formspree.io/f/xrejqdop'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error(`Formspree respondió ${response.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-notice" role="status">
        <strong>Mensaje enviado.</strong> Gracias por escribirme, te responderé lo antes posible.
      </div>
    )
  }

  const sending = status === 'sending'

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">Nombre</label>
        <input id="name" name="name" type="text" autoComplete="name" required disabled={sending} />
      </div>

      <div className="form-row">
        <label htmlFor="email">Correo</label>
        <input id="email" name="email" type="email" autoComplete="email" required disabled={sending} />
      </div>

      <div className="form-row">
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" rows={5} required disabled={sending} />
      </div>

      {/* Campo trampa para bots: Formspree descarta los envíos que lo rellenan */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="form-trap" aria-hidden="true" />
      <input type="hidden" name="_subject" value="Mensaje desde la web personal" />

      {status === 'error' && (
        <p className="form-error" role="alert">
          No se ha podido enviar. Prueba otra vez o escríbeme a{' '}
          <a href="mailto:gustavoedv35@gmail.com">gustavoedv35@gmail.com</a>.
        </p>
      )}

      <button className="button-primary" type="submit" disabled={sending}>
        {sending ? 'Enviando…' : 'Enviar mensaje'} <span aria-hidden="true">↗</span>
      </button>
    </form>
  )
}
