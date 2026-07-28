import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import backBtn from '../assets/back-btn.svg';
import nextBtn from '../assets/next-btn.svg';

// Resolutores dinâmicos compatíveis com o analisador estático do Vite
const getIconUrl = (name: string) => new URL(`../assets/areas-atuacao-icons/${name}`, import.meta.url).href;
const getImgUrl = (name: string) => new URL(`../assets/areas-atuacao-img/${name}`, import.meta.url).href;

interface ServiceCardData {
  id: number;
  label: string;
  gradient: string;
  hoverImage: string;
  icon: string;
}

const serviceCards: ServiceCardData[] = [
  { id: 1, label: 'Agronomia', gradient: 'from-[#134E5E] to-[#71B280]', hoverImage: getImgUrl('img-agronomia.png'), icon: getIconUrl('agronomia.svg') },
  { id: 2, label: 'Nutrição', gradient: 'from-[#1D976C] to-[#93F9B9]', hoverImage: getImgUrl('img-nutricao.png'), icon: getIconUrl('nutricao.svg') },
  { id: 3, label: 'Desenvolvimento', gradient: 'from-[#093028] to-[#237A57]', hoverImage: getImgUrl('img-desenvolvimento.png'), icon: getIconUrl('desenvolvimento.svg') },
  { id: 4, label: 'Meio Ambiente', gradient: 'from-[#1A2980] to-[#26D0CE]', hoverImage: getImgUrl('img-meio-ambiente.png'), icon: getIconUrl('meio-ambiente.svg') },
  { id: 5, label: 'Pesquisa e Desenvolvimento', gradient: 'from-[#4B79A1] to-[#283E51]', hoverImage: getImgUrl('img-pesquisa-desenvolvimento.png'), icon: getIconUrl('pesq-des.svg') },
  { id: 6, label: 'Educação', gradient: 'from-[#2C3E50] to-[#3498DB]', hoverImage: getImgUrl('img-educacao.png'), icon: getIconUrl('educacao.svg') },
  { id: 7, label: 'Eletrônica e controle', gradient: 'from-[#373B44] to-[#4286f4]', hoverImage: getImgUrl('img-eletronica.png'), icon: getIconUrl('eletronica.svg') },
  { id: 8, label: 'Arquitetura e Urbanismo', gradient: 'from-[#2980B9] to-[#6DD5FA]', hoverImage: getImgUrl('img-arquitetura.png'), icon: getIconUrl('arquitetura.svg') },
  { id: 9, label: 'Eventos e turismo', gradient: 'from-[#4e54c8] to-[#8f94fb]', hoverImage: getImgUrl('img-turismo.png'), icon: getIconUrl('eventos-turismo.svg') },
  { id: 10, label: 'Finanças', gradient: 'from-[#141E30] to-[#243B55]', hoverImage: getImgUrl('img-fincancas.png'), icon: getIconUrl('financas.svg') },
  { id: 11, label: 'Gestão', gradient: 'from-[#2c3e50] to-[#4ca1af]', hoverImage: getImgUrl('img-gestao.png'), icon: getIconUrl('gestao.svg') },
  { id: 12, label: 'Química', gradient: 'from-[#00d2ff] to-[#3a7bd5]', hoverImage: getImgUrl('img-quimica.png'), icon: getIconUrl('quimica.svg') },
  { id: 13, label: 'Saúde', gradient: 'from-[#2193b0] to-[#6dd5ed]', hoverImage: getImgUrl('img-saude.png'), icon: getIconUrl('saude.svg') },
  { id: 14, label: 'Editoração', gradient: 'from-[#1F1C2C] to-[#928DAB]', hoverImage: getImgUrl('img-editoriacao.png'), icon: getIconUrl('editoriacao.svg') },
];

export const ServicesSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 350 + 32;

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= scrollAmount;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <section
      id="services"
      className="w-full h-screen bg-services-waves bg-no-repeat bg-cover bg-center flex justify-center items-center overflow-hidden"
    >
      <div className="w-full h-full flex flex-col justify-center items-center">
        {/* Título Seção */}
        <div className="mb-10 text-center">
          <h1 className="text-white font-rubik text-[40px] font-semibold tracking-wide">
            Serviços e Áreas de atuação
          </h1>
        </div>

        {/* Carrossel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
          className="w-full flex justify-center items-center px-4"
        >
          {/* Botão de voltar */}
          <button
            onClick={scrollLeft}
            className="cursor-pointer p-4 bg-transparent border-none outline-none active:scale-95 shrink-0"
          >
            <img src={backBtn} className="h-10" alt="Voltar" />
          </button>

          {/* Cards Container */}
          <div
            ref={carouselRef}
            className="flex w-[90%] gap-8 overflow-x-auto scroll-smooth no-scrollbar py-6"
          >
            {serviceCards.map((service) => (
              <div
                key={service.id}
                style={{
                  '--bg-hover-image': `url(${service.hoverImage})`,
                } as React.CSSProperties}
                className={`group flex-shrink-0 w-[260px] h-[350px] rounded-2xl flex flex-col justify-center items-center text-center p-6 cursor-pointer select-none bg-gradient-to-br ${service.gradient} transition-all duration-300 hover:-translate-y-2 hover:bg-[image:var(--bg-hover-image)] hover:bg-cover hover:bg-center relative overflow-hidden max-[1280px]:scale-[0.85] max-[1280px]:hover:scale-[0.85] max-[1280px]:hover:-translate-y-4`}
              >
                {/* Dim overlay on hover to make text readable on top of background image */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 pointer-events-none" />

                {/* Ícone */}
                <img
                  src={service.icon}
                  className="h-20 mb-6 scale-90 transition-all duration-300 invert group-hover:scale-75 z-10"
                  alt={service.label}
                />

                {/* Rótulo */}
                <p className="text-white font-rubik text-xl font-bold leading-tight invert-0 z-10">
                  {service.label}
                </p>
              </div>
            ))}
          </div>

          {/* Botão de avançar */}
          <button
            onClick={scrollRight}
            className="cursor-pointer p-4 bg-transparent border-none outline-none active:scale-95 shrink-0"
          >
            <img src={nextBtn} className="h-10" alt="Avançar" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
