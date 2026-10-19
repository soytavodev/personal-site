import SectionHeading from '../components/SectionHeading'
import usePageTitle from '../components/usePageTitle'

export default function ContactPage() {
  usePageTitle('Contacto')

  return (
    <section className="inner-section">
      <SectionHeading number="05" label="CONTACTO" title="Contacto." />

      <p className="section-intro">
        Puedes escribirme por correo o encontrarme en GitHub y LinkedIn.
      </p>

      <div className="contact-links">
        <a href="https://github.com/soytavodev" target="_blank" rel="noreferrer">
          <span>GitHub</span>
          <span aria-hidden="true">↗</span>
        </a>
        <a
          href="https://www.linkedin.com/in/gustavo-delnardo-2b2990397/"
          target="_blank"
          rel="noreferrer"
        >
          <span>LinkedIn</span>
          <span aria-hidden="true">↗</span>
        </a>
        <a href="mailto:gustavoedv35@gmail.com">
          <span>Correo electrónico</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
