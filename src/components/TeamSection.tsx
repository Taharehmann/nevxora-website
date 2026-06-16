import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import daimWaseemPhoto from "@/assets/team/daim-waseem.png";
import tahaRehmanPhoto from "@/assets/team/taha-rehman.png";
import shehryarRasheedPhoto from "@/assets/team/shehryar-rasheed.png";
import umarDarazPhoto from "@/assets/team/umar-daraz.png";

type TeamMember = {
  name: string;
  role: string;
  experience: string;
  bio: string;
  skills: string[];
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Daim Waseem",
    role: "FOUNDER",
    experience: "5+ years",
    bio: "Business leader driving growth initiatives and strategic partnership development.",
    skills: [
      "Business Development",
      "Client Acquisition",
      "Revenue Growth",
      "Innovation Strategy",
    ],
    image: daimWaseemPhoto,
  },
  {
    name: "Taha Rehman",
    role: "CO-Founder & CEO",
    experience: "3+ years",
    bio: "Leading business operations and developing high-performance digital products.",
    skills: [
      "Full Stack Solutions",
      "Web Development",
      "Flutter Development",
      "Team Leadership",
    ],
    image: tahaRehmanPhoto,
  },
  {
    name: "Shehryar Rasheed",
    role: "CLOUD ENGINEER",
    experience: "3+ years",
    bio: "Building secure, scalable, and automated cloud systems for efficient software delivery.",
    skills: [
      "Cloud Infrastructure",
      "CI/CD Automation",
      "Container Orchestration",
      "System Reliability",
    ],
    image: shehryarRasheedPhoto,
  },
  {
    name: "Umar Daraz",
    role: "AI/ML ENGINEER",
    experience: "2+ years",
    bio: "AI/ML Engineer specialized in machine learning and intelligent solutions.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Data Analytics",
      "AI Solutions",
    ],
    image: umarDarazPhoto,
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the experts behind Nevxora — passionate professionals dedicated to
            delivering exceptional software solutions.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 100}>
              <Card
                className="border-primary/25 bg-card shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-glow h-full"
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="mb-6 overflow-hidden rounded-xl border border-border/60">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="aspect-square w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm font-bold uppercase tracking-wide text-primary">
                    {member.role}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{member.experience}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>

                  <div className="mt-6 flex flex-col gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
