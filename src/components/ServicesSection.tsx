import { Code, Smartphone, Brain, ShoppingCart, Users, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect, useState, useRef, useCallback } from "react";

const ServicesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const pauseUntilRef = useRef<number>(0);

  // Pause auto-scroll for a duration (ms) on user interaction
  const pauseAutoScroll = useCallback((ms = 6000) => {
    pauseUntilRef.current = Date.now() + ms;
  }, []);

  // Auto-scroll functionality — respects pause
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (Date.now() < pauseUntilRef.current) return; // paused
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [api]);

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
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in delivering comprehensive software solutions that drive digital 
            transformation and accelerate business growth through innovative technology.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="relative mx-auto max-w-6xl">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="h-full bg-card/90 border-border/50 hover:bg-card transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-glow group cursor-pointer"
                    onClick={() => pauseAutoScroll()}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-foreground">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" onClick={() => pauseAutoScroll()} />
            <CarouselNext className="hidden md:flex -right-12 lg:-right-16" onClick={() => pauseAutoScroll()} />
          </Carousel>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;