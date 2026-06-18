"use client";

import { letsTalkButtonClassName } from "@/components/LetsTalkLink";
import { useLetsTalkModal } from "@/components/LetsTalkModalProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const desktopNav = [
  { href: "/#projects", label: "Work" },
  { href: "/#about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isWorkRoute = pathname.startsWith("/work");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopTransparent = isHome && !scrolled;
  const { openModal } = useLetsTalkModal();

  if (isWorkRoute || isHome) {
    return null;
  }

  return (
    <header
      className={`w-full border-b transition-colors duration-300 ${
        isHome ? "max-md:hidden" : "static max-md:border-transparent max-md:bg-transparent"
      } md:fixed md:inset-x-0 md:top-0 md:z-50 ${
        desktopTransparent
          ? "md:border-transparent md:bg-transparent"
          : "md:border-white/10 md:bg-[#0a0a0a]/90 md:backdrop-blur-md"
      }`}
    >
      <div
        className={`flex items-center justify-between px-2 pt-6 max-md:pb-0 md:justify-end md:px-8 md:py-5`}
      >
        <Link
          href="/"
          className="text-sm font-bold tracking-tight text-white transition-opacity hover:opacity-70 md:hidden"
        >
          {site.name}
        </Link>

        <button
          type="button"
          onClick={openModal}
          className={`${letsTalkButtonClassName} md:hidden`}
        >
          Let&apos;s talk
        </button>

        {!isHome && (
          <Link
            href="/"
            className="hidden text-sm font-bold tracking-tight text-white transition-opacity hover:opacity-70 md:inline"
          >
            {site.name}
          </Link>
        )}

        <nav className="hidden gap-8 md:flex">
          {desktopNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70 transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
