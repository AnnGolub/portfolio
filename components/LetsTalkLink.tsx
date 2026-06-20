"use client";

export const letsTalkButtonClassName =
  "flex cursor-pointer items-center justify-center gap-[10px] rounded-xl border-none bg-white px-[14px] py-[10px] text-center text-[14px] font-bold leading-normal text-[#212121] transition-opacity hover:opacity-90";

export const mobileHeroLetsTalkButtonClassName =
  "inline-flex cursor-pointer items-center justify-center gap-[10px] rounded-xl border-none bg-white px-4 py-3 text-center text-[16px] font-bold leading-6 text-[#212121] transition-opacity hover:opacity-90";

export const desktopLetsTalkButtonClassName =
  "flex cursor-pointer items-center justify-center gap-[10px] rounded-xl border-none bg-white px-6 py-4 text-center text-[18px] font-bold leading-6 text-[#212121] transition-opacity hover:opacity-90";

type LetsTalkLinkProps = {
  className?: string;
  onClick?: () => void;
};

export function LetsTalkLink({
  className = letsTalkButtonClassName,
  onClick,
}: LetsTalkLinkProps) {
  return (
    <button type="button" onClick={onClick} className={className}>
      Let&apos;s talk
    </button>
  );
}
