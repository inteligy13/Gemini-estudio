import React from 'react';
import { JERSEYS_DATA } from '../constants';
import JerseyCard from './JerseyCard';
import { Jersey } from '../types';

interface FeaturedJerseysProps {
  onVerMasClick: (jersey: Jersey) => void;
}

const FeaturedJerseys: React.FC<FeaturedJerseysProps> = ({ onVerMasClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {JERSEYS_DATA.map((jersey, index) => (
        <JerseyCard 
          key={jersey.id} 
          jersey={jersey} 
          animationDelay={index * 150}
          onVerMasClick={onVerMasClick} 
        />
      ))}
    </div>
  );
};

export default FeaturedJerseys;
