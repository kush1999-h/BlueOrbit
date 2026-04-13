"use client";

import Link from "next/link";
import clsx from "clsx";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

type JobCardProps = {
  id: string;
  title: string;
  location: string;
  type: string;
  shortDescription: string;
  slug: string;
};

export function JobCard({ title, location, type, shortDescription, slug }: JobCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Link href={`/career/${slug}`}>
      <div
        className={clsx(
          "group relative cursor-pointer overflow-hidden rounded-xl border p-6 transition",
          isDark
            ? "border-cyan-500/30 bg-orbit-card hover:border-cyan-400/60 hover:bg-orbit-card/80 hover:shadow-glow-cyan"
            : "border-ui bg-ui-card shadow-[0_12px_30px_rgba(15,23,42,0.07)] hover:border-ui-strong hover:shadow-[0_16px_36px_rgba(15,23,42,0.10)]",
        )}
      >
        <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-r from-cyan-500/20 to-transparent opacity-0 transition group-hover:opacity-100" />

        <div className="mb-4">
          <h3 className={clsx("text-xl font-bold transition", isDark ? "text-cyan-300 group-hover:text-cyan-200" : "text-ui-heading group-hover:text-ui-link")}>
            {title}
          </h3>
          <p className={clsx("mt-1 text-sm", isDark ? "text-gray-400" : "text-ui-muted")}>{shortDescription}</p>
        </div>

        <div className={clsx("flex flex-wrap gap-4 text-sm", isDark ? "text-gray-300" : "text-ui-body")}>
          <div className="flex items-center gap-2">
            <MapPin className={clsx("h-4 w-4", isDark ? "text-cyan-400" : "text-ui-link")} />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className={clsx("h-4 w-4", isDark ? "text-cyan-400" : "text-ui-link")} />
            <span>{type}</span>
          </div>
        </div>

        <div className={clsx("mt-4 inline-flex items-center gap-2 text-sm font-semibold transition group-hover:translate-x-1", isDark ? "text-cyan-300" : "text-ui-link")}>
          View Details
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
