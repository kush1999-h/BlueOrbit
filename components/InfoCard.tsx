"use client";

import clsx from "clsx";
import {
  Zap,
  ClipboardList,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

interface InfoCardProps {
  icon: string;
  title: string;
  desc: string;
}

const iconMap: { [key: string]: LucideIcon } = {
  zap: Zap,
  "clipboard-list": ClipboardList,
  "shield-check": ShieldCheck,
};

export function InfoCard({ icon: iconName, title, desc }: InfoCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const Icon = iconMap[iconName] || Zap;

  return (
    <div className="ui-card rounded-xl p-4 text-center">
      <div
        className={clsx(
          "mx-auto mb-2 inline-flex rounded-lg border p-2",
          isDark
            ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
            : "border-cyan-600/25 bg-cyan-50 text-cyan-700"
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-ui-heading mb-1 text-sm font-bold">{title}</h3>
      <p className="text-ui-muted text-xs">{desc}</p>
    </div>
  );
}
