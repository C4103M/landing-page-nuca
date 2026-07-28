import React from 'react';

interface ToggleProps {
  activeTab: 'mej' | 'partners';
  onChange: (tab: 'mej' | 'partners') => void;
}

export const Toggle: React.FC<ToggleProps> = ({ activeTab, onChange }) => {
  return (
    <div className="relative flex rounded-lg bg-[#c9c9c9] p-1 w-[350px] h-[75px] box-border mx-auto max-[480px]:w-full">
      {/* Glider (Fundo deslizante) */}
      <div
        className={`absolute top-1 left-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-white rounded-lg shadow-md transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          activeTab === 'partners' ? 'translate-x-[calc(100%+4px)]' : 'translate-x-0'
        }`}
      />
      
      {/* Botão M.E.J */}
      <button
        type="button"
        onClick={() => onChange('mej')}
        className={`flex-1 z-10 flex justify-center items-center font-medium text-base transition-colors duration-300 cursor-pointer select-none border-none outline-none ${
          activeTab === 'mej' ? 'text-nuca-secondary font-semibold' : 'text-gray-500'
        }`}
      >
        Para M.E.J.
      </button>

      {/* Botão Parceiros */}
      <button
        type="button"
        onClick={() => onChange('partners')}
        className={`flex-1 z-10 flex justify-center items-center font-medium text-base transition-colors duration-300 cursor-pointer select-none border-none outline-none ${
          activeTab === 'partners' ? 'text-nuca-primary font-semibold' : 'text-gray-500'
        }`}
      >
        Para Parcerias
      </button>
    </div>
  );
};
