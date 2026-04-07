"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Project } from "@/lib/types";
import VideoPlayer from "./VideoPlayer";

function isVideo(contentType: string) {
  return contentType.startsWith("video/");
}

const typeColors: Record<string, string> = {
  Game: "bg-accent/90",
  Clip: "bg-surface-dark/80",
  Outdoor: "bg-accent-light/90",
};

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

interface Props {
  project: Project;
  nextProject: Project;
}

export default function ProjectDetailClient({ project, nextProject }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const totalSections = 4;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const sectionHeight = container.clientHeight;
      const current = Math.round(scrollTop / sectionHeight);
      setActiveSection(Math.min(current, totalSections - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="snap-container">
      {/* Section dots navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 hidden md:flex">
        {Array.from({ length: totalSections }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              containerRef.current?.scrollTo({
                top: i * window.innerHeight,
                behavior: "smooth",
              });
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeSection === i
                ? "bg-accent scale-125"
                : "bg-surface/30 hover:bg-surface/50"
            }`}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>

      {/* Back button */}
      <Link
        href="/#projects"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 text-surface/60 hover:text-accent transition-colors group"
      >
        <svg
          className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="text-xs font-heading uppercase tracking-[0.2em]">
          Back
        </span>
      </Link>

      {/* ===== SECTION 1: Hero / Intro ===== */}
      <section className="snap-section relative flex items-center bg-surface-dark overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-20 right-[15%] w-16 h-16 bg-accent/20 rotate-45 hidden lg:block" />
        <div className="absolute bottom-32 left-[10%] w-10 h-10 bg-accent/10 rounded-full hidden lg:block" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: text info */}
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <span
                className={`px-3 py-1.5 text-[11px] font-heading font-bold uppercase tracking-wider text-surface ${typeColors[project.projectType] || "bg-primary/90"}`}
              >
                {project.projectType}
              </span>
              <span className="text-surface/40 text-sm font-heading">
                Project {String(project.order).padStart(2, "0")} / {project.category}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] tracking-tight text-surface mb-8"
            >
              {project.title}
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="prose prose-lg prose-invert max-w-lg text-surface/70"
            >
              {documentToReactComponents(project.description)}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-[11px] font-heading font-bold uppercase tracking-wider text-surface/60 border border-surface/15"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-6 mt-10 text-sm text-surface/40"
            >
              <span className="font-heading font-bold text-accent text-lg">
                {project.year}
              </span>
            </motion.div>
          </div>

          {/* Right: main visual */}
          <motion.div
            variants={fadeUp}
            className="relative aspect-[4/3] lg:aspect-square"
          >
            {project.heroVideo ? (
              <VideoPlayer
                src={project.heroVideo.url}
                poster={project.thumbnail.url}
                className="absolute inset-0 rounded-sm overflow-hidden"
              />
            ) : (
              <Image
                src={project.thumbnail.url}
                alt={project.title}
                fill
                priority
                className="object-cover rounded-sm"
              />
            )}
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-surface/30 font-heading">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-surface/30 to-transparent" />
        </motion.div>
      </section>

      {/* ===== SECTION 2: Gallery / Media ===== */}
      <section className="snap-section relative flex items-center bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="text-accent font-heading text-xs font-semibold uppercase tracking-[0.3em] mb-4"
            >
              Gallery
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-4xl md:text-6xl font-extrabold text-surface mb-16"
            >
              Visual Showcase
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="grid md:grid-cols-2 gap-6"
            >
              {project.media.map((item, i) => (
                <div
                  key={`${item.url}-${i}`}
                  className="relative aspect-video overflow-hidden bg-surface-dark/50 rounded-sm"
                >
                  {isVideo(item.contentType) ? (
                    <VideoPlayer
                      src={item.url}
                      className="absolute inset-0"
                    />
                  ) : (
                    <Image
                      src={item.url}
                      alt={item.title || `${project.title} media ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              ))}
              {/* Also show thumbnail as gallery item if only few media */}
              {project.media.length < 2 && (
                <div className="relative aspect-video overflow-hidden bg-surface-dark/50 rounded-sm">
                  <Image
                    src={project.thumbnail.url}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 3: Results / Impact ===== */}
      <section className="snap-section relative flex items-center bg-surface-dark overflow-hidden">
        <div className="absolute top-[20%] right-[8%] w-24 h-24 border border-accent/10 rotate-12 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="text-accent font-heading text-xs font-semibold uppercase tracking-[0.3em] mb-4"
            >
              Impact
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-4xl md:text-6xl font-extrabold text-surface mb-16"
            >
              Key Results
            </motion.h2>

            {/* Extract metrics from tags */}
            <motion.div
              variants={fadeUp}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {project.tags
                .filter(
                  (t) =>
                    t.includes("+") ||
                    t.includes("M") ||
                    t.includes("K") ||
                    t.includes("Hours") ||
                    t.includes("Attendees") ||
                    t.includes("VND")
                )
                .map((metric) => (
                  <div
                    key={metric}
                    className="p-8 border border-surface/10 group hover:border-accent/30 transition-colors"
                  >
                    <p className="font-heading text-3xl md:text-4xl font-extrabold text-accent mb-2">
                      {metric}
                    </p>
                    <p className="text-surface/40 text-sm">Achieved</p>
                  </div>
                ))}
            </motion.div>

            {/* Description */}
            <motion.div
              variants={fadeUp}
              className="prose prose-lg prose-invert max-w-3xl text-surface/60"
            >
              {documentToReactComponents(project.description)}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 4: Next Project ===== */}
      <section className="snap-section relative flex items-center justify-center bg-primary overflow-hidden">
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group w-full h-full flex items-center justify-center"
        >
          <div className="text-center px-6">
            <p className="text-accent font-heading text-xs font-semibold uppercase tracking-[0.3em] mb-6">
              Next Project
            </p>
            <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold text-surface group-hover:text-accent transition-colors duration-500">
              {nextProject.title}
            </h2>
            <div className="flex items-center justify-center gap-4 mt-8">
              <span
                className={`px-3 py-1.5 text-[11px] font-heading font-bold uppercase tracking-wider text-surface ${typeColors[nextProject.projectType] || "bg-primary/90"}`}
              >
                {nextProject.projectType}
              </span>
              <span className="text-surface/40 text-sm font-heading">
                {nextProject.category}
              </span>
            </div>
            <motion.div
              animate={{ x: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-12 inline-flex items-center gap-2 text-accent"
            >
              <span className="text-sm font-heading uppercase tracking-[0.2em]">
                View Project
              </span>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.div>
          </div>
        </Link>
      </section>
    </div>
  );
}
