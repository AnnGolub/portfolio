import type Lenis from "@studio-freight/lenis";

export const LENIS_EASING = (t: number) =>
  Math.min(1, 1.001 - Math.pow(2, -10 * t));

export const LENIS_DURATION = 4.0;
export const LENIS_ANCHOR_DURATION = 2;

const MOBILE_MEDIA_QUERY = "(max-width: 767px)";

let lenisInstance: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

export function getLenis() {
  return lenisInstance;
}

export function isMobileViewport() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(MOBILE_MEDIA_QUERY).matches;
}

export function scrollToAnchor(target: string) {
  const lenis = getLenis();
  if (!lenis) return false;

  lenis.scrollTo(target, {
    duration: LENIS_ANCHOR_DURATION,
    easing: LENIS_EASING,
  });

  return true;
}
