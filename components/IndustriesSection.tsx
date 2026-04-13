"use client";

import clsx from "clsx";
import { INDUSTRIES } from "@/lib/data";
import { sectionContainer, sectionEyebrow, sectionLead, sectionSpacing, sectionTitle } from "@/lib/homepageStyles";
import { useTheme } from "@/components/ThemeProvider";

export function IndustriesSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={clsx(sectionSpacing, isDark ? "bg-orbit-dark" : "bg-ui-surface")}>
      <div className={sectionContainer}>
        <div className="mb-10 max-w-3xl">
          <p className={clsx(sectionEyebrow, isDark ? "text-cyan-200" : "text-ui-link")}>Who We Work With</p>
          <h2 className={clsx(sectionTitle, isDark ? "text-white" : "text-ui-heading")}>Built for organizations that need stronger systems and execution</h2>
          <p className={clsx(sectionLead, "max-w-none", isDark ? "text-slate-300" : "text-ui-muted")}>
            Built for SMEs, growth-stage companies, and enterprise organizations that need stronger systems and execution.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry}
              className={clsx(
                "rounded-full border px-5 py-3 text-sm font-medium transition-all hover:shadow-sm",
                isDark
                  ? "border-cyan-300/20 bg-orbit-card text-slate-100"
                  : "border-ui bg-ui-card text-ui-body shadow-sm hover:shadow-md",
              )}
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
