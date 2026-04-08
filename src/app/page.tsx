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
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Achievement from "@/components/Achievement";
import Learn from "@/components/Learn";
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
      <Services services={services} />
      <Experience items={experiences} />
      <Achievement data={achievement} />
      <Learn data={learn} />
      <Contact config={config} />
      <Footer />
    </main>
  );
}
