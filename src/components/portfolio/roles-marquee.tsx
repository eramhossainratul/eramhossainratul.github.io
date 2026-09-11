import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { experience } from "@/lib/portfolio-data";

// One credential card per role across all organizations, the marquee
// duplicates the list internally for a seamless loop.
const marqueeItems = experience.flatMap((org) =>
  org.roles.map((role) => ({
    quote: role.title,
    name: org.organization,
    title: `${role.period} · ${role.duration}`,
  }))
);

/**
 * Slim dark band below the hero, a slow credential ticker that keeps the
 * cinematic energy flowing into the first light section.
 */
export function RolesMarquee() {
  return (
    <section
      aria-label="Roles and organizations"
      className="border-y border-white/5 bg-stone-950 py-3"
    >
      <InfiniteMovingCards
        items={marqueeItems}
        direction="left"
        speed="slow"
        pauseOnHover
      />
    </section>
  );
}