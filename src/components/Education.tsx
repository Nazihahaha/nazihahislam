import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "BRAC University",
    period: "Class of 2025 (2021-2025)",
    result: "CGPA: 3.90/4.00",
  },
  {
    degree: "A Levels",
    institution: "Maple Leaf International School",
    period: "January 2021",
    result: "Result: A/A*",
  },
  {
    degree: "O Levels",
    institution: "Maple Leaf International School",
    period: "January 2019",
    result: "Result: A/A*",
  },
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground">Academic Foundation</p>
        </div>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className={`group hover:border-primary/50 transition-all duration-700 bg-card/50 backdrop-blur hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: isVisible ? `${0.2 + index * 0.15}s` : '0s' }}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                      <GraduationCap className="h-7 w-7 text-primary relative z-10" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">{edu.degree}</h3>
                      <span className="text-sm text-muted-foreground group-hover:text-primary/70 transition-colors">{edu.period}</span>
                    </div>
                    <p className="text-primary mb-2 group-hover:animate-pulse">{edu.institution}</p>
                    <p className="text-muted-foreground font-medium">{edu.result}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
