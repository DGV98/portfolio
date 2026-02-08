import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  GraduationCap,
} from "lucide-react";
import { SocialLink } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
  "graduation-cap": GraduationCap,
};

export function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex gap-3">
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="rounded-lg p-2 text-muted transition-colors hover:bg-card hover:text-foreground"
          >
            {Icon && <Icon className="h-5 w-5" />}
          </a>
        );
      })}
    </div>
  );
}
