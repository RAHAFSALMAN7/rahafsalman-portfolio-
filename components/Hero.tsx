"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, GitFork, Link2, Mail, MapPin } from "lucide-react";
import { useRef } from "react";

const SOCIALS = [
  { icon: GitFork, href: "https://github.com/RAHAFSALMAN7", label: "GitHub" },
  { icon: Link2, href: "https://linkedin.com/in/rahaf-alsalman7", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rahafsahir22@gmail.com", label: "Email" },
];

const TAGS = ["React.js", "Next.js", "TypeScript", "UI/UX", "FastAPI"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circle top-right */}
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Small circle bottom-left */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20"
      >
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm mb-8 border"
          style={{ borderColor: "var(--border)", color: "var(--fg-muted)", background: "var(--card)" }}
        >
          <MapPin size={13} style={{ color: "var(--accent)" }} />
          Nablus, Palestine
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
          Open to work
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-none tracking-tight"
          style={{ fontFamily: "Syne, sans-serif", color: "var(--fg)" }}
        >
          Rahaf
          <br />
          <span style={{ color: "var(--accent)" }}>Salman</span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8"
        >
          <span
            className="text-lg sm:text-xl font-medium"
            style={{ color: "var(--fg-muted)", fontFamily: "Syne, sans-serif" }}
          >
            Frontend Developer
          </span>
          <span className="w-1 h-1 rounded-full" style={{ background: "var(--border-strong)" }} />
          <span className="text-lg sm:text-xl" style={{ color: "var(--fg-subtle)" }}>
            CS Graduate · Software Engineering
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-xl text-base sm:text-lg leading-relaxed mb-10"
          style={{ color: "var(--fg-muted)" }}
        >
          Building scalable, production-ready web products for real clients.
          Passionate about clean code, intuitive interfaces, and turning ideas into
          polished digital experiences.
        </motion.p>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {TAGS.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.07 }}
              className="px-3 py-1.5 rounded-full text-xs font-medium border"
              style={{
                borderColor: "var(--border)",
                color: "var(--fg-muted)",
                background: "var(--card)",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03, boxShadow: "0 12px 40px var(--shadow-strong)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm"
            style={{ background: "var(--accent)", fontFamily: "Syne, sans-serif" }}
          >
            View Projects
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >→</motion.span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border transition-colors"
            style={{
              borderColor: "var(--border-strong)",
              color: "var(--fg)",
              fontFamily: "Syne, sans-serif",
            }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center gap-4"
        >
          {SOCIALS.map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 + i * 0.1 }}
              whileHover={{ y: -3, color: "var(--accent)" }}
              className="transition-colors"
              style={{ color: "var(--fg-subtle)" }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
          <span className="ml-2 text-xs" style={{ color: "var(--fg-subtle)" }}>
            Connect with me
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--fg-subtle)" }}
        whileHover={{ color: "var(--accent)" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
