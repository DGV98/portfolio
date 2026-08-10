"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PublicationEntry } from "@/types";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function PublicationCard({ pub }: { pub: PublicationEntry }) {
  return (
    <motion.div
      variants={cardVariants}
      className="border-border bg-card flex flex-col justify-between rounded-xl border p-5"
    >
      <div>
        <h3 className="text-foreground mb-2 text-sm leading-snug font-semibold">
          {pub.title}
        </h3>
        <p className="text-muted mb-1 text-xs">{pub.authors}</p>
        <p className="text-muted text-xs">
          {pub.venue}, {pub.year}
        </p>
      </div>

      {pub.url && (
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-foreground mt-4 inline-flex items-center gap-1 text-xs font-medium transition-colors"
        >
          View paper <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </motion.div>
  );
}
