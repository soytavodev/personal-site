import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

// Tarjeta de proyecto con la captura dentro de un marco de navegador, para que
// todas las miniaturas se vean iguales aunque las capturas sean distintas.
export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project
  featured?: boolean
}) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className={`project-card${featured ? ' project-card-featured' : ''}`}
    >
      <div className="browser-frame">
        <div className="browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <em>{project.slug}</em>
        </div>
        <div className={`project-thumb${project.thumbClara ? ' thumb-clara' : ''}`}>
          <img src={project.thumb} alt="" loading="lazy" decoding="async" />
        </div>
      </div>

      <div className="project-card-body">
        <div className="project-card-top">
          <span className="card-number-inline">
            {project.number}
            {featured && <span className="featured-label">Destacado</span>}
          </span>
          <span className="card-arrow-inline" aria-hidden="true">↗</span>
        </div>
        <h2>{project.title}</h2>
        {/* El destacado tiene más espacio: muestra la descripción larga */}
        <p>{featured ? project.description[0] : project.summary}</p>
        <ul className="tag-list">
          {project.stack.map((tech) => (
            <li key={tech} className="technology-tag">{tech}</li>
          ))}
        </ul>
      </div>
    </Link>
  )
}
