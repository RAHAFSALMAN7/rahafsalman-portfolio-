"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { NAV_LINKS, PROFILE } from "@/lib/data";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Highlight the link for whichever section is in the middle of the viewport
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#hero" className="display text-2xl text-fg">
          {PROFILE.name}
          <span className="ml-1 inline-block h-2.5 w-2.5 bg-accent align-baseline" />
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                  active === link.href ? "text-fg" : "text-subtle hover:text-fg"
                }`}
              >
                <span className={active === link.href ? "bg-accent px-1 text-on-accent" : ""}>0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="flex h-10 w-10 items-center justify-center border border-line text-fg transition-colors hover:border-line-strong"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href="#contact" className="btn-primary hidden !px-4 !py-2.5 lg:inline-flex">
            Hire me
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center border border-line text-fg lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-bg lg:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <li key={link.href} className="border-b border-line">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="container-x flex items-baseline gap-4 py-4 text-fg"
                >
                  <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                  <span className="display text-4xl">{link.label}</span>
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
