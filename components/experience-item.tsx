import { ExperienceEntry } from "@/types";

export function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="relative flex gap-6 pb-10 last:pb-0">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div className="mt-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
        <div className="w-px flex-1 bg-border" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-sm font-semibold text-foreground">
            {entry.role}{" "}
            <span className="font-normal text-muted">at {entry.company}</span>
          </h3>
          <span className="whitespace-nowrap text-xs text-muted">
            {entry.startDate} — {entry.endDate}
          </span>
        </div>
        <ul className="mt-2 space-y-1">
          {entry.bullets.map((bullet, i) => (
            <li key={i} className="text-sm leading-relaxed text-muted">
              • {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
