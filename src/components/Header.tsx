import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("nevxora-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleDarkMode = () => setIsDark((prev) => !prev);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navLinkClass =
    "text-muted-foreground hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 animate-slide-down",
        isScrolled
          ? "border-border bg-background/95 shadow-card backdrop-blur-md"
          : "border-transparent bg-background/70 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo onClick={() => scrollToSection("hero")} />

          <nav className="hidden items-center space-x-5 md:flex lg:space-x-8">
            {[
              { id: "hero", label: "Home" },
              { id: "services", label: "Services" },
              { id: "about", label: "About" },
              { id: "team", label: "Team" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={navLinkClass}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={toggleDarkMode}
              className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/80 text-muted-foreground transition-[border-color,color,box-shadow] duration-200 hover:border-primary/40 hover:text-primary hover:shadow-glow"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              id="dark-mode-toggle"
            >
              <Sun className={cn(
                "absolute h-4 w-4 transition-[transform,opacity] duration-300",
                isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
              )} />
              <Moon className={cn(
                "absolute h-4 w-4 transition-[transform,opacity] duration-300",
                isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
              )} />
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="gradient"
              className="transition-transform duration-200 hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          <button
            className="text-foreground md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-border py-4 md:hidden animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {[
                { id: "hero", label: "Home" },
                { id: "services", label: "Services" },
                { id: "about", label: "About" },
                { id: "team", label: "Team" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={toggleDarkMode}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/80 text-muted-foreground transition-[border-color,color] duration-200 hover:border-primary/40 hover:text-primary"
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                  id="dark-mode-toggle-mobile"
                >
                  <Sun className={cn(
                    "absolute h-4 w-4 transition-[transform,opacity] duration-300",
                    isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                  )} />
                  <Moon className={cn(
                    "absolute h-4 w-4 transition-[transform,opacity] duration-300",
                    isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                  )} />
                </button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="gradient"
                  className="flex-1"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
