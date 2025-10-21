import React, { useState, useEffect } from 'react';
import { useTranslations } from '../context/I18nContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const translations = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      // Check if any other modal is open before changing the overflow
      const isAnyModalOpen = document.querySelector('.fixed.inset-0.z-50');
      if (!isAnyModalOpen) {
        document.body.style.overflow = 'unset';
      }
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-20">
        
        {/* Left Spacer */}
        <div className="flex-1"></div>

        {/* Centered Brand */}
        <div className="flex-shrink-0">
          <a href="#" className="text-2xl font-bold font-serif text-white tracking-wider">
            {translations.header_brand} <span className="text-cyan-400">F.C.</span>
          </a>
        </div>

        {/* Right Navigation & Menu */}
        <div className="flex-1 flex justify-end items-center">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-6">
              <a href="#colecciones" className="text-slate-300 hover:text-cyan-400 transition-colors">{translations.nav_collections}</a>
              <a href="#leyendas" className="text-slate-300 hover:text-cyan-400 transition-colors">{translations.nav_legends}</a>
              <a href="#nosotros" className="text-slate-300 hover:text-cyan-400 transition-colors">{translations.nav_about}</a>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none z-50" aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden fixed top-0 left-0 w-full h-screen bg-slate-900 transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center justify-center space-y-8 mb-12">
            <a href="#colecciones" onClick={toggleMenu} className="text-slate-300 text-3xl hover:text-cyan-400 transition-colors">{translations.nav_collections}</a>
            <a href="#leyendas" onClick={toggleMenu} className="text-slate-300 text-3xl hover:text-cyan-400 transition-colors">{translations.nav_legends}</a>
            <a href="#nosotros" onClick={toggleMenu} className="text-slate-300 text-3xl hover:text-cyan-400 transition-colors">{translations.nav_about}</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;