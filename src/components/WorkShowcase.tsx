"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { WORK_IMAGES } from "@/lib/constants";
import { useInView } from "@/lib/useInView";

export default function WorkShowcase() {
  const heading = useInView<HTMLDivElement>();
  const grid = useInView<HTMLDivElement>();
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setLightbox(null);
        if (e.key === "ArrowRight") setLightbox((p) => p !== null ? (p + 1) % WORK_IMAGES.length : null);
        if (e.key === "ArrowLeft") setLightbox((p) => p !== null ? (p - 1 + WORK_IMAGES.length) % WORK_IMAGES.length : null);
      };
      window.addEventListener("keydown", handleKey);
      return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKey); };
    } else {
      document.body.style.overflow = "";
    }
  }, [lightbox]);

  const sizeClasses = [
    "col-span-1 aspect-square",
    "col-span-1 aspect-[4/3]",
    "col-span-1 md:col-span-2 aspect-[16/9]",
    "col-span-1 aspect-square",
    "col-span-1 aspect-[4/3]",
    "col-span-1 aspect-square",
    "col-span-1 md:col-span-2 aspect-[16/9]",
    "col-span-1 aspect-[3/4]",
    "col-span-1 aspect-square",
    "col-span-1 aspect-[4/3]",
    "col-span-1 aspect-square",
    "col-span-1 md:col-span-2 aspect-[16/9]",
    "col-span-1 aspect-[4/3]",
    "col-span-1 aspect-square",
    "col-span-1 aspect-[4/3]",
    "col-span-1 aspect-square",
    "col-span-1 md:col-span-2 aspect-[16/9]",
  ];

  return (
    <>
      <section id="work" className="relative bg-background py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
        <div className="pointer-events-none absolute top-40 right-0 h-[500px] w-[500px] rounded-full bg-copper/[0.04] blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={heading.ref} className={`reveal mb-16 text-center sm:mb-20 ${heading.inView ? "in-view" : ""}`}>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-copper">Portfolio</span>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Our <span className="text-gradient-copper">Work</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
              From residential driveways to commercial parking lots &mdash; every surface gets our full attention.
            </p>
          </div>

          <div ref={grid.ref} className={`reveal-stagger grid auto-rows-auto grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 ${grid.inView ? "in-view" : ""}`}>
            {WORK_IMAGES.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightbox(i)}
                className={`group relative overflow-hidden rounded-lg transition-all duration-500 hover:z-10 hover:shadow-[0_0_30px_rgba(184,118,62,0.2)] ${sizeClasses[i % sizeClasses.length]}`}
                aria-label={`View larger: ${img.alt}`}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <p className="line-clamp-3 text-xs text-white/80">{img.alt}</p>
                </div>
                <div className="absolute inset-0 rounded-lg border border-transparent transition-colors duration-300 group-hover:border-copper/30" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background/95 backdrop-blur-xl" onClick={() => setLightbox(null)} role="dialog" aria-label="Image lightbox">
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20" aria-label="Close lightbox">
            <X size={24} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + WORK_IMAGES.length) % WORK_IMAGES.length); }} className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20" aria-label="Previous image">
            <ChevronLeft size={24} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % WORK_IMAGES.length); }} className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20" aria-label="Next image">
            <ChevronRight size={24} />
          </button>
          <div className="relative mx-4 max-h-[85vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={WORK_IMAGES[lightbox].src} alt={WORK_IMAGES[lightbox].alt} width={1200} height={800} className="max-h-[85vh] w-auto rounded-lg object-contain" sizes="90vw" />
            <p className="mt-3 text-center text-sm text-muted">{WORK_IMAGES[lightbox].alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
