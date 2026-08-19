"use client";

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ProjectEntry } from "@/types";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const priorities = {
  primary: "sm:col-span-3",
  secondary: "sm:col-span-2",
  tertiary: "",
};

export function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`border-border bg-card hover:bg-card-hover flex flex-col justify-between rounded-xl border p-4 transition-colors ${
        priorities[project.priority]
      }`}
    >
      <div>
        <h3 className="text-foreground mb-2 text-sm font-semibold">
          {project.title}
        </h3>
        <p className="text-muted mb-2 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex items-end justify-between">
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-accent/10 text-accent rounded-full px-2 py-0.5 text-xs font-medium"
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
              className="text-muted hover:text-foreground transition-colors"
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
              className="text-muted hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
