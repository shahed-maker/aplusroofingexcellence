import { MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

export function ServiceArea() {
  return (
    <section className="surface-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--leaf-deep)]">
              Service Area
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem]">
              Proudly Serving Wesley Chapel, Florida
            </h2>
            <p className="mt-5 max-w-lg text-muted-foreground">
              Local roof repair and installation, handled with honest work and fair prices.
            </p>
            <a href="tel:8133880510" className="group btn-leaf mt-8">
              <Phone className="h-4 w-4" />
              Call 813-388-0510
            </a>
          </Reveal>

          <Reveal variant="scale" delay={140}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-[linear-gradient(150deg,var(--ink),color-mix(in_oklab,var(--leaf-deep)_20%,var(--graphite)))] p-10 sm:p-14">
              <div
                className="glow-leaf pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-60"
                aria-hidden
              />
              <MapPin className="h-8 w-8 text-[var(--leaf)]" />
              <p className="mt-6 font-display text-2xl font-semibold text-[var(--mist)] sm:text-3xl">
                Wesley Chapel, Florida
              </p>
              <p className="mt-3 text-sm text-[color-mix(in_oklab,var(--mist)_60%,transparent)]">
                Aplusroofing Excellence
              </p>
              <div className="mt-10 grid grid-cols-3 gap-3">
                {["Roof Repair", "Roof Installation", "Licensed & Insured"].map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-[color-mix(in_oklab,var(--leaf)_22%,transparent)] px-3 py-3 text-center text-[0.68rem] font-medium uppercase tracking-wide text-[color-mix(in_oklab,var(--mist)_75%,transparent)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
