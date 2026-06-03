import Link from "next/link";
import { TypewriterText } from "@/components/TypewriterText";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#0a0a0a]">
      <img
        src="/photo.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[50%_15%] md:origin-[50%_10%] md:scale-[0.8] md:object-[50%_10%]"
        aria-hidden
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.65)]"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-1 flex-col justify-end pb-16 pl-8 md:pl-16">
          <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            {site.name}
          </h1>
          <TypewriterText
            text={site.tagline}
            speed={50}
            className="mt-3 max-w-md text-left text-base leading-relaxed text-white/70 md:text-lg"
          />
        </div>

        <div className="mb-10 flex justify-center">
          <Link
            href="#work"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            View work
          </Link>
        </div>
      </div>
    </section>
  );
}
