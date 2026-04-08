"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 right-0 z-[100] px-4 md:px-0 flex justify-center w-full pointer-events-none"
    >
      <div className="pointer-events-auto bg-surface-dark/70 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-full w-full max-w-6xl px-4 md:px-8 h-14 md:h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="font-heading text-xs md:text-sm font-black uppercase tracking-[0.3em] text-surface group flex items-center gap-3 shrink-0 whitespace-nowrap"
        >
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent rounded-full group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(255,77,0,0.8)] transition-all duration-300"></span>
          Gia Huy
        </button>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-8 overflow-hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="relative text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold text-surface/70 hover:text-surface transition-colors duration-300 group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300 ease-out"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 justify-center w-8 h-8 rounded-full focus:outline-none"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block h-[2px] w-full bg-surface transition-all duration-300 transform origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-[2px] w-full bg-surface transition-all duration-300"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block h-[2px] w-full bg-surface transition-all duration-300 transform origin-center"
          />
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-20 md:hidden pointer-events-auto bg-surface-dark/95 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl w-[calc(100%-2rem)] max-w-sm overflow-hidden"
          >
            <ul className="flex flex-col py-6 px-8 gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="group flex flex-col gap-2 w-full text-left"
                  >
                    <span className="text-sm font-heading font-black uppercase tracking-[0.2em] text-surface group-hover:text-accent transition-colors duration-300">
                      {item.label}
                    </span>
                    <span className="w-0 h-[1px] bg-accent group-hover:w-12 transition-all duration-300 ease-out"></span>
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
