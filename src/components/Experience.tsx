import type { Experience as ExperienceData } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function Experience({ items }: { items: ExperienceData[] }) {
  return (
    <section id="experience" className="snap-section py-24 px-6 bg-secondary flex items-center">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Experience" title="My Journey" />
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-accent/20 -translate-x-1/2" />
          {items.map((exp, i) => (
            <ScrollReveal
              key={`${exp.company}-${exp.role}`}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`relative pl-8 md:pl-0 pb-12 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                <div
                  className="absolute left-0 md:left-auto md:right-0 top-1 w-4 h-4 bg-accent rounded-full -translate-x-1/2 md:translate-x-1/2 ring-4 ring-secondary shadow-md"
                  style={
                    i % 2 !== 0
                      ? {
                          left: 0,
                          right: "auto",
                          transform: "translateX(-50%)",
                        }
                      : undefined
                  }
                />
                <p className="text-xs text-accent font-heading font-bold uppercase tracking-[0.2em]">
                  {formatDate(exp.startDate)} —{" "}
                  {exp.endDate ? formatDate(exp.endDate) : "Present"}
                </p>
                <h3 className="font-heading text-2xl font-extrabold mt-2 text-primary">
                  {exp.role}
                </h3>
                <p className="text-accent font-bold text-sm">{exp.company}</p>
                <p className="text-muted mt-3 leading-relaxed text-[15px]">
                  {exp.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
