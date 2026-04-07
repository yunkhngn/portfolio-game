import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { AboutSection as AboutData } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

export default function About({ data }: { data: AboutData }) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="About" title="About Me" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={data.photo.url}
                alt="Portrait"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="prose prose-lg max-w-none text-muted">
              {documentToReactComponents(data.bio)}
            </div>
            {data.skills.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {data.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-primary text-sm font-heading font-bold uppercase tracking-wider border border-primary/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
