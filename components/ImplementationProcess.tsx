"use client";

import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import {
  sectionContainer,
  sectionEyebrow,
  sectionLead,
  sectionSpacing,
  sectionTitle,
} from "@/lib/homepageStyles";
import { useTheme } from "@/components/ThemeProvider";

const processItems = [
  {
    number: "01",
    title: "Business Discovery",
    kicker: "Understand the business",
    body: "We assess goals, operational realities, constraints, and technical context.",
    milestone: true,
  },
  {
    number: "02",
    title: "Requirement Analysis",
    kicker: "Clarify scope",
    body: "We define priorities, dependencies, workflows, and solution requirements.",
    milestone: false,
  },
  {
    number: "03",
    title: "Solution Design",
    kicker: "Architect the right model",
    body: "We shape the right mix of platforms, infrastructure, integrations, rollout strategy, and ML decision-support where needed.",
    milestone: false,
  },
  {
    number: "04",
    title: "Supply / Build / Configure",
    kicker: "Deliver the solution",
    body: "We supply, implement, develop, configure, or deploy the required systems.",
    milestone: true,
  },
  {
    number: "05",
    title: "Testing & Validation",
    kicker: "Verify readiness",
    body: "We validate business fit, technical quality, stakeholder readiness, and model reliability where applicable.",
    milestone: false,
  },
  {
    number: "06",
    title: "Go-Live / Handover",
    kicker: "Activate operations",
    body: "We launch, install, transition, and operationalize the solution in the live environment.",
    milestone: true,
  },
  {
    number: "07",
    title: "Training & Support",
    kicker: "Sustain performance",
    body: "We provide enablement, continuity, optimization guidance, and ongoing support for deployed systems and decision-support models.",
    milestone: false,
  },
] as const;

export function ImplementationProcess() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={clsx(
        "relative overflow-hidden",
        sectionSpacing,
        isDark ? "bg-orbit-darker" : "bg-ui-page",
      )}
    >
      <div
        className={clsx(
          "pointer-events-none absolute inset-0",
          isDark
            ? "bg-[radial-gradient(circle_at_18%_18%,rgba(48,213,255,0.12),transparent_28%),radial-gradient(circle_at_82%_82%,rgba(79,231,200,0.08),transparent_34%)]"
            : "bg-[radial-gradient(circle_at_18%_18%,rgba(30,167,255,0.08),transparent_28%),radial-gradient(circle_at_82%_82%,rgba(79,231,200,0.06),transparent_34%)]",
        )}
      />

      <div className={sectionContainer}>
        <div className="mx-auto mb-10 max-w-5xl text-center">
          <p
            className={clsx(
              sectionEyebrow,
              isDark ? "text-cyan-200" : "text-ui-link",
            )}
          >
            Our Delivery Process
          </p>
          <h2
            className={clsx(
              sectionTitle,
              isDark ? "text-white" : "text-ui-heading",
            )}
          >
            A structured execution model for complex technology work
          </h2>
          <p
            className={clsx(
              sectionLead,
              isDark ? "text-slate-300" : "text-ui-muted",
            )}
          >
            From discovery to deployment, we deliver ERP, software,
            infrastructure, and personalized ML systems that support smarter
            future business decisions.
          </p>
          <p
            className={clsx(
              "mt-3 text-[10px] font-semibold uppercase tracking-[0.18em]",
              isDark ? "text-cyan-200" : "text-cyan-800",
            )}
          >
            End-to-end execution with staged control points
          </p>
        </div>

        <div className="space-y-5 lg:hidden">
          <div
            className={clsx(
              "relative overflow-hidden rounded-[1.8rem] border p-4 md:p-5",
              isDark
                ? "border-cyan-300/18 bg-[#06121f]/94"
                : "border-ui bg-ui-card shadow-[0_8px_20px_rgba(11,28,49,0.10),0_20px_44px_rgba(11,28,49,0.08)]",
            )}
          >
            <div
              className={clsx(
                "pointer-events-none absolute left-7 top-6 bottom-6 w-px",
                isDark
                  ? "bg-[linear-gradient(to_bottom,rgba(48,213,255,0.18),rgba(48,213,255,0.04))]"
                  : "bg-[linear-gradient(to_bottom,rgba(30,167,255,0.12),rgba(30,167,255,0.03))]",
              )}
            />
            <div className="space-y-4">
              {processItems.map((item, index) => (
                <article
                  key={item.number}
                  style={{ ["--stage-delay" as string]: `${index * 1.1}s` }}
                  className={clsx(
                    "pipeline-stage relative rounded-[1.4rem] border p-4 pl-12",
                    item.milestone
                      ? isDark
                        ? "pipeline-stage-milestone border-cyan-300/24 bg-[linear-gradient(180deg,rgba(48,213,255,0.10),rgba(7,20,35,0.96)_28%,rgba(7,20,35,0.94)_100%)]"
                        : "pipeline-stage-milestone border-cyan-700/18 bg-[linear-gradient(180deg,rgba(30,167,255,0.08),rgba(255,255,255,0.98)_26%,rgba(247,250,255,0.98)_100%)]"
                      : isDark
                        ? "border-cyan-300/14 bg-[#071423]/90"
                        : "border-ui bg-ui-surface",
                  )}
                >
                  <div
                    className={clsx(
                      "pipeline-stage-text absolute left-[0.95rem] top-5 text-[10px] font-semibold uppercase tracking-[0.22em]",
                      isDark ? "text-cyan-200" : "text-cyan-800",
                    )}
                  >
                    {item.number}
                  </div>

                  <div
                    className={clsx(
                      "pipeline-connector absolute left-[1.45rem] top-[2.35rem] h-10 w-px",
                      index === processItems.length - 1
                        ? "hidden"
                        : isDark
                          ? "bg-[linear-gradient(to_bottom,rgba(48,213,255,0.24),rgba(48,213,255,0.04))]"
                          : "bg-[linear-gradient(to_bottom,rgba(30,167,255,0.18),rgba(30,167,255,0.04))]",
                    )}
                  />

                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p
                        className={clsx(
                          "pipeline-stage-text text-[10px] font-semibold uppercase tracking-[0.18em]",
                          item.milestone
                            ? isDark
                              ? "text-cyan-100"
                              : "text-ui-link"
                            : isDark
                              ? "text-slate-300"
                              : "text-ui-muted",
                        )}
                      >
                        {item.kicker}
                      </p>
                      <h3
                        className={clsx(
                          "mt-2 text-lg font-semibold leading-tight",
                          isDark ? "text-white" : "text-ui-heading",
                        )}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <ArrowRight
                      className={clsx(
                        "pipeline-flow mt-1 h-4 w-4",
                        index === processItems.length - 1
                          ? "opacity-0"
                          : isDark
                            ? "text-cyan-200/45"
                            : "text-cyan-700/40",
                      )}
                    />
                  </div>

                  <p
                    className={clsx(
                      "mt-2 text-sm leading-6",
                      isDark ? "text-slate-300" : "text-ui-muted",
                    )}
                  >
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div
            className={clsx(
              "relative overflow-hidden rounded-[2rem] border px-5 pb-7 pt-5 xl:px-7",
              isDark
                ? "border-cyan-300/16 bg-[#06121f]/94"
                : "border-ui bg-[linear-gradient(180deg,var(--ui-elevated),var(--ui-card))] shadow-[0_10px_24px_rgba(11,28,49,0.10),0_24px_48px_rgba(11,28,49,0.09)]",
            )}
          >
            <div
              className={clsx(
                "pointer-events-none absolute left-[5.7%] right-[5.7%] top-[13rem] h-[2px] rounded-full",
                isDark
                  ? "bg-[linear-gradient(to_right,rgba(48,213,255,0.04),rgba(48,213,255,0.10),rgba(48,213,255,0.04))]"
                  : "bg-[linear-gradient(to_right,rgba(30,167,255,0.03),rgba(30,167,255,0.08),rgba(30,167,255,0.03))]",
              )}
            />
            <div className="grid grid-cols-7 gap-4 xl:gap-5">
              {processItems.map((item, index) => {
                const isTopStation = index % 2 === 0;

                return (
                  <div
                    key={item.number}
                    style={{ ["--stage-delay" as string]: `${index * 1.1}s` }}
                    className="relative min-h-[25.9rem]"
                  >
                    {index < processItems.length - 1 ? (
                      <div
                        className={clsx(
                          "pointer-events-none absolute left-[58%] top-[12.45rem] z-10 flex w-[78%] items-center gap-2",
                        )}
                      >
                        <div
                          className={clsx(
                            "pipeline-connector h-px flex-1",
                            isDark
                              ? "bg-[linear-gradient(to_right,rgba(48,213,255,0.20),rgba(48,213,255,0.06))]"
                              : "bg-[linear-gradient(to_right,rgba(30,167,255,0.16),rgba(30,167,255,0.04))]",
                          )}
                        />
                        <ArrowRight
                          className={clsx(
                            "pipeline-flow h-4 w-4",
                            isDark ? "text-cyan-200/48" : "text-cyan-700/40",
                          )}
                          style={{ animationDelay: `${index * 1.1}s` }}
                        />
                      </div>
                    ) : null}

                    <div
                      className={clsx(
                        "pipeline-connector pointer-events-none absolute left-1/2 z-10 w-px -translate-x-1/2",
                        isTopStation
                          ? "top-[11.75rem] h-[1.2rem]"
                          : "top-[13rem] h-[1.35rem]",
                        isDark
                          ? "bg-[linear-gradient(to_bottom,rgba(48,213,255,0.22),rgba(48,213,255,0.05))]"
                          : "bg-[linear-gradient(to_bottom,rgba(30,167,255,0.16),rgba(30,167,255,0.04))]",
                      )}
                    />

                    <article
                      className={clsx(
                        "pipeline-stage absolute left-0 right-0 min-h-[11.8rem] rounded-[1.55rem] border px-4 pb-3.5 pt-3.5",
                        isTopStation ? "top-0" : "bottom-0",
                        item.milestone
                          ? isDark
                            ? "pipeline-stage-milestone border-cyan-300/24 bg-[linear-gradient(180deg,rgba(48,213,255,0.10),rgba(7,20,35,0.96)_26%,rgba(7,20,35,0.94)_100%)] shadow-[0_0_32px_rgba(48,213,255,0.08)]"
                            : "pipeline-stage-milestone border-cyan-700/18 bg-[linear-gradient(180deg,rgba(30,167,255,0.08),rgba(255,255,255,0.98)_26%,rgba(247,250,255,0.98)_100%)]"
                          : isDark
                            ? "border-cyan-300/14 bg-[#071423]/90"
                            : "border-ui bg-ui-card",
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <p
                            className={clsx(
                              "pipeline-stage-text text-[10px] font-semibold uppercase tracking-[0.22em]",
                              isDark ? "text-cyan-200" : "text-cyan-800",
                            )}
                          >
                            {item.number}
                          </p>
                          <p
                            className={clsx(
                              "pipeline-stage-text mt-2 text-[10px] font-semibold uppercase tracking-[0.18em]",
                              item.milestone
                                ? isDark
                                  ? "text-cyan-100"
                                  : "text-ui-link"
                                : isDark
                                  ? "text-slate-300"
                                  : "text-ui-muted",
                            )}
                          >
                            {item.kicker}
                          </p>
                        </div>
                        <ArrowRight
                          className={clsx(
                            "mt-1 h-4 w-4",
                            index === processItems.length - 1
                              ? "opacity-0"
                              : isDark
                                ? "text-cyan-200/45"
                                : "text-cyan-700/40",
                          )}
                        />
                      </div>

                      <div className="mt-4">
                        <h3
                          className={clsx(
                            "text-[1.02rem] font-semibold leading-tight",
                            isDark ? "text-white" : "text-ui-heading",
                          )}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={clsx(
                            "mt-2.5 text-sm leading-6",
                            isDark ? "text-slate-300" : "text-ui-muted",
                          )}
                        >
                          {item.body}
                        </p>
                      </div>

                      <div
                        className={clsx(
                          "pipeline-node-pulse absolute left-1/2 z-20 h-3 w-10 -translate-x-1/2 rounded-full border",
                          isTopStation ? "bottom-[-1.2rem]" : "top-[-1.2rem]",
                          item.milestone
                            ? isDark
                              ? "pipeline-node-pulse border-cyan-300/40 bg-[linear-gradient(to_right,rgba(48,213,255,0.30),rgba(48,213,255,0.80),rgba(48,213,255,0.30))] shadow-[0_0_20px_rgba(48,213,255,0.20)]"
                              : "pipeline-node-pulse border-cyan-700/24 bg-[linear-gradient(to_right,rgba(8,145,178,0.22),rgba(8,145,178,0.8),rgba(8,145,178,0.22))]"
                            : isDark
                              ? "border-cyan-300/24 bg-[linear-gradient(to_right,rgba(48,213,255,0.06),rgba(48,213,255,0.20),rgba(48,213,255,0.06))]"
                              : "border-cyan-700/18 bg-[linear-gradient(to_right,rgba(8,145,178,0.06),rgba(8,145,178,0.18),rgba(8,145,178,0.06))]",
                        )}
                      />
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
