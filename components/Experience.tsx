import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { EXPERIENCES } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading
          index="02"
          label="Experience"
          title="Where I've worked"
          subtitle="Full-time roles building production websites, backed by internships across frontend, data, and AI."
        />

        <div className="divide-y divide-line border-y border-line">
          {EXPERIENCES.map((exp, i) => (
            <Reveal key={`${exp.company}-${exp.role}`} delay={Math.min(i, 4) * 0.05}>
              <article className="group grid gap-4 py-8 md:grid-cols-[200px_1fr] md:gap-10 md:py-10">
                {/* Meta */}
                <div className="flex items-center justify-between gap-3 md:block">
                  <div className="font-mono text-xs text-subtle">{exp.period}</div>
                  <div className="md:mt-3">
                    {exp.current ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-accent">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                        Current
                      </span>
                    ) : (
                      <span className="text-[11px] text-subtle">{exp.type}</span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-xl font-semibold text-fg md:text-2xl">{exp.role}</h3>
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-base text-accent hover:underline"
                      >
                        @ {exp.company}
                        <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <span className="text-base text-muted">@ {exp.company}</span>
                    )}
                  </div>

                  <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-strong group-hover:bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
