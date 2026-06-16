import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/lib/supabase";
import AnimatedSection from "@/components/AnimatedSection";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm(formData);

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@nevxora.com",
      href: "mailto:info@nevxora.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92  3229657649",
      href: "tel:+92 3229657649"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad | Pakistan",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to build something amazing? Let's discuss your project and bring your vision to life.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <AnimatedSection delay={100}>
            <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're here to help you transform your ideas into reality. Reach out to us
                and let's discuss how we can accelerate your digital transformation journey.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <info.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
          <Card className="bg-card border-border/60 shadow-card transition-[box-shadow] duration-300 hover:shadow-glow">
            <CardHeader>
              <CardTitle className="text-xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-background/50 border-border resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="gradient"
                  className="w-full"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;