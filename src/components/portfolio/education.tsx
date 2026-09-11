import { GraduationCap, School } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { education } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";

const eduIcons: Record<string, typeof GraduationCap> = {
  college: GraduationCap,
  school: School,
};

export function Education() {
  return (
    <section
      id="education"
      className="border-t bg-secondary/45 py-20 sm:py-28"
      aria-label="Education"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Education"
          title="Grounded in science, growing in service"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, i) => {
            const Icon = eduIcons[edu.icon] ?? GraduationCap;
            return (
              <Reveal key={edu.institution} delay={i * 0.12}>
                <article className="group h-full rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <Badge
                      variant="secondary"
                      className="rounded-full border bg-background"
                    >
                      {edu.period}
                    </Badge>
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                    {edu.institution}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-foreground/80">
                    {edu.degree} · {edu.field}
                  </p>
                  {edu.note && (
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {edu.note}
                    </p>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
