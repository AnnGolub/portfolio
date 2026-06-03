"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { TypewriterText } from "@/components/TypewriterText";
import { site } from "@/data/site";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      bgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.35}px, 0)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 -top-[10%] h-[120%] w-full will-change-transform"
        style={{
          backgroundImage: "url(/photo.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[100dvh] flex-1 flex-col px-5 pb-10 pt-24 sm:px-8 sm:pb-14 sm:pt-28">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {site.name}
        </h1>

        <TypewriterText
          text={site.tagline}
          speed={50}
          className="mx-auto my-auto max-w-md text-center text-base leading-relaxed text-white/90 sm:max-w-xl sm:text-lg md:text-xl"
        />

        <div className="flex justify-center pb-4 sm:pb-8">
          <Link
            href="#work"
            className="rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            View work
          </Link>
        </div>
      </div>
    </section>
  );
}
