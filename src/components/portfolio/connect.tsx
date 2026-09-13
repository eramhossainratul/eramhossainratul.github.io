import {
  MapPin,
  HandHeart,
  School,
  ArrowUp,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  type LucideIcon,
} from "lucide-react";
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
    text: "Dhaka Commerce College, at Nature Study Club and Rotaract events.",
  },
];

const socialIcons: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  Facebook,
  Instagram,
};

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
          description="Whether it's a club initiative, a community project or an event that needs a disciplined organizer, I'd be glad to hear about it."
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

        {/* Contact strip: email CTA + social profiles */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl border bg-card p-7 text-center shadow-sm sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Get in touch
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex h-11 items-center gap-3 rounded-full bg-primary px-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              aria-label={`Email ${profile.name}`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {profile.email}
            </a>
            <div className="flex items-center gap-3">
              {profile.socials.map((social) => {
                const Icon = socialIcons[social.name];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {Icon ? <Icon className="h-4.5 w-4.5" aria-hidden="true" /> : null}
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              Prefer email? Reach me directly at{" "}
              <a
                href={`mailto:${profile.email}`}
                className="font-medium text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary"
              >
                {profile.email}
              </a>
              , or connect through the social links above.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-gradient-to-br from-primary to-amber-800 p-7 text-primary-foreground shadow-md sm:flex-row sm:items-center sm:p-9">
            <div>
              <p className="font-serif text-2xl font-semibold leading-snug sm:text-3xl">
                &ldquo;Service above self.&rdquo;
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-primary-foreground/85">
                The Rotaract spirit {profile.firstName} tries to live by, in
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
