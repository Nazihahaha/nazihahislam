import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

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
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground">Academic Foundation</p>
        </div>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <GraduationCap className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl font-semibold">{edu.degree}</h3>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                    <p className="text-primary mb-2">{edu.institution}</p>
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
