"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLenis, isMobileViewport, scrollToAnchor } from "@/lib/lenis";

const LEGACY_HASH_MAP: Record<string, string> = {
  work: "projects",
};

function resolveHash(rawHash: string) {
  const normalized = LEGACY_HASH_MAP[rawHash] ?? rawHash;
  return normalized ? `#${normalized}` : "";
}

export function HashScrollOnLoad() {
  const pathname = usePathname();

  useEffect(() => {
    // Prevent browser from restoring scroll position on reload
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const scrollToHash = () => {
      const rawHash = window.location.hash.replace("#", "");
      if (!rawHash) {
        window.scrollTo(0, 0);
        // Lenis keeps its own virtual scroll offset — reset it too,
        // otherwise a route change lands mid-page on mobile.
        getLenis()?.scrollTo(0, { immediate: true });
        return;
      }

      const target = resolveHash(rawHash);
      const id = target.replace("#", "");

      if (isMobileViewport() && getLenis()) {
        if (window.location.hash !== target) {
          window.history.replaceState(null, "", target);
        }
        scrollToAnchor(target);
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
    // Re-run on every route change, not just first mount
  }, [pathname]);

  return null;
}
