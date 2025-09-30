import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useSectionReveal } from "@/shared/hooks/use-section-reveal";
import "./Contact.css";

const contactLinks = [
  {
    key: "github",
    href: "https://github.com/frjeil",
    icon: Github,
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    key: "email",
    href: "mailto:notsharingmyrealname@gmail.com",
    icon: Mail,
  },
] as const;

const CONTACT_SECTION_ID = "contact" as const;

export const ContactSection = () => {
  const { t } = useTranslation();
  const sectionRef = useSectionReveal<HTMLDivElement>({ y: 100 });

  return (
    <section
      id={CONTACT_SECTION_ID}
      ref={sectionRef}
      className="mx-auto w-full max-w-4xl px-4 py-24 opacity-0"
    >
      <Card className="border-white/20 bg-background/80 backdrop-blur">
        <CardContent className="flex flex-col gap-6 p-8 text-center text-white">
          <h2 className="font-dot text-3xl uppercase tracking-[0.32em] md:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="font-instrument text-lg text-white/70">
            {t("contact.subtitle")}
          </p>
          <div className="contact-actions">
            {contactLinks.map(({ key, href, icon: Icon }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="contact-button"
              >
                <Icon className="contact-button__icon" aria-hidden="true" />
                <span>{t(`contact.links.${key}`)}</span>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
