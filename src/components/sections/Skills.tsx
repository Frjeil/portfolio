import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Separator } from "@/components/ui/separator";
import { PixelCard } from "@/components/PixelCard";
import { useSectionReveal } from "@/hooks/use-section-reveal";

interface SkillCard {
  key: string;
  title: string;
  description: string;
  items: string[];
}

const accents = [
  "hsl(var(--primary))",
  "hsl(var(--accent))",
  "hsl(var(--secondary))",
  "hsl(var(--chart-3))",
];

const SKILLS_SECTION_ID = "skills" as const;

export const SkillsSection = () => {
  const { t } = useTranslation();
  const sectionRef = useSectionReveal<HTMLDivElement>({ y: 120 });

  const cards = useMemo(
    () => t("skills.cards", { returnObjects: true }) as SkillCard[],
    [t]
  );

  return (
    <section
      id={SKILLS_SECTION_ID}
      ref={sectionRef}
      className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-14 px-4 py-24 text-center opacity-0"
    >
      <div className="max-w-3xl space-y-6">
        <Separator className="mx-auto w-24 bg-white/30" />
        <h2 className="font-dot text-4xl uppercase tracking-[0.36em] text-white md:text-5xl">
          {t("skills.title")}
        </h2>
        <p className="font-instrument text-lg text-white/70 md:text-2xl">
          {t("skills.subtitle")}
        </p>
      </div>
      <div className="grid w-full gap-8 md:grid-cols-2 xl:max-w-5xl">
        {cards.map((card, index) => (
          <PixelCard
            key={card.key}
            title={card.title}
            description={card.description}
            items={card.items}
            accent={accents[index % accents.length]}
          />
        ))}
      </div>
    </section>
  );
};
