import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedJerseys from './components/FeaturedJerseys';
import ParallaxSection from './components/ParallaxSection';
import LegendsCollection from './components/LegendsCollection';
import Footer from './components/Footer';
import WelcomeModal from './components/WelcomeModal';
import Modal from './components/Modal';
import { Jersey } from './types';
import { I18nProvider, useTranslations } from './context/I18nContext';
import LanguageSwitcher from './components/LanguageSwitcher';

const AppContent: React.FC = () => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedJersey, setSelectedJersey] = useState<Jersey | null>(null);
  const translations = useTranslations();

  useEffect(() => {
    document.title = translations.document_title;
  }, [translations]);

  const handleVerMasClick = (jersey: Jersey) => {
    setSelectedJersey(jersey);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedJersey(null);
  };

  useEffect(() => {
    if (isDetailModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      const welcomeModalIsOpen = document.querySelector('.welcome-modal-open');
      if (!welcomeModalIsOpen) {
        document.body.style.overflow = 'unset';
      }
    }
  }, [isDetailModalOpen]);


  return (
    <div className="bg-slate-900 text-slate-200 font-sans">
      <LanguageSwitcher />
      <Header />
      <main>
        <Hero />
        <section id="colecciones" className="py-20 md:py-32 bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 
              className="text-3xl md:text-5xl font-bold font-serif text-center mb-12 md:mb-20"
            >
              {translations.collections_title} <span className="text-cyan-400">{translations.collections_title_span}</span>
            </h2>
            <FeaturedJerseys onVerMasClick={handleVerMasClick} />
          </div>
        </section>
        <ParallaxSection imageUrl="https://picsum.photos/seed/parallax-1/1920/1080">
          <h2 
            className="text-3xl md:text-5xl font-bold font-serif text-white text-center drop-shadow-lg"
          >
            {translations.parallax1_title} <span className="text-cyan-400">{translations.parallax1_title_span}</span>
          </h2>
        </ParallaxSection>
        <section id="leyendas" className="py-20 md:py-32 bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 
              className="text-3xl md:text-5xl font-bold font-serif text-center mb-12 md:mb-20"
            >
              {translations.legends_title} <span className="text-cyan-400">{translations.legends_title_span}</span>
            </h2>
            <LegendsCollection onVerMasClick={handleVerMasClick} />
          </div>
        </section>
        <ParallaxSection imageUrl="https://picsum.photos/seed/parallax-2/1920/1080">
           <div id="nosotros" className="text-center text-white px-4">
             <h2 
                className="text-3xl md:text-5xl font-bold font-serif mb-6"
             >
               {translations.parallax2_title} <span className="text-cyan-400">{translations.parallax2_title_span}</span>
             </h2>
             <p className="max-w-3xl mx-auto md:text-lg">
               {translations.parallax2_text}
             </p>
           </div>
        </ParallaxSection>
      </main>
      <Footer />
      <WelcomeModal />
      <Modal isOpen={isDetailModalOpen} onClose={closeDetailModal} jersey={selectedJersey} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}

export default App;