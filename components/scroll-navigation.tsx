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
        }
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
      const targetPosition = element.offsetTop;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1200;
      let start: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
      <ul className="flex flex-col gap-4">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center gap-3"
              aria-label={`Navigate to ${section.label}`}
            >
              <span
                className={`text-xs font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? "translate-x-0 opacity-100 text-foreground"
                    : "-translate-x-2 opacity-0 text-muted group-hover:translate-x-0 group-hover:opacity-100"
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
