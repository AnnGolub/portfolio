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
          <object data="/Loader.svg" type="image/svg+xml" className="h-6 w-6 pointer-events-none" aria-hidden="true" />
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
