import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <TechStack />
      <ProjectShowcase />
      <Contact />
    </>
  );
}
