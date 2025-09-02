import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";

const savedLang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({ //.use(LanguageDetector)
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: savedLang,          // default language
  fallbackLng: "en",  // fallback if translation is missing
  interpolation: { escapeValue: false }
});

export default i18n;