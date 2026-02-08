import { ProjectEntry } from "@/types";

export const projects: ProjectEntry[] = [
  {
    title: "Distributed Task Queue",
    description:
      "A high-performance distributed task queue built with Go, supporting priority scheduling, retries, and dead-letter queues.",
    tags: ["Go", "Redis", "gRPC"],
    repoUrl: "https://github.com",
    featured: true,
  },
  {
    title: "ML Model Registry",
    description:
      "Self-hosted model registry for tracking experiments, versioning models, and managing deployments.",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    repoUrl: "https://github.com",
    demoUrl: "https://example.com",
    featured: true,
  },
  {
    title: "CLI Dashboard",
    description:
      "Terminal-based dashboard for monitoring Kubernetes clusters with real-time metrics.",
    tags: ["Rust", "TUI"],
    repoUrl: "https://github.com",
    featured: false,
  },
  {
    title: "Static Site Generator",
    description:
      "Minimal static site generator with Markdown support, hot reloading, and plugin system.",
    tags: ["TypeScript", "Node.js"],
    repoUrl: "https://github.com",
    featured: false,
  },
  {
    title: "Auth Microservice",
    description:
      "JWT-based authentication service with OAuth2 support, rate limiting, and audit logging.",
    tags: ["Go", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com",
    featured: false,
  },
  {
    title: "Data Viz Library",
    description:
      "Lightweight charting library for React with support for responsive layouts and theming.",
    tags: ["TypeScript", "React", "D3"],
    repoUrl: "https://github.com",
    demoUrl: "https://example.com",
    featured: false,
  },
];
