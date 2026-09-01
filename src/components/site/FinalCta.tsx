import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,var(--ink),var(--graphite)_55%,var(--ink))] py-28 md:py-36">
      <div
        className="glow-leaf pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-55"
        aria-hidden
      />
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold leading-tight text-[var(--mist)] sm:text-4xl md:text-5xl">
            Ready for Roofing <span className="text-gradient-leaf">You Can Trust?</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-xl text-[color-mix(in_oklab,var(--mist)_70%,transparent)]">
            Get in touch with Aplusroofing Excellence for professional roof repair and installation
            in Wesley Chapel, Florida.
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#contact" className="group btn-leaf justify-center">
              Get a Free Estimate
              <ArrowRight className="arrow-shift h-4 w-4" />
            </a>
            <a href="tel:8133880510" className="btn-ghost justify-center text-[var(--mist)]">
              <Phone className="h-4 w-4 text-[var(--leaf)]" />
              Call 813-388-0510
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
