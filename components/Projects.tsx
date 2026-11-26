"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, GitFork } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { PROFILE, PROJECTS, displayUrl, type Project } from "@/lib/data";

const FILTERS = ["All", "255 Advertising", "Zuccess"] as const;
type Filter = (typeof FILTERS)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex min-h-[380px] flex-col bg-bg p-6 transition-colors duration-300 hover:bg-accent sm:p-7"
    >
      <div className="flex items-start justify-between">
        <span className="display text-6xl text-transparent [-webkit-text-stroke:1px_var(--fg)] group-hover:[-webkit-text-stroke:1px_var(--on-accent)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex h-11 w-11 items-center justify-center border border-line-strong text-fg transition-all duration-300 group-hover:rotate-45 group-hover:border-on-accent group-hover:bg-on-accent group-hover:text-accent">
          <ArrowUpRight size={18} />
        </span>
      </div>

      <div className="mt-auto pt-10">
        <div className="label mb-3 group-hover:text-on-accent">{project.type}</div>
        <h3 className="display mb-4 text-5xl text-fg group-hover:text-on-accent">{project.title}</h3>
        <p className="mb-6 text-sm leading-relaxed text-muted group-hover:text-on-accent">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={
                tag === "3D"
                  ? "inline-flex items-center bg-fg px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-bg group-hover:bg-on-accent group-hover:text-accent"
                  : "tag group-hover:border-on-accent/40 group-hover:text-on-accent"
              }
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 border-t border-line pt-4 font-mono text-[11px] text-subtle group-hover:border-on-accent/30 group-hover:text-on-accent">
          {displayUrl(project.liveUrl)}
        </div>
      </div>
    </motion.a>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.company === filter);

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="Projects"
          title={
            <>
              Selected <span className="mark">work</span>
            </>
          }
          subtitle="Live client and product projects, delivered with a clean, high-end user experience."
        />

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const count = f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.company === f).length;
            const isActive = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`border-2 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                  isActive
                    ? "border-line-strong bg-fg text-bg"
                    : "border-line text-muted hover:border-line-strong hover:text-fg"
                }`}
              >
                {f} <sup className="ml-0.5">{count}</sup>
              </button>
            );
          })}
        </div>

        <motion.div layout className="cell-grid sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <GitFork size={15} />
            All repositories on GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
