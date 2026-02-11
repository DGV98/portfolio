import { ProjectEntry } from "@/types";

export const projects: ProjectEntry[] = [
  {
    title: "Face Recognition",
    description:
      "A full-stack web application developed to track attendance at community tabling events while preserving visitor anonymity. The app leverages browser-based facial recognition to detect repeat visitors and maintain accurate attendance counts — all without storing personally identifiable information.",
    tags: ["TypeScript", "React", "TensorFlow"],
    // repoUrl: "https://github.com/DGV98/fullstack-math",
    demoUrl: "https://community-os-7qjn.vercel.app/",
    priority: "primary",
  },
  {
    title: "Game Hub",
    description:
      "A game discovery and browsing web application built with React and TypeScript, allowing users to explore and filter video games from a comprehensive games database",
    tags: ["TypeScript", "React"],
    repoUrl: "https://github.com/DGV98/game-hub-clone",
    demoUrl: "https://game-hub-tan-one.vercel.app/",
    priority: "secondary",
  },
  {
    title: "Terminal Games",
    description:
      "A Python module for building and playing interactive ascii-style games directly in the terminal using the curses library.",
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
      "A Django-based web scraping platform that consolidates summer program information from multiple websites into a unified, searchable database.",
    tags: ["SQLite", "Pandas", "Django"],
    repoUrl: "https://github.com/DGV98/Scraper",
    priority: "secondary",
  },
];
