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
      <div className="absolute right-0 top-0 w-[60%] h-full z-10 max-[1280px]:w-full max-[1280px]:h-full max-[1280px]:z-0 pointer-events-none overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'linear' }}
            style={{
              '--slide-img': `url(${slideshowImages[currentImageIndex]})`,
            } as React.CSSProperties}
            className="absolute inset-0 hero-slide-img"
          />
        </AnimatePresence>
      </div>

      {/* Preenchimento para compensar a altura do Header */}
      <div className="w-full h-[80px] shrink-0" />

      {/* Conteúdo Principal */}
      <div className="relative w-full flex-1 flex items-center z-20 box-border px-6 sm:px-12 md:px-24">
        {/* Texto com Animações Framer Motion */}
        <div className="relative z-30 flex flex-col items-start max-w-[650px] max-[1280px]:items-center max-[1280px]:text-center max-[1280px]:max-w-full max-[1280px]:mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-rubik text-4xl sm:text-5xl md:text-[56px] font-bold leading-tight tracking-tight max-w-[620px]"
          >
            Líderes que transformam o Brasil
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/90 font-rubik text-lg sm:text-xl font-normal mt-4 mb-8 max-w-[500px]"
          >
            Transformamos o potencial em potência
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full sm:w-auto"
          >
            <Button
              variant="primary"
              onClick={handleContactScroll}
              className="w-full sm:w-[220px] h-[52px] rounded-xl hover:shadow-lg hover:shadow-nuca-secondary/35 text-base"
            >
              <span className="text-white font-inter font-semibold">
                Entre em contato
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
