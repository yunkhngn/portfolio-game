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

  // Shared prose styling for text blocks
  const proseClasses = "prose prose-sm prose-invert prose-p:my-0.5 prose-p:text-[13px] prose-p:relative prose-p:pl-4 prose-p:before:content-['▹'] prose-p:before:absolute prose-p:before:left-0 prose-p:before:text-accent/60 prose-ul:my-1 prose-li:my-0.5 prose-li:text-[13px] prose-ul:list-disc prose-ul:ml-4 text-surface/75 leading-relaxed max-w-none";

  const sectionHeading = (label: string) => (
    <h3 className="font-heading text-[10px] font-bold text-accent uppercase mb-1.5 flex items-center gap-1.5 tracking-[0.15em]">
      <span className="w-1 h-1 bg-accent rounded-full inline-block"></span>
      {label}
    </h3>
  );

  return (
    <section
      className={`snap-section relative flex items-center overflow-hidden lg:h-screen ${isEven ? "bg-surface-dark" : "bg-primary"
        }`}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full relative z-10 py-10 lg:py-0">
        {/* === Top Row: Header === */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between items-start gap-6 mb-8 lg:mb-12">
          <div className="flex-1 max-w-2xl">
            <ScrollReveal direction="up">
              <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mb-4">
                <span className="px-3 py-1 rounded-full border border-accent/30 text-accent text-[10px] uppercase tracking-[0.2em] font-black bg-accent/5">
                  {project.projectType}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-surface/40 text-[11px] font-bold uppercase tracking-widest">
                    Project {String(index + 1).padStart(2, "0")} / {project.category}
                  </span>
                  <span className="w-1 h-1 bg-surface/20 rounded-full"></span>
                  <span className="text-accent font-heading font-black text-[13px] tracking-tighter">
                    {project.year}
                  </span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.05}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-black leading-[0.9] tracking-tighter text-surface uppercase break-words">
                {project.title}
              </h2>
            </ScrollReveal>
          </div>

          {/* Tools anchored to the right but visually connected */}
          <ScrollReveal direction="up" delay={0.1} className="lg:mb-2 shrink-0">
            <div className="flex flex-col lg:items-end gap-2">
              <span className="text-[10px] text-surface/30 font-bold uppercase tracking-[0.2em]">Keywords :</span>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-surface/5 border border-surface/10 rounded-md text-surface/80 text-[10px] font-bold uppercase tracking-widest hover:bg-accent/10 hover:border-accent/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* === Main Content: Text + Media === */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">

          {/* Left: Structured Text Panel */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={0.15}>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 lg:p-6 overflow-y-auto max-h-[55vh] lg:max-h-[60vh] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-surface/15 [&::-webkit-scrollbar-thumb]:rounded-full space-y-5">

                {/* Situation */}
                {project.situation && (
                  <div>
                    {sectionHeading("Situation")}
                    <div className={proseClasses}>
                      {documentToReactComponents(project.situation)}
                    </div>
                  </div>
                )}

                {/* Scope */}
                {project.myScope && (
                  <div className="pt-4 border-t border-white/[0.06]">
                    {sectionHeading("My Scope")}
                    <div className={proseClasses}>
                      {documentToReactComponents(project.myScope)}
                    </div>
                  </div>
                )}

                {/* What I've Done */}
                {project.whatIveDone && (
                  <div className="pt-4 border-t border-white/[0.06]">
                    {sectionHeading("What I've Done")}
                    <div className={proseClasses}>
                      {documentToReactComponents(project.whatIveDone)}
                    </div>
                  </div>
                )}

                {/* Result */}
                {project.result && (
                  <div className="pt-4 border-t border-white/[0.06]">
                    {sectionHeading("Result")}
                    <div className={proseClasses}>
                      {documentToReactComponents(project.result)}
                    </div>
                  </div>
                )}

                {/* Key Learning */}
                {project.keyLearning && (
                  <div className="pt-4 border-t border-accent/20 bg-accent/[0.03] -mx-5 lg:-mx-6 px-5 lg:px-6 pb-1 rounded-b-xl">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-heading text-[10px] font-bold text-accent uppercase tracking-[0.15em]">
                        Key Learning
                      </h3>
                      <div className="flex gap-[1px]">
                        {[...Array(5)].map((_, i) => <span key={i} className="text-accent/60 text-[8px]">★</span>)}
                      </div>
                    </div>
                    <div className={proseClasses}>
                      {documentToReactComponents(project.keyLearning)}
                    </div>
                  </div>
                )}

              </div>
            </ScrollReveal>
          </div>

          {/* Right: Media Collage */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[300px] lg:min-h-[55vh]">
            <ScrollReveal direction="up" delay={0.2} className="w-full h-full relative">
              {/* Ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-accent/15 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

              {/* Sparkle decorations */}
              <div className="absolute top-[8%] right-[12%] text-surface/20 text-xl">✦</div>
              <div className="absolute bottom-[15%] left-[8%] text-surface/20 text-lg">✧</div>

              {/* Media 1 */}
              <div
                className={`z-20 w-[85%] md:w-[75%] hover:z-40 transition-all duration-700 hover:scale-[1.03] group/media1 ${project.media.length > 0 ? "absolute top-[5%] left-[2%] -rotate-2" : "relative mx-auto"}`}
              >
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border-[3px] border-surface shadow-[12px_12px_0_var(--color-accent)] bg-surface-dark group-hover/media1:shadow-[16px_16px_0_var(--color-accent)] transition-all duration-500">
                  {project.heroVideo ? (
                    <VideoPlayer src={project.heroVideo.url} poster={project.thumbnail.url} className="absolute inset-0" />
                  ) : (
                    <Image src={project.thumbnail.url} alt={project.title} fill className="object-cover" />
                  )}
                </div>
                {project.image1Title && (
                  <div className="absolute -bottom-3 right-6 bg-surface text-primary px-3 py-1 rounded-sm text-[9px] font-black tracking-widest uppercase shadow-lg border border-primary/10">
                    {project.image1Title}
                  </div>
                )}
              </div>

              {/* Media 2 */}
              {project.media.length > 0 && (
                <div
                  className="absolute z-10 w-[75%] md:w-[65%] hover:z-40 transition-all duration-700 hover:scale-[1.03] group/media2 bottom-[2%] md:bottom-[5%] right-[0%] md:right-[3%] rotate-4"
                >
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border-[3px] border-surface shadow-[12px_12px_0_var(--color-accent)] bg-surface-dark group-hover/media2:shadow-[16px_16px_0_var(--color-accent)] transition-all duration-500">
                    {isVideo(project.media[0].contentType) ? (
                      <VideoPlayer src={project.media[0].url} className="absolute inset-0" />
                    ) : (
                      <Image src={project.media[0].url} alt={`${project.title} detail`} fill className="object-cover" />
                    )}
                  </div>
                  {project.image2Title && (
                    <div className="absolute -top-3 left-4 bg-surface text-primary px-3 py-1 rounded-sm text-[9px] font-black tracking-widest uppercase shadow-lg border border-primary/10">
                      {project.image2Title}
                    </div>
                  )}
                </div>
              )}
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div id="branding">
      {projects.map((project, i) => (
        <ProjectSection key={project.slug} project={project} index={i} />
      ))}
    </div>
  );
}
