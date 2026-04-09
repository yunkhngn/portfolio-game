"use client";

import ScrollReveal from "./ScrollReveal";

export default function Motto() {
  return (
    <section id="what-drives-me" className="snap-section relative py-28 lg:py-40 bg-[#F5F4F0] overflow-hidden flex items-center min-h-screen">
      {/* Decorative diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 80px, rgba(0,0,0,1) 80px, rgba(0,0,0,1) 81px)",
        }}
      />

      {/* Giant decorative number */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 font-heading text-[300px] lg:text-[500px] font-black text-primary/[0.02] leading-none select-none pointer-events-none">
        &amp;
      </div>

      <div className="max-w-[1100px] mx-auto px-6 lg:px-10 relative z-10 w-full text-center">
        <ScrollReveal>
          <p className="text-accent font-heading text-[10px] font-bold uppercase tracking-[0.4em] mb-10 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-accent/40 inline-block"></span>
            What Drives Me
            <span className="w-8 h-px bg-accent/40 inline-block"></span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <blockquote className="font-heading text-3xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] tracking-tight text-primary">
            &ldquo;Good marketing makes the company look smart.{" "}
            <span className="text-accent">Great marketing</span> makes the
            customer feel smart.&rdquo;
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="w-10 h-px bg-primary/20"></span>
            <span className="text-[11px] font-heading font-bold uppercase tracking-[0.25em] text-primary/40">
              — Joe Chernov
            </span>
            <span className="w-10 h-px bg-primary/20"></span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
