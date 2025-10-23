import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">
            Driven by curiosity and passion for machine learning innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className={`group hover:border-primary/50 transition-all duration-700 bg-card/50 backdrop-blur hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: isVisible ? '0.3s' : '0s' }}>
            <CardContent className="p-8">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Lightbulb className="h-6 w-6 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">Personal Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Self-motivated Computer Science student with a strong foundation in machine learning and software development. Committed to continuous learning and creating intelligent solutions that address real-world challenges through innovative technology.
              </p>
            </CardContent>
          </Card>
          
          <Card className={`group hover:border-primary/50 transition-all duration-700 bg-card/50 backdrop-blur hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: isVisible ? '0.5s' : '0s' }}>
            <CardContent className="p-8">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Target className="h-6 w-6 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">Career Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Aspiring to become a skilled ML engineer who bridges the gap between theoretical knowledge and practical applications. Focused on staying current with AI technology while developing scalable, production-ready solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
