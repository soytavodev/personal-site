import { useEffect, useState } from 'react'
import { projects, usesAI } from '../data/projects'

// Cifras reales y actividad reciente en GitHub.
// La actividad se pide a la API pública de GitHub desde el navegador del visitante
// (una sola petición) y se guarda 30 minutos en sessionStorage. Si GitHub no
// responde (por ejemplo, por su límite de 60 peticiones por hora), se muestra un
// enlace al perfil en lugar de un error.

type Repo = {
  name: string
  description: string | null
  language: string | null
  pushed_at: string
  html_url: string
  fork: boolean
}

const USUARIO = 'soytavodev'
const CLAVE_CACHE = 'github-repos'
const DURACION_CACHE = 30 * 60 * 1000

function haceCuanto(fecha: string) {
  const dias = Math.floor((Date.now() - new Date(fecha).getTime()) / 86_400_000)
  if (dias <= 0) return 'hoy'
  if (dias === 1) return 'ayer'
  if (dias < 30) return `hace ${dias} días`
  const meses = Math.floor(dias / 30)
  return meses === 1 ? 'hace 1 mes' : `hace ${meses} meses`
}

function leerCache(): Repo[] | null {
  try {
    const guardado = JSON.parse(sessionStorage.getItem(CLAVE_CACHE) ?? 'null')
    if (guardado && Date.now() - guardado.fecha < DURACION_CACHE) return guardado.repos
  } catch {
    // sessionStorage puede no estar disponible (modo privado): se pide de nuevo
  }
  return null
}

export default function Cifras() {
  const [repos, setRepos] = useState<Repo[] | null>(leerCache)
  const [fallo, setFallo] = useState(false)

  useEffect(() => {
    if (repos) return
    const control = new AbortController()
    fetch(`https://api.github.com/users/${USUARIO}/repos?sort=pushed&per_page=100`, {
      signal: control.signal,
    })
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub respondió ${r.status}`)
        return r.json() as Promise<Repo[]>
      })
      .then((datos) => {
        // Fuera los forks (no son trabajo propio)
        const propios = datos.filter((r) => !r.fork)
        setRepos(propios)
        try {
          sessionStorage.setItem(CLAVE_CACHE, JSON.stringify({ fecha: Date.now(), repos: propios }))
        } catch {
          // sin caché no pasa nada
        }
      })
      .catch((e) => {
        if (e.name !== 'AbortError') setFallo(true)
      })
    return () => control.abort()
  }, [repos])

  const cifras = [
    { valor: String(projects.length), texto: 'proyectos en el portfolio' },
    { valor: String(projects.filter(usesAI).length), texto: 'con IA en local' },
    { valor: '9', texto: 'semanas de prácticas en empresa' },
    { valor: repos ? String(repos.length) : '—', texto: 'repositorios públicos en GitHub' },
  ]

  return (
    <div className="stats-block">
      <ul className="stats">
        {cifras.map((c) => (
          <li key={c.texto}>
            <strong>{c.valor}</strong>
            <span>{c.texto}</span>
          </li>
        ))}
      </ul>

      <div className="section-heading">
        <span>ACTIVIDAD EN GITHUB</span>
        <a
          className="section-index section-link"
          href={`https://github.com/${USUARIO}`}
          target="_blank"
          rel="noreferrer"
        >
          VER PERFIL ↗
        </a>
      </div>

      {repos ? (
        <ul className="activity">
          {/* En la lista no sale el repositorio del perfil (soytavodev/soytavodev): no es un proyecto */}
          {repos.filter((r) => r.name !== USUARIO).slice(0, 5).map((repo) => (
            <li key={repo.name}>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <span className="activity-dot" aria-hidden="true" />
                <span className="activity-name">{repo.name}</span>
                <span className="activity-desc">{repo.description ?? ''}</span>
                {repo.language && <span className="activity-lang">{repo.language}</span>}
                <time dateTime={repo.pushed_at}>{haceCuanto(repo.pushed_at)}</time>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="activity-fallback">
          {fallo ? (
            <>
              Ahora mismo no se puede cargar la actividad.{' '}
              <a href={`https://github.com/${USUARIO}`} target="_blank" rel="noreferrer">
                Míralo directamente en GitHub ↗
              </a>
            </>
          ) : (
            'Cargando actividad…'
          )}
        </p>
      )}
    </div>
  )
}
