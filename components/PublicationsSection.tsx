"use client";

import { PublicationEntry } from "@/types";
import { SectionHeading } from "./SectionHeading";
import { PublicationCard } from "./PublicationCard";

export function PublicationsSection({
  publications,
}: {
  publications: PublicationEntry[];
}) {
  return (
    <section>
      <SectionHeading>Publications</SectionHeading>
      <div className="text-muted border-border grid grid-cols-11 gap-1 border-b-2 pb-2 text-sm font-semibold tracking-wider">
        <p className="col-span-1">YEAR</p>
        <p className="col-span-7">TITLE</p>
        <p className="col-span-2 px-2">JOURNAL</p>
        <div className="col-span-1"></div>
      </div>
      {publications.map((pub, i) => (
        <PublicationCard key={i} pub={pub} />
      ))}
    </section>
  );
}
