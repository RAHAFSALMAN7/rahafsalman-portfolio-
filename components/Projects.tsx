"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { ExternalLink, ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "AMT Arabia",
    desc: "Real client project built for the Saudi market, focused on polished UX, clear structure, and a fast, production-ready web experience.",
    tags: ["Next.js", "Tailwind CSS", "SEO", "Client Delivery"],
    type: "Client Project",
    featured: true,
    liveUrl: "https://amt-arabia.net/en",
  },
  {
    id: 2,
    title: "Zuccess",
    desc: "AI-powered creative tech platform designed to support content workflows with a modern interface and smooth, conversion-focused interactions.",
    tags: ["AI Platform", "React", "UI/UX", "Frontend Engineering"],
    type: "Creative Tech",
    featured: true,
    liveUrl: "https://zuccess.ai/",
  },
  {
    id: 3,
    title: "Zai Chat",
    desc: "AI chat and dashboard system project with a product-oriented UI, integration-focused flows, and a responsive control panel experience.",
    tags: ["AI Chat", "Dashboard", "Integration", "Frontend"],
    type: "AI Product",
    featured: true,
    liveUrl: "https://zaichat.net/dashboard",
  },
  {
    id: 4,
    title: "MKN Sea Point",
    desc: "Business website project built to present services with clarity, credibility, and a premium visual style across desktop and mobile devices.",
    tags: ["Business Website", "Responsive", "Brand Presence", "Production"],
    type: "Business Website",
    featured: true,
    liveUrl: "https://www.mknseapoint.com/",
  },
];

const TYPE_COLORS: Record<string, string> = {
  "Client Project": "#c8522a",
  "Creative Tech": "#3b82f6",
  "AI Product": "#8b5cf6",
  "Business Website": "#0ea5a5",
};

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="section-pad"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Projects"
          title="Selected Work"
          subtitle="Live client and product projects delivered with a clean, high-end user experience."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onHoverStart={() => setHovered(project.id)}
              onHoverEnd={() => setHovered(null)}
              className="group relative flex flex-col rounded-2xl border overflow-hidden"
              style={{
                background: "var(--card)",
                borderColor: hovered === project.id ? "var(--accent)" : "var(--border)",
                transition: "border-color 0.2s",
              }}
            >
              {/* Top color bar */}
              <div
                className="h-1 w-full"
                style={{ background: TYPE_COLORS[project.type] || "var(--accent)" }}
              />

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <span
                    className="text-xs font-bold tracking-wide uppercase px-2 py-0.5 rounded-full"
                    style={{
                      background: "var(--accent-light)",
                      color: "var(--accent)",
                      fontFamily: "Syne, sans-serif",
                    }}
                  >
                    {project.type}
                  </span>
                  {project.featured && (
                    <span className="text-xs" style={{ color: "var(--fg-subtle)" }}>★ Featured</span>
                  )}
                </div>

                <h3
                  className="text-lg font-black mb-2"
                  style={{ fontFamily: "Syne, sans-serif", color: "var(--fg)" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-5 flex-1"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ background: "var(--bg-secondary)", color: "var(--fg-subtle)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold rounded-full px-4 py-2 transition-all duration-200 w-full sm:w-auto"
                    style={{
                      color: "white",
                      background: "var(--accent)",
                      boxShadow: hovered === project.id ? "0 10px 24px rgba(0,0,0,0.22)" : "0 6px 14px rgba(0,0,0,0.16)",
                      transform: hovered === project.id ? "translateY(-2px)" : "translateY(0px)",
                    }}
                  >
                    <ExternalLink size={14} />
                    View Live
                  </a>
                </div>
              </div>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 0%, var(--accent), transparent 70%)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: hovered === project.id ? 0.04 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/RAHAFSALMAN7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: "var(--accent)" }}
            >
              View all repositories on GitHub
              <ArrowRight size={14} />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
