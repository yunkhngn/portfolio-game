"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Project } from "@/lib/types";
import VideoPlayer from "./VideoPlayer";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

function isVideo(contentType: string) {
  return contentType.startsWith("video/");
}

type DisplayMediaItem =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster?: string; alt: string }
  | { kind: "youtube"; src: string; alt: string };

function getYouTubeEmbedUrl(input?: string): string | null {
  if (!input) return null;
  const url = input.trim();
  if (!url) return null;

  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&]+)/,
    /(?:youtu\.be\/)([^?&]+)/,
    /(?:youtube\.com\/embed\/)([^?&]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return `https://www.youtube.com/embed/${match[1]}`;
  }
  return null;
}

const proseClasses =
  "prose prose-sm prose-invert prose-p:my-0.5 prose-p:text-[13px] prose-p:relative prose-p:pl-4 prose-p:before:content-['▹'] prose-p:before:absolute prose-p:before:left-0 prose-p:before:text-accent/60 prose-ul:my-1 prose-li:my-0.5 prose-li:text-[13px] prose-ul:list-disc prose-ul:ml-4 text-surface/75 leading-relaxed max-w-none";

function sectionHeading(label: string) {
  return (
    <h3 className="font-heading text-[10px] font-bold text-accent uppercase mb-1.5 flex items-center gap-1.5 tracking-[0.15em]">
      <span className="w-1 h-1 bg-accent rounded-full inline-block"></span>
      {label}
    </h3>
  );
}

function MediaCard({ item }: { item: DisplayMediaItem }) {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden border-[3px] border-surface shadow-[10px_10px_0_var(--color-accent)] bg-surface-dark">
      {item.kind === "video" ? (
        <VideoPlayer src={item.src} poster={item.poster} className="absolute inset-0" />
      ) : item.kind === "youtube" ? (
        <iframe
          src={item.src}
          title={item.alt}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 1024px) 92vw, 34vw"
          quality={72}
          className="object-cover"
        />
      )}
    </div>
  );
}

function CountUp({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const match = text.match(/^([^\d]*)([\d.]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const numericString = match ? match[2] : null;
  const suffix = match ? match[3] : text;
  const numberPart = numericString ? parseFloat(numericString) : null;

  const count = useMotionValue(0);
  const display = useTransform(count, (latest) => {
    if (numericString && numericString.includes(".")) {
      return prefix + latest.toFixed(1) + suffix;
    }
    return prefix + Math.floor(latest) + suffix;
  });

  useEffect(() => {
    if (isInView && numberPart !== null) {
      const controls = animate(count, numberPart, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, numberPart, count]);

  if (numberPart === null) return <>{text}</>;
  return <motion.span ref={ref}>{display}</motion.span>;
}

function MetricsBar({
  metrics,
}: {
  metrics: { value: string; label: string }[];
}) {
  if (!metrics.length) return null;

  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-3 lg:p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-3">
        {metrics.map((metric, idx) => (
          <div
            key={`${metric.value}-${metric.label}-${idx}`}
            className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-3 transition-all hover:border-accent/60 hover:bg-accent/10"
          >
            <p className="font-heading text-surface text-2xl lg:text-3xl font-black leading-none">
              <CountUp text={metric.value} />
            </p>
            <p className="mt-1 text-[10px] lg:text-[11px] uppercase tracking-[0.18em] text-surface/65 font-bold">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function normalizeBrandSlug(category?: string): string {
  const raw = category?.trim().toLowerCase() || "";
  if (raw === "branding") return "crossfire-legends";
  return raw;
}

export default function Projects({ projects }: { projects: Project[] }) {
  const [openBrand, setOpenBrand] = useState<string | null>(null);
  const BRAND_SECTIONS = [
    { slug: "crossfire-legends", title: "Crossfire: Legends", localIcon: "/appIcon/crossfire.png" },
    { slug: "tam-quoc-huyen-tuong", title: "Tam Quốc Huyền Tướng", localIcon: "/appIcon/tam-quoc.webp" },
    { slug: "danh-tuong-3q", title: "Danh Tướng 3Q", localIcon: "/appIcon/danh-tuong.png" },
    { slug: "ueh", title: "UEH", localIcon: "/appIcon/ueh.jpg" },
  ] as const;

  const brandLogos = BRAND_SECTIONS.map((brand) => {
    const brandProjects = projects.filter(
      (project) => normalizeBrandSlug(project.category) === brand.slug
    );
    return brandProjects[0]?.appIcon?.url || brand.localIcon;
  });

  return (
    <section id="branding" className="snap-section relative overflow-hidden bg-surface-dark py-16 lg:py-24">
      {/* Background Dots */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* HUGE BRANDING BANNER */}
        <div className="relative w-full py-16 sm:py-20 lg:py-40 flex items-center justify-center mb-16 lg:mb-24 rounded-[2rem] lg:rounded-[3rem] bg-accent overflow-hidden select-none shadow-2xl border-4 border-surface/10">
          {/* Subtle grid background inside banner */}
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(28,25,23,1) 1px, transparent 1px), linear-gradient(90deg, rgba(28,25,23,1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          
          {/* Floating app icons */}
          {brandLogos.map((src, i) => {
            const positions = [
              { top: "6%", left: "6%" },      // Crossfire
              { top: "6%", right: "6%" },     // Tam Quoc
              { bottom: "10%", left: "10%" }, // Danh Tuong
              { bottom: "10%", right: "10%" }, // UEH
            ];
            const angles = [-15, 12, -18, 20];
            const delay = [0, 0.4, 0.2, 0.6];
            return (
              <motion.div
                key={`floating-icon-${i}`}
                className={`absolute w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-44 lg:h-44 rounded-xl md:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-[10px] border-[#1C1A19] bg-[#1C1A19] z-0 ${
                  i >= 2 ? "hidden sm:block" : ""
                }`}
                initial={{ opacity: 0, scale: 0.5, rotate: angles[i] - 15 }}
                whileInView={{ opacity: 1, scale: 1, rotate: angles[i] }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay[i] },
                  opacity: { duration: 0.6, delay: 0.2 },
                  scale: { type: "spring", delay: 0.2 },
                  rotate: { type: "spring", delay: 0.2 }
                }}
                style={positions[i]}
              >
                <Image src={src} fill alt="Brand icon" className="object-cover" />
              </motion.div>
            );
          })}

          {/* Elegant Text Container */}
          <motion.div 
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative z-10 flex flex-col items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            {/* Tag/Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 md:mb-6 bg-[#1C1A19] text-accent px-4 md:px-6 py-1.5 md:py-2.5 rounded-full text-[10px] md:text-xs lg:text-sm font-black uppercase tracking-[0.25em] shadow-xl"
            >
              Project List
            </motion.div>

            <h2 className="font-heading text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black tracking-tight text-[#1C1A19] text-center uppercase leading-[0.8]"
                style={{
                  textShadow: "6px 6px 0px rgba(0,0,0,0.15)"
                }}
            >
              BRANDING
            </h2>
            
            <div className="mt-8 md:mt-10 lg:mt-12">
              <p className="text-white font-heading font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-xs sm:text-sm md:text-xl lg:text-2xl drop-shadow-md text-center">
                Brand Marketing
              </p>
            </div>
          </motion.div>
        </div>

        <div className="space-y-3">
          {BRAND_SECTIONS.map((brand) => {
            const brandProjects = projects.filter(
              (project) => normalizeBrandSlug(project.category) === brand.slug
            );
            const brandIcon = brandProjects[0]?.appIcon;
            const brandIconSrc = brandIcon?.url || brand.localIcon;
            const isOpen = openBrand === brand.slug;

            return (
              <article key={brand.slug} className="border border-white/10 rounded-xl bg-black/20 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenBrand((prev) => (prev === brand.slug ? null : brand.slug))}
                  className="w-full text-left px-4 lg:px-6 py-4 flex items-center gap-4 hover:bg-white/5 transition-colors"
                >
                  <div className="h-20 w-20 shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-black/40 relative">
                    <Image
                      src={brandIconSrc}
                      alt={`${brand.title} app icon`}
                      fill
                      sizes="80px"
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center flex-wrap gap-3 mb-1.5">
                      <span className="px-3 py-1 rounded-full border border-accent/30 text-accent text-[10px] uppercase tracking-[0.2em] font-black bg-accent/5">
                        {brand.slug}
                      </span>
                      <span className="text-surface/40 text-[11px] font-bold uppercase tracking-widest">
                        {brandProjects.length} project{brandProjects.length > 1 ? "s" : ""}
                      </span>
                    </div>
                    <h3 className="font-heading text-surface uppercase tracking-tight leading-none text-2xl md:text-4xl font-black truncate">
                      {brand.title}
                    </h3>
                  </div>

                  <span className="text-surface/70 text-xl leading-none">{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen ? (
                  <div className="px-4 lg:px-6 pb-5 lg:pb-6">
                    <div className="h-px bg-white/10 mb-5" />
                    <div className="space-y-6">
                      {brandProjects.length === 0 ? (
                        <p className="text-surface/60 text-sm">No projects in this brand yet.</p>
                      ) : (
                        brandProjects.map((project, projectIndex) => (
                          <div key={project.slug} className="border border-white/10 rounded-xl bg-black/15 p-4 lg:p-5">
                            <div className="flex items-center gap-3 mb-4">
                              <span className="text-surface/40 text-[11px] font-bold uppercase tracking-widest">
                                Project {String(projectIndex + 1).padStart(2, "0")}
                              </span>
                              <span className="text-accent font-heading font-black text-[13px] tracking-tighter">
                                {project.year}
                              </span>
                              <h4 className="font-heading text-surface uppercase tracking-tight text-xl md:text-2xl font-black truncate">
                                {project.title}
                              </h4>
                            </div>

                            <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                              <div className="lg:col-span-5">
                                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 lg:p-6 space-y-5">
                                  {project.situation && (
                                    <div>
                                      {sectionHeading("Situation")}
                                      <div className={proseClasses}>{documentToReactComponents(project.situation)}</div>
                                    </div>
                                  )}
                                  {project.myScope && (
                                    <div className="pt-4 border-t border-white/[0.06]">
                                      {sectionHeading("My Scope")}
                                      <div className={proseClasses}>{documentToReactComponents(project.myScope)}</div>
                                    </div>
                                  )}
                                  {project.whatIveDone && (
                                    <div className="pt-4 border-t border-white/[0.06]">
                                      {sectionHeading("What I've Done")}
                                      <div className={proseClasses}>{documentToReactComponents(project.whatIveDone)}</div>
                                    </div>
                                  )}
                                  {project.result && (
                                    <div className="pt-4 border-t border-white/[0.06]">
                                      {sectionHeading("Result")}
                                      <div className={proseClasses}>{documentToReactComponents(project.result)}</div>
                                    </div>
                                  )}
                                  {project.keyLearning && (
                                    <div className="pt-4 border-t border-accent/20 bg-accent/[0.03] -mx-5 lg:-mx-6 px-5 lg:px-6 pb-1 rounded-b-xl">
                                      <div className="flex items-center gap-2 mb-1.5">
                                        <h3 className="font-heading text-[10px] font-bold text-accent uppercase tracking-[0.15em]">
                                          Key Learning
                                        </h3>
                                      </div>
                                      <div className={proseClasses}>{documentToReactComponents(project.keyLearning)}</div>
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="lg:col-span-7 mt-4 lg:mt-8 relative flex items-center justify-center">
                                {(() => {
                                  const displayMedia: DisplayMediaItem[] = [];
                                  displayMedia.push({
                                    kind: "image",
                                    src: project.thumbnail.url,
                                    alt: project.title,
                                  });

                                  project.media.forEach((m, idx) => {
                                    if (displayMedia.length >= 3) return;
                                    if (isVideo(m.contentType)) {
                                      return;
                                    } else {
                                      displayMedia.push({
                                        kind: "image",
                                        src: m.url,
                                        alt: `${project.title} detail ${idx + 1}`,
                                      });
                                    }
                                  });

                                  const video4EmbedUrl = getYouTubeEmbedUrl(project.video4);
                                  if (video4EmbedUrl) {
                                    displayMedia.push({
                                      kind: "youtube",
                                      src: video4EmbedUrl,
                                      alt: `${project.title} YouTube video`,
                                    });
                                  } else if (project.heroVideo) {
                                    displayMedia.push({
                                      kind: "video",
                                      src: project.heroVideo.url,
                                      poster: project.thumbnail.url,
                                      alt: `${project.title} hero video`,
                                    });
                                  }

                                  return (
                                    <div className="w-full space-y-4">
                                      <MetricsBar metrics={project.metrics || []} />
                                      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 lg:p-4">
                                        <div className="grid grid-cols-1 gap-3 lg:gap-4">
                                          {displayMedia.map((item, idx) => (
                                            <div key={`${project.slug}-media-${idx}`}>
                                              <MediaCard item={item} />
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })()}
                              </div>
                            </div>

                            {project.assets?.length ? (
                              <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-3 lg:p-4">
                                <p className="text-[10px] uppercase tracking-[0.2em] font-black text-accent mb-3">
                                  Assets
                                </p>
                                <div className="columns-1 md:columns-2 xl:columns-3 gap-3 lg:gap-4">
                                  {project.assets.map((asset, idx) => (
                                    <div
                                      key={`${project.slug}-asset-${idx}`}
                                      className="mb-3 lg:mb-4 break-inside-avoid overflow-hidden rounded-lg border border-white/10 bg-black/20"
                                    >
                                      {isVideo(asset.contentType) ? (
                                        <VideoPlayer src={asset.url} className="w-full aspect-video" />
                                      ) : (
                                        <img
                                          src={asset.url}
                                          alt={`${project.title} asset ${idx + 1}`}
                                          className="w-full h-auto object-cover"
                                          loading="lazy"
                                        />
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
