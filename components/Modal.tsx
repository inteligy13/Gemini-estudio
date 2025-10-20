import React from 'react';
import { Jersey } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  jersey: Jersey | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, jersey }) => {
  if (!isOpen || !jersey) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 rounded-xl shadow-2xl shadow-cyan-500/10 p-6 md:p-8 m-4 max-w-md w-full relative transform transition-all duration-300 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
        style={{ animationDuration: '0.5s' }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16 mx-auto text-cyan-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          <h2 className="text-xl md:text-2xl font-bold font-serif text-white mb-2">¡Añadido!</h2>
          <p className="text-slate-300 mb-6">Has añadido la camiseta a tu carrito.</p>
          <div className="bg-slate-900 rounded-lg p-4 text-left flex items-center space-x-4">
             <img src={jersey.imageUrl} alt={jersey.teamName} className="w-16 h-20 md:w-20 md:h-24 object-cover rounded-md"/>
             <div>
                <h3 className="font-bold text-base md:text-lg text-white">{jersey.teamName} ({jersey.year})</h3>
                <p className="text-sm text-slate-400">{jersey.type}</p>
                <p className="text-cyan-400 font-bold text-lg md:text-xl mt-1">${jersey.price}</p>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="w-full mt-8 bg-cyan-500 text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
          >
            Seguir Comprando
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;