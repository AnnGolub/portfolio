import { LetsTalkLink, mobileHeroLetsTalkButtonClassName } from "@/components/LetsTalkLink";
import { site } from "@/data/site";

type MobileHeroIntroProps = {
  onLetsTalkClick?: () => void;
};

export function MobileHeroIntro({ onLetsTalkClick }: MobileHeroIntroProps) {
  return (
    <div className="max-lg:!m-0 max-lg:!p-0 lg:hidden">
      <p className="max-lg:!mb-0 max-lg:!mt-12 px-2 text-center text-[18px] font-normal leading-6 text-white/60 whitespace-pre-line">
        {site.mobileTagline}
      </p>
      <div className="flex max-lg:!mb-0 max-lg:!mt-6 justify-center">
        <LetsTalkLink onClick={onLetsTalkClick} className={mobileHeroLetsTalkButtonClassName} />
      </div>
    </div>
  );
}
