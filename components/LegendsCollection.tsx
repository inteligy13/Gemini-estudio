import React from 'react';
import { LEGENDS_DATA } from '../constants';
import JerseyCard from './JerseyCard';
import { Jersey } from '../types';

interface LegendsCollectionProps {
  onVerMasClick: (jersey: Jersey) => void;
}

const LegendsCollection: React.FC<LegendsCollectionProps> = ({ onVerMasClick }) => {
  return (
    <div className="flex space-x-4 md:space-x-8 overflow-x-auto p-4 -m-4 scrollbar-hide">
      {LEGENDS_DATA.map((jersey, index) => (
        <div key={jersey.id} className="flex-shrink-0 w-56 md:w-64">
          <JerseyCard 
            jersey={jersey} 
            animationDelay={index * 200}
            onVerMasClick={onVerMasClick}
          />
        </div>
      ))}
    </div>
  );
};

// A little helper to hide scrollbars if needed, although Tailwind plugins often handle this.
const style = document.createElement('style');
style.innerHTML = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);


export default LegendsCollection;