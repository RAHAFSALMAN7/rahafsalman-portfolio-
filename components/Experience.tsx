import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { EXPERIENCES } from "@/lib/data";

export function Experience() {
  const fullTime = EXPERIENCES.filter((e) => e.type === "Full-time");
  const training = EXPERIENCES.filter((e) => e.type !== "Full-time");

  return (
    <section id="experience" className="section bg-surface">
      <div className="container-x">
        <SectionHeading
          index="02"
          label="Experience"
          title={
            <>
              Where I&apos;ve <span className="mark">worked</span>
            </>
          }
          subtitle="Full-time roles building production websites, backed by internships across frontend, data, and AI."
        />

        {/* Full-time roles */}
        <div className="border-t-2 border-line-strong">
          {fullTime.map((exp, i) => (
            <Reveal key={`${exp.company}-${exp.role}`} delay={i * 0.06}>
              <article className="grid gap-6 border-b border-line py-10 md:grid-cols-[220px_1fr] md:gap-12">
                <div>
                  <div className="font-mono text-sm text-fg">{exp.period}</div>
                  <div className="mt-3">
                    {exp.current ? (
                      <span className="inline-flex items-center gap-2 bg-accent px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-on-accent">
                        <span className="h-1.5 w-1.5 animate-pulse bg-on-accent" />
                        Current
                      </span>
                    ) : (
                      <span className="label">{exp.type}</span>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="display text-5xl text-fg md:text-6xl">{exp.company}</h3>
                    {exp.url && (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${exp.company}`}
                        className="flex h-11 w-11 items-center justify-center border border-line-strong text-fg transition-colors hover:bg-accent hover:text-on-accent"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                  <div className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-muted">{exp.role}</div>

                  <ul className="mt-6 grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-fg" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Internships & training */}
        <Reveal className="mt-20 mb-6 flex items-center justify-between">
          <h3 className="display text-3xl text-fg md:text-4xl">Internships & training</h3>
          <span className="label">{String(training.length).padStart(2, "0")} entries</span>
        </Reveal>

        <div className="border-t-2 border-line-strong">
          {training.map((exp, i) => (
            <Reveal key={`${exp.company}-${exp.role}`} delay={Math.min(i, 5) * 0.04}>
              <div className="group grid gap-2 border-b border-line py-5 transition-colors hover:bg-bg md:grid-cols-[220px_1fr_1.2fr] md:items-center md:gap-12 md:px-3">
                <div className="font-mono text-xs text-muted">{exp.period}</div>
                <div>
                  <div className="font-medium text-fg">{exp.role}</div>
                  <div className="text-sm text-muted">
                    {exp.company} · {exp.type}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 md:justify-end">
                  {exp.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
