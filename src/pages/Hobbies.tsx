import { BookOpen, Scissors, Camera, Trophy, Users, Camera as CameraIcon, Cpu, LineChart, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Hobbies = () => {
  const extracurriculars = [
    {
      title: "Photography Excellence",
      icon: Trophy,
      gradient: "from-yellow-300/20 to-orange-300/20",
      iconBg: "bg-yellow-500/20",
      achievements: [
        { 
          text: "1st Place - MLIS Intra School Photography Competition (Panorama) 2019",
          link: "https://drive.google.com/file/d/14NLBk1LItpBPqq2p7Zh5NTPBpLeCS-bu/view?usp=drive_link"
        },
        { text: "Active member of MLIS Photography Club (2021)" },
        { text: "Volunteer Photographer - A Level Graduation Ceremony 2019" },
      ],
    },
    {
      title: "Leadership & Innovation",
      icon: Award,
      gradient: "from-blue-300/20 to-cyan-300/20",
      iconBg: "bg-blue-500/20",
      achievements: [
        { text: "GEIST International Leadership Program on Education 2019" },
        { text: "Excellence in Transforming Ideas and Leadership" },
      ],
    },
    {
      title: "Competitions & Analytics",
      icon: LineChart,
      gradient: "from-purple-300/20 to-pink-300/20",
      iconBg: "bg-purple-500/20",
      achievements: [
        { text: "Data Visionary: National Data Analytics Competition (NDAC 2025) - Team BracU_data" },
        { text: "Organized by Daffodil International University" },
      ],
    },
    {
      title: "Sports & Clubs",
      icon: Users,
      gradient: "from-green-300/20 to-emerald-300/20",
      iconBg: "bg-green-500/20",
      achievements: [
        { text: "MLIS Intra Badminton Tournament 2018" },
        { text: "MLIS Robotics Club Volunteer - Robotics Exhibition 2019" },
      ],
    },
  ];
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
        "Won Panorama photography competition at Maple Leaf International School among 200 contestants (January 2019)",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Extracurricular Activities Section */}
          <div className="mb-16">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Extracurricular Activities
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Achievements and involvement beyond academics
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {extracurriculars.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <Card
                    key={activity.title}
                    className={`opacity-0 [animation-fill-mode:forwards] animate-scale-in hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-gradient-to-br ${activity.gradient} border-border/50`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-full ${activity.iconBg} flex items-center justify-center mb-4`}>
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-2">{activity.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {activity.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start gap-2 opacity-0 [animation-fill-mode:forwards] animate-fade-in"
                            style={{ animationDelay: `${index * 0.1 + idx * 0.05}s` }}
                          >
                            <span className="text-primary mt-1">•</span>
                            {achievement.link ? (
                              <a 
                                href={achievement.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors underline decoration-dotted"
                              >
                                {achievement.text}
                              </a>
                            ) : (
                              <span>{achievement.text}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* My Hobbies Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              My Hobbies
            </h2>
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
