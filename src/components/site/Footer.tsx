import { Instagram, Phone, MapPin } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Our Work", href: "#our-work" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[color-mix(in_oklab,var(--leaf)_14%,transparent)] bg-[var(--ink)] py-16 text-[color-mix(in_oklab,var(--mist)_72%,transparent)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-lg font-semibold text-[var(--mist)]">
            Aplusroofing <span className="text-[var(--leaf)]">Excellence</span>
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-[var(--leaf)]" /> Wesley Chapel, Florida
          </p>
          <a href="tel:8133880510" className="mt-2 flex w-fit items-center gap-2 text-sm nav-link">
            <Phone className="h-4 w-4 text-[var(--leaf)]" /> 813-388-0510
          </a>
          <a
            href="https://instagram.com/a_roofing_excellence"
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex w-fit items-center gap-2 text-sm nav-link"
          >
            <Instagram className="h-4 w-4 text-[var(--leaf)]" /> @a_roofing_excellence
          </a>
        </div>

        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--leaf)]">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Roof Repair</li>
            <li>Roof Installation</li>
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--leaf)]">
            Navigation
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-[color-mix(in_oklab,var(--leaf)_12%,transparent)] px-5 pt-6 text-xs sm:px-8">
        © {new Date().getFullYear()} Aplusroofing Excellence. Licensed &amp; Insured.
      </div>
    </footer>
  );
}
