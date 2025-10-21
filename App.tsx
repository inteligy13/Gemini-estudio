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

const App: React.FC = () => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedJersey, setSelectedJersey] = useState<Jersey | null>(null);

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
      // Only unset if welcome modal is also closed
      const welcomeModalIsOpen = document.querySelector('.welcome-modal-open');
      if (!welcomeModalIsOpen) {
        document.body.style.overflow = 'unset';
      }
    }
  }, [isDetailModalOpen]);


  return (
    <div className="bg-slate-900 text-slate-200 font-sans">
      <Header />
      <main>
        <Hero />
        <section id="colecciones" className="py-20 md:py-32 bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-center mb-12 md:mb-20">
              Nuevas <span className="text-cyan-400">Colecciones</span>
            </h2>
            <FeaturedJerseys onVerMasClick={handleVerMasClick} />
          </div>
        </section>
        <ParallaxSection imageUrl="https://picsum.photos/seed/parallax-1/1920/1080">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-white text-center drop-shadow-lg">
            Forjadas en la <span className="text-cyan-400">Gloria</span>
          </h2>
        </ParallaxSection>
        <section id="leyendas" className="py-20 md:py-32 bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-center mb-12 md:mb-20">
              Jerseys de <span className="text-cyan-400">Leyenda</span>
            </h2>
            <LegendsCollection onVerMasClick={handleVerMasClick} />
          </div>
        </section>
        <ParallaxSection imageUrl="https://picsum.photos/seed/parallax-2/1920/1080">
           <div id="nosotros" className="text-center text-white px-4">
             <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">Nuestra <span className="text-cyan-400">Misión</span></h2>
             <p className="max-w-3xl mx-auto md:text-lg">
               En JERSEYS F.C., no solo vendemos camisetas; curamos reliquias. Cada diseño es una cápsula del tiempo, una pieza de historia tejida con la pasión de millones. Revive momentos icónicos y viste el orgullo de tu equipo.
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

export default App;
