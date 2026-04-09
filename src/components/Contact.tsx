"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { SiteConfig } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";

export default function Contact({ config, avatarUrl }: { config: SiteConfig; avatarUrl: string }) {
  const appIcons = [
    { src: "/appIcon/crossfire.png", alt: "Crossfire", rotate: -15, offset: -70, zIndex: 10 },
    { src: "/appIcon/tam-quoc.webp", alt: "Tam Quoc", rotate: -5, offset: -25, zIndex: 20 },
    { src: "/appIcon/danh-tuong.png", alt: "Danh Tuong", rotate: 6, offset: 20, zIndex: 30 },
    { src: "/appIcon/ueh.jpg", alt: "Campaign", rotate: 16, offset: 70, zIndex: 40 },
  ];

  return (
    <section id="contact" className="snap-section relative pt-20 pb-0 bg-black overflow-hidden flex flex-col justify-between min-h-screen">
      {/* Decorative Gradient Background */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-screen"
        style={{
          background: "radial-gradient(circle at 50% 100%, rgba(255, 77, 0, 0.15), transparent 60%)"
        }}
      />
      
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')"
        }}
      />

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Gamepad */}
         <motion.div 
           className="absolute w-32 h-32 md:w-56 md:h-56 top-[25%] left-[-8%] md:left-[2%] opacity-60 mix-blend-lighten"
           animate={{ y: [0, -25, 0], rotate: [-15, -10, -15] }}
           transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
         >
           <Image src="/hero-gamepad.png" alt="Gamepad" fill className="object-contain" />
         </motion.div>
         
         {/* Headphones */}
         <motion.div 
           className="absolute w-40 h-40 md:w-64 md:h-64 bottom-[15%] left-[-15%] md:left-[-5%] opacity-50 mix-blend-lighten"
           animate={{ y: [0, 20, 0], rotate: [20, 25, 20] }}
           transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
         >
           <Image src="/hero-headphones.png" alt="Headphones" fill className="object-contain" />
         </motion.div>

         {/* Keyboard */}
         <motion.div 
           className="absolute w-48 h-48 md:w-[350px] md:h-[350px] top-[5%] right-[-20%] md:right-[-10%] opacity-40 mix-blend-lighten"
           animate={{ y: [0, -15, 0], rotate: [10, 5, 10] }}
           transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
         >
           <Image src="/hero-keyboard.png" alt="Keyboard" fill className="object-contain" />
         </motion.div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative w-full max-w-[1200px] mx-auto px-6 z-10 pt-10 pb-20">
        
        {/* Floating Connection Graphic */}
        <ScrollReveal direction="up" delay={0.3} className="absolute -top-10 right-[10%] md:top-[10%] md:right-[15%] w-[250px] h-[200px] opacity-80 z-0 pointer-events-none">
           {/* SVG Line */}
           <svg className="absolute inset-0 w-full h-full text-surface/20 stroke-current drop-shadow-xl" strokeWidth="1.5" strokeDasharray="4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Draws a curved path connecting the two nodes */}
              <path d="M 20 60 Q 120 180 200 130" strokeLinecap="round" />
           </svg>
           
           {/* BRANDING NODE */}
           <div className="absolute top-[60px] left-[20px] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] pointer-events-auto">
              <div className="bg-surface/10 backdrop-blur-md border border-surface/20 text-surface/80 text-[10px] font-black uppercase tracking-[0.3em] py-1.5 px-4 rounded-full shadow-lg">
                BRANDING
              </div>
           </div>
           
           {/* AVATAR NODE */}
           <div className="absolute top-[130px] left-[200px] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
             <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-surface/10 shadow-2xl relative group cursor-crosshair">
               <div className="absolute inset-0 bg-accent/20 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <Image src={avatarUrl} alt="Avatar" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
             </div>
           </div>
        </ScrollReveal>

        {/* Central Typography Lockup */}
        <ScrollReveal direction="up" className="relative z-20 text-center mb-16 scale-90 md:scale-100">
          <div className="flex flex-col items-center justify-center -space-y-4 md:-space-y-6">
             <h2 className="text-surface font-serif italic text-4xl md:text-6xl lg:text-[75px] self-start md:ml-10 tracking-tight">
                Let&apos;s
             </h2>
             <h2 
               className="text-accent font-heading font-black uppercase tracking-tighter drop-shadow-2xl text-[14vw] md:text-[min(12vw,180px)] leading-[0.8]"
               style={{ WebkitTextStroke: "2px rgba(255, 77, 0, 0.2)" }}
             >
                creative
             </h2>
             <h2 className="text-surface font-serif italic text-4xl md:text-6xl lg:text-[75px] self-end md:-mr-10 tracking-tight">
                together
             </h2>
          </div>
        </ScrollReveal>

        {/* Game App Icon Cluster */}
        <ScrollReveal direction="up" delay={0.2} className="relative w-full h-[120px] md:h-[180px] flex justify-center items-center mt-10">
           <div className="relative w-[280px] md:w-[400px] h-full flex justify-center">
             {appIcons.map((icon, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-0 w-[90px] h-[90px] md:w-[130px] md:h-[130px] rounded-[22px] md:rounded-[32px] overflow-hidden border border-surface/20 shadow-2xl origin-bottom cursor-pointer group"
                  style={{
                     x: `calc(-50% + ${icon.offset}px)`,
                     left: '50%',
                     rotate: icon.rotate,
                     zIndex: icon.zIndex
                  }}
                  whileHover={{ y: -30, rotate: 0, zIndex: 100, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300"></div>
                  <Image src={icon.src} alt={icon.alt} fill className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                </motion.div>
             ))}
           </div>
        </ScrollReveal>

      </div>

      {/* Footer Contact bar */}
      <div className="w-full relative z-30 bg-[#0A0A0A]/80 backdrop-blur-xl border-t border-surface/5 mt-auto">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-6">
           
           {/* Author / Hire Badge */}
           <div className="flex items-center gap-4 bg-surface/5 pl-2 pr-5 py-2 rounded-full border border-surface/10">
             <div className="w-8 h-8 rounded-full overflow-hidden relative border border-surface/20 shrink-0">
               <Image src={avatarUrl} alt="Avatar" fill className="object-cover" />
             </div>
             <div className="flex flex-col leading-tight">
               <span className="text-surface font-bold text-xs">Available for hire</span>
               <span className="text-surface/40 text-[10px] font-medium tracking-wide">Availability: Now</span>
             </div>
           </div>

           {/* Original Socials/Email container */}
           <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${config.email}`}
                className="px-6 py-3 border border-surface/10 rounded-full text-surface hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm hover:shadow-[0_0_20px_rgba(255,77,0,0.15)] bg-surface/5"
              >
                Hire Me
              </a>
              {config.socialLinks?.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-surface/10 rounded-full text-surface/70 hover:text-surface hover:border-accent/50 hover:bg-white/[0.02] transition-all duration-300 text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm hover:shadow-[0_0_20px_rgba(255,77,0,0.15)]"
                >
                  {link.platform}
                </a>
              ))}
           </div>
        </div>
      </div>

    </section>
  );
}
