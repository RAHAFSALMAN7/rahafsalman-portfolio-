"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap, Globe } from "lucide-react";

const EDUCATION = [
  {
    icon: GraduationCap,
    school: "An-Najah National University",
    degree: "Bachelor of Computer Science",
    program: "Apprenticeship Program",
    year: "2025",
    tags: ["Software Engineering", "Web Development", "AI/ML", "Databases"],
    highlight: true,
  },
  {
    icon: Globe,
    school: "American English Scholarship Program",
    degree: "English Language Certificate",
    program: "AESP — 120-Hour Intensive Training",
    year: "2024",
    tags: ["General English", "Business English", "Communication"],
    highlight: false,
  },
];

export function Education() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Education" title="Academic Background" />

        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map(({ icon: Icon, school, degree, program, year, tags, highlight }, i) => (
            <motion.div
              key={school}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="relative p-8 rounded-2xl border overflow-hidden"
              style={{
                background: highlight ? "var(--card)" : "var(--bg-secondary)",
                borderColor: highlight ? "var(--accent)" : "var(--border)",
              }}
            >
              {highlight && (
                <motion.div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{ background: "radial-gradient(circle at top right, var(--accent), transparent 60%)" }}
                />
              )}

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: highlight ? "var(--accent-light)" : "var(--border)" }}
                  >
                    <Icon size={22} style={{ color: highlight ? "var(--accent)" : "var(--fg-muted)" }} />
                  </div>
                  <span
                    className="text-sm font-bold px-3 py-1 rounded-full"
                    style={{
                      background: "var(--accent-light)",
                      color: "var(--accent)",
                      fontFamily: "Syne, sans-serif",
                    }}
                  >
                    {year}
                  </span>
                </div>

                <h3
                  className="text-xl font-black mb-1"
                  style={{ fontFamily: "Syne, sans-serif", color: "var(--fg)" }}
                >
                  {school}
                </h3>
                <p className="font-semibold mb-1 text-sm" style={{ color: "var(--accent)" }}>
                  {degree}
                </p>
                <p className="text-sm mb-6" style={{ color: "var(--fg-subtle)" }}>
                  {program}
                </p>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full border"
                      style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
