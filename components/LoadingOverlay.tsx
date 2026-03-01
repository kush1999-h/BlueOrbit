"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LogoSVG } from "@/components/LogoSVG";

function getInternalPath(anchor: HTMLAnchorElement): string | null {
  const href = anchor.getAttribute("href");
  if (!href) return null;
  if (href.startsWith("#")) return null;
  if (anchor.target && anchor.target !== "_self") return null;
  if (anchor.hasAttribute("download")) return null;

  try {
    const url = new URL(anchor.href, window.location.href);
    if (url.origin !== window.location.origin) return null;
    const targetPath = `${url.pathname}${url.search}${url.hash}`;
    const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    if (targetPath === currentPath) return null;
    return targetPath;
  } catch {
    return null;
  }
}

const INITIAL_MS = 550;
const PRE_NAV_MS = 500;
const POST_NAV_MS = 180;

export function LoadingOverlay() {
  const router = useRouter();
  const pathname = usePathname();

  const [active, setActive] = useState(true);
  const pendingPathRef = useRef<string | null>(null);
  const navTimerRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setActive(false), INITIAL_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const clearTimers = () => {
      if (navTimerRef.current) {
        window.clearTimeout(navTimerRef.current);
        navTimerRef.current = null;
      }
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    };

    const handleClickCapture = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const targetPath = getInternalPath(anchor);
      if (!targetPath) return;

      event.preventDefault();
      clearTimers();

      pendingPathRef.current = targetPath;
      setActive(true);

      navTimerRef.current = window.setTimeout(() => {
        router.push(targetPath);
      }, PRE_NAV_MS);
    };

    const handlePopState = () => {
      clearTimers();
      pendingPathRef.current = null;
      setActive(true);
    };

    document.addEventListener("click", handleClickCapture, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleClickCapture, true);
      window.removeEventListener("popstate", handlePopState);
      clearTimers();
    };
  }, [router]);

  useEffect(() => {
    if (!active) return;

    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }

    hideTimerRef.current = window.setTimeout(() => {
      pendingPathRef.current = null;
      setActive(false);
      hideTimerRef.current = null;
    }, POST_NAV_MS);
  }, [pathname, active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-black">
      <div className="animate-pulse">
        <LogoSVG className="h-20 drop-shadow-[0_0_30px_rgba(0,199,255,0.55)] md:h-24" />
      </div>
    </div>
  );
}

