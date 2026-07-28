import React from 'react';
import { Button } from './ui/Button';
import logoNuca from '../assets/logo-nuca.png';

export const Header: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="flex w-full h-[80px] justify-center items-center gap-[88px] fixed top-0 left-0 bg-nuca-primary-dark shadow-md z-50 max-[884px]:gap-[35px] max-[428px]:justify-around max-[428px]:gap-2.5">
      <img
        src={logoNuca}
        alt="logo-nuca"
        className="w-[185px] h-[72px] shrink-0 aspect-[185/72] cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
      <nav className="flex gap-[88px] max-[884px]:gap-[35px] max-[428px]:hidden">
        <p className="text-[#FFF9F9] font-rubik text-base font-semibold hover:text-nuca-secondary transition-colors duration-200">
          <button onClick={() => handleScroll('about')} className="bg-transparent border-none cursor-pointer">
            Sobre nós
          </button>
        </p>
        <p className="text-[#FFF9F9] font-rubik text-base font-semibold hover:text-nuca-secondary transition-colors duration-200">
          <button onClick={() => handleScroll('services')} className="bg-transparent border-none cursor-pointer">
            Serviços
          </button>
        </p>
        <p className="text-[#FFF9F9] font-rubik text-base font-semibold hover:text-nuca-secondary transition-colors duration-200">
          <button onClick={() => handleScroll('parceiros')} className="bg-transparent border-none cursor-pointer">
            Parceiros
          </button>
        </p>
      </nav>
      <Button
        variant="header"
        onClick={() => handleScroll('contact')}
        className="max-[428px]:w-[100px] max-[428px]:h-[20px]"
      >
        <p className="text-white font-inter text-base font-semibold max-[428px]:text-[10px]">
          Entre em contato
        </p>
      </Button>
    </header>
  );
};
