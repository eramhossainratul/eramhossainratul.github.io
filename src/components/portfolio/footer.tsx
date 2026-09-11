import { MapPin, ArrowUp } from "lucide-react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { profile } from "@/lib/portfolio-data";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Connect", href: "#connect" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-stone-950 text-stone-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-700 font-serif text-sm font-bold text-stone-950">
                ER
              </span>
              <div className="h-12 w-52 sm:w-64">
                <TextHoverEffect text="Eram Ratul" />
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              {profile.roles.join(" · ")}, committed to disciplined service,
              environmental awareness and youth leadership in Dhaka.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-xs text-stone-500">
              <MapPin className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
              {profile.location}
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-400 transition-colors hover:text-amber-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Back to top */}
          <a
            href="#top"
            aria-label="Back to top"
            className="group inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-stone-300 transition-all hover:border-amber-400/50 hover:text-amber-300 lg:mt-6"
          >
            <ArrowUp
              className="h-5 w-5 transition-transform group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-xs text-stone-500 sm:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Developed by{" "}
            <a
              href="https://maherukhislam.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-stone-400 underline decoration-stone-600/70 underline-offset-4 transition-colors hover:text-amber-300 hover:decoration-amber-400/60"
            >
              Maherukh Islam
            </a>
          </p>
          <p>Dhaka, Bangladesh · Built with dedication</p>
        </div>
      </div>
    </footer>
  );
}
