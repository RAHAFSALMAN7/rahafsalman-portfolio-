"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { EXPERIENCES, HERO_STACK, PROFILE, PROJECTS } from "@/lib/data";

const STATS = [
  { value: String(PROJECTS.length).padStart(2, "0"), label: "Live projects" },
  { value: String(EXPERIENCES.length).padStart(2, "0"), label: "Roles & internships" },
  { value: "02", label: "Companies" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="container-x">
        {/* Top line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted"
        >
          <span>
            {PROFILE.role} — {PROFILE.location}
          </span>
          <span className="flex items-center gap-2 text-fg">
            <span className="h-2 w-2 animate-pulse bg-accent" />
            Available for work
          </span>
        </motion.div>

        {/* Giant name */}
        <h1 className="display mt-6 text-fg" style={{ fontSize: "clamp(4.5rem, 19vw, 17rem)" }}>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
            >
              {PROFILE.firstName}
            </motion.span>
          </span>

          {/* Second line: portrait on the left, last name on the right */}
          <span className="flex items-end justify-end gap-[0.08em] md:justify-between">
            <motion.span
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 0.9, delay: 0.35, ease }}
              className="relative hidden h-[0.8em] w-[0.8em] shrink-0 md:block"
            >
              <span className="absolute inset-0 translate-x-[0.03em] translate-y-[0.03em] bg-accent" />
              <span className="absolute inset-0 overflow-hidden border-2 border-line-strong">
                <Image
                  src="/rahaf.jpg"
                  alt={PROFILE.name}
                  fill
                  preload
                  sizes="(min-width: 768px) 260px, 0px"
                  className="object-cover grayscale-[15%]"
                />
              </span>
              <span className="absolute -top-3 -right-6 rotate-6 bg-fg px-2 py-1 font-mono text-[11px] tracking-[0.14em] whitespace-nowrap text-bg normal-case">
                ← that&apos;s me
              </span>
            </motion.span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.22, ease }}
              >
                <span className="mark">{PROFILE.lastName}</span>
              </motion.span>
            </span>
          </span>
        </h1>

        {/* Info strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
          className="mt-10 grid border-t-2 border-line-strong md:grid-cols-3"
        >
          <div className="border-b border-line py-6 md:border-r md:border-b-0 md:pr-8">
            <div className="relative mb-6 h-28 w-28 md:hidden">
              <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-accent" />
              <span className="absolute inset-0 overflow-hidden border-2 border-line-strong">
                <Image src="/rahaf.jpg" alt={PROFILE.name} fill sizes="112px" className="object-cover" />
              </span>
            </div>
            <div className="label mb-3">What I do</div>
            <p className="text-lg leading-snug text-fg">
              I build fast, polished websites for real clients — agency sites, Shopify stores, interactive 3D
              experiences, and AI products.
            </p>
          </div>
          <div className="border-b border-line py-6 md:border-r md:border-b-0 md:px-8">
            <div className="label mb-3">Currently</div>
            <a
              href={PROFILE.current.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-lg text-fg"
            >
              {PROFILE.current.role} @ {PROFILE.current.company}
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <div className="mt-1 font-mono text-xs text-subtle">since {PROFILE.current.since}</div>
          </div>
          <div className="flex flex-wrap items-center gap-3 py-6 md:pl-8">
            <a href="#projects" className="btn-primary group">
              View work
              <ArrowDownRight size={15} className="transition-transform group-hover:rotate-[-45deg]" />
            </a>
            <a href="#contact" className="btn-ghost">
              Contact
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 border-y border-line">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.08, ease }}
              className={`py-6 ${i > 0 ? "border-l border-line pl-4 sm:pl-8" : ""}`}
            >
              <div className="display text-5xl text-fg sm:text-7xl">{s.value}</div>
              <div className="label mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee band */}
      <div className="relative -left-[2%] mt-16 w-[104%] -rotate-1 overflow-hidden border-y-2 border-line-strong bg-accent py-4 text-on-accent">
        <div className="animate-marquee flex w-max items-center gap-8">
          {[...HERO_STACK, ...HERO_STACK, ...HERO_STACK, ...HERO_STACK].map((t, i) => (
            <span key={i} className="display flex items-center gap-8 whitespace-nowrap text-4xl md:text-5xl">
              {t}
              <span className="text-2xl">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
