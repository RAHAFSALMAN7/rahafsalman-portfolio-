"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { Code2, Layers, Zap, Users } from "lucide-react";

const TRAITS = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable, and readable code is always a priority." },
  { icon: Layers, title: "Full Stack Thinking", desc: "From API design to pixel-perfect UI — I connect the dots end-to-end." },
  { icon: Zap, title: "Performance First", desc: "Optimizing for speed, accessibility, and great user experiences." },
  { icon: Users, title: "Client-Focused", desc: "Worked with Saudi Arabian market clients — delivering real business value." },
];

const STATS = [
  { value: "5+", label: "Roles & Internships" },
  { value: "3", label: "Client Sites Deployed" },
  { value: "2025", label: "CS Graduate" },
  { value: "100%", label: "Remote Ready" },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-pad" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="About" title="Who I Am" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--fg-muted)" }}>
              I'm a Computer Science graduate from{" "}
              <span className="font-semibold" style={{ color: "var(--fg)" }}>An-Najah National University</span>,
              specializing in Software Engineering. My focus is on crafting modern web applications
              that are fast, beautiful, and solve real problems.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--fg-muted)" }}>
              At <span className="font-semibold" style={{ color: "var(--accent)" }}>Zuccess</span>, I worked as a
              full-time Web Developer — not an intern — building and deploying production websites for
              clients across the Middle East. I've touched everything from React frontends to deployment
              pipelines on Netlify, Vercel, and GoDaddy.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Beyond the code, I'm passionate about design systems, API integration, and the craft of
              building digital products that genuinely impress users.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 rounded-2xl border px-4 py-3"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                Based in Nablus, but I have the ability and flexibility to work with clients across all
                cities in the West Bank.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                >
                  <div
                    className="text-3xl font-black mb-1"
                    style={{ fontFamily: "Syne, sans-serif", color: "var(--accent)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs" style={{ color: "var(--fg-subtle)" }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRAITS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 16px 48px var(--shadow-strong)" }}
                className="p-5 rounded-2xl border transition-all"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "var(--accent-light)" }}
                >
                  <Icon size={18} style={{ color: "var(--accent)" }} />
                </div>
                <h3
                  className="font-bold mb-2 text-sm"
                  style={{ fontFamily: "Syne, sans-serif", color: "var(--fg)" }}
                >
                  {title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
