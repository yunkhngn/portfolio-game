"use client";

import { motion } from "framer-motion";
import type { SiteConfig } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";

export default function Contact({ config }: { config: SiteConfig }) {
  return (
    <section id="contact" className="snap-section relative py-24 lg:py-32 bg-primary overflow-hidden flex items-center min-h-screen">
      {/* Decorative Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", 
          backgroundSize: "60px 60px" 
        }} 
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 w-full flex flex-col items-center justify-center text-center">
        
        <ScrollReveal direction="up" className="mb-8">
          <p className="text-accent font-heading text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 flex items-center justify-center gap-4">
            <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block shadow-[0_0_10px_rgba(255,77,0,0.8)]"></span>
            Let&apos;s Create Together
            <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block shadow-[0_0_10px_rgba(255,77,0,0.8)]"></span>
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <a
            href={`mailto:${config.email}`}
            className="group relative inline-block text-surface font-heading text-4xl md:text-6xl lg:text-[7vw] font-black uppercase tracking-tighter leading-none hover:text-accent transition-colors duration-500 mb-16"
          >
            {config.email}
            {/* Hover dash line effect */}
            <span className="absolute bottom-0 left-0 w-full h-[6px] md:h-[10px] bg-accent scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500 ease-out z-[-1]"></span>
          </a>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} className="w-full">
          <div className="flex flex-col items-center gap-6">
            <p className="text-surface/40 text-sm md:text-base font-medium max-w-lg mx-auto leading-relaxed">
              Have a project in mind, need consultation, or just want to chat about game marketing? Drop me a line.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8">
              {config.socialLinks?.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-surface/10 rounded-full text-surface/70 hover:text-surface hover:border-accent/50 hover:bg-white/[0.02] transition-all duration-300 text-xs font-bold uppercase tracking-[0.2em] shadow-sm hover:shadow-[0_0_20px_rgba(255,77,0,0.15)]"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
