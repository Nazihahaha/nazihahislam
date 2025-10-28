import { BookOpen, Scissors, Camera, Trophy, Users, Camera as CameraIcon, Cpu, LineChart, Award, Instagram } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import photography1 from "@/assets/photography-1.png";
import photography2 from "@/assets/photography-2.png";
import photography3 from "@/assets/photography-3.png";
import photography4 from "@/assets/photography-4.png";
import scrapbook1 from "@/assets/scrapbook-1.png";
import scrapbook2 from "@/assets/scrapbook-2.png";
import scrapbook3 from "@/assets/scrapbook-3.png";
import scrapbook4 from "@/assets/scrapbook-4.png";
import book1 from "@/assets/book1.png";
import book2 from "@/assets/book2.png";
import book3 from "@/assets/book3.png";
import book4 from "@/assets/book4.png";


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
          certificate: "https://drive.google.com/file/d/14NLBk1LItpBPqq2p7Zh5NTPBpLeCS-bu/view?usp=drive_link"
        },
        { 
          text: "Active member of MLIS Photography Club (2021)",
          certificate: "https://drive.google.com/file/d/1Me0Zps4d2P0yzYY9W3p9PcVPMczUYgcp/view?usp=drive_link"
        },
        { 
          text: "Volunteer Photographer - A Level Graduation Ceremony 2019",
          certificate: "https://drive.google.com/file/d/1Wul-s7FHb0MjIQHy9u5kSDSMzOeVnMpY/view?usp=drive_link"
        },
      ],
    },
    {
      title: "Leadership & Innovation",
      icon: Award,
      gradient: "from-blue-300/20 to-cyan-300/20",
      iconBg: "bg-blue-500/20",
      achievements: [
        { 
          text: "GEIST International Leadership Program on Education 2019",
          certificate: "https://drive.google.com/file/d/1aCiw0AWswX_No8kevTRfuDXH20NdlZyx/view?usp=drive_link"
        },
        { text: "Excellence in Transforming Ideas and Leadership" },
      ],
    },
    {
      title: "Competitions & Analytics",
      icon: LineChart,
      gradient: "from-purple-300/20 to-pink-300/20",
      iconBg: "bg-purple-500/20",
      achievements: [
        {
          text: "Participated in University of Innovation Hub Program (UIHP) — secured funding for Grademinds, a pioneer EdTech platform for English‑medium students in Bangladesh",
          link: "https://www.facebook.com/share/p/17aFW1P7az/"
        },
        { 
          text: "Data Visionary: National Data Analytics Competition (NDAC 2025) - Team BracU_data",
          certificate: "https://drive.google.com/file/d/1IOj4lTdxqrbCo7uF6Za67zNSFbrBwSJc/view?usp=drive_link"
        },
        { 
          text: "Organized by Daffodil International University",
          certificate: "https://drive.google.com/file/d/1IOj4lTdxqrbCo7uF6Za67zNSFbrBwSJc/view?usp=drive_link"
        },
        
      ],
    },
    {
      title: "Sports & Clubs",
      icon: Users,
      gradient: "from-green-300/20 to-emerald-300/20",
      iconBg: "bg-green-500/20",
      achievements: [
        { 
          text: "MLIS Intra Badminton Tournament 2018",
          certificate: "https://drive.google.com/file/d/1zHAwpsnQz8hA4Arx2WLSlz8tGPPkRkR-/view?usp=drive_link"
        },
        { 
          text: "MLIS Robotics Club Volunteer - Robotics Exhibition 2019",
          certificate: "https://drive.google.com/file/d/1-ns89YJSwb3Pnc5h2Hb_veUwXDWr7kJ9/view?usp=drive_link"
        },
      ],
    },
  ];

  // Reordered: Photography first, Scrapbooking second, Reading Thriller Books third
  const hobbies = [
    {
      title: "Photography",
      description:
        "I’m passionate about capturing moments and perspectives through the lens of my camera, weaving stories with every shot. My love for landscape and urban photography drives me to chase breathtaking vistas and vibrant city scenes, each frame a new adventure. I’m constantly experimenting with different lighting techniques, playing with shadows and highlights to bring depth and emotion to my images.",
      icon: Camera,
      gradient: "from-orange-300/20 to-yellow-300/20",
      iconBg: "bg-orange-500/20",
      images: [photography1, photography2, photography3, photography4],
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
      images: [scrapbook1, scrapbook2, scrapbook3, scrapbook4],
    },
    {
      title: "Reading Thriller Books",
      description: "Immersing myself in gripping thriller novels that keep me on the edge of my seat.",
      icon: BookOpen,
      gradient: "from-purple-300/20 to-pink-300/20",
      iconBg: "bg-purple-500/20",
      details: [
        "Love psychological thrillers and crime fiction",
        "Favorite authors include Dan Brown and Stephen King",
        "Always hunting for the next page-turner",
        "Enjoy analyzing plot twists and character development",
        "Favourite books include: "
      ],
      images: [book1, book2, book3, book4],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Header */}
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-primary text-lg font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Extracurriculars & Hobbies
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Achievements and passions beyond academics
            </p>
          </div>

          {/* Extracurricular Activities Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Extracurricular Activities
              </h2>
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
                      {activity.achievements.map((achievement, idx) => {
                        const isOrganized = achievement.text === "Organized by Daffodil International University";
                        return (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start gap-2 [animation-fill-mode:forwards] animate-fade-in"
                            style={{ animationDelay: `${index * 0.1 + idx * 0.05}s` }}
                          >
                            <span className="text-primary mt-1">•</span>

                            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-3 w-full min-w-0">
                              <div className="flex-1 min-w-0">
                                {/* allow long text to wrap and not overflow card */}
                                <span className="block break-words whitespace-normal">{achievement.text}</span>

                                {/* certificate/link beneath the "Organized by..." item */}
                                {isOrganized && achievement.certificate && (
                                  <a
                                    href={achievement.certificate}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${achievement.text} certificate (opens in new tab)`}
                                    title="Open certificate (opens in new tab)"
                                    className="text-sm text-primary hover:underline mt-2 inline-block"
                                  >
                                    Certificate
                                  </a>
                                )}
                                {isOrganized && achievement.link && (
                                  <a
                                    href={achievement.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${achievement.text} link (opens in new tab)`}
                                    title="Open link (opens in new tab)"
                                    className="text-sm text-primary hover:underline mt-2 inline-block"
                                  >
                                    Link
                                  </a>
                                )}
                              </div>

                              {/* Default: certificate/link shown inline to the right for other items */}
                              {!isOrganized && achievement.certificate && (
                                <a
                                  href={achievement.certificate}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${achievement.text} certificate (opens in new tab)`}
                                  title="Open certificate (opens in new tab)"
                                  className="ml-2 mt-2 sm:mt-0 text-sm text-primary hover:underline flex-shrink-0"
                                >
                                  Certificate
                                </a>
                              )}
                              {!isOrganized && achievement.link && (
                                <a
                                  href={achievement.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${achievement.text} link (opens in new tab)`}
                                  title="Open link (opens in new tab)"
                                  className="ml-2 mt-2 sm:mt-0 text-sm text-primary hover:underline flex-shrink-0"
                                >
                                  Link
                                </a>
                              )}
                            </div>
                          </li>
                        );
                      })}
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

          {/* Stack hobby cards one by one (single column) and keep images two per row */}
          <div className="grid grid-cols-1 gap-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <Card
                  key={hobby.title}
                  className={`w-full opacity-0 [animation-fill-mode:forwards] animate-scale-in hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-gradient-to-br ${hobby.gradient} border-border/50`}
                  style={{ animationDelay: `${index * 0.25}s` }} // sequential appearance
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-full ${hobby.iconBg} flex items-center justify-center mb-4 group-hover:animate-bounce-subtle`}>
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{hobby.title}</CardTitle>
                    {/* keep description in header only so it doesn't duplicate */}
                    <CardDescription className="text-sm">{hobby.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* show bullets only when 'details' exists; do not re-print description */}
                    {hobby.details && hobby.details.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {hobby.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start gap-2 opacity-0 [animation-fill-mode:forwards] animate-fade-in"
                            style={{ animationDelay: `${index * 0.25 + idx * 0.05}s` }}
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {hobby.images && hobby.images.length > 0 && (
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        {hobby.images.map((image, imgIdx) => (
                          <img
                            key={imgIdx}
                            src={image}
                            alt={`${hobby.title} ${imgIdx + 1}`}
                            className="w-full h-80 md:h-[420px] object-contain rounded-lg bg-muted p-1 transition-transform duration-300 hover:scale-105"
                            style={{ animationDelay: `${index * 0.25 + imgIdx * 0.05}s` }}
                          />
                        ))}

                         {hobby.title === "Photography" && (
                          <div className="mt-6 flex justify-center w-full px-0 sm:px-0"> {/* <-- Added w-full here */}
                              <a
                                  href="https://instagram.com/_nazu0000/" 
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Follow my Photography page on Instagram (opens in new tab)"
                                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white hover:opacity-95 transition shadow-md hover:shadow-lg"
                              >
                                  <Instagram className="h-4 w-4" aria-hidden="true" />
                                  <span className="font-medium">Follow my Photography page</span>
                              </a>
                          </div>
                      )}
                      </div>
                    )}
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
