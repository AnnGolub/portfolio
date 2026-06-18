import { MobileHeroNav } from "@/components/MobileHeroNav";
import { desktopLetsTalkButtonClassName } from "@/components/LetsTalkLink";
import { site } from "@/data/site";

type HeroProps = {
  onLetsTalkClick?: () => void;
};

export function Hero({ onLetsTalkClick }: HeroProps) {
  return (
    <section className="relative max-lg:min-h-[100dvh] max-lg:overflow-hidden max-lg:!mb-0 max-lg:!mt-0 max-lg:bg-transparent max-lg:!p-0 bg-[#0a0a0a] lg:w-full lg:self-stretch">
      {/* Mobile */}
      <div className="relative h-[100dvh] lg:hidden">
        <MobileHeroNav onLetsTalkClick={onLetsTalkClick} />
        <img
          src="/MainBanner.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
          aria-hidden
        />
        <div className="absolute bottom-2 left-0 right-0 z-10 px-2">
          <h1 className="hero-mobile-name text-center text-[47px] font-medium leading-normal text-white">
            {site.name}
          </h1>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block lg:mt-[72px] lg:w-[1296px]">
        <div className="relative h-[654px] w-full">
          <img
            src="/Main.png"
            alt=""
            className="h-full w-full rounded-none object-cover"
            aria-hidden
          />
          <h1 className="absolute bottom-[-38px] left-0 right-0 text-center text-[180px] font-medium leading-normal text-white">
            {site.name}
          </h1>
        </div>

        <div className="mt-[38px]">
          <p className="mt-[72px] text-center text-lg font-normal leading-6 text-white/60">
            {site.mobileTagline}
          </p>
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={onLetsTalkClick}
              className={desktopLetsTalkButtonClassName}
            >
              Let&apos;s talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
