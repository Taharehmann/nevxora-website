import nevxoraLogo from "@/assets/nevxora-logo.png";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  onClick?: () => void;
};

const Logo = ({ className, onClick }: LogoProps) => {
  const image = (
    <img
      src={nevxoraLogo}
      alt="Nevxora"
      className={cn("h-10 w-auto object-contain object-left", className)}
      draggable={false}
    />
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
        aria-label="Nevxora home"
      >
        {image}
      </button>
    );
  }

  return <div className="inline-flex items-center shrink-0">{image}</div>;
};

export default Logo;
