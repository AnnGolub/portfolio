import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-6">
      <h1 className="text-2xl font-medium text-white">Page not found</h1>
      <p className="mt-3 text-sm text-white/60">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm text-white/70 transition-colors hover:text-white"
      >
        Back home
      </Link>
    </div>
  );
}
