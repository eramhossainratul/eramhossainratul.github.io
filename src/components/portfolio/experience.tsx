"use client";

import { useState } from "react";
import { Cog, Leaf, Shield } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { experience } from "@/lib/portfolio-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const orgIcons: Record<string, typeof Cog> = {
  rotaract: Cog,
  nature: Leaf,
  cadet: Shield,
};

const shortNames: Record<string, string> = {
  rotaract: "Rotaract Club",
  nature: "Nature Study Club",
  cadet: "BNCC",
};

export function Experience() {
  const [activeTab, setActiveTab] = useState(experience[0].organization);

  return (
    <section
      id="experience"
      className="border-t bg-background py-20 sm:py-28"
      aria-label="Experience"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="A steady climb through club leadership"
          description="Seven roles across three organizations — every position built on the one before it, from first volunteer shift to acting general secretary."
        />

        <Reveal>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-8 flex h-auto w-full flex-wrap justify-start gap-1 rounded-2xl bg-muted p-1.5 sm:inline-flex sm:w-auto">
              {experience.map((org) => (
                <TabsTrigger
                  key={org.organization}
                  value={org.organization}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium data-[state=active]:shadow-sm sm:px-5"
                >
                  {shortNames[org.icon]}
                </TabsTrigger>
              ))}
            </TabsList>

            {experience.map((org) => {
              const OrgIcon = orgIcons[org.icon] ?? Cog;
              return (
                <TabsContent
                  key={org.organization}
                  value={org.organization}
                  className="mt-0 focus-visible:outline-none"
                >
                  {/* Organization header */}
                  <div className="mb-10 flex flex-col gap-5 rounded-2xl border bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-7">
                    <div className="flex items-center gap-4 sm:gap-5">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <OrgIcon className="h-7 w-7" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-serif text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                          {org.organization}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {org.type}
                        </p>
                      </div>
                    </div>
                    <div className="sm:text-right">
                      <Badge
                        variant="secondary"
                        className="rounded-full border bg-secondary px-3 py-1 text-xs font-medium"
                      >
                        {org.totalPeriod}
                      </Badge>
                    </div>
                  </div>

                  {/* Roles timeline */}
                  <div className="relative space-y-8 before:absolute before:bottom-3 before:left-[7px] before:top-3 before:w-px before:bg-border">
                    {org.roles.map((role) => (
                      <article
                        key={role.title}
                        className="relative pl-10 sm:pl-12"
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            "absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-[3px]",
                            role.current
                              ? "border-primary bg-primary/25 shadow-[0_0_0_4px_rgba(180,83,9,0.15)]"
                              : "border-muted-foreground/40 bg-background"
                          )}
                        />
                        <div className="rounded-2xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <h4 className="font-serif text-lg font-semibold text-foreground">
                              {role.title}
                            </h4>
                            <div className="flex flex-wrap items-center gap-2">
                              {role.current && (
                                <Badge className="rounded-full bg-primary text-primary-foreground">
                                  Current
                                </Badge>
                              )}
                              <span className="text-xs font-medium text-muted-foreground">
                                {role.period} · {role.duration}
                              </span>
                            </div>
                          </div>

                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {role.summary}
                          </p>

                          {role.contributions.length > 0 && (
                            <Accordion
                              type="single"
                              collapsible
                              className="mt-4 border-t pt-1"
                            >
                              <AccordionItem
                                value={role.title}
                                className="border-none"
                              >
                                <AccordionTrigger
                                  className="py-3 text-left text-sm font-semibold text-primary hover:no-underline hover:text-primary/80 [&>svg]:text-primary/60"
                                  aria-label={`Show key contributions for ${role.title}`}
                                >
                                  Key Contributions
                                </AccordionTrigger>
                                <AccordionContent className="pt-1 pb-2">
                                  <ul className="space-y-2.5">
                                    {role.contributions.map((c) => (
                                      <li
                                        key={c}
                                        className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                                      >
                                        <span
                                          aria-hidden="true"
                                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                                        />
                                        {c}
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
