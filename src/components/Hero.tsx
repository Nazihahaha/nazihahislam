import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import profileImage from "@/assets/image5.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "var(--gradient-hero)",
        }}
      />

      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playball leading-tight">
              <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Nazihah Islam
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I'm a passionate computer science student with a mission to
              leverage AI and machine learning to solve real-world problems.
              With a strong foundation in data science and a keen eye for
              detail, I specialize in building intelligent solutions that make
              an impact.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
                asChild
              >
                <a
                  href="/NazihahIslam_Resume.pdf"
                  download="NazihahIslam_Resume.pdf"
                >
                  <FileDown className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 transition-all hover:scale-105 hover:border-primary"
              >
                View My Work
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Nazihahaha"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-all hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-primary/30"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nazihah-islam/"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-all hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-primary/30"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:nazihahislam3@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-all hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-primary/30"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile image (Static, No Circle, Larger Size) */}
          <div className="lg:justify-self-end relative flex justify-center lg:justify-end">
            {/* Soft glowing background behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 blur-3xl opacity-30" />

            {/* Profile image */}
            <img
              src={profileImage}
              alt="Nazihah Islam Nawreen - Machine Learning Engineer"
              className="relative w-[500px] sm:w-[600px] lg:w-[700px] object-contain shadow-2xl transition-transform duration-500 hover:scale-105 hover:-translate-y-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
