export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="mb-10 max-w-2xl"><p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[.18em] text-primary">{eyebrow}</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>{copy && <p className="mt-4 leading-7 text-muted-foreground">{copy}</p>}</div>;
}
