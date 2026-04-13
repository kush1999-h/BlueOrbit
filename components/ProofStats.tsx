"use client";

import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FolderKanban,
  GraduationCap,
  Handshake,
  Headset,
  MapPinned,
} from "lucide-react";
import { DEFAULT_PROOF_STATS } from "@/lib/data";
import {
  sectionContainer,
  sectionEyebrow,
  sectionLead,
  sectionSpacing,
  sectionTitle,
} from "@/lib/homepageStyles";
import { useTheme } from "@/components/ThemeProvider";

function parseValue(value: string) {
  const numeric = value.match(/^(\d+)(.*)$/);
  if (!numeric) return { target: null, suffix: value };
  return { target: Number(numeric[1]), suffix: numeric[2] };
}

function AnimatedValue({ value, start }: { value: string; start: boolean }) {
  const { target, suffix } = useMemo(() => parseValue(value), [value]);
  const [display, setDisplay] = useState(target ?? 0);

  useEffect(() => {
    if (!start || target === null) return;

    let frame = 0;
    const duration = 1200;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.min(Math.round(target * eased), target));
      if (frame >= totalFrames) window.clearInterval(timer);
    }, frameRate);

    return () => window.clearInterval(timer);
  }, [start, target]);

  return (
    <>
      {target === null ? value : display}
      {suffix}
    </>
  );
}

const proofMeta = [
  {
    id: 1,
    editorialLabel: "DELIVERY SCALE",
    icon: FolderKanban,
    delay: "0s",
    mobileDelay: "0s",
    copy: "Core proof of execution capacity across ERP, software, infrastructure, audit, and rollout delivery.",
  },
  {
    id: 2,
    editorialLabel: "ENABLEMENT",
    icon: GraduationCap,
    delay: "2.05s",
    mobileDelay: "2.05s",
    desktopShellClass:
      "right-[15%] top-[0.9rem] w-[15.8rem] min-h-[10.75rem] xl:right-[15.5%]",
    desktopNodeClass: "left-[54.5%] top-[4.85rem] xl:left-[54%]",
    desktopLinkClass: "left-[39.5%] top-[8.9rem] h-px w-[16.4%] xl:w-[16.8%]",
    copy: "Training delivery for teams, operators, and internal business users.",
  },
  {
    id: 3,
    editorialLabel: "SUPPORT QUALITY",
    icon: Headset,
    delay: "4.1s",
    mobileDelay: "4.1s",
    desktopShellClass:
      "right-[1%] top-[11.65rem] w-[15.4rem] min-h-[11.25rem]",
    desktopNodeClass: "left-[57.7%] top-[17.65rem]",
    desktopLinkClass: "left-[51.2%] top-[18.35rem] h-px w-[8.3%]",
    copy: "Measured responsiveness for delivery support, issue handling, and follow-up.",
  },
  {
    id: 4,
    editorialLabel: "PARTNERSHIPS",
    icon: Handshake,
    delay: "6.15s",
    mobileDelay: "6.15s",
    desktopShellClass:
      "bottom-[5.95rem] left-[45%] w-[14.5rem] min-h-[10.6rem] xl:left-[45.5%]",
    desktopNodeClass: "left-[40.9%] top-[25.05rem]",
    desktopLinkClass: "left-[38.4%] top-[25.65rem] h-px w-[4.1%]",
    copy: "Strategic relationships that strengthen solution pathways and implementation depth.",
  },
  {
    id: 5,
    editorialLabel: "REGIONAL FOCUS",
    icon: MapPinned,
    delay: "8.2s",
    mobileDelay: "8.2s",
    desktopShellClass:
      "right-[2.2%] top-[24.35rem] w-[15.2rem] min-h-[10.7rem]",
    desktopNodeClass: "left-[56.6%] top-[29.05rem]",
    desktopLinkClass: "left-[50.1%] top-[29.6rem] h-px w-[8.6%]",
    copy: "Delivery model built for Bangladesh-based operating realities and business teams.",
  },
] as const;

export function ProofStats() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.24 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = DEFAULT_PROOF_STATS.map((stat) => ({
    ...stat,
    ...proofMeta.find((item) => item.id === stat.id)!,
  }));

  const [heroStat, ...supportStats] = stats;
  const HeroIcon = heroStat.icon;

  return (
    <section
      ref={ref}
      className={clsx(
        "relative overflow-hidden",
        sectionSpacing,
        isDark ? "bg-orbit-dark" : "bg-ui-surface",
      )}
    >
      <div
        className={clsx(
          "pointer-events-none absolute inset-0",
          isDark
            ? "bg-[radial-gradient(circle_at_16%_24%,rgba(48,213,255,0.10),transparent_24%),radial-gradient(circle_at_84%_76%,rgba(79,231,200,0.08),transparent_28%)]"
            : "bg-[radial-gradient(circle_at_16%_24%,rgba(30,167,255,0.08),transparent_24%),radial-gradient(circle_at_84%_76%,rgba(79,231,200,0.06),transparent_28%)]",
        )}
      />

      <div className={sectionContainer}>
        <div className="mx-auto mb-8 max-w-5xl text-center lg:mb-9">
          <p
            className={clsx(
              sectionEyebrow,
              isDark ? "text-cyan-200" : "text-ui-link",
            )}
          >
            Our Track Record
          </p>
          <h2
            className={clsx(
              sectionTitle,
              isDark ? "text-white" : "text-ui-heading",
            )}
          >
            Proven execution across business systems, delivery support, and
            enterprise partnerships
          </h2>
          <p
            className={clsx(
              sectionLead,
              isDark ? "text-slate-300" : "text-ui-muted",
            )}
          >
            A connected proof system for the delivery scale, support quality,
            enablement, partnerships, and Bangladesh-focused execution behind
            our work.
          </p>
        </div>

        <div
          className={clsx(
            "relative overflow-hidden rounded-[2rem] border p-4 sm:p-5 lg:p-6",
            isDark
              ? "border-cyan-300/18 bg-[#05101b]/94"
              : "border-ui bg-[linear-gradient(180deg,var(--ui-elevated),var(--ui-card))] shadow-[0_10px_24px_rgba(11,28,49,0.10),0_22px_46px_rgba(11,28,49,0.09)]",
          )}
        >
          <div
            className={clsx(
              "proof-mesh pointer-events-none absolute inset-0",
              isDark
                ? "bg-[linear-gradient(90deg,rgba(48,213,255,0.035)_1px,transparent_1px),linear-gradient(rgba(48,213,255,0.03)_1px,transparent_1px)] bg-[size:68px_68px]"
                : "bg-[linear-gradient(90deg,rgba(30,167,255,0.025)_1px,transparent_1px),linear-gradient(rgba(30,167,255,0.02)_1px,transparent_1px)] bg-[size:68px_68px]",
            )}
          />
          <div
            className={clsx(
              "pointer-events-none absolute inset-0",
              isDark
                ? "bg-[radial-gradient(circle_at_24%_38%,rgba(48,213,255,0.12),transparent_22%),radial-gradient(circle_at_78%_44%,rgba(48,213,255,0.08),transparent_26%)]"
                : "bg-[radial-gradient(circle_at_24%_38%,rgba(30,167,255,0.08),transparent_22%),radial-gradient(circle_at_78%_44%,rgba(30,167,255,0.06),transparent_26%)]",
            )}
          />

          <div className="relative hidden lg:block">
            <div
              className={clsx(
                "relative overflow-hidden rounded-[1.8rem] border p-5 xl:p-6",
                isDark ? "border-cyan-300/10" : "border-cyan-700/8",
              )}
            >
              <div
                className={clsx(
                  "pointer-events-none absolute inset-[1rem] rounded-[1.5rem] border",
                  isDark ? "border-cyan-300/8" : "border-cyan-700/6",
                )}
              />
              <div
                className={clsx(
                  "pointer-events-none absolute left-[54%] top-[18%] bottom-[20%] w-px",
                  isDark
                    ? "bg-[linear-gradient(to_bottom,transparent,rgba(48,213,255,0.16),rgba(48,213,255,0.04),transparent)]"
                    : "bg-[linear-gradient(to_bottom,transparent,rgba(30,167,255,0.12),rgba(30,167,255,0.03),transparent)]",
                )}
              />
              <div
                className={clsx(
                  "pointer-events-none absolute left-[54%] right-[12%] top-[50%] h-px -translate-y-1/2",
                  isDark
                    ? "bg-[linear-gradient(to_right,rgba(48,213,255,0.16),rgba(48,213,255,0.04),transparent)]"
                    : "bg-[linear-gradient(to_right,rgba(30,167,255,0.12),rgba(30,167,255,0.03),transparent)]",
                )}
              />
              <div
                className={clsx(
                  "pointer-events-none absolute left-[54%] top-[50%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full",
                  isDark
                    ? "bg-cyan-300/60 shadow-[0_0_18px_rgba(48,213,255,0.18)]"
                    : "bg-cyan-700/40",
                )}
              />

              <div className="relative z-10 grid gap-5 xl:gap-6 [grid-template-columns:minmax(0,1.15fr)_minmax(0,1fr)]">
                <article
                  style={{ ["--proof-delay" as string]: heroStat.delay }}
                  className={clsx(
                    "proof-hero-shell proof-activate relative row-span-2 overflow-hidden rounded-[2rem] border p-7",
                    isDark
                      ? "border-cyan-300/24 bg-[linear-gradient(160deg,rgba(48,213,255,0.12),rgba(7,20,35,0.96)_26%,rgba(7,20,35,0.94)_100%)]"
                      : "border-cyan-700/14 bg-[linear-gradient(160deg,rgba(30,167,255,0.08),rgba(255,255,255,0.99)_25%,rgba(247,250,255,0.98)_100%)]",
                  )}
                >
                  <div
                    className={clsx(
                      "proof-hero-core proof-activate pointer-events-none absolute left-[46%] top-[48%] h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl",
                      isDark ? "bg-cyan-300/14" : "bg-cyan-300/12",
                    )}
                  />
                  <div
                    className={clsx(
                      "pointer-events-none absolute inset-[1rem] rounded-[1.6rem] border",
                      isDark ? "border-cyan-300/10" : "border-cyan-700/8",
                    )}
                  />
                  <div
                    className={clsx(
                      "pointer-events-none absolute left-[2rem] top-[6.8rem] h-[11.2rem] w-[24rem] rounded-[50%] border",
                      isDark ? "border-cyan-300/14" : "border-cyan-700/10",
                    )}
                  />
                  <div
                    className={clsx(
                      "pointer-events-none absolute left-[5.6rem] top-[8.8rem] h-[7.2rem] w-[17.8rem] rounded-[50%] border",
                      isDark ? "border-cyan-300/10" : "border-cyan-700/8",
                    )}
                  />
                  <div className="relative z-10 flex h-full min-h-[25rem] flex-col justify-between">
                    <div className="flex items-start justify-between gap-4">
                      <div className="max-w-sm">
                        <p
                          className={clsx(
                            "proof-text proof-activate text-[11px] font-semibold uppercase tracking-[0.22em]",
                            isDark ? "text-cyan-200" : "text-ui-link",
                          )}
                        >
                          {heroStat.editorialLabel}
                        </p>
                        <p
                          className={clsx(
                            "mt-2 text-sm leading-6",
                            isDark ? "text-slate-300" : "text-ui-muted",
                          )}
                        >
                          {heroStat.copy}
                        </p>
                      </div>
                      <div
                        className={clsx(
                          "proof-node proof-activate flex h-12 w-12 items-center justify-center rounded-2xl border",
                          isDark
                            ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-100"
                            : "border-ui bg-[color:var(--ui-accent-soft)] text-ui-link",
                        )}
                      >
                        <HeroIcon className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="mt-10">
                      <div
                        className={clsx(
                          "proof-text proof-activate text-[5.1rem] font-bold leading-none tracking-[-0.06em] xl:text-[5.4rem]",
                          isDark ? "text-white" : "text-ui-heading",
                        )}
                      >
                        <AnimatedValue value={heroStat.value} start={visible} />
                      </div>
                      <p
                        className={clsx(
                          "proof-text proof-activate mt-4 max-w-md text-[1.8rem] font-semibold leading-tight",
                          isDark ? "text-slate-100" : "text-ui-heading",
                        )}
                      >
                        {heroStat.label}
                      </p>
                      <p
                        className={clsx(
                          "mt-4 max-w-lg text-[15px] leading-7",
                          isDark ? "text-slate-300" : "text-ui-muted",
                        )}
                      >
                        Blue Orbit supports organizations that need accountable
                        implementation capability, disciplined rollout support,
                        and real delivery across business technology programs.
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                      <div
                        className={clsx(
                          "proof-node proof-activate h-2.5 w-2.5 rounded-full",
                          isDark ? "bg-cyan-300/70" : "bg-cyan-700/55",
                        )}
                      />
                      <div
                        className={clsx(
                          "proof-link proof-activate h-px flex-1",
                          isDark
                            ? "bg-[linear-gradient(to_right,rgba(48,213,255,0.16),transparent)]"
                            : "bg-[linear-gradient(to_right,rgba(30,167,255,0.12),transparent)]",
                        )}
                      />
                      <p
                        className={clsx(
                          "text-[11px] uppercase tracking-[0.2em]",
                          isDark ? "text-slate-400" : "text-ui-muted",
                        )}
                      >
                        Proof anchor
                      </p>
                    </div>
                  </div>
                </article>

                <div className="grid grid-cols-2 gap-5 xl:gap-6">
                  {supportStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <article
                        key={stat.id}
                        style={{ ["--proof-delay" as string]: stat.delay }}
                        className={clsx(
                          "proof-signal-shell proof-activate relative overflow-hidden rounded-[1.5rem] border p-5",
                          isDark
                            ? "border-cyan-300/16 bg-[linear-gradient(180deg,rgba(6,19,30,0.96),rgba(6,19,30,0.9))]"
                            : "border-ui bg-ui-card",
                        )}
                      >
                        <div
                          className={clsx(
                            "pointer-events-none absolute inset-x-5 top-0 h-px",
                            isDark
                              ? "bg-[linear-gradient(to_right,transparent,rgba(48,213,255,0.22),transparent)]"
                              : "bg-[linear-gradient(to_right,transparent,rgba(30,167,255,0.16),transparent)]",
                          )}
                        />
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p
                              className={clsx(
                                "proof-text proof-activate text-[10px] font-semibold uppercase tracking-[0.2em]",
                                isDark ? "text-cyan-200" : "text-ui-link",
                              )}
                            >
                              {stat.editorialLabel}
                            </p>
                            <div
                              className={clsx(
                                "proof-text proof-activate mt-3 text-[2.5rem] font-bold leading-none tracking-[-0.05em] xl:text-[2.7rem]",
                                isDark ? "text-cyan-100" : "text-ui-heading",
                              )}
                            >
                              <AnimatedValue
                                value={stat.value}
                                start={visible}
                              />
                            </div>
                          </div>
                          <div
                            className={clsx(
                              "proof-node proof-activate flex h-10 w-10 items-center justify-center rounded-xl border",
                              isDark
                                ? "border-cyan-300/16 bg-cyan-300/8 text-cyan-100"
                                : "border-ui bg-[color:var(--ui-accent-soft)] text-ui-link",
                            )}
                          >
                            <Icon className="h-4.5 w-4.5" />
                          </div>
                        </div>
                        <p
                          className={clsx(
                            "proof-text proof-activate mt-4 text-base font-semibold leading-tight",
                            isDark ? "text-slate-100" : "text-ui-heading",
                          )}
                        >
                          {stat.label}
                        </p>
                        <p
                          className={clsx(
                            "mt-2 text-sm leading-6",
                            isDark ? "text-slate-300" : "text-ui-muted",
                          )}
                        >
                          {stat.copy}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>

              <div
                className={clsx(
                  "relative z-10 mt-5 flex items-center gap-4 rounded-[1.2rem] border px-5 py-3.5",
                  isDark
                    ? "border-cyan-300/12 bg-cyan-300/6"
                    : "border-cyan-700/10 bg-cyan-50/70",
                )}
              >
                <div
                  className={clsx(
                    "h-2.5 w-2.5 shrink-0 rounded-full",
                    isDark
                      ? "bg-cyan-300/70 shadow-[0_0_12px_rgba(48,213,255,0.24)]"
                      : "bg-cyan-700/55",
                  )}
                />
                <div
                  className={clsx(
                    "h-px w-16 shrink-0",
                    isDark ? "bg-cyan-300/16" : "bg-cyan-700/12",
                  )}
                />
                <p
                  className={clsx(
                    "min-w-0 text-[12px] leading-5 xl:text-[13px] xl:leading-6",
                    isDark ? "text-slate-300" : "text-ui-muted",
                  )}
                >
                  Serving manufacturing, retail, distribution, service-driven
                  teams, and enterprise operations in Bangladesh.
                </p>
              </div>
            </div>
          </div>

          <div className="relative space-y-4 lg:hidden">
            <article
              style={{ ["--proof-delay" as string]: heroStat.mobileDelay }}
              className={clsx(
                "proof-hero-shell proof-activate relative overflow-hidden rounded-[1.75rem] border p-5 sm:p-6",
                isDark
                  ? "border-cyan-300/24 bg-[linear-gradient(160deg,rgba(48,213,255,0.12),rgba(7,20,35,0.96)_26%,rgba(7,20,35,0.94)_100%)]"
                  : "border-cyan-700/14 bg-[linear-gradient(160deg,rgba(30,167,255,0.08),rgba(255,255,255,0.99)_25%,rgba(247,250,255,0.98)_100%)]",
              )}
            >
              <div
                className={clsx(
                  "proof-hero-core proof-activate pointer-events-none absolute right-[-1.5rem] top-[-1.5rem] h-36 w-36 rounded-full blur-3xl",
                  isDark ? "bg-cyan-300/14" : "bg-cyan-300/12",
                )}
              />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="max-w-xs">
                    <p
                      className={clsx(
                        "proof-text proof-activate text-[11px] font-semibold uppercase tracking-[0.22em]",
                        isDark ? "text-cyan-200" : "text-ui-link",
                      )}
                    >
                      {heroStat.editorialLabel}
                    </p>
                    <p
                      className={clsx(
                        "mt-2 text-sm leading-6",
                        isDark ? "text-slate-300" : "text-ui-muted",
                      )}
                    >
                      {heroStat.copy}
                    </p>
                  </div>
                  <div
                    className={clsx(
                      "proof-node proof-activate flex h-11 w-11 items-center justify-center rounded-2xl border",
                      isDark
                        ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-100"
                        : "border-ui bg-[color:var(--ui-accent-soft)] text-ui-link",
                    )}
                  >
                    <HeroIcon className="h-5 w-5" />
                  </div>
                </div>
                <div
                  className={clsx(
                    "proof-text proof-activate mt-8 text-[4.2rem] font-bold leading-none tracking-[-0.06em]",
                    isDark ? "text-white" : "text-ui-heading",
                  )}
                >
                  <AnimatedValue value={heroStat.value} start={visible} />
                </div>
                <p
                  className={clsx(
                    "proof-text proof-activate mt-4 text-[1.8rem] font-semibold leading-tight",
                    isDark ? "text-slate-100" : "text-ui-heading",
                  )}
                >
                  {heroStat.label}
                </p>
              </div>
            </article>

            <div
              className={clsx(
                "pointer-events-none absolute left-[1.15rem] top-[12.6rem] bottom-[5.4rem] w-px",
                isDark
                  ? "bg-[linear-gradient(to_bottom,rgba(48,213,255,0.18),rgba(48,213,255,0.03))]"
                  : "bg-[linear-gradient(to_bottom,rgba(30,167,255,0.12),rgba(30,167,255,0.03))]",
              )}
            />

            {supportStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <article
                  key={stat.id}
                  style={{ ["--proof-delay" as string]: stat.mobileDelay }}
                  className={clsx(
                    "proof-signal-shell proof-activate relative overflow-hidden rounded-[1.4rem] border p-4 pl-10",
                    isDark
                      ? "border-cyan-300/16 bg-[linear-gradient(180deg,rgba(6,19,30,0.96),rgba(6,19,30,0.9))]"
                      : "border-ui bg-ui-card",
                  )}
                >
                  <div
                    className={clsx(
                      "proof-node proof-activate absolute left-[0.72rem] top-[1.6rem] h-3 w-3 rounded-full",
                      isDark ? "bg-cyan-300/60" : "bg-cyan-700/40",
                    )}
                  />
                  <div
                    className={clsx(
                      "proof-link proof-activate absolute left-[1rem] top-[1.95rem] h-px w-6",
                      isDark
                        ? "bg-[linear-gradient(to_right,rgba(48,213,255,0.16),rgba(48,213,255,0.02))]"
                        : "bg-[linear-gradient(to_right,rgba(30,167,255,0.12),rgba(30,167,255,0.02))]",
                    )}
                  />
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p
                        className={clsx(
                          "proof-text proof-activate text-[10px] font-semibold uppercase tracking-[0.2em]",
                          isDark ? "text-cyan-200" : "text-ui-link",
                        )}
                      >
                        {stat.editorialLabel}
                      </p>
                      <div
                        className={clsx(
                          "proof-text proof-activate mt-3 text-[2.4rem] font-bold leading-none tracking-[-0.05em]",
                          isDark ? "text-cyan-100" : "text-ui-heading",
                        )}
                      >
                        <AnimatedValue value={stat.value} start={visible} />
                      </div>
                    </div>
                    <div
                      className={clsx(
                        "proof-node proof-activate flex h-10 w-10 items-center justify-center rounded-xl border",
                        isDark
                          ? "border-cyan-300/16 bg-cyan-300/8 text-cyan-100"
                          : "border-ui bg-[color:var(--ui-accent-soft)] text-ui-link",
                      )}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>
                  <p
                    className={clsx(
                      "proof-text proof-activate mt-3 text-base font-semibold leading-tight",
                      isDark ? "text-slate-100" : "text-ui-heading",
                    )}
                  >
                    {stat.label}
                  </p>
                  <p
                    className={clsx(
                      "mt-2 text-sm leading-6",
                      isDark ? "text-slate-300" : "text-ui-muted",
                    )}
                  >
                    {stat.copy}
                  </p>
                </article>
              );
            })}

            <div
              className={clsx(
                "relative flex items-center gap-3 rounded-[1.1rem] border px-4 py-3.5",
                isDark
                  ? "border-cyan-300/12 bg-cyan-300/6"
                  : "border-cyan-700/10 bg-cyan-50/70",
              )}
            >
              <div
                className={clsx(
                  "h-2.5 w-2.5 shrink-0 rounded-full",
                  isDark ? "bg-cyan-300/70" : "bg-cyan-700/55",
                )}
              />
              <div
                className={clsx(
                  "h-px w-8 shrink-0",
                  isDark ? "bg-cyan-300/16" : "bg-cyan-700/12",
                )}
              />
              <p
                className={clsx(
                  "text-sm leading-6",
                  isDark ? "text-slate-300" : "text-ui-muted",
                )}
              >
                Serving manufacturing, retail, distribution, service-driven
                teams, and enterprise operations in Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
