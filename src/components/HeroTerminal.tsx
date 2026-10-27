import { useEffect, useState } from 'react'

// Consola animada de la portada. Todo lo que muestra es real: los proyectos
// existen y los resultados son los de las pruebas de Analizador IDS.
type Linea = { tipo: 'comando' | 'salida'; texto: string }

const GUION: Linea[] = [
  { tipo: 'comando', texto: 'whoami' },
  { tipo: 'salida', texto: 'gustavo · desarrollador en formación (DAM)' },
  { tipo: 'comando', texto: 'ls proyectos/' },
  { tipo: 'salida', texto: 'analizador-ids  chopcheck  changeit  deeplens  guessit' },
  { tipo: 'comando', texto: 'python3 main.py --modo ambos' },
  { tipo: 'salida', texto: 'reglas: 7/7 ataques · IA local: 4/7 · comparación lista' },
]

const PROMPT = 'gustavo@dam:~$'
const VELOCIDAD_TECLEO = 45 // milisegundos por letra
const PAUSA_TRAS_LINEA = 550

const prefiereSinMovimiento = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function HeroTerminal() {
  // Cuántas líneas están completas y cuántas letras lleva la línea actual
  const [lineas, setLineas] = useState(() => (prefiereSinMovimiento() ? GUION.length : 0))
  const [letras, setLetras] = useState(0)

  useEffect(() => {
    if (lineas >= GUION.length) return
    const actual = GUION[lineas]

    // Las salidas aparecen de golpe; los comandos se escriben letra a letra
    if (actual.tipo === 'salida') {
      const t = setTimeout(() => setLineas((n) => n + 1), 250)
      return () => clearTimeout(t)
    }
    if (letras < actual.texto.length) {
      const t = setTimeout(() => setLetras((n) => n + 1), VELOCIDAD_TECLEO)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setLineas((n) => n + 1)
      setLetras(0)
    }, PAUSA_TRAS_LINEA)
    return () => clearTimeout(t)
  }, [lineas, letras])

  const escribiendo = lineas < GUION.length && GUION[lineas].tipo === 'comando'

  return (
    <div className="hero-terminal" aria-label="Consola con mis proyectos" role="img">
      <div className="terminal-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <em>gustavo@dam: ~</em>
      </div>
      <pre className="terminal-body" aria-hidden="true">
        {GUION.slice(0, lineas).map((linea, i) =>
          linea.tipo === 'comando' ? (
            <div key={i}>
              <span className="terminal-prompt">{PROMPT}</span> {linea.texto}
            </div>
          ) : (
            <div key={i} className="terminal-output">
              {linea.texto}
            </div>
          ),
        )}
        <div>
          <span className="terminal-prompt">{PROMPT}</span>{' '}
          {escribiendo && GUION[lineas].texto.slice(0, letras)}
          <span className="terminal-cursor" />
        </div>
      </pre>
    </div>
  )
}
