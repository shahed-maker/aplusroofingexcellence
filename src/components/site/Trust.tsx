import { ShieldCheck, Wrench, Handshake, Tag } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  { icon: ShieldCheck, title: "Licensed & Insured", copy: "Professional roofing service." },
  { icon: Wrench, title: "Roof Repair & Installation", copy: "Core roofing services." },
  { icon: Handshake, title: "Honest Work", copy: "Straightforward service." },
  { icon: Tag, title: "Fair Prices", copy: "Customer-focused pricing." },
];

export function Trust() {
  return (
    <section className="surface-dark relative border-y border-[color-mix(in_oklab,var(--leaf)_12%,transparent)]">
      <div className="mx-auto grid max-w-7xl gap-px bg-[color-mix(in_oklab,var(--leaf)_12%,transparent)] px-0 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((it, i) => (
          <Reveal
            key={it.title}
            delay={i * 120}
            className="group bg-[var(--ink)] px-6 py-10 transition-colors duration-500 hover:bg-[color-mix(in_oklab,var(--leaf)_7%,var(--ink))] sm:px-8"
          >
            <it.icon className="h-6 w-6 text-[var(--leaf)] transition-transform duration-500 group-hover:-translate-y-1" />
            <h3 className="mt-5 font-display text-lg font-semibold text-[var(--mist)]">{it.title}</h3>
            <p className="mt-2 text-sm text-[color-mix(in_oklab,var(--mist)_60%,transparent)]">
              {it.copy}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
