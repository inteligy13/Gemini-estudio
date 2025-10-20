
import React, { ReactNode } from 'react';

interface ParallaxSectionProps {
  imageUrl: string;
  children: ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ imageUrl, children }) => {
  return (
    <div className="h-96 md:h-[60vh] relative">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;