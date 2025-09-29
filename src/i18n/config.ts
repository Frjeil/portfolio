import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources, type AppLanguage } from "./resources";

export const defaultLanguage: AppLanguage = "it";

const LANGUAGE_STORAGE_KEY = "portfolio:language";

const isLanguage = (value: unknown): value is AppLanguage =>
  typeof value === "string" && value in resources;

const readStoredLanguage = (): AppLanguage | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return isLanguage(stored) ? stored : null;
  } catch (error) {
    console.warn("Unable to access language preference", error);
    return null;
  }
};

const initialLanguage = readStoredLanguage() ?? defaultLanguage;

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: initialLanguage,
      fallbackLng: defaultLanguage,
      interpolation: {
        escapeValue: false,
      },
      debug: false,
      returnObjects: true,
    })
    .catch((error) => {
      console.error("Failed to initialize i18next", error);
    });
}

if (typeof window !== "undefined") {
  const applyLanguage = (language: AppLanguage) => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch (error) {
      console.warn("Unable to persist language preference", error);
    }
  };

  const resolvedLanguage = isLanguage(i18n.language) ? i18n.language : initialLanguage;
  applyLanguage(resolvedLanguage);

  i18n.on("languageChanged", (lng) => {
    if (isLanguage(lng)) {
      applyLanguage(lng);
    }
  });
}

export { i18n };
