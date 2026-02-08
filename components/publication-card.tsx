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
      className="flex flex-col justify-between rounded-xl border border-border bg-card p-5"
    >
      <div>
        <h3 className="mb-2 text-sm font-semibold leading-snug text-foreground">
          {pub.title}
        </h3>
        <p className="mb-1 text-xs text-muted">{pub.authors}</p>
        <p className="text-xs text-muted">
          {pub.venue}, {pub.year}
        </p>
      </div>

      {pub.url && (
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent transition-colors hover:text-foreground"
        >
          View paper <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </motion.div>
  );
}
