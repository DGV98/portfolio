"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { ProjectEntry } from "@/types";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:bg-card-hover ${
        project.featured ? "sm:col-span-2" : ""
      }`}
    >
      <div>
        <h3 className="mb-2 text-sm font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      </div>

      <div className="flex items-end justify-between">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Source code"
              className="text-muted transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="text-muted transition-colors hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
