"use client";

import clsx from "clsx";
import { CloudCog, ScanSearch, Server, ShieldCheck } from "lucide-react";
import {
  featureCard,
  sectionContainer,
  sectionEyebrow,
  sectionLead,
  sectionSpacing,
  sectionTitle,
  surfaceCard,
} from "@/lib/homepageStyles";
import { useTheme } from "@/components/ThemeProvider";

const capabilityPanels = [
  {
    title: "Operational Reliability",
    description:
      "Blue Orbit supports Bangladesh-based teams that need stable infrastructure, disciplined operations, and secure delivery across core business systems.",
    icon: CloudCog,
    accent: "reliability",
    bullets: [
      { icon: Server, label: "Server, storage, and deployment setup" },
      {
        icon: ShieldCheck,
        label: "Backup, monitoring, and secure cloud operations",
      },
      {
        icon: CloudCog,
        label: "DevOps support for rollout continuity and uptime",
      },
    ],
  },
  {
    title: "Strategic Analysis",
    description:
      "We help organizations turn technical uncertainty into clearer implementation choices through audits, requirement analysis, and structured planning support.",
    icon: ScanSearch,
    accent: "insight",
    bullets: [
      {
        icon: ScanSearch,
        label: "Requirement analysis for SME and enterprise programs",
      },
      { icon: ShieldCheck, label: "Cyber security audit and review" },
      {
        icon: CloudCog,
        label: "Rollout planning and data-backed decision support",
      },
    ],
  },
] as const;

export function AdvancedCapabilities() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={clsx(
        "relative overflow-hidden border-y",
        sectionSpacing,
        isDark
          ? "border-cyan-500/20 bg-orbit-darker"
          : "border-slate-200 bg-slate-50",
      )}
    >
      <div
        className={clsx(
          "pointer-events-none absolute inset-0",
          isDark
            ? "bg-[radial-gradient(circle_at_12%_22%,rgba(48,213,255,0.08),transparent_26%),radial-gradient(circle_at_84%_70%,rgba(79,231,200,0.08),transparent_28%)]"
            : "bg-[radial-gradient(circle_at_12%_22%,rgba(30,167,255,0.07),transparent_24%),radial-gradient(circle_at_84%_70%,rgba(79,231,200,0.06),transparent_28%)]",
        )}
      />

      <div className={sectionContainer}>
        <div className="mx-auto mb-8 max-w-5xl text-center lg:mb-9">
          <p
            className={clsx(
              sectionEyebrow,
              isDark ? "text-cyan-200" : "text-cyan-900",
            )}
          >
            Enterprise Reliability and Strategic Insight
          </p>
          <h2
            className={clsx(
              sectionTitle,
              isDark ? "text-white" : "text-slate-900",
            )}
          >
            Infrastructure stability and decision support built for real
            business execution
          </h2>
          <p
            className={clsx(
              sectionLead,
              "max-w-3xl",
              isDark ? "text-slate-300" : "text-slate-600",
            )}
          >
            From cloud operations and deployment continuity to audits,
            requirement analysis, and rollout planning, Blue Orbit supports the
            operational and strategic work behind dependable business systems in
            Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {capabilityPanels.map((panel) => {
            const PanelIcon = panel.icon;

            return (
              <article
                key={panel.title}
                className={clsx(
                  "relative overflow-hidden p-6 lg:p-7",
                  featureCard(isDark),
                )}
              >
                <div
                  className={clsx(
                    "pointer-events-none absolute inset-0",
                    panel.accent === "reliability"
                      ? isDark
                        ? "bg-[radial-gradient(circle_at_top_right,rgba(48,213,255,0.14),transparent_34%)]"
                        : "bg-[radial-gradient(circle_at_top_right,rgba(30,167,255,0.10),transparent_34%)]"
                      : isDark
                        ? "bg-[radial-gradient(circle_at_bottom_left,rgba(79,231,200,0.12),transparent_34%)]"
                        : "bg-[radial-gradient(circle_at_bottom_left,rgba(79,231,200,0.10),transparent_34%)]",
                  )}
                />
                <div
                  className={clsx(
                    "pointer-events-none absolute inset-x-7 top-0 h-px",
                    isDark
                      ? "bg-[linear-gradient(to_right,transparent,rgba(48,213,255,0.22),transparent)]"
                      : "bg-[linear-gradient(to_right,transparent,rgba(30,167,255,0.16),transparent)]",
                  )}
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div
                        className={clsx(
                          "inline-flex h-11 w-11 items-center justify-center rounded-xl border",
                          isDark
                            ? "border-cyan-300/24 bg-cyan-300/10 text-cyan-100"
                            : "border-cyan-700/14 bg-cyan-100 text-cyan-900",
                        )}
                      >
                        <PanelIcon className="h-5 w-5" />
                      </div>
                      <h3
                        className={clsx(
                          "mt-4 text-[1.65rem] font-semibold leading-tight",
                          isDark ? "text-white" : "text-slate-900",
                        )}
                      >
                        {panel.title}
                      </h3>
                    </div>

                    <div
                      className={clsx(
                        "hidden rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] sm:block",
                        isDark
                          ? "bg-cyan-300/8 text-cyan-200"
                          : "bg-cyan-100 text-cyan-900",
                      )}
                    >
                      Proof Panel
                    </div>
                  </div>

                  <p
                    className={clsx(
                      "mt-4 text-sm leading-7 md:text-[15px]",
                      isDark ? "text-slate-300" : "text-slate-600",
                    )}
                  >
                    {panel.description}
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                    {panel.bullets.map((item) => (
                      <div
                        key={item.label}
                        className={clsx(
                          "flex items-start gap-3 px-4 py-3 text-sm leading-6",
                          surfaceCard(
                            isDark,
                            isDark
                              ? "bg-black/20 text-slate-200"
                              : "bg-slate-50 text-slate-700",
                          ),
                        )}
                      >
                        <item.icon
                          className={clsx(
                            "mt-0.5 h-4 w-4 shrink-0",
                            isDark ? "text-cyan-200" : "text-cyan-800",
                          )}
                        />
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
