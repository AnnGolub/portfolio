"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
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

          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70 transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 flex h-screen w-full flex-col bg-[#0a0a0a] transition-transform duration-[400ms] ease-in-out md:hidden ${
          menuOpen
            ? "translate-y-0"
            : "pointer-events-none -translate-y-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center text-white transition-opacity duration-200 hover:opacity-60"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          <span className="sr-only">Close</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <nav className="flex flex-1 flex-col items-center justify-center gap-12">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-5xl font-bold text-white transition-opacity duration-200 hover:opacity-60"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
