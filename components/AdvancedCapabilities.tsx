"use client";

import clsx from "clsx";
import { CloudCog, Cpu, ShieldCheck, Workflow } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function AdvancedCapabilities() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={clsx(
        "relative overflow-hidden border-y py-16 md:py-24",
        isDark ? "border-cyan-500/20 bg-orbit-darker" : "border-slate-200 bg-slate-50",
      )}
    >
      <div
        className={clsx(
          "pointer-events-none absolute inset-0",
          isDark
            ? "bg-[radial-gradient(circle_at_10%_15%,rgba(0,199,255,0.14),transparent_38%),radial-gradient(circle_at_90%_85%,rgba(56,189,248,0.1),transparent_42%)]"
            : "bg-[radial-gradient(circle_at_10%_15%,rgba(8,145,178,0.1),transparent_38%),radial-gradient(circle_at_90%_85%,rgba(14,116,144,0.08),transparent_42%)]",
        )}
      />
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px]",
          isDark ? "opacity-[0.06]" : "opacity-[0.04]",
        )}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p
            className={clsx(
              "mb-3 inline-flex rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.18em]",
              isDark
                ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                : "border-cyan-700/20 bg-cyan-100 text-cyan-800",
            )}
          >
            ADVANCED CAPABILITIES
          </p>
          <h2 className={clsx("text-3xl font-bold md:text-4xl", isDark ? "text-white" : "text-slate-900")}>
            Enterprise-Grade Reliability and Intelligence
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article
            className={clsx(
              "group relative min-h-[360px] overflow-hidden rounded-2xl border p-7",
              isDark ? "border-cyan-500/30 bg-orbit-card" : "border-slate-200 bg-white",
            )}
          >
            <div
              className={clsx(
                "pointer-events-none absolute left-0 top-0 h-1.5 w-32 rounded-br-xl",
                isDark ? "bg-gradient-to-r from-cyan-300 to-blue-400" : "bg-gradient-to-r from-cyan-700 to-blue-700",
              )}
            />
            <div className="mb-4 flex items-center gap-3">
              <span
                className={clsx(
                  "inline-flex h-11 w-11 items-center justify-center rounded-xl border",
                  isDark
                    ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                    : "border-cyan-700/20 bg-cyan-100 text-cyan-800",
                )}
              >
                <CloudCog className="h-6 w-6" />
              </span>
              <h3 className={clsx("text-2xl font-bold", isDark ? "text-white" : "text-slate-900")}>DevOps & Cloud Reliability</h3>
            </div>
            <p className={clsx("mb-6 leading-7", isDark ? "text-gray-300" : "text-slate-600")}>
              High-availability infrastructure, monitored operations, and resilient backup strategy for mission-critical ERP workloads.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div
                className={clsx(
                  "rounded-xl border p-3",
                  isDark ? "border-cyan-500/25 bg-black/20" : "border-cyan-700/20 bg-slate-50",
                )}
              >
                <div className={clsx("mb-1 inline-flex items-center gap-2 text-sm font-semibold", isDark ? "text-cyan-200" : "text-cyan-900")}>
                  <ShieldCheck className="h-4 w-4" />
                  Secure Operations
                </div>
                <p className={clsx("text-xs", isDark ? "text-gray-300" : "text-slate-600")}>Access control, encrypted backup, recovery readiness.</p>
              </div>
              <div
                className={clsx(
                  "rounded-xl border p-3",
                  isDark ? "border-cyan-500/25 bg-black/20" : "border-cyan-700/20 bg-slate-50",
                )}
              >
                <div className={clsx("mb-1 inline-flex items-center gap-2 text-sm font-semibold", isDark ? "text-cyan-200" : "text-cyan-900")}>
                  <Workflow className="h-4 w-4" />
                  Automated Delivery
                </div>
                <p className={clsx("text-xs", isDark ? "text-gray-300" : "text-slate-600")}>CI/CD pipelines, observability, and release control.</p>
              </div>
            </div>
          </article>

          <article
            className={clsx(
              "group relative min-h-[360px] overflow-hidden rounded-2xl border p-7",
              isDark ? "border-cyan-500/30 bg-orbit-card" : "border-slate-200 bg-white",
            )}
          >
            <div
              className={clsx(
                "pointer-events-none absolute right-0 top-0 h-1.5 w-32 rounded-bl-xl",
                isDark ? "bg-gradient-to-l from-cyan-300 to-blue-400" : "bg-gradient-to-l from-cyan-700 to-blue-700",
              )}
            />
            <div className="mb-4 flex items-center gap-3">
              <span
                className={clsx(
                  "inline-flex h-11 w-11 items-center justify-center rounded-xl border",
                  isDark
                    ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                    : "border-cyan-700/20 bg-cyan-100 text-cyan-800",
                )}
              >
                <Cpu className="h-6 w-6" />
              </span>
              <h3 className={clsx("text-2xl font-bold", isDark ? "text-white" : "text-slate-900")}>Predictive Analytics & Forecasting</h3>
            </div>
            <p className={clsx("mb-6 leading-7", isDark ? "text-gray-300" : "text-slate-600")}>
              Transform ERP data into actionable forecasting signals for demand planning, inventory optimization, and customer-risk detection.
            </p>
            <div className="space-y-2.5">
              {["Demand Forecasting", "Sales Trend Prediction", "Inventory Forecast Models"].map((item) => (
                <div
                  key={item}
                  className={clsx(
                    "rounded-lg border px-3 py-2 text-sm font-medium",
                    isDark ? "border-cyan-500/25 bg-black/20 text-cyan-100" : "border-cyan-700/20 bg-slate-50 text-cyan-900",
                  )}
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
