import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedJerseys from './components/FeaturedJerseys';
import LegendsCollection from './components/LegendsCollection';
import ParallaxSection from './components/ParallaxSection';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { Jersey } from './types';

const App: React.FC = () => {
  const [selectedJersey, setSelectedJersey] = useState<Jersey | null>(null);

  const handleBuyClick = (jersey: Jersey) => {
    setSelectedJersey(jersey);
  };

  const handleCloseModal = () => {
    setSelectedJersey(null);
  };

  return (
    <div className="bg-slate-900 text-white">
      <Header />
      <main>
        <Hero />
        
        <section id="colecciones" className="py-16 sm:py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-center mb-4">
              Nuevas <span className="text-cyan-400">Colecciones</span>
            </h2>
            <p className="text-base md:text-lg text-slate-400 text-center max-w-2xl mx-auto mb-10 md:mb-12">
              Explora los últimos diseños que están marcando tendencia en el campo de juego. Tecnología y estilo en cada fibra.
            </p>
            <FeaturedJerseys onBuyClick={handleBuyClick} />
          </div>
        </section>

        <ParallaxSection imageUrl="https://picsum.photos/seed/parallax-banner/1920/1080">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif">Inmortaliza Tu Pasión</h2>
            <p className="text-base md:text-xl mt-4 max-w-xl">Desde los clásicos eternos hasta las joyas olvidadas.</p>
          </div>
        </ParallaxSection>

        <section id="leyendas" className="py-16 sm:py-20 md:py-28 bg-slate-950/50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-center mb-4">
              Jerseys de <span className="text-cyan-400">Leyenda</span>
            </h2>
            <p className="text-base md:text-lg text-slate-400 text-center max-w-2xl mx-auto mb-10 md:mb-12">
              Revive momentos históricos con réplicas exactas de las camisetas que vistieron los más grandes.
            </p>
            <LegendsCollection onBuyClick={handleBuyClick} />
          </div>
        </section>

      </main>
      <Footer />
      <Modal 
        isOpen={selectedJersey !== null} 
        onClose={handleCloseModal} 
        jersey={selectedJersey} 
      />
    </div>
  );
};

export default App;