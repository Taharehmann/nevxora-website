import { Code, Smartphone, Brain, ShoppingCart, Users, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and cutting-edge technologies. Responsive, scalable, and optimized for performance.",
      features: [
        "React & Next.js",
        "API Integration", 
        "Full-Stack Development",
        "Performance Optimization"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
      features: [
        "iOS & Android",
        "UI/UX Design",
        "Cross-Platform",
        "App Store Optimization"
      ]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning to automate processes and drive insights.",
      features: [
        "Custom AI Models",
        "Automation",
        "Data Analytics", 
        "Predictive Analytics"
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with secure payment processing, inventory management, and customer engagement tools.",
      features: [
        "Payment Processing",
        "Analytics Dashboard",
        "Inventory Management",
        "Customer Support"
      ]
    },
    {
      icon: Users,
      title: "Staff Augmentation",
      description: "Skilled developers and technical professionals to seamlessly integrate with your existing team and accelerate project delivery.",
      features: [
        "Vetted Developers",
        "Flexible Engagement",
        "Domain Expertise",
        "Seamless Integration"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in delivering comprehensive software solutions that drive digital 
            transformation and accelerate business growth through innovative technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-card group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;