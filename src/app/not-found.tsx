import { ArrowLeft } from "lucide-react";

// The GitHub Pages project site lives under a base path, so the "back home"
// link must include it (inlined at build time by the deploy workflow).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-stone-950 px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
        404 · Off the beaten path
      </p>
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-stone-50 sm:text-5xl">
        This page took a detour
      </h1>
      <p className="max-w-md text-sm leading-relaxed text-stone-400 sm:text-base">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
        Let&apos;s get you back to familiar ground.
      </p>
      <a
        href={`${basePath}/`}
        className="mt-2 inline-flex items-center gap-2.5 rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-stone-100 transition-colors hover:border-amber-400/60 hover:text-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to the portfolio
      </a>
    </main>
  );
}