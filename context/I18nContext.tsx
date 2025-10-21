import React, { createContext, useState, useContext, ReactNode } from 'react';
import { enTranslations, esTranslations } from '../constants';

type Language = 'es' | 'en';
type Translations = typeof enTranslations;

const resources: Record<Language, Translations> = {
  en: enTranslations,
  es: esTranslations,
};

interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getInitialLanguage = (): Language => {
    try {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang && ['en', 'es'].includes(savedLang)) {
        return savedLang;
      }
      const browserLang = navigator.language.split(/[-_]/)[0];
      return browserLang === 'es' ? 'es' : 'en';
    } catch (error) {
      return 'en';
    }
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage());
  const fallbackLng: Language = 'en';

  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem('language', lang);
    } catch (error) {
      console.warn('Could not save language preference.');
    }
    setLanguageState(lang);
  };
  
  const translations = resources[language] || resources[fallbackLng];

  return (
    <I18nContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): { language: Language; setLanguage: (language: Language) => void; } => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return { language: context.language, setLanguage: context.setLanguage };
};

export const useTranslations = (): Translations => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within an I18nProvider');
  }
  return context.translations;
}