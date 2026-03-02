"use client";

import clsx from "clsx";
import type { ComponentType } from "react";
import { BadgeCheck, CloudCog, Languages, LifeBuoy, Rocket, Waypoints } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

type ValueCard = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

const defaultValues: ValueCard[] = [
  {
    title: "Local Implementation Team in Bangladesh",
    description: "Dhaka-based experts with strong local business context.",
    icon: Waypoints,
  },
  {
    title: "Bangla & English Training",
    description: "Bilingual training and documentation for faster adoption.",
    icon: Languages,
  },
  {
    title: "Secure Cloud Hosting & Automated Backups",
    description: "Resilient cloud operations with disciplined backups.",
    icon: CloudCog,
  },
  {
    title: "Structured Implementation Methodology",
    description: "Structured rollout model that limits risk and delays.",
    icon: BadgeCheck,
  },
  {
    title: "Fast Support with Clear SLAs",
    description: "Defined response targets with accountable support flow.",
    icon: LifeBuoy,
  },
  {
    title: "Migration from Excel & Legacy Systems",
    description: "Staged migration from legacy tools into clean ERP flows.",
    icon: Rocket,
  },
];

type WhyBlubitProps = {
  values?: ValueCard[];
};

const variantStyles = [
  "rounded-[1.25rem] rounded-tr-[2.5rem]",
  "rounded-[1.25rem] rounded-bl-[2.5rem]",
  "rounded-[2rem] rounded-br-[0.75rem]",
];

export function WhyBlubit({ values = defaultValues }: WhyBlubitProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={clsx("py-16 md:py-24", isDark ? "bg-orbit-dark" : "bg-white")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className={clsx("mb-4 text-4xl font-bold md:text-5xl", isDark ? "text-white" : "text-slate-900")}>Why Blue Orbit</h2>
          <p className={clsx("mx-auto max-w-2xl", isDark ? "text-gray-400" : "text-slate-600")}>
            Local execution strength with enterprise-grade implementation discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value, idx) => (
            <article
              key={value.title}
              className={clsx(
                "group relative overflow-hidden border p-[1.65rem] transition hover:-translate-y-1",
                variantStyles[idx % variantStyles.length],
                isDark
                  ? "border-cyan-500/30 bg-orbit-card hover:border-cyan-300/60"
                  : "border-slate-200 bg-slate-50 hover:border-cyan-700/30",
              )}
            >
              <div
                className={clsx(
                  idx % 2 === 0 ? "pointer-events-none absolute inset-x-0 top-0 h-1.5" : "pointer-events-none absolute inset-y-0 left-0 w-1.5",
                  isDark
                    ? "bg-gradient-to-r from-cyan-300/70 to-blue-400/70"
                    : "bg-gradient-to-r from-cyan-600/70 to-blue-700/70",
                )}
              />
              <div
                className={clsx(
                  "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border",
                  isDark
                    ? "border-cyan-400/45 bg-cyan-400/10 text-cyan-300"
                    : "border-cyan-700/20 bg-cyan-100 text-cyan-800",
                )}
              >
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className={clsx("mb-2 text-lg font-semibold", isDark ? "text-white" : "text-slate-900")}>{value.title}</h3>
              <p className={clsx("text-sm leading-6", isDark ? "text-gray-300" : "text-slate-600")}>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
