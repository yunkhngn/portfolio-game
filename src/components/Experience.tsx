import type { Experience as ExperienceData } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function Experience({ items }: { items: ExperienceData[] }) {
  return (
    <section id="experience" className="snap-section py-24 lg:py-32 relative bg-surface-dark overflow-hidden">
      {/* Decorative Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }} 
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10 w-full">
        <ScrollReveal className="mb-20 text-center flex flex-col items-center">
          <p className="text-accent font-heading text-[10px] font-bold uppercase tracking-[0.3em] mb-4 flex items-center justify-center gap-3">
            <span className="w-1 h-1 bg-accent rounded-full inline-block shadow-[0_0_8px_rgba(255,77,0,0.8)]"></span>
            Experience
            <span className="w-1 h-1 bg-accent rounded-full inline-block shadow-[0_0_8px_rgba(255,77,0,0.8)]"></span>
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-[5rem] font-black leading-[0.9] tracking-tighter text-surface uppercase">
            My Journey
          </h2>
        </ScrollReveal>

        <div className="relative mx-auto mt-10">
          {/* Main glowing timeline line - left edge */}
          <div className="absolute left-[24px] md:left-[32px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          
          <div className="flex flex-col gap-12">
            {items.map((exp, i) => (
              <ScrollReveal
                key={`${exp.company}-${exp.role}`}
                delay={i * 0.15}
                direction="up"
              >
                <div className="relative pl-[64px] md:pl-[80px]">
                  {/* Outer circle glowing dot */}
                  <div className="absolute left-[24px] md:left-[32px] top-[24px] w-2.5 h-2.5 rounded-full bg-accent -translate-x-1/2 shadow-[0_0_15px_rgba(255,77,0,1)] ring-[6px] ring-surface-dark z-10" />

                  <div className="group relative bg-white/[0.02] border-[2px] border-white/5 rounded-2xl p-6 md:p-8 hover:border-accent/40 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(255,77,0,0.15)]">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 pointer-events-none -z-10"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="font-heading text-2xl md:text-3xl font-black text-surface tracking-tight leading-none mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-[16px] font-heading font-black text-accent tracking-wider uppercase">
                          {exp.company}
                        </p>
                      </div>
                      <div className="shrink-0 bg-surface/5 px-4 py-2 rounded-lg border border-surface/10 inline-flex shadow-inner">
                        <p className="text-[10px] text-surface/60 font-bold uppercase tracking-[0.2em]">
                          {formatDate(exp.startDate)} —{" "}
                          {exp.endDate ? formatDate(exp.endDate) : "Present"}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-surface/75 leading-relaxed text-[14px] md:text-[15px] font-medium max-w-3xl prose-p:relative prose-p:pl-4 prose-p:before:content-['▹'] prose-p:before:absolute prose-p:before:left-0 prose-p:before:text-accent/60 whitespace-pre-line">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
