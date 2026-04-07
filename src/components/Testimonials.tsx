import Image from "next/image";
import type { Testimonial } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section id="testimonials" className="snap-section py-24 px-6 flex items-center">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Testimonials" title="Kind Words" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <ScrollReveal key={`${item.name}-${item.company}`} delay={i * 0.1}>
              <blockquote className="p-8 bg-surface shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full flex flex-col border-l-4 border-accent">
                <svg
                  className="w-10 h-10 text-accent/30 mb-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <p className="text-primary leading-relaxed flex-1 text-[15px] font-medium">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-secondary">
                  {item.avatar && (
                    <Image
                      src={item.avatar.url}
                      alt={item.name}
                      width={44}
                      height={44}
                      className="rounded-full object-cover ring-2 ring-accent/20"
                    />
                  )}
                  <div>
                    <p className="font-heading font-extrabold text-sm text-primary">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted font-medium">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
