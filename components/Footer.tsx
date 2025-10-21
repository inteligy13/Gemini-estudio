import React from 'react';
import { useTranslations } from '../context/I18nContext';

const Footer: React.FC = () => {
  const translations = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/50">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold font-serif text-white tracking-wider">
              {translations.header_brand} <span className="text-cyan-400">F.C.</span>
            </a>
            <p className="text-slate-400 mt-2 text-sm">{translations.footer_tagline}</p>
          </div>
          <div className="flex space-x-6">
            <a href="#colecciones" className="text-slate-300 hover:text-cyan-400 transition-colors">{translations.nav_collections}</a>
            <a href="#leyendas" className="text-slate-300 hover:text-cyan-400 transition-colors">{translations.nav_legends}</a>
            <a href="#nosotros" className="text-slate-300 hover:text-cyan-400 transition-colors">{translations.nav_about}</a>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-500 text-sm">
          <p>{translations.footer_copyright.replace('{year}', String(currentYear))}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;