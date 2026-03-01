interface StatItem {
  label: string;
  value: string;
}

interface ProofStatsProps {
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  { label: "Happy Clients", value: "50+" },
  { label: "Successful Implementations", value: "120+" },
  { label: "Modules Configured", value: "1000+" },
  { label: "Team Members", value: "25+" },
  { label: "Years of Experience", value: "10+" },
  { label: "Average Go-Live Time", value: "3 months" },
];

export function ProofStats({ stats = defaultStats }: ProofStatsProps) {
  return (
    <section className="py-16 md:py-24 bg-orbit-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Track Record
          </h2>
          <p className="text-gray-400">
            Proven expertise delivering results across Bangladesh
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-cyan-500/30 bg-orbit-card p-6 text-center transition hover:border-cyan-400/60 hover:bg-orbit-card/80"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

