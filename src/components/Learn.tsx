"use client";

import type { Learn } from "@/lib/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

const options = {
  renderNode: {
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
      <ul className="space-y-4 md:space-y-6">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
      <ul className="space-y-4 md:space-y-6">{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
      <li className="flex items-start gap-4 pr-4">
        <span className="w-1.5 h-1.5 mt-2 bg-accent rounded-sm shrink-0 shadow-[0_0_8px_rgba(255,77,0,0.5)]"></span>
        <span>{children}</span>
      </li>
    ),
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <p className="mb-4 last:mb-0">
        {children}
      </p>
    ),
  },
};

export default function LearnSection({ data }: { data: Learn }) {
  if (!data) return null;

  return (
    <section id="learn" className="snap-section py-24 lg:py-32 relative bg-surface-dark overflow-hidden min-h-screen flex items-center">
      {/* Decorative Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }} 
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Images Composition */}
          <div className="lg:col-span-6 relative h-[50vh] lg:h-[70vh] w-full order-2 lg:order-1 mt-10 lg:mt-0">
             <ScrollReveal direction="right" delay={0.3} className="absolute top-0 left-0 w-[75%] h-[75%] z-10">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                  <Image
                    src={data.media2?.url || "/placeholder.png"}
                    alt={data.media2?.title || data.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
             </ScrollReveal>

             <ScrollReveal direction="left" delay={0.4} className="absolute bottom-0 right-0 w-[65%] h-[65%] z-20">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-4 border-surface-dark">
                  <Image
                    src={data.media1?.url || "/placeholder.png"}
                    alt={data.media1?.title || data.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
             </ScrollReveal>
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col order-1 lg:order-2">
            <ScrollReveal>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/50 border border-white/10 rounded-full mb-8 shadow-sm self-start">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(255,77,0,0.8)]"></span>
                <span className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-surface">Key Learnings</span>
              </div>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-[5rem] font-black leading-[0.9] tracking-tighter text-surface uppercase mb-10">
                {data.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="pl-4 border-l-2 border-accent/30 text-surface/80 leading-relaxed font-medium text-sm md:text-base">
                {documentToReactComponents(data.description, options)}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
