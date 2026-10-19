import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import usePageTitle from '../components/usePageTitle'
import { projects } from '../data/projects'

export default function PortfolioPage() {
  usePageTitle('Portfolio')

  return (
    <section className="wide-section">
      <SectionHeading number="02" label="PORTFOLIO" title="Proyectos." />

      <p className="section-intro">
        Proyectos desarrollados durante mi formación. Cada uno enlaza a su
        código o a su versión en línea cuando está disponible.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/portfolio/${project.slug}`}
            className="project-card"
          >
            <div className="project-thumb">
              <img
                src={project.media.find((m) => m.type === 'image')?.src}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="project-card-body">
              <div className="project-card-top">
                <span className="card-number-inline">{project.number}</span>
                <span className="card-arrow-inline" aria-hidden="true">↗</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <ul className="tag-list">
                {project.stack.map((tech) => (
                  <li key={tech} className="technology-tag">{tech}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
