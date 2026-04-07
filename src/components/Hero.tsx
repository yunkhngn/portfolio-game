"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { HeroSection as HeroData } from "@/lib/types";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const floatVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.5 + i * 0.15, ease: "easeOut" as const },
  }),
};

const positionClasses: Record<string, string> = {
  "top-left": "top-[8%] left-[5%] md:top-[10%] md:left-[8%]",
  "top-right": "top-[6%] right-[5%] md:top-[8%] md:right-[6%]",
  "bottom-left": "bottom-[10%] left-[3%] md:bottom-[12%] md:left-[6%]",
  "bottom-right": "bottom-[8%] right-[3%] md:bottom-[10%] md:right-[5%]",
  "center-left": "top-[45%] left-[2%] md:top-[40%] md:left-[4%] -translate-y-1/2",
  "center-right": "top-[45%] right-[2%] md:top-[40%] md:right-[4%] -translate-y-1/2",
};

const sizeClasses: Record<string, string> = {
  sm: "w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32",
  md: "w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44",
  lg: "w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56",
};

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-surface-dark"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating objects */}
      {data.floatingObjects?.map((obj, i) => (
        <motion.div
          key={obj.position}
          custom={i}
          variants={floatVariants}
          initial="hidden"
          animate="visible"
          className={`absolute z-10 ${positionClasses[obj.position] || ""} ${sizeClasses[obj.size || "md"]} hidden md:block`}
          style={{ rotate: obj.rotate ? `${obj.rotate}deg` : undefined }}
        >
          <Image
            src={obj.image.url}
            alt={obj.image.title}
            fill
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      ))}

      {/* Center typography */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center px-6"
      >
        {/* Small label above */}
        <motion.p
          variants={itemVariants}
          className="font-heading text-[10px] md:text-xs uppercase tracking-[0.4em] text-surface/40 mb-4 md:mb-6"
        >
          {data.label}
        </motion.p>

        {/* Main heading line 1 */}
        <motion.div variants={itemVariants} className="relative inline-block">
          <h1 className="font-heading text-7xl md:text-[10rem] lg:text-[12rem] font-extrabold leading-[0.85] tracking-tight text-accent">
            {data.headingLine1}
          </h1>
        </motion.div>

        {/* Name badge + year row */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 md:gap-6 my-2 md:my-3"
        >
          <span className="px-4 py-1.5 border border-surface/20 text-[10px] md:text-xs font-heading uppercase tracking-[0.3em] text-surface/60">
            {data.name}
          </span>
          <span className="text-surface/30 font-heading text-sm md:text-base tracking-wider">
            {data.year}
          </span>
        </motion.div>

        {/* Main heading line 2 */}
        <motion.div variants={itemVariants}>
          <h1 className="font-heading text-7xl md:text-[10rem] lg:text-[12rem] font-extrabold leading-[0.85] tracking-tight text-accent">
            {data.headingLine2}
          </h1>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 md:mt-24"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-surface/30 font-heading">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-surface/30 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative dots (top center like the reference) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
        <div className="w-2 h-2 rounded-full bg-accent" />
        <div className="w-2 h-2 rounded-full bg-accent" />
        <div className="w-2 h-2 rounded-full bg-accent" />
      </div>
    </section>
  );
}
