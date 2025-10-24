import { BookOpen, Scissors, Camera } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Hobbies = () => {
  const hobbies = [
    {
      title: "Reading Thriller Books",
      description: "Immersing myself in gripping thriller novels that keep me on the edge of my seat.",
      icon: BookOpen,
      gradient: "from-purple-300/20 to-pink-300/20",
      iconBg: "bg-purple-500/20",
      details: [
        "Love psychological thrillers and crime fiction",
        "Favorite authors include Gillian Flynn and Paula Hawkins",
        "Always hunting for the next page-turner",
        "Enjoy analyzing plot twists and character development",
      ],
    },
    {
      title: "Scrapbooking",
      description: "Creating beautiful memory books with colorful papers, washi tapes, and creative embellishments.",
      icon: Scissors,
      gradient: "from-cyan-300/20 to-blue-300/20",
      iconBg: "bg-cyan-500/20",
      details: [
        "Collecting washi tapes in various patterns and colors",
        "Arranging bits and pieces of colorful paper",
        "Designing creative layouts for memories",
        "Experimenting with different textures and materials",
      ],
    },
    {
      title: "Photography",
      description: "Capturing moments and perspectives through the lens of my camera.",
      icon: Camera,
      gradient: "from-orange-300/20 to-yellow-300/20",
      iconBg: "bg-orange-500/20",
      details: [
        "Love landscape and urban photography",
        "Experimenting with different lighting techniques",
        "Building a portfolio of candid moments",
        "Exploring composition and visual storytelling",
        "Won Panorama photography competition among 200 contestants (January 2019)",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              My Hobbies
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Exploring my passions beyond the world of machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <Card
                  key={hobby.title}
                  className={`opacity-0 [animation-fill-mode:forwards] animate-scale-in hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-gradient-to-br ${hobby.gradient} border-border/50`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-full ${hobby.iconBg} flex items-center justify-center mb-4 group-hover:animate-bounce-subtle`}>
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{hobby.title}</CardTitle>
                    <CardDescription className="text-sm">{hobby.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {hobby.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2 opacity-0 [animation-fill-mode:forwards] animate-fade-in"
                          style={{ animationDelay: `${index * 0.1 + idx * 0.05}s` }}
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hobbies;
