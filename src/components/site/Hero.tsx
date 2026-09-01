import { ArrowRight, Phone, ShieldCheck, Hammer, HandCoins } from "lucide-react";
import heroRoof from "@/assets/hero-roof.jpg";

const BADGES = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Hammer, label: "Roof Repair & Installation" },
  { icon: HandCoins, label: "Honest Work • Fair Prices" },
];

export function Hero() {
  return (
    <section id="home" className="surface-dark relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroRoof}
          alt="Newly installed dark shingle roof on a Florida home at dusk"
          width={1600}
          height={1104}
          className="enter-fade h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,var(--ink)_18%,color-mix(in_oklab,var(--ink)_72%,transparent)_55%,color-mix(in_oklab,var(--ink)_45%,transparent)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,var(--ink))]" />
      </div>

      <div
        className="glow-leaf enter-fade pointer-events-none absolute -left-32 top-24 -z-10 h-[28rem] w-[28rem] rounded-full opacity-70"
        style={{ ["--reveal-delay" as string]: "300ms" }}
        aria-hidden
      />

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pb-24 pt-32 sm:px-8 md:pt-40">
        <p
          className="enter-up mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--leaf)_30%,transparent)] px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--leaf)]"
          style={{ ["--reveal-delay" as string]: "60ms" }}
        >
          Wesley Chapel, Florida
        </p>

        <h1 className="enter-up max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-[var(--mist)] sm:text-5xl md:text-6xl lg:text-7xl">
          Roofing Excellence <span className="text-gradient-leaf">You Can Count On.</span>
        </h1>

        <p
          className="enter-up mt-6 max-w-2xl text-base leading-relaxed text-[color-mix(in_oklab,var(--mist)_72%,transparent)] sm:text-lg"
          style={{ ["--reveal-delay" as string]: "180ms" }}
        >
          Professional roof repair and installation in Wesley Chapel, Florida — built around honest
          work, fair prices, and quality service.
        </p>

        <ul className="mt-9 flex flex-wrap gap-3">
          {BADGES.map((b, i) => (
            <li
              key={b.label}
              className="enter-up hairline flex items-center gap-2 rounded-full bg-[color-mix(in_oklab,var(--ink)_55%,transparent)] px-4 py-2 text-sm text-[color-mix(in_oklab,var(--mist)_85%,transparent)] backdrop-blur-sm"
              style={{ ["--reveal-delay" as string]: `${300 + i * 110}ms` }}
            >
              <b.icon className="h-4 w-4 text-[var(--leaf)]" />
              {b.label}
            </li>
          ))}
        </ul>

        <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="group btn-leaf enter-up justify-center"
            style={{ ["--reveal-delay" as string]: "680ms" }}
          >
            Get a Free Estimate
            <ArrowRight className="arrow-shift h-4 w-4" />
          </a>
          <a
            href="tel:8133880510"
            className="btn-ghost enter-up justify-center text-[var(--mist)]"
            style={{ ["--reveal-delay" as string]: "820ms" }}
          >
            <Phone className="h-4 w-4 text-[var(--leaf)]" />
            Call 813-388-0510
          </a>
        </div>
      </div>
    </section>
  );
}
