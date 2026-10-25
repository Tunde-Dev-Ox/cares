"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  targetNumber: number;
  suffix: string;
  label: string;
}

const statsData: StatItem[] = [
  { targetNumber: 28, suffix: "+", label: "States of Operation" },
  { targetNumber: 774, suffix: "", label: "Local Govt. Areas" },
  { targetNumber: 1000, suffix: "+", label: "Ward-Level Volunteers" },
  { targetNumber: 100, suffix: "%", label: "Accountability-Focused" },
];

export function StatsBand() {
  const [isInView, setIsInView] = useState(false);
  const [counts, setCounts] = useState(() =>
    statsData.map((stat) => stat.targetNumber),
  );
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) {
          return;
        }

        hasAnimated.current = true;
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        if (!prefersReducedMotion) {
          setCounts(statsData.map(() => 0));
        }

        setIsInView(true);
      },
      { threshold: 0.2 },
    );

    const section = containerRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (
      !isInView ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const duration = 1200;
    const startTime = performance.now();
    let frameId = 0;

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(
        statsData.map((stat) => Math.floor(easedProgress * stat.targetNumber)),
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="bg-[#eaf1ed] border-y border-[#c9d8d1]/60 py-12 transition-colors duration-300"
    >
      <div className="mx-auto max-w-310 px-6 grid grid-cols-2 gap-8 md:grid-cols-4">
        {statsData.map((stat, index) => {
          const count = counts[index];
          const displayCount = count >= 1000 ? count.toLocaleString() : count;

          return (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ease-out motion-reduce:transition-none ${isInView
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-6 scale-95 opacity-0"
                }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <p className="text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold tracking-tight text-[#1e4544] leading-none tabular-nums drop-shadow-xs">
                {displayCount}
                <span className="ml-0.5 text-[#de232b]">{stat.suffix}</span>
              </p>
              <p className="mt-3 text-[0.78rem] font-extrabold uppercase tracking-[0.14em] text-[#1e4544]/90">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
