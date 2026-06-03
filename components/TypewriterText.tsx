"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  text: string;
  speed?: number;
  className?: string;
};

const POST_COMPLETE_BLINKS = 4;
const BLINK_INTERVAL_MS = 500;

export function TypewriterText({
  text,
  speed = 50,
  className = "",
}: TypewriterTextProps) {
  const [charIndex, setCharIndex] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const isComplete = charIndex >= text.length;

  useEffect(() => {
    if (isComplete) return;

    const timer = window.setTimeout(() => {
      setCharIndex((index) => index + 1);
    }, speed);

    return () => window.clearTimeout(timer);
  }, [charIndex, isComplete, speed]);

  useEffect(() => {
    if (!isComplete) return;

    let ticks = 0;
    const maxTicks = POST_COMPLETE_BLINKS * 2;

    const timer = window.setInterval(() => {
      ticks += 1;
      setCursorOn((on) => !on);

      if (ticks >= maxTicks) {
        window.clearInterval(timer);
        setShowCursor(false);
      }
    }, BLINK_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isComplete]);

  return (
    <p className={className} aria-live="polite">
      <span>{text.slice(0, charIndex)}</span>
      {showCursor && (
        <span
          className={`ml-0.5 inline-block h-[1em] w-0.5 translate-y-px align-middle bg-current ${
            isComplete ? "" : "animate-cursor-blink"
          }`}
          style={isComplete ? { opacity: cursorOn ? 1 : 0 } : undefined}
          aria-hidden
        />
      )}
      <span className="sr-only">{text}</span>
    </p>
  );
}
