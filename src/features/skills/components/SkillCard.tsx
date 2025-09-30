import type React from "react";
import type { CSSProperties } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/shared/lib/utils";
import "./SkillCard.css";

export interface SkillCardProps extends React.ComponentProps<typeof Card> {
  title: string;
  description: string;
  items: string[];
  accent?: string;
}

export const SkillCard = ({ title, description, items, accent = "var(--primary)", className, style, ...props }: SkillCardProps) => {
  const cardStyle: CSSProperties = { "--accent-color": accent } as CSSProperties;
  if (style) {
    Object.assign(cardStyle, style);
  }

  return (
    <Card
      className={cn("skill-card", className)}
      style={cardStyle}
      {...props}
    >
      <span className="skill-card__frame" aria-hidden="true" />
      <span className="skill-card__grid" aria-hidden="true" />
      <span className="skill-card__glow" aria-hidden="true" />
      <span className="skill-card__scan" aria-hidden="true" />
      <span className="skill-card__corner skill-card__corner--tl" aria-hidden="true" />
      <span className="skill-card__corner skill-card__corner--tr" aria-hidden="true" />
      <span className="skill-card__corner skill-card__corner--bl" aria-hidden="true" />
      <span className="skill-card__corner skill-card__corner--br" aria-hidden="true" />

      <CardContent className="skill-card__content">
        <div className="skill-card__header">
          <div className="skill-card__chip">
            <span className="skill-card__chip-text">{title}</span>
          </div>
          <span className="skill-card__indicator" aria-hidden="true" />
        </div>

        <p className="skill-card__description">
          {description}
        </p>

        <ul className="skill-card__list">
          {items.map((item) => (
            <li key={item} className="skill-card__list-item">
              <span className="skill-card__bullet" aria-hidden="true" />
              <span className="skill-card__label">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
