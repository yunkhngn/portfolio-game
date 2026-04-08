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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-elevated group border border-surface/10 ring-1 ring-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10 mix-blend-overlay blur-md"></div>
              <Image
                src={data.photo.url}
                alt="Portrait"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            {data.name && (
              <h3 className="font-heading text-5xl md:text-6xl mb-2 font-black bg-gradient-to-br from-white via-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
                {data.name}
              </h3>
            )}
            {data.education && (
              <div className="mb-6">
                <h4 className="font-heading text-sm text-accent uppercase tracking-widest leading-none">
                  {data.education}
                </h4>
                {data.educationDetail && (
                  <p className="text-muted text-[13px] mt-2 uppercase tracking-wide">
                    {data.educationDetail}
                  </p>
                )}
              </div>
            )}
            <div className="prose prose-lg max-w-none text-muted">
              {documentToReactComponents(data.bio)}
            </div>
            {data.skills?.length > 0 && (
              <div className="mt-8">
                <h5 className="font-heading text-xs text-surface/50 uppercase tracking-widest mb-3">
                  Skills & Expertise
                </h5>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-surface-dark/40 backdrop-blur-md text-primary/90 text-xs font-heading font-bold uppercase tracking-wider border border-white/5 rounded-full shadow-sm hover:border-accent/50 hover:bg-surface-dark/60 hover:-translate-y-0.5 hover:shadow-accent/10 hover:text-white cursor-default transition-all duration-300 ease-out"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {data.software?.length > 0 && (
              <div className="mt-6">
                <h5 className="font-heading text-xs text-surface/50 uppercase tracking-widest mb-3">
                  Software & Tools
                </h5>
                <div className="flex flex-wrap gap-2">
                  {data.software.map((sw) => (
                    <span
                      key={sw}
                      className="px-4 py-2 bg-surface/30 backdrop-blur-sm text-primary/80 text-xs font-heading font-bold uppercase tracking-wider border border-white/5 rounded-full hover:border-accent/30 hover:bg-surface/50 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-default"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
