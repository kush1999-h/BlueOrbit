"use client";

import Link from "next/link";
import clsx from "clsx";
import { compactSectionSpacing, primaryButton, secondaryButton, sectionContainer, sectionEyebrow, sectionTitle, surfaceCard } from "@/lib/homepageStyles";
import { useTheme } from "@/components/ThemeProvider";

export function CTABanner() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={clsx("border-y", compactSectionSpacing, isDark ? "border-cyan-500/25 bg-[linear-gradient(120deg,#0b1725_0%,#0f2940_55%,#1ea7ff_100%)]" : "border-ui bg-[linear-gradient(120deg,#e5effa_0%,#dbe8f5_52%,#cfe0f1_100%)]")}>
      <div className={clsx(sectionContainer, "grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]")}>
        <div>
          <p className={clsx(sectionEyebrow, isDark ? "text-cyan-100" : "text-ui-link")}>Next Step</p>
          <h2 className={clsx(sectionTitle, isDark ? "text-white" : "text-ui-heading")}>Planning ERP, infrastructure, software, or strategic technology work?</h2>
          <p className={clsx("mt-5 max-w-2xl text-base leading-7 md:text-lg", isDark ? "text-slate-100/88" : "text-ui-body")}>
            Tell us what you need and Blue Orbit will recommend the right solution path, delivery approach, and next step.
          </p>
        </div>

        <div className={surfaceCard(isDark, isDark ? "p-6 border-white/15 bg-black/20" : "p-6 bg-ui-elevated border-ui-strong")}>
          <div className="flex flex-col gap-4">
            <Link
              href="/request-quote"
              className={primaryButton(isDark, isDark ? "bg-white/12 hover:bg-white/18" : "")}
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className={secondaryButton(isDark, isDark ? "border-cyan-100/25 hover:bg-white/8" : "")}
            >
              Book a Consultation
            </Link>
          </div>
          <p className={clsx("mt-4 text-center text-sm", isDark ? "text-cyan-100/85" : "text-ui-muted")}>Typical response time: 24-48 hours</p>
        </div>
      </div>
    </section>
  );
}
