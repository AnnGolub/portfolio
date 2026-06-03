import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell tone="base">
      <h1 className="text-3xl font-bold text-white">Page not found</h1>
      <p className="mt-3 text-white/60">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white"
      >
        Back home
      </Link>
    </PageShell>
  );
}
