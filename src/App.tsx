import { useRef } from "react";
import "./App.css";
import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
import { Hero } from "@/components/sections/Hero";
import { SkillsSection } from "@/components/sections/Skills";
import { ProjectsSection } from "@/components/sections/Projects";
import { ContactSection } from "@/components/sections/Contact";
import { ScrollTopButton } from "@/components/ScrollTopButton";
import { ScrollSmoother, ScrollTrigger, useGSAP } from "@/lib/gsap";

const SMOOTH_WRAPPER_ID = "smooth-wrapper" as const;
const SMOOTH_CONTENT_ID = "smooth-content" as const;

function App() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const existing = ScrollSmoother.get();
      existing?.kill();

      if (wrapperRef.current && contentRef.current) {
        ScrollSmoother.create({
          wrapper: wrapperRef.current,
          content: contentRef.current,
          smooth: 1.2,
          normalizeScroll: true,
          effects: true,
        });
        ScrollTrigger.refresh();
      }

      return () => {
        ScrollSmoother.get()?.kill();
      };
    },
    { dependencies: [] }
  );

  return (
    <div
      ref={wrapperRef}
      id={SMOOTH_WRAPPER_ID}
      className="min-h-screen bg-background text-foreground"
    >
      <div ref={contentRef} id={SMOOTH_CONTENT_ID} className="flex min-h-screen flex-col">
        <Navbar01 ctaHref="#contact" />
        <main className="flex-1 bg-gradient-to-b from-background via-background/95 to-background">
          <Hero />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <ScrollTopButton />
      </div>
    </div>
  );
}

export default App;
