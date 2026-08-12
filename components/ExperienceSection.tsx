import { ExperienceEntry } from "@/types";
import { SectionHeading } from "./SectionHeading";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceSection({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <section>
      <SectionHeading>Experience</SectionHeading>
      <div>
        {entries.map((entry, i) => (
          <ExperienceItem key={i} entry={entry} />
        ))}
      </div>
    </section>
  );
}
