"use client";

import { motion } from "framer-motion";
import { PublicationEntry } from "@/types";
import { SectionHeading } from "./section-heading";
import { PublicationCard } from "./publication-card";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export function PublicationsSection({ publications }: { publications: PublicationEntry[] }) {
  return (
    <section>
      <SectionHeading>Publications</SectionHeading>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        {publications.map((pub) => (
          <PublicationCard key={pub.title} pub={pub} />
        ))}
      </motion.div>
    </section>
  );
}
