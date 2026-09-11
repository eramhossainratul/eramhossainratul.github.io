"use client";

import { type CSSProperties, type MouseEvent } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Cover } from "@/components/ui/cover";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { profile } from "@/lib/portfolio-data";

// next/image does not prefix string sources with the GitHub Pages basePath in
// static export (unlike bundled _next assets), so the public-path src must be
// prefixed explicitly. NEXT_PUBLIC_BASE_PATH is inlined at build time (set by
// the deploy workflow); locally it is empty and the asset is served from root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Floating dust motes drifting through the spotlight beam. Positions are
// percentages of the spotlight container; each mote rises and fades on its
// own CSS timeline (see hero-dust keyframes in globals.css).
const dustMotes = [
  { left: "36%", top: "62%", size: 3, delay: 0, dur: 11, peak: 0.5 },
  { left: "44%", top: "72%", size: 2, delay: 2.2, dur: 14, peak: 0.4 },
  { left: "52%", top: "64%", size: 2.5, delay: 4.1, dur: 12, peak: 0.55 },
  { left: "58%", top: "58%", size: 2, delay: 1.3, dur: 15, peak: 0.35 },
  { left: "63%", top: "68%", size: 3, delay: 5.6, dur: 13, peak: 0.45 },
  { left: "33%", top: "52%", size: 2, delay: 6.8, dur: 16, peak: 0.3 },
  { left: "48%", top: "50%", size: 2, delay: 3.4, dur: 17, peak: 0.35 },
  { left: "56%", top: "46%", size: 1.5, delay: 7.9, dur: 14, peak: 0.3 },
];

export function Hero() {
  const reduce = useReducedMotion();

  // Pointer parallax, each visual layer sits at a different "depth" and
  // drifts at its own rate, creating a subtle 3D diorama effect. Background
  // layers move against the pointer; foreground type moves with it.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 55, damping: 16, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 55, damping: 16, mass: 0.6 });

  const portraitX = useTransform(springX, (v) => v * -10);
  const portraitY = useTransform(springY, (v) => v * -6);
  const spotlightX = useTransform(springX, (v) => v * -18);
  const spotlightY = useTransform(springY, (v) => v * -10);
  const nameX = useTransform(springX, (v) => v * 14);
  const nameY = useTransform(springY, (v) => v * 8);
  const headlineX = useTransform(springX, (v) => v * 7);
  const headlineY = useTransform(springY, (v) => v * 4);

  const handlePointerMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    pointerY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="top"
      aria-label="Introduction"
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
      className="relative min-h-svh overflow-hidden bg-stone-950"
    >
      {/* Full-bleed portrait, top edge masked to black so the page background
          and the giant name blend into the photo's own dark backdrop.
          Slightly over-scaled so the pointer-parallax never reveals gaps.
          Below lg the portrait starts below the navbar + giant name block so
          the subject's head keeps clear breathing room on stacked layouts. */}
      <motion.div
        style={{ x: portraitX, y: portraitY, scale: 1.04 }}
        className="absolute inset-x-0 top-32 z-0 h-[130%] sm:h-full lg:top-0 [mask-image:linear-gradient(to_bottom,transparent_0%,black_16%)] sm:[mask-image:linear-gradient(to_bottom,transparent_0%,black_13%)]"
      >
        <Image
          src={`${basePath}/hero-portrait.jpg`}
          alt="Portrait of Md. Eram Hossain Ratul in a brown plaid blazer, standing under warm spotlight lighting"
          fill
          priority
          sizes="(max-width: 639px) 2048px, 100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Theatrical spotlight effects, breathing amber glow, rotating halo
          rings and drifting dust motes around the centered portrait. Parallax
          moves with the portrait (it belongs to the scene, not the page). */}
      <motion.div
        aria-hidden="true"
        style={{ x: spotlightX, y: spotlightY }}
        className="pointer-events-none absolute left-1/2 top-[54%] z-[1]"
      >
        <div className="relative h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 sm:h-[56rem] sm:w-[56rem]">
          {/* Breathing amber glow */}
          <div className="hero-glow absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.14)_0%,rgba(180,120,50,0.07)_38%,transparent_68%)]" />
          {/* Rotating halo rings */}
          <div
            className="hero-ring absolute inset-[6%]"
            style={{ "--spin": "28s" } as CSSProperties}
          />
          <div
            className="hero-ring hero-ring--reverse absolute inset-[14%]"
            style={{ "--spin": "44s" } as CSSProperties}
          />
          {/* Dust motes rising through the beam */}
          {dustMotes.map((mote, i) => (
            <span
              key={i}
              className="hero-dust absolute rounded-full bg-amber-200"
              style={
                {
                  left: mote.left,
                  top: mote.top,
                  width: mote.size,
                  height: mote.size,
                  "--peak": mote.peak,
                  "--delay": `${mote.delay}s`,
                  "--dur": `${mote.dur}s`,
                } as CSSProperties
              }
            />
          ))}
        </div>
      </motion.div>

      {/* Cinematic vignette, darkened edges pull focus to the person */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_48%,rgba(10,8,4,0.5)_100%)]"
      />

      {/* Readability gradients */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[1] h-[42%] bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 z-[1] w-44 bg-gradient-to-r from-stone-950/75 to-transparent sm:w-56"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 z-[1] w-32 bg-gradient-to-l from-stone-950/60 to-transparent sm:w-48"
      />

      {/* Right-edge accent line */}
      <div
        aria-hidden="true"
        className="absolute right-6 top-1/2 z-[1] hidden h-24 w-px -translate-y-1/2 bg-white/15 lg:block"
      />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-7xl flex-col justify-between px-5 pb-8 pt-28 sm:px-8 sm:pb-10 lg:px-12 lg:pt-32">
        {/* Top: giant name (left) + headline (right) */}
        <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Parallax wrapper (depth layer), entrance animation lives on the
              inner motion.h1 to avoid MotionValue/animate conflicts on y. */}
          <motion.div style={{ x: nameX, y: nameY }} className="will-change-transform">
            <motion.h1
              initial={reduce ? undefined : { opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="select-none font-serif text-[clamp(3.5rem,min(12vw,17svh),10.5rem)] font-black uppercase leading-[0.82] tracking-[-0.02em]"
            >
              <span className="sr-only">Md. Eram Hossain Ratul</span>
              <span
                aria-hidden="true"
                className="bg-[linear-gradient(to_bottom,white_0%,rgba(255,255,255,0.5)_42%,transparent_78%)] bg-clip-text text-transparent"
              >
                Eram
              </span>
            </motion.h1>
          </motion.div>

          <motion.div style={{ x: headlineX, y: headlineY }} className="will-change-transform">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="max-w-md lg:pt-3 lg:text-right"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400">
                {/* Phones show the primary role only so the hero stays airy */}
                <span className="sm:hidden">{profile.roles[0]}</span>
                <span className="hidden sm:inline">
                  {profile.roles.join(" · ")}
                </span>
              </p>
              <p className="mt-3 font-serif text-2xl font-medium leading-snug text-stone-100 sm:text-3xl lg:text-[2.1rem]">
                Leading with order.
                <br />
                Serving with <Cover>purpose</Cover>.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom: bio (left) + CTA (right) */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between sm:gap-12"
        >
          <div className="max-w-md">
            {/* Short tagline on phones; the full bio would fill the screen */}
            <p className="text-sm leading-relaxed text-stone-300 sm:hidden">
              {profile.tagline}
            </p>
            <p className="hidden text-sm leading-relaxed text-stone-300 sm:block sm:text-[15px]">
              A student leader and social activist from Dhaka, currently
              serving as <strong className="font-semibold text-stone-100">General Secretary (Acting)</strong> of
              the Dhaka Commerce College Nature Study Club,{" "}
              <strong className="font-semibold text-stone-100">Chief Sergeant-at-Arms</strong> of
              the Rotaract Club of Dhaka Commerce College, and a{" "}
              <strong className="font-semibold text-stone-100">Cadet Lance Corporal</strong> with
              the Bangladesh National Cadet Corps.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-400">
              <MapPin className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
              {profile.location}
            </p>
          </div>

          <HoverBorderGradient
            as="a"
            href="#experience"
            containerClassName="shrink-0 self-start rounded-full border-white/25 sm:self-auto"
            className="flex items-center gap-3 px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-stone-100"
          >
            View My Journey
            <ArrowRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </HoverBorderGradient>
        </motion.div>
      </div>
    </section>
  );
}
