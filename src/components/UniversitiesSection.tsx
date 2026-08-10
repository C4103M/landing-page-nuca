import React, { useState } from 'react';
import { motion } from 'framer-motion';
import papelTexture from '../assets/texturas/textura-de-papel-branco-2.webp';

// Importações estáticas dos logotipos para garantir que o Vite empacote e carregue todos com sucesso
import unicampLogo from '../assets/universidades-parceiras/unicamp.webp';
import ufscarLogo from '../assets/universidades-parceiras/ufscar.webp';
import uspLogo from '../assets/universidades-parceiras/usp.webp';
import unespLogo from '../assets/universidades-parceiras/unesp.webp';
import mackenzieLogo from '../assets/universidades-parceiras/mackenzie.webp';
import facampLogo from '../assets/universidades-parceiras/facamp.webp';
import ifspLogo from '../assets/universidades-parceiras/ifsp.webp';
import mandicLogo from '../assets/universidades-parceiras/mandic.webp';
import fmjLogo from '../assets/universidades-parceiras/fmj.webp';
import fkbLogo from '../assets/universidades-parceiras/fkb.webp';
import fesbLogo from '../assets/universidades-parceiras/fesb.webp';

interface University {
  id: string;
  shortName: string;
  fullName: string;
  logo: string;
}

const universities: University[] = [
  { id: 'unicamp', shortName: 'UNICAMP', fullName: 'Universidade Estadual de Campinas', logo: unicampLogo },
  { id: 'ufscar', shortName: 'UFSCar', fullName: 'Universidade Federal de São Carlos', logo: ufscarLogo },
  { id: 'usp', shortName: 'USP', fullName: 'Universidade de São Paulo', logo: uspLogo },
  { id: 'unesp', shortName: 'UNESP', fullName: 'Universidade Estadual Paulista', logo: unespLogo },
  { id: 'mackenzie', shortName: 'Mackenzie', fullName: 'Universidade Presbiteriana Mackenzie', logo: mackenzieLogo },
  { id: 'facamp', shortName: 'FACAMP', fullName: 'Faculdades de Campinas', logo: facampLogo },
  { id: 'ifsp', shortName: 'IFSP', fullName: 'Instituto Federal de São Paulo', logo: ifspLogo },
  { id: 'mandic', shortName: 'SLMandic', fullName: 'Faculdade São Leopoldo Mandic', logo: mandicLogo },
  { id: 'fmj', shortName: 'FMJ', fullName: 'Faculdade de Medicina de Jundiaí', logo: fmjLogo },
  { id: 'fkb', shortName: 'FKB', fullName: 'Fundação Karnig Bazarian', logo: fkbLogo },
  { id: 'fesb', shortName: 'FESB', fullName: 'Fundação de Ensino Superior de Bragança Paulista', logo: fesbLogo },
];

export const UniversitiesSection: React.FC = () => {
  // Acompanhar quais imagens falharam no carregamento para exibir o fallback de texto
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  // Variantes de animação para os cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section 
      id="universidades" 
      className="relative w-full bg-repeat py-20 px-8 box-border overflow-hidden border-t border-gray-200/50"
      style={{ backgroundImage: `url(${papelTexture})` }}
    >
      {/* Soft gradient overlay to blend background paper texture and keep high readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f1efef]/75 via-[#f8fafc]/85 to-white/75 pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-[800px] mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-nuca-secondary text-sm font-bold uppercase tracking-widest block mb-3"
          >
            Presença Acadêmica
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#131516] font-rubik text-3xl sm:text-4xl font-semibold mb-4 leading-tight"
          >
            De onde vêm nossos talentos?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-nuca-text-dark-grey font-rubik text-lg sm:text-xl font-normal leading-relaxed"
          >
            Conectamos e desenvolvemos estudantes das principais instituições de ensino superior da região de Campinas, unindo a excelência acadêmica ao mercado de trabalho.
          </motion.p>
        </div>

        {/* Grid de Universidades */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full justify-center items-center"
        >
          {universities.map((uni) => {
            const hasError = imageErrors[uni.id];
            
            return (
              <motion.div
                key={uni.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 12px 24px -10px rgba(0, 0, 0, 0.08), 0 8px 16px -8px rgba(0, 0, 0, 0.08)'
                }}
                className="bg-white border border-gray-200/80 rounded-[20px_0_20px_0] h-[100px] flex items-center justify-center p-4 text-center cursor-pointer transition-all duration-300 select-none group relative overflow-hidden hover:border-nuca-secondary/40"
                title={uni.fullName}
              >
                {!hasError ? (
                  <img
                    src={uni.logo}
                    alt={`Logo ${uni.shortName}`}
                    onError={() => handleImageError(uni.id)}
                    className="max-w-full max-h-[70px] object-contain transition-all duration-300 group-hover:scale-105 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                ) : (
                  // Fallback elegante caso a imagem não exista ou falhe ao carregar
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <span className="text-nuca-primary font-bold text-lg font-rubik tracking-wide group-hover:text-nuca-secondary transition-colors duration-200">
                      {uni.shortName}
                    </span>
                    <span className="text-[10px] text-nuca-text-dark-grey mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 line-clamp-1">
                      {uni.fullName}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
