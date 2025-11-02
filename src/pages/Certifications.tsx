import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradientBackground from "@/components/GradientBackground";
import datacampIcon from "@/assets/datacamp-icon.png";
import deeplearningIcon from "@/assets/deeplearning-icon.png";

const Certifications = () => {
  const certifications = [
    {
      title: "Image Processing in Python",
      provider: "DataCamp",
      issued: "Oct 2025",
      credentialId: "8f77b4ba2db805d073c28c9986671f093899e3f7",
      icon: datacampIcon,
      gradient: "from-green-300/20 to-emerald-300/20",
      url: 'https://www.datacamp.com/statement-of-accomplishment/course/8f77b4ba2db805d073c28c9986671f093899e3f7?raw=1',
    },
    {
      title: "Data Manipulation with Pandas",
      provider: "DataCamp",
      issued: "Sep 2025",
      credentialId: "c50f31a3cf8945a3aa1d2d0d41eb4289f8abe0d3",
      icon: datacampIcon,
      gradient: "from-green-300/20 to-emerald-300/20",
      url: "https://www.datacamp.com/statement-of-accomplishment/course/c50f31a3cf8945a3aa1d2d0d41eb4289f8abe0d3?raw=1",
    },
    {
      title: "Supervised Learning with scikit-learn",
      provider: "DataCamp",
      issued: "Sep 2025",
      credentialId: "96ba1666195313b443b8d484b8e787ac54e6edbe",
      icon: datacampIcon,
      gradient: "from-green-300/20 to-emerald-300/20",
      url: "https://www.datacamp.com/statement-of-accomplishment/course/96ba1666195313b443b8d484b8e787ac54e6edbe?raw=1",
    },
    {
      title: "Introduction to Data Science in Python",
      provider: "DataCamp",
      issued: "Aug 2025",
      credentialId: "94f08ece26fc068c9a5c83c622ca0d9193bb1fa1",
      icon: datacampIcon,
      gradient: "from-green-300/20 to-emerald-300/20",
      url: "https://www.datacamp.com/statement-of-accomplishment/course/94f08ece26fc068c9a5c83c622ca0d9193bb1fa1?raw=1",
    },
    {
      title: "Introduction to Power BI",
      provider: "DataCamp",
      issued: "Aug 2025",
      credentialId: "0f4df28a16497290478f2e4a5f4217e6fd7b6284",
      icon: datacampIcon,
      gradient: "from-green-300/20 to-emerald-300/20",
      url: "https://www.datacamp.com/statement-of-accomplishment/course/0f4df28a164972904782fe4d2f4217e6fd7b6284?raw=1",
    },
    {
      title: "Machine Learning Specialization",
      provider: "DeepLearning.AI",
      issued: "Jul 2025",
      credentialId: "WDDY1ESONZHD",
      icon: deeplearningIcon,
      gradient: "from-pink-300/20 to-rose-300/20",
      url: "https://coursera.org/share/d94a7546d12d2c4bb71900ed227bdf76",
    },
  ];

  return (
    <div className="min-h-screen">
      <GradientBackground />
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Certifications
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional certifications in data science and machine learning
            </p>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <Card
                key={cert.credentialId}
                className={`opacity-0 [animation-fill-mode:forwards] animate-fade-in hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-gradient-to-br ${cert.gradient} border-border/50`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <img 
                      src={cert.icon} 
                      alt={`${cert.provider} logo`}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{cert.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {cert.provider} • Issued {cert.issued}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Credential ID:</span> {cert.credentialId}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2"
                      asChild
                    >
                      <a href={cert.url} target="_blank" rel="noopener noreferrer">
                        Show credential
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Certifications;
