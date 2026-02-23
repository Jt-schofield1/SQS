"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { FAQS } from "@/lib/constants";
import { useInView } from "@/lib/useInView";

function FAQItem({
  question, answer, isOpen, onClick,
}: {
  question: string; answer: string; isOpen: boolean; onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !innerRef.current) return;
    const height = isOpen ? innerRef.current.scrollHeight : 0;
    gsap.to(contentRef.current, { height, duration: 0.4, ease: "power2.inOut" });
  }, [isOpen]);

  return (
    <div className={`rounded-xl border transition-all duration-300 ${isOpen ? "border-copper/30 bg-surface-light" : "border-white/5 bg-surface hover:border-white/10"}`}>
      <button onClick={onClick} className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6" aria-expanded={isOpen}>
        <span className={`font-display text-base font-semibold tracking-wide transition-colors sm:text-lg ${isOpen ? "text-copper-light" : "text-white/90"}`}>
          {question}
        </span>
        <ChevronDown size={20} className={`shrink-0 text-copper transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden">
        <div ref={innerRef} className="px-5 pb-5 sm:px-6 sm:pb-6">
          <p className="text-sm leading-relaxed text-muted sm:text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const heading = useInView<HTMLDivElement>();
  const list = useInView<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-background py-24 sm:py-32 lg:py-40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-copper/[0.03] blur-[150px]" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div ref={heading.ref} className={`reveal mb-16 text-center sm:mb-20 ${heading.inView ? "in-view" : ""}`}>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-copper">Common Questions</span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Frequently <span className="text-gradient-copper">Asked</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
            Everything you need to know about our sealcoating services.
          </p>
        </div>

        <div ref={list.ref} className={`reveal-stagger space-y-3 ${list.inView ? "in-view" : ""}`}>
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
