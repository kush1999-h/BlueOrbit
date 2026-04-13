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
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (!prev && y > 36) return true;
        if (prev && y < 12) return false;
        return prev;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
    <nav
      className={clsx(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ease-out",
        scrolled ? "backdrop-blur-md" : "backdrop-blur-0",
        isDark
          ? scrolled
            ? "border-cyan-500/25 bg-orbit-dark/88"
            : "border-cyan-500/15 bg-orbit-dark/72"
          : scrolled
            ? "border-ui bg-ui-surface shadow-[0_8px_20px_rgba(11,28,49,0.10)]"
            : "border-ui bg-ui-page",
      )}
    >
      <div
        className={clsx(
          "mx-auto flex items-center justify-between transition-[min-height,padding,max-width] duration-300 ease-out",
          scrolled
            ? "max-w-6xl px-3 py-1.5 sm:px-4 lg:px-5 min-h-[68px] md:min-h-[78px]"
            : "max-w-7xl px-4 py-4 sm:px-6 lg:px-8 min-h-[88px] md:min-h-[104px]",
        )}
      >
        <Link href="/" className="flex flex-shrink-0 items-center gap-2">
          <LogoSVG className={clsx("transition-[height] duration-300 ease-out", scrolled ? "h-[2.7rem] md:h-[3.25rem]" : "h-[3.5rem] md:h-[4.5rem]")} />
        </Link>

        <div className={clsx("hidden md:flex transition-[gap] duration-300 ease-out", scrolled ? "gap-5" : "gap-8")}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "relative font-medium transition",
                scrolled ? "text-[13px]" : "text-sm",
                pathname === link.href
                  ? isDark
                    ? "text-cyan-200"
                    : "text-ui-heading"
                  : isDark
                    ? "text-gray-300 hover:text-cyan-300"
                    : "text-ui-body hover:text-ui-link",
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span
                  className={clsx(
                    "absolute -bottom-1 left-0 h-0.5 w-full rounded-full",
                    isDark ? "bg-cyan-300" : "bg-sky-800",
                  )}
                />
              )}
            </Link>
          ))}
        </div>

        <div className={clsx("flex items-center transition-[gap] duration-300 ease-out", scrolled ? "gap-2.5" : "gap-4")}>
          <ThemeToggle />
          <Link
            href="/request-quote"
            className={clsx(
              "hidden rounded-lg font-medium text-white transition sm:inline-block",
              scrolled ? "px-3.5 py-1 text-[13px]" : "px-4 py-2 text-sm",
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
                : "border-ui text-ui-heading hover:border-ui-strong hover:bg-slate-100",
            )}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className={clsx(
            "border-t backdrop-blur md:hidden",
            isDark
              ? "border-cyan-500/20 bg-orbit-dark/95"
              : "border-ui bg-ui-surface",
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
                    : "text-ui-body hover:text-ui-link",
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
    <div className="min-h-[88px] md:min-h-[104px]" aria-hidden="true" />
    </>
  );
}
