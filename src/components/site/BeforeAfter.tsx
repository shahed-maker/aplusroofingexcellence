import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { Reveal } from "./Reveal";
/* Replace these two imports with your own before/after photos. */
import beforeImg from "@/assets/before-roof.jpg";
import afterImg from "@/assets/after-roof.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const frame = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      setFromClientX(e.clientX);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [setFromClientX]);

  return (
    <section className="surface-dark relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--leaf)]">
            Transformation
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--mist)] sm:text-4xl md:text-5xl">
            Before &amp; After <span className="text-gradient-leaf">Roofing</span>
          </h2>
          <p className="mt-4 text-[color-mix(in_oklab,var(--mist)_65%,transparent)]">
            Drag the handle to compare.
          </p>
        </Reveal>

        <Reveal variant="scale" delay={120} className="mt-12">
          <div
            ref={frame}
            onPointerDown={(e) => {
              dragging.current = true;
              setFromClientX(e.clientX);
            }}
            className="relative aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-2xl hairline shadow-[0_40px_90px_-45px_color-mix(in_oklab,var(--leaf)_55%,transparent)]"
          >
            <img
              src={afterImg}
              alt="Roof after the work is completed"
              loading="lazy"
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src={beforeImg}
                alt="Roof before the work is completed"
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover"
              />
            </div>

            <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[color-mix(in_oklab,var(--ink)_75%,transparent)] px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--mist)] backdrop-blur-sm">
              Before
            </span>
            <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-[color-mix(in_oklab,var(--leaf)_85%,transparent)] px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--ink)] backdrop-blur-sm">
              After
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 w-[2px] bg-[var(--leaf)]"
              style={{ left: `${pos}%` }}
            >
              <button
                type="button"
                aria-label="Drag to compare before and after"
                onPointerDown={(e) => {
                  e.stopPropagation();
                  dragging.current = true;
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
                  if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
                }}
                className="pointer-events-auto absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-[var(--leaf)] text-[var(--ink)] shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--leaf)_90%,transparent)] transition-transform duration-300 hover:scale-110 active:scale-95"
              >
                <MoveHorizontal className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
