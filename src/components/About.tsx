import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">
            Driven by curiosity and passion for machine learning innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur">
            <CardContent className="p-8">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Personal Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Self-motivated Computer Science student with a strong foundation in machine learning and software development. Committed to continuous learning and creating intelligent solutions that address real-world challenges through innovative technology.
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur">
            <CardContent className="p-8">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Career Vision</h3>
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
