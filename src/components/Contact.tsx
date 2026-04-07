"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { SiteConfig } from "@/lib/types";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";

export default function Contact({ config }: { config: SiteConfig }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="snap-section py-24 px-6 bg-primary text-surface flex items-center">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Contact"
          title="Let's Work Together"
          className="[&_p]:text-accent [&_h2]:text-surface"
        />
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <p className="text-surface/70 leading-relaxed mb-8">
              Have a project in mind? Let&apos;s create something amazing
              together.
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${config.email}`}
                className="block text-accent hover:text-surface transition-colors"
              >
                {config.email}
              </a>
              <div className="flex gap-4 mt-6">
                {config.socialLinks?.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-surface/50 hover:text-accent transition-colors text-sm uppercase tracking-wider"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            {submitted ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-accent text-lg"
              >
                Thank you! I&apos;ll get back to you soon.
              </motion.p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border-b border-surface/20 py-3 text-surface placeholder:text-surface/40 focus:border-accent outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-transparent border-b border-surface/20 py-3 text-surface placeholder:text-surface/40 focus:border-accent outline-none transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-surface/20 py-3 text-surface placeholder:text-surface/40 focus:border-accent outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="px-10 py-5 bg-accent text-surface font-heading font-bold text-sm uppercase tracking-[0.15em] shadow-elevated hover:bg-accent-light hover:shadow-card-hover transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
