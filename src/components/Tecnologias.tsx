import {
  siCss,
  siGit,
  siGithub,
  siGnubash,
  siHtml5,
  siJavascript,
  siLinux,
  siMysql,
  siOllama,
  siPhp,
  siPython,
  siReact,
  siSqlite,
  siTailwindcss,
  siTypescript,
  siVite,
  type SimpleIcon,
} from 'simple-icons'
import type { CSSProperties } from 'react'
import { projects } from '../data/projects'

// Tecnologías que Gustavo usa, agrupadas. "nombre" es el texto que aparece en el
// stack de los proyectos, para contar en cuántos se usa cada una.
const GRUPOS: { titulo: string; items: { icono: SimpleIcon; nombre: string }[] }[] = [
  {
    titulo: 'Lenguajes',
    items: [
      { icono: siPython, nombre: 'Python' },
      { icono: siPhp, nombre: 'PHP' },
      { icono: siJavascript, nombre: 'JavaScript' },
      { icono: siTypescript, nombre: 'TypeScript' },
      { icono: siHtml5, nombre: 'HTML' },
      { icono: siCss, nombre: 'CSS' },
    ],
  },
  {
    titulo: 'Web y datos',
    items: [
      { icono: siReact, nombre: 'React' },
      { icono: siVite, nombre: 'Vite' },
      { icono: siTailwindcss, nombre: 'Tailwind CSS' },
      { icono: siMysql, nombre: 'MySQL' },
      { icono: siSqlite, nombre: 'SQLite' },
    ],
  },
  {
    titulo: 'Herramientas e IA',
    items: [
      { icono: siLinux, nombre: 'Linux' },
      { icono: siGnubash, nombre: 'Bash' },
      { icono: siGit, nombre: 'Git' },
      { icono: siGithub, nombre: 'GitHub' },
      { icono: siOllama, nombre: 'Ollama' },
    ],
  },
]

const usos = (nombre: string) => projects.filter((p) => p.stack.includes(nombre)).length

export default function Tecnologias() {
  return (
    <div className="tech-block">
      <div className="section-heading">
        <span>TECNOLOGÍAS</span>
        <span className="section-index">LO QUE USO</span>
      </div>

      <div className="tech-groups">
        {GRUPOS.map((grupo) => (
          <div key={grupo.titulo} className="tech-group">
            <h3>{grupo.titulo}</h3>
            <ul>
              {grupo.items.map(({ icono, nombre }) => {
                const n = usos(nombre)
                return (
                  <li key={nombre} style={{ '--marca': `#${icono.hex}` } as CSSProperties}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d={icono.path} />
                    </svg>
                    <span>{nombre}</span>
                    {n > 0 && (
                      <em title={`Usado en ${n} proyecto${n > 1 ? 's' : ''} del portfolio`}>
                        {n}
                      </em>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
      <p className="tech-note">El número indica en cuántos proyectos del portfolio la uso.</p>
    </div>
  )
}
