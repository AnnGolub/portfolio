"use client";

import Lenis from "@studio-freight/lenis";
import { LENIS_DURATION, LENIS_EASING, setLenis } from "@/lib/lenis";
import { useEffect } from "react";

const MOBILE_MEDIA_QUERY = "(max-width: 767px)";

export function SmoothScroll() {
  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    let lenis: Lenis | null = null;
    let rafId = 0;

    const start = () => {
      if (!mediaQuery.matches || lenis) return;

      lenis = new Lenis({
        duration: LENIS_DURATION,
        easing: LENIS_EASING,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 2.0,
        infinite: false,
      });

      setLenis(lenis);

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    };

    const stop = () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      setLenis(null);
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
