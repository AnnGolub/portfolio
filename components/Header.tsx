import Link from "next/link";
import { site } from "@/data/site";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-6 sm:px-6">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-white transition-opacity hover:opacity-70"
        >
          {site.name}
        </Link>
        <nav className="flex gap-6 sm:gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
