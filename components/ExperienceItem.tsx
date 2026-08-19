import { ExperienceEntry } from "@/types";

export function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="relative flex gap-6 pb-2 last:pb-0">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div className="border-accent bg-background mt-1.5 h-3 w-3 rounded-full border-2" />
        <div className="bg-border w-px flex-1" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-foreground text-sm font-semibold">
            {entry.role}{" "}
            <span className="text-muted font-normal">at {entry.company}</span>
          </h3>
          <span className="text-muted text-xs whitespace-nowrap">
            {entry.startDate} — {entry.endDate}
          </span>
        </div>
        <ul className="mt-2 space-y-1">
          {entry.bullets.map((bullet, i) => (
            <li key={i} className="text-muted text-sm leading-relaxed">
              • {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
