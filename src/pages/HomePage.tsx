import { Link } from 'react-router-dom'
import usePageTitle from '../components/usePageTitle'
import { projects } from '../data/projects'

export default function HomePage() {
  usePageTitle()

  return (
    <section className="home-section">
      <div className="eyebrow">
        <span className="eyebrow-line" />
        WEB PERSONAL Y PORTFOLIO
      </div>

      <div className="hero-copy">
        <p className="hero-greeting">Hola, soy Gustavo Delnardo.</p>

        <h1>
          Desarrollo software.
          <br />
          <span>Construyo mi camino.</span>
        </h1>

        <p className="hero-description">
          Estudio segundo de Desarrollo de Aplicaciones Multiplataforma en
          Valencia. Aquí enseño los proyectos que he hecho y cuento un poco
          quién soy.
        </p>

        <div className="hero-actions">
          <Link className="button-primary" to="/portfolio">
            Ver portfolio <span aria-hidden="true">↗</span>
          </Link>
          <a
            className="button-secondary"
            href="https://github.com/soytavodev"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button-secondary"
            href="https://www.linkedin.com/in/gustavo-delnardo-2b2990397/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="specialties">
        <div className="section-heading">
          <span>ÁREAS DE INTERÉS</span>
          <span className="section-index">01 — 03</span>
        </div>

        <div className="specialty-grid">
          <article className="specialty-card">
            <span className="card-number">01</span>
            <div className="specialty-symbol" aria-hidden="true">⌘</div>
            <h2>Videojuegos</h2>
            <p>Juego desde pequeño. Ahora quiero aprender a hacerlos.</p>
          </article>

          <article className="specialty-card">
            <span className="card-number">02</span>
            <div className="specialty-symbol" aria-hidden="true">⌁</div>
            <h2>Ciberseguridad</h2>
            <p>Quiero saber cómo se ataca una aplicación para hacerla más segura.</p>
          </article>

          <article className="specialty-card">
            <span className="card-number">03</span>
            <div className="specialty-symbol" aria-hidden="true">◇</div>
            <h2>Diseño web</h2>
            <p>Me gustan las páginas fáciles de usar y que se vean bien.</p>
          </article>
        </div>
      </div>

      <div className="home-projects">
        <div className="section-heading">
          <span>PROYECTOS</span>
          <Link className="section-index section-link" to="/portfolio">
            VER TODOS ↗
          </Link>
        </div>

        <ul className="project-rows">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link to={`/portfolio/${project.slug}`}>
                <span className="row-number">{project.number}</span>
                <span className="row-title">{project.title}</span>
                <span className="row-summary">{project.summary}</span>
                <span className="row-arrow" aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-meta">
        <span>VALENCIA, ESPAÑA</span>
        <span>ESTUDIANTE DAM · 2.º CURSO</span>
      </div>
    </section>
  )
}
