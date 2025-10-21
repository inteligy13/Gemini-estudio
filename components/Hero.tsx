
import React from 'react';
import { useI18n } from '../context/I18nContext';

const Hero: React.FC = () => {
  const { t } = useI18n();
  return (
    <section className="h-screen w-full flex items-center justify-center relative">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://picsum.photos/seed/hero-football/1920/1280')` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
          {t('hero_title')} <span className="text-cyan-400">{t('hero_title_span')}</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          {t('hero_subtitle')}
        </p>
        <a href="#colecciones" className="bg-cyan-500 text-slate-900 font-bold py-3 px-6 md:px-8 rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          {t('hero_button')}
        </a>
      </div>
    </section>
  );
};

export default Hero;
