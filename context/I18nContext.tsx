import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { enTranslations, esTranslations } from '../constants';

type Language = 'es' | 'en';

type Translations = { [key: string]: string };

const resources: Record<Language, Translations> = {
  en: enTranslations,
  es: esTranslations,
};

interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, replacements?: { [key: string]: string | number }) => string;
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
      return 'en'; // Fallback in case localStorage or navigator is not available
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

  const t = useCallback((key: string, replacements?: { [key: string]: string | number }) => {
    const translations = resources[language] || resources[fallbackLng];
    let translation = translations[key] || key;
    
    if (replacements) {
      Object.keys(replacements).forEach(placeholder => {
        translation = translation.replace(`{${placeholder}}`, String(replacements[placeholder]));
      });
    }
    return translation;
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
