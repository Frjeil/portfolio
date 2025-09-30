import { useRef } from "react";
import type { RefObject } from "react";
import { gsap, useGSAP } from "@/shared/lib/gsap";

type RevealOptions = {
  y?: number;
  duration?: number;
  once?: boolean;
  triggerOffset?: string;
};

export const useSectionReveal = <T extends HTMLElement>(
  options: RevealOptions = {}
): RefObject<T | null> => {
  const {
    y = 80,
    duration = 1.1,
    once = false,
    triggerOffset = "top 80%",
  } = options;

  const sectionRef = useRef<T | null>(null);

  useGSAP(
    () => {
      const target = sectionRef.current;
      if (!target) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          target,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            ease: "power3.out",
            overwrite: "auto",
            scrollTrigger: {
              trigger: target,
              start: triggerOffset,
              toggleActions: once ? "play none none none" : "play reverse play reverse",
            },
          }
        );
      }, target);

      return () => ctx.revert();
    },
    { dependencies: [y, duration, once, triggerOffset], scope: sectionRef }
  );

  return sectionRef;
};
