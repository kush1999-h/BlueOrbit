"use client";

import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

interface StatItem {
  label: string;
  value: string;
}

interface ProofStatsProps {
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  { label: "Happy Clients", value: "50+" },
  { label: "Successful Implementations", value: "120+" },
  { label: "Modules Configured", value: "1000+" },
  { label: "Team Members", value: "25+" },
  { label: "Years of Experience", value: "10+" },
  { label: "Average Go-Live Time", value: "3 months" },
];

function parseStatValue(value: string) {
  const plusMatch = value.match(/^(\d+)\+$/);
  if (plusMatch) {
    return { target: Number(plusMatch[1]), suffix: "+" };
  }

  const unitMatch = value.match(/^(\d+)\s*(.*)$/);
  if (unitMatch) {
    return { target: Number(unitMatch[1]), suffix: unitMatch[2] ? ` ${unitMatch[2]}` : "" };
  }

  return { target: null, suffix: "" };
}

function AnimatedStatValue({ value, start }: { value: string; start: boolean }) {
  const [display, setDisplay] = useState(0);
  const { target, suffix } = useMemo(() => parseStatValue(value), [value]);

  useEffect(() => {
    if (!start || target === null) {
      return;
    }

    let frame = 0;
    const duration = 1400;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    const timer = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(target * eased);
      setDisplay(Math.min(next, target));
      if (frame >= totalFrames) {
        window.clearInterval(timer);
      }
    }, frameRate);

    return () => window.clearInterval(timer);
  }, [start, target]);

  if (target === null) {
    return <>{value}</>;
  }

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

export function ProofStats({ stats = defaultStats }: ProofStatsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={clsx("py-16 md:py-24", isDark ? "bg-orbit-dark" : "bg-slate-50")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className={clsx("mb-4 text-4xl font-bold md:text-5xl", isDark ? "text-white" : "text-slate-900")}>
            Our Track Record
          </h2>
          <p className={isDark ? "text-gray-400" : "text-slate-600"}>
            Proven execution delivering measurable ERP outcomes across Bangladesh
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={clsx(
                "rounded-xl border p-5 text-center transition md:p-6",
                isDark
                  ? "border-cyan-500/30 bg-orbit-card hover:border-cyan-400/60 hover:bg-orbit-card/80"
                  : "border-slate-200 bg-white hover:border-cyan-700/30",
              )}
            >
              <div
                className={clsx(
                  "mb-2 text-3xl font-bold md:text-5xl",
                  isDark
                    ? "bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-cyan-800 to-cyan-600 bg-clip-text text-transparent",
                )}
              >
                <AnimatedStatValue value={stat.value} start={isVisible} />
              </div>
              <p className={clsx("min-h-[2.5rem] text-xs md:text-sm line-clamp-2", isDark ? "text-gray-400" : "text-slate-600")}>{stat.label}</p>
            </div>
          ))}
        </div>
        <p className={clsx("mt-6 text-center text-xs md:text-sm", isDark ? "text-gray-400/90" : "text-slate-600")}>
          Serving retail, manufacturing, distribution, and service-driven businesses.
        </p>
      </div>
    </section>
  );
}
