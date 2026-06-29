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
      className="relative"
      style={{ ...style, minHeight: loaded ? undefined : 200 }}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            src="/Loader.mp4"
            className="h-8 w-8"
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
        onCanPlay={() => setLoaded(true)}
      />
    </div>
  );
}
