"use client";

import { AnchorLink } from "@/components/AnchorLink";
import { desktopLetsTalkButtonClassName } from "@/components/LetsTalkLink";
import { useLetsTalkModal } from "@/components/LetsTalkModalProvider";

const desktopNav = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
];

export function DesktopHomeHeader() {
  const { openModal } = useLetsTalkModal();

  return (
    <header className="hidden w-full items-center justify-between self-stretch py-6 lg:flex">
      <nav className="flex items-center gap-6">
        {desktopNav.map((item) => (
          <AnchorLink
            key={item.href}
            href={item.href}
            className="cursor-pointer text-lg font-semibold text-white transition-opacity hover:opacity-70"
          >
            {item.label}
          </AnchorLink>
        ))}
      </nav>

      <button
        type="button"
        onClick={openModal}
        className={desktopLetsTalkButtonClassName}
      >
        Let&apos;s talk
      </button>
    </header>
  );
}
