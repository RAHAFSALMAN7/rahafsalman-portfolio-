"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, GitFork } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { PROFILE, PROJECTS, displayUrl, type Project } from "@/lib/data";

const FILTERS = ["All", "255 Advertising", "Zuccess"] as const;
type Filter = (typeof FILTERS)[number];

function ProjectCard({ project }: { project: Project }) {
  const { hue } = project;
  return (
    <motion.a
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-line-strong"
    >
      {/* Cover: a mini browser window with a generated gradient */}
      <div className="p-2 pb-0">
        <div className="overflow-hidden rounded-t-2xl border border-b-0 border-line">
          <div className="flex items-center gap-1.5 border-b border-line bg-surface px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="ml-2 truncate rounded-md bg-card px-2 py-0.5 font-mono text-[10px] text-subtle">
              {displayUrl(project.liveUrl)}
            </span>
          </div>
          <div
            className="relative flex h-36 items-center justify-center overflow-hidden"
            style={{
              background: `radial-gradient(120% 120% at 0% 0%, hsl(${hue} 85% 65% / 0.45), transparent 60%),
                radial-gradient(120% 120% at 100% 100%, hsl(${hue + 50} 85% 60% / 0.35), transparent 60%), var(--bg-secondary)`,
            }}
          >
            <span className="px-6 text-center font-serif text-3xl italic leading-tight text-fg/80 transition-transform duration-500 group-hover:scale-110">
              {project.title}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="eyebrow">{project.type}</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-white">
            <ArrowUpRight size={15} />
          </span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-fg">{project.title}</h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.company === filter);

  return (
    <section id="projects" className="section border-y border-line bg-surface">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="Projects"
          title="Selected work"
          subtitle="Live client and product projects, delivered with a clean, high-end user experience."
        />

        {/* Filters */}
        <div className="mb-10 inline-flex flex-wrap gap-1 rounded-full border border-line bg-card p-1">
          {FILTERS.map((f) => {
            const count = f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.company === f).length;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                  filter === f ? "text-bg" : "text-muted hover:text-fg"
                }`}
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-fg"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">
                  {f} <span className="opacity-60">{count}</span>
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            <GitFork size={15} />
            View all repositories on GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
