import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import logoNuca from '../assets/icons/logo-nuca.svg';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Compensação da altura do cabeçalho
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header 
        className={`w-full h-[80px] fixed top-0 left-0 flex items-center justify-between px-6 md:px-12 lg:px-24 transition-all duration-300 z-50 ${
          scrolled 
            ? 'bg-nuca-primary-dark/90 backdrop-blur-md border-b border-white/10 shadow-lg' 
            : 'bg-nuca-primary-dark border-b border-transparent shadow-md'
        }`}
      >
        {/* Logo */}
        <img
          src={logoNuca}
          alt="Núcleo Campinas Logo"
          className="w-[150px] sm:w-[185px] h-[58px] sm:h-[72px] shrink-0 object-contain cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-16">
          <button 
            onClick={() => handleScroll('about')} 
            className="text-[#FFF9F9] font-rubik text-base font-semibold hover:text-nuca-secondary focus:text-nuca-secondary outline-none focus-visible:ring-2 focus-visible:ring-nuca-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-nuca-primary-dark rounded px-2 py-1 transition-all duration-200 cursor-pointer bg-transparent border-none"
          >
            Sobre nós
          </button>
          <button 
            onClick={() => handleScroll('services')} 
            className="text-[#FFF9F9] font-rubik text-base font-semibold hover:text-nuca-secondary focus:text-nuca-secondary outline-none focus-visible:ring-2 focus-visible:ring-nuca-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-nuca-primary-dark rounded px-2 py-1 transition-all duration-200 cursor-pointer bg-transparent border-none"
          >
            Serviços
          </button>
          <button 
            onClick={() => handleScroll('parceiros')} 
            className="text-[#FFF9F9] font-rubik text-base font-semibold hover:text-nuca-secondary focus:text-nuca-secondary outline-none focus-visible:ring-2 focus-visible:ring-nuca-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-nuca-primary-dark rounded px-2 py-1 transition-all duration-200 cursor-pointer bg-transparent border-none"
          >
            Parceiros
          </button>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Button
            variant="header"
            onClick={() => handleScroll('contact')}
          >
            <span className="text-white font-inter text-base font-semibold">
              Contate-nos
            </span>
          </Button>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex md:hidden items-center gap-4">
          <Button
            variant="header"
            onClick={() => handleScroll('contact')}
            className="h-[36px] px-3.5 rounded-lg text-xs"
          >
            <span className="text-white font-inter text-[13px] font-semibold">
              Contato
            </span>
          </Button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
            className="text-[#FFF9F9] hover:text-nuca-secondary focus-visible:ring-2 focus-visible:ring-nuca-secondary rounded p-1.5 transition-all duration-200 cursor-pointer bg-transparent border-none outline-none animate-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-[80px] left-0 w-full bg-nuca-primary-dark/95 backdrop-blur-lg border-b border-white/10 shadow-2xl z-40 md:hidden flex flex-col px-6 py-8 gap-6"
          >
            <button
              onClick={() => handleScroll('about')}
              className="text-[#FFF9F9] font-rubik text-lg font-semibold text-left py-2 hover:text-nuca-secondary focus:text-nuca-secondary transition-colors duration-200 bg-transparent border-none cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-nuca-secondary rounded px-2"
            >
              Sobre nós
            </button>
            <button
              onClick={() => handleScroll('services')}
              className="text-[#FFF9F9] font-rubik text-lg font-semibold text-left py-2 hover:text-nuca-secondary focus:text-nuca-secondary transition-colors duration-200 bg-transparent border-none cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-nuca-secondary rounded px-2"
            >
              Serviços
            </button>
            <button
              onClick={() => handleScroll('parceiros')}
              className="text-[#FFF9F9] font-rubik text-lg font-semibold text-left py-2 hover:text-nuca-secondary focus:text-nuca-secondary transition-colors duration-200 bg-transparent border-none cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-nuca-secondary rounded px-2"
            >
              Parceiros
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
