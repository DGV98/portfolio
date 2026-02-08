"use client";

import { useEffect, useState } from "react";

interface ScrollNavigationProps {
  sections: Array<{
    id: string;
    label: string;
  }>;
}

export function ScrollNavigation({ sections }: ScrollNavigationProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    const observers = sections.map((section) => {
      const element = document.getElementById(section.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        {
          threshold: 0.5,
          rootMargin: "-10% 0px -10% 0px",
        },
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
      <ul className="flex flex-col items-end gap-4">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center justify-end"
              aria-label={`Navigate to ${section.label}`}
            >
              <span
                className={`absolute right-full mr-3 whitespace-nowrap text-xs font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? "translate-x-0 opacity-100 text-foreground"
                    : "translate-x-2 opacity-0 text-muted group-hover:translate-x-0 group-hover:opacity-100"
                }`}
              >
                {section.label}
              </span>
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? "w-12 bg-accent"
                    : "w-6 bg-muted group-hover:w-8 group-hover:bg-foreground"
                }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
