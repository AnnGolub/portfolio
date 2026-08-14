"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  className?: string;
  style?: React.CSSProperties;
};

export function VideoWithLoader({ src, className, style }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Only assign src when element is actually visible (display:none sections never fire)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSrc(src);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div
      ref={containerRef}
      className={`relative${!loaded ? " min-h-[200px] bg-[#1a1a1a]" : ""}`}
      style={style}
    >
      {activeSrc && !loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/Loader.gif" alt="" className="h-6 w-6" />
        </div>
      )}
      {activeSrc && (
        <video
          src={activeSrc}
          className={`w-full transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"} ${className ?? ""}`}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          onPlaying={() => setLoaded(true)}
        />
      )}
    </div>
  );
}
