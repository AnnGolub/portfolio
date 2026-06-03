"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { TypewriterText } from "@/components/TypewriterText";
import { site } from "@/data/site";

export function Hero() {
  const bgRef = useRef<HTMLImageElement>(null);

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
    <section className="relative min-h-[100dvh] overflow-hidden">
      <img
        ref={bgRef}
        src="/photo.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[50%_15%] will-change-transform md:object-[50%_20%]"
        aria-hidden
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.85)]"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[100dvh] flex-col justify-end px-5 pb-28 pt-24 sm:px-8 sm:pb-32">
        <TypewriterText
          text={site.tagline}
          speed={50}
          className="mb-4 max-w-md text-left text-lg leading-relaxed text-white"
        />
        <h1 className="text-5xl font-bold tracking-tight text-white md:text-8xl">
          {site.name}
        </h1>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center px-5 sm:bottom-8">
        <Link
          href="#work"
          className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
        >
          View work
        </Link>
      </div>
    </section>
  );
}
