"use client";

import { motion } from "framer-motion";
import { ProjectEntry } from "@/types";
import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export function ProjectsSection({ projects }: { projects: ProjectEntry[] }) {
  return (
    <section>
      <SectionHeading>Projects</SectionHeading>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
