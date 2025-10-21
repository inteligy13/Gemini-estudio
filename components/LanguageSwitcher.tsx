import React from 'react';
import { useI18n } from '../context/I18nContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useI18n();

  const languages = [
    { code: 'es', name: 'Español', flag: '🇲🇽' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  return (
    <div className="fixed top-24 md:top-6 left-4 z-50 flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm p-1 rounded-full shadow-lg border border-slate-700">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code as 'es' | 'en')}
          className={`
            px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
            ${language === lang.code ? 'bg-cyan-500 text-slate-900 shadow-md' : 'text-slate-300 hover:bg-slate-700/50'}
          `}
          aria-pressed={language === lang.code}
        >
          <span className="mr-2" role="img" aria-label={`${lang.name} flag`}>{lang.flag}</span>
          <span className="hidden sm:inline">{lang.name}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
