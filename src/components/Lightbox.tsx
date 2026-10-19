import { useEffect, useRef } from 'react'

export default function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string
  alt: string
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Lleva el foco al botón de cerrar para poder usar el teclado
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button ref={closeRef} type="button" className="lightbox-close" onClick={onClose}>
        Cerrar ✕
      </button>
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  )
}
