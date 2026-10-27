import { useEffect } from 'react'

// Brillo rojo que sigue al ratón: guarda la posición en variables CSS.
// --mx/--my: posición en la ventana (brillo de fondo de la página).
// --x/--y: posición dentro de la tarjeta sobre la que está el ratón.
// En móviles (sin ratón) y con «reducir movimiento» no hace nada.
const TARJETAS = '.project-card, .specialty-card, .stats li, .tech-group'

export default function useSpotlight() {
  useEffect(() => {
    const sinRaton = window.matchMedia('(hover: none)').matches
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (sinRaton || sinMovimiento) return

    let pendiente = 0
    const mover = (e: PointerEvent) => {
      cancelAnimationFrame(pendiente)
      // requestAnimationFrame: como mucho una actualización por fotograma
      pendiente = requestAnimationFrame(() => {
        const raiz = document.documentElement
        raiz.style.setProperty('--mx', `${e.clientX}px`)
        raiz.style.setProperty('--my', `${e.clientY}px`)

        const tarjeta = (e.target as Element | null)?.closest?.(TARJETAS) as HTMLElement | null
        if (tarjeta) {
          const caja = tarjeta.getBoundingClientRect()
          tarjeta.style.setProperty('--x', `${e.clientX - caja.left}px`)
          tarjeta.style.setProperty('--y', `${e.clientY - caja.top}px`)
        }
      })
    }

    window.addEventListener('pointermove', mover, { passive: true })
    return () => {
      window.removeEventListener('pointermove', mover)
      cancelAnimationFrame(pendiente)
    }
  }, [])
}
