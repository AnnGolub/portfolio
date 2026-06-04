import Link from "next/link";
import { contactHref } from "@/data/site";

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
  return (
    <Link href={href} className={className}>
      Let&apos;s talk
    </Link>
  );
}
