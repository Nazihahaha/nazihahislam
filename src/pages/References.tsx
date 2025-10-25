import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarryBackground from "@/components/StarryBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import fardousiProfile from "@/assets/fardousi-profile.jpg";
const References = () => {
  return <div className="min-h-screen">
      <StarryBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            References
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Faculty reference from my teaching assistant experience
          </p>

          <Card className="overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader className="bg-gradient-to-br from-primary/5 to-purple-500/5">
              <CardTitle className="text-2xl">Teaching Assistant Reference</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
                {/* Profile Image */}
                <div className="mx-auto md:mx-0">
                  
                </div>

                {/* Information */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Fardousi Ara Begum</h2>
                    <p className="text-xl text-primary font-semibold mb-1">Assistant Professor</p>
                    <p className="text-muted-foreground">Department of Mathematics and Natural Sciences</p>
                    <p className="text-muted-foreground font-medium mt-1">Brac University</p>
                  </div>

                  <div className="space-y-4 pt-4 border-t">
                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                        <a href="mailto:flucky08@bracu.ac.bd" className="text-foreground hover:text-primary transition-colors font-medium">
                          flucky08@bracu.ac.bd
                        </a>
                      </div>
                    </div>

                    {/* Phone Extension */}
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Extension</p>
                        <p className="text-foreground font-medium">Ext. 2132</p>
                      </div>
                    </div>

                    {/* Office */}
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Office</p>
                        <div className="text-foreground space-y-1">
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
      </main>

      <Footer />
    </div>;
};
export default References;