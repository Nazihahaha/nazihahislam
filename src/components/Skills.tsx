import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Brain, Wrench } from "lucide-react";

const skillsData = {
  programming: ["Python", "Flask", "HTML"],
  machineLearning: [
    "Linear/Logistic Regression",
    "Random Forest",
    "XGBoost",
    "SVM",
    "K-Means Clustering",
    "PCA",
  ],
  tools: ["Linux", "PyTorch", "Pandas", "Numpy", "Scikit-learn"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive toolkit for machine learning and software development
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Programming</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillsData.programming.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-primary/10 hover:bg-primary/20 border-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Machine Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillsData.machineLearning.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-primary/10 hover:bg-primary/20 border-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillsData.tools.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-primary/10 hover:bg-primary/20 border-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <p className="text-center text-muted-foreground mt-12 italic">
          Continuously expanding expertise in machine learning and AI technologies
        </p>
      </div>
    </section>
  );
};

export default Skills;
