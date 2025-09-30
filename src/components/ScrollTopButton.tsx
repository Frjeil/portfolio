import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { gsap, ScrollSmoother } from "@/shared/lib/gsap";

const SHOW_THRESHOLD = 240;
const SMOOTHER_PROGRESS_THRESHOLD = 0.97;

export const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const evaluateVisibility = () => {
      const smoother = ScrollSmoother.get();

      if (smoother) {
        const contentHeight = smoother.content()?.scrollHeight ?? document.documentElement.scrollHeight;
        const maxScroll = Math.max(contentHeight - window.innerHeight, 0);
        const currentScroll = smoother.scrollTop();
        const triggerProgress = smoother.scrollTrigger?.progress;
        const progress = typeof triggerProgress === "number"
          ? triggerProgress
          : maxScroll === 0
            ? 1
            : currentScroll / maxScroll;

        if (progress >= SMOOTHER_PROGRESS_THRESHOLD) {
          return true;
        }

        return maxScroll - currentScroll <= SHOW_THRESHOLD;
      }

      const scrollTop = window.scrollY;
      const viewportBottom = scrollTop + window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );

      return documentHeight - viewportBottom <= SHOW_THRESHOLD;
    };

    const updateVisibility = () => {
      const shouldShow = evaluateVisibility();
      setVisible(prev => (prev !== shouldShow ? shouldShow : prev));
    };

    const handleScroll = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        updateVisibility();
      });
    };

    const handleResize = () => updateVisibility();

    const handleTicker = () => {
      if (!ScrollSmoother.get()) {
        return;
      }
      updateVisibility();
    };

    updateVisibility();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    gsap.ticker.add(handleTicker);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove(handleTicker);
    };
  }, []);

  const scrollToTop = () => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(0, true, "top top");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setVisible(false);
  };

  return (
    <div
      className={`pointer-events-none fixed right-6 z-[60] transition-all duration-300 ${
        visible ? "bottom-8 opacity-100" : "bottom-4 opacity-0"
      }`}
    >
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label="Scroll back to top"
        onClick={scrollToTop}
        className="pointer-events-auto size-12 rounded-full border-white/40 bg-white/10 text-white/80 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/70 hover:text-white"
      >
        <ArrowUp className="size-5" aria-hidden="true" />
      </Button>
    </div>
  );
};
