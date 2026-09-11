"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Navbar as NavbarRoot,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Education", link: "#education" },
  { name: "Skills", link: "#skills" },
  { name: "Awards", link: "#achievements" },
  { name: "Connect", link: "#connect" },
];

/**
 * Live local-time badge. It fades out as the resizable pill shrinks so the
 * collapsed bar keeps room for the brand, links and CTA — the same scroll
 * threshold the navbar kit uses to trigger the shrink.
 */
function LiveClock() {
  const [time, setTime] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Dhaka",
        }).format(new Date())
      );
    tick();
    const timer = setInterval(tick, 15000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <p
      className={cn(
        "hidden text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500 tabular-nums transition-opacity duration-300 lg:block",
        scrolled && "opacity-0"
      )}
      aria-hidden={scrolled}
    >
      Dhaka{time ? <span className="text-stone-400"> · {time}</span> : null}
    </p>
  );
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavbarRoot>
      {/* Desktop — the pill shrinks to half width once the page is scrolled */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="relative z-20 flex items-center gap-5">
          <LiveClock />
          <NavbarButton href="#connect">Connect</NavbarButton>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item) => (
            <a
              key={`mobile-link-${item.name}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full items-center justify-between text-[11px] font-medium uppercase tracking-[0.16em] text-stone-400 transition-colors hover:text-amber-200"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <p className="w-full border-t border-white/10 pt-5 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
            Uttara Model Town · Dhaka
          </p>
          <NavbarButton
            href="#connect"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full"
          >
            Connect
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </NavbarRoot>
  );
}
