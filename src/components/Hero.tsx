"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { HeroSection as HeroData } from "@/lib/types";

const GamepadSVG = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="6" x2="10" y1="12" y2="12" />
    <line x1="8" x2="8" y1="10" y2="14" />
    <line x1="15" x2="15.01" y1="13" y2="13" />
    <line x1="18" x2="18.01" y1="11" y2="11" />
    <rect width="20" height="12" x="2" y="6" rx="2" />
  </svg>
);

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
  "top-left": "-top-[5%] -left-[10%] md:-top-[10%] md:-left-[5%]",
  "top-right": "-top-[15%] -right-[20%] md:-top-[25%] md:-right-[15%]",
  "bottom-left": "-bottom-[15%] -left-[15%] md:-bottom-[20%] md:-left-[10%]",
  "bottom-right": "-bottom-[10%] -right-[10%] md:-bottom-[15%] md:-right-[5%]",
  "center-left": "top-[45%] left-[2%] md:top-[40%] md:-left-[10%] -translate-y-1/2",
  "center-right": "top-[45%] right-[2%] md:top-[40%] md:-right-[10%] -translate-y-1/2",
};

const sizeClasses: Record<string, string> = {
  sm: "w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64",
  md: "w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96",
  lg: "w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]",
  xl: "w-80 h-80 md:w-96 md:h-96 lg:w-[550px] lg:h-[550px]",
  "2xl": "w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px]",
  "3xl": "w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[900px] lg:h-[900px]",
};

const hardcodedDecorations = [
  { url: "/hero-gamepad.png", position: "top-left", size: "xl", rotate: -25 },
  { url: "/hero-keyboard.png", position: "top-right", size: "3xl", rotate: 18 },
  { url: "/hero-headphones.png", position: "bottom-left", size: "2xl", rotate: 20 },
  { url: "/hero-watch.png", position: "bottom-right", size: "xl", rotate: -35 },
];

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section
      id="hero"
      className="snap-section relative flex items-center justify-center overflow-hidden bg-surface-dark"
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
      {data.floatingObjects?.length ? data.floatingObjects.map((obj, i) => (
        <motion.div
          key={obj.position}
          custom={i}
          variants={floatVariants}
          initial="hidden"
          animate="visible"
          className={`absolute z-10 ${positionClasses[obj.position] || ""} ${sizeClasses[obj.size || "md"]} hidden md:block mix-blend-lighten`}
          style={{ rotate: obj.rotate ? `${obj.rotate}deg` : undefined }}
        >
          <Image
            src={obj.image.url}
            alt={obj.image.title}
            fill
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      )) : hardcodedDecorations.map((obj, i) => (
        <motion.div
          key={obj.position}
          custom={i}
          variants={floatVariants}
          initial="hidden"
          animate="visible"
          className={`absolute z-10 ${positionClasses[obj.position] || ""} ${sizeClasses[obj.size || "md"]} hidden md:block mix-blend-lighten pointer-events-none`}
          style={{ rotate: `${obj.rotate}deg` }}
        >
          <Image
            src={obj.url}
            alt={`Decoration ${i}`}
            fill
            className="object-contain"
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
        {/* Name badge + year row */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 md:gap-6 mb-4 md:mb-6"
        >
          <span className="flex items-center gap-3 px-5 py-2 border border-surface/20 rounded-full text-[10px] md:text-xs font-heading uppercase tracking-[0.3em] text-surface/60 bg-surface-dark/20 backdrop-blur-sm shadow-sm">
            <div className="w-6 h-6 flex items-center justify-center bg-accent rounded-full text-primary shadow-[0_0_10px_rgba(255,77,0,0.5)]">
              <GamepadSVG className="w-3.5 h-3.5" />
            </div>
            {data.name}
          </span>
          <span className="text-surface/30 font-heading text-sm md:text-base tracking-wider">
            {data.year}
          </span>
        </motion.div>

        {/* Main heading line 1 */}
        <motion.div variants={itemVariants} className="relative inline-block">
          <h1 className="font-heading text-7xl md:text-[10rem] lg:text-[12rem] font-extrabold leading-[0.85] tracking-tight text-accent">
            {data.headingLine1}
          </h1>
        </motion.div>

        {/* Small label middle */}
        <motion.p
          variants={itemVariants}
          className="font-heading text-[10px] md:text-xs uppercase tracking-[0.4em] text-surface/40 my-2 md:my-3"
        >
          {data.label}
        </motion.p>

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
