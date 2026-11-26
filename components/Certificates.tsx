"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CERTIFICATES, type Certificate } from "@/lib/data";

function Viewer({ cert, onClose }: { cert: Certificate; onClose: () => void }) {
  const [page, setPage] = useState(0);
  const total = cert.images.length;
  const prev = useCallback(() => setPage((p) => (p - 1 + total) % total), [total]);
  const next = useCallback(() => setPage((p) => (p + 1) % total), [total]);

  // Close on Escape, flip pages with the arrow keys, and stop the page behind from scrolling
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (total > 1 && e.key === "ArrowLeft") prev();
      if (total > 1 && e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose, prev, next, total]);

  const image = cert.images[page];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[200] flex flex-col bg-[#0b0b0b]/95 text-[#f1efe8] backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      onClick={onClose}
    >
      <div className="container-x flex items-center justify-between gap-4 border-b border-white/15 py-4" onClick={(e) => e.stopPropagation()}>
        <div className="min-w-0">
          <div className="truncate font-semibold">{cert.title}</div>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
            {cert.issuer} · {cert.date}
            {total > 1 && ` · ${page + 1}/${total}`}
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/30 transition-colors hover:bg-white hover:text-black"
        >
          <X size={18} />
        </button>
      </div>

      <div className="relative flex-1">
        <motion.div
          key={image.src}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-4 sm:inset-10"
        >
          <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-contain" onClick={(e) => e.stopPropagation()} />
        </motion.div>

        {total > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute top-1/2 left-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/40 transition-colors hover:bg-white hover:text-black"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute top-1/2 right-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/40 transition-colors hover:bg-white hover:text-black"
            >
              <ArrowRight size={18} />
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}

export function Certificates() {
  const [open, setOpen] = useState<Certificate | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section id="certificates" className="section bg-surface">
      <div className="container-x">
        <SectionHeading
          index="06"
          label="Certificates"
          title={
            <>
              Proof of <span className="mark">learning</span>
            </>
          }
          subtitle="Programs, trainings, and workshops I've completed. Click any card to view the full certificate."
        />

        <div className="cell-grid sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((cert, i) => (
            <Reveal key={cert.title} delay={Math.min(i, 5) * 0.05} className="group flex flex-col bg-bg">
              <button
                onClick={() => setOpen(cert)}
                className="relative block aspect-[4/3] w-full overflow-hidden border-b border-line bg-surface text-left"
                aria-label={`View ${cert.title} certificate`}
              >
                <Image
                  src={cert.images[0].src}
                  alt={cert.images[0].alt}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-accent/0 transition-colors duration-300 group-hover:bg-accent/85">
                  <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-on-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Maximize2 size={14} />
                    View{cert.images.length > 1 ? ` (${cert.images.length})` : ""}
                  </span>
                </span>
                <span className="absolute top-3 left-3 bg-fg px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-bg">
                  {cert.kind}
                </span>
              </button>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                  <span>{cert.date}</span>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-lg leading-snug font-semibold text-fg">{cert.title}</h3>
                <div className="mt-1 text-sm text-muted">{cert.issuer}</div>
                {(cert.detail || cert.verifyUrl) && (
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-5">
                    {cert.detail ? <span className="tag">{cert.detail}</span> : <span />}
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-fg underline-offset-4 hover:underline"
                      >
                        Verify
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>{open && <Viewer key={open.title} cert={open} onClose={close} />}</AnimatePresence>
    </section>
  );
}
