import { Rocket, Users, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const stats = [
    {
      icon: Rocket,
      number: "50+",
      label: "Projects Delivered"
    },
    {
      icon: Users,
      number: "25+", 
      label: "Happy Clients"
    },
    {
      icon: Target,
      number: "3+",
      label: "Years Experience"
    },
    {
      icon: Lightbulb,
      number: "100%",
      label: "Innovation Focus"
    }
  ];

  const reasons = [
    "Expert team with cutting-edge technology skills",
    "Custom solutions tailored to your business needs", 
    "Agile development process with regular updates",
    "Post-launch support and continuous optimization"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Nevxora</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              We are digital architects who believe in the power of technology to transform businesses. Our
              mission is to build innovative software solutions that drive growth, efficiency, and success.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-glow">
              <CardContent className="p-6 text-center">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold gradient-text">
                      {stat.number}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Our Vision */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-6">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To be the leading digital architecture firm that empowers businesses through 
              cutting-edge software solutions, artificial intelligence, and innovative 
              technology platforms.
            </p>
          </div>

          {/* Our Approach */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-6">Our Approach</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We combine technical expertise with creative problem-solving to deliver 
              solutions that not only meet current needs but also scale for future growth. 
              Every project is crafted with precision, innovation, and attention to detail.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Why Choose Nevxora?</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-gradient-primary mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;