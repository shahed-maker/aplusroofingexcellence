import { ArrowRight, Phone, MapPin, Building2 } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="surface-dark relative overflow-hidden py-24 md:py-32">
      <div
        className="glow-leaf pointer-events-none absolute -right-24 top-10 h-[26rem] w-[26rem] rounded-full opacity-50"
        aria-hidden
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--leaf)]">
            Contact
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--mist)] sm:text-4xl md:text-5xl">
            Let&apos;s Get Your Roof <span className="text-gradient-leaf">Taken Care Of.</span>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <div className="rounded-2xl hairline bg-[color-mix(in_oklab,var(--ink)_55%,transparent)] p-8 backdrop-blur-sm sm:p-10">
            <ul className="space-y-5 text-[var(--mist)]">
              <li className="flex items-center gap-4">
                <Building2 className="h-5 w-5 shrink-0 text-[var(--leaf)]" />
                <span className="font-display text-lg font-semibold">Aplusroofing Excellence</span>
              </li>
              <li className="flex items-center gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-[var(--leaf)]" />
                Wesley Chapel, Florida
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 shrink-0 text-[var(--leaf)]" />
                <a href="tel:8133880510" className="nav-link">
                  813-388-0510
                </a>
              </li>
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="tel:8133880510" className="group btn-leaf justify-center">
                Get a Free Estimate
                <ArrowRight className="arrow-shift h-4 w-4" />
              </a>
              <a href="tel:8133880510" className="btn-ghost justify-center text-[var(--mist)]">
                <Phone className="h-4 w-4 text-[var(--leaf)]" />
                Call 813-388-0510
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
