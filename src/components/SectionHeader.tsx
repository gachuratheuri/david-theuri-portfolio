export default function SectionHeader(props: {
  kicker: string
  title: string
  description?: string
}) {
  return (
    <header className="space-y-4">
      <p className="da-kicker">{props.kicker}</p>
      <h2 className="da-display text-3xl md:text-4xl">{props.title}</h2>
      {props.description ? (
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl">{props.description}</p>
      ) : null}
    </header>
  )
}
