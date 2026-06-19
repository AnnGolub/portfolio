"use client";

import Lenis from "@studio-freight/lenis";
import { LENIS_DURATION, LENIS_EASING, setLenis } from "@/lib/lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    let rafId = 0;

    const lenis = new Lenis({
      duration: LENIS_DURATION,
      easing: LENIS_EASING,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.2,
      wheelMultiplier: 0.6,
      infinite: false,
    });

    setLenis(lenis);

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return null;
}
