import { Play } from "lucide-react";
import { Reveal } from "./Reveal";

/**
 * VIDEO PLACEHOLDERS — replace each container's contents with your own
 * <iframe ...> or <video ...> element. The wrapper keeps a 16:9 ratio.
 */
const SLOTS = ["Video 01", "Video 02", "Video 03"];

export function Videos() {
  return (
    <section id="videos" className="surface-graphite py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--leaf)]">
            Video Showcase
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--mist)] sm:text-4xl md:text-5xl">
            See Our <span className="text-gradient-leaf">Roofing Work</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SLOTS.map((label, i) => (
            <Reveal key={label} delay={i * 150}>
              <div className="card-lift group relative aspect-video w-full overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--leaf)_18%,transparent)] bg-[linear-gradient(150deg,var(--ink),color-mix(in_oklab,var(--leaf-deep)_16%,var(--graphite)))]">
                {/* Replace everything inside this div with your iframe/video */}
                <div className="absolute inset-0 grid place-items-center gap-3 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-[color-mix(in_oklab,var(--leaf)_45%,transparent)] bg-[color-mix(in_oklab,var(--leaf)_14%,transparent)] transition-transform duration-500 group-hover:scale-110">
                    <Play className="h-6 w-6 translate-x-[2px] text-[var(--leaf)]" />
                  </span>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color-mix(in_oklab,var(--mist)_65%,transparent)]">
                    {label}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
