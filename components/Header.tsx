import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold font-serif text-white tracking-wider" onClick={closeMenu}>
            JERSEYS <span className="text-cyan-400">F.C.</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#colecciones" className="text-slate-200 hover:text-cyan-400 transition-colors duration-300 font-semibold">Colecciones</a>
            <a href="#leyendas" className="text-slate-200 hover:text-cyan-400 transition-colors duration-300 font-semibold">Leyendas</a>
            <a href="#nosotros" className="text-slate-200 hover:text-cyan-400 transition-colors duration-300 font-semibold">Nosotros</a>
          </nav>
          <button className="md:hidden text-white z-50" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </header>
      
      <div className={`md:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-10">
          <a href="#colecciones" className="text-2xl font-serif text-slate-200 hover:text-cyan-400 transition-colors duration-300" onClick={closeMenu}>Colecciones</a>
          <a href="#leyendas" className="text-2xl font-serif text-slate-200 hover:text-cyan-400 transition-colors duration-300" onClick={closeMenu}>Leyendas</a>
          <a href="#nosotros" className="text-2xl font-serif text-slate-200 hover:text-cyan-400 transition-colors duration-300" onClick={closeMenu}>Nosotros</a>
        </nav>
      </div>
    </>
  );
};

export default Header;