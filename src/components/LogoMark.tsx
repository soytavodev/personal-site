// Logo: prompt de terminal (› y un guion bajo rojo). Mismo dibujo que public/favicon-cursor.svg.
export default function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="14 18 36 28" aria-hidden="true">
      <path
        d="M19 22 L29 32 L19 42"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="square"
      />
      <rect x="33" y="39" width="13" height="5" fill="var(--color-accent-light)" />
    </svg>
  )
}
