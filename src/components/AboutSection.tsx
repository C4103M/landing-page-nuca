import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';

import missaoIcon from '../assets/missao-icon.svg';
import visaoIcon from '../assets/visao-icon.svg';
import valoresIcon from '../assets/valores-icon.svg';
import spMap from '../assets/sp-map.svg';
import faturamentoIcon from '../assets/faturamento.svg';
import ejsIcon from '../assets/ejs.svg';
import rendimentosIcon from '../assets/rendimentos.svg';

import quadriculadoBg from '../assets/quadriculado.png';

export const AboutSection: React.FC = () => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <section
      id="about"
      className="relative w-full min-h-[200vh] bg-repeat overflow-hidden py-16 max-[450px]:min-h-0 max-[450px]:py-8"
      style={{ backgroundImage: `url(${quadriculadoBg})` }}
    >
      {/* Dark overlay when a card is hovered */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 pointer-events-none z-10 ${
          isCardHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Seção 2-1: Quem Somos */}
      <div className="relative w-full min-h-[60vh] z-20 flex flex-col items-start px-24 max-[1280px]:px-12 max-[450px]:px-4 max-[450px]:items-center">
        <div
          className={`transition-all duration-300 rounded-[50px_0_50px_0] max-w-[700px] mt-24 max-[450px]:mt-10 mb-12 -ml-6 p-6 max-[450px]:ml-0 max-[450px]:px-4 ${
            isCardHovered 
              ? 'bg-nuca-secondary text-white shadow-xl' 
              : 'bg-transparent text-nuca-primary'
          }`}
        >
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className={`font-rubik text-[48px] font-semibold leading-[140%] mb-4 max-[450px]:text-[38px] max-[450px]:text-center transition-colors duration-300 ${
              isCardHovered ? 'text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]' : 'text-nuca-primary'
            }`}
          >
            Quem somos?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
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
          transition={{ duration: 2.0 }}
          className="w-full flex justify-center items-center gap-[127px] py-8 max-[1280px]:gap-[50px] max-[1280px]:scale-[0.9] max-[884px]:scale-[0.8] max-[450px]:flex-col max-[450px]:scale-100 max-[450px]:gap-8"
        >
          {/* Card 1: Missão */}
          <Card
            variant="about"
            className="bg-nuca-blue-medium hover:backdrop-blur-sm z-30"
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
          >
            <div className="flex flex-col justify-center items-center p-6 text-center">
              <img src={missaoIcon} className="h-16 mb-4" alt="Missão Icon" />
              <p className="text-white font-rubik text-2xl font-semibold leading-[140%] mb-4">Missão</p>
              <div className="w-[250px] h-[153px] rounded-[24px] bg-[#f3f3f3] flex items-center justify-center p-5">
                <p className="text-nuca-primary text-[15px] font-semibold leading-[115%] text-center px-1">
                  Formar, por meio da vivência empresarial, líderes comprometidos e capazes de transformar o brasil em um país empreendedor.
                </p>
              </div>
            </div>
          </Card>

          {/* Card 2: Visão */}
          <Card
            variant="about"
            className="bg-nuca-teal hover:backdrop-blur-sm z-30"
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
          >
            <div className="flex flex-col justify-center items-center p-6 text-center">
              <img src={visaoIcon} className="h-16 mb-4" alt="Visão Icon" />
              <p className="text-white font-rubik text-2xl font-semibold leading-[140%] mb-4">Visão</p>
              <div className="w-[250px] h-[153px] rounded-[24px] bg-[#f3f3f3] flex items-center justify-center p-5">
                <p className="text-nuca-primary text-[15px] font-semibold leading-[115%] text-center px-1">
                  Consolidar-se como a conexão essencial entre o ambiente universitário e o mercado de trabalho, desenvolvendo as habilidades que o futuro exige.
                </p>
              </div>
            </div>
          </Card>

          {/* Card 3: Valores */}
          <Card
            variant="about"
            className="bg-nuca-blue-light hover:backdrop-blur-sm z-30"
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
          >
            <div className="flex flex-col justify-center items-center p-6 text-center">
              <img src={valoresIcon} className="h-16 mb-4" alt="Valores Icon" />
              <p className="text-white font-rubik text-2xl font-semibold leading-[140%] mb-4">Valores</p>
              <div className="w-[250px] h-[153px] rounded-[24px] bg-[#f3f3f3] flex items-center justify-center p-5">
                <ul className="text-nuca-primary text-[14px] font-semibold leading-[115%] list-disc text-left pl-5 space-y-1">
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
      <div className="relative w-full min-h-[140vh] z-20 flex max-[884px]:flex-col max-[884px]:items-center max-[884px]:min-h-[100vh] mt-16 max-[450px]:mt-8">
        {/* Title for mobile */}
        <div className="hidden max-[450px]:block w-full text-center px-4 mb-4">
          <h1 className="text-nuca-primary font-rubik text-[38px] font-semibold leading-[140%] max-[320px]:text-[30px]">
            Onde estamos?
          </h1>
        </div>

        {/* Mapa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 2.0 }}
          className="w-1/2 flex justify-center items-center max-[1280px]:scale-[0.8] max-[884px]:w-full max-[884px]:h-[45vh] max-[320px]:scale-[0.6] max-[320px]:relative max-[320px]:top-[-40px]"
        >
          <img src={spMap} className="max-w-[90%] max-h-[80%] max-[450px]:scale-[0.7]" alt="Mapa SP" />
        </motion.div>

        {/* Info Content Box */}
        <motion.div
          initial={{ opacity: 0, rotateX: 80, x: 100 }}
          whileInView={{ opacity: 1, rotateX: 0, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 2.0 }}
          className="w-1/2 flex justify-center items-center flex-col max-[1280px]:scale-[0.8] max-[884px]:w-full max-[884px]:h-[45vh] max-[884px]:relative max-[884px]:top-[-40px] max-[320px]:scale-[0.8] max-[320px]:top-[-80px]"
        >
          <div className="w-[484px] text-left mb-6 max-[450px]:hidden">
            <h1 className="text-nuca-primary font-rubik text-[48px] font-semibold leading-[140%] relative left-[-40px]">
              Onde estamos?
            </h1>
          </div>

          {/* Cartão de Faturamento / EJs / Impacto */}
          <div className="w-[484px] h-[447px] bg-nuca-secondary rounded-[100px_0] flex flex-col justify-center p-12 max-[450px]:w-[370px] max-[450px]:h-auto max-[450px]:py-10 max-[450px]:px-6 max-[320px]:w-[320px]">
            <div className="space-y-6">
              {/* Faturamento */}
              <div>
                <p className="text-white font-rubik text-[20px] font-medium pl-[50px] relative bottom-[-15px] max-[450px]:pl-[20px]">
                  Faturamento
                </p>
                <div className="flex items-center gap-2 pl-[30px] pt-6 max-[450px]:pl-[10px]">
                  <img src={faturamentoIcon} className="h-10" alt="Faturamento Icon" />
                  <div className="flex items-baseline">
                    <span className="text-white font-rubik text-[48px] font-medium leading-none">+2,2</span>
                    <span className="text-white font-rubik text-[28px] font-medium leading-none ml-2">milhões de R$</span>
                  </div>
                </div>
              </div>

              {/* Empresas Juniores */}
              <div>
                <p className="text-white font-rubik text-[20px] font-medium pl-[50px] relative bottom-[-15px] max-[450px]:pl-[20px]">
                  Empresas Juniores
                </p>
                <div className="flex items-center gap-2 pl-[30px] pt-6 max-[450px]:pl-[10px]">
                  <img src={ejsIcon} className="h-10" alt="EJs Icon" />
                  <div className="flex items-baseline">
                    <span className="text-white font-rubik text-[48px] font-medium leading-none">+45</span>
                    <span className="text-white font-rubik text-[28px] font-medium leading-none ml-2">empresas jr</span>
                  </div>
                </div>
              </div>

              {/* Projetos de impacto */}
              <div>
                <p className="text-white font-rubik text-[20px] font-medium pl-[50px] relative bottom-[-15px] max-[450px]:pl-[20px]">
                  Projetos de impacto
                </p>
                <div className="flex items-center gap-2 pl-[30px] pt-6 max-[450px]:pl-[10px]">
                  <img src={rendimentosIcon} className="h-10" alt="Impacto Icon" />
                  <div className="flex items-baseline">
                    <span className="text-white font-rubik text-[48px] font-medium leading-none">+20</span>
                    <span className="text-white font-rubik text-[28px] font-medium leading-none ml-2">empresas parceiras</span>
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
