type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
  light?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 flex w-full max-w-3xl flex-col items-center gap-3 text-center">
      <span className={`ds-small uppercase tracking-widest ${light ? 'text-text-white' : 'text-text-secondary'}`}>
        {eyebrow}
      </span>
      <h2 className={`ds-heading-2 ${light ? 'text-text-white' : 'text-text-primary'}`}>{title}</h2>
      <p className={`ds-body ${light ? 'text-text-white' : 'text-text-secondary'}`}>{description}</p>
    </div>
  )
}
