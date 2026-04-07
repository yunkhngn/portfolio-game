import type { Service } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

export default function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="snap-section py-24 px-6 flex items-center">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Services" title="What I Do" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="p-8 bg-surface shadow-card hover:shadow-card-hover border-b-2 border-transparent hover:border-accent transition-all duration-300 group">
                <span className="font-heading text-6xl font-extrabold text-secondary group-hover:text-accent/30 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-xl font-extrabold mt-4 mb-3 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed text-[15px]">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
