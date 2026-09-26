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
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200; // 1.2 seconds fast count
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Ease-out cubic formula for snappy start and smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(
        statsData.map((stat) => Math.floor(easeOut * stat.targetNumber))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts(statsData.map((stat) => stat.targetNumber));
      }
    };

    requestAnimationFrame(animate);
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="bg-[#eaf1ed] border-y border-[#c9d8d1]/60 py-12 transition-colors duration-300"
    >
      <div className="mx-auto max-w-[1240px] px-6 grid grid-cols-2 gap-8 md:grid-cols-4">
        {statsData.map((stat, idx) => {
          const countVal = counts[idx];
          const displayVal =
            countVal >= 1000 ? countVal.toLocaleString() : countVal;

          return (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ease-out transform ${
                isInView
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-95"
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <p className="text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold tracking-tight text-[#1e4544] leading-none tabular-nums drop-shadow-xs">
                {displayVal}
                <span className="text-[#de232b] ml-0.5">{stat.suffix}</span>
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
