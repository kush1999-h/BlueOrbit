"use client";

import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={clsx(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border transition",
        isDark
          ? "border-cyan-300/30 bg-white/5 text-cyan-100 hover:border-cyan-300/60 hover:bg-cyan-300/10"
          : "border-slate-300/80 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-100",
      )}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
