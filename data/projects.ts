import { ProjectEntry } from "@/types";

export const projects: ProjectEntry[] = [
  {
    title: "Face Recognition",
    description:
      "Privacy-first attendance tracker using browser-based facial recognition to count repeat visitors without storing personal data.",
    tags: ["TypeScript", "React", "TensorFlow"],
    // repoUrl: "https://github.com/DGV98/fullstack-math",
    demoUrl: "https://community-os-7qjn.vercel.app/",
    priority: "primary",
  },
  {
    title: "Game Hub",
    description:
      "Game discovery app for browsing and filtering video games from a comprehensive games database.",
    tags: ["TypeScript", "React"],
    repoUrl: "https://github.com/DGV98/game-hub-clone",
    demoUrl: "https://game-hub-tan-one.vercel.app/",
    priority: "secondary",
  },
  {
    title: "Terminal Games",
    description:
      "Interactive ASCII games playable directly in the terminal using Python's curses library.",
    tags: ["Python", "curses"],
    repoUrl: "https://github.com/DGV98/term_games",
    priority: "tertiary",
  },
  {
    title: "DARCH",
    description: "Dotfiles for Arch Linux/Hyprland rice",
    tags: ["Hyprland", "Arch Linux", "Lua"],
    repoUrl: "https://github.com/DGV98/DARCH",
    priority: "tertiary",
  },
  {
    title: "Summer Programs Scraper",
    description:
      "Web scraper that aggregates summer program listings from multiple sites into one searchable database.",
    tags: ["SQLite", "Pandas", "Django"],
    repoUrl: "https://github.com/DGV98/Scraper",
    priority: "secondary",
  },
];
