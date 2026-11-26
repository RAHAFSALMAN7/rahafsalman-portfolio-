import { Reveal } from "./Reveal";

interface Props {
  index: string;
  label: string;
  title: React.ReactNode;
  subtitle?: string;
}

export function SectionHeading({ index, label, title, subtitle }: Props) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center justify-between border-t-2 border-line-strong pt-3 font-mono text-xs uppercase tracking-[0.16em] text-fg">
        <span>({index})</span>
        <span>{label}</span>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
        <h2 className="display text-6xl text-fg sm:text-7xl md:text-8xl">{title}</h2>
        {subtitle && <p className="max-w-md text-base text-muted md:justify-self-end md:text-lg">{subtitle}</p>}
      </div>
    </Reveal>
  );
}
