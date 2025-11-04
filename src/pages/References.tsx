import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradientBackground from "@/components/GradientBackground";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, MapPin, Phone } from "lucide-react";
import fardousiProfile from "@/assets/fardousi-profile.jpg";
import iqbalProfile from "@/assets/iqbal-profile.jpg";

const References = () => {
  return (
    <div className="min-h-screen">
      <GradientBackground />
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              References
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Faculty references from my academic journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-stretch">
            {/* Thesis Supervisor Reference */}
            <Card className="h-full overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-purple-500/5">
                <CardTitle className="text-lg md:text-xl">Thesis Supervisor Reference</CardTitle>
              </CardHeader>

              {/* reduced padding and use justify-between so cards align evenly */}
              <CardContent className="p-6 flex flex-col justify-between">
                <div className="grid md:grid-cols-[140px_1fr] gap-6 items-start">
                  {/* Profile Image - slightly smaller */}
                  <div className="mx-auto md:mx-0">
                    <Avatar className="h-32 w-32 border-4 border-primary/20">
                      <AvatarImage src={iqbalProfile} alt="Muhammad Iqbal Hossain" />
                      <AvatarFallback>MIH</AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Information */}
                  <div className="space-y-3">
                    <div>
                      <h2 className="text-xl md:text-2xl font-semibold mb-0.5">Muhammad Iqbal Hossain, PhD</h2>
                      <p className="text-sm md:text-base text-primary font-semibold mb-1">Associate Professor</p>
                      <p className="text-sm text-muted-foreground">Department of Computer Science and Engineering</p>
                      <p className="text-sm text-muted-foreground font-medium mt-1">Brac University</p>
                    </div>

                    <div className="space-y-3 pt-3 border-t">
                      {/* Email */}
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                          <a href="mailto:iqbal.hossain@bracu.ac.bd" className="text-sm text-foreground hover:text-primary transition-colors font-medium">
                            iqbal.hossain@bracu.ac.bd
                          </a>
                        </div>
                      </div>

                      {/* Phone Extension */}
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Extension</p>
                          <p className="text-sm text-foreground font-medium">Ext. 1915</p>
                        </div>
                      </div>

                      {/* Office */}
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Office</p>
                          <div className="text-sm text-foreground space-y-1">
                            <p className="font-medium">Level: 4, Room: 4G22</p>
                            <p>Kha-224 Merul Badda</p>
                            <p>Dhaka 1212, Bangladesh</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Teaching Assistant Reference */}
            <Card className="h-full overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-purple-500/5">
                <CardTitle className="text-lg md:text-xl">Teaching Assistant Reference</CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col justify-between">
                <div className="grid md:grid-cols-[140px_1fr] gap-6 items-start">
                  {/* Profile Image */}
                  <div className="mx-auto md:mx-0">
                    <Avatar className="h-32 w-32 border-4 border-primary/20">
                      <AvatarImage src={fardousiProfile} alt="Fardousi Ara Begum" />
                      <AvatarFallback>FA</AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Information */}
                  <div className="space-y-3">
                    <div>
                      <h2 className="text-xl md:text-2xl font-semibold mb-0.5">Fardousi Ara Begum</h2>
                      <p className="text-sm md:text-base text-primary font-semibold mb-1">Assistant Professor</p>
                      <p className="text-sm text-muted-foreground">Department of Mathematics and Natural Sciences</p>
                      <p className="text-sm text-muted-foreground font-medium mt-1">Brac University</p>
                    </div>

                    <div className="space-y-3 pt-3 border-t">
                      {/* Email */}
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                          <a href="mailto:flucky08@bracu.ac.bd" className="text-sm text-foreground hover:text-primary transition-colors font-medium">
                            flucky08@bracu.ac.bd
                          </a>
                        </div>
                      </div>

                      {/* Phone Extension */}
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Extension</p>
                          <p className="text-sm text-foreground font-medium">Ext. 2132</p>
                        </div>
                      </div>

                      {/* Office */}
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Office</p>
                          <div className="text-sm text-foreground space-y-1">
                            <p className="font-medium">Level: 4, Room: 4G44</p>
                            <p>Kha-224 Merul Badda</p>
                            <p>Dhaka 1212, Bangladesh</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default References;
