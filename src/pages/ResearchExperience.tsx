import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarryBackground from "@/components/StarryBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

const ResearchExperience = () => {
  const researchProjects = [
    {
      title: "A Robust Ensemble Learning Framework for Binary and Multiclass Malware Classification",
      description: "Developed a lightweight hybrid model for classifying obfuscated malware using ensemble learning techniques combining Random Forest, AdaBoost, and Light Gradient Boosting Machine. Achieved ~99.99% accuracy on the CIC-MalMem-2022 dataset for both binary and multiclass classification of malware families including Spyware, Ransomware, and Trojan Horse.",
      tags: ["Machine Learning", "Cybersecurity", "Ensemble Learning", "Malware Detection"],
      note: "Undergraduate Thesis",
      pdf: "https://drive.google.com/file/d/1BuWv4Tj0L3f4vLz8FfW9vJce2oaSVLvS/view?usp=drive_link" // replace with your PDF URL
    },
    {
      title: "A Comparative Study on Delay Prediction in Tactile Internet with Machine Learning",
      description: "Proposed a hybrid delay prediction model for Tactile Internet in surgical robotics using the JIGSAWS dataset. The custom ensemble model (80% Random Forest, 20% Gradient Boosting) achieved an R² score of 0.4430, representing a 9.24% improvement over baseline approaches, with practical applications in enhancing surgical precision and safety protocols.",
      tags: ["Tactile Internet", "Healthcare Robotics", "Delay Prediction", "Ensemble Methods"],
      pdf: "https://drive.google.com/file/d/1kDsiF9GEmdVCt6dQ2cPDtvmSsnterNBQ/view?usp=drive_link",

    },
    {
      title: "A Comparative Study on IoT Device Identification and Anomaly Detection",
      description: "Conducted comprehensive analysis of machine learning algorithms for IoT security, comparing K-Nearest Neighbors, Naive Bayes, CatBoost, XGBoost, and AdaBoost on the IoT DIAD 2024 dataset. Implemented LIME for model interpretability and found Random Forest outperformed other methods in both device identification and anomaly detection tasks involving DNS and ARP spoofing attacks.",
      tags: ["IoT Security", "Anomaly Detection", "Explainable AI", "Network Security"],
    },
    {
      title: "Exploring Fusion Strategies for Multi-Modal Pneumonia Classification with Modality-Specific Explainability",
      description: "Investigated multi-modal learning approaches combining chest X-ray images with tabular metadata (age, gender, view position, pixel spacing) for pneumonia classification using the NIH Chest X-ray dataset. Compared early, intermediate, and late fusion strategies, with intermediate and late fusion achieving superior performance. Enhanced model transparency using GradCAM for visual explainability and LIME for tabular feature interpretation.",
      tags: ["Medical Imaging", "Multi-Modal Learning", "Deep Learning", "Explainable AI"],
      pdf: "https://drive.google.com/file/d/19MypS30JhUViUZgP6v2vBFSKlp2o5F4O/view?usp=drive_link",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <StarryBackground />
      <Navbar />
      
      <main className="relative z-10 pt-20">
        <div className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto mb-12 text-center animate-fade-in">
            <p className="text-primary text-lg font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Research Experience
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring machine learning applications in cybersecurity, healthcare, and IoT
            </p>
          </div>

          {/* Research Projects */}
          <div className="max-w-5xl mx-auto space-y-6">
            {researchProjects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      {project.note && (
                        <Badge variant="secondary" className="mb-3">
                          {project.note}
                        </Badge>
                      )}
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2 min-w-0">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline"
                        className="bg-background/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* PDF link anchored to bottom-right of the CardContent */}
                  {project.pdf && (
                    <a
                      href={project.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} — PDF of paper (opens in new tab)`}
                      className="absolute right-4 bottom-4 text-sm text-primary hover:underline flex items-center gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      <span>PDF of Paper</span>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResearchExperience;
