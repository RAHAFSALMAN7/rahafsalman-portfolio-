"use client";
import { motion } from "framer-motion";
import { GitFork, Link2, Mail, ArrowUp } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: GitFork, href: "https://github.com/RAHAFSALMAN7", label: "GitHub" },
  { icon: Link2, href: "https://linkedin.com/in/rahaf-alsalman7", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rahafsahir22@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <a
            href="#hero"
            className="text-2xl font-black"
            style={{ fontFamily: "Syne, sans-serif", color: "var(--fg)" }}
          >
            RS<span style={{ color: "var(--accent)" }}>.</span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm transition-colors hover:text-[var(--accent)]"
                style={{ color: "var(--fg-muted)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, color: "var(--accent)" }}
                className="transition-colors"
                style={{ color: "var(--fg-subtle)" }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--fg-subtle)" }}>
            © {new Date().getFullYear()} Rahaf Salman. Built with Next.js & Framer Motion.
          </p>
          <p className="text-xs" style={{ color: "var(--fg-subtle)" }}>
            Nablus, Palestine 🇵🇸
          </p>

          {/* Back to top */}
          <motion.a
            href="#hero"
            whileHover={{ y: -3 }}
            className="flex items-center gap-1.5 text-xs font-medium"
            style={{ color: "var(--accent)" }}
          >
            <ArrowUp size={13} />
            Back to top
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
