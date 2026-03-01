import { CloudCog, Cpu } from "lucide-react";

export function AdvancedCapabilities() {
  return (
    <section className="border-y border-cyan-500/20 bg-orbit-darker py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-xl border border-cyan-500/30 bg-orbit-card p-8">
          <div className="mb-4 inline-flex rounded-lg border border-cyan-400/40 bg-cyan-400/10 p-3 text-cyan-300">
            <CloudCog className="h-7 w-7" />
          </div>
          <h3 className="mb-3 text-2xl font-bold text-white">DevOps & Cloud Reliability</h3>
          <p className="text-gray-300">
            High-availability hosting, backup routines, monitoring, and performance tuning for critical ERP workloads.
          </p>
        </article>

        <article className="rounded-xl border border-cyan-500/30 bg-orbit-card p-8">
          <div className="mb-4 inline-flex rounded-lg border border-cyan-400/40 bg-cyan-400/10 p-3 text-cyan-300">
            <Cpu className="h-7 w-7" />
          </div>
          <h3 className="mb-3 text-2xl font-bold text-white">Predictive Analytics & Forecasting</h3>
          <p className="text-gray-300">
            Use ERP data to generate demand forecasts, risk indicators, and proactive operational recommendations.
          </p>
        </article>
      </div>
    </section>
  );
}

