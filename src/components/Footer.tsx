import { Mail, Phone, MapPin } from "lucide-react";
import nevxoraLogo from "@/assets/nevxora-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Web Development",
    "Mobile App Development", 
    "AI & Machine Learning",
    "E-Commerce Solutions",
    "Staff Augmentation"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={nevxoraLogo} alt="Nevxora Logo" className="h-8 w-8" />
              <span className="text-xl font-bold gradient-text">Nevxora</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              Digital Architects
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Building the future with innovative software solutions. We architect tomorrow's technology today.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection("services")}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:hello@nevxora.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@nevxora.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a 
                  href="tel:+15551234567"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Remote & Global</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Nevxora. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button 
                onClick={() => scrollToSection("about")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;