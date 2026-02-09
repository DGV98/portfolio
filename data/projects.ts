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
      "Self-hosted model registry for tracking experiments, versioning models, and managing deployments.",
    tags: ["Python", "curses"],
    repoUrl: "https://github.com",
    priority: "secondary",
  },
  {
    title: "Valentines Day Project",
    description:
      "Terminal-based dashboard for monitoring Kubernetes clusters with real-time metrics.",
    tags: ["HTML", "CSS", "JS"],
    repoUrl: "https://github.com",
    demoUrl: "https://example.com",
    priority: "tertiary",
  },
  {
    title: "Static Site Generator",
    description:
      "Minimal static site generator with Markdown support, hot reloading, and plugin system.",
    tags: ["TypeScript", "Node.js"],
    repoUrl: "https://github.com",
    priority: "tertiary",
  },
  {
    title: "Auth Microservice",
    description:
      "JWT-based authentication service with OAuth2 support, rate limiting, and audit logging.",
    tags: ["Go", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com",
    priority: "tertiary",
  },
  {
    title: "Data Viz Library",
    description:
      "Lightweight charting library for React with support for responsive layouts and theming.",
    tags: ["TypeScript", "React", "D3"],
    repoUrl: "https://github.com",
    demoUrl: "https://example.com",
    priority: "tertiary",
  },
];
