"use client";

import { motion } from "framer-motion";
import type { MarqueeItem } from "@/lib/types";

export default function Marquee({ items }: { items: MarqueeItem[] }) {
  const text = items.map((i) => i.text).join(" \u2014 ");
  const repeated = `${text} \u2014 ${text} \u2014 `;

  return (
    <section className="py-6 bg-surface-dark text-surface overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        className="flex whitespace-nowrap"
      >
        <span className="font-heading text-lg md:text-2xl uppercase tracking-[0.15em] px-4">
          {repeated}
        </span>
        <span className="font-heading text-lg md:text-2xl uppercase tracking-[0.15em] px-4">
          {repeated}
        </span>
      </motion.div>
    </section>
  );
}
