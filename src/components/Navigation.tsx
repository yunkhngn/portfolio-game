"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container =
      document.querySelector(".snap-container") || window;

    const handleScroll = () => {
      const el = container instanceof Window ? document.documentElement : (container as HTMLElement);
      const currentScrollY =
        container instanceof Window ? window.scrollY : el.scrollTop;
      setScrolled(currentScrollY > 50);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-lg shadow-card border-b border-secondary"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("#hero")}
          className={`font-heading text-xl font-bold transition-colors duration-500 ${
            scrolled ? "text-primary" : "text-surface"
          }`}
        >
          GIA HUY
        </button>

        <ul className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className={`text-sm transition-colors duration-500 ${
                  scrolled
                    ? "text-muted hover:text-primary"
                    : "text-surface/60 hover:text-surface"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className={`block h-0.5 w-full transition-colors duration-500 ${scrolled ? "bg-primary" : "bg-surface"}`}
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`block h-0.5 w-full transition-colors duration-500 ${scrolled ? "bg-primary" : "bg-surface"}`}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className={`block h-0.5 w-full transition-colors duration-500 ${scrolled ? "bg-primary" : "bg-surface"}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden overflow-hidden border-b ${
              scrolled
                ? "bg-surface border-primary/5"
                : "bg-surface-dark border-surface/10"
            }`}
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`text-lg font-heading ${scrolled ? "text-primary" : "text-surface"}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
