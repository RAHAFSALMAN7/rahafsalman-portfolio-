"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Mail, Phone, MapPin, GitFork, Link2, Send, CheckCircle } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "rahafsahir22@gmail.com",
    href: "mailto:rahafsahir22@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+970 595546850",
    href: "tel:+970595546850",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nablus, Palestine",
    href: null,
  },
  {
    icon: GitFork,
    label: "GitHub",
    value: "RAHAFSALMAN7",
    href: "https://github.com/RAHAFSALMAN7",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "rahaf-alsalman7",
    href: "https://linkedin.com/in/rahaf-alsalman7",
  },
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Contact"
          title="Let's Talk"
          subtitle="Open to full-time roles, freelance projects, and exciting collaborations."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-base leading-relaxed mb-10" style={{ color: "var(--fg-muted)" }}>
              Whether you have a project in mind, a role to fill, or just want to connect —
              I'd love to hear from you. I typically respond within 24 hours.
            </p>

            <div className="space-y-5">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "var(--accent-light)" }}
                  >
                    <Icon size={17} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: "var(--fg-subtle)" }}>{label}</div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-medium transition-colors hover:underline"
                        style={{ color: "var(--fg)" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium" style={{ color: "var(--fg)" }}>{value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-10 inline-flex items-center gap-3 px-4 py-3 rounded-xl border"
              style={{ borderColor: "var(--border)", background: "var(--card)" }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ background: "#22c55e" }}
              />
              <span className="text-sm font-medium" style={{ color: "var(--fg)" }}>
                Available for new opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl border text-center"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                <CheckCircle size={40} className="mx-auto mb-4" style={{ color: "#22c55e" }} />
                <h3
                  className="text-xl font-black mb-2"
                  style={{ fontFamily: "Syne, sans-serif", color: "var(--fg)" }}
                >
                  Message Sent!
                </h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl border space-y-5"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
              >
                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "Jane Smith" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      className="block text-xs font-semibold mb-1.5 uppercase tracking-wider"
                      style={{ color: "var(--fg-muted)", fontFamily: "Syne, sans-serif" }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={(form as any)[field.name]}
                      onChange={(e) => setForm((f) => ({ ...f, [field.name]: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                      style={{
                        background: "var(--bg)",
                        borderColor: "var(--border)",
                        color: "var(--fg)",
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5 uppercase tracking-wider"
                    style={{ color: "var(--fg-muted)", fontFamily: "Syne, sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none"
                    style={{
                      background: "var(--bg)",
                      borderColor: "var(--border)",
                      color: "var(--fg)",
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-opacity disabled:opacity-70"
                  style={{ background: "var(--accent)", fontFamily: "Syne, sans-serif" }}
                >
                  {loading ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
