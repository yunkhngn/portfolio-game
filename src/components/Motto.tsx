"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const quoteLines = [
  { text: "“Good marketing makes the company look smart.", accent: false },
  { text: " Great marketing", accent: true },
  { text: " makes the customer feel smart.”", accent: false },
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.01 }
  },
};

export default function Motto() {
  return (
    <section className="snap-section relative py-20 lg:py-32 bg-[#F5F4F0] overflow-hidden flex items-center min-h-[70vh] lg:min-h-screen">
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
        
        <motion.blockquote
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="font-heading text-3xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.2] tracking-tight text-primary whitespace-pre-wrap"
        >
          {quoteLines.map((line, lineIndex) => (
            <span key={lineIndex} className={line.accent ? "text-accent" : ""}>
              {line.text.split("").map((char, charIndex) => (
                <motion.span key={charIndex} variants={charVariants}>
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.blockquote>

        <ScrollReveal delay={2}>
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
