"use client";

import { letsTalkButtonClassName } from "@/components/LetsTalkLink";
import { useLetsTalkModal } from "@/components/LetsTalkModalProvider";
import { useRouter } from "next/navigation";

export function CaseStudyTopBar() {
  const router = useRouter();
  const { openModal } = useLetsTalkModal();

  return (
    <div className="mt-12 flex items-center justify-between">
      <button
        type="button"
        onClick={() => router.back()}
        aria-label="Go back"
        className="flex h-8 w-8 min-h-8 min-w-8 items-center justify-center rounded-full bg-[#525252] p-0 transition-opacity hover:opacity-80"
      >
        <img src="/icons/Close.svg" width={16} height={16} alt="" />
      </button>

      <button
        type="button"
        onClick={openModal}
        className={letsTalkButtonClassName}
      >
        Let&apos;s talk
      </button>
    </div>
  );
}
