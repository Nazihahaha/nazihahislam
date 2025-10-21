import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    title: "IT Governance Intern",
    company: "bKash Limited",
    period: "May 2025 - Aug. 2025",
    responsibilities: [
      "Created comprehensive AI policy frameworks",
      "Developed strategic API management plans",
      "Enhanced organizational tech governance",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Department of Mathematics and Natural Sciences, BRAC University",
    period: "May 2024 - May 2025",
    responsibilities: [
      "Provided consultation sessions to students, assisted with lab sessions, graded assignments, evaluated student progress, and conducted assessments for various mathematics and science courses.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground">Professional Background</p>
        </div>
        
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <Card 
              key={index} 
              className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Briefcase className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl font-semibold">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-primary mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
