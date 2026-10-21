import { Reveal } from "./Reveal";

interface Props {
  index: string;
  label: string;
  title: React.ReactNode;
  subtitle?: string;
}

export function SectionHeading({ index, label, title, subtitle }: Props) {
  return (
    <Reveal className="mb-14 md:mb-16">
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-xs text-accent">{index}</span>
        <span className="h-px w-8 bg-line-strong" />
        <span className="eyebrow">{label}</span>
      </div>
      <h2 className="text-4xl font-semibold text-fg md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">{subtitle}</p>}
    </Reveal>
  );
}
