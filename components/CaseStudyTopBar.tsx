"use client";

import {
  desktopLetsTalkButtonClassName,
  letsTalkButtonClassName,
} from "@/components/LetsTalkLink";
import { useLetsTalkModal } from "@/components/LetsTalkModalProvider";
import { useRouter } from "next/navigation";

export function CaseStudyTopBar() {
  const router = useRouter();
  const { openModal } = useLetsTalkModal();

  return (
    <div className="mt-12 flex items-center justify-between lg:mt-0 lg:py-6">
      <button
        type="button"
        onClick={() => router.back()}
        aria-label="Go back"
        className="flex h-8 w-8 min-h-8 min-w-8 items-center justify-center rounded-full bg-[#525252] p-0 transition-opacity hover:opacity-80"
      >
        <img src="/icons/Cross.svg" alt="" className="h-full w-full object-contain" />
      </button>

      <button
        type="button"
        onClick={openModal}
        className={`${letsTalkButtonClassName} lg:hidden`}
      >
        Let&apos;s talk
      </button>
      <button
        type="button"
        onClick={openModal}
        className={`hidden ${desktopLetsTalkButtonClassName} lg:flex`}
      >
        Let&apos;s talk
      </button>
    </div>
  );
}
