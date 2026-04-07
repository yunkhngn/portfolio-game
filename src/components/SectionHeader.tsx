import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  className = "",
}: SectionHeaderProps) {
  return (
    <ScrollReveal className={`mb-20 ${className}`}>
      <p className="text-accent font-heading text-xs font-semibold uppercase tracking-[0.3em] mb-4">
        {label}
      </p>
      <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
        {title}
      </h2>
    </ScrollReveal>
  );
}
