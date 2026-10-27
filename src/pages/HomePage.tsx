import { AppWindow, Gamepad2, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Cifras from '../components/Cifras'
import HeroTerminal from '../components/HeroTerminal'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import Tecnologias from '../components/Tecnologias'
import Trayectoria from '../components/Trayectoria'
import usePageTitle from '../components/usePageTitle'
import { projects } from '../data/projects'

// Proyectos que salen en la portada (los más recientes y completos)
const PORTADA = ['analizador-ids', 'deeplens', 'chopcheck']
const proyectosPortada = PORTADA.map((slug) => projects.find((p) => p.slug === slug)).filter(
  (p) => p !== undefined,
)

export default function HomePage() {
  usePageTitle()

  return (
    <section className="home-section">
      <div className="eyebrow">
        <span className="eyebrow-line" />
        WEB PERSONAL Y PORTFOLIO
      </div>

      <div className="hero-grid">
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
          <a
            className="button-secondary"
            href="/cv-gustavo-delnardo.pdf"
            target="_blank"
            rel="noreferrer"
          >
            CV (PDF) <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <HeroTerminal />
      </div>

      <Reveal>
        <Cifras />
      </Reveal>

      <Reveal className="specialties">
        <div className="section-heading">
          <span>ÁREAS DE INTERÉS</span>
          <span className="section-index">01 — 03</span>
        </div>

        <div className="specialty-grid">
          <article className="specialty-card">
            <span className="card-number">01</span>
            <div className="specialty-symbol" aria-hidden="true"><Gamepad2 size={19} strokeWidth={1.6} /></div>
            <h2>Videojuegos</h2>
            <p>Juego desde pequeño. Ahora quiero aprender a hacerlos.</p>
          </article>

          <article className="specialty-card">
            <span className="card-number">02</span>
            <div className="specialty-symbol" aria-hidden="true"><ShieldCheck size={19} strokeWidth={1.6} /></div>
            <h2>Ciberseguridad</h2>
            <p>Quiero saber cómo se ataca una aplicación para hacerla más segura.</p>
          </article>

          <article className="specialty-card">
            <span className="card-number">03</span>
            <div className="specialty-symbol" aria-hidden="true"><AppWindow size={19} strokeWidth={1.6} /></div>
            <h2>Diseño web</h2>
            <p>Me gustan las páginas fáciles de usar y que se vean bien.</p>
          </article>
        </div>
      </Reveal>

      <Reveal className="home-projects">
        <div className="section-heading">
          <span>PROYECTOS</span>
          <Link className="section-index section-link" to="/portfolio">
            VER LOS {projects.length} ↗
          </Link>
        </div>

        <div className="home-project-grid">
          {proyectosPortada.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Reveal>

      <Trayectoria />

      <Reveal>
        <Tecnologias />
      </Reveal>

      <Reveal className="cta-panel">
        <div>
          <h2>¿Construimos algo juntos?</h2>
          <p>
            Si tienes un proyecto, una vacante o una pregunta, escríbeme. Te
            responderé lo antes posible.
          </p>
        </div>
        <Link className="button-primary" to="/contacto">
          Escríbeme <span aria-hidden="true">↗</span>
        </Link>
      </Reveal>

      <div className="hero-meta">
        <span>VALENCIA, ESPAÑA</span>
        <span>ESTUDIANTE DAM · 2.º CURSO</span>
      </div>
    </section>
  )
}
