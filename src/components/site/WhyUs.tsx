import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import whyUs from "@/assets/why-us.jpg";

const POINTS = [
  "Licensed & Insured",
  "Honest Work",
  "Fair Prices",
  "Professional Roof Repair",
  "Quality Roof Installation",
];

export function WhyUs() {
  return (
    <section id="why-us" className="surface-graphite relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="scale" className="relative">
          <div
            className="glow-leaf pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-60"
            aria-hidden
          />
          <div className="group overflow-hidden rounded-2xl hairline">
            <img
              src={whyUs}
              alt="Florida home with a quality roof"
              loading="lazy"
              width={1200}
              height={1400}
              className="img-zoom h-full max-h-[34rem] w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--leaf)]">
              Why Aplusroofing Excellence
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--mist)] sm:text-4xl md:text-[2.9rem]">
              Honest Work. Fair Prices.{" "}
              <span className="text-gradient-leaf">Roofing Excellence.</span>
            </h2>
          </Reveal>

          <ul className="mt-10 space-y-4">
            {POINTS.map((p, i) => (
              <Reveal key={p} delay={150 + i * 110}>
                <li className="flex items-center gap-4 rounded-xl border border-[color-mix(in_oklab,var(--leaf)_14%,transparent)] bg-[color-mix(in_oklab,var(--ink)_50%,transparent)] px-5 py-4 transition-colors duration-500 hover:border-[color-mix(in_oklab,var(--leaf)_45%,transparent)]">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[color-mix(in_oklab,var(--leaf)_20%,transparent)]">
                    <Check className="h-4 w-4 text-[var(--leaf)]" />
                  </span>
                  <span className="text-[var(--mist)]">{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={750}>
            <a href="#contact" className="group btn-leaf mt-10">
              Get a Free Estimate
              <ArrowRight className="arrow-shift h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
