import { Code2, Layers, MapPin, Users, Zap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { PROFILE } from "@/lib/data";

const TRAITS = [
  { icon: Code2, title: "Clean Code", desc: "Maintainable, scalable, and readable code is always a priority." },
  { icon: Layers, title: "Full Stack Thinking", desc: "From API design to pixel-perfect UI — I connect the dots end-to-end." },
  { icon: Zap, title: "Performance First", desc: "Optimizing for speed, accessibility, and great user experiences." },
  { icon: Users, title: "Client-Focused", desc: "Delivered for clients across the Middle East, including the Saudi market." },
];

export function About() {
  return (
    <section id="about" className="section border-t border-line bg-surface">
      <div className="container-x">
        <SectionHeading
          index="01"
          label="About"
          title={
            <>
              Code with a <span className="font-serif font-normal italic tracking-normal text-accent">designer&apos;s</span> eye.
            </>
          }
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {/* Bio */}
          <Reveal className="card p-7 sm:p-9 lg:col-span-2">
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                I&apos;m a graduate of the{" "}
                <span className="font-medium text-fg">Computer Science Apprenticeship Program</span> at{" "}
                <span className="font-medium text-fg">An-Najah National University</span>. I focus on crafting modern web applications that are fast, beautiful,
                and solve real problems.
              </p>
              <p>
                Since September 2026, I&apos;ve been a Web Developer at{" "}
                <a
                  href={PROFILE.current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent underline-offset-4 hover:underline"
                >
                  255 Advertising
                </a>
                , improving the agency&apos;s official website and building client sites like La Rose Aroma,
                Al-Amour, and Roseme.
              </p>
              <p>
                I also build <span className="font-medium text-fg">e-commerce stores on Shopify</span> —
                customizing themes, setting up products and payments, and launching stores that are ready
                to sell.
              </p>
              <p>
                Before that, at <span className="font-medium text-fg">Zuccess</span>, I worked full-time
                building and deploying production websites for clients across the Middle East — from React
                frontends to deployments on Netlify, Vercel, and GoDaddy.
              </p>
            </div>
          </Reveal>

          {/* Side column */}
          <div className="grid gap-4">
            <Reveal delay={0.08} className="card p-7">
              <MapPin size={18} className="mb-4 text-accent" />
              <div className="font-medium text-fg">{PROFILE.location}</div>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Flexible to work with clients across all cities in the West Bank, and remotely worldwide.
              </p>
            </Reveal>
            <Reveal delay={0.16} className="card grid grid-cols-2 gap-4 p-7">
              <div>
                <div className="text-3xl font-semibold tracking-tight text-fg">2025</div>
                <div className="text-xs text-muted">CS Apprenticeship grad</div>
              </div>
              <div>
                <div className="text-3xl font-semibold tracking-tight text-fg">100%</div>
                <div className="text-xs text-muted">Remote ready</div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Traits */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRAITS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              key={title}
              delay={0.05 * i}
              className="card group p-6 transition-colors hover:border-line-strong"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform group-hover:-rotate-6">
                <Icon size={18} />
              </div>
              <h3 className="mb-1.5 text-base font-semibold text-fg">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
