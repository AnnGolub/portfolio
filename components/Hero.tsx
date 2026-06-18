import Link from "next/link";
import { MobileHeroNav } from "@/components/MobileHeroNav";
import { TypewriterText } from "@/components/TypewriterText";
import { site } from "@/data/site";

type HeroProps = {
  onLetsTalkClick?: () => void;
};

export function Hero({ onLetsTalkClick }: HeroProps) {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden max-md:!mb-0 max-md:!mt-0 max-md:bg-transparent max-md:!p-0 bg-[#0a0a0a] md:h-screen">
      {/* Mobile */}
      <div className="relative h-[100dvh] md:hidden">
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
      <div className="hidden h-full md:grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16">
          <h1 className="text-6xl font-black tracking-tight text-white lg:text-8xl">
            {site.name}
          </h1>
          <TypewriterText
            text={site.tagline}
            speed={50}
            className="mt-4 max-w-md text-left text-lg leading-relaxed text-white/70"
          />
          <Link
            href="#projects"
            className="mt-8 inline-flex w-fit rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            View work
          </Link>
        </div>

        <div className="flex items-center justify-end px-8 lg:px-16">
          <img
            src="/photo.jpg"
            alt="Anna Golubeva"
            width={400}
            height={500}
            className="h-[500px] max-h-[85vh] w-auto max-w-full rounded-2xl object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
