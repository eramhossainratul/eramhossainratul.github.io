"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative min-h-svh overflow-hidden bg-stone-950"
    >
      {/* Full-bleed portrait — top edge masked to black so the page background
          and the giant name blend into the photo's own dark backdrop.
          On mobile the wrapper is taller (top-aligned) so the subject's head
          sits safely below the giant name, as in the reference design. */}
      <div className="absolute inset-x-0 top-0 z-0 h-[130%] sm:inset-0 sm:h-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_16%)] sm:[mask-image:linear-gradient(to_bottom,transparent_0%,black_13%)]">
        <Image
          src="/hero-portrait.jpg"
          alt="Portrait of Md. Eram Hossain Ratul in a brown plaid blazer, standing under warm spotlight lighting"
          fill
          priority
          sizes="(max-width: 639px) 2048px, 100vw"
          className="object-cover object-center"
        />
      </div>

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

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-7xl flex-col justify-between px-5 pb-8 pt-24 sm:px-8 sm:pb-10 lg:px-12 lg:pt-28">
        {/* Top — giant name (left) + headline (right) */}
        <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <motion.h1
            initial={reduce ? undefined : { opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="select-none font-serif text-[clamp(3.5rem,12vw,10.5rem)] font-black uppercase leading-[0.82] tracking-[-0.02em]"
          >
            <span className="sr-only">Md. Eram Hossain Ratul</span>
            <span
              aria-hidden="true"
              className="bg-[linear-gradient(to_bottom,white_0%,rgba(255,255,255,0.5)_42%,transparent_78%)] bg-clip-text text-transparent"
            >
              Ratul
            </span>
          </motion.h1>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-md lg:pt-3 lg:text-right"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400">
              {profile.roles.join(" · ")}
            </p>
            <p className="mt-3 font-serif text-2xl font-medium leading-snug text-stone-100 sm:text-3xl lg:text-[2.1rem]">
              Leading with order.
              <br />
              Serving with purpose.
            </p>
          </motion.div>
        </div>

        {/* Bottom — bio (left) + CTA (right) */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between sm:gap-12"
        >
          <div className="max-w-md">
            <p className="text-sm leading-relaxed text-stone-300 sm:text-[15px]">
              A student leader and social activist from Dhaka — currently
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

          <a
            href="#experience"
            className="group inline-flex h-12 shrink-0 items-center gap-3 self-start rounded-full border border-white/25 bg-stone-950/40 px-7 text-xs font-semibold uppercase tracking-[0.16em] text-stone-100 backdrop-blur-sm transition-all hover:border-stone-100 hover:bg-stone-100 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 sm:self-auto"
          >
            View My Journey
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
