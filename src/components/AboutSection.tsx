import { Rocket, Users, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";

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
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            About <span className="gradient-text">Nevxora</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              We are digital architects who believe in the power of technology to transform businesses. Our
              mission is to build innovative software solutions that drive growth, efficiency, and success.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 100}>
            <Card className="bg-card border-border/60 hover:bg-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-glow h-full">
              <CardContent className="p-4 sm:p-6 text-center">
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
            </AnimatedSection>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <AnimatedSection delay={100}>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-4 sm:mb-6">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To be the leading digital architecture firm that empowers businesses through 
              cutting-edge software solutions, artificial intelligence, and innovative 
              technology platforms.
            </p>
          </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-4 sm:mb-6">Our Approach</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We combine technical expertise with creative problem-solving to deliver 
              solutions that not only meet current needs but also scale for future growth. 
              Every project is crafted with precision, innovation, and attention to detail.
            </p>
          </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-16" delay={100}>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-6 sm:mb-8 text-center">Why Choose Nevxora?</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3 transition-colors duration-200 hover:text-foreground">
                <div className="w-2 h-2 rounded-full bg-gradient-primary mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;