"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { HeroSection as HeroData } from "@/lib/types";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {data.backgroundVideo ? (
        <video
          src={data.backgroundVideo.url}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      ) : data.backgroundImage ? (
        <Image
          src={data.backgroundImage.url}
          alt=""
          fill
          priority
          className="object-cover opacity-20"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/50 via-surface-dark/70 to-surface-dark/95" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <motion.h1
          variants={itemVariants}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.95] tracking-tight text-white drop-shadow-lg"
        >
          {data.heading}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-8 text-lg md:text-2xl text-white/80 max-w-2xl mx-auto font-medium"
        >
          {data.subheading}
        </motion.p>
        {data.ctaText && (
          <motion.a
            variants={itemVariants}
            href="#projects"
            className="mt-12 inline-block px-10 py-5 bg-accent text-surface font-heading text-sm uppercase tracking-[0.15em] shadow-elevated hover:bg-accent-light hover:shadow-card-hover transition-all duration-300"
          >
            {data.ctaText}
          </motion.a>
        )}
      </motion.div>
    </section>
  );
}
