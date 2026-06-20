"use client";

import { AnchorLink } from "@/components/AnchorLink";
import { letsTalkButtonClassName } from "@/components/LetsTalkLink";

const mobileNav = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About me" },
];

type MobileHeroNavProps = {
  onLetsTalkClick?: () => void;
};

export function MobileHeroNav({ onLetsTalkClick }: MobileHeroNavProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-transparent bg-transparent">
      <div className="flex items-center justify-between px-2 pb-0 pt-6">
        <nav className="flex items-center gap-6">
          {mobileNav.map((item) => (
            <AnchorLink
              key={item.href}
              href={item.href}
              className="text-[14px] font-bold text-white transition-opacity hover:opacity-60"
            >
              {item.label}
            </AnchorLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={onLetsTalkClick}
          className={letsTalkButtonClassName}
        >
          Let&apos;s talk
        </button>
      </div>
    </header>
  );
}
