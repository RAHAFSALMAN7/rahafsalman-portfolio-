"use client";
import { useState } from "react";
import { ArrowUpRight, Check, Copy, GitFork, Link2, Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { PROFILE } from "@/lib/data";

const CONTACT_INFO = [
  { icon: Phone, label: "Phone", value: PROFILE.phone, href: PROFILE.phoneHref },
  { icon: GitFork, label: "GitHub", value: PROFILE.githubHandle, href: PROFILE.github },
  { icon: Link2, label: "LinkedIn", value: PROFILE.linkedinHandle, href: PROFILE.linkedin },
  { icon: MapPin, label: "Location", value: PROFILE.location, href: null },
];

const inputClass =
  "w-full rounded-2xl border border-line bg-bg px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-subtle focus:border-accent";

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
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeading
          index="06"
          label="Contact"
          title={
            <>
              Let&apos;s build something <span className="font-serif font-normal italic tracking-normal text-accent">great</span>.
            </>
          }
          subtitle="Have a project in mind, a role to fill, or just want to connect? I typically respond within 24 hours."
        />

        <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <Reveal className="flex flex-col gap-4">
            <div className="card p-7">
              <div className="eyebrow mb-3">Email me</div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a href={`mailto:${PROFILE.email}`} className="break-all text-lg font-medium text-fg hover:text-accent sm:text-xl">
                  {PROFILE.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:border-line-strong hover:text-fg"
                >
                  {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>

            <div className="card divide-y divide-line">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface text-muted transition-colors group-hover:text-accent">
                      <Icon size={16} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-subtle">{label}</div>
                      <div className="truncate text-sm font-medium text-fg">{value}</div>
                    </div>
                    {href && <ArrowUpRight size={15} className="text-subtle transition-colors group-hover:text-fg" />}
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-6 py-4"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className="group flex items-center gap-4 px-6 py-4">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-2.5 px-2 text-sm text-muted">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Open to new opportunities and collaborations
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card space-y-4 p-7 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="eyebrow mb-2 block">Name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Jane Smith"
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className="eyebrow mb-2 block">Email</span>
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
                <span className="eyebrow mb-2 block">Message</span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClass} resize-none`}
                />
              </label>
              <button type="submit" className="btn-primary w-full !py-3.5">
                <Send size={15} />
                Send message
              </button>
              <p className="flex items-center justify-center gap-1.5 text-xs text-subtle">
                <Mail size={12} />
                Opens your email app with the message ready to send
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
