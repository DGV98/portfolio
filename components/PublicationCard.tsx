"use client";

// import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { PublicationEntry } from "@/types";

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

export function PublicationCard({ pub }: { pub: PublicationEntry }) {
  return (
    <div className="border-border grid grid-cols-11 gap-1 border-b-2 py-4">
      <p className="text-muted col-span-1 text-sm">{pub.year}</p>
      <div className="col-span-7 flex flex-col gap-1 text-left">
        <h3 className="text-foreground text-sm leading-snug font-semibold">
          {pub.title}
        </h3>
        <p className="text-muted text-sm">{pub.authors}</p>
      </div>
      <p className="text-muted col-span-2 px-2 text-sm">{pub.journal}</p>
      {pub.url && (
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-foreground col-span-1 flex justify-center font-medium transition-colors"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      )}
    </div>
    // return (
    //   <motion.div
    //     variants={cardVariants}
    //     className="border-border bg-card flex flex-col justify-between rounded-xl border p-5"
    //   >
    //     <div>
    //       <h3 className="text-foreground mb-2 text-sm leading-snug font-semibold">
    //         {pub.title}
    //       </h3>
    //       <p className="text-muted mb-1 text-xs">{pub.authors}</p>
    //       <p className="text-muted text-xs">
    //         {pub.journal}, {pub.year}
    //       </p>
    //     </div>

    // {pub.url && (
    //   <a
    //     href={pub.url}
    //     target="_blank"
    //     rel="noopener noreferrer"
    //     className="text-accent hover:text-foreground mt-4 inline-flex items-center gap-1 text-xs font-medium transition-colors"
    //   >
    //     View paper <ExternalLink className="h-3 w-3" />
    //   </a>
    // )}
    //   </motion.div>
  );
}
