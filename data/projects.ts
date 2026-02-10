import { ProjectEntry } from "@/types";

export const projects: ProjectEntry[] = [
  {
    title: "MathGen",
    description:
      "Full-stack math application with Python API and React frontend for interactive mathematical computations",
    tags: ["React", "Flask", "SQLite"],
    repoUrl: "https://github.com",
    demoUrl: "https://example.com",
    priority: "primary",
  },
  {
    title: "Terminal Games",
    description:
      "Python module to play interactive ascii-style games within your terminal",
    tags: ["Python", "curses"],
    repoUrl: "https://github.com",
    priority: "secondary",
  },
  {
    title: "DARCH",
    description: "Dotfiles for Arch Linux/Hyprland rice",
    tags: ["Hyprland", "Arch Linux", "Lua"],
    repoUrl: "https://github.com/DGV98/DARCH",
    priority: "tertiary",
  },

  {
    title: "Valentines Day Project",
    description:
      "Terminal-based dashboard for monitoring Kubernetes clusters with real-time metrics.",
    tags: ["HTML", "CSS", "JS"],
    repoUrl: "https://github.com/DGV98/valentines",
    demoUrl: "https://valentines-swart-two.vercel.app/",
    priority: "tertiary",
  },
  {
    title: "Summer Programs Scraper",
    description:
      "Minimal static site generator with Markdown support, hot reloading, and plugin system.",
    tags: ["TypeScript", "Node.js"],
    repoUrl: "https://github.com",
    priority: "secondary",
  },
];
