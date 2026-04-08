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
      className={`snap-section relative flex items-center overflow-hidden py-12 lg:py-0 lg:h-screen ${
        isEven ? "bg-surface-dark" : "bg-primary"
      }`}
    >
      {/* Decorative Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }} 
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Info */}
          <div className="lg:col-span-5 flex flex-col gap-6 relative z-10">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full border border-surface/30 text-surface/80 text-[10px] uppercase tracking-widest font-bold bg-white/5 backdrop-blur-sm">
                  {project.projectType}
                </span>
                <span className="text-surface/50 text-xs font-bold uppercase tracking-wider">
                  Project {String(index + 1).padStart(2, "0")} / {project.category}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.9] tracking-tight text-surface mb-2">
                {project.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="flex flex-col gap-4 max-h-[25vh] overflow-y-auto pr-3 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-surface/20 [&::-webkit-scrollbar-thumb]:rounded-full">
                 <div className="prose prose-sm prose-invert prose-p:my-1 prose-ul:my-1 prose-li:my-0.5 prose-ul:list-disc prose-ul:ml-4 text-surface/80 leading-snug">
                    {project.situation && documentToReactComponents(project.situation)}
                    {project.myScope && documentToReactComponents(project.myScope)}
                    {project.whatIveDone && documentToReactComponents(project.whatIveDone)}
                 </div>
              </div>
            </ScrollReveal>

            {/* Tools Used Section */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="mt-2">
                <h4 className="text-surface/50 text-[10px] font-bold uppercase tracking-widest mb-3">Tools applied :)</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-black/20 border border-white/10 rounded-md text-surface text-[10px] font-extrabold uppercase tracking-widest shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Outcomes & Insights Box (Similar to Reference "Opinion del cliente") */}
            {(project.result || project.keyLearning) && (
               <ScrollReveal direction="up" delay={0.4}>
                 <div className="mt-4 p-5 rounded-2xl border border-surface/20 bg-white/5 backdrop-blur-md relative shadow-2xl flex flex-col max-h-[25vh]">
                   <div className="flex items-center gap-3 mb-3 shrink-0">
                     <h4 className="text-accent text-xs font-bold uppercase tracking-widest">Outcomes & Insights</h4>
                     <div className="flex gap-[2px]">
                       {[...Array(5)].map((_, i) => <span key={i} className="text-accent/80 text-[10px]">★</span>)}
                     </div>
                   </div>
                   <div className="overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-surface/20 [&::-webkit-scrollbar-thumb]:rounded-full">
                     <div className="prose prose-sm prose-invert prose-p:my-1 prose-ul:my-1 prose-li:my-0.5 prose-ul:list-disc prose-ul:ml-4 text-surface/70 leading-snug">
                       {project.result && documentToReactComponents(project.result)}
                       {project.keyLearning && documentToReactComponents(project.keyLearning)}
                     </div>
                   </div>
                 </div>
               </ScrollReveal>
            )}
          </div>

          {/* Right Column: Collage Media */}
          <div className="lg:col-span-7 relative h-[400px] md:h-[600px] flex items-center justify-center mt-12 lg:mt-0 w-full">
            <ScrollReveal direction="up" delay={0.2} className="w-full h-full relative">
              {/* Ambient Backlight */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

              {/* Aesthetic icons (Star / Heart patterns) */}
              <div className="absolute top-[10%] right-[10%] text-surface/30 text-2xl font-serif">✦</div>
              <div className="absolute bottom-[20%] left-[5%] text-surface/30 text-xl font-serif">✧</div>
              <div className="absolute top-[40%] left-[10%] text-surface/20 text-3xl font-serif">♡</div>

              {/* Media 1 (Hero) */}
              <div 
                className={`z-20 w-[80%] md:w-[70%] hover:z-40 transition-all duration-700 hover:scale-105 group/media1 ${project.media.length > 0 ? "absolute top-[10%] left-[5%] -rotate-3" : "relative mx-auto mt-20"}`}
              >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border-4 border-surface shadow-[15px_15px_0_var(--color-accent)] bg-surface-dark group-hover/media1:shadow-[20px_20px_0_var(--color-accent)] transition-all duration-500">
                  {project.heroVideo ? (
                    <VideoPlayer src={project.heroVideo.url} poster={project.thumbnail.url} className="absolute inset-0" />
                  ) : (
                    <Image src={project.thumbnail.url} alt={project.title} fill className="object-cover" />
                  )}
                </div>
                {project.image1Title && (
                  <div className="absolute -bottom-4 right-8 bg-surface text-primary px-4 py-1.5 rounded-sm text-[10px] font-black tracking-widest uppercase shadow-xl border border-primary/10">
                    {project.image1Title}
                  </div>
                )}
              </div>

              {/* Media 2 (Extra Gallery) */}
              {project.media.length > 0 && (
                <div 
                  className="absolute z-10 w-[70%] md:w-[60%] hover:z-40 transition-all duration-700 hover:scale-105 group/media2 bottom-[5%] md:bottom-[10%] right-[2%] md:right-[5%] rotate-6"
                >
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border-4 border-surface shadow-[15px_15px_0_var(--color-accent)] bg-surface-dark group-hover/media2:shadow-[20px_20px_0_var(--color-accent)] transition-all duration-500">
                    {isVideo(project.media[0].contentType) ? (
                      <VideoPlayer src={project.media[0].url} className="absolute inset-0" />
                    ) : (
                      <Image src={project.media[0].url} alt={`${project.title} detail`} fill className="object-cover" />
                    )}
                  </div>
                  {project.image2Title && (
                    <div className="absolute -top-4 left-4 bg-surface text-primary px-4 py-1.5 rounded-sm text-[10px] font-black tracking-widest uppercase shadow-xl border border-primary/10">
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
    <div id="projects">
      {projects.map((project, i) => (
        <ProjectSection key={project.slug} project={project} index={i} />
      ))}
    </div>
  );
}
