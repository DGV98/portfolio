export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-accent mb-4 text-base font-semibold tracking-widest uppercase">
      {children}
    </h2>
  );
}
