import React from 'react';

interface ToggleProps {
  activeTab: 'mej' | 'partners';
  onChange: (tab: 'mej' | 'partners') => void;
}

export const Toggle: React.FC<ToggleProps> = ({ activeTab, onChange }) => {
  return (
    <div className="relative flex rounded-[24px_0_24px_0] bg-gray-200/80 border border-gray-300/50 p-1 w-[350px] h-[75px] box-border mx-auto max-[480px]:w-full shadow-inner">
      {/* Glider (Fundo deslizante) */}
      <div
        className={`absolute top-1 left-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-white rounded-[20px_0_20px_0] shadow-md transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          activeTab === 'partners' ? 'translate-x-[calc(100%+4px)]' : 'translate-x-0'
        }`}
      />
      
      {/* Botão M.E.J */}
      <button
        type="button"
        onClick={() => onChange('mej')}
        className={`flex-1 z-10 flex justify-center items-center font-medium text-base transition-all duration-300 cursor-pointer select-none border-none outline-none rounded-[16px_0_16px_0] focus-visible:ring-2 focus-visible:ring-nuca-secondary ${
          activeTab === 'mej' ? 'text-nuca-secondary font-bold' : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        Para M.E.J.
      </button>

      {/* Botão Parceiros */}
      <button
        type="button"
        onClick={() => onChange('partners')}
        className={`flex-1 z-10 flex justify-center items-center font-medium text-base transition-all duration-300 cursor-pointer select-none border-none outline-none rounded-[0_16px_0_16px] focus-visible:ring-2 focus-visible:ring-nuca-primary ${
          activeTab === 'partners' ? 'text-nuca-primary font-bold' : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        Para Parcerias
      </button>
    </div>
  );
};
