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
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[26rem] w-[36rem] -translate-x-1/2 rounded-full bg-amber-600/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Achievements & Recognition"
          title="Awards, honors & moments that shaped the journey"
          description="From quiz podiums to campus ambassador roles — recognition earned through consistency and effort."
        />

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
              “Consistency compounds — perfect attendance, first-place quizzes
              and trusted roles all come from showing up, every single time.”
            </p>
            <a
              href="#connect"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-amber-500/40 px-5 py-2.5 text-sm font-semibold text-amber-300 transition-colors hover:bg-amber-500/10"
            >
              Work with me
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
