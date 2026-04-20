"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";

const SKILL_GROUPS = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 80 },
      { name: "C++", level: 65 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "HTML & CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Tools & APIs",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Vercel / Netlify", level: 85 },
      { name: "FastAPI", level: 72 },
      { name: "Payment Gateways", level: 68 },
    ],
  },
  {
    category: "Concepts",
    skills: [
      { name: "OOP", level: 85 },
      { name: "Data Structures", level: 78 },
      { name: "Algorithms", level: 75 },
      { name: "REST APIs", level: 88 },
    ],
  },
];

const SOFT_SKILLS = [
  "Client Communication",
  "Problem Solving",
  "Teamwork",
  "Remote Work",
  "Attention to Detail",
  "Fast Learner",
  "Time Management",
  "Documentation",
];

const AI_TOOLS = ["Cursor AI", "Claude AI", "GitHub Copilot", "Figma AI"];

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium" style={{ color: "var(--fg)" }}>{name}</span>
        <span className="text-xs font-mono" style={{ color: "var(--fg-subtle)" }}>{level}%</span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "var(--border)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, var(--accent), #e8924a)" }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Skills" title="Technical Arsenal" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="p-6 rounded-2xl border"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <h3
                className="text-sm font-bold tracking-widest uppercase mb-6"
                style={{ color: "var(--accent)", fontFamily: "Syne, sans-serif" }}
              >
                {group.category}
              </h3>
              {group.skills.map((skill, si) => (
                <SkillBar key={skill.name} {...skill} index={si} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Soft skills + AI tools */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="p-6 rounded-2xl border"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
          >
            <h3
              className="text-sm font-bold tracking-widest uppercase mb-5"
              style={{ color: "var(--accent)", fontFamily: "Syne, sans-serif" }}
            >
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.55 + i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-sm px-3 py-1.5 rounded-full border cursor-default"
                  style={{ borderColor: "var(--border-strong)", color: "var(--fg-muted)" }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="p-6 rounded-2xl border"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
          >
            <h3
              className="text-sm font-bold tracking-widest uppercase mb-5"
              style={{ color: "var(--accent)", fontFamily: "Syne, sans-serif" }}
            >
              AI Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {AI_TOOLS.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.65 + i * 0.07 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-sm px-3 py-1.5 rounded-full font-medium"
                  style={{ background: "var(--accent-light)", color: "var(--accent)" }}
                >
                  ✦ {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
