"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { getLenis, isMobileViewport, scrollToAnchor } from "@/lib/lenis";

type AnchorLinkProps = ComponentProps<typeof Link>;

function getHashFromHref(href: AnchorLinkProps["href"]): string | null {
  if (typeof href !== "string") return null;
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  return href.slice(hashIndex);
}

export function AnchorLink({
  href,
  onClick,
  ...props
}: AnchorLinkProps) {
  const pathname = usePathname();
  const hash = getHashFromHref(href);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || !hash || pathname !== "/") return;

    if (isMobileViewport() && getLenis()) {
      event.preventDefault();
      scrollToAnchor(hash);
      window.history.pushState(null, "", hash);
    } else if (!isMobileViewport()) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        event.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", hash);
      }
    }
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
