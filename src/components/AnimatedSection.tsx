import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

const directionClasses = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
  none: "",
};

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0",
        isInView ? "opacity-100 translate-x-0 translate-y-0" : cn("opacity-0", directionClasses[direction]),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
