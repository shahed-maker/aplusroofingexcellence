import { Reveal } from "./Reveal";
/* Replace these imports with your own project photos. */
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export function Work() {
  return (
    <section id="our-work" className="surface-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--leaf-deep)]">
            Our Work
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Roofing, Up Close
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <Reveal variant="scale" className="lg:col-span-2">
            <figure className="group relative h-full overflow-hidden rounded-2xl border border-border">
              <img
                src={work1}
                alt="Completed residential roof"
                loading="lazy"
                width={1400}
                height={1000}
                className="img-zoom h-full min-h-[18rem] w-full object-cover lg:min-h-[32rem]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,color-mix(in_oklab,var(--ink)_65%,transparent))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </figure>
          </Reveal>

          <div className="grid gap-5">
            {[
              { img: work2, alt: "Ridge line of a new roof", d: 140 },
              { img: work3, alt: "Roofer carrying shingles at sunset", d: 260 },
            ].map((it) => (
              <Reveal key={it.alt} variant="scale" delay={it.d}>
                <figure className="group relative overflow-hidden rounded-2xl border border-border">
                  <img
                    src={it.img}
                    alt={it.alt}
                    loading="lazy"
                    width={900}
                    height={900}
                    className="img-zoom h-full min-h-[15rem] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--leaf)_16%,transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
