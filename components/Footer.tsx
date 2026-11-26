import { ArrowUp } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/data";

const SOCIALS = [
  { href: PROFILE.github, label: "GitHub" },
  { href: PROFILE.linkedin, label: "LinkedIn" },
  { href: `mailto:${PROFILE.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-fg text-bg">
      <div className="container-x">
        <div className="grid gap-10 border-t border-bg/20 py-12 md:grid-cols-3">
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-bg/50">Menu</div>
            <nav className="flex flex-col gap-1.5">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="w-fit text-sm decoration-current decoration-2 underline-offset-4 hover:underline">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-bg/50">Socials</div>
            <div className="flex flex-col gap-1.5">
              {SOCIALS.map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-fit text-sm decoration-current decoration-2 underline-offset-4 hover:underline">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:text-right">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-bg/50">Based in</div>
            <div className="text-sm">{PROFILE.location} 🇵🇸</div>
            <a
              href="#hero"
              className="mt-6 inline-flex items-center gap-2 border-2 border-bg/30 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.14em] transition-colors hover:border-accent hover:bg-accent hover:text-on-accent"
            >
              <ArrowUp size={14} />
              Back to top
            </a>
          </div>
        </div>

        <div className="display select-none overflow-hidden whitespace-nowrap text-center leading-[0.8]" style={{ fontSize: "clamp(3.5rem, 15.5vw, 15rem)" }}>
          {PROFILE.name}
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-bg/20 py-6 font-mono text-[11px] uppercase tracking-[0.14em] text-bg/50 sm:flex-row">
          <span>© {new Date().getFullYear()} {PROFILE.name}</span>
          <span>Built with Next.js & Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
