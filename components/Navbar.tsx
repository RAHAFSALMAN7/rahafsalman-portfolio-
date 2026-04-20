"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 80], ["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 40));
    return unsub;
  }, [scrollY]);

  return (
    <>
      <motion.nav
        style={{ backgroundColor: navBg }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-xl font-bold"
            style={{ color: "var(--fg)", fontFamily: "Syne, sans-serif" }}
          >
            RS<span style={{ color: "var(--accent)" }}>.</span>
          </motion.a>

          {/* Desktop links */}
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <motion.a
                  href={link.href}
                  className="text-sm font-medium transition-colors"
                  style={{ color: "var(--fg-muted)" }}
                  whileHover={{ color: "var(--accent)" }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              </li>
            ))}
          </motion.ul>

          {/* Right actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <motion.button
              onClick={toggle}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors"
              style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{ background: "var(--accent)", fontFamily: "Syne, sans-serif" }}
            >
              Hire Me
            </motion.a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-9 h-9 flex items-center justify-center"
              style={{ color: "var(--fg)" }}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`fixed top-[65px] left-0 right-0 z-40 border-b md:hidden ${!open && "pointer-events-none"}`}
        style={{ background: "var(--bg)", borderColor: "var(--border)" }}
      >
        <ul className="flex flex-col p-6 gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium"
                style={{ color: "var(--fg-muted)", fontFamily: "Syne, sans-serif" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}
