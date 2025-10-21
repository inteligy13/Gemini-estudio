import React, { useState, useEffect, useCallback } from 'react';

const WelcomeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('welcome-modal-open');

      const timer = setTimeout(() => {
        handleClose();
      }, 10000);

      return () => {
        clearTimeout(timer);
        // Only remove styles if no other modal is open
        const detailModalIsOpen = document.querySelector('.fixed.inset-0.z-50');
        if (!detailModalIsOpen) {
            document.body.style.overflow = 'unset';
        }
        document.body.classList.remove('welcome-modal-open');
      };
    } else {
       document.body.classList.remove('welcome-modal-open');
       document.body.style.overflow = 'unset';
    }
  }, [isOpen, handleClose]);


  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 animate-fade-in flex items-center justify-center"
    >
      <div 
        className="
          relative bg-cover bg-center bg-slate-900 shadow-2xl shadow-cyan-500/10 rounded-2xl animate-fade-in-up overflow-hidden
          
          /* Mobile styles (default) */
          w-[90%] max-w-sm h-[80%] max-h-[600px]
          
          /* Tablet styles (md breakpoint) */
          md:max-w-md md:max-h-[700px]

          /* PC styles (lg breakpoint) */
          lg:max-w-lg lg:max-h-[750px]
        "
        style={{ 
            backgroundImage: `url('https://cdn.gamma.app/egjpqwwxfvherxn/fd044fb1aa594c2a99f2d62b8c219631/optimized/Fondo-canta-corazon-optimizado.gif')`,
            animationDuration: '0.6s' 
        }}
      >
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 bg-red-600 rounded-full p-1.5 hover:bg-red-500 transition-colors z-10"
          aria-label="Cerrar modal de bienvenida"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Timer Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-700/50">
            <div className="h-full bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
