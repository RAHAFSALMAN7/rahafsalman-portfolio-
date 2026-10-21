import { ArrowUp, GitFork, Link2, Mail } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/data";

const SOCIALS = [
  { icon: GitFork, href: PROFILE.github, label: "GitHub" },
  { icon: Link2, href: PROFILE.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#hero" className="text-xl font-semibold tracking-tight text-fg">
            {PROFILE.name}
            <span className="text-accent">.</span>
          </a>

          <nav className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-fg">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-subtle sm:flex-row">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js & Framer Motion.
          </p>
          <p>{PROFILE.location} 🇵🇸</p>
          <a href="#hero" className="flex items-center gap-1.5 font-medium text-fg hover:text-accent">
            <ArrowUp size={13} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
