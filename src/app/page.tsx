import {
  getSiteConfig,
  getHero,
  getAbout,
  getProjects,
  getExperiences,
} from "@/lib/contentful";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Motto from "@/components/Motto";
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
    experiences,
  ] = await Promise.all([
    getSiteConfig(),
    getHero(),
    getAbout(),
    getProjects(),
    getExperiences(),
  ]);

  return (
    <main className="snap-container">
      <Hero data={hero} />
      <About data={about} />
      <Projects projects={projects} />
      <Experience items={experiences} />
      <Motto />
      <Contact config={config} />
      <Footer />
    </main>
  );
}
