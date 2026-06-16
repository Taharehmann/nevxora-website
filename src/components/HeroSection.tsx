import { Code, Smartphone, Brain, ShoppingCart, Users, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  const services = [
    { icon: Code, title: "Web Dev", description: "Modern web applications" },
    { icon: Smartphone, title: "Mobile Apps", description: "iOS & Android solutions" },
    { icon: Brain, title: "AI & ML", description: "Intelligent automation" },
    { icon: ShoppingCart, title: "E-Commerce", description: "Complete online stores" },
    { icon: Users, title: "Staff Augmentation", description: "Skilled developer teams" },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-16 px-0"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Layer 1: Mesh color wash */}
        <div className="hero-grain absolute inset-0" />

        {/* Layer 2: Aurora ribbon sweep */}
        <div className="hero-aurora absolute inset-0 opacity-80" style={{ willChange: 'transform' }} />

        {/* Layer 3: Shimmer glint */}
        <div className="hero-shimmer absolute inset-0" />

        {/* Layer 4: Floating ambient orbs — varied colors, GPU-promoted */}
        <div className="absolute -left-20 top-16 h-[28rem] w-[28rem] rounded-full bg-sky-400/10 blur-[60px] animate-float" style={{ willChange: 'transform' }} />
        <div className="absolute -right-16 top-[20%] h-[32rem] w-[32rem] rounded-full bg-indigo-500/8 blur-[70px] animate-float-delayed" style={{ willChange: 'transform' }} />
        <div className="absolute bottom-[10%] left-[45%] h-[24rem] w-[24rem] rounded-full bg-violet-400/6 blur-[60px] animate-float-slow" style={{ willChange: 'transform' }} />
        <div className="absolute top-[40%] left-[15%] h-56 w-56 rounded-full bg-cyan-300/6 blur-[50px] animate-pulse-soft" style={{ willChange: 'opacity' }} />
        <div className="absolute top-[10%] right-[30%] h-40 w-40 rounded-full bg-rose-400/4 blur-[45px] animate-float" style={{ willChange: 'transform', animationDelay: '3s' }} />

        {/* Bottom gradient fade to next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Brand */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="mb-3 text-4xl font-bold sm:text-5xl md:text-7xl">
              <span className="gradient-text">Nevxora</span>
            </h1>
            <p className="text-base font-medium text-muted-foreground sm:text-lg md:text-xl">
              Digital Architects
            </p>
          </div>

          {/* Headline */}
          <div
            className="mb-12 animate-fade-in-up opacity-0"
            style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
          >
            <h2 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl md:text-5xl lg:text-6xl sm:mb-6">
              Building the Future with{" "}
              <span className="gradient-text">Innovative Software Solutions</span>
            </h2>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Transform your digital presence with cutting-edge development services.
              From web applications to AI solutions, we architect tomorrow&apos;s technology today.
            </p>
          </div>

          {/* Service cards */}
          <div className="mx-auto mb-8 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:mb-12 md:grid-cols-5 md:gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group border-border/60 bg-card/80 p-3 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow animate-fade-in-up opacity-0 sm:p-4 md:p-6 last:col-span-2 sm:last:col-span-1"
                style={{
                  animationDelay: `${300 + index * 80}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="rounded-lg bg-gradient-primary p-3 transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="h-5 w-5 text-primary-foreground md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground md:text-base">
                      {service.title}
                    </h3>
                    <p className="mt-1 hidden text-xs text-muted-foreground sm:block md:text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="flex animate-fade-in-up flex-col items-center justify-center gap-3 opacity-0 sm:flex-row sm:gap-4"
            style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              variant="gradient"
              className="w-full sm:w-auto min-h-[44px] px-6 py-3 text-base sm:px-8 sm:text-lg transition-transform duration-200 hover:scale-105"
            >
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="w-full sm:w-auto min-h-[44px] border-primary px-6 py-3 text-base sm:px-8 sm:text-lg text-primary transition-[transform,background-color,color] duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        type="button"
        onClick={() => scrollToSection("services")}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to services"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default HeroSection;
