import {
  getSiteConfig,
  getHero,
  getAbout,
  getProjects,
  getServices,
  getExperiences,
  getMarqueeItems,
} from "@/lib/contentful";

import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
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
    marqueeItems,
  ] = await Promise.all([
    getSiteConfig(),
    getHero(),
    getAbout(),
    getProjects(),
    getServices(),
    getExperiences(),
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
      <Contact config={config} />
      <Footer />
    </main>
  );
}
