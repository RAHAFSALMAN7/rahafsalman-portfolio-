"use client";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, GitFork, Link2, Mail, MapPin } from "lucide-react";
import { EXPERIENCES, HERO_STACK, PROFILE, PROJECTS } from "@/lib/data";

const SOCIALS = [
  { icon: GitFork, href: PROFILE.github, label: "GitHub" },
  { icon: Link2, href: PROFILE.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Background */}
      <div className="dot-grid pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--accent), transparent)" }}
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        {/* Left */}
        <div>
          <motion.a
            {...fadeUp(0)}
            href={PROFILE.current.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-card/80 py-1 pl-1 pr-3 text-xs text-muted backdrop-blur transition-colors hover:border-line-strong"
          >
            <span className="flex items-center gap-1.5 rounded-full bg-accent-soft px-2 py-0.5 font-medium text-accent">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Now
            </span>
            {PROFILE.current.role} at {PROFILE.current.company}
            <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>

          <motion.h1
            {...fadeUp(0.08)}
            className="text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-fg sm:text-6xl md:text-7xl"
          >
            Hi, I&apos;m {PROFILE.firstName}.
            <br />
            I build{" "}
            <span className="font-serif font-normal italic tracking-normal text-accent">beautiful</span>
            <br className="hidden sm:block" /> web experiences.
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="mt-7 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {PROFILE.role} crafting fast, polished, production-ready websites for real
            clients — from agency sites and Shopify e-commerce stores to AI products.
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary group">
              View my work
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.32)} className="mt-10 flex items-center gap-5 text-subtle">
            <span className="flex items-center gap-1.5 text-xs">
              <MapPin size={13} className="text-accent" />
              {PROFILE.location}
            </span>
            <span className="h-4 w-px bg-line-strong" />
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors hover:text-fg"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: profile card */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="card relative overflow-hidden p-6 sm:p-7"
          style={{ boxShadow: "0 24px 64px var(--shadow-strong)" }}
        >
          <div className="flex items-center gap-4">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-semibold text-white"
              style={{ background: "linear-gradient(135deg, var(--accent), #e879a6)" }}
            >
              {PROFILE.initials}
            </div>
            <div>
              <div className="font-semibold text-fg">{PROFILE.name}</div>
              <div className="text-sm text-muted">{PROFILE.role}</div>
            </div>
            <span className="ml-auto flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Active
            </span>
          </div>

          <div className="mt-6 rounded-2xl bg-surface p-4">
            <div className="eyebrow mb-2">Currently</div>
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="font-medium text-fg">{PROFILE.current.company}</div>
                <div className="text-sm text-muted">{PROFILE.current.role}</div>
              </div>
              <div className="font-mono text-xs text-subtle">since {PROFILE.current.since}</div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-surface p-4">
              <div className="text-3xl font-semibold tracking-tight text-fg">{PROJECTS.length}</div>
              <div className="text-xs text-muted">Live projects</div>
            </div>
            <div className="rounded-2xl bg-surface p-4">
              <div className="text-3xl font-semibold tracking-tight text-fg">{EXPERIENCES.length}</div>
              <div className="text-xs text-muted">Roles & internships</div>
            </div>
          </div>

          <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee flex w-max gap-2">
              {[...HERO_STACK, ...HERO_STACK].map((t, i) => (
                <span key={i} className="chip whitespace-nowrap bg-card">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
