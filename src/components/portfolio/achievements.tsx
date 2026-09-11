"use client";

import {
  Award,
  Trophy,
  Zap,
  Mic,
  Globe,
  Cpu,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./reveal";
import { LampContainer } from "@/components/ui/lamp";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { achievements, activities } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const achIcons: Record<string, typeof Award> = {
  award: Award,
  trophy: Trophy,
  zap: Zap,
  mic: Mic,
  globe: Globe,
  cpu: Cpu,
};

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-stone-950 py-20 sm:py-28"
      aria-label="Achievements"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Lamp header, the Linear-style light slit above the section title */}
        <LampContainer className="mb-8 sm:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeInOut" }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400"
          >
            Achievements &amp; Recognition
          </motion.p>
          <motion.h2
            initial={{ opacity: 0.5, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="bg-gradient-to-br from-stone-100 via-stone-300 to-stone-500 bg-clip-text text-center font-serif text-3xl font-semibold tracking-tight text-transparent sm:text-4xl lg:text-[2.75rem]"
          >
            Awards, honors &amp; moments that shaped the journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeInOut" }}
            className="mt-4 max-w-xl text-center text-sm leading-relaxed text-stone-400 sm:text-base"
          >
            From quiz podiums to campus ambassador roles, recognition earned
            through consistency and effort.
          </motion.p>
        </LampContainer>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((ach, i) => {
            const Icon = achIcons[ach.icon] ?? Award;
            return (
              <Reveal key={ach.title} delay={(i % 3) * 0.1} className="h-full">
                <article
                  className={cn(
                    "group h-full rounded-2xl border p-6 transition-all hover:-translate-y-1",
                    ach.highlight
                      ? "border-amber-500/30 bg-gradient-to-b from-amber-500/15 to-white/[0.04] hover:border-amber-400/50"
                      : "border-white/10 bg-white/[0.04] hover:border-amber-500/30"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-105",
                        ach.highlight
                          ? "bg-amber-500 text-stone-950"
                          : "bg-amber-500/15 text-amber-400"
                      )}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-stone-400">
                      {ach.year}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-semibold leading-snug text-stone-100">
                    {ach.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-amber-400/90">
                    {ach.organization}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-400">
                    {ach.detail}
                  </p>
                </article>
              </Reveal>
            );
          })}

          {/* Community engagement card */}
          {activities.map((act) => (
            <Reveal
              key={act.title}
              delay={(achievements.length % 3) * 0.1}
              className="h-full"
            >
              <article className="h-full rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/10 to-white/[0.04] p-6 transition-all hover:-translate-y-1 hover:border-emerald-400/40">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                    <Leaf className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-stone-400">
                    Community
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold leading-snug text-stone-100">
                  {act.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-emerald-400/90">
                  {act.organization}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">
                  {act.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:p-8">
            <p className="max-w-2xl font-serif text-lg italic leading-relaxed text-stone-300 sm:text-xl">
              “Consistency compounds: perfect attendance, first-place quizzes
              and trusted roles all come from showing up, every single time.”
            </p>
            <HoverBorderGradient
              as="a"
              href="#connect"
              containerClassName="shrink-0 rounded-full border-amber-500/40"
              className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-amber-300"
            >
              Work with me
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </HoverBorderGradient>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
