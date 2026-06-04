"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const MOBILE_MEDIA_QUERY = "(max-width: 767px)";

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function SmoothScroll() {
  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    let lenis: Lenis | null = null;
    let rafId = 0;

    const start = () => {
      if (!mediaQuery.matches || lenis) return;

      lenis = new Lenis({
        duration: 1.8,
        easing: easeInOutCubic,
        smoothWheel: true,
        syncTouch: true,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    };

    const stop = () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      lenis = null;
    };

    const onMediaChange = () => {
      if (mediaQuery.matches) {
        start();
      } else {
        stop();
      }
    };

    onMediaChange();
    mediaQuery.addEventListener("change", onMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", onMediaChange);
      stop();
    };
  }, []);

  return null;
}
