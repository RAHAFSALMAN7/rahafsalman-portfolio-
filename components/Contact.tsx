"use client";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Copy } from "lucide-react";
import { Reveal } from "./Reveal";
import { PROFILE } from "@/lib/data";

const CONTACT_INFO = [
  { label: "Phone", value: PROFILE.phone, href: PROFILE.phoneHref },
  { label: "GitHub", value: PROFILE.githubHandle, href: PROFILE.github },
  { label: "LinkedIn", value: PROFILE.linkedinHandle, href: PROFILE.linkedin },
  { label: "Location", value: PROFILE.location, href: null },
];

const inputClass =
  "w-full border-0 border-b-2 border-bg/25 bg-transparent px-0 py-3 text-lg text-bg outline-none transition-colors placeholder:text-bg/30 focus:border-accent";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  // Opens the visitor's email app with the message pre-filled
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section bg-fg text-bg">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center justify-between border-t-2 border-bg pt-3 font-mono text-xs uppercase tracking-[0.16em]">
            <span>(07)</span>
            <span>Contact</span>
          </div>
          <h2 className="display mt-8" style={{ fontSize: "clamp(4rem, 14vw, 12rem)" }}>
            Let&apos;s build
            <br />
            something <span className="bg-bg px-[0.12em] text-fg">great</span>
          </h2>
        </Reveal>

        {/* Email */}
        <Reveal delay={0.1} className="mt-14 flex flex-wrap items-center justify-between gap-4 border-y border-bg/20 py-8">
          <a
            href={`mailto:${PROFILE.email}`}
            className="group flex items-center gap-3 break-all text-2xl font-medium sm:text-4xl"
          >
            {PROFILE.email}
            <ArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={32} />
          </a>
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 border-2 border-bg/30 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.14em] transition-colors hover:border-accent hover:bg-accent hover:text-on-accent"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied" : "Copy email"}
          </button>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          {/* Info */}
          <Reveal>
            <dl>
              {CONTACT_INFO.map(({ label, value, href }) => (
                <div key={label} className="grid grid-cols-[110px_1fr] items-center gap-4 border-b border-bg/20 py-5">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-bg/50">{label}</dt>
                  <dd className="truncate">
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 font-medium decoration-current decoration-2 underline-offset-4 hover:underline"
                      >
                        {value}
                        <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100" />
                      </a>
                    ) : (
                      <span className="font-medium">{value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em]">
              <span className="h-2.5 w-2.5 animate-pulse bg-accent" />
              Open to new opportunities
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bg/50">Name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Jane Smith"
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bg/50">Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="jane@example.com"
                    className={inputClass}
                  />
                </label>
              </div>
              <label className="block">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bg/50">Message</span>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClass} resize-none`}
                />
              </label>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-bg/50">Opens your email app with the message ready to send.</p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 bg-accent px-7 py-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-on-accent transition-transform hover:-translate-y-0.5"
                >
                  Send message
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
