import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { AboutSection as AboutData } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

export default function About({ data }: { data: AboutData }) {
  return (
    <section id="about" className="snap-section relative py-24 px-6 flex items-center overflow-hidden bg-surface">
      {/* Notebook Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
           backgroundImage: "linear-gradient(rgba(28,25,23,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(28,25,23,.15) 1px, transparent 1px)",
           backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <SectionHeader label="About" title="About Me" />
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-6">
          {/* Left Column: Big Image */}
          <ScrollReveal direction="left" className="lg:col-span-5 relative">
            <div className="relative w-full max-w-sm mx-auto aspect-[4/5] overflow-hidden rounded-3xl shadow-[15px_15px_0_var(--color-accent)] border-4 border-primary group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10 mix-blend-overlay"></div>
              <Image
                src={data.photo.url}
                alt="Portrait"
                fill
                className="object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
            </div>
            {/* Stamp / Label */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 border-2 border-primary rounded-sm -rotate-3 bg-primary text-surface font-heading font-extrabold uppercase tracking-widest text-sm shadow-xl whitespace-nowrap z-20">
               Made by {data.name}
            </div>
          </ScrollReveal>

          {/* Right Column: Content Grid */}
          <div className="lg:col-span-7 flex flex-col gap-10 lg:gap-14">
            <ScrollReveal direction="right" delay={0.1}>
               <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-primary tracking-tight leading-none">
                  Hello! I'm <span className="text-accent">{data.name}</span>
               </h3>
            </ScrollReveal>

             {/* Sub-grid for Bio and Info */}
            <div className="grid md:grid-cols-2 gap-10">
               {/* Left Sub-column: Bio */}
               <ScrollReveal direction="up" delay={0.2}>
                  <div className="prose prose-lg text-primary/80 leading-relaxed max-w-none font-medium">
                    {documentToReactComponents(data.bio)}
                  </div>
               </ScrollReveal>

               {/* Right Sub-column: Info Blocks */}
               <ScrollReveal direction="up" delay={0.3}>
                  <div className="space-y-10 flex flex-col">
                    
                    {/* Education */}
                    {data.education && (
                       <div>
                          <h4 className="font-heading text-xl font-bold text-primary mb-2 flex items-center gap-2">
                             Education
                             <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded font-black tracking-widest uppercase">EDU</span>
                          </h4>
                          <p className="text-accent font-black font-heading text-lg leading-tight uppercase tracking-wider">
                             {data.education}
                          </p>
                          {data.educationDetail && (
                             <p className="text-primary/70 text-sm mt-1 uppercase tracking-wider font-semibold">
                                {data.educationDetail}
                             </p>
                          )}
                       </div>
                    )}

                    {/* Focus / Skills */}
                    {data.skills?.length > 0 && (
                       <div>
                          <h4 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
                             Focus
                             <span className="text-[10px] bg-primary/10 text-primary/60 px-2 py-0.5 rounded font-black tracking-widest uppercase">SKILLS</span>
                          </h4>
                          <ul className="space-y-3">
                             {data.skills.map((skill) => (
                                <li key={skill} className="flex items-center gap-3 text-primary/90 text-sm font-bold uppercase tracking-wider">
                                   <div className="w-1.5 h-1.5 bg-accent rotate-45 flex-shrink-0"></div>
                                   {skill}
                                </li>
                             ))}
                          </ul>
                       </div>
                    )}

                    {/* Tools / Software */}
                    {data.software?.length > 0 && (
                       <div>
                          <h4 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
                             Tools
                             <span className="text-[10px] bg-primary/10 text-primary/60 px-2 py-0.5 rounded font-black tracking-widest uppercase">APP</span>
                          </h4>
                          <div className="flex flex-wrap gap-2">
                             {data.software.map((sw) => (
                                <span key={sw} className="px-4 py-2 bg-primary text-surface text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-widest border-2 border-primary rounded-md shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
                                   {sw}
                                </span>
                             ))}
                          </div>
                       </div>
                    )}
                    
                  </div>
               </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
