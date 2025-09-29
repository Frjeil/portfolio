import type React from "react";
import type { CSSProperties } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import "./PixelCard.css";

interface PixelCardProps extends React.ComponentProps<typeof Card> {
  title: string;
  description: string;
  items: string[];
  accent?: string;
}

export const PixelCard = ({ title, description, items, accent = "var(--primary)", className, style, ...props }: PixelCardProps) => {
  const cardStyle: CSSProperties = { "--accent-color": accent } as CSSProperties;
  if (style) {
    Object.assign(cardStyle, style);
  }

  return (
    <Card
      className={cn("pixel-card", className)}
      style={cardStyle}
      {...props}
    >
      <span className="pixel-card__frame" aria-hidden="true" />
      <span className="pixel-card__grid" aria-hidden="true" />
      <span className="pixel-card__glow" aria-hidden="true" />
      <span className="pixel-card__scan" aria-hidden="true" />
      <span className="pixel-card__corner pixel-card__corner--tl" aria-hidden="true" />
      <span className="pixel-card__corner pixel-card__corner--tr" aria-hidden="true" />
      <span className="pixel-card__corner pixel-card__corner--bl" aria-hidden="true" />
      <span className="pixel-card__corner pixel-card__corner--br" aria-hidden="true" />

      <CardContent className="pixel-card__content">
        <div className="pixel-card__header">
          <div className="pixel-card__chip">
            <span className="pixel-card__chip-text">{title}</span>
          </div>
          <span className="pixel-card__indicator" aria-hidden="true" />
        </div>

        <p className="pixel-card__description">
          {description}
        </p>

        <ul className="pixel-card__list">
          {items.map((item) => (
            <li key={item} className="pixel-card__list-item">
              <span className="pixel-card__bullet" aria-hidden="true" />
              <span className="pixel-card__label">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
