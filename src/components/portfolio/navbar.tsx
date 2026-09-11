"use client";

import { useEffect, useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#achievements" },
  { label: "Connect", href: "#connect" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-white/10 bg-stone-950/90 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-stone-950/70 to-transparent"
      )}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 font-serif text-[11px] font-bold text-stone-100 transition-colors group-hover:border-amber-400/60 group-hover:text-amber-300">
            ER
          </span>
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-stone-300 sm:inline">
            Md. Eram Hossain Ratul
            <span className="mx-2 text-stone-600" aria-hidden="true">
              ·
            </span>
            <span className="text-stone-500">Student Leader</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex lg:gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] font-medium uppercase tracking-[0.16em] text-stone-400 transition-colors hover:text-stone-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          {/* Live local time */}
          <p className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500 tabular-nums lg:block">
            Dhaka{time ? <span className="text-stone-400"> · {time}</span> : null}
          </p>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-stone-200 transition-colors hover:bg-white/10 md:hidden"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 border-stone-800 bg-stone-950 text-stone-100"
            >
              <SheetTitle className="flex items-center gap-3 px-1 text-left">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 font-serif text-[11px] font-bold text-stone-100">
                  ER
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-300">
                  Md. Eram Hossain Ratul
                </span>
              </SheetTitle>
              <nav
                aria-label="Mobile navigation"
                className="mt-7 flex flex-col gap-1"
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-3 text-xs font-medium uppercase tracking-[0.16em] text-stone-400 transition-colors hover:bg-white/10 hover:text-amber-200"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-40" aria-hidden="true" />
                  </a>
                ))}
              </nav>
              <p className="mt-8 border-t border-white/10 px-3 pt-6 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
                Uttara Model Town · Dhaka
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
