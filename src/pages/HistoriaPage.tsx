import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import usePageTitle from '../components/usePageTitle'

const trio = [
  { src: '/historia/venezuela.webp', alt: 'Bandera de Venezuela', label: 'VENEZUELA' },
  { src: '/historia/chile.webp', alt: 'Bandera de Chile', label: 'CHILE' },
  { src: '/historia/espana.webp', alt: 'Bandera de España', label: 'ESPAÑA' },
]

export default function HistoriaPage() {
  usePageTitle('Mi historia')

  return (
    <section className="wide-section story">
      <SectionHeading number="04" label="MI HISTORIA" title="De Cumaná a Valencia." />

      <article className="story-chapter">
        <div className="story-text">
          <span className="story-kicker">01 / LOS VIDEOJUEGOS</span>
          <p>
            Nací en Cumaná, Venezuela, en 1990. Crecí jugando a la NES y no me
            bastaba con jugar: quería saber cómo funcionaba. Años después pasé
            al PC, y ahí empecé a pensar que me gustaría hacer mis propios
            juegos.
          </p>
        </div>
        <figure className="story-photo tall">
          <img
            src="/historia/mando.webp"
            alt="Mando de una NES sostenido en la mano"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </article>

      <article className="story-chapter reverse">
        <div className="story-text">
          <span className="story-kicker">02 / VENEZUELA Y CHILE</span>
          <p>
            Por la crisis de Venezuela tuve que irme del país y emigré a Chile.
            Viví allí seis años, de 2019 a 2025. Trabajé en hostelería, repartí
            pedidos (muchas veces bajo la lluvia) y fui asistente administrativo
            en empresas que lo llevaban todo en papel y Excel. Fueron años duros,
            y me enseñaron a no rendirme.
          </p>
        </div>
        <div className="story-trio">
          {trio.map((item) => (
            <figure key={item.src} className="story-photo">
              <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </article>

      <article className="story-chapter">
        <div className="story-text">
          <span className="story-kicker">03 / MI FAMILIA</span>
          <p>
            No todo fue duro. En Chile me casé con mi esposa y tenemos dos
            perros. Juntos decidimos mudarnos a España.
          </p>
        </div>
        <figure className="story-photo tall">
          <img
            src="/historia/boda.webp"
            alt="Gustavo y su esposa el día de su boda"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </article>

      <article className="story-chapter reverse">
        <div className="story-text">
          <span className="story-kicker">04 / HOY</span>
          <p>
            Hoy vivo en Valencia y estudio segundo de DAM. Soy desarrollador en
            formación y hago proyectos para practicar lo que aprendo. Lo que
            de niño era curiosidad por la NES ahora es lo que quiero hacer
            de trabajo.
          </p>
        </div>
        <figure className="story-photo tall">
          <img
            src="/historia/perfil.webp"
            alt="Gustavo programando en su portátil"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </article>

      <div className="story-footer">
        <Link className="button-primary" to="/portfolio">
          Ver mis proyectos <span aria-hidden="true">↗</span>
        </Link>
        <Link className="button-secondary" to="/contacto">
          Contacto <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  )
}
