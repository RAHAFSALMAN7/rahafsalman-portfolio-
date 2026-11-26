import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { EDUCATION } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container-x">
        <SectionHeading
          index="05"
          label="Education"
          title={
            <>
              Academic <span className="mark">background</span>
            </>
          }
        />

        <div className="cell-grid md:grid-cols-2">
          {EDUCATION.map(({ school, degree, program, year, tags }, i) => (
            <Reveal key={school} delay={i * 0.08} className="flex flex-col p-7 sm:p-9">
              <div className="mb-10 flex items-start justify-between">
                <span className="display text-7xl text-fg">{year}</span>
                <span className="font-mono text-xs text-subtle">0{i + 1}</span>
              </div>
              <h3 className="mb-2 text-2xl font-semibold tracking-tight text-fg">{school}</h3>
              <p className="text-sm font-medium text-fg">
                <span className="mark">{degree}</span>
              </p>
              {program && <p className="mt-2 text-sm text-muted">{program}</p>}
              <div className="mt-8 flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
