"use client";

import { AnchorLink } from "@/components/AnchorLink";
import { contactHref } from "@/data/site";

const mobileNav = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
];

export function MobileHeroNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-transparent bg-transparent">
      <div className="flex items-center justify-between px-2 pb-0 pt-6">
        <nav className="font-helvetica-neue flex items-center gap-6">
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

        <AnchorLink
          href={contactHref}
          className="font-helvetica-neue rounded-2xl bg-white px-4 py-3 text-[14px] font-bold text-black transition-opacity hover:opacity-90"
        >
          Let&apos;s talk
        </AnchorLink>
      </div>
    </header>
  );
}
