import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';

import heroImg1 from '../assets/sec1-carrousel/image1.webp';
import heroImg2 from '../assets/sec1-carrousel/image2.webp';
import heroImg3 from '../assets/sec1-carrousel/image3.webp';
import heroImg4 from '../assets/sec1-carrousel/image4.webp';
import heroImg5 from '../assets/sec1-carrousel/image5.webp';

const slideshowImages = [
  heroImg1,
  heroImg2,
  heroImg3,
  heroImg4,
  heroImg5,
];

export const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleContactScroll = () => {
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-nuca-primary to-nuca-primary-dark flex flex-col justify-center overflow-hidden">
      {/* Slideshow de Imagens (Direto sob a section para ocupar 100% da altura da tela, eliminando a margem superior) */}
      <div className="absolute right-0 top-0 w-[60%] h-full z-10 max-[1280px]:w-full max-[1280px]:opacity-30 max-[1280px]:h-full max-[1280px]:z-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{
              backgroundImage: `url(${slideshowImages[currentImageIndex]})`,
              maskImage: 'linear-gradient(to right, transparent, black 40%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)',
            }}
            className="absolute inset-0 bg-cover bg-right-bottom"
          />
        </AnimatePresence>
      </div>

      {/* Preenchimento para compensar a altura do Header */}
      <div className="w-full h-[80px] shrink-0" />

      {/* Conteúdo Principal */}
      <div className="relative w-full flex-1 flex items-center z-20 box-border px-8 max-[1280px]:px-4">
        {/* Texto com Animações Framer Motion */}
        <div className="relative z-30 flex flex-col items-start max-w-[650px] ml-[150px] max-[1280px]:ml-10 max-[768px]:ml-4 max-[1280px]:items-center max-[1280px]:text-center max-[1280px]:max-w-full">
          <motion.h1
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-[#FFF9F9] font-rubik text-[48px] font-semibold leading-[140%] w-[609px] max-[450px]:w-full max-[450px]:text-[32px] max-[320px]:text-[25px] max-[320px]:[text-stroke:0.5px_black]"
          >
            Líderes que transformam o Brasil
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-[#FFF9F9] font-rubik text-[20px] font-normal mt-4 mb-8 max-[320px]:text-[18px]"
          >
            Transformamos o potencial em potência
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="max-[320px]:hidden"
          >
            <Button
              variant="primary"
              onClick={handleContactScroll}
              className="w-[198px] h-[48px]"
            >
              <span className="text-white font-inter text-base font-semibold">
                Entre em contato
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
