"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(overlayRef.current, {
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      })
        .from(
          headlineRef.current,
          {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          subtextRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ctaRef.current?.children ? Array.from(ctaRef.current.children) : [],
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.3"
        )
;
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      <Image
        src="/images/before-after/IMG_5515.jpeg"
        alt="Freshly sealed parking lot by Stone Quarry Sealing in Northwest Pennsylvania"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />

      <div
        ref={overlayRef}
        className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-copper/30 bg-copper/10 px-4 py-2 text-xs font-medium uppercase tracking-widest text-copper-light sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-copper-light animate-pulse" />
          Family-Owned &bull; Waterford, PA
        </div>

        <h1
          ref={headlineRef}
          className="font-display text-4xl font-bold uppercase leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Protecting Northwest PA&apos;s Asphalt,{" "}
          <span className="text-gradient-copper">One Surface at a Time</span>
        </h1>

        <p
          ref={subtextRef}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl"
        >
          Professional sealcoating, crack filling, and line painting that
          restores and protects your asphalt investment for years to come.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-copper px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-copper-light hover:shadow-[0_0_30px_rgba(184,118,62,0.4)] sm:text-base"
          >
            Get a Free Quote
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#work"
            className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white/90 transition-all duration-300 hover:border-copper/50 hover:bg-white/5 sm:text-base"
          >
            See Our Work
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-copper-light sm:hidden"
          >
            <Phone size={16} />
            {BUSINESS.phone}
          </a>
        </div>
      </div>

{/* scroll indicator removed */}
    </section>
  );
}
