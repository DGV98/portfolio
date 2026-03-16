import { ProjectEntry } from "@/types";

export const projects: ProjectEntry[] = [
  {
    title: "RentPulse",
    description:
      "Application for rent risk scoring, targeted towards landlords with smaller portfolios to track tenant payments and automate rent reminders.",
    tags: ["TypeScript", "React", "Supabase", "Stripe"],
    // repoUrl: "https://github.com/DGV98/fullstack-math",
    demoUrl: "https://www.rentpulse.dev",
    priority: "primary",
  },
  {
    title: "Game Hub",
    description:
      "Game discovery app for browsing and filtering video games from a comprehensive games database.",
    tags: ["TypeScript", "React"],
    repoUrl: "https://github.com/DGV98/game-hub-clone",
    demoUrl: "https://game-hub-tan-one.vercel.app/",
    priority: "tertiary",
  },
  {
    title: "Face Recognition",
    description:
      "Privacy-first attendance tracker using browser-based facial recognition to count repeat visitors without storing personal data.",
    tags: ["TypeScript", "React", "TensorFlow"],
    // repoUrl: "https://github.com/DGV98/fullstack-math",
    demoUrl: "https://community-os-7qjn.vercel.app/",
    priority: "secondary",
  },

  {
    title: "Terminal Games",
    description:
      "Interactive ASCII games playable directly in the terminal using Python's curses library.",
    tags: ["Python", "curses"],
    repoUrl: "https://github.com/DGV98/term_games",
    priority: "secondary",
  },
  {
    title: "DARCH",
    description: "Dotfiles for Arch Linux/Hyprland rice",
    tags: ["Hyprland", "Arch Linux", "Lua"],
    repoUrl: "https://github.com/DGV98/DARCH",
    priority: "tertiary",
  },
];
