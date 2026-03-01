"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LogoSVG } from "@/components/LogoSVG";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-cyan-500/20 bg-orbit-dark/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <LogoSVG />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/request-quote"
            className="hidden px-4 py-2 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 transition hover:shadow-glow-cyan-lg sm:inline-block"
          >
            Request a Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-cyan-500/20 bg-orbit-dark/95 backdrop-blur md:hidden">
          <div className="space-y-3 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium text-gray-300 transition hover:text-cyan-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/request-quote"
              className="block mt-4 px-4 py-2 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 text-center transition hover:shadow-glow-cyan-lg"
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

