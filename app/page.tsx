import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import IntroSequence from "@/components/IntroSequence";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <IntroSequence />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Experience />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
