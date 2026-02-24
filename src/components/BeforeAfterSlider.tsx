"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { BEFORE_AFTER_PAIRS } from "@/lib/constants";
import { useInView } from "@/lib/useInView";

function Slider({
  before, after, label, location,
}: {
  before: string; after: string; label: string; location: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    setPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  }, []);

  const handleStart = useCallback((clientX: number) => {
    isDragging.current = true;
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      setPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
    }
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || !e.touches[0]) return;
      e.preventDefault();
      updatePosition(e.touches[0].clientX);
    };
    const onUp = () => { isDragging.current = false; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [updatePosition]);

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full cursor-col-resize touch-none overflow-hidden rounded-xl border border-white/10 select-none sm:aspect-[16/10]"
        onMouseDown={(e) => handleStart(e.clientX)}
        onTouchStart={(e) => { if (e.touches[0]) handleStart(e.touches[0].clientX); }}
        role="slider"
        aria-label={`Before and after comparison: ${label}`}
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2));
          if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2));
        }}
      >
        <Image src={after} alt={`After sealcoating: ${label}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image src={before} alt={`Before sealcoating: ${label}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>

        <div className="absolute top-0 bottom-0 z-10 w-0.5 bg-copper shadow-[0_0_10px_rgba(184,118,62,0.5)]" style={{ left: `${position}%` }}>
          <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-copper bg-background shadow-lg sm:h-12 sm:w-12">
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" className="text-copper-light">
              <path d="M6 10L2 10M2 10L4.5 7.5M2 10L4.5 12.5M14 10L18 10M18 10L15.5 7.5M18 10L15.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="absolute top-3 left-3 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">Before</div>
        <div className="absolute top-3 right-3 rounded-full bg-copper/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">After</div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm font-medium text-white/80">{label}</span>
        <span className="text-xs text-muted">{location}</span>
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  const heading = useInView<HTMLDivElement>();
  const grid = useInView<HTMLDivElement>();

  return (
    <section id="before-after" className="relative bg-charcoal py-24 sm:py-32 lg:py-40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
      <div className="pointer-events-none absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-copper/[0.05] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-copper/[0.03] blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={heading.ref} className={`reveal mb-16 text-center sm:mb-20 ${heading.inView ? "in-view" : ""}`}>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-copper">Results That Speak</span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            The Proof Is in <span className="text-gradient-copper">the Pavement</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
            Drag the slider to see the transformation. Real results from real projects across Northwest PA.
          </p>
        </div>

        <div ref={grid.ref} className={`reveal-stagger grid gap-8 md:grid-cols-2 ${grid.inView ? "in-view" : ""}`}>
          {BEFORE_AFTER_PAIRS.map((pair) => (
            <Slider key={pair.id} before={pair.before} after={pair.after} label={pair.label} location={pair.location} />
          ))}
        </div>
      </div>
    </section>
  );
}
