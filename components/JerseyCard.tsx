
import React, { useRef, useState } from 'react';
import { Jersey } from '../types';
import useOnScreen from '../hooks/useOnScreen';
import { useI18n } from '../context/I18nContext';

interface JerseyCardProps {
  jersey: Jersey;
  animationDelay?: number;
  onVerMasClick: (jersey: Jersey) => void;
}

const JerseyCard: React.FC<JerseyCardProps> = ({ jersey, animationDelay = 0, onVerMasClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-100px');
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useI18n();

  const handleFlip = () => {
    if (!isFlipped) {
      setIsFlipped(true);
    }
  };

  const handleUnflip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
  };
  
  const handleVerMas = (e: React.MouseEvent) => {
    e.stopPropagation();
    onVerMasClick(jersey);
  }
  
  const jerseyTypeKey = `jersey_type_${jersey.type}`;

  return (
    <div
      ref={ref}
      className={`
        w-full h-64 [perspective:1000px]
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}
      `}
      style={{ transition: `opacity 0.7s ease, transform 0.7s ease`, transitionDelay: `${animationDelay}ms` }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer`}
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        onClick={handleFlip}
      >
        {/* Front Face (Details) */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-slate-800 rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-xl md:text-2xl font-bold font-serif mb-2">{jersey.teamName}</h3>
              <div className="bg-cyan-500/90 text-slate-900 font-bold px-3 py-1 rounded-full text-sm flex-shrink-0">{t(jerseyTypeKey)}</div>
            </div>
            <p className="text-sm text-slate-400 mb-4">{jersey.year} - {t(jersey.description)}</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-cyan-400/90 font-semibold text-sm animate-bounce-subtle">
              {t('jersey_card_flip_prompt')}
            </p>
            <span className="text-2xl md:text-3xl font-bold text-cyan-400">${jersey.price}</span>
          </div>
        </div>

        {/* Back Face (Image) */}
        <div 
            className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-cover bg-center rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${jersey.imageUrl})` }}
        >
            <div className="absolute inset-0 bg-black/30"></div>
            <button onClick={handleUnflip} className="absolute top-4 left-4 z-10 text-white bg-black/50 rounded-full p-1.5 hover:bg-black/80 transition-colors" aria-label={t('jersey_card_back_button_aria')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <button onClick={handleVerMas} className="absolute top-4 right-4 z-10 text-white bg-black/50 rounded-md px-3 py-1.5 text-sm font-semibold hover:bg-black/80 transition-colors">
                {t('jersey_card_details_button')}
            </button>
        </div>
      </div>
    </div>
  );
};

export default JerseyCard;
