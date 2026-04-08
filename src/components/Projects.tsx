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

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-12 lg:py-16">
        <div
          className={`grid lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center ${
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
              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[0.9] tracking-tight text-surface mb-6">
                {project.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal direction={isEven ? "left" : "right"} delay={0.2}>
              <div className="space-y-4 w-full p-6 lg:p-8 bg-surface-dark/40 backdrop-blur-md rounded-2xl border border-white/5 shadow-elevated relative overflow-hidden group mb-6 transition-all duration-500 hover:bg-surface-dark/60 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay"></div>
                
                {project.situation && (
                  <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                    <h3 className="font-heading text-sm font-bold text-accent uppercase mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block shadow-[0_0_8px_rgba(255,77,0,0.8)]"></span>
                      Situation
                    </h3>
                    <div className="prose prose-sm prose-invert prose-p:my-1 prose-ul:my-1 prose-li:my-0.5 prose-ul:list-disc prose-ul:ml-4 text-surface/90 leading-snug">
                      {documentToReactComponents(project.situation)}
                    </div>
                  </div>
                )}
                {project.myScope && (
                  <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 delay-75">
                    <h3 className="font-heading text-sm font-bold text-accent uppercase mb-2 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block shadow-[0_0_8px_rgba(255,77,0,0.8)]"></span>
                      My Scope
                    </h3>
                    <div className="prose prose-sm prose-invert prose-p:my-1 prose-ul:my-1 prose-li:my-0.5 prose-ul:list-disc prose-ul:ml-4 text-surface/90 leading-snug">
                      {documentToReactComponents(project.myScope)}
                    </div>
                  </div>
                )}
                {project.whatIveDone && (
                  <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 delay-100">
                    <h3 className="font-heading text-sm font-bold text-accent uppercase mb-2 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block shadow-[0_0_8px_rgba(255,77,0,0.8)]"></span>
                      What I've Done
                    </h3>
                    <div className="prose prose-sm prose-invert prose-p:my-1 prose-ul:my-1 prose-li:my-0.5 prose-ul:list-disc prose-ul:ml-4 text-surface/90 leading-snug">
                      {documentToReactComponents(project.whatIveDone)}
                    </div>
                  </div>
                )}
                {project.result && (
                  <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 delay-150">
                    <h3 className="font-heading text-sm font-bold text-accent uppercase mb-2 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block shadow-[0_0_8px_rgba(255,77,0,0.8)]"></span>
                      Result
                    </h3>
                    <div className="prose prose-sm prose-invert prose-p:my-1 prose-ul:my-1 prose-li:my-0.5 prose-ul:list-disc prose-ul:ml-4 text-surface/90 leading-snug">
                      {documentToReactComponents(project.result)}
                    </div>
                  </div>
                )}
                {project.keyLearning && (
                  <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 delay-200">
                    <h3 className="font-heading text-sm font-bold text-accent uppercase mb-2 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block shadow-[0_0_8px_rgba(255,77,0,0.8)]"></span>
                      Key Learning
                    </h3>
                    <div className="prose prose-sm prose-invert prose-p:my-1 prose-ul:my-1 prose-li:my-0.5 prose-ul:list-disc prose-ul:ml-4 text-surface/90 leading-snug">
                      {documentToReactComponents(project.keyLearning)}
                    </div>
                  </div>
                )}
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

          <div className={isEven ? "" : "lg:order-2"}>
            <ScrollReveal direction={isEven ? "right" : "left"} delay={0.15}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-3 group/img">
                  <div className="relative w-full max-w-[500px] aspect-[16/9] overflow-hidden rounded-xl border-2 border-surface/20 shadow-elevated transition-all duration-500 group-hover/img:border-accent/50 group-hover/img:shadow-[0_10px_40px_rgba(255,77,0,0.15)]">
                    {project.heroVideo ? (
                      <VideoPlayer src={project.heroVideo.url} poster={project.thumbnail.url} className="absolute inset-0" />
                    ) : (
                      <Image src={project.thumbnail.url} alt={project.title} fill className="object-cover transition-transform duration-[1.5s] ease-out group-hover/img:scale-110 blur-0" />
                    )}
                  </div>
                  {project.image1Title && (
                    <span className="bg-surface-dark/80 backdrop-blur-md border border-accent/20 text-primary px-8 py-2 rounded-full font-heading font-extrabold uppercase mb-2 text-[11px] tracking-[0.2em] shadow-xl -mt-8 relative z-10 transition-all duration-500 group-hover/img:-translate-y-1 group-hover/img:bg-accent group-hover/img:text-surface group-hover/img:border-accent">
                      {project.image1Title}
                    </span>
                  )}
                </div>

                {/* Main image 2 */}
                {project.media.length > 0 && (
                  <div className="flex flex-col items-center gap-3 group/img">
                    <div className="relative w-full max-w-[500px] aspect-[16/9] overflow-hidden rounded-xl border-2 border-surface/20 shadow-elevated transition-all duration-500 group-hover/img:border-accent/50 group-hover/img:shadow-[0_10px_40px_rgba(255,77,0,0.15)]">
                      {isVideo(project.media[0].contentType) ? (
                        <VideoPlayer src={project.media[0].url} className="absolute inset-0" />
                      ) : (
                        <Image src={project.media[0].url} alt={`${project.title} detail`} fill className="object-cover transition-transform duration-[1.5s] ease-out group-hover/img:scale-110 blur-0" />
                      )}
                    </div>
                    {project.image2Title && (
                      <span className="bg-surface-dark/80 backdrop-blur-md border border-accent/20 text-primary px-8 py-2 rounded-full font-heading font-extrabold uppercase text-[11px] tracking-[0.2em] shadow-xl -mt-8 relative z-10 transition-all duration-500 group-hover/img:-translate-y-1 group-hover/img:bg-accent group-hover/img:text-surface group-hover/img:border-accent">
                        {project.image2Title}
                      </span>
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
