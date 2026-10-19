export default function SectionHeading({
  number,
  label,
  title,
}: {
  number: string
  label: string
  title: string
}) {
  return (
    <div className="inner-heading">
      <span className="inner-heading-label">
        {number} / {label}
      </span>
      <h1>{title}</h1>
      <span className="inner-heading-line" />
    </div>
  )
}
