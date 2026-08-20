import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';

import missaoIcon from '../assets/icons/missao-icon.svg';
import visaoIcon from '../assets/icons/visao-icon.svg';
import valoresIcon from '../assets/icons/valores-icon.svg';
import spMap from '../assets/mapa/sp-map.svg';
import faturamentoIcon from '../assets/icons/faturamento.svg';
import ejsIcon from '../assets/icons/ejs.svg';
import rendimentosIcon from '../assets/icons/rendimentos.svg';

import quadriculadoBg from '../assets/texturas/quadriculado.webp';

interface Pin {
  id: string;
  number: string;
  title: string;
  text: string;
  hotspot: { x: number; y: number };
  card: { left?: string; right?: string; top?: string; bottom?: string };
}

const pinsData: Pin[] = [
  {
    id: 'ies',
    number: '11',
    title: 'IES',
    text: 'Estamos em 11 instituições de ensino superior',
    hotspot: { x: 49, y: 77 },
    card: { left: '1%', top: '15%' }
  },
  {
    id: 'empresarios',
    number: '1k+',
    title: 'EMPRESÁRIOS JR',
    text: 'que integram a nossa rede',
    hotspot: { x: 46.5, y: 82.5 },
    card: { left: '1%', top: '60%' }
  },
  {
    id: 'ejs',
    number: '47',
    title: 'EJS',
    text: 'Temos 47 empresas juniores na região de campinass',
    hotspot: { x: 54.5, y: 70.5 },
    card: { right: '20%', top: '8%' }
  },
  {
    id: 'cidades',
    number: '11',
    title: 'CIDADES',
    text: 'Estamos presentes em 11 cidades',
    hotspot: { x: 58, y: 86.5 },
    card: { right: '15%', top: '81.5%' }
  }
];

export const AboutSection: React.FC = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="relative w-full bg-repeat overflow-hidden py-16 md:py-24"
      style={{ backgroundImage: `url(${quadriculadoBg})` }}
    >
      {/* Seção 2-1: Quem Somos */}
      <div className="relative w-full flex flex-col items-start px-6 sm:px-12 md:px-24 lg:px-32 max-w-[1400px] mx-auto">
        <div className="rounded-[40px_0_40px_0] border border-nuca-primary/10 bg-white/80 backdrop-blur-md max-w-[800px] mt-8 mb-16 p-8 md:p-12 shadow-sm relative z-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-rubik text-nuca-primary text-4xl sm:text-5xl font-bold mb-6 max-[450px]:text-center"
          >
            Quem somos?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-rubik text-nuca-text-dark-grey text-lg sm:text-xl font-normal leading-relaxed text-justify max-[450px]:text-center"
          >
            O{' '}
            <span className="text-nuca-secondary font-semibold">
              Núcleo Campinas
            </span>{' '}
            é a organização responsável por representar, conectar e potencializar o{' '}
            <span className="text-nuca-secondary font-semibold">
              Movimento Empresa Júnior (MEJ)
            </span>{' '}
            na região. Atuamos como um canal central entre as Empresas Juniores, o mercado e as instituições de ensino.
          </motion.p>
        </div>

        {/* Cards de Missão, Visão, Valores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-wrap justify-center items-stretch gap-12 md:gap-16 lg:gap-24 py-8"
        >
          {/* Card 1: Missão */}
          <Card
            variant="about"
            onMouseEnter={() => setHoveredCardIndex(0)}
            onMouseLeave={() => setHoveredCardIndex(null)}
            className={`bg-nuca-blue-medium border border-white/10 transition-all duration-300 rounded-[32px_0_32px_0] overflow-hidden ${
              hoveredCardIndex === 0 
                ? 'relative z-20 scale-105 shadow-xl border-white/30' 
                : hoveredCardIndex !== null 
                  ? 'relative z-10 opacity-50 scale-95' 
                  : 'relative z-20 shadow-md'
            }`}
          >
            <div className="flex flex-col justify-start items-center p-8 pt-10 text-center h-full">
              <div className="w-16 h-16 rounded-full bg-white/15 border border-white/10 flex items-center justify-center mb-6">
                <img src={missaoIcon} className="h-9 w-9 invert brightness-0" alt="Missão Icon" />
              </div>
              <h3 className="text-white font-rubik text-2xl font-bold mb-4">Missão</h3>
              <p className="text-slate-100 text-[15px] font-medium leading-relaxed">
                Formar, por meio da vivência empresarial, líderes comprometidos e capazes de transformar o Brasil em um país empreendedor.
              </p>
            </div>
          </Card>

          {/* Card 2: Visão */}
          <Card
            variant="about"
            onMouseEnter={() => setHoveredCardIndex(1)}
            onMouseLeave={() => setHoveredCardIndex(null)}
            className={`bg-nuca-teal border border-white/10 transition-all duration-300 rounded-[32px_0_32px_0] overflow-hidden ${
              hoveredCardIndex === 1 
                ? 'relative z-20 scale-105 shadow-xl border-white/30' 
                : hoveredCardIndex !== null 
                  ? 'relative z-10 opacity-50 scale-95' 
                  : 'relative z-20 shadow-md'
            }`}
          >
            <div className="flex flex-col justify-start items-center p-8 pt-10 text-center h-full">
              <div className="w-16 h-16 rounded-full bg-white/15 border border-white/10 flex items-center justify-center mb-6">
                <img src={visaoIcon} className="h-9 w-9 invert brightness-0" alt="Visão Icon" />
              </div>
              <h3 className="text-white font-rubik text-2xl font-bold mb-4">Visão</h3>
              <p className="text-slate-100 text-[15px] font-medium leading-relaxed">
                Consolidar-se como a conexão essencial entre o ambiente universitário e o mercado de trabalho, desenvolvendo as habilidades que o futuro exige.
              </p>
            </div>
          </Card>

          {/* Card 3: Valores */}
          <Card
            variant="about"
            onMouseEnter={() => setHoveredCardIndex(2)}
            onMouseLeave={() => setHoveredCardIndex(null)}
            className={`bg-nuca-blue-light border border-white/10 transition-all duration-300 rounded-[32px_0_32px_0] overflow-hidden ${
              hoveredCardIndex === 2 
                ? 'relative z-20 scale-105 shadow-xl border-white/30' 
                : hoveredCardIndex !== null 
                  ? 'relative z-10 opacity-50 scale-95' 
                  : 'relative z-20 shadow-md'
            }`}
          >
            <div className="flex flex-col justify-start items-center p-8 pt-10 text-center h-full w-full">
              <div className="w-16 h-16 rounded-full bg-white/15 border border-white/10 flex items-center justify-center mb-6">
                <img src={valoresIcon} className="h-9 w-9 invert brightness-0" alt="Valores Icon" />
              </div>
              <h3 className="text-white font-rubik text-2xl font-bold mb-5">Valores</h3>
              <div className="flex flex-col items-center gap-2.5 w-full px-4">
                {[
                  'Postura Empreendedora',
                  'Compromisso com Resultado',
                  'Educação',
                  'Juventude'
                ].map((val, idx) => (
                  <span 
                    key={idx} 
                    className="w-full bg-white/15 border border-white/20 rounded-xl py-1.5 text-xs sm:text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/25"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Seção 2-2: Onde Estamos */}
      <div className="relative w-full py-16 px-6 sm:px-12 md:px-24 z-20 flex flex-row max-[960px]:flex-col items-center justify-between gap-12 max-w-[1400px] mx-auto mt-16">
        
        {/* Mapa com Pins */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-[55%] max-[1366px]:scale-[0.88] max-[1200px]:scale-[0.8] max-[1024px]:scale-[0.72] max-[960px]:w-full max-[960px]:scale-100 flex flex-col items-center relative origin-center transition-all duration-300"
        >
          <div className="w-full text-left max-[960px]:text-center px-4 mb-8">
            <h2 className="text-nuca-primary font-rubik text-4xl sm:text-5xl font-bold leading-tight">
              Onde estamos?
            </h2>
          </div>

          <div className="relative w-full aspect-[735/442] max-w-[850px] shrink-0">
            <img src={spMap} className="w-full h-full object-contain" alt="Mapa SP" />
            
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              {pinsData.map((pin) => {
                let pathD = '';
                if (pin.id === 'ies') {
                  pathD = 'M 11 20 H 44 Q 49 20, 49 29 V 77';
                } else if (pin.id === 'empresarios') {
                  pathD = 'M 11 65 H 41.5 Q 46.5 65, 46.5 74 V 82.5';
                } else if (pin.id === 'ejs') {
                  pathD = 'M 54.5 70.5 H 71 Q 76 70.5, 76 61.5 V 13';
                } else if (pin.id === 'cidades') {
                  pathD = 'M 77 86.5 H 58';
                }
                return (
                  <path
                    key={pin.id}
                    d={pathD}
                    fill="none"
                    stroke="#111111"
                    strokeWidth="0.45"
                  />
                );
              })}
            </svg>

            {pinsData.map((pin) => (
              <div
                key={pin.id}
                className="absolute w-3.5 h-3.5 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center bg-white border border-[#1e60a3] rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.5] hover:border-nuca-secondary hover:shadow-[0_0_8px_rgba(0,176,129,0.8)] cursor-pointer"
                style={{ left: `${pin.hotspot.x}%`, top: `${pin.hotspot.y}%` }}
              >
                <div className="w-1.5 h-1.5 bg-[#1e60a3] rounded-full" />
              </div>
            ))}

            {pinsData.map((pin) => {
              const isLeft = pin.id === 'ies' || pin.id === 'empresarios';
              return (
                <div
                  key={pin.id}
                  className="absolute z-30 animate-none"
                  style={{
                    ...pin.card,
                  }}
                >
                  <div className="relative w-10 h-10 md:w-[52px] md:h-[52px] lg:w-[72px] lg:h-[72px] rounded-[10px] md:rounded-[12px] lg:rounded-[16px] border border-[#1e60a3]/50 md:border-2 bg-white flex items-center justify-center shadow-md hover:border-nuca-secondary transition-colors duration-300">
                    <span className="text-[#1c1c1c] font-rubik font-bold text-xs md:text-lg lg:text-2xl">
                      {pin.number}
                    </span>

                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-[105px] lg:w-[135px] hidden md:flex flex-col ${
                        isLeft ? 'right-full mr-3 lg:mr-4 items-end text-right' : 'left-full ml-3 lg:ml-4 items-start text-left'
                      }`}
                    >
                      <span className="text-[#1e60a3] font-rubik text-[13px] lg:text-base font-bold tracking-wide leading-none uppercase">
                        {pin.title}
                      </span>
                      <span className="text-slate-500 font-rubik text-[10px] lg:text-[11px] font-normal leading-tight mt-1.5">
                        {pin.text}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full mt-10 grid grid-cols-2 max-[550px]:grid-cols-1 gap-6 md:hidden px-4">
            {pinsData.map((pin) => (
              <div
                key={pin.id}
                className="flex items-center gap-4 bg-white/95 border border-[#1e60a3]/20 rounded-[16px] p-4 shadow-sm w-full"
              >
                <div className="w-14 h-14 rounded-[12px] border-2 border-[#1e60a3] bg-white flex items-center justify-center shrink-0">
                  <span className="text-[#1c1c1c] font-rubik font-bold text-lg">
                    {pin.number}
                  </span>
                </div>
                <div className="text-left leading-tight">
                  <span className="text-[#1e60a3] font-rubik text-base font-bold tracking-wide block uppercase leading-none">
                    {pin.title}
                  </span>
                  <span className="text-slate-500 font-rubik text-[11px] font-normal leading-relaxed block mt-1">
                    {pin.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 30, x: 20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-[40%] max-[1200px]:w-[45%] max-[960px]:w-full flex justify-center items-center flex-col"
        >
          {/* Cartão de Faturamento / EJs / Impacto */}
          <div className="w-full max-w-[484px] min-h-[447px] bg-nuca-secondary rounded-[64px_0_64px_0] flex flex-col justify-center p-8 md:p-12 shadow-lg">
            <div className="space-y-8">
              {[
                { label: 'Faturamento', value: '+2,2', unit: 'milhões de R$', icon: faturamentoIcon },
                { label: 'Empresas Juniores', value: '+45', unit: 'empresas jr', icon: ejsIcon },
                { label: 'Projetos de impacto', value: '+20', unit: 'empresas parceiras', icon: rendimentosIcon },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
                    <img src={item.icon} className="h-7 w-7" alt={item.label} />
                  </div>
                  <div className="flex-1 flex flex-col text-left">
                    <span className="text-white/80 font-rubik text-xs font-semibold uppercase tracking-wider leading-none">
                      {item.label}
                    </span>
                    <div className="flex items-baseline flex-wrap gap-1.5 mt-1.5">
                      <span className="font-rubik text-3xl sm:text-4xl font-bold leading-none">
                        {item.value}
                      </span>
                      <span className="font-rubik text-sm sm:text-base font-medium opacity-90 leading-none">
                        {item.unit}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
