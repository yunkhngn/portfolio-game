"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const beliefs = [
  {
    number: "01",
    title: "Strategy First",
    description:
      "Every great campaign begins with a deep understanding of the audience, the market, and the brand's unique positioning.",
  },
  {
    number: "02",
    title: "Creative Bravery",
    description:
      "The work that truly moves people is the work that dares to be different — bold ideas backed by data and conviction.",
  },
  {
    number: "03",
    title: "Relentless Curiosity",
    description:
      "Marketing evolves every day. I stay hungry, keep learning, and treat every project as a chance to grow.",
  },
];

export default function Philosophy() {
  return (
    <section className="snap-section relative py-28 lg:py-40 bg-[#F5F4F0] overflow-hidden min-h-screen flex items-center">
      {/* Subtle diagonal lines pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(0,0,0,1) 60px, rgba(0,0,0,1) 61px)",
        }}
      />

      {/* Large decorative quote mark */}
      <div className="absolute top-16 right-10 lg:top-20 lg:right-24 text-[180px] lg:text-[320px] font-heading font-black text-primary/[0.03] leading-none select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 w-full">
        {/* Header */}
        <div className="max-w-4xl mb-20 lg:mb-28">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-black/5 rounded-full mb-8 shadow-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(255,77,0,0.8)]"></span>
              <span className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">
                My Philosophy
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[4.5rem] font-black leading-[0.95] tracking-tighter text-primary uppercase mb-8">
              I believe marketing
              <br />
              <span className="text-accent">is storytelling</span>
              <br />
              with purpose.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-primary/50 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Not just impressions and clicks — but meaningful connections between brands and the people they serve.
              Every project I take on is guided by three core principles.
            </p>
          </ScrollReveal>
        </div>

        {/* Belief Cards */}
        <div className="grid md:grid-cols-3 gap-0 border-t border-primary/10">
          {beliefs.map((belief, i) => (
            <ScrollReveal key={belief.number} delay={0.15 * i}>
              <div
                className={`group relative py-10 lg:py-14 px-6 lg:px-10 transition-colors duration-500 hover:bg-white/60 ${
                  i < beliefs.length - 1 ? "md:border-r border-primary/10" : ""
                } border-b md:border-b-0 border-primary/10 last:border-b-0`}
              >
                {/* Number */}
                <span className="font-heading text-[11px] font-black text-accent tracking-[0.3em] uppercase mb-6 block">
                  {belief.number}
                </span>

                {/* Title */}
                <h3 className="font-heading text-2xl md:text-3xl font-black text-primary uppercase tracking-tight mb-4 leading-tight group-hover:text-accent transition-colors duration-500">
                  {belief.title}
                </h3>

                {/* Description */}
                <p className="text-primary/60 text-sm md:text-[15px] leading-relaxed font-medium">
                  {belief.description}
                </p>

                {/* Hover indicator line */}
                <div className="absolute bottom-0 left-6 lg:left-10 right-6 lg:right-10 h-[2px] bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom accent line */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 lg:mt-24 flex items-center gap-6">
            <div className="h-px bg-primary/10 flex-1"></div>
            <span className="text-[10px] font-heading font-black uppercase tracking-[0.3em] text-primary/30">
              ✦ ✦ ✦
            </span>
            <div className="h-px bg-primary/10 flex-1"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
