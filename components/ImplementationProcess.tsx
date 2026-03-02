"use client";

import clsx from "clsx";
import { CheckCircle2 } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  { step: 1, title: "Discovery Workshop", description: "Map goals, scope, and constraints." },
  { step: 2, title: "Solution Blueprint", description: "Design process and module plan." },
  { step: 3, title: "Configuration & Migration", description: "Set up modules and import data." },
  { step: 4, title: "Custom Development", description: "Build required custom features." },
  { step: 5, title: "Testing & UAT", description: "Validate with business stakeholders." },
  { step: 6, title: "Go-Live", description: "Launch with controlled transition." },
  { step: 7, title: "Ongoing Support", description: "Optimize, train, and support teams." },
];

const benefits = [
  { title: "Faster Time to Value", desc: "Phased execution keeps deployment momentum high." },
  { title: "Reduced Delivery Risk", desc: "Milestones and checkpoints keep implementation controlled." },
  { title: "High Team Adoption", desc: "Training and UAT ensure confidence before go-live." },
];

export function ImplementationProcess() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={clsx("py-16 md:py-24", isDark ? "bg-orbit-darker" : "bg-slate-100")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className={clsx("mb-4 text-4xl font-bold md:text-5xl", isDark ? "text-white" : "text-slate-900")}>Our Implementation Process</h2>
          <p className={clsx("mx-auto max-w-3xl", isDark ? "text-gray-400" : "text-slate-600")}>
            A compact 7-step delivery flow from discovery to long-term support.
          </p>
        </div>

        <div
          className={clsx(
            "mb-8 hidden h-px w-full xl:block",
            isDark ? "bg-gradient-to-r from-cyan-300/10 via-cyan-300/50 to-cyan-300/10" : "bg-gradient-to-r from-cyan-700/10 via-cyan-700/45 to-cyan-700/10",
          )}
        />

        <div className="flex gap-3 overflow-x-auto pb-1 md:snap-x md:snap-mandatory xl:grid xl:grid-cols-7 xl:overflow-visible">
          {steps.map((item) => (
            <article
              key={item.step}
              className={clsx(
                "group relative min-w-[220px] snap-start overflow-hidden rounded-xl border p-4 pt-7 transition duration-300 hover:-translate-y-0.5 md:min-w-[260px] xl:min-w-0",
                isDark
                  ? "border-cyan-500/30 bg-orbit-card hover:border-cyan-300/60"
                  : "border-slate-200 bg-white hover:border-cyan-700/30",
              )}
            >
              <div
                className={clsx(
                  "pointer-events-none absolute -left-px -top-px h-5 w-5 rounded-br-md",
                  isDark ? "bg-orbit-darker" : "bg-slate-100",
                )}
              />
              <span
                className={clsx(
                  "absolute left-3 top-2 text-xs font-bold tracking-[0.04em]",
                  isDark ? "text-cyan-300/85" : "text-cyan-800/85",
                )}
              >
                {String(item.step).padStart(2, "0")}
              </span>

              <h3 className={clsx("mb-1 text-sm font-semibold leading-5", isDark ? "text-white" : "text-slate-900")}>{item.title}</h3>

              <p className={clsx("text-xs leading-5", isDark ? "text-gray-300" : "text-slate-600")}>Outcome: {item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={clsx(
                "rounded-xl border p-3.5",
                isDark ? "border-cyan-500/30 bg-orbit-card" : "border-slate-200 bg-white",
              )}
            >
              <div className={clsx("mb-2 inline-flex items-center gap-2", isDark ? "text-cyan-300" : "text-cyan-800")}>
                <CheckCircle2 className="h-4 w-4" />
                <h4 className={clsx("text-sm font-semibold", isDark ? "text-white" : "text-slate-900")}>{benefit.title}</h4>
              </div>
              <p className={clsx("text-xs", isDark ? "text-gray-400" : "text-slate-600")}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
