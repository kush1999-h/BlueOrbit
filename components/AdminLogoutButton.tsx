"use client";

import { useState } from "react";
import clsx from "clsx";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";

export function AdminLogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  async function handleLogout() {
    setLoading(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      router.push("/admin/login");
      router.refresh();
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className={clsx(
        "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60",
        isDark
          ? "border border-cyan-400/30 bg-cyan-400/10 text-cyan-100 hover:bg-cyan-400/15"
          : "border border-ui-strong bg-ui-elevated text-ui-heading hover:bg-ui-card",
      )}
    >
      <LogOut className="h-4 w-4" />
      {loading ? "Signing out..." : "Sign Out"}
    </button>
  );
}

