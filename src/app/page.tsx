import {
  getSiteConfig,
  getHero,
  getAbout,
  getProjects,
  getServices,
  getExperiences,
  getAchievement,
  getLearn,
} from "@/lib/contentful";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Motto from "@/components/Motto";
import Experience from "@/components/Experience";
import MarqueeBand from "@/components/MarqueeBand";
import Achievement from "@/components/Achievement";
import Learn from "@/components/Learn";
import Philosophy from "@/components/Philosophy";
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
    achievement,
    learn,
  ] = await Promise.all([
    getSiteConfig(),
    getHero(),
    getAbout(),
    getProjects(),
    getServices(),
    getExperiences(),
    getAchievement(),
    getLearn(),
  ]);

  return (
    <main className="snap-container">
      <Hero data={hero} />
      <About data={about} />
      <Projects projects={projects} />
      <Stats />
      <Services services={services} />
      <Motto />
      <Experience items={experiences} />
      <MarqueeBand />
      <Achievement data={achievement} />
      <Learn data={learn} />
      <Philosophy />
      <Contact config={config} />
      <Footer />
    </main>
  );
}
