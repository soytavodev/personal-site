import Reveal from './Reveal'

// Línea de tiempo con los hitos reales de Gustavo (los mismos que cuenta /historia).
const HITOS = [
  { anio: '1990', lugar: 'Cumaná, Venezuela', texto: 'Nazco y crezco jugando a la NES. Quería saber cómo funcionaba.' },
  { anio: '2019', lugar: 'Chile', texto: 'Seis años de hostelería, repartos y trabajo como asistente administrativo.' },
  { anio: '2025', lugar: 'Valencia, España', texto: 'Llego a España y empiezo el ciclo de Desarrollo de Aplicaciones Multiplataforma.' },
  { anio: '2026', lugar: 'JOCARSA · Valencia', texto: 'Prácticas en empresa: Python, PHP con SQLite e IA en local.' },
  { anio: '2027', lugar: 'Objetivo', texto: 'Terminar DAM y trabajar como desarrollador.', futuro: true },
]

export default function Trayectoria() {
  return (
    <div className="timeline-block">
      <div className="section-heading">
        <span>TRAYECTORIA</span>
        <span className="section-index">1990 — 2027</span>
      </div>

      <ol className="timeline">
        {HITOS.map((hito, i) => (
          <li key={hito.anio} className={hito.futuro ? 'timeline-futuro' : undefined}>
            <Reveal delay={i * 90}>
              <span className="timeline-dot" aria-hidden="true" />
              <span className="timeline-year">{hito.anio}</span>
              <strong>{hito.lugar}</strong>
              <p>{hito.texto}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  )
}
