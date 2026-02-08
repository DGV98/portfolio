export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-accent">
      {children}
    </h2>
  );
}
