import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import usePageTitle from '../components/usePageTitle'
import { projects, usesAI, type Project } from '../data/projects'

const FILTROS: { id: string; label: string; incluye: (p: Project) => boolean }[] = [
  { id: 'todos', label: 'Todos', incluye: () => true },
  { id: 'php', label: 'PHP', incluye: (p) => p.stack.includes('PHP') },
  { id: 'python', label: 'Python', incluye: (p) => p.stack.includes('Python') },
  { id: 'ia', label: 'IA', incluye: usesAI },
]

export default function PortfolioPage() {
  usePageTitle('Portfolio')
  const [filtro, setFiltro] = useState('todos')

  const activo = FILTROS.find((f) => f.id === filtro) ?? FILTROS[0]
  const visibles = projects.filter(activo.incluye)
  // Con «Todos», el destacado va arriba en grande y el resto en la cuadrícula
  const destacado = filtro === 'todos' ? visibles.find((p) => p.featured) : undefined
  const resto = visibles.filter((p) => p !== destacado)

  return (
    <section className="wide-section">
      <SectionHeading number="02" label="PORTFOLIO" title="Proyectos." />

      <p className="section-intro">
        Proyectos que he hecho durante mi formación y mis prácticas. Cada uno
        enlaza a su código, con capturas y lo que aprendí haciéndolo.
      </p>

      <div className="project-filters" role="group" aria-label="Filtrar proyectos">
        {FILTROS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`filter-chip${f.id === filtro ? ' active' : ''}`}
            aria-pressed={f.id === filtro}
            onClick={() => setFiltro(f.id)}
          >
            {f.label}
            <span>{projects.filter(f.incluye).length}</span>
          </button>
        ))}
      </div>

      {destacado && (
        <Reveal>
          <ProjectCard project={destacado} featured />
        </Reveal>
      )}

      <div className="project-grid">
        {resto.map((project, i) => (
          <Reveal key={`${filtro}-${project.slug}`} delay={(i % 2) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
