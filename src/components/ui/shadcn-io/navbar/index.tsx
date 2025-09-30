'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/shared/lib/utils";
import { useTranslation } from "react-i18next";
import type { AppLanguage } from "@/shared/i18n/resources";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowDownToLine, Languages, Menu } from "lucide-react";
import { scrollToSection } from "@/shared/lib/scroll";

const Logo = (props: React.SVGAttributes<SVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 324 323"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <rect
      x="88.1023"
      y="144.792"
      width="151.802"
      height="36.5788"
      rx="18.2894"
      transform="rotate(-38.5799 88.1023 144.792)"
      fill="currentColor"
    />
    <rect
      x="85.3459"
      y="244.537"
      width="151.802"
      height="36.5788"
      rx="18.2894"
      transform="rotate(-38.5799 85.3459 244.537)"
      fill="currentColor"
    />
  </svg>
);

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  onCtaClick?: () => void;
  ctaHref?: string;
}

const sectionIds = ["skills", "projects", "contact"] as const;
const LANGUAGES: AppLanguage[] = ["en", "it"];
const SHEET_CLOSE_DELAY_MS = 320;

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, onCtaClick, ctaHref = "#contact", ...props }, ref) => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

    const navigationLinks = sectionIds.map((id) => ({
      id,
      label: t(`nav.sections.${id}` as const),
    }));

    const blurActiveElement = useCallback(() => {
      const active = document.activeElement;
      if (active instanceof HTMLElement) {
        active.blur();
      }
    }, []);

    const performScroll = useCallback(
      (resolvedTarget: string) => {
        scrollToSection(resolvedTarget);
        requestAnimationFrame(blurActiveElement);
      },
      [blurActiveElement]
    );

    const handleNavigate = useCallback(
      (target: string) => {
        const resolvedTarget = target.startsWith("#") ? target : `#${target}`;

        if (closeTimeoutRef.current) {
          window.clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }

        if (menuOpen) {
          setMenuOpen(false);
          closeTimeoutRef.current = window.setTimeout(() => {
            performScroll(resolvedTarget);
            closeTimeoutRef.current = null;
          }, SHEET_CLOSE_DELAY_MS);
        } else {
          performScroll(resolvedTarget);
        }
      },
      [menuOpen, performScroll]
    );

    useEffect(
      () => () => {
        if (closeTimeoutRef.current) {
          window.clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
      },
      []
    );

    const handleLanguageChange = useCallback(
      (lng: AppLanguage) => {
        if (i18n.language === lng) return;
        void i18n.changeLanguage(lng);
      },
      [i18n]
    );

    const handleLanguageToggle = useCallback(() => {
      const current = (i18n.language as AppLanguage) ?? LANGUAGES[0];
      const index = LANGUAGES.indexOf(current);
      const next = LANGUAGES[(index + 1) % LANGUAGES.length];
      handleLanguageChange(next);
    }, [handleLanguageChange, i18n.language]);

    return (
      <header
        ref={ref}
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          className
        )}
        {...props}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleNavigate("hero")}
              className="flex items-center gap-2 text-foreground transition-colors hover:text-foreground/80"
            >
              <span className="font-dot text-lg uppercase tracking-[0.42em]">
                {t("nav.brand")}
              </span>
            </button>
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-1">
                {navigationLinks.map((link) => (
                  <NavigationMenuItem key={link.id}>
                    <NavigationMenuLink asChild>
                      <Button
                        variant="ghost"
                        className="h-10 px-5 font-instrument text-base tracking-wide"
                        onClick={(event) => {
                          event.preventDefault();
                          handleNavigate(link.id);
                        }}
                      >
                        {link.label}
                      </Button>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="group rounded-full border-white/30 bg-white/5 px-5 font-dot text-[0.85rem] uppercase tracking-[0.4em] text-white transition hover:border-white/60 hover:bg-white/12"
              onClick={handleLanguageToggle}
              aria-label={t("nav.language.label")}
            >
              <Languages className="h-4 w-4 transition group-hover:scale-105" aria-hidden="true" />
              <span className="leading-none">{t(`nav.language.${i18n.language as AppLanguage}`)}</span>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="sm"
              className="hidden rounded-full border-white/30 bg-white/5 px-6 font-dot text-[0.9rem] uppercase tracking-[0.4em] text-white transition hover:border-white/60 hover:bg-white/12 md:inline-flex"
              onClick={(event) => {
                event.preventDefault();
                if (onCtaClick) {
                  onCtaClick();
                }
                handleNavigate(ctaHref);
              }}
            >
              <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
              <span className="leading-none">{t("nav.cta")}</span>
            </Button>

            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label={t("nav.menu")}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-72 sm:w-80 border-r border-white/10 bg-gradient-to-b from-[#6908277a]/95 via-[#130512]/92 to-[#08001059]/95 px-6 pb-10 pt-8 text-white shadow-[0_30px_70px_-40px_rgba(224,61,112,0.45)] backdrop-blur-2xl supports-[backdrop-filter]:bg-background/80"
              >
                <SheetHeader className="gap-2 p-0">
                  <SheetTitle className="font-dot text-lg uppercase tracking-[0.4em]">
                    {t("nav.brand")}
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-6 grid gap-2">
                  {navigationLinks.map((link) => (
                    <Button
                      key={link.id}
                      variant="ghost"
                      className="justify-start rounded-lg border border-white/5 bg-white/5 font-instrument text-lg text-white transition hover:border-white/15 hover:bg-white/12"
                      onClick={() => handleNavigate(link.id)}
                    >
                      {link.label}
                    </Button>
                  ))}
                </nav>
                <div className="mt-8 grid gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full border-white/30 bg-white/5 px-6 font-dot text-base uppercase tracking-[0.4em] text-white transition hover:border-white/60 hover:bg-white/12"
                    onClick={handleLanguageToggle}
                  >
                    <Languages className="h-4 w-4" aria-hidden="true" />
                    <span className="leading-none">{t(`nav.language.${i18n.language as AppLanguage}`)}</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full border-white/30 bg-white/5 px-6 font-dot text-base uppercase tracking-[0.4em] text-white transition hover:border-white/60 hover:bg-white/12"
                    onClick={() => handleNavigate(ctaHref)}
                  >
                    <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
                    <span className="leading-none">{t("nav.cta")}</span>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    );
  }
);

Navbar.displayName = "Navbar";

export { Logo };