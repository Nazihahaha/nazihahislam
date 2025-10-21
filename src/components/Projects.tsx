import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "Coronary Heart Disease Prediction",
    description: "A comprehensive machine learning system that predicts the risk of coronary heart disease using patient health metrics and advanced classification algorithms.",
    details: "Developed using XGBoost Classifier with optimized hyperparameters, this system analyzes multiple health indicators to provide accurate disease risk predictions. Deployed with Flask backend and interactive web interface for real-time predictions.",
    technologies: ["Python", "XGBoost", "Flask", "HTML", "CSS", "scikit-learn", "Pandas", "Numpy"],
    features: [
      "XGBoost Classifier with hyperparameter tuning",
      "Class imbalance handling with scale_pos_weight",
      "Interactive web interface built with Flask",
      "Real-time disease risk prediction",
      "Comprehensive model evaluation metrics",
    ],
    tags: ["Machine Learning", "Deployed"],
  },
  {
    title: "Movie Recommendation System",
    description: "An intelligent end-to-end content and genre-based recommender system that analyzes user preferences and movie characteristics to provide personalized recommendations.",
    details: "Built using advanced machine learning techniques including cosine similarity for preference matching, this system processes movie data to understand content relationships and user behavior patterns. Deployed with Flask for seamless user interaction.",
    technologies: ["Python", "scikit-learn", "Flask", "HTML", "CSS", "Pandas", "Numpy", "TfidfVectorizer"],
    features: [
      "Content-based filtering using movie features",
      "Genre-based recommendations",
      "Cosine similarity for preference matching",
      "Flask web application interface",
      "Real-time recommendation generation",
    ],
    tags: ["Machine Learning", "Deployed"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Real-world machine learning solutions with end-to-end implementations
          </p>
        </div>
        
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur overflow-hidden"
            >
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      className="bg-primary/20 hover:bg-primary/30 border-primary/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-2xl sm:text-3xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  {project.details}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-secondary hover:bg-secondary/80"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button variant="default" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 hover:bg-primary/10"
          >
            <Github className="mr-2 h-5 w-5" />
            More projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
