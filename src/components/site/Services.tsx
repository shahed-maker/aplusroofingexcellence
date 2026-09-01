import { ArrowRight, Wrench, Home } from "lucide-react";
import { Reveal } from "./Reveal";
import repairImg from "@/assets/service-repair.jpg";
import installImg from "@/assets/service-install.jpg";

const SERVICES = [
  {
    icon: Wrench,
    title: "Roof Repair",
    copy: "Professional solutions for roofing damage and repair needs.",
    img: repairImg,
    alt: "Roofer repairing damaged shingles",
  },
  {
    icon: Home,
    title: "Roof Installation",
    copy: "Reliable roof installation focused on quality and durability.",
    img: installImg,
    alt: "Crew installing a new shingle roof",
  },
];

export function Services() {
  return (
    <section id="services" className="surface-light relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--leaf-deep)]">
            Services
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Roofing Services Done Right
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 160}>
              <article className="card-lift group h-full overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.alt}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="img-zoom h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,color-mix(in_oklab,var(--ink)_70%,transparent))] opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                  <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-xl bg-[color-mix(in_oklab,var(--ink)_75%,transparent)] backdrop-blur-sm">
                    <s.icon className="h-5 w-5 text-[var(--leaf)]" />
                  </span>
                </div>
                <div className="p-7 sm:p-8">
                  <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground">{s.copy}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--leaf-deep)]"
                  >
                    Learn More
                    <ArrowRight className="arrow-shift h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
