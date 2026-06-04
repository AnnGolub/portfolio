"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactHref, site } from "@/data/site";

const desktopNav = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
];

const mobileNav = [
  { href: "/#work", label: "Projects" },
  { href: "/#about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopTransparent = isHome && !scrolled;

  return (
    <header
      className={`static w-full border-b transition-colors duration-300 max-md:border-transparent max-md:bg-transparent md:fixed md:inset-x-0 md:top-0 md:z-50 ${
        desktopTransparent
          ? "md:border-transparent md:bg-transparent"
          : "md:border-white/10 md:bg-[#0a0a0a]/90 md:backdrop-blur-md"
      }`}
    >
      <div
        className={`flex items-center px-2 pt-6 max-md:pb-0 md:px-8 md:py-5 ${
          isHome ? "justify-between md:justify-end" : "justify-between"
        }`}
      >
        {isHome ? (
          <nav className="font-helvetica-neue flex items-center gap-6 md:hidden">
            {mobileNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] font-bold text-white transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : (
          <Link
            href="/"
            className="text-sm font-bold tracking-tight text-white transition-opacity hover:opacity-70 md:hidden"
          >
            {site.name}
          </Link>
        )}

        <Link
          href={isHome ? contactHref : `/${contactHref}`}
          className="font-helvetica-neue rounded-2xl bg-white px-4 py-3 text-[14px] font-bold text-black transition-opacity hover:opacity-90 md:hidden"
        >
          Let&apos;s talk
        </Link>

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
