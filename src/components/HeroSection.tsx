import { Code, Smartphone, Brain, ShoppingCart, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import "src/App.css";

const HeroSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Dev",
      description: "Modern web applications"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps", 
      description: "iOS & Android solutions"
    },
    {
      icon: Brain,
      title: "AI & ML",
      description: "Intelligent automation"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description: "Complete online stores"
    },
    {
      icon: Users,
      title: "Staff Augmentation",
      description: "Skilled developer teams"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen pt-16 flex items-center relative"
      style={{
        backgroundImage: `url('/lovable-uploads/7d706b44-e164-4a0c-9e3b-efa7f0302bbf.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Brand Identity */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="gradient-text">Nevxora</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Digital Architects
            </p>
          </div>

          {/* Main Heading */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Building the Future with{" "}
              <span className="gradient-text">
                Innovative Software Solutions
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your digital presence with our cutting-edge development services.
              From web applications to AI solutions, we architect tomorrow's technology today.
            </p>
          </div>

          {/* Service Icons */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-glow">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection("contact")}
              variant="gradient"
              className="px-8 py-3 text-lg"
            >
              Get Started
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
