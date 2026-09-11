import { MapPin, GraduationCap, Shield, Leaf } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { profile } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";

const facts = [
  {
    icon: MapPin,
    label: "Based in",
    value: "Uttara Model Town, Dhaka, Bangladesh",
  },
  {
    icon: GraduationCap,
    label: "Studying",
    value: "Higher Secondary (Science) · Dhaka Commerce College",
  },
  {
    icon: Shield,
    label: "Service",
    value: "Cadet Lance Corporal · Bangladesh National Cadet Corps",
  },
  {
    icon: Leaf,
    label: "Passion",
    value: "Environmental awareness & youth development",
  },
];

const traits = ["Discipline", "Teamwork", "Transparency", "Service"];

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28" aria-label="About">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Discipline in detail, purpose in action"
        />

        {/* Impact stats */}
        <Reveal className="mb-12">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-8 border-y py-8 sm:grid-cols-4 sm:py-9">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="sm:pl-4">
                <dd className="font-serif text-4xl font-semibold text-primary sm:text-[2.6rem]">
                  {stat.value}
                </dd>
                <dt className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal>
            <div className="space-y-5">
              {profile.about.map((paragraph, i) => (
                <TextGenerateEffect
                  key={i}
                  words={paragraph}
                  staggerDelay={0.05}
                  duration={0.4}
                  className="text-base leading-relaxed text-muted-foreground sm:text-lg"
                />
              ))}
              <PointerHighlight
                containerClassName="w-full"
                rectangleClassName="rounded-xl border-primary/40"
              >
                <p className="font-serif text-lg italic leading-relaxed text-foreground/90 sm:text-xl">
                  “From managing a club's treasury to keeping order in its
                  meetings — I've learned that real leadership lives in the
                  details people can rely on.”
                </p>
              </PointerHighlight>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-7">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Quick Facts
              </h3>
              <ul className="mt-5 space-y-5">
                {facts.map((fact) => (
                  <li key={fact.label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <fact.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {fact.label}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium leading-snug text-foreground">
                        {fact.value}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t pt-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Values I work by
                </p>
                <div className="flex flex-wrap gap-2">
                  {traits.map((trait) => (
                    <Badge
                      key={trait}
                      variant="secondary"
                      className="rounded-full font-normal"
                    >
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
