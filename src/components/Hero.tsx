import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import profileImage from "@/assets/image5.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cursive leading-tight text-foreground">
              Nazihah Islam
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              A <span className="text-primary font-semibold">Computer Science Student</span> From{" "}
              <span className="text-accent font-semibold">Dhaka</span>
            </p>

            <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
              I'm a passionate computer science student with a mission to
              leverage AI and machine learning to solve real-world problems.
              With a strong foundation in data science and a keen eye for
              detail, I specialize in building intelligent solutions that make
              an impact.
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 transition-all px-8 py-6 text-base rounded-full gap-2"
                asChild
              >
                <a href="/Nazihah_CV_Europass.pdf" download>
                  <FileDown className="h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/Nazihahaha"
                className="text-foreground hover:text-primary transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nazihah-islam/"
                className="text-foreground hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:nazihahislam3@gmail.com"
                className="text-foreground hover:text-primary transition-all"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="lg:justify-self-end relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <img
                src={profileImage}
                alt="Nazihah Islam Nawreen - Computer Science Graduate"
                className="relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[650px] object-contain transition-transform duration-500 hover:scale-105"
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
