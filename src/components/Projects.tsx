import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Project } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";
import VideoPlayer from "./VideoPlayer";

function isVideo(contentType: string) {
  return contentType.startsWith("video/");
}

const typeColors: Record<string, string> = {
  Game: "bg-accent/90",
  Clip: "bg-surface-dark/80",
  Outdoor: "bg-accent-light/90",
};

function ProjectSection({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <section
      className={`snap-section relative flex items-center overflow-hidden ${
        isEven ? "bg-surface-dark" : "bg-primary"
      }`}
    >
      {/* Decorative elements */}
      <div
        className={`absolute w-20 h-20 border border-accent/10 rotate-12 hidden lg:block ${
          isEven ? "top-20 right-[12%]" : "bottom-24 left-[10%]"
        }`}
      />
      <div
        className={`absolute w-8 h-8 bg-accent/10 rounded-full hidden lg:block ${
          isEven ? "bottom-32 left-[8%]" : "top-20 right-[8%]"
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-20 lg:py-0">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            isEven ? "" : "lg:direction-rtl"
          }`}
        >
          {/* Text side */}
          <div className={isEven ? "" : "lg:order-1"}>
            <ScrollReveal direction={isEven ? "left" : "right"}>
              <div className="flex items-center gap-4 mb-6">
                <span
                  className={`px-3 py-1.5 text-[11px] font-heading font-bold uppercase tracking-wider text-surface ${typeColors[project.projectType] || "bg-primary/90"}`}
                >
                  {project.projectType}
                </span>
                <span className="text-surface/40 text-sm font-heading">
                  Project {String(index + 1).padStart(2, "0")} /{" "}
                  {project.category}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction={isEven ? "left" : "right"} delay={0.1}>
              <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[0.9] tracking-tight text-surface mb-8">
                {project.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal direction={isEven ? "left" : "right"} delay={0.2}>
              <div className="prose prose-lg prose-invert max-w-lg text-surface/60 mb-8">
                {documentToReactComponents(project.description)}
              </div>
            </ScrollReveal>

            <ScrollReveal direction={isEven ? "left" : "right"} delay={0.3}>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[11px] font-heading font-bold uppercase tracking-wider text-surface/50 border border-surface/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction={isEven ? "left" : "right"} delay={0.35}>
              <span className="font-heading font-bold text-accent text-xl">
                {project.year}
              </span>
            </ScrollReveal>
          </div>

          {/* Visual side */}
          <div className={isEven ? "" : "lg:order-2"}>
            <ScrollReveal direction={isEven ? "right" : "left"} delay={0.15}>
              <div className="relative">
                {/* Main image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-elevated">
                  {project.heroVideo ? (
                    <VideoPlayer
                      src={project.heroVideo.url}
                      poster={project.thumbnail.url}
                      className="absolute inset-0"
                    />
                  ) : (
                    <Image
                      src={project.thumbnail.url}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Secondary media (offset card) */}
                {project.media.length > 0 && (
                  <div className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-8 w-2/5 aspect-[3/4] overflow-hidden rounded-sm shadow-card-hover border-4 border-surface-dark hidden md:block">
                    {isVideo(project.media[0].contentType) ? (
                      <VideoPlayer
                        src={project.media[0].url}
                        className="absolute inset-0"
                      />
                    ) : (
                      <Image
                        src={project.media[0].url}
                        alt={`${project.title} detail`}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div id="projects">
      {projects.map((project, i) => (
        <ProjectSection key={project.slug} project={project} index={i} />
      ))}
    </div>
  );
}
