"use client";

import Image from "next/image";
import { Paintbrush, Wrench, Ruler, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { useInView } from "@/lib/useInView";

const iconMap = { Paintbrush, Wrench, Ruler };

export default function ServicesShowcase() {
  const heading = useInView<HTMLDivElement>();
  const cards = useInView<HTMLDivElement>();

  return (
    <section id="services" className="relative bg-charcoal py-24 sm:py-32 lg:py-40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
      <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-copper/[0.04] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={heading.ref} className={`reveal mb-16 text-center sm:mb-20 ${heading.inView ? "in-view" : ""}`}>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-copper">
            What We Do
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Our <span className="text-gradient-copper">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
            From sealcoating to crack filling and line painting, we deliver
            professional results that protect and transform your asphalt.
          </p>
        </div>

        <div ref={cards.ref} className={`reveal-stagger grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 ${cards.inView ? "in-view" : ""}`}>
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Paintbrush;
            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface transition-all duration-500 hover:border-copper/30 hover:shadow-[0_0_40px_rgba(184,118,62,0.1)]"
              >
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <Image
                    src={service.image}
                    alt={`${service.title} service by Stone Quarry Sealing`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
                  <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl border border-copper/30 bg-background/80 backdrop-blur-sm">
                    <Icon size={22} className="text-copper-light" />
                  </div>
                </div>

                <div className="relative p-6 sm:p-8">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {service.shortDesc}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {service.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-white/60">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-copper-light transition-all duration-300 group-hover:gap-3"
                  >
                    Request This Service
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
