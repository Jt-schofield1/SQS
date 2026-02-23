import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function refreshScrollTrigger() {
  setTimeout(() => ScrollTrigger.refresh(), 100);
  setTimeout(() => ScrollTrigger.refresh(), 500);
  setTimeout(() => ScrollTrigger.refresh(), 1500);
}

export function animateOnScroll(
  element: Element | Element[] | null,
  options: {
    trigger?: Element | null;
    from?: gsap.TweenVars;
    start?: string;
    stagger?: number;
  } = {}
) {
  if (!element) return;

  const {
    trigger,
    from = { y: 40, opacity: 0 },
    start = "top 85%",
    stagger = 0,
  } = options;

  gsap.fromTo(
    element,
    { ...from },
    {
      y: 0,
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: trigger || (Array.isArray(element) ? element[0] : element),
        start,
        toggleActions: "play none none none",
      },
    }
  );
}
