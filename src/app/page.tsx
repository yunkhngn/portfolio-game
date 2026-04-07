import {
  getSiteConfig,
  getHero,
  getAbout,
  getProjects,
  getServices,
  getExperiences,
  getTestimonials,
  getMarqueeItems,
} from "@/lib/contentful";

import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const revalidate = 60;

export default async function Home() {
  const [
    config,
    hero,
    about,
    projects,
    services,
    experiences,
    testimonials,
    marqueeItems,
  ] = await Promise.all([
    getSiteConfig(),
    getHero(),
    getAbout(),
    getProjects(),
    getServices(),
    getExperiences(),
    getTestimonials(),
    getMarqueeItems(),
  ]);

  return (
    <main className="snap-container">
      <Hero data={hero} />
      <Marquee items={marqueeItems} />
      <About data={about} />
      <Projects projects={projects} />
      <Services services={services} />
      <Experience items={experiences} />
      <Testimonials items={testimonials} />
      <Contact config={config} />
      <Footer />
    </main>
  );
}
