"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LogoSVG } from "@/components/LogoSVG";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 border-b transition",
        scrolled ? "backdrop-blur-md" : "backdrop-blur-0",
        isDark
          ? scrolled
            ? "border-cyan-500/25 bg-orbit-dark/88"
            : "border-cyan-500/15 bg-orbit-dark/72"
          : scrolled
            ? "border-slate-300/70 bg-white/92"
            : "border-slate-300/55 bg-white/84",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-shrink-0 items-center gap-2">
          <LogoSVG className="h-[3.5rem] md:h-[4.5rem]" />
        </Link>

        <div className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "relative text-sm font-medium transition",
                pathname === link.href
                  ? isDark
                    ? "text-cyan-200"
                    : "text-cyan-800"
                  : isDark
                    ? "text-gray-300 hover:text-cyan-300"
                    : "text-slate-700 hover:text-cyan-700",
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span
                  className={clsx(
                    "absolute -bottom-1 left-0 h-0.5 w-full rounded-full",
                    isDark ? "bg-cyan-300" : "bg-cyan-700",
                  )}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/request-quote"
            className={clsx(
              "hidden rounded-lg px-4 py-2 font-medium text-white transition sm:inline-block",
              isDark
                ? "bg-gradient-to-r from-cyan-500 to-cyan-400 hover:shadow-glow-cyan-lg"
                : "bg-slate-900 hover:bg-slate-800",
            )}
          >
            Request a Quote
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={clsx(
              "inline-flex items-center justify-center rounded-lg border p-2 md:hidden",
              isDark
                ? "border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10"
                : "border-slate-300/80 text-slate-700 hover:bg-slate-100",
            )}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={clsx(
            "border-t backdrop-blur md:hidden",
            isDark
              ? "border-cyan-500/20 bg-orbit-dark/95"
              : "border-slate-300/60 bg-white/95",
          )}
        >
          <div className="space-y-3 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "block py-2 text-sm font-medium transition",
                  isDark
                    ? "text-gray-300 hover:text-cyan-300"
                    : "text-slate-700 hover:text-cyan-700",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/request-quote"
              className={clsx(
                "mt-4 block rounded-lg px-4 py-2 text-center font-medium text-white transition",
                isDark
                  ? "bg-gradient-to-r from-cyan-500 to-cyan-400 hover:shadow-glow-cyan-lg"
                  : "bg-slate-900 hover:bg-slate-800",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
