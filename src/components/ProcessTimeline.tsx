"use client";

import {
  ClipboardCheck,
  Wind,
  Flame,
  PenTool,
  SprayCan,
  ShieldCheck,
} from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";
import { useInView } from "@/lib/useInView";

const iconMap = { ClipboardCheck, Wind, Flame, PenTool, SprayCan, ShieldCheck };

export default function ProcessTimeline() {
  const heading = useInView<HTMLDivElement>();
  const steps = useInView<HTMLDivElement>();

  return (
    <section id="process" className="relative bg-background py-24 sm:py-32 lg:py-40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div ref={heading.ref} className={`reveal mb-16 text-center sm:mb-20 ${heading.inView ? "in-view" : ""}`}>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-copper">
            How We Work
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Our <span className="text-gradient-copper">Process</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
            Every job follows our proven six-step process for a thorough,
            long-lasting seal.
          </p>
        </div>

        <div ref={steps.ref} className={`reveal-stagger relative ${steps.inView ? "in-view" : ""}`}>
          <div className="absolute left-6 top-0 h-full w-0.5 bg-white/5 md:left-1/2 md:-translate-x-1/2" />
          <div
            className="absolute left-6 top-0 hidden h-full w-0.5 bg-copper md:left-1/2 md:-translate-x-1/2 md:block origin-top transition-transform duration-[1.5s] ease-out"
            style={{ transform: steps.inView ? "scaleY(1)" : "scaleY(0)" }}
          />

          <div className="space-y-12 md:space-y-16">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap] || ShieldCheck;
              const isLeft = i % 2 === 0;

              return (
                <div key={step.step} className="relative pl-16 md:pl-0">
                  <div className={`md:flex md:items-center md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`hidden md:block md:w-[calc(50%-2rem)] ${isLeft ? "md:text-right" : "md:text-left"}`}>
                      <div className="rounded-xl border border-white/5 bg-surface p-6 transition-all duration-300 hover:border-copper/20">
                        <h3 className="font-display text-lg font-bold uppercase tracking-wide">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                      </div>
                    </div>

                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-copper bg-background md:relative md:left-auto md:top-auto md:shrink-0">
                      <Icon size={20} className="text-copper-light" />
                    </div>

                    <div className="md:hidden">
                      <h3 className="font-display text-lg font-bold uppercase tracking-wide">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                    </div>

                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
