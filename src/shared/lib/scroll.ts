import { ScrollSmoother } from "@/shared/lib/gsap";

const normalizeSelector = (target: string) => (target.startsWith("#") ? target : `#${target}`);

export interface ScrollToSectionOptions {
  align?: string;
  fallbackBehavior?: ScrollLogicalPosition;
}

export type ScrollTarget = string | HTMLElement | null | undefined;

export const scrollToSection = (target: ScrollTarget, options?: ScrollToSectionOptions) => {
  if (typeof window === "undefined") {
    return false;
  }

  const element =
    typeof target === "string"
      ? document.querySelector<HTMLElement>(normalizeSelector(target))
      : target ?? null;

  if (!element) {
    return false;
  }

  const smoother = ScrollSmoother.get();
  const align = options?.align ?? "top top";

  if (smoother) {
    smoother.scrollTo(element, true, align);
  } else {
    element.scrollIntoView({
      behavior: "smooth",
      block: options?.fallbackBehavior ?? "start",
    });
  }

  return true;
};
