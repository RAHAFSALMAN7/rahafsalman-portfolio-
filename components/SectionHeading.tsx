"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="mb-14 md:mb-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-4"
      >
        <span
          className="text-xs font-bold tracking-widest uppercase"
          style={{ color: "var(--accent)", fontFamily: "Syne, sans-serif" }}
        >
          {label}
        </span>
        <span className="flex-1 h-px max-w-[60px]" style={{ background: "var(--accent)", opacity: 0.4 }} />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-black"
        style={{ fontFamily: "Syne, sans-serif", color: "var(--fg)" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base md:text-lg max-w-2xl"
          style={{ color: "var(--fg-muted)" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
