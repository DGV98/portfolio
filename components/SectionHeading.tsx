export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-accent mb-4 text-base font-bold tracking-widest uppercase xl:text-2xl">
      {children}
    </h2>
  );
}
