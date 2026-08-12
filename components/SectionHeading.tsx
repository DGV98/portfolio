export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-accent mb-8 text-sm font-semibold tracking-widest uppercase">
      {children}
    </h2>
  );
}
