"use client";

import { useState } from "react";

type Props = {
  src: string;
  className?: string;
  style?: React.CSSProperties;
};

export function VideoWithLoader({ src, className, style }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative${!loaded ? " min-h-[200px] bg-[#1a1a1a]" : ""}`}
      style={style}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* CSS spinner — shows instantly, no network */}
          <div className="absolute h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white/80" />
          {/* Loader.mp4 overlays the spinner once it loads */}
          <video
            src="/Loader.mp4"
            className="relative h-6 w-6"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      )}
      <video
        src={src}
        className={`w-full transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"} ${className ?? ""}`}
        autoPlay
        muted
        loop
        playsInline
        onPlaying={() => setLoaded(true)}
      />
    </div>
  );
}
