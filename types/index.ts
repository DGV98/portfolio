export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  degree: string;
  school: string;
  bio: string;
  initials: string;
  socialLinks: SocialLink[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface ProjectEntry {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  priority: "primary" | "secondary" | "tertiary";
}

export interface PublicationEntry {
  title: string;
  authors: string;
  venue: string;
  year: number;
  url?: string;
}
