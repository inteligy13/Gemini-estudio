import React, { useRef } from 'react';
import { Jersey } from '../types';
import useOnScreen from '../hooks/useOnScreen';

interface JerseyCardProps {
  jersey: Jersey;
  onBuyClick: (jersey: Jersey) => void;
  animationDelay?: number;
}

const JerseyCard: React.FC<JerseyCardProps> = ({ jersey, onBuyClick, animationDelay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-100px');

  return (
    <div 
      ref={ref}
      className={`bg-slate-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-cyan-500/20 hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      <div className="relative">
        <img src={jersey.imageUrl} alt={jersey.teamName} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-4 right-4 bg-cyan-500/90 text-slate-900 font-bold px-3 py-1 rounded-full text-sm">{jersey.type}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold font-serif mb-2">{jersey.teamName}</h3>
        <p className="text-sm text-slate-400 mb-4 h-10">{jersey.year} - {jersey.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl md:text-3xl font-bold text-cyan-400">${jersey.price}</span>
          <button 
            onClick={() => onBuyClick(jersey)}
            className="bg-slate-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-slate-900">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default JerseyCard;