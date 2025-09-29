import "./Hero.css";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import FaultyTerminal from "@/components/FaultyTerminal";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import { scrollToSection } from "@/lib/scroll";

const HERO_SECTION_ID = "hero" as const;

export const Hero = () => {
  const { t } = useTranslation();
  const sectionRef = useSectionReveal<HTMLDivElement>({ y: 140, triggerOffset: "top 85%" });
  const handlePrimaryCta = useCallback(() => {
    scrollToSection("contact");
  }, []);

  const handleSecondaryCta = useCallback(() => {
    scrollToSection("projects");
  }, []);

  return (
    <section
      id={HERO_SECTION_ID}
      ref={sectionRef}
      className="hero-section relative isolate flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden border-b border-border/60 px-4 py-16 opacity-0"
    >
      <div className="absolute inset-0">
        <FaultyTerminal
          className="hero-terminal"
          scale={1.6}
          gridMul={[2.5, 1.2]}
          digitSize={1.1}
          timeScale={0.4}
          scanlineIntensity={0.6}
          glitchAmount={1.1}
          flickerAmount={0.8}
          tint="#E03D70"
          brightness={0.75}
          curvature={0.18}
          mouseStrength={0.35}
          mouseReact
          pageLoadAnimation={false}
        />
        <div className="hero-overlay hero-overlay--grid" aria-hidden="true" />
        <div className="hero-overlay hero-overlay--fade" aria-hidden="true" />
      </div>

      <div className="hero-content relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <div className="space-y-6">
          <h1 className="font-dot text-5xl leading-tight tracking-[0.32em] text-white drop-shadow md:text-7xl">
            {t("hero.title")}
          </h1>
          <p className="mx-auto max-w-2xl font-instrument text-xl text-white/80 md:text-2xl">
            {t("hero.subtitle")}
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-3 md:flex-row md:justify-center">
          <Button type="button" size="lg" className="hero-cta hero-cta--primary" onClick={handlePrimaryCta}>
            {t("hero.primaryCta")}
          </Button>
          <Button
            type="button"
            size="lg"
            variant="ghost"
            className="hero-cta hero-cta--secondary"
            onClick={handleSecondaryCta}
          >
            {t("hero.secondaryCta")}
          </Button>
        </div>
        <div className="flex flex-col items-center gap-1 text-white/60">
          <span className="font-instrument text-base">{t("hero.footnotePrimary")}</span>
          <span className="font-instrument text-base">{t("hero.footnoteSecondary")}</span>
        </div>
      </div>
    </section>
  );
};
