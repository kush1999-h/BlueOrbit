"use client";

import clsx from "clsx";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Boxes,
  Calculator,
  Clock3,
  Factory,
  Globe,
  LayoutTemplate,
  ScanSearch,
  Server,
  Shield,
  X,
  type LucideIcon,
} from "lucide-react";
import { DEFAULT_MODULES } from "@/lib/data";
import {
  featureCard,
  sectionContainer,
  sectionEyebrow,
  sectionLead,
  sectionSpacing,
  sectionTitle,
  surfaceCard,
} from "@/lib/homepageStyles";
import { useTheme } from "@/components/ThemeProvider";

const iconMap: Record<string, LucideIcon> = {
  Calculator,
  Handshake: LayoutTemplate,
  Globe,
  ShoppingCart: Server,
  Boxes,
  ScanLine: Shield,
  Users: Clock3,
  Clock3: ScanSearch,
  Factory,
};

const ODOO_APPS = [
  "CRM",
  "Sales",
  "Inventory",
  "Accounting",
  "Purchase",
  "HR",
  "Project",
  "Helpdesk",
  "Website",
  "POS",
] as const;

const ODOO_ZONES = [
  {
    title: "Sales",
    subtitle: "CRM, sales pipeline, POS",
    apps: ["CRM", "Sales", "POS"],
  },
  {
    title: "Operations",
    subtitle: "Inventory, purchase, projects",
    apps: ["Inventory", "Purchase", "Project"],
  },
  {
    title: "Finance",
    subtitle: "Accounts, invoicing, expenses",
    apps: ["Accounting", "Invoicing", "Expenses"],
  },
  {
    title: "People & Service",
    subtitle: "HR, helpdesk, website",
    apps: ["HR", "Helpdesk", "Website"],
  },
] as const;

const capabilityLabels: Record<string, string> = {
  Applications: "Applications",
  "Business Websites": "Experience Layer",
  "Cloud & DevOps": "Operations",
  "Consultancy as a Service (Business)": "Advisory",
  "Cyber Security Audit": "Security",
  "IT Training": "Enablement",
  "Consultancy as a Service (Government)": "Advisory",
  "Satellite IoT Solutions": "Connectivity",
};

type SupportingModule = (typeof DEFAULT_MODULES)[number];
type NodeSize = "compact" | "standard" | "featured";
type ExpandAlign =
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";
type DesktopModuleNode = {
  placement: (typeof desktopNodePlacements)[number];
  module: SupportingModule;
};

const desktopNodePlacements = [
  {
    title: "Applications",
    top: "23%",
    left: "30%",
    lane: "outer",
    size: "standard" as NodeSize,
    align: "top-left" as ExpandAlign,
  },
  {
    title: "Business Websites",
    top: "23%",
    left: "70%",
    lane: "outer",
    size: "standard" as NodeSize,
    align: "top-right" as ExpandAlign,
  },
  {
    title: "Cloud & DevOps",
    top: "42%",
    left: "83%",
    lane: "outer",
    size: "standard" as NodeSize,
    align: "right" as ExpandAlign,
  },
  {
    title: "Consultancy as a Service (Business)",
    top: "64%",
    left: "82%",
    lane: "outer",
    size: "standard" as NodeSize,
    align: "bottom-right" as ExpandAlign,
  },
  {
    title: "Cyber Security Audit",
    top: "82%",
    left: "67%",
    lane: "outer",
    size: "standard" as NodeSize,
    align: "bottom-right" as ExpandAlign,
  },
  {
    title: "IT Training",
    top: "82%",
    left: "33%",
    lane: "outer",
    size: "standard" as NodeSize,
    align: "bottom-left" as ExpandAlign,
  },
  {
    title: "Consultancy as a Service (Government)",
    top: "64%",
    left: "18%",
    lane: "inner",
    size: "standard" as NodeSize,
    align: "left" as ExpandAlign,
  },
  {
    title: "Satellite IoT Solutions",
    top: "42%",
    left: "17%",
    lane: "inner",
    size: "compact" as NodeSize,
    align: "left" as ExpandAlign,
  },
] as const;

const desktopNodeSizeStyles: Record<NodeSize, string> = {
  compact: "min-h-[66px] min-w-[176px] px-4 py-3",
  standard: "min-h-[72px] min-w-[206px] px-4.5 py-3.5",
  featured: "min-h-[78px] min-w-[232px] px-4.5 py-3.5",
};

const detailPanelAlignStyles: Record<ExpandAlign, string> = {
  left: "right-[calc(100%+14px)] top-1/2 -translate-y-1/2 origin-right",
  right: "left-[calc(100%+14px)] top-1/2 -translate-y-1/2 origin-left",
  "top-left":
    "right-[calc(100%+10px)] bottom-[calc(100%+10px)] origin-bottom-right",
  "top-right":
    "left-[calc(100%+10px)] bottom-[calc(100%+10px)] origin-bottom-left",
  "bottom-left":
    "right-[calc(100%+10px)] top-[calc(100%+10px)] origin-top-right",
  "bottom-right":
    "left-[calc(100%+10px)] top-[calc(100%+10px)] origin-top-left",
};

const twoLineClampStyle: CSSProperties = {
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

const threeLineClampStyle: CSSProperties = {
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

function getBenefitPreview(content: string, maxChars = 180): string {
  const normalized = content.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxChars) {
    return normalized;
  }

  const clipped = normalized.slice(0, maxChars);
  const lastSpace = clipped.lastIndexOf(" ");
  const shortText = lastSpace > 0 ? clipped.slice(0, lastSpace) : clipped;
  return `${shortText}...`;
}

function getBenefitPoints(content: string): string[] {
  return content
    .split(/(?<=\.)\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function OdooCore({
  iconName,
  isDark,
  compact = false,
  isExpanded = false,
  onOpen,
  onClose,
  onToggle,
}: {
  iconName: string;
  isDark: boolean;
  compact?: boolean;
  isExpanded?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onToggle?: () => void;
}) {
  const Icon = iconMap[iconName] ?? Calculator;

  if (compact) {
    return (
      <article
        data-orbit-interactive
        className={clsx(
          "relative overflow-hidden rounded-[2rem] border p-6 md:p-7",
          featureCard(
            isDark,
            isDark
              ? "border-cyan-300/20 bg-[radial-gradient(ellipse_at_50%_30%,rgba(48,213,255,0.18),rgba(7,20,35,0.94)_42%,rgba(5,13,25,0.98)_100%)]"
              : "border-cyan-700/15 bg-[radial-gradient(ellipse_at_50%_30%,rgba(30,167,255,0.12),rgba(255,255,255,0.98)_42%,rgba(244,249,255,1)_100%)]",
          ),
        )}
      >
        <div className="relative z-10 space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div
              className={clsx(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]",
                isDark
                  ? "border-cyan-300/18 bg-cyan-300/10 text-cyan-100"
                  : "border-cyan-700/15 bg-cyan-50 text-cyan-900",
              )}
            >
              <span
                className={clsx(
                  "h-1.5 w-1.5 rounded-full",
                  isDark ? "bg-cyan-300" : "bg-cyan-700",
                )}
              />
              Core Platform
            </div>
            <div
              className={clsx(
                "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border",
                isDark
                  ? "border-cyan-300/22 bg-cyan-300/10 text-cyan-100"
                  : "border-cyan-700/16 bg-cyan-50 text-cyan-900",
              )}
            >
              <Icon className="h-5 w-5" />
            </div>
          </div>
          <div>
            <h3
              className={clsx(
                "text-3xl font-bold leading-[1.02]",
                isDark ? "text-white" : "text-slate-900",
              )}
            >
              Odoo ERP
            </h3>
            <p
              className={clsx(
                "mt-2 max-w-[27rem] text-sm leading-6",
                isDark ? "text-slate-300" : "text-ui-muted",
              )}
            >
              We deliver Odoo ERP setup, customization, migration, training, and
              support so your core teams can run on one connected system.
            </p>
          </div>
          <div
            className={clsx(
              "rounded-[1.4rem] border p-4",
              isDark
                ? "border-cyan-300/14 bg-black/18"
                : "border-ui bg-ui-card",
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <h4
                className={clsx(
                  "text-[11px] font-semibold uppercase tracking-[0.18em]",
                  isDark ? "text-cyan-200" : "text-cyan-800",
                )}
              >
                ERP Zones
              </h4>
              <span
                className={clsx(
                  "text-[10px] uppercase tracking-[0.16em]",
                  isDark ? "text-slate-400" : "text-slate-500",
                )}
              >
                What we handle
              </span>
            </div>
            <div className="mt-3 grid gap-2 text-left md:grid-cols-2">
              {ODOO_ZONES.map((zone) => (
                <div
                  key={zone.title}
                  className={clsx(
                    "rounded-2xl border px-3 py-3",
                    isDark
                      ? "border-cyan-300/12 bg-cyan-300/6"
                      : "border-ui bg-ui-elevated",
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p
                        className={clsx(
                          "text-[10px] font-semibold uppercase tracking-[0.16em]",
                          isDark ? "text-cyan-200" : "text-cyan-800",
                        )}
                      >
                        {zone.title}
                      </p>
                      <p
                        className={clsx(
                          "mt-1 text-[11px] leading-4",
                          isDark ? "text-slate-400" : "text-slate-500",
                        )}
                      >
                        {zone.subtitle}
                      </p>
                    </div>
                    <span
                      className={clsx(
                        "rounded-full px-2 py-1 text-[10px] font-semibold",
                        isDark
                          ? "bg-cyan-300/10 text-cyan-100"
                          : "bg-cyan-50 text-cyan-900",
                      )}
                    >
                      {zone.apps.length} Apps
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {zone.apps.map((app) => (
                      <span
                        key={app}
                        className={clsx(
                          "inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-medium",
                          isDark
                            ? "border-cyan-300/14 bg-cyan-300/6 text-slate-100"
                            : "border-ui bg-ui-surface text-ui-body",
                        )}
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between gap-3">
              <h4
                className={clsx(
                  "text-[11px] font-semibold uppercase tracking-[0.18em]",
                  isDark ? "text-cyan-200" : "text-cyan-800",
                )}
              >
                Cross-team Coverage
              </h4>
              <span
                className={clsx(
                  "text-[10px] uppercase tracking-[0.16em]",
                  isDark ? "text-slate-400" : "text-slate-500",
                )}
              >
                Core modules
              </span>
            </div>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {ODOO_APPS.map((app) => (
                <span
                  key={app}
                  className={clsx(
                    "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium",
                    isDark
                      ? "border-cyan-300/16 bg-[linear-gradient(135deg,rgba(48,213,255,0.12),rgba(48,213,255,0.04))] text-cyan-100"
                      : "border-cyan-700/15 bg-[linear-gradient(135deg,rgba(30,167,255,0.10),rgba(30,167,255,0.03))] text-cyan-900",
                  )}
                >
                  <span
                    className={clsx(
                      "h-1.5 w-1.5 rounded-full",
                      isDark ? "bg-cyan-300" : "bg-cyan-700",
                    )}
                  />
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  }

  const openCore = () => onOpen?.();
  const closeCore = () => onClose?.();

  return (
    <div
      data-orbit-interactive
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-label="Toggle Odoo platform details"
      onMouseEnter={openCore}
      onMouseLeave={closeCore}
      onFocus={openCore}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          closeCore();
        }
      }}
      onClick={onToggle}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggle?.();
        }
      }}
      className="relative h-[32rem] w-[32rem] cursor-pointer rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
    >
      <div
        className={clsx(
          "absolute inset-0 rounded-full transition-all duration-300",
          isExpanded ? "scale-100 opacity-100" : "scale-95 opacity-0",
        )}
      >
        <div
          className={clsx(
            "absolute inset-0 rounded-full border shadow-[0_0_48px_rgba(48,213,255,0.14)]",
            isDark
              ? "border-cyan-300/22 bg-[radial-gradient(circle_at_50%_28%,rgba(48,213,255,0.18),rgba(7,20,35,0.95)_44%,rgba(5,13,25,0.98)_100%)]"
              : "border-cyan-700/15 bg-[radial-gradient(circle_at_50%_28%,rgba(30,167,255,0.12),rgba(255,255,255,0.98)_44%,rgba(244,249,255,1)_100%)]",
          )}
        />
        <div
          className={clsx(
            "pointer-events-none absolute inset-[8%] rounded-full border",
            isDark ? "border-cyan-300/10" : "border-cyan-700/10",
          )}
        />
        <div
          className={clsx(
            "pointer-events-none absolute inset-[19%] rounded-full border",
            isDark ? "border-cyan-300/8" : "border-cyan-700/8",
          )}
        />

        <div className="absolute inset-x-10 top-8 flex items-center justify-between">
          <div
            className={clsx(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]",
              isDark
                ? "border-cyan-300/18 bg-cyan-300/10 text-cyan-100"
                : "border-cyan-700/15 bg-cyan-50 text-cyan-900",
            )}
          >
            <span
              className={clsx(
                "h-1.5 w-1.5 rounded-full",
                isDark ? "bg-cyan-300" : "bg-cyan-700",
              )}
            />
            Core Platform
          </div>
          <div
            className={clsx(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border",
              isDark
                ? "border-cyan-300/22 bg-cyan-300/10 text-cyan-100"
                : "border-cyan-700/16 bg-cyan-50 text-cyan-900",
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <div className="absolute inset-x-12 top-14 text-center">
          <h3
            className={clsx(
              "text-[2rem] font-bold leading-none",
              isDark ? "text-white" : "text-slate-900",
            )}
          >
            Odoo ERP
          </h3>
          <p
            className={clsx(
              "mx-auto mt-2 max-w-[18rem] text-[12px] leading-5",
              isDark ? "text-slate-300" : "text-ui-muted",
            )}
          >
            We implement, customize, migrate, train, and support Odoo across the
            business areas below.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div
            className={clsx(
              "absolute left-1/2 top-1/2 h-px w-[8.5rem] -translate-y-1/2 -translate-x-[96%] rotate-[-34deg]",
              isDark
                ? "bg-[linear-gradient(to_left,rgba(48,213,255,0.24),rgba(48,213,255,0.02))]"
                : "bg-[linear-gradient(to_left,rgba(30,167,255,0.22),rgba(30,167,255,0.03))]",
            )}
          />
          <div
            className={clsx(
              "absolute left-1/2 top-1/2 h-px w-[8.5rem] -translate-y-1/2 translate-x-[-4%] rotate-[34deg]",
              isDark
                ? "bg-[linear-gradient(to_right,rgba(48,213,255,0.24),rgba(48,213,255,0.02))]"
                : "bg-[linear-gradient(to_right,rgba(30,167,255,0.22),rgba(30,167,255,0.03))]",
            )}
          />
          <div
            className={clsx(
              "absolute left-1/2 top-1/2 h-px w-[8.5rem] -translate-y-1/2 -translate-x-[96%] rotate-[34deg]",
              isDark
                ? "bg-[linear-gradient(to_left,rgba(48,213,255,0.18),rgba(48,213,255,0.02))]"
                : "bg-[linear-gradient(to_left,rgba(30,167,255,0.18),rgba(30,167,255,0.03))]",
            )}
          />
          <div
            className={clsx(
              "absolute left-1/2 top-1/2 h-px w-[8.5rem] -translate-y-1/2 translate-x-[-4%] rotate-[-34deg]",
              isDark
                ? "bg-[linear-gradient(to_right,rgba(48,213,255,0.18),rgba(48,213,255,0.02))]"
                : "bg-[linear-gradient(to_right,rgba(30,167,255,0.18),rgba(30,167,255,0.03))]",
            )}
          />
        </div>

        <div
          className={clsx(
            "absolute left-1/2 top-1/2 z-20 h-[8.6rem] w-[8.6rem] -translate-x-1/2 -translate-y-1/2 rounded-full",
          )}
        >
          <div
            className={clsx(
              "erp-core-breathe absolute inset-[-14%] rounded-full blur-2xl",
              isDark
                ? "bg-[radial-gradient(circle,rgba(48,213,255,0.22),rgba(48,213,255,0.06)_45%,transparent_72%)]"
                : "bg-[radial-gradient(circle,rgba(30,167,255,0.18),rgba(30,167,255,0.05)_45%,transparent_72%)]",
            )}
          />
          <div
            className={clsx(
              "absolute inset-0 rounded-full border",
              isDark
                ? "border-cyan-300/18 bg-[radial-gradient(circle_at_50%_50%,rgba(4,18,30,0.76),rgba(4,12,22,0.96)_72%)] shadow-[inset_0_1px_0_rgba(125,245,255,0.12),0_0_28px_rgba(48,213,255,0.16)]"
                : "border-cyan-700/14 bg-[radial-gradient(circle_at_50%_50%,rgba(241,250,255,0.98),rgba(225,241,250,0.96)_72%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_0_24px_rgba(30,167,255,0.10)]",
            )}
          />
          <div
            className={clsx(
              "pointer-events-none absolute inset-[8%] rounded-full border",
              isDark
                ? "border-cyan-300/10 bg-[radial-gradient(circle_at_50%_35%,rgba(48,213,255,0.10),transparent_68%)]"
                : "border-cyan-700/10 bg-[radial-gradient(circle_at_50%_35%,rgba(30,167,255,0.08),transparent_68%)]",
            )}
          />
          <div
            className={clsx(
              "absolute inset-[20%] flex flex-col items-center justify-center rounded-full border text-center",
              isDark
                ? "border-cyan-300/16 bg-[radial-gradient(circle_at_50%_35%,rgba(48,213,255,0.08),rgba(5,15,26,0.94)_78%)]"
                : "border-cyan-700/10 bg-[radial-gradient(circle_at_50%_35%,rgba(30,167,255,0.08),rgba(255,255,255,0.95)_78%)]",
            )}
          >
            <Icon
              className={clsx(
                "h-5 w-5",
                isDark ? "text-cyan-100" : "text-cyan-900",
              )}
            />
            <p
              className={clsx(
                "mt-2 text-[10px] font-semibold uppercase tracking-[0.22em]",
                isDark ? "text-cyan-200" : "text-cyan-800",
              )}
            >
              ERP CORE
            </p>
            <p
              className={clsx(
                "mt-1 text-[9px] leading-3.5",
                isDark ? "text-slate-400" : "text-slate-500",
              )}
            >
              Shared workflows & clean data
            </p>
          </div>
        </div>

        <div className="absolute left-[9%] top-[31%] w-[10.25rem]">
          <div
            className={clsx(
              "min-h-[8rem] rounded-[1.35rem] border px-3.5 py-3 text-left",
              isDark
                ? "border-cyan-300/16 bg-[#071423]/88 text-slate-100"
                : "border-ui bg-ui-card text-ui-heading",
            )}
          >
            <p
              className={clsx(
                "text-[10px] font-semibold uppercase tracking-[0.18em]",
                isDark ? "text-cyan-200" : "text-cyan-800",
              )}
            >
              {ODOO_ZONES[0].title}
            </p>
            <p
              className={clsx(
                "mt-1 text-[11px] leading-4",
                isDark ? "text-slate-400" : "text-slate-500",
              )}
            >
              {ODOO_ZONES[0].subtitle}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {ODOO_ZONES[0].apps.map((app) => (
                <span
                  key={app}
                  className={clsx(
                    "rounded-full border px-2.5 py-1 text-[9px] font-medium",
                    isDark
                      ? "border-cyan-300/14 bg-cyan-300/6 text-slate-100"
                      : "border-ui bg-ui-surface text-ui-body",
                  )}
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute right-[9%] top-[31%] w-[10.25rem]">
          <div
            className={clsx(
              "min-h-[8rem] rounded-[1.35rem] border px-3.5 py-3 text-left",
              isDark
                ? "border-cyan-300/16 bg-[#071423]/88 text-slate-100"
                : "border-ui bg-ui-card text-ui-heading",
            )}
          >
            <p
              className={clsx(
                "text-[10px] font-semibold uppercase tracking-[0.18em]",
                isDark ? "text-cyan-200" : "text-cyan-800",
              )}
            >
              {ODOO_ZONES[1].title}
            </p>
            <p
              className={clsx(
                "mt-1 text-[11px] leading-4",
                isDark ? "text-slate-400" : "text-slate-500",
              )}
            >
              {ODOO_ZONES[1].subtitle}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {ODOO_ZONES[1].apps.map((app) => (
                <span
                  key={app}
                  className={clsx(
                    "rounded-full border px-2.5 py-1 text-[9px] font-medium",
                    isDark
                      ? "border-cyan-300/14 bg-cyan-300/6 text-slate-100"
                      : "border-ui bg-ui-surface text-ui-body",
                  )}
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute left-[9%] bottom-[18%] w-[10.25rem]">
          <div
            className={clsx(
              "min-h-[8rem] rounded-[1.35rem] border px-3.5 py-3 text-left",
              isDark
                ? "border-cyan-300/16 bg-[#071423]/88 text-slate-100"
                : "border-ui bg-ui-card text-ui-heading",
            )}
          >
            <p
              className={clsx(
                "text-[10px] font-semibold uppercase tracking-[0.18em]",
                isDark ? "text-cyan-200" : "text-cyan-800",
              )}
            >
              {ODOO_ZONES[2].title}
            </p>
            <p
              className={clsx(
                "mt-1 text-[11px] leading-4",
                isDark ? "text-slate-400" : "text-slate-500",
              )}
            >
              {ODOO_ZONES[2].subtitle}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {ODOO_ZONES[2].apps.map((app) => (
                <span
                  key={app}
                  className={clsx(
                    "rounded-full border px-2.5 py-1 text-[9px] font-medium",
                    isDark
                      ? "border-cyan-300/14 bg-cyan-300/6 text-slate-100"
                      : "border-ui bg-ui-surface text-ui-body",
                  )}
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute right-[9%] bottom-[18%] w-[10.25rem]">
          <div
            className={clsx(
              "min-h-[8rem] rounded-[1.35rem] border px-3.5 py-3 text-left",
              isDark
                ? "border-cyan-300/16 bg-[#071423]/88 text-slate-100"
                : "border-ui bg-ui-card text-ui-heading",
            )}
          >
            <p
              className={clsx(
                "text-[10px] font-semibold uppercase tracking-[0.18em]",
                isDark ? "text-cyan-200" : "text-cyan-800",
              )}
            >
              {ODOO_ZONES[3].title}
            </p>
            <p
              className={clsx(
                "mt-1 text-[11px] leading-4",
                isDark ? "text-slate-400" : "text-slate-500",
              )}
            >
              {ODOO_ZONES[3].subtitle}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {ODOO_ZONES[3].apps.map((app) => (
                <span
                  key={app}
                  className={clsx(
                    "rounded-full border px-2.5 py-1 text-[9px] font-medium",
                    isDark
                      ? "border-cyan-300/14 bg-cyan-300/6 text-slate-100"
                      : "border-ui bg-ui-surface text-ui-body",
                  )}
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden={isExpanded}
        className={clsx(
          "pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-[16.25rem] w-[16.25rem] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-full border px-5 pb-5 pt-4 text-center transition-[transform,border-color,box-shadow,background-color,opacity] duration-200",
          featureCard(
            isDark,
            isDark
              ? "border-cyan-300/20 bg-[radial-gradient(circle_at_50%_38%,rgba(48,213,255,0.18),rgba(7,20,35,0.94)_42%,rgba(5,13,25,0.98)_100%)]"
              : "border-cyan-700/15 bg-[radial-gradient(circle_at_50%_38%,rgba(30,167,255,0.12),rgba(255,255,255,0.98)_42%,rgba(244,249,255,1)_100%)]",
          ),
          isExpanded ? "scale-90 opacity-0" : "scale-100 opacity-100",
        )}
      >
        <div
          className={clsx(
            "pointer-events-none absolute inset-[11%] rounded-full border",
            isDark ? "border-cyan-300/10" : "border-cyan-700/10",
          )}
        />
        <div
          className={clsx(
            "pointer-events-none absolute inset-[23%] rounded-full border",
            isDark ? "border-cyan-300/8" : "border-cyan-700/8",
          )}
        />
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-center justify-between gap-3">
            <div
              className={clsx(
                "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em]",
                isDark
                  ? "border-cyan-300/18 bg-cyan-300/10 text-cyan-100"
                  : "border-cyan-700/15 bg-cyan-50 text-cyan-900",
              )}
            >
              <span
                className={clsx(
                  "h-1.5 w-1.5 rounded-full",
                  isDark ? "bg-cyan-300" : "bg-cyan-700",
                )}
              />
              Core Platform
            </div>
            <div
              className={clsx(
                "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border",
                isDark
                  ? "border-cyan-300/22 bg-cyan-300/10 text-cyan-100"
                  : "border-cyan-700/16 bg-cyan-50 text-cyan-900",
              )}
            >
              <Icon className="h-4 w-4" />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <h3
              className={clsx(
                "text-[2rem] font-bold leading-none",
                isDark ? "text-white" : "text-slate-900",
              )}
            >
              Odoo ERP
            </h3>
            <p
              className={clsx(
                "mx-auto mt-3 max-w-[11rem] text-[12px] leading-5",
                isDark ? "text-slate-300" : "text-ui-muted",
              )}
            >
              Hover or tap to see what we implement.
            </p>
          </div>
          <p
            className={clsx(
              "mx-auto max-w-[11.25rem] text-[11px] leading-4.5",
              isDark ? "text-cyan-100/85" : "text-cyan-900/80",
            )}
          >
            Setup, customization, migration, training, and support
          </p>
        </div>
      </div>
    </div>
  );
}

function OrbitalNode({
  module,
  isDark,
  isActive,
  isSelected,
  onOpen,
  onClose,
  onSelect,
  placement,
}: {
  module: SupportingModule;
  isDark: boolean;
  isActive: boolean;
  isSelected: boolean;
  onOpen: () => void;
  onClose: () => void;
  onSelect: (module: SupportingModule, trigger: HTMLElement | null) => void;
  placement: (typeof desktopNodePlacements)[number];
}) {
  const Icon = iconMap[module.iconName] ?? Calculator;
  const label = capabilityLabels[module.title] ?? "Capability";
  const previewText = getBenefitPreview(module.benefit);

  return (
    <div
      data-capability-node
      data-orbit-interactive
      className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
      style={{ top: placement.top, left: placement.left }}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          onClose();
        }
      }}
    >
      <button
        type="button"
        aria-expanded={isSelected}
        aria-label={`Open details for ${module.title}`}
        onClick={(event) => onSelect(module, event.currentTarget)}
        className={clsx(
          "group relative flex items-center gap-3 rounded-full border text-left transition-[transform,border-color,box-shadow,background-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2",
          desktopNodeSizeStyles[placement.size],
          isDark
            ? "border-cyan-300/16 bg-[#081827]/92 text-cyan-100 ring-offset-[#04101d]"
            : "border-ui bg-ui-elevated text-ui-link ring-offset-[var(--ui-elevated)]",
          isActive || isSelected
            ? isDark
              ? "scale-[1.03] border-cyan-300/30 shadow-[0_0_32px_rgba(48,213,255,0.16)]"
              : "scale-[1.03] border-cyan-700/30 shadow-[0_0_24px_rgba(30,167,255,0.12)]"
            : "hover:-translate-y-0.5",
        )}
      >
        <div
          className={clsx(
            placement.size === "featured" ? "h-11 w-11" : "h-10 w-10",
            "inline-flex shrink-0 items-center justify-center rounded-full border",
            isDark
              ? "border-cyan-300/22 bg-cyan-300/10 text-cyan-100"
              : "border-cyan-700/16 bg-cyan-50 text-cyan-900",
          )}
        >
          <Icon
            className={clsx(
              placement.size === "compact" ? "h-4 w-4" : "h-4.5 w-4.5",
            )}
          />
        </div>
        <div>
          <p
            className={clsx(
              "text-[10px] font-semibold uppercase tracking-[0.18em]",
              isDark ? "text-cyan-200/90" : "text-cyan-800",
            )}
          >
            {label}
          </p>
          <p
            className={clsx(
              placement.size === "featured" ? "text-[15px]" : "text-[14px]",
              "mt-1 font-semibold leading-tight",
              isDark ? "text-white" : "text-slate-900",
            )}
            style={twoLineClampStyle}
          >
            {module.title}
          </p>
        </div>
      </button>

      <div
        className={clsx(
          "pointer-events-none absolute z-20 w-[280px] transition-[opacity,transform] duration-200",
          detailPanelAlignStyles[placement.align],
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-95",
        )}
      >
        <div
          className={clsx(
            "rounded-[1.35rem] border p-4",
            isDark
              ? "border-cyan-300/20 bg-[#071423]/96 text-slate-100 shadow-[0_0_28px_rgba(48,213,255,0.12)]"
              : "border-ui bg-ui-elevated text-ui-heading shadow-[0_10px_24px_rgba(11,28,49,0.10)]",
          )}
        >
          <p
            className={clsx(
              "text-[10px] font-semibold uppercase tracking-[0.18em]",
              isDark ? "text-cyan-200" : "text-cyan-800",
            )}
          >
            {label}
          </p>
          <h4
            className={clsx(
              "mt-2 text-base font-semibold leading-tight",
              isDark ? "text-white" : "text-slate-900",
            )}
            style={twoLineClampStyle}
          >
            {module.title}
          </h4>
          <p
            className={clsx(
              "mt-3 text-sm leading-6",
              isDark ? "text-slate-300" : "text-ui-muted",
            )}
            style={threeLineClampStyle}
          >
            {previewText}
          </p>
        </div>
      </div>
    </div>
  );
}

function CompactCapabilityCard({
  module,
  isDark,
  isSelected,
  onSelect,
}: {
  module: SupportingModule;
  isDark: boolean;
  isSelected: boolean;
  onSelect: (module: SupportingModule, trigger: HTMLElement | null) => void;
}) {
  const Icon = iconMap[module.iconName] ?? Calculator;
  const label = capabilityLabels[module.title] ?? "Capability";
  const previewText = getBenefitPreview(module.benefit, 140);

  return (
    <div
      data-capability-node
      data-orbit-interactive
      className={clsx(
        "rounded-[1.5rem] border p-4 transition",
        surfaceCard(
          isDark,
          isDark ? "border-cyan-300/16 bg-[#071423]/90" : "bg-ui-elevated",
        ),
        isSelected &&
          (isDark
            ? "shadow-[0_0_28px_rgba(48,213,255,0.12)]"
            : "shadow-[0_10px_30px_rgba(30,167,255,0.08)]"),
      )}
    >
      <button
        type="button"
        onClick={(event) => onSelect(module, event.currentTarget)}
        aria-expanded={isSelected}
        aria-label={`Open details for ${module.title}`}
        className="flex w-full items-start gap-4 text-left focus-visible:outline-none"
      >
        <div
          className={clsx(
            "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border",
            isDark
              ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-100"
              : "border-cyan-700/16 bg-cyan-50 text-cyan-900",
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <p
            className={clsx(
              "text-[10px] font-semibold uppercase tracking-[0.18em]",
              isDark ? "text-cyan-200/90" : "text-cyan-800",
            )}
          >
            {label}
          </p>
          <h4
            className={clsx(
              "mt-1 text-base font-semibold leading-tight",
              isDark ? "text-white" : "text-slate-900",
            )}
            style={twoLineClampStyle}
          >
            {module.title}
          </h4>
        </div>
      </button>

      <p
        className={clsx(
          "mt-4 text-sm leading-6",
          isDark ? "text-slate-300" : "text-ui-muted",
        )}
        style={twoLineClampStyle}
      >
        {previewText}
      </p>
    </div>
  );
}

export function ModulesGrid() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [odooPlatform, ...supportingModules] = DEFAULT_MODULES;
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);
  const [isCoreExpanded, setIsCoreExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const detailsPanelRef = useRef<HTMLDivElement | null>(null);
  const closeDetailsButtonRef = useRef<HTMLButtonElement | null>(null);
  const detailsTriggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      if (!target.closest("[data-orbit-interactive]")) {
        setActiveNodeId(null);
        setIsCoreExpanded(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  const desktopModules = useMemo<DesktopModuleNode[]>(
    () =>
      desktopNodePlacements.flatMap((placement) => {
        const matchedModule = supportingModules.find(
          (item) => item.title === placement.title,
        );
        return matchedModule ? [{ placement, module: matchedModule }] : [];
      }),
    [supportingModules],
  );

  const selectedModule = useMemo(
    () =>
      selectedModuleId === null
        ? null
        : supportingModules.find((module) => module.id === selectedModuleId) ??
          null,
    [selectedModuleId, supportingModules],
  );

  useEffect(() => {
    if (selectedModuleId === null) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeDetailsButtonRef.current?.focus();
    }, 0);

    const handleDrawerKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setSelectedModuleId(null);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const panel = detailsPanelRef.current;
      if (!panel) {
        return;
      }

      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (!activeElement || activeElement === first || !panel.contains(activeElement)) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (!activeElement || activeElement === last || !panel.contains(activeElement)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleDrawerKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleDrawerKeyDown);
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [selectedModuleId]);

  useEffect(() => {
    if (selectedModuleId !== null) {
      return;
    }
    detailsTriggerRef.current?.focus();
  }, [selectedModuleId]);

  const openModuleDetails = (
    module: SupportingModule,
    trigger: HTMLElement | null,
  ) => {
    detailsTriggerRef.current = trigger;
    setSelectedModuleId(module.id);
    setActiveNodeId(module.id);
    setIsCoreExpanded(false);
  };

  const closeModuleDetails = () => {
    setSelectedModuleId(null);
  };

  return (
    <section
      ref={sectionRef}
      className={clsx(
        "relative overflow-visible",
        sectionSpacing,
        isDark ? "bg-orbit-darker" : "bg-ui-page",
      )}
    >
      <div
        className={clsx(
          "pointer-events-none absolute inset-0",
          isDark
            ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:72px_72px]"
            : "bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:72px_72px]",
        )}
      />
      <div
        className={clsx(
          "pointer-events-none absolute left-1/2 top-[52%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl",
          isDark ? "bg-cyan-400/8" : "bg-cyan-500/8",
        )}
      />

      <div className={clsx("relative", sectionContainer)}>
        <div className="mx-auto mb-12 max-w-5xl text-center md:mb-14">
          <p
            className={clsx(
              sectionEyebrow,
              isDark ? "text-cyan-200" : "text-cyan-900",
            )}
          >
            What We Do
          </p>
          <h2
            className={clsx(
              sectionTitle,
              isDark ? "text-white" : "text-slate-900",
            )}
          >
            What we deliver across ERP, software, cloud, infrastructure, and
            advisory
          </h2>
          <p
            className={clsx(
              sectionLead,
              isDark ? "text-slate-300" : "text-ui-muted",
            )}
          >
            We handle Odoo ERP setup, customization, migration, training, and
            support, alongside software development, websites, cloud and DevOps,
            server infrastructure, cyber security, and IT advisory.
          </p>
        </div>

        <div className="hidden md:block">
          <div className="relative mx-auto min-h-[520px] max-w-[1180px] scale-[0.88] origin-top md:scale-[0.88] lg:min-h-[540px] lg:scale-[0.96] lg:origin-top xl:min-h-[560px] xl:scale-100">
            <svg
              className={clsx(
                "pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-200",
                isCoreExpanded ? "opacity-75" : "opacity-100",
              )}
              viewBox="0 0 1180 580"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <ellipse
                cx="590"
                cy="322"
                rx="432"
                ry="176"
                stroke={
                  isDark ? "rgba(103,232,249,0.18)" : "rgba(14,116,144,0.16)"
                }
                strokeWidth="1.4"
                strokeDasharray="8 12"
              />
              <ellipse
                cx="590"
                cy="322"
                rx="342"
                ry="136"
                stroke={
                  isDark ? "rgba(103,232,249,0.12)" : "rgba(14,116,144,0.12)"
                }
                strokeWidth="1.2"
                strokeDasharray="7 11"
              />
              <ellipse
                cx="590"
                cy="322"
                rx="238"
                ry="88"
                stroke={
                  isDark ? "rgba(103,232,249,0.08)" : "rgba(14,116,144,0.08)"
                }
                strokeWidth="1"
                strokeDasharray="5 12"
              />
              <path
                d="M 462 322 C 508 282, 548 262, 590 254"
                stroke={
                  isDark ? "rgba(103,232,249,0.15)" : "rgba(14,116,144,0.12)"
                }
                strokeWidth="1.3"
                strokeDasharray="5 9"
              />
              <path
                d="M 720 322 C 680 360, 640 384, 590 390"
                stroke={
                  isDark ? "rgba(103,232,249,0.12)" : "rgba(14,116,144,0.12)"
                }
                strokeWidth="1.2"
                strokeDasharray="5 9"
              />
              <path
                d="M 470 322 C 510 334, 538 352, 560 380"
                stroke={
                  isDark ? "rgba(103,232,249,0.10)" : "rgba(14,116,144,0.10)"
                }
                strokeWidth="1.1"
                strokeDasharray="5 11"
              />
              <path
                d="M 522 322 C 540 314, 562 310, 590 310"
                stroke={
                  isDark ? "rgba(103,232,249,0.10)" : "rgba(14,116,144,0.10)"
                }
                strokeWidth="1"
                strokeDasharray="3 7"
              />
              <path
                d="M 590 310 C 616 310, 640 314, 662 322"
                stroke={
                  isDark ? "rgba(103,232,249,0.08)" : "rgba(14,116,144,0.08)"
                }
                strokeWidth="1"
                strokeDasharray="3 7"
              />
            </svg>

            <div
              className={clsx(
                "pointer-events-none absolute left-1/2 top-[55%] h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,opacity] duration-300",
                isCoreExpanded ? "opacity-85" : "opacity-100",
                isDark
                  ? "bg-[radial-gradient(circle_at_center,rgba(48,213,255,0.14),rgba(48,213,255,0.05)_36%,transparent_70%)]"
                  : "bg-[radial-gradient(circle_at_center,rgba(30,167,255,0.12),rgba(30,167,255,0.04)_36%,transparent_70%)]",
              )}
            />
            <div
              className={clsx(
                "pointer-events-none absolute left-1/2 top-[55%] h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,opacity] duration-300",
                isCoreExpanded ? "opacity-84" : "opacity-100",
                isDark
                  ? "border-cyan-300/10 bg-[linear-gradient(135deg,rgba(48,213,255,0.03),transparent_55%)]"
                  : "border-cyan-700/8 bg-[linear-gradient(135deg,rgba(30,167,255,0.02),transparent_55%)]",
              )}
            />
            <div
              className={clsx(
                "pointer-events-none absolute left-1/2 top-[55%] h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,opacity] duration-300",
                isCoreExpanded ? "opacity-90" : "opacity-100",
                isDark
                  ? "bg-[radial-gradient(ellipse_at_center,rgba(48,213,255,0.12),transparent_68%)]"
                  : "bg-[radial-gradient(ellipse_at_center,rgba(30,167,255,0.08),transparent_68%)]",
              )}
            />

            <div className="absolute left-1/2 top-[55%] z-20 -translate-x-1/2 -translate-y-1/2 orbital-shimmer">
              <OdooCore
                iconName={odooPlatform.iconName}
                isDark={isDark}
                isExpanded={isCoreExpanded}
                onOpen={() => {
                  setActiveNodeId(null);
                  setIsCoreExpanded(true);
                }}
                onClose={() => setIsCoreExpanded(false)}
                onToggle={() => {
                  setActiveNodeId(null);
                  setIsCoreExpanded((current) => !current);
                }}
              />
            </div>

            <div className="pointer-events-none absolute inset-0 z-10">
              {desktopModules.map((item) => (
                <OrbitalNode
                  key={item.module.id}
                  module={item.module}
                  isDark={isDark}
                  isActive={activeNodeId === item.module.id}
                  isSelected={selectedModuleId === item.module.id}
                  onOpen={() => {
                    setIsCoreExpanded(false);
                    setActiveNodeId(item.module.id);
                  }}
                  onClose={() =>
                    setActiveNodeId((current) =>
                      current === item.module.id ? null : current,
                    )
                  }
                  onSelect={openModuleDetails}
                  placement={item.placement}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 md:hidden">
          <OdooCore
            iconName={odooPlatform.iconName}
            isDark={isDark}
            compact
            isExpanded
          />

          {supportingModules.map((module) => (
            <CompactCapabilityCard
              key={module.id}
              module={module}
              isDark={isDark}
              isSelected={selectedModuleId === module.id}
              onSelect={openModuleDetails}
            />
          ))}
        </div>
      </div>

      {selectedModule ? (
        <div
          className="fixed inset-0 z-[90] flex items-end justify-center md:items-center md:px-6"
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close module details"
            className="absolute inset-0 bg-slate-950/55 backdrop-blur-[2px]"
            onClick={closeModuleDetails}
          />

          <div
            ref={detailsPanelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="module-details-title"
            data-orbit-interactive
            className={clsx(
              "relative z-10 w-full max-h-[86vh] overflow-y-auto rounded-t-3xl border px-5 pb-7 pt-5 shadow-[0_18px_55px_rgba(2,12,28,0.28)] md:max-h-[84vh] md:max-w-3xl md:rounded-3xl md:px-8 md:pb-8 md:pt-7",
              isDark
                ? "border-cyan-300/20 bg-[#06131f] text-slate-100"
                : "border-ui bg-ui-page text-ui-heading",
            )}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p
                  className={clsx(
                    "text-[11px] font-semibold uppercase tracking-[0.18em]",
                    isDark ? "text-cyan-200" : "text-cyan-800",
                  )}
                >
                  {capabilityLabels[selectedModule.title] ?? "Capability"}
                </p>
                <h3
                  id="module-details-title"
                  className={clsx(
                    "mt-2 text-2xl font-bold leading-tight",
                    isDark ? "text-white" : "text-slate-900",
                  )}
                >
                  {selectedModule.title}
                </h3>
              </div>

              <button
                ref={closeDetailsButtonRef}
                type="button"
                onClick={closeModuleDetails}
                className={clsx(
                  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60",
                  isDark
                    ? "border-cyan-300/24 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/16"
                    : "border-ui bg-ui-elevated text-ui-heading hover:bg-ui-card",
                )}
                aria-label="Close module details panel"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <ul className="space-y-3">
              {getBenefitPoints(selectedModule.benefit).map((point) => (
                <li
                  key={point}
                  className={clsx(
                    "flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm leading-6",
                    isDark
                      ? "border-cyan-300/16 bg-cyan-300/8 text-slate-200"
                      : "border-ui bg-ui-elevated text-ui-body",
                  )}
                >
                  <span
                    className={clsx(
                      "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                      isDark ? "bg-cyan-300" : "bg-cyan-700",
                    )}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </section>
  );
}
