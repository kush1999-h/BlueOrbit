"use client";

import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BriefcaseBusiness, Handshake, MoveRight } from "lucide-react";
import { featureCard, pillTag, primaryButton, sectionContainer, surfaceCard, sectionTitle } from "@/lib/homepageStyles";
import { useTheme } from "@/components/ThemeProvider";

export function WhyBlueOrbit() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className={clsx("relative overflow-hidden py-12 md:py-16", isDark ? "bg-orbit-dark" : "bg-slate-50")}>
      <div
        className={clsx(
          "pointer-events-none absolute inset-0",
          isDark
            ? "bg-[radial-gradient(circle_at_20%_18%,rgba(48,213,255,0.12),transparent_30%),radial-gradient(circle_at_82%_80%,rgba(79,231,200,0.08),transparent_35%)]"
            : "bg-[radial-gradient(circle_at_20%_18%,rgba(30,167,255,0.08),transparent_30%),radial-gradient(circle_at_82%_80%,rgba(79,231,200,0.06),transparent_35%)]",
        )}
      />

      <div className={clsx(sectionContainer, "grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10")}>
        <div className="relative mx-auto w-full max-w-[29rem]">
          <div
            className={clsx(
              "about-slide-left relative overflow-hidden rounded-[2rem] transition-all duration-900",
              isReady && "is-ready",
              featureCard(isDark),
            )}
          >
            <div className="relative aspect-[0.98/0.94]">
              <Image src="/placeholders/orbit-lines.svg" alt="Blue Orbit founder message visual" fill className="object-cover" />
              <div className={clsx("absolute inset-0", isDark ? "bg-[linear-gradient(180deg,rgba(6,19,30,0.04),rgba(6,19,30,0.3))]" : "bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(244,250,253,0.26))]")} />
            </div>
          </div>

          <div
            className={clsx(
              "about-slide-up absolute -bottom-3 -left-5 w-[40%] overflow-hidden p-2 shadow-[0_16px_48px_rgba(0,0,0,0.18)] transition-all duration-1000 md:-bottom-4 md:-left-6",
              isReady && "is-ready",
              surfaceCard(isDark),
            )}
            style={{ transitionDelay: "160ms" }}
          >
            <div className="relative aspect-[1/0.9] overflow-hidden rounded-[1.1rem]">
              <Image src="/placeholders/website-wireframe.svg" alt="Leadership planning visual" fill className="object-cover" />
            </div>
          </div>

          <div
            className={clsx(
              "pointer-events-none absolute -right-3 top-7 hidden h-22 w-22 rounded-full border lg:block",
              isDark ? "border-cyan-300/20 bg-cyan-300/8" : "border-cyan-700/12 bg-cyan-100/60",
            )}
          />
        </div>

        <div className={clsx("about-slide-right transition-all duration-900", isReady && "is-ready")}>
          <p className={pillTag(isDark, "mb-2.5 inline-flex")}>
            Message from Our CEO & Founder
          </p>
          <h2 className={clsx(sectionTitle, "max-w-3xl leading-[1.06]", isDark ? "text-white" : "text-slate-900")}>
            A message from the CEO & Founder
          </h2>
          <p className={clsx("mt-3 max-w-3xl text-[15px] leading-6.5 md:text-base", isDark ? "text-slate-300" : "text-slate-600")}>
            When I started Blue Orbit, the goal was simple: help organizations in Bangladesh adopt technology that actually works in daily operations.
            We focus on practical execution, accountable delivery, and long-term support so teams can scale with confidence.
          </p>
          <p className={clsx("mt-2 max-w-3xl text-[14px] italic leading-6 md:text-[15px]", isDark ? "text-cyan-100/85" : "text-cyan-900/80")}>
            — Rezwan Anwar, CEO & Founder
          </p>

          <div className="mt-6 space-y-4">
            <div className={clsx("about-slide-right flex items-start gap-4 transition-all duration-900", isReady && "is-ready")} style={{ transitionDelay: "140ms" }}>
              <div className={clsx("flex h-12 w-12 shrink-0 items-center justify-center rounded-full", isDark ? "bg-cyan-300/12 text-cyan-100" : "bg-cyan-100 text-cyan-900")}>
                <BriefcaseBusiness className="h-5.5 w-5.5" />
              </div>
              <div>
                <h3 className={clsx("text-[1.32rem] font-semibold leading-tight", isDark ? "text-white" : "text-slate-900")}>Our commitment</h3>
                <p className={clsx("mt-1 max-w-2xl text-[15px] leading-6", isDark ? "text-slate-300" : "text-slate-600")}>
                  We align business goals with real implementation from day one, ensuring every solution is usable, maintainable, and outcome-driven.
                </p>
              </div>
            </div>

            <div className={clsx("about-slide-right flex items-start gap-4 transition-all duration-900", isReady && "is-ready")} style={{ transitionDelay: "240ms" }}>
              <div className={clsx("flex h-12 w-12 shrink-0 items-center justify-center rounded-full", isDark ? "bg-cyan-300/12 text-cyan-100" : "bg-cyan-100 text-cyan-900")}>
                <Handshake className="h-5.5 w-5.5" />
              </div>
              <div>
                <h3 className={clsx("text-[1.32rem] font-semibold leading-tight", isDark ? "text-white" : "text-slate-900")}>How we deliver</h3>
                <p className={clsx("mt-1 max-w-2xl text-[15px] leading-6", isDark ? "text-slate-300" : "text-slate-600")}>
                  From discovery to go-live, we stay directly involved and combine local execution strength with partner ecosystems where they create clear value.
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className={clsx(
              "about-slide-up mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 transition-all duration-900",
              primaryButton(isDark, "rounded-full"),
              isReady && "is-ready",
            )}
            style={{ transitionDelay: "320ms" }}
          >
            Full Story
            <MoveRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
