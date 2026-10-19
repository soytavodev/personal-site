import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import SectionHeading from '../components/SectionHeading'
import usePageTitle from '../components/usePageTitle'
import { projects } from '../data/projects'
import NotFoundPage from './NotFoundPage'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const [zoomed, setZoomed] = useState<{ src: string; alt: string } | null>(null)

  usePageTitle(project?.title)

  if (!project) return <NotFoundPage />

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <section className="wide-section">
      <Link className="back-link" to="/portfolio">
        ← PORTFOLIO
      </Link>

      <SectionHeading
        number={project.number}
        label="PROYECTO"
        title={project.title}
      />

      <div className="project-layout">
        <div className="project-text">
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="project-meta">
          <div className="profile-label">TECNOLOGÍAS</div>
          <ul className="tag-list">
            {project.stack.map((tech) => (
              <li key={tech} className="technology-tag">{tech}</li>
            ))}
          </ul>

          {project.links.length > 0 && (
            <>
              <div className="profile-label spaced">ENLACES</div>
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    className="button-secondary"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </>
          )}
        </aside>
      </div>

      <div className="section-heading media-heading">
        <span>INTERFACES</span>
        <span className="section-index">
          {String(project.media.length).padStart(2, '0')}
        </span>
      </div>

      <div className="media-grid">
        {project.media.map((item) =>
          item.type === 'video' ? (
            <figure key={item.src} className="media-item media-video">
              <video
                src={item.src}
                controls
                muted
                playsInline
                preload="metadata"
                aria-label={item.alt}
              />
            </figure>
          ) : (
            <figure key={item.src} className="media-item">
              <button
                type="button"
                className="media-zoom"
                onClick={() => setZoomed({ src: item.src, alt: item.alt })}
                aria-label={`Ampliar: ${item.alt}`}
              >
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
              </button>
            </figure>
          ),
        )}
      </div>

      <Link className="next-project" to={`/portfolio/${next.slug}`}>
        <span>SIGUIENTE PROYECTO</span>
        <strong>
          {next.title} <span aria-hidden="true">↗</span>
        </strong>
      </Link>

      {zoomed && (
        <Lightbox src={zoomed.src} alt={zoomed.alt} onClose={() => setZoomed(null)} />
      )}
    </section>
  )
}
