import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import usePageTitle from '../components/usePageTitle'

export default function NotFoundPage() {
  usePageTitle('Página no encontrada')

  return (
    <section className="inner-section">
      <SectionHeading number="404" label="NO ENCONTRADO" title="Esta página no existe." />
      <p className="section-intro">
        Puede que el enlace esté mal escrito o que el contenido se haya movido.
      </p>
      <Link className="button-primary" to="/">
        Volver al inicio <span aria-hidden="true">↗</span>
      </Link>
    </section>
  )
}
