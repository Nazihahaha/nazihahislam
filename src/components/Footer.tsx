import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:nazihahislam3@gmail.com",
      label: "Email",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nazihah-islam",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/Nazihahaha",
      label: "GitHub",
    },
  ];

  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nazihah Islam. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5 text-primary" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
