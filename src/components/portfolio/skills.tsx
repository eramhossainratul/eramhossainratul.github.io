import {
  CalendarCheck,
  Users,
  MessagesSquare,
  HeartHandshake,
  Languages,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { skills } from "@/lib/portfolio-data";

const skillIcons: Record<string, typeof Users> = {
  calendar: CalendarCheck,
  users: Users,
  message: MessagesSquare,
  heart: HeartHandshake,
  languages: Languages,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t bg-background py-20 sm:py-28"
      aria-label="Skills"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="What I bring to the table"
          description="Capabilities sharpened through real responsibilities, from budgets and protocols to coordination and community work."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = skillIcons[skill.icon] ?? Users;
            return (
              <Reveal key={skill.name} delay={i * 0.08} className="h-full">
                <article className="group relative h-full rounded-2xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                  <GlowingEffect
                    spread={36}
                    glow
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1.5}
                  />
                  <div className="relative p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                      {skill.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}

          {/* CTA card */}
          <Reveal delay={skills.length * 0.08} className="h-full">
            <a
              href="#connect"
              className="group flex h-full flex-col justify-between rounded-2xl bg-primary p-6 text-primary-foreground shadow-md transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <div>
                <h3 className="font-serif text-lg font-semibold">
                  Got an initiative that needs a reliable pair of hands?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">
                  I&apos;m always open to new collaborations, events and
                  community projects.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                Let&apos;s talk
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
