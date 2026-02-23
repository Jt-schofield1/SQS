"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[50vh] items-center justify-center overflow-hidden sm:min-h-[60vh]"
    >
      <Image
        src="/images/work/IMG_5471.jpeg"
        alt="Beautifully sealed winding driveway in rural Northwest Pennsylvania"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/50" />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6"
      >
        <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Ready to Protect{" "}
          <span className="text-gradient-copper">Your Investment?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
          Sealcoating can extend the life of your asphalt by 20&ndash;30 years.
          Get your free estimate today.
        </p>
        <a
          href="#contact"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-copper px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-copper-light hover:shadow-[0_0_30px_rgba(184,118,62,0.4)] sm:text-base"
        >
          Get a Free Quote
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
}
