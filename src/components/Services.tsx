import type { Service } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";

export default function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="snap-section py-24 lg:py-32 relative bg-[#F5F4F0] overflow-hidden">
      {/* Decorative Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }} 
      />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 w-full">
        <ScrollReveal className="mb-16 lg:mb-20">
          <p className="text-accent font-heading text-[10px] font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
            <span className="w-1 h-1 bg-accent rounded-full inline-block shadow-[0_0_8px_rgba(255,77,0,0.5)]"></span>
            Services
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-[5rem] font-black leading-[0.9] tracking-tighter text-primary uppercase">
            What I Do
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="h-full relative p-8 lg:p-10 bg-white border border-black/5 rounded-2xl overflow-hidden group hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                
                {/* Huge Background Number */}
                <div className="absolute -bottom-10 -right-6 font-heading text-[12rem] font-black text-black/[0.03] group-hover:text-accent/[0.05] transition-colors duration-700 pointer-events-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10 mb-20">
                  <span className="inline-flex items-center justify-center px-4 py-1.5 bg-[#F5F4F0] border border-black/10 rounded-full text-primary/60 text-[10px] font-black uppercase tracking-widest shadow-sm mb-8">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-3xl font-black text-primary tracking-tight leading-none mb-5 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-primary/70 leading-relaxed text-[15px] font-medium pr-4">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                   <div className="w-8 h-px bg-accent"></div>
                   <span className="text-accent text-[9px] font-black tracking-[0.2em] uppercase">Core Expertise</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
