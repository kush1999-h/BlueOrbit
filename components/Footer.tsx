"use client";

import Link from "next/link";
import clsx from "clsx";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { LogoSVG } from "@/components/LogoSVG";
import { useTheme } from "@/components/ThemeProvider";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={clsx(
        "relative border-t",
        isDark
          ? "border-cyan-500/20 bg-orbit-darker"
          : "border-ui bg-[linear-gradient(180deg,#e7f1fb,#d9e7f4)]",
      )}
    >
      <div
        className={clsx(
          "pointer-events-none absolute inset-0",
          isDark
            ? "bg-[radial-gradient(circle_at_10%_10%,rgba(0,199,255,0.10),transparent_35%),radial-gradient(circle_at_90%_90%,rgba(56,189,248,0.08),transparent_35%)]"
            : "bg-[radial-gradient(circle_at_10%_10%,rgba(14,165,233,0.10),transparent_35%),radial-gradient(circle_at_90%_90%,rgba(56,189,248,0.08),transparent_35%)]",
        )}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 gap-10 py-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <LogoSVG className="h-14 md:h-16" />
            <p
              className={clsx(
                "mt-5 max-w-xs text-sm leading-[1.55]",
                isDark ? "text-slate-400" : "text-ui-body",
              )}
            >
              Blue Orbit Solutions delivers ERP, software, cloud,
              infrastructure, audit, training, and strategic technology
              solutions for businesses in Bangladesh.
            </p>
          </div>

          <div
            className={clsx(
              "md:col-span-2 md:border-l md:pl-6",
              isDark ? "md:border-cyan-500/15" : "md:border-ui",
            )}
          >
            <h3
              className={clsx(
                "text-sm font-semibold uppercase tracking-[0.16em]",
                isDark ? "text-cyan-300" : "text-ui-heading",
              )}
            >
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className={clsx(
                    "transition",
                    isDark
                      ? "text-slate-400 hover:text-cyan-200"
                      : "text-ui-body hover:text-ui-link",
                  )}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={clsx(
                    "transition",
                    isDark
                      ? "text-slate-400 hover:text-cyan-200"
                      : "text-ui-body hover:text-ui-link",
                  )}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className={clsx(
                    "transition",
                    isDark
                      ? "text-slate-400 hover:text-cyan-200"
                      : "text-ui-body hover:text-ui-link",
                  )}
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={clsx(
                    "transition",
                    isDark
                      ? "text-slate-400 hover:text-cyan-200"
                      : "text-ui-body hover:text-ui-link",
                  )}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div
            className={clsx(
              "md:col-span-3 md:border-l md:pl-6",
              isDark ? "md:border-cyan-500/15" : "md:border-ui",
            )}
          >
            <h3
              className={clsx(
                "text-sm font-semibold uppercase tracking-[0.16em]",
                isDark ? "text-cyan-300" : "text-ui-heading",
              )}
            >
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services#implementation"
                  className={clsx(
                    "transition",
                    isDark
                      ? "text-slate-400 hover:text-cyan-200"
                      : "text-ui-body hover:text-ui-link",
                  )}
                >
                  ERP & Business Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/services#customization"
                  className={clsx(
                    "transition",
                    isDark
                      ? "text-slate-400 hover:text-cyan-200"
                      : "text-ui-body hover:text-ui-link",
                  )}
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#devops"
                  className={clsx(
                    "transition",
                    isDark
                      ? "text-slate-400 hover:text-cyan-200"
                      : "text-ui-body hover:text-ui-link",
                  )}
                >
                  Cloud & Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/services#analytics"
                  className={clsx(
                    "transition",
                    isDark
                      ? "text-slate-400 hover:text-cyan-200"
                      : "text-ui-body hover:text-ui-link",
                  )}
                >
                  Audit & Advisory
                </Link>
              </li>
            </ul>
          </div>

          <div
            className={clsx(
              "md:col-span-3 md:border-l md:pl-6",
              isDark ? "md:border-cyan-500/15" : "md:border-ui",
            )}
          >
            <h3
              className={clsx(
                "text-sm font-semibold uppercase tracking-[0.16em]",
                isDark ? "text-cyan-300" : "text-ui-heading",
              )}
            >
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li
                className={clsx(
                  "flex items-center gap-2",
                  isDark ? "text-slate-400" : "text-ui-body",
                )}
              >
                <Mail className="h-4 w-4" />{" "}
                <span>rezwan.anwar@blueorbitsolutions.net</span>
              </li>
              <li
                className={clsx(
                  "flex items-center gap-2",
                  isDark ? "text-slate-400" : "text-ui-body",
                )}
              >
                <Phone className="h-4 w-4" /> <span>+8801730311503</span>
              </li>
              <li
                className={clsx(
                  "flex items-start gap-2",
                  isDark ? "text-slate-400" : "text-ui-body",
                )}
              >
                <MapPin className="mt-0.5 h-4 w-4" />{" "}
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={clsx(
            "relative flex flex-col border-t py-7 md:flex-row md:items-center md:justify-between",
            isDark ? "border-cyan-500/20" : "border-ui",
          )}
        >
          <p
            className={clsx(
              "text-sm",
              isDark ? "text-slate-500" : "text-ui-muted",
            )}
          >
            &copy; {currentYear} Blue Orbit. All rights reserved.
          </p>
          <div className="mt-4 flex gap-4 md:mt-0">
            <a
              href="https://facebook.com"
              className={clsx(
                "rounded-lg border p-2 transition",
                isDark
                  ? "border-cyan-500/25 text-slate-400 hover:border-cyan-400/60 hover:text-cyan-200"
                  : "border-ui bg-ui-elevated text-ui-body hover:border-ui-strong hover:bg-ui-card hover:text-ui-link",
              )}
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              className={clsx(
                "rounded-lg border p-2 transition",
                isDark
                  ? "border-cyan-500/25 text-slate-400 hover:border-cyan-400/60 hover:text-cyan-200"
                  : "border-ui bg-ui-elevated text-ui-body hover:border-ui-strong hover:bg-ui-card hover:text-ui-link",
              )}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com"
              className={clsx(
                "rounded-lg border p-2 transition",
                isDark
                  ? "border-cyan-500/25 text-slate-400 hover:border-cyan-400/60 hover:text-cyan-200"
                  : "border-ui bg-ui-elevated text-ui-body hover:border-ui-strong hover:bg-ui-card hover:text-ui-link",
              )}
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          className={clsx(
            "relative border-t py-4 text-center text-xs uppercase tracking-[0.18em]",
            isDark
              ? "border-cyan-500/12 text-cyan-200/75"
              : "border-ui text-ui-muted",
          )}
        >
          Official Odoo Learning Partner • Beyond62 • GalaxySpace • Huawei
          Solutions Alignment
        </div>
      </div>
    </footer>
  );
}
