"use client";

import { motion } from "framer-motion";
import type { MarqueeItem } from "@/lib/types";

export default function Marquee({ items }: { items: MarqueeItem[] }) {
  // Join with a badass ASCII-style divider
  const text = items.map((i) => i.text).join("  ///  ");
  const repeated = `${text}  ///  ${text}  ///  `;

  return (
    <div className="relative w-full bg-accent text-primary py-3 overflow-hidden border-t-4 border-surface shadow-[0_0_30px_rgba(255,77,0,0.5)]">
      {/* Striped overlay for Caution Tape / Acid graphic look */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
        style={{ 
          backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 10px, #000 10px, #000 20px)" 
        }} 
      />
      
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="flex whitespace-nowrap items-center relative z-10"
      >
        <span className="font-heading text-xl md:text-2xl font-black uppercase tracking-[0.25em] px-4">
          {repeated}
        </span>
        <span className="font-heading text-xl md:text-2xl font-black uppercase tracking-[0.25em] px-4">
          {repeated}
        </span>
      </motion.div>
    </div>
  );
}
