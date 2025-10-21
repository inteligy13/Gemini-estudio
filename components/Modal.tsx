import React from 'react';
import { Jersey } from '../types';
import { useTranslations } from '../context/I18nContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  jersey: Jersey | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, jersey }) => {
  const translations = useTranslations();
  
  if (!isOpen || !jersey) return null;

  const jerseyTypeKey = `jersey_type_${jersey.type}` as keyof typeof translations;
  const descriptionKey = jersey.description as keyof typeof translations;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 rounded-xl shadow-2xl shadow-cyan-500/10 m-4 max-w-lg w-full relative transform transition-all duration-300 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
        style={{ animationDuration: '0.5s' }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10" aria-label={translations.modal_close_button_aria}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div>
          <img src={jersey.imageUrl} alt={jersey.teamName} className="w-full h-80 object-cover rounded-t-xl"/>
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-white">{jersey.teamName} <span className="text-slate-400 text-xl">({jersey.year})</span></h2>
              <div className="bg-cyan-500/90 text-slate-900 font-bold px-3 py-1 rounded-full text-sm flex-shrink-0">{translations[jerseyTypeKey]}</div>
            </div>
            <p className="text-slate-300 mb-6">{translations[descriptionKey]}</p>
            <div className="text-right">
              <span className="text-3xl md:text-4xl font-bold text-cyan-400">${jersey.price}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Modal;