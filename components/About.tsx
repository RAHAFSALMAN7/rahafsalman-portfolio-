import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { PROFILE } from "@/lib/data";

const FACTS = [
  { label: "Based in", value: PROFILE.location },
  { label: "Currently", value: `${PROFILE.current.role} @ ${PROFILE.current.company}` },
  { label: "Education", value: "CS Apprenticeship — An-Najah, 2025" },
  { label: "Focus", value: "Next.js · Shopify · 3D & Motion" },
  { label: "Work mode", value: "On-site in the West Bank · Remote worldwide" },
];

const TRAITS = [
  { title: "Clean code", desc: "Maintainable, scalable, and readable code is always a priority." },
  { title: "3D & motion", desc: "Interactive 3D scenes and smooth animations that bring brands to life." },
  { title: "Performance", desc: "Optimizing for speed, accessibility, and great user experiences." },
  { title: "Client-focused", desc: "Delivered for clients across the Middle East and the U.S." },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading
          index="01"
          label="About"
          title={
            <>
              Code with a <span className="mark">designer&apos;s</span> eye
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <Reveal className="space-y-6 text-xl leading-relaxed text-muted md:text-2xl">
            <p className="text-fg">
              I&apos;m a frontend developer and a graduate of the Computer Science Apprenticeship Program at
              An-Najah National University, specializing in Software Engineering.
            </p>
            <p>
              At <span className="text-fg">255 Advertising</span> I improve the agency&apos;s official website
              and build client sites like La Rose Aroma, Al-Amour, Roseme, and the 3D Kanaan Trucking website —
              plus Shopify stores that are ready to sell.
            </p>
            <p>
              Before that, at <span className="text-fg">Zuccess</span>, I built and deployed production websites
              for clients across the Middle East, from React frontends to Netlify, Vercel, and GoDaddy.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="border-t-2 border-line-strong">
              {FACTS.map((f) => (
                <div key={f.label} className="grid grid-cols-[110px_1fr] gap-4 border-b border-line py-4">
                  <dt className="label pt-0.5">{f.label}</dt>
                  <dd className="text-sm font-medium text-fg">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Traits */}
        <div className="cell-grid mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {TRAITS.map(({ title, desc }, i) => (
            <Reveal
              key={title}
              delay={0.05 * i}
              className="group flex min-h-56 flex-col justify-between p-6 transition-colors duration-300 hover:bg-accent"
            >
              <span className="font-mono text-xs text-subtle group-hover:text-on-accent">0{i + 1}</span>
              <div>
                <h3 className="display mb-3 text-4xl text-fg group-hover:text-on-accent">{title}</h3>
                <p className="text-sm leading-relaxed text-muted group-hover:text-on-accent">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
