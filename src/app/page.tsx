import {
  getSiteConfig,
  getHero,
  getAbout,
  getProjects,
  getExperiences,
  getMarqueeItems,
  getBrandSections,
  getMotto,
} from "@/lib/contentful";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Motto from "@/components/Motto";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MarqueeBand from "@/components/MarqueeBand";

export const revalidate = 60;

export default async function Home() {
  const [
    config,
    hero,
    about,
    projects,
    experiences,
    marqueeItems,
    brandSections,
    motto,
  ] = await Promise.all([
    getSiteConfig(),
    getHero(),
    getAbout(),
    getProjects(),
    getExperiences(),
    getMarqueeItems(),
    getBrandSections(),
    getMotto(),
  ]);

  return (
    <main>
      <Hero data={hero} />
      <About data={about} />
      <MarqueeBand items={marqueeItems} />
      <Projects projects={projects} brandSections={brandSections} />
      <Experience items={experiences} />
      <Motto data={motto} />
      <Contact config={config} avatarUrl={about.photo.url} />
      <Footer name={config.name} />
    </main>
  );
}
