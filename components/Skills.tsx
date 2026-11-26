import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { AI_TOOLS, SKILL_GROUPS, SOFT_SKILLS } from "@/lib/data";

const ROWS = [
  ...SKILL_GROUPS.map((g) => ({ category: g.category, skills: g.skills, highlight: false })),
  { category: "Soft skills", skills: SOFT_SKILLS, highlight: false },
  { category: "AI tools", skills: AI_TOOLS, highlight: true },
];

export function Skills() {
  return (
    <section id="skills" className="section bg-surface">
      <div className="container-x">
        <SectionHeading
          index="04"
          label="Skills"
          title={
            <>
              The <span className="mark">toolkit</span>
            </>
          }
          subtitle="The languages, frameworks, and tools I use to ship."
        />

        <div className="border-t-2 border-line-strong">
          {ROWS.map((row, i) => (
            <Reveal key={row.category} delay={Math.min(i, 5) * 0.04}>
              <div className="group grid gap-4 border-b border-line py-7 md:grid-cols-[80px_280px_1fr] md:items-baseline md:gap-8">
                <span className="hidden font-mono text-xs text-subtle md:block">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display text-4xl text-fg transition-transform duration-300 group-hover:translate-x-2">
                  {row.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {row.skills.map((s) => (
                    <span
                      key={s}
                      className={
                        row.highlight
                          ? "bg-accent px-3 py-1.5 text-sm font-medium text-on-accent"
                          : "border border-line bg-bg px-3 py-1.5 text-sm text-fg transition-colors hover:border-line-strong"
                      }
                    >
                      {s}
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
