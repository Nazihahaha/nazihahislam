import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradientBackground from "@/components/GradientBackground";
import ScrollIndicator from "@/components/ScrollIndicator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <GradientBackground />
      <Navbar />
      <div className="relative">
        <Hero />
        <ScrollIndicator />
      </div>
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
};

export default Index;
