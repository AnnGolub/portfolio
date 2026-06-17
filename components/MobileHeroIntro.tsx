import { LetsTalkLink } from "@/components/LetsTalkLink";
import { site } from "@/data/site";

type MobileHeroIntroProps = {
  onLetsTalkClick?: () => void;
};

export function MobileHeroIntro({ onLetsTalkClick }: MobileHeroIntroProps) {
  return (
    <div className="max-md:!m-0 max-md:!p-0 md:hidden">
      <p className="max-md:!mb-0 max-md:!mt-12 px-2 text-center text-[18px] font-normal leading-6 text-white/60">
        {site.mobileTagline}
      </p>
      <div className="flex max-md:!mb-0 max-md:!mt-6 justify-center">
        <LetsTalkLink onClick={onLetsTalkClick} />
      </div>
    </div>
  );
}
