import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import usePageTitle from '../components/usePageTitle'

export default function AboutPage() {
  usePageTitle('Sobre mí')

  return (
    <section className="inner-section about-section">
      <SectionHeading
        number="03"
        label="SOBRE MÍ"
        title="Llegué a la programación por los videojuegos."
      />

      <div className="about-layout">
        <div className="about-copy">
          <p>
            Soy Gustavo Delnardo y estudio segundo de Desarrollo de
            Aplicaciones Multiplataforma. Me interesé por la programación
            gracias a los videojuegos, que me gustan desde niño.
          </p>

          <p>
            Llevo toda la vida jugando a juegos que hicieron otros. Ahora
            quiero aprender a hacer los míos, desde la idea hasta algo que
            otra persona pueda jugar.
          </p>

          <p>
            Lo que más me gusta es empezar algo desde cero y ver cómo poco a
            poco va funcionando. Por eso quiero dedicarme a los videojuegos,
            aunque también me interesan la ciberseguridad y el desarrollo web.
          </p>

          <blockquote className="about-quote">
            <p>Nunca es tarde para empezar de nuevo.</p>
          </blockquote>

          <p>
            Hoy la inteligencia artificial escribe mucho código, pero creo que
            hay que entender lo que hace cada parte. Si no lo entiendes, no
            puedes arreglarlo cuando falla.
          </p>

          <p>
            <strong>Sigo aprendiendo y haciendo proyectos.</strong> Los que
            tengo terminados están en el portfolio.
          </p>

          <Link className="button-secondary story-link" to="/historia">
            Leer mi historia completa <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <figure className="about-portrait">
          <img
            src="/images/gustavo-profile.webp"
            alt="Retrato de Gustavo Delnardo"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span>GUSTAVO DELNARDO</span>
            <span>DESARROLLADOR EN FORMACIÓN</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
