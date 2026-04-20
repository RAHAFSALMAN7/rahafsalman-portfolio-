"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    company: "Zuccess",
    role: "Web Developer",
    type: "Full-time",
    period: "Aug 2025 – Apr 2026",
    bullets: [
      "Production-level role — not an internship",
      "Built & deployed websites for clients: AMT, MKN, Zuccess",
      "Managed deployments on Netlify, Vercel, and GoDaddy",
      "Contributed to Zai Chat WhatsApp automation platform",
      "Developed responsive, high-performance front-end interfaces",
    ],
    tags: ["React.js", "Next.js", "Netlify", "Vercel", "Deployment"],
    accent: true,
  },
  {
    company: "Udacity",
    role: "UX Trainee",
    type: "Training",
    period: "Feb 2025 – Present",
    bullets: [
      "User experience design principles",
      "Wireframing, prototyping, and usability testing",
    ],
    tags: ["Figma", "UX Research", "Prototyping"],
    accent: false,
  },
  {
    company: "Cystack",
    role: "Software Development Intern",
    type: "Internship",
    period: "Nov 2024 – Jan 2025",
    bullets: [
      "Contributed to software development projects",
      "Gained hands-on experience in team workflows",
    ],
    tags: ["Web Dev", "Collaboration"],
    accent: false,
  },
  {
    company: "Paltel",
    role: "AI/ML Intern",
    type: "Internship",
    period: "Sep 2024 – Nov 2024",
    bullets: [
      "AI / ML / Data Analysis using TensorFlow, Keras",
      "Data processing with Pandas and NumPy",
    ],
    tags: ["TensorFlow", "Keras", "Pandas", "NumPy"],
    accent: false,
  },
  {
    company: "Adaptive TechSoft",
    role: "Database Intern",
    type: "Internship",
    period: "Jul 2024 – Sep 2024",
    bullets: [
      "Database systems design and management",
      "Oracle DB development and queries",
    ],
    tags: ["Oracle", "SQL", "Databases"],
    accent: false,
  },
  {
    company: "Udacity",
    role: "Frontend Intern",
    type: "Internship",
    period: "May 2024 – Sep 2024",
    bullets: [
      "HTML, CSS, JavaScript fundamentals and projects",
      "Built responsive layouts and UI components",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    accent: false,
  },
];

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="section-pad"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Experience"
          title="Work History"
          subtitle="A journey through roles that shaped my skills."
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-px"
            style={{ background: "var(--border)" }}
          />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-14 md:pl-20"
              >
                {/* Dot */}
                <motion.div
                  className="absolute left-1.5 md:left-3.5 top-5 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: exp.accent ? "var(--accent)" : "var(--border-strong)",
                    background: exp.accent ? "var(--accent)" : "var(--bg)",
                  }}
                  animate={exp.accent ? { scale: [1, 1.15, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {exp.accent && <Briefcase size={10} className="text-white" />}
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="p-6 rounded-2xl border transition-all"
                  style={{
                    background: exp.accent ? "var(--card)" : "var(--bg)",
                    borderColor: exp.accent ? "var(--accent)" : "var(--border)",
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className="text-lg font-black"
                          style={{ fontFamily: "Syne, sans-serif", color: "var(--fg)" }}
                        >
                          {exp.company}
                        </h3>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{
                            background: exp.accent ? "var(--accent)" : "var(--accent-light)",
                            color: exp.accent ? "white" : "var(--accent)",
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                        {exp.role}
                      </p>
                    </div>
                    <span className="text-xs shrink-0" style={{ color: "var(--fg-subtle)" }}>
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full border"
                        style={{ borderColor: "var(--border)", color: "var(--fg-subtle)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
