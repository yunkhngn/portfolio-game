"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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

export default function ProjectCard({ project }: { project: Project }) {
  const thumb = project.thumbnail;
  const videoSrc =
    project.heroVideo?.url ||
    (isVideo(thumb.contentType) ? thumb.url : undefined);

  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.article
        whileHover={{ y: -12 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden bg-surface shadow-card hover:shadow-card-hover transition-shadow duration-300 cursor-pointer"
      >
        <div className="aspect-[4/3] relative overflow-hidden">
          {videoSrc ? (
            <VideoPlayer
              src={videoSrc}
              poster={!isVideo(thumb.contentType) ? thumb.url : undefined}
              className="absolute inset-0"
            />
          ) : (
            <Image
              src={thumb.url}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          )}

          <span
            className={`absolute top-4 left-4 z-10 px-3 py-1.5 text-[11px] font-heading font-bold uppercase tracking-wider text-surface shadow-md ${typeColors[project.projectType] || "bg-primary/90"}`}
          >
            {project.projectType}
          </span>

          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="text-surface">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-light mb-2">
                {project.category}
              </p>
              <h3 className="font-heading text-2xl font-extrabold drop-shadow-md">
                {project.title}
              </h3>
              <div className="flex gap-2 mt-3 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold px-2.5 py-1 bg-surface/15 backdrop-blur-sm border border-surface/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
