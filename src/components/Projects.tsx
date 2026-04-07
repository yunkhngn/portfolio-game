"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project, ProjectType } from "@/lib/types";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

const PROJECT_TYPES: ("All" | ProjectType)[] = [
  "All",
  "Game",
  "Clip",
  "Outdoor",
];

export default function Projects({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<"All" | ProjectType>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.projectType === active);

  return (
    <section id="projects" className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Work" title="Selected Projects" />

        <div className="flex gap-4 mb-12 flex-wrap">
          {PROJECT_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setActive(type)}
              className={`px-5 py-2.5 text-sm font-heading font-bold uppercase tracking-wider transition-all duration-300 ${
                active === type
                  ? "bg-accent text-surface shadow-card"
                  : "bg-surface text-muted hover:text-primary hover:shadow-card"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
