import clsx from "clsx";

export const sectionSpacing = "py-20 md:py-24";
export const compactSectionSpacing = "py-16 md:py-20";
export const sectionContainer = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
export const sectionEyebrow = "mb-3 text-xs font-semibold uppercase tracking-[0.24em]";
export const sectionTitle = "text-4xl font-bold md:text-5xl";
export const sectionLead = "mx-auto mt-4 max-w-3xl text-base leading-7 md:text-lg";

export function surfaceCard(isDark: boolean, extra?: string) {
  return clsx(
    "rounded-[1.5rem] border",
    isDark
      ? "border-cyan-300/20 bg-orbit-card"
      : "border-ui bg-ui-card shadow-[0_4px_12px_rgba(11,28,49,0.08),0_14px_30px_rgba(11,28,49,0.07)]",
    extra,
  );
}

export function featureCard(isDark: boolean, extra?: string) {
  return clsx(
    "rounded-[2rem] border",
    isDark
      ? "border-cyan-300/24 bg-orbit-card"
      : "border-ui bg-[linear-gradient(180deg,var(--ui-elevated),var(--ui-card))] shadow-[0_8px_20px_rgba(11,28,49,0.08),0_20px_44px_rgba(11,28,49,0.07)]",
    extra,
  );
}

export function pillTag(isDark: boolean, extra?: string) {
  return clsx(
    "rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]",
    isDark
      ? "border-cyan-300/20 bg-cyan-300/8 text-cyan-100"
      : "border-ui bg-ui-elevated text-ui-heading shadow-[0_8px_20px_rgba(11,28,49,0.06)]",
    extra,
  );
}

export function primaryButton(isDark: boolean, extra?: string) {
  return clsx(
    "rounded-xl px-6 py-3.5 text-center text-sm font-semibold text-white transition",
    isDark
      ? "bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-400 hover:shadow-[0_0_32px_rgba(34,211,238,0.38)]"
      : "bg-[linear-gradient(135deg,#0b1c31,#0d4f74)] shadow-[0_14px_30px_rgba(7,42,67,0.26)] hover:bg-[linear-gradient(135deg,#081627,#0a4363)] hover:shadow-[0_18px_38px_rgba(7,42,67,0.34)]",
    extra,
  );
}

export function secondaryButton(isDark: boolean, extra?: string) {
  return clsx(
    "rounded-xl border px-6 py-3.5 text-center text-sm font-semibold transition",
    isDark
      ? "border-cyan-400/55 text-cyan-100 hover:bg-cyan-400/10"
      : "border-ui bg-ui-elevated text-ui-heading hover:border-ui-strong hover:bg-ui-card",
    extra,
  );
}
