import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { AboutSection as AboutData } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

export default function About({ data }: { data: AboutData }) {
  return (
    <section id="about" className="snap-section py-24 px-6 flex items-center">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="About" title="About Me" />
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* Left Column: Big Image */}
          <ScrollReveal direction="left" className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[15px_15px_0_rgba(255,77,0,1)] border-4 border-surface-dark group bg-surface-dark">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10 mix-blend-overlay"></div>
              <Image
                src={data.photo.url}
                alt="Portrait"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
            </div>
            <div className="mt-12 flex justify-center">
               <div className="px-6 py-2 border-2 border-surface-light rounded-sm -rotate-3 bg-primary text-surface font-heading font-extrabold uppercase tracking-widest text-sm shadow-md">
                  Made by {data.name}
               </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Content Grid */}
          <div className="lg:col-span-7 flex flex-col gap-10 lg:gap-14">
            <ScrollReveal direction="right" delay={0.1}>
               <h3 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-surface tracking-tight leading-none">
                  Hi! I'm <span className="text-accent">{data.name}</span>
               </h3>
            </ScrollReveal>

             {/* Sub-grid for Bio and Info */}
            <div className="grid md:grid-cols-2 gap-10">
               {/* Left Sub-column: Bio */}
               <ScrollReveal direction="up" delay={0.2}>
                  <div className="prose prose-lg prose-invert text-surface/80 leading-relaxed max-w-none font-medium">
                    {documentToReactComponents(data.bio)}
                  </div>
               </ScrollReveal>

               {/* Right Sub-column: Info Blocks */}
               <ScrollReveal direction="up" delay={0.3}>
                  <div className="space-y-10 flex flex-col">
                    
                    {/* Education */}
                    {data.education && (
                       <div>
                          <h4 className="font-heading text-xl font-bold text-surface mb-2 flex items-center gap-2">
                             Education
                             <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded font-black tracking-widest uppercase">EDU</span>
                          </h4>
                          <p className="text-accent font-bold font-heading text-lg leading-tight uppercase tracking-wider">
                             {data.education}
                          </p>
                          {data.educationDetail && (
                             <p className="text-surface/60 text-sm mt-1 uppercase tracking-wider font-semibold">
                                {data.educationDetail}
                             </p>
                          )}
                       </div>
                    )}

                    {/* Focus / Skills */}
                    {data.skills?.length > 0 && (
                       <div>
                          <h4 className="font-heading text-xl font-bold text-surface mb-3 flex items-center gap-2">
                             Focus
                             <span className="text-[10px] bg-surface-dark text-surface/50 px-2 py-0.5 rounded font-black tracking-widest uppercase">SKILLS</span>
                          </h4>
                          <ul className="space-y-2">
                             {data.skills.map((skill) => (
                                <li key={skill} className="flex items-center gap-3 text-surface/80 text-sm font-semibold uppercase tracking-wider">
                                   <div className="w-1.5 h-1.5 bg-accent rounded-[1px] rotate-45"></div>
                                   {skill}
                                </li>
                             ))}
                          </ul>
                       </div>
                    )}

                    {/* Tools / Software */}
                    {data.software?.length > 0 && (
                       <div>
                          <h4 className="font-heading text-xl font-bold text-surface mb-3 flex items-center gap-2">
                             Tools
                             <span className="text-[10px] bg-surface-dark text-surface/50 px-2 py-0.5 rounded font-black tracking-widest uppercase">APP</span>
                          </h4>
                          <div className="flex flex-wrap gap-2">
                             {data.software.map((sw) => (
                                <span key={sw} className="px-3 py-1.5 bg-surface-dark text-surface text-[11px] font-heading font-extrabold uppercase tracking-widest border border-white/5 rounded-md hover:border-accent/50 hover:text-accent transition-colors">
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
