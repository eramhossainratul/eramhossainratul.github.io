import { MapPin, HandHeart, School, ArrowUp } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Cover } from "@/components/ui/cover";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { profile } from "@/lib/portfolio-data";

const connectCards = [
  {
    icon: MapPin,
    title: "Location",
    text: "Uttara Model Town, Dhaka, Bangladesh",
  },
  {
    icon: HandHeart,
    title: "Open To",
    text: "Volunteer projects, event organizing and youth leadership initiatives.",
  },
  {
    icon: School,
    title: "Find Me Around",
    text: "Dhaka Commerce College — at Nature Study Club and Rotaract events.",
  },
];

export function Connect() {
  return (
    <section
      id="connect"
      className="border-t bg-background py-20 sm:py-28"
      aria-label="Connect"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Connect"
          title={
            <>
              Let&apos;s build something <Cover variant="light">meaningful</Cover>
            </>
          }
          description="Whether it's a club initiative, a community project or an event that needs a disciplined organizer — I'd be glad to hear about it."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {connectCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1} className="h-full">
              <article className="group relative h-full rounded-2xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                <GlowingEffect
                  spread={36}
                  glow
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1.5}
                />
                <div className="relative p-6 sm:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                    <card.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {card.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-gradient-to-br from-primary to-amber-800 p-7 text-primary-foreground shadow-md sm:flex-row sm:items-center sm:p-9">
            <div>
              <p className="font-serif text-2xl font-semibold leading-snug sm:text-3xl">
                &ldquo;Service above self.&rdquo;
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-primary-foreground/85">
                The Rotaract spirit {profile.firstName} tries to live by — in
                every role, every event and every meeting.
              </p>
            </div>
            <a
              href="#top"
              className="group inline-flex h-11 shrink-0 items-center gap-2.5 rounded-full border border-white/35 px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Back to Top
              <ArrowUp
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
