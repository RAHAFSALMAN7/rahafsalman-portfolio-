import { Braces, Layout, Lightbulb, ShoppingBag, Sparkles, Users, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { AI_TOOLS, SKILL_GROUPS, SOFT_SKILLS } from "@/lib/data";

const GROUP_ICONS = [Braces, Layout, ShoppingBag, Wrench, Lightbulb];

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading
          index="04"
          label="Skills"
          title="Toolkit"
          subtitle="The languages, frameworks, and tools I use to ship."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = GROUP_ICONS[i];
            const isLast = i === SKILL_GROUPS.length - 1;
            return (
              <Reveal
                key={group.category}
                delay={i * 0.06}
                className={`card p-6 ${isLast ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="mb-5 flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon size={15} />
                  </span>
                  <h3 className="text-sm font-semibold text-fg">{group.category}</h3>
                </div>
                <ul className="space-y-2.5">
                  {group.skills.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-sm text-muted">
                      <span className="h-px w-3 bg-line-strong" />
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[2fr_1fr]">
          <Reveal delay={0.1} className="card p-6">
            <div className="mb-4 flex items-center gap-2.5">
              <Users size={15} className="text-accent" />
              <h3 className="text-sm font-semibold text-fg">Soft skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map((s) => (
                <span key={s} className="chip !text-sm">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15} className="card p-6">
            <div className="mb-4 flex items-center gap-2.5">
              <Sparkles size={15} className="text-accent" />
              <h3 className="text-sm font-semibold text-fg">AI tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {AI_TOOLS.map((t) => (
                <span key={t} className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
