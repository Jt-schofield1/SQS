"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

function AnimatedNumber({
  value,
  suffix,
  prefix,
  label,
  triggered,
}: {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  triggered: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => setDisplay(Math.round(obj.val)),
    });
  }, [triggered, value]);

  return (
    <div className="text-center">
      <div className="font-display text-4xl font-bold tracking-tight text-copper-light sm:text-5xl lg:text-6xl">
        {prefix}
        {triggered ? display : 0}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted sm:text-base">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        onEnter: () => setTriggered(true),
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-20 sm:py-28"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-copper/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-4">
          {STATS.map((stat) => (
            <AnimatedNumber
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              triggered={triggered}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
