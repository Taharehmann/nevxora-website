import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

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
      <div className="container mx-auto px-4 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 md:col-span-1">
            <Logo className="h-10 sm:h-12" />
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-medium">
              Digital Architects
            </p>
            <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building the future with innovative software solutions. We architect tomorrow's technology today.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-semibold mb-2.5 text-foreground text-sm sm:text-base">Services</h3>
            <ul className="space-y-0.5">
              {services.map((service, index) => (
                <li key={index} className="leading-tight">
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={() => scrollToSection("services")}
                    onKeyDown={(e) => e.key === "Enter" && scrollToSection("services")}
                    className="inline text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold mb-2.5 text-foreground text-sm sm:text-base">Get in Touch</h3>
            <div className="space-y-1">
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-[3px]" />
                <span className="text-xs sm:text-sm text-muted-foreground leading-tight">
                  <a href="mailto:info@nevxora.com" className="hover:text-primary transition-colors">
                    info@nevxora.com
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-[3px]" />
                <span className="text-xs sm:text-sm text-muted-foreground leading-tight">
                  <a href="tel:+923229657649" className="hover:text-primary transition-colors">
                    +92 3229657649
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-[3px]" />
                <span className="text-xs sm:text-sm text-muted-foreground leading-tight">Islamabad | Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-6 pt-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Nevxora. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link
                to="/privacy-policy"
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span
                role="button"
                tabIndex={0}
                onClick={() => scrollToSection("about")}
                onKeyDown={(e) => e.key === "Enter" && scrollToSection("about")}
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Terms of Service
              </span>
              <span
                role="button"
                tabIndex={0}
                onClick={() => scrollToSection("contact")}
                onKeyDown={(e) => e.key === "Enter" && scrollToSection("contact")}
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Contact
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;