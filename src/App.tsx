import { useState } from 'react'
import './App.css'

type Section = 'inicio' | 'proyectos' | 'sobre-mi' | 'contacto'

const navigation: { id: Section; label: string; number: string }[] = [
  { id: 'inicio', label: 'Inicio', number: '01' },
  { id: 'proyectos', label: 'Proyectos', number: '02' },
  { id: 'sobre-mi', label: 'Sobre mí', number: '03' },
  { id: 'contacto', label: 'Contacto', number: '04' },
]

function App() {
  const [activeSection, setActiveSection] = useState<Section>('inicio')

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a
          className="brand"
          href="#inicio"
          onClick={() => setActiveSection('inicio')}
          aria-label="Volver al inicio"
        >
          <span className="brand-mark">
            G<span>.</span>
          </span>

          <span className="brand-name">
            GUSTAVO<span>DEV</span>
          </span>
        </a>

        <div className="sidebar-label">NAVEGACIÓN</div>

        <nav className="navigation" aria-label="Navegación principal">
          {navigation.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-item ${
                activeSection === item.id ? 'active' : ''
              }`}
              onClick={() => setActiveSection(item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              <span className="nav-number">{item.number}</span>
              <span>{item.label}</span>

              {activeSection === item.id && (
                <span className="nav-indicator" aria-hidden="true" />
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="status-indicator">
            <span className="status-dot" />
            <span>EN FORMACIÓN</span>
          </div>

          <p className="sidebar-caption">
            Construyendo software.
            <br />
            Aprendiendo continuamente.
          </p>

          <span className="sidebar-version">PORTFOLIO · 2026</span>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div className="breadcrumb">
            <span>GUSTAVO.DEV</span>
            <span className="breadcrumb-separator">/</span>
            <span>
              {navigation.find((item) => item.id === activeSection)?.label}
            </span>
          </div>

          <div className="topbar-status">
            <span className="status-dot" />
            <span>PORTFOLIO PERSONAL</span>
          </div>
        </header>

        <div className="content">
          {activeSection === 'inicio' && (
            <HomeSection onNavigate={setActiveSection} />
          )}

          {activeSection === 'proyectos' && <ProjectsSection />}

          {activeSection === 'sobre-mi' && <AboutSection />}

          {activeSection === 'contacto' && <ContactSection />}
        </div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Gustavo Delnardo</span>

          <span>
            DISEÑADO PARA SEGUIR EVOLUCIONANDO
            <span className="footer-mark">.</span>
          </span>
        </footer>
      </main>
    </div>
  )
}

function HomeSection({
  onNavigate,
}: {
  onNavigate: (section: Section) => void
}) {
  return (
    <section className="home-section">
      <div className="eyebrow">
        <span className="eyebrow-line" />
        DESARROLLO · APRENDIZAJE · EVOLUCIÓN
      </div>

      <div className="hero-copy">
        <p className="hero-greeting">Hola, soy Gustavo Delnardo.</p>

        <h1>
          Desarrollo software.
          <br />
          <span>Construyo mi camino.</span>
        </h1>

        <p className="hero-description">
          Estudiante de segundo curso de Desarrollo de Aplicaciones
          Multiplataforma, interesado en comprender cómo se construye
          el software, desde la arquitectura hasta la experiencia final.
        </p>

        <div className="hero-actions">
          <button
            className="button-primary"
            onClick={() => onNavigate('proyectos')}
          >
            Explorar proyectos <span aria-hidden="true">↗</span>
          </button>

          <a
            className="button-secondary"
            href="https://github.com/soytavodev"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
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
            <h2>Desarrollo de videojuegos</h2>
            <p>
              Explorar la lógica, los sistemas y las experiencias interactivas.
            </p>
            <span className="card-arrow" aria-hidden="true">↗</span>
          </article>

          <article className="specialty-card">
            <span className="card-number">02</span>
            <div className="specialty-symbol" aria-hidden="true">⌁</div>
            <h2>Ciberseguridad</h2>
            <p>
              Comprender los riesgos y aprender a desarrollar software más
              seguro.
            </p>
            <span className="card-arrow" aria-hidden="true">↗</span>
          </article>

          <article className="specialty-card">
            <span className="card-number">03</span>
            <div className="specialty-symbol" aria-hidden="true">◇</div>
            <h2>Diseño web</h2>
            <p>
              Crear interfaces claras, accesibles y cuidadas en cada detalle.
            </p>
            <span className="card-arrow" aria-hidden="true">↗</span>
          </article>
        </div>
      </div>

      <div className="hero-meta">
        <span>VALENCIA, ESPAÑA</span>
        <span>ESTUDIANTE DAM · 2.º CURSO</span>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="inner-section">
      <SectionHeading
        number="02"
        label="TRABAJO Y EXPERIMENTACIÓN"
        title="Proyectos"
      />

      <p className="section-intro">
        Una selección de proyectos desarrollados durante mi formación y de
        herramientas con las que exploro distintas formas de construir software.
      </p>

      <div className="notice-panel">
        <span className="notice-symbol" aria-hidden="true">↗</span>

        <div>
          <h2>El trabajo, antes que las etiquetas.</h2>
          <p>
            Aquí documentaré cada proyecto con su propósito, tecnologías
            utilizadas, decisiones técnicas y enlaces disponibles.
          </p>
          <p className="notice-footnote">
            Los proyectos se incorporarán individualmente tras revisar su
            contenido y estado.
          </p>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="inner-section about-section">
      <SectionHeading
        number="03"
        label="SOBRE MÍ"
        title="Me gusta construir cosas que antes solo existían en mi imaginación."
      />

      <div className="about-layout">
        <div className="about-copy">
          <p>
            Soy Gustavo Delnardo, estudiante de Desarrollo de Aplicaciones
            Multiplataforma y desarrollador en formación. Mi interés por la
            programación nace de una afición que me acompaña desde la infancia:
            los videojuegos.
          </p>

          <p>
            Durante años he disfrutado de mundos, historias y experiencias
            creadas por otras personas. Ahora quiero aprender a construir los
            míos propios, desde la primera idea hasta algo que otras personas
            puedan jugar y disfrutar.
          </p>

          <p>
            Me atrae especialmente el proceso de crear desde cero, entender
            cómo encajan las piezas y transformar una idea en algo funcional.
            Por eso quiero explorar el desarrollo de videojuegos, sin dejar de
            profundizar en la ciberseguridad y el desarrollo web.
          </p>

          <p>
            También creo que saber programar va más allá de conseguir que algo
            funcione. Incluso en un mundo donde la inteligencia artificial
            facilita cada vez más la creación de software, entender lo que hay
            detrás permite tomar mejores decisiones, resolver problemas y
            construir con criterio.
          </p>

          <p>
            <strong>
              Estoy aquí para aprender, experimentar y convertir ideas en
              proyectos reales.
            </strong>{' '}
            Este portfolio es una parte de ese camino.
          </p>
        </div>

        <figure className="about-portrait">
          <img
            src="/images/gustavo-profile.webp"
            alt="Retrato en blanco y negro de Gustavo Delnardo"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span>GUSTAVO DELNARDO</span>
            <span>DESARROLLADOR EN FORMACIÓN</span>
          </figcaption>
        </figure>
      </div>

      <blockquote className="about-quote">
        <span className="quote-mark" aria-hidden="true">“</span>
        <p>
          Nunca es tarde para volver a empezar, aprender algo nuevo y construir
          un futuro diferente.
        </p>
      </blockquote>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="inner-section">
      <SectionHeading number="04" label="CONTACTO" title="Hablemos." />

      <p className="section-intro">
        Para conocer mi trabajo, seguir mi evolución o contactar conmigo,
        puedes utilizar estos enlaces.
      </p>

      <div className="contact-links">
        <a
          href="https://github.com/soytavodev"
          target="_blank"
          rel="noreferrer"
        >
          <span>GitHub</span>
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

function SectionHeading({
  number,
  label,
  title,
}: {
  number: string
  label: string
  title: string
}) {
  return (
    <div className="inner-heading">
      <span className="inner-heading-label">
        {number} / {label}
      </span>

      <h1>{title}</h1>

      <span className="inner-heading-line" />
    </div>
  )
}

export default App
