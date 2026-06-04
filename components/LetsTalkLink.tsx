"use client";

import { AnchorLink } from "@/components/AnchorLink";
import { contactHref } from "@/data/site";
import { usePathname } from "next/navigation";

export const letsTalkButtonClassName =
  "font-helvetica-neue inline-block rounded-2xl bg-white px-4 py-3 text-[14px] font-bold text-black transition-opacity hover:opacity-90";

type LetsTalkLinkProps = {
  className?: string;
  href?: string;
};

export function LetsTalkLink({
  className = letsTalkButtonClassName,
  href = contactHref,
}: LetsTalkLinkProps) {
  const pathname = usePathname();
  const linkHref =
    href.startsWith("#") && pathname !== "/" ? `/${href}` : href;

  return (
    <AnchorLink href={linkHref} className={className}>
      Let&apos;s talk
    </AnchorLink>
  );
}
