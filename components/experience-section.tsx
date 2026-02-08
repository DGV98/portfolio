import { ExperienceEntry } from "@/types";
import { SectionHeading } from "./section-heading";
import { ExperienceItem } from "./experience-item";

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
