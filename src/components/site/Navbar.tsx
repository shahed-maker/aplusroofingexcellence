import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Our Work", href: "#our-work" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-[color-mix(in_oklab,var(--ink)_82%,transparent)] border-b border-[color-mix(in_oklab,var(--leaf)_16%,transparent)]"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8",
          scrolled ? "h-16" : "h-20 md:h-24",
        )}
      >
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--leaf)] font-display text-sm font-bold text-[var(--ink)]">
            A+
          </span>
          <span className="font-display text-[0.95rem] font-semibold tracking-tight text-[var(--mist)] sm:text-base">
            Aplusroofing <span className="text-[var(--leaf)]">Excellence</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm font-medium text-[color-mix(in_oklab,var(--mist)_78%,transparent)] hover:text-[var(--mist)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="group btn-leaf !py-2.5 !text-sm">
            Get a Free Estimate
            <ArrowRight className="arrow-shift h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-[color-mix(in_oklab,var(--leaf)_28%,transparent)] text-[var(--mist)] transition-colors hover:bg-[color-mix(in_oklab,var(--leaf)_14%,transparent)] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* mobile sheet */}
      <div
        className={cn(
          "surface-dark overflow-hidden border-t border-[color-mix(in_oklab,var(--leaf)_14%,transparent)] transition-[max-height,opacity] duration-500 ease-out lg:hidden",
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-5 sm:px-8">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 40}ms` }}
              className="rounded-lg px-3 py-3 text-base font-medium text-[color-mix(in_oklab,var(--mist)_85%,transparent)] transition-colors hover:bg-[color-mix(in_oklab,var(--leaf)_12%,transparent)] hover:text-[var(--leaf)]"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-3">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-leaf justify-center">
              Get a Free Estimate
            </a>
            <a href="tel:8133880510" className="btn-ghost justify-center text-[var(--mist)]">
              <Phone className="h-4 w-4" /> Call 813-388-0510
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
