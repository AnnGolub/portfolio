"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerBg =
    isHome && !scrolled && !menuOpen
      ? "border-transparent bg-transparent"
      : "border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${headerBg}`}
    >
      <div
        className={`flex items-center px-5 py-5 sm:px-8 ${isHome ? "justify-end" : "justify-between"}`}
      >
        {!isHome && (
          <Link
            href="/"
            className="text-sm font-bold tracking-tight text-white transition-opacity hover:opacity-70"
          >
            {site.name}
          </Link>
        )}

        <nav className="hidden gap-8 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                pathname === item.href
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="fixed inset-0 top-0 flex flex-col items-center justify-center gap-10 bg-[#0a0a0a] sm:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-2xl font-bold uppercase tracking-wide text-white"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
