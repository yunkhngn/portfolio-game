"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Industries Covered" },
  { value: 100, suffix: "%", label: "Passion Driven" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
      {/* Ambient accent glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <ScrollReveal>
          <p className="text-accent font-heading text-[10px] font-bold uppercase tracking-[0.4em] mb-4 text-center">
            By the Numbers
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-b border-white/10 mt-10">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={0.1 * i}>
              <div
                className={`group flex flex-col items-center justify-center py-14 lg:py-20 transition-colors duration-500 hover:bg-white/[0.03] ${
                  i < stats.length - 1 ? "border-r border-white/10" : ""
                }`}
              >
                <span className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-surface tracking-tighter leading-none mb-4 group-hover:text-accent transition-colors duration-500">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-surface/40 group-hover:text-surface/70 transition-colors duration-500">
                  {stat.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
