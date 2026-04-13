"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") {
    return;
  }

  const html = document.documentElement;
  html.classList.remove("light", "dark");
  html.classList.add(theme);
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const saved = window.localStorage.getItem("blue-orbit-theme") as Theme | null;
  const legacy = window.localStorage.getItem("blubit-theme") as Theme | null;
  const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  return saved ?? legacy ?? preferred;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem("blue-orbit-theme", theme);
    window.localStorage.removeItem("blubit-theme");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      window.localStorage.setItem("blue-orbit-theme", next);
      return next;
    });
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}

