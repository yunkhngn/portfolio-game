"use client";

import { motion } from "framer-motion";

const words = [
  "MARKETING",
  "✦",
  "STRATEGY",
  "✦",
  "CREATIVE",
  "✦",
  "BRANDING",
  "✦",
  "STORYTELLING",
  "✦",
  "DIGITAL",
  "✦",
  "CONTENT",
  "✦",
  "CAMPAIGNS",
  "✦",
];

export default function MarqueeBand() {
  // Double the array for seamless loop
  const items = [...words, ...words];

  return (
    <section className="relative py-8 bg-accent overflow-hidden select-none">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex items-center gap-8 md:gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {items.map((word, i) => (
            <span
              key={i}
              className={`font-heading text-lg md:text-2xl font-black uppercase tracking-[0.2em] ${
                word === "✦"
                  ? "text-white/40 text-sm"
                  : "text-white"
              }`}
            >
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
