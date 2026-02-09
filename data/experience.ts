import { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    company: "SnapOn Credit",
    role: "Software Developer",
    startDate: "May 2025",
    endDate: "Present",
    bullets: [
      "Modernized legacy PICK Basic collection system for 300+ users with Python/HTML/CSS interfaces",
      "Built SMS delivery system replacing carrier email-to-text, handling 1,000–2,000 messages/month",
      "Migrated legacy platform to modern terminal emulator and API-driven architecture",
    ],
  },
  {
    company: "Loyola University Chicago",
    role: "Research Assistant",
    startDate: "Oct 2023",
    endDate: "Present",
    bullets: [
      "Built full-stack facial recognition app with React, Flask, and Vercel; implemented CI/CD pipeline with GitHub Actions",
      "Improved system accuracy by 50% through Chakra UI redesign and facial embedding threshold optimization",
      "Led project management through stand-ups, Kanban tracking, and stakeholder collaboration",
    ],
  },
  {
    company: "Smyl Fitness",
    role: "Senior Software Engineer",
    startDate: "Jan 2023",
    endDate: "Sep 2024",
    bullets: [
      "Led 2 development teams to ship functional health screening software in 3 months",
      "Integrated MoveNet pose estimation, improving screening precision by 50%",
    ],
  },
];
