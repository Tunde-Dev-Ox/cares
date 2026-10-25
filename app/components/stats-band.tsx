interface StatItem {
  value: string;
  label: string;
}

const statsData: StatItem[] = [
  { value: "28+", label: "States of Operation" },
  { value: "774", label: "Local Govt. Areas" },
  { value: "1,000+", label: "Ward-Level Volunteers" },
  { value: "100%", label: "Accountability-Focused" },
];

export function StatsBand() {
  return (
    <section className="bg-[#eaf1ed] border-y border-[#c9d8d1]/60 py-12 transition-colors duration-300">
      <div className="mx-auto max-w-[1240px] px-6 grid grid-cols-2 gap-8 md:grid-cols-4">
        {statsData.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold tracking-tight text-[#1e4544] leading-none tabular-nums drop-shadow-xs">
              {stat.value}
            </p>
            <p className="mt-3 text-[0.78rem] font-extrabold uppercase tracking-[0.14em] text-[#1e4544]/90">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
