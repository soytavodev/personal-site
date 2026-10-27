import { useEffect, useRef, useState, type ReactNode } from 'react'

// Hace aparecer su contenido con un fundido suave cuando entra en pantalla.
// Si el sistema pide reducir el movimiento, el CSS lo muestra sin animación.
export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entrada]) => {
        // También se muestra si ya quedó por encima (por ejemplo, tras saltar al final)
        if (entrada.isIntersecting || entrada.boundingClientRect.top < 0) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
