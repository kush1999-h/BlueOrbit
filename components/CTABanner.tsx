"use client";

import Link from "next/link";
import clsx from "clsx";
import { useTheme } from "@/components/ThemeProvider";

export function CTABanner() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={clsx(
        "border-y py-16 md:py-24",
        isDark
          ? "border-cyan-500/30 bg-gradient-to-r from-orbit-dark via-cyan-950/30 to-orbit-dark"
          : "border-cyan-700/20 bg-gradient-to-r from-slate-50 via-cyan-50 to-slate-50",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className={clsx("mb-4 text-4xl font-bold md:text-5xl", isDark ? "text-white" : "text-slate-900")}>
          Ready to Implement Odoo in Your Business?
        </h2>
        <p className={clsx("mx-auto mb-8 max-w-2xl text-lg", isDark ? "text-gray-300" : "text-slate-600")}>
          Receive a structured proposal within 24-48 hours. Let us map the right ERP plan for your team.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/request-quote"
            className={clsx(
              "rounded-lg px-8 py-4 font-semibold text-white transition",
              isDark
                ? "bg-gradient-to-r from-cyan-500 to-cyan-400 hover:shadow-glow-cyan-lg"
                : "bg-slate-900 hover:bg-slate-800",
            )}
          >
            Get Started With a Quote
          </Link>
          <Link
            href="/contact"
            className={clsx(
              "rounded-lg border-2 px-8 py-4 font-semibold transition",
              isDark
                ? "border-cyan-500 text-cyan-300 hover:bg-cyan-500/10"
                : "border-cyan-700/35 text-cyan-900 hover:bg-cyan-100/60",
            )}
          >
            Schedule a Call
          </Link>
        </div>
        <p className={clsx("mt-4 text-sm", isDark ? "text-cyan-200/85" : "text-cyan-900/80")}>Typical response time: 24-48 hours.</p>
      </div>
    </section>
  );
}
