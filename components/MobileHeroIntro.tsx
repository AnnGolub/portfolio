import { LetsTalkLink, letsTalkButtonClassName } from "@/components/LetsTalkLink";
import { site } from "@/data/site";

export function MobileHeroIntro() {
  return (
    <div className="md:hidden">
      <p className="font-helvetica-neue mt-12 px-2 text-[18px] font-normal leading-6 text-white/60">
        {site.mobileTagline}
      </p>
      <LetsTalkLink className={`${letsTalkButtonClassName} mt-6`} />
    </div>
  );
}
