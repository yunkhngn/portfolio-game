import { motion } from "framer-motion";
import type { MarqueeItem } from "@/lib/types";

export default function MarqueeBand({ items }: { items: MarqueeItem[] }) {
  // Add separators and double the array for seamless loop
  const displayItems = items.flatMap(item => [item.text, "+"]);
  const fullItemsPath = [...displayItems, ...displayItems];

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
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {fullItemsPath.map((word, i) => (
            <span
              key={i}
              className={`font-heading text-lg md:text-2xl font-black uppercase tracking-[0.2em] ${
                word === "+"
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
