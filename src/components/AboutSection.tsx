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
    number: '14',
    title: 'IES',
    text: 'Estamos em 14 instituições de ensino superior',
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
    number: '45',
    title: 'EJS',
    text: 'Temos 45 empresas juniores na região de campinass',
    hotspot: { x: 54.5, y: 70.5 },
    card: { right: '20%', top: '8%' }
  },
  {
    id: 'cidades',
    number: '12',
    title: 'CIDADES',
    text: 'Estamos presentes em 12 cidades',
    hotspot: { x: 58, y: 86.5 },
    card: { right: '15%', top: '81.5%' }
  }
];

export const AboutSection: React.FC = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const isCardHovered = hoveredCardIndex !== null;

  return (
    <section
      id="about"
      className="relative w-full min-h-[200vh] bg-repeat overflow-hidden py-16 max-[450px]:min-h-0 max-[450px]:py-8"
      style={{ backgroundImage: `url(${quadriculadoBg})` }}
    >
      {/* Dark overlay with blur when a card is hovered */}
      <div
        className={`fixed inset-0 bg-black/35 backdrop-blur-[2px] transition-all duration-300 pointer-events-none z-30 ${
          isCardHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Seção 2-1: Quem Somos */}
      <div className="relative w-full min-h-[60vh] flex flex-col items-start px-24 max-[1280px]:px-12 max-[450px]:px-4 max-[450px]:items-center">
        <div
          className={`transition-all duration-300 rounded-[50px_0_50px_0] max-w-[700px] mt-24 max-[450px]:mt-10 mb-12 -ml-6 p-6 max-[450px]:ml-0 max-[450px]:px-4 relative z-40 ${
            isCardHovered 
              ? 'bg-nuca-secondary text-white shadow-xl' 
              : 'bg-transparent text-nuca-primary'
          }`}
        >
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`font-rubik text-[48px] font-semibold leading-[140%] mb-4 max-[450px]:text-[32px] max-[320px]:text-[26px] max-[450px]:text-center transition-colors duration-300 ${
              isCardHovered ? 'text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]' : 'text-nuca-primary'
            }`}
          >
            Quem somos?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className={`font-rubik text-[20px] font-semibold leading-[140%] text-justify max-[320px]:text-[18px] transition-colors duration-300 ${
              isCardHovered ? 'text-white' : 'text-nuca-primary'
            }`}
          >
            O{' '}
            <span
              className={`font-bold transition-colors duration-300 ${
                isCardHovered ? 'text-nuca-primary-dark font-extrabold' : 'text-nuca-secondary'
              }`}
            >
              Núcleo Campinas
            </span>{' '}
            é a organização responsável por representar, conectar e potencializar o{' '}
            <span
              className={`font-bold transition-colors duration-300 ${
                isCardHovered ? 'text-nuca-primary-dark font-extrabold' : 'text-nuca-secondary'
              }`}
            >
              Movimento Empresa Júnior (MEJ)
            </span>{' '}
            na região. Atuamos como um canal central entre as Empresas Juniores, o mercado e as instituições de ensino.
          </motion.p>
        </div>

        {/* Cards de Missão, Visão, Valores */}
        <motion.div
          initial={{ opacity: 0, rotateX: 80 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full flex flex-wrap justify-center items-stretch max-[450px]:items-center gap-[40px] py-8 px-4 max-[1280px]:gap-[24px] max-[450px]:flex-col max-[450px]:gap-8"
        >
          {/* Card 1: Missão */}
          <Card
            variant="about"
            onMouseEnter={() => setHoveredCardIndex(0)}
            onMouseLeave={() => setHoveredCardIndex(null)}
            className={`bg-nuca-blue-medium transition-all duration-300 ${
              hoveredCardIndex === 0 
                ? 'relative z-40 scale-105 shadow-2xl ring-4 ring-white/10' 
                : hoveredCardIndex !== null 
                  ? 'relative z-10 opacity-30 scale-95 blur-[1px]' 
                  : 'relative z-30'
            }`}
          >
            <div className="flex flex-col justify-center items-center p-6 text-center">
              <img src={missaoIcon} className="h-16 mb-4" alt="Missão Icon" />
              <p className="text-white font-rubik text-2xl font-semibold leading-[140%] mb-4">Missão</p>
              <div className="w-[235px] min-h-[153px] rounded-[24px] bg-[#f3f3f3] flex items-center justify-center p-4">
                <p className="text-nuca-primary text-[14.5px] font-semibold leading-[125%] text-center px-1">
                  Formar, por meio da vivência empresarial, líderes comprometidos e capazes de transformar o brasil em um país empreendedor.
                </p>
              </div>
            </div>
          </Card>

          {/* Card 2: Visão */}
          <Card
            variant="about"
            onMouseEnter={() => setHoveredCardIndex(1)}
            onMouseLeave={() => setHoveredCardIndex(null)}
            className={`bg-nuca-teal transition-all duration-300 ${
              hoveredCardIndex === 1 
                ? 'relative z-40 scale-105 shadow-2xl ring-4 ring-white/10' 
                : hoveredCardIndex !== null 
                  ? 'relative z-10 opacity-30 scale-95 blur-[1px]' 
                  : 'relative z-30'
            }`}
          >
            <div className="flex flex-col justify-center items-center p-6 text-center">
              <img src={visaoIcon} className="h-16 mb-4" alt="Visão Icon" />
              <p className="text-white font-rubik text-2xl font-semibold leading-[140%] mb-4">Visão</p>
              <div className="w-[235px] min-h-[153px] rounded-[24px] bg-[#f3f3f3] flex items-center justify-center p-4">
                <p className="text-nuca-primary text-[14.5px] font-semibold leading-[125%] text-center px-1">
                  Consolidar-se como a conexão essencial entre o ambiente universitário e o mercado de trabalho, desenvolvendo as habilidades que o futuro exige.
                </p>
              </div>
            </div>
          </Card>

          {/* Card 3: Valores */}
          <Card
            variant="about"
            onMouseEnter={() => setHoveredCardIndex(2)}
            onMouseLeave={() => setHoveredCardIndex(null)}
            className={`bg-nuca-blue-light transition-all duration-300 ${
              hoveredCardIndex === 2 
                ? 'relative z-40 scale-105 shadow-2xl ring-4 ring-white/10' 
                : hoveredCardIndex !== null 
                  ? 'relative z-10 opacity-30 scale-95 blur-[1px]' 
                  : 'relative z-30'
            }`}
          >
            <div className="flex flex-col justify-center items-center p-6 text-center">
              <img src={valoresIcon} className="h-16 mb-4" alt="Valores Icon" />
              <p className="text-white font-rubik text-2xl font-semibold leading-[140%] mb-4">Valores</p>
              <div className="w-[235px] min-h-[153px] rounded-[24px] bg-[#f3f3f3] flex items-center justify-center p-4">
                <ul className="text-nuca-primary text-[13.5px] font-semibold leading-[120%] list-disc text-left pl-4 space-y-1">
                  <li className="marker:text-nuca-secondary marker:text-[1.7em]">Postura Empreendedora</li>
                  <li className="marker:text-nuca-secondary marker:text-[1.7em]">Compromisso com Resultado</li>
                  <li className="marker:text-nuca-secondary marker:text-[1.7em]">Educação</li>
                  <li className="marker:text-nuca-secondary marker:text-[1.7em]">Juventude</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Seção 2-2: Onde Estamos */}
      <div className="relative w-full py-16 px-8 max-[960px]:px-4 z-20 flex flex-row max-[960px]:flex-col items-center justify-between gap-12 max-[1280px]:gap-6 max-w-[1280px] mx-auto mt-16 max-[450px]:mt-8">
        
        {/* Mapa com Pins */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-[55%] max-[1366px]:scale-[0.88] max-[1200px]:scale-[0.8] max-[1024px]:scale-[0.72] max-[960px]:w-full max-[960px]:scale-100 flex flex-col items-center relative origin-center transition-all duration-300"
        >
          <div className="w-full text-left max-[960px]:text-center px-4 mb-8">
            <h1 className="text-nuca-primary font-rubik text-[48px] max-[960px]:text-3xl font-semibold leading-[140%]">
              Onde estamos?
            </h1>
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
                className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center bg-white border border-[#1e60a3] rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.6] hover:border-nuca-secondary hover:shadow-[0_0_8px_rgba(30,96,163,0.6)] cursor-pointer"
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
                  className="absolute z-30"
                  style={{
                    ...pin.card,
                  }}
                >
                  <div className="relative w-10 h-10 md:w-[52px] md:h-[52px] lg:w-[72px] lg:h-[72px] rounded-[10px] md:rounded-[12px] lg:rounded-[16px] border border-[#1e60a3] md:border-2 bg-white flex items-center justify-center shadow-sm">
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
                      <span className="text-[#334155] font-rubik text-[10px] lg:text-[11px] font-normal leading-tight mt-1.5">
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
                className="flex items-center gap-4 bg-white/95 border-2 border-[#1e60a3]/30 rounded-[16px] p-4 shadow-sm w-full"
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
                  <span className="text-[#334155] font-rubik text-[11px] font-normal leading-relaxed block mt-1">
                    {pin.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info Content Box */}
        <motion.div
          initial={{ opacity: 0, rotateX: 80, x: 50 }}
          whileInView={{ opacity: 1, rotateX: 0, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-[40%] max-[1200px]:w-[45%] max-[960px]:w-full flex justify-center items-center flex-col"
        >


          {/* Cartão de Faturamento / EJs / Impacto */}
          <div className="w-full max-w-[484px] min-h-[447px] bg-nuca-secondary rounded-[100px_0] flex flex-col justify-center p-12 max-[450px]:py-8 max-[450px]:px-4 max-[320px]:px-3 max-[320px]:py-6 shadow-lg">
            <div className="space-y-6">
              {/* Faturamento */}
              <div>
                <p className="text-white font-rubik text-[20px] font-medium pl-[50px] relative bottom-[-15px] max-[450px]:pl-[20px] max-[320px]:pl-[10px] max-[320px]:text-[16px]">
                  Faturamento
                </p>
                <div className="flex items-center gap-2 pl-[30px] pt-6 max-[450px]:pl-[10px] max-[320px]:pl-[5px] max-[320px]:pt-4">
                  <img src={faturamentoIcon} className="h-10 shrink-0" alt="Faturamento Icon" />
                  <div className="flex items-baseline flex-wrap">
                    <span className="text-white font-rubik text-[48px] font-medium leading-none max-[450px]:text-[36px] max-[320px]:text-[28px]">+2,2</span>
                    <span className="text-white font-rubik text-[28px] font-medium leading-none ml-2 max-[450px]:text-[20px] max-[320px]:text-[15px]">milhões de R$</span>
                  </div>
                </div>
              </div>

              {/* Empresas Juniores */}
              <div>
                <p className="text-white font-rubik text-[20px] font-medium pl-[50px] relative bottom-[-15px] max-[450px]:pl-[20px] max-[320px]:pl-[10px] max-[320px]:text-[16px]">
                  Empresas Juniores
                </p>
                <div className="flex items-center gap-2 pl-[30px] pt-6 max-[450px]:pl-[10px] max-[320px]:pl-[5px] max-[320px]:pt-4">
                  <img src={ejsIcon} className="h-10 shrink-0" alt="EJs Icon" />
                  <div className="flex items-baseline flex-wrap">
                    <span className="text-white font-rubik text-[48px] font-medium leading-none max-[450px]:text-[36px] max-[320px]:text-[28px]">+45</span>
                    <span className="text-white font-rubik text-[28px] font-medium leading-none ml-2 max-[450px]:text-[20px] max-[320px]:text-[15px]">empresas jr</span>
                  </div>
                </div>
              </div>

              {/* Projetos de impacto */}
              <div>
                <p className="text-white font-rubik text-[20px] font-medium pl-[50px] relative bottom-[-15px] max-[450px]:pl-[20px] max-[320px]:pl-[10px] max-[320px]:text-[16px]">
                  Projetos de impacto
                </p>
                <div className="flex items-center gap-2 pl-[30px] pt-6 max-[450px]:pl-[10px] max-[320px]:pl-[5px] max-[320px]:pt-4">
                  <img src={rendimentosIcon} className="h-10 shrink-0" alt="Impacto Icon" />
                  <div className="flex items-baseline flex-wrap">
                    <span className="text-white font-rubik text-[48px] font-medium leading-none max-[450px]:text-[36px] max-[320px]:text-[28px]">+20</span>
                    <span className="text-white font-rubik text-[28px] font-medium leading-none ml-2 max-[450px]:text-[20px] max-[320px]:text-[15px]">empresas parceiras</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
