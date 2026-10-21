import { Globe, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { EDUCATION } from "@/lib/data";

const ICONS = [GraduationCap, Globe];

export function Education() {
  return (
    <section id="education" className="section border-t border-line bg-surface">
      <div className="container-x">
        <SectionHeading index="05" label="Education" title="Academic background" />

        <div className="grid gap-4 md:grid-cols-2">
          {EDUCATION.map(({ school, degree, program, year, tags }, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={school} delay={i * 0.08} className="card p-7 sm:p-8">
                <div className="mb-6 flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={20} />
                  </span>
                  <span className="font-mono text-xs text-subtle">{year}</span>
                </div>
                <h3 className="mb-1 text-xl font-semibold text-fg">{school}</h3>
                <p className={`text-sm font-medium text-accent ${program ? "" : "mb-6"}`}>{degree}</p>
                {program && <p className="mb-6 text-sm text-subtle">{program}</p>}
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
