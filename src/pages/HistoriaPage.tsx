import { useEffect, useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import usePageTitle from '../components/usePageTitle'

// Contenido de Mi historia. Todo lo cuenta Gustavo: aquí solo se ordena.
type Capitulo = {
  anio: string
  etiqueta: string
  titulo: string
  parrafos: string[]
  frase: string
  media: ReactNode
}

const banderas = [
  { src: '/historia/venezuela.webp', alt: 'Bandera de Venezuela', label: 'VENEZUELA' },
  { src: '/historia/chile.webp', alt: 'Bandera de Chile', label: 'CHILE' },
  { src: '/historia/espana.webp', alt: 'Bandera de España', label: 'ESPAÑA' },
]

const CAPITULOS: Capitulo[] = [
  {
    anio: '1990',
    etiqueta: 'Cumaná, Venezuela',
    titulo: 'Los videojuegos',
    parrafos: [
      'Nací en Cumaná, Venezuela, en 1990. Mi afición empezó con la NES: no me bastaba con jugar, quería saber cómo funcionaba.',
      'Los juegos que más recuerdo son de la PlayStation. Crash Bandicoot (el 1, el 2, el 3 y Crash Team Racing) lo jugaba con mi papá y mi hermano, y en Bloody Roar se apuntaba hasta mi mamá. Y Final Fantasy VIII me marcó: sigue siendo uno de mis RPG por turnos favoritos.',
      'Años después pasé al PC, y ahí empecé a pensar que me gustaría hacer mis propios juegos.',
    ],
    frase: 'No me bastaba con jugar: quería saber cómo funcionaba.',
    media: (
      <figure className="story-photo tall">
        <img src="/historia/mando.webp" alt="Mando de una NES sostenido en la mano" loading="lazy" decoding="async" />
        <figcaption>MANDO DE NES</figcaption>
      </figure>
    ),
  },
  {
    anio: '2019',
    etiqueta: 'Santiago de Chile',
    titulo: 'Venezuela y Chile',
    parrafos: [
      'Por la crisis de Venezuela tuve que irme del país y emigré a Chile. Viví seis años en Santiago, de 2019 a 2025.',
      'Trabajé en hostelería y repartí pedidos. El invierno era lo peor: un frío seco e intenso y una lluvia que te helaba los dedos. Pasé meses con la punta de los dedos hipersensible.',
      'También fui asistente administrativo en una empresa que lo pasaba todo del papel al Excel. No estaba en mi mano cambiar cómo se trabajaba, y cualquier error acababa en un sermón. Si se perdía una nota de venta, había que buscarla en cajones con torres y torres de papel. Ahí vi de cerca lo que cuesta trabajar sin un buen sistema.',
    ],
    frase: 'Si se perdía una nota de venta, había que buscarla entre torres de papel.',
    media: (
      <div className="story-trio">
        {banderas.map((b) => (
          <figure key={b.src} className="story-photo">
            <img src={b.src} alt={b.alt} loading="lazy" decoding="async" />
            <figcaption>{b.label}</figcaption>
          </figure>
        ))}
      </div>
    ),
  },
  {
    anio: '2025',
    etiqueta: 'Valencia, España',
    titulo: 'Mi familia',
    parrafos: [
      'No todo fue duro. En Chile me casé con mi esposa, y en casa somos cuatro: ella, yo y nuestros perros, Sora y Titán.',
      'Juntos decidimos venir a España. Queríamos escapar de las grandes ciudades: Santiago tiene mucho ruido y mucho ajetreo, y al final aturde. Elegimos Valencia por su ritmo más tranquilo, aunque con tanto turismo hay épocas en que no lo parece.',
    ],
    frase: 'Queríamos escapar del ruido de las grandes ciudades.',
    media: (
      <figure className="story-photo tall">
        <img src="/historia/boda.webp" alt="Gustavo y su esposa el día de su boda" loading="lazy" decoding="async" />
        <figcaption>NUESTRA BODA · CHILE</figcaption>
      </figure>
    ),
  },
  {
    anio: 'Hoy',
    etiqueta: 'Valencia',
    titulo: 'Desarrollador en formación',
    parrafos: [
      'Estudio segundo de DAM y trabajo en hostelería mientras estudio. En 2026 hice las prácticas en JOCARSA, con Python, PHP e IA en local.',
      'Siempre me ha gustado la tecnología, aunque la de punta nunca ha estado a mi alcance porque es cara. Me gusta ver cómo sus avances mejoran la vida de la gente. Y, aunque suene a tópico, los hackers de las películas, misteriosos y con su sudadera negra, también tuvieron algo que ver.',
      'Mi meta es hacer mi propio juego, algo en la línea de Hollow Knight o Castlevania: Symphony of the Night. Mientras tanto, cada proyecto me acerca un poco más.',
    ],
    frase: 'Mi meta es hacer mi propio juego.',
    media: (
      <figure className="story-photo tall">
        <img src="/historia/perfil.webp" alt="Gustavo programando en su portátil" loading="lazy" decoding="async" />
        <figcaption>VALENCIA · 2026</figcaption>
      </figure>
    ),
  },
]

// Línea roja que se va llenando según se baja por la historia (variable CSS --progreso, de 0 a 1)
function useProgresoScroll() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let pendiente = 0
    const actualizar = () => {
      cancelAnimationFrame(pendiente)
      pendiente = requestAnimationFrame(() => {
        // La línea llega al punto que está a tres cuartos de la pantalla
        const caja = el.getBoundingClientRect()
        const referencia = window.innerHeight * 0.75
        let avance = (referencia - caja.top) / Math.max(caja.height, 1)
        // Al llegar al final de la página, la línea siempre se completa
        const alFinal =
          window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
        if (alFinal) avance = 1
        el.style.setProperty('--progreso', String(Math.min(1, Math.max(0, avance))))
      })
    }
    actualizar()
    window.addEventListener('scroll', actualizar, { passive: true })
    window.addEventListener('resize', actualizar)
    return () => {
      window.removeEventListener('scroll', actualizar)
      window.removeEventListener('resize', actualizar)
      cancelAnimationFrame(pendiente)
    }
  }, [])
  return ref
}

export default function HistoriaPage() {
  usePageTitle('Mi historia')
  const pista = useProgresoScroll()

  return (
    <section className="wide-section story">
      <SectionHeading number="04" label="MI HISTORIA" title="De Cumaná a Valencia." />

      <p className="section-intro">
        La versión larga: cuatro etapas, tres países y lo que me trajo a la programación.
      </p>

      <div className="story-track" ref={pista}>
        <span className="story-line" aria-hidden="true" />

        {CAPITULOS.map((capitulo, i) => (
          <article key={capitulo.anio} className={`story-chapter${i % 2 ? ' reverse' : ''}`}>
            <span className="story-year" aria-hidden="true">{capitulo.anio}</span>
            <span className="story-node" aria-hidden="true" />

            <Reveal className="story-text">
              <span className="story-kicker">
                {String(i + 1).padStart(2, '0')} / {capitulo.etiqueta.toUpperCase()}
              </span>
              <h2>{capitulo.titulo}</h2>
              {capitulo.parrafos.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <blockquote className="story-quote">
                <p>{capitulo.frase}</p>
              </blockquote>
            </Reveal>

            <Reveal className="story-media" delay={120}>
              {capitulo.media}
            </Reveal>
          </article>
        ))}
      </div>

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
