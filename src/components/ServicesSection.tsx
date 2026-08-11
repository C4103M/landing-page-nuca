import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import backBtn from '../assets/icons/back-btn.svg';
import nextBtn from '../assets/icons/next-btn.svg';

const getIconUrl = (name: string) => new URL(`../assets/icons/trilha/${name}`, import.meta.url).href;
const getImgUrl = (name: string) => new URL(`../assets/areas-atuacao-img/${name}`, import.meta.url).href;

interface ServiceCardData {
  id: number;
  label: string;
  gradient: string;
  hoverImage: string;
  icon: string;
  ac: string;
  description: string;
}

const serviceCards: ServiceCardData[] = [
  { 
    id: 1, 
    label: 'Agronomia', 
    gradient: 'from-[#134E5E] to-[#71B280]', 
    hoverImage: getImgUrl('img-agronomia.webp'), 
    icon: getIconUrl('agronomia.svg'), 
    ac: '#00B081',
    description: 'Soluções sustentáveis para manejo de solo, cultivo, fitossanidade, planejamento de safras e otimização geral da produção agrícola.'
  },
  { 
    id: 2, 
    label: 'Nutrição', 
    gradient: 'from-[#1D976C] to-[#93F9B9]', 
    hoverImage: getImgUrl('img-nutricao.webp'), 
    icon: getIconUrl('nutricao.svg'), 
    ac: '#36AFCE',
    description: 'Planejamento de cardápios institucionais, rotulagem nutricional, controle de qualidade de alimentos e desenvolvimento de novos produtos.'
  },
  { 
    id: 3, 
    label: 'Desenvolvimento', 
    gradient: 'from-[#093028] to-[#237A57]', 
    hoverImage: getImgUrl('img-desenvolvimento.webp'), 
    icon: getIconUrl('desenvolvimento.svg'), 
    ac: '#1D6FA9',
    description: 'Criação de websites modernos e otimizados para SEO, landing pages de alta conversão, aplicativos mobile e sistemas internos sob medida.'
  },
  { 
    id: 4, 
    label: 'Meio Ambiente', 
    gradient: 'from-[#1A2980] to-[#26D0CE]', 
    hoverImage: getImgUrl('img-meio-ambiente.webp'), 
    icon: getIconUrl('meio-ambiente.svg'), 
    ac: '#00908F',
    description: 'Estudos de impacto ambiental, planos de gestão de resíduos sólidos, assessoria para licenciamento e projetos voltados à sustentabilidade.'
  },
  { 
    id: 5, 
    label: 'Pesquisa e Desenvolvimento', 
    gradient: 'from-[#4B79A1] to-[#283E51]', 
    hoverImage: getImgUrl('img-pesquisa-desenvolvimento.webp'), 
    icon: getIconUrl('pesquisa-desenvolvimento.svg'), 
    ac: '#1F63A0',
    description: 'Pesquisa científica aplicada, testes e validação laboratorial, inovação tecnológica de processos e modelagem de novos experimentos.'
  },
  { 
    id: 6, 
    label: 'Educação', 
    gradient: 'from-[#2C3E50] to-[#3498DB]', 
    hoverImage: getImgUrl('img-educacao.webp'), 
    icon: getIconUrl('educacao.svg'), 
    ac: '#1F63A0',
    description: 'Desenvolvimento de projetos pedagógicos inovadores, treinamentos corporativos de equipes, cursos customizados e assessoria acadêmica.'
  },
  { 
    id: 7, 
    label: 'Eletrônica e controle', 
    gradient: 'from-[#373B44] to-[#4286f4]', 
    hoverImage: getImgUrl('img-eletronica.webp'), 
    icon: getIconUrl('eletronica-controle.svg'), 
    ac: '#1D6FA9',
    description: 'Prototipagem de placas de circuito, automação de sistemas residenciais ou industriais, integração de sensores e sistemas embarcados.'
  },
  { 
    id: 8, 
    label: 'Arquitetura e Urbanismo', 
    gradient: 'from-[#2980B9] to-[#6DD5FA]', 
    hoverImage: getImgUrl('img-arquitetura.webp'), 
    icon: getIconUrl('arquitetura-urbanismo.svg'), 
    ac: '#00B081',
    description: 'Projetos de arquitetura comercial e residencial, design de interiores funcional, planejamento urbano e modelagem tridimensional (BIM).'
  },
  { 
    id: 9, 
    label: 'Eventos e turismo', 
    gradient: 'from-[#4e54c8] to-[#8f94fb]', 
    hoverImage: getImgUrl('img-turismo.webp'), 
    icon: getIconUrl('eventos-turismo.svg'), 
    ac: '#36AFCE',
    description: 'Organização de feiras e congressos, planejamento de roteiros turísticos ecológicos ou históricos, e pesquisas de mercado regional.'
  },
  { 
    id: 10, 
    label: 'Finanças', 
    gradient: 'from-[#141E30] to-[#243B55]', 
    hoverImage: getImgUrl('img-fincancas.webp'), 
    icon: getIconUrl('financas.svg'), 
    ac: '#00908F',
    description: 'Planejamento e controle de fluxo de caixa, avaliação de empresas (valuation) e estudos aprofundados de viabilidade econômico-financeira.'
  },
  { 
    id: 11, 
    label: 'Gestão', 
    gradient: 'from-[#2c3e50] to-[#4ca1af]', 
    hoverImage: getImgUrl('img-gestao.webp'), 
    icon: getIconUrl('gestao.svg'), 
    ac: '#1F63A0',
    description: 'Otimização de processos administrativos, modelagem e planejamento estratégico de negócios, gestão de pessoas e estruturação organizacional interna.'
  },
  { 
    id: 12, 
    label: 'Química', 
    gradient: 'from-[#00d2ff] to-[#3a7bd5]', 
    hoverImage: getImgUrl('img-quimica.webp'), 
    icon: getIconUrl('quimica.svg'), 
    ac: '#00B081',
    description: 'Controle de qualidade de matéria-prima, análises químicas laboratoriais, otimização de formulações e tratamento técnico de efluentes.'
  },
  { 
    id: 13, 
    label: 'Saúde', 
    gradient: 'from-[#2193b0] to-[#6dd5ed]', 
    hoverImage: getImgUrl('img-saude.webp'), 
    icon: getIconUrl('saude.svg'), 
    ac: '#36AFCE',
    description: 'Apoio na gestão de saúde ocupacional, conformidade com normas de biossegurança, assessoria hospitalar e programas de bem-estar.'
  },
  { 
    id: 14, 
    label: 'Editoração', 
    gradient: 'from-[#1F1C2C] to-[#928DAB]', 
    hoverImage: getImgUrl('img-editoriacao.webp'), 
    icon: getIconUrl('editoriacao.svg'), 
    ac: '#1D6FA9',
    description: 'Design editorial e diagramação de e-books, livros impressos, revistas acadêmicas ou corporativas, além de revisão gramatical técnica.'
  }
];

export const ServicesSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<ServiceCardData | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Estados para o drag-to-scroll (mouse e toque)
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftVal, setScrollLeftVal] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Ignora se for clique em botões de navegação
    const target = e.target as HTMLElement;
    if (target.closest('button')) return;

    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeftVal(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = x - startX;
    if (Math.abs(walk) > 5) {
      setHasMoved(true);
    }
    carouselRef.current.scrollLeft = scrollLeftVal - walk * 1.5;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleNodeClick = (service: ServiceCardData, e: React.MouseEvent) => {
    if (hasMoved) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    setSelectedService(service);
  };

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      updateScrollButtons();
      // Executa um pequeno delay para garantir que o layout renderizou
      setTimeout(updateScrollButtons, 100);
      carousel.addEventListener('scroll', updateScrollButtons);
      window.addEventListener('resize', updateScrollButtons);
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', updateScrollButtons);
      }
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  // Parâmetros da curva senoidal
  const spacing = 280;
  const marginX = 140;
  const baseY = 210;
  const amp = 85;
  const trackHeight = 420;
  const sizeCycle = [120, 108, 116, 102, 114, 108, 118, 104];

  // Cálculo das coordenadas dos pontos na trilha
  const points = serviceCards.map((it, i) => {
    const x = marginX + i * spacing;
    const y = baseY + amp * Math.sin(i * 1.35 + 0.4);
    const size = sizeCycle[i % sizeCycle.length];
    return { x, y, size, it };
  });

  const totalWidth = marginX * 2 + spacing * (serviceCards.length - 1);

  // Construção do path Bézier suave
  let pathD = `M ${points[0].x},${points[0].y} `;
  for (let i = 1; i < points.length; i++) {
    const p0 = points[i - 1];
    const p1 = points[i];
    const midX = (p0.x + p1.x) / 2;
    pathD += `C ${midX},${p0.y} ${midX},${p1.y} ${p1.x},${p1.y} `;
  }

  // Rolar carrossel
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -spacing * 2.5, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: spacing * 2.5, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="w-full min-h-screen bg-gradient-to-br from-[#1d6fa9] to-[#1f63a0] flex justify-center items-center py-16 overflow-hidden relative"
    >
      {/* Overlay sutil para adicionar textura leve de vidro */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] pointer-events-none" />

      <div className="w-full max-w-[1240px] mx-auto flex flex-col justify-between items-center z-10 px-4">
        {/* Título Seção */}
        <div className="mb-6 text-center">
          <h1 className="text-white font-rubik text-[40px] max-[640px]:text-3xl font-semibold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
            Serviços e Áreas de atuação
          </h1>
        </div>

        {/* Carrossel da Trilha */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full flex justify-center items-center relative mb-8"
        >
          {/* Botão de voltar */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`cursor-pointer p-3 rounded-full bg-white/15 border border-white/30 transition-all active:scale-95 shrink-0 z-20 max-[768px]:hidden backdrop-blur-sm mr-4 ${
              !canScrollLeft ? 'opacity-30 pointer-events-none' : 'opacity-100 hover:bg-white/25'
            }`}
          >
            <img src={backBtn} className="h-6 w-6 invert" alt="Voltar" />
          </button>

          {/* Container de Rolagem */}
          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className={`flex-1 overflow-x-auto no-scrollbar py-8 cursor-grab active:cursor-grabbing ${
              isDragging ? 'select-none active:cursor-grabbing' : ''
            }`}
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div 
              className="relative" 
              style={{ width: `${totalWidth}px`, height: `${trackHeight}px` }}
            >
              {/* SVG da Trilha com gradiente brilhante da marca */}
              <svg 
                className="absolute top-0 left-0 pointer-events-none"
                width={totalWidth}
                height={trackHeight}
                viewBox={`0 0 ${totalWidth} ${trackHeight}`}
              >
                <defs>
                  <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00B081" />
                    <stop offset="35%" stopColor="#36AFCE" />
                    <stop offset="70%" stopColor="#1F63A0" />
                    <stop offset="100%" stopColor="#00908F" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                {/* Linha brilhante de fundo */}
                <path 
                  d={pathD} 
                  fill="none" 
                  stroke="url(#trailGradient)" 
                  strokeWidth={6} 
                  opacity={0.35} 
                  filter="url(#glow)"
                />
                {/* Linha tracejada principal */}
                <path 
                  d={pathD} 
                  fill="none" 
                  stroke="rgba(255,255,255,0.6)" 
                  strokeWidth={3} 
                  strokeLinecap="round" 
                  strokeDasharray="1 18" 
                />
              </svg>

              {/* Nós da Trilha */}
              {points.map((p) => {
                const isActive = selectedService?.id === p.it.id;
                return (
                  <div
                    key={p.it.id}
                    className="absolute flex flex-col items-center select-none group/node"
                    style={{
                      left: `${p.x}px`,
                      top: `${p.y}px`,
                      transform: 'translate(-50%, -50%)',
                      width: '180px',
                    }}
                    onMouseEnter={() => setSelectedService(p.it)}
                    onClick={(e) => handleNodeClick(p.it, e)}
                  >
                    {/* Badge do Ícone */}
                    <div
                      style={{ 
                        width: `${p.size}px`, 
                        height: `${p.size}px`,
                        boxShadow: isActive 
                          ? `0 0 25px ${p.it.ac}66, 0 0 0 4px ${p.it.ac}44` 
                          : '0 8px 16px -4px rgba(0,0,0,0.12)',
                        borderColor: isActive ? p.it.ac : 'rgba(255,255,255,0.5)'
                      }}
                      className="rounded-full bg-white/85 backdrop-blur-md border flex items-center justify-center relative cursor-pointer transition-all duration-500 hover:scale-110 group-hover/node:scale-110"
                    >
                      {/* Anel Orbital Dash */}
                      <div
                        style={{ 
                          border: `3px dashed ${p.it.ac}`,
                          opacity: isActive ? 0.95 : 0.4
                        }}
                        className={`absolute -inset-[6px] rounded-full transition-all duration-500 group-hover/node:opacity-95 group-hover/node:scale-105`}
                      />

                      {/* Ícone SVG (Cores originais preservadas) */}
                      <img
                        src={p.it.icon}
                        style={{ width: '56%', height: '56%' }}
                        className="transition-transform duration-500 group-hover/node:scale-110"
                        alt={p.it.label}
                      />
                    </div>

                    {/* Rótulo / Nome */}
                    <span 
                      style={{
                        borderColor: isActive ? p.it.ac : 'rgba(255,255,255,0.4)',
                        color: '#1f63a0',
                        fontWeight: isActive ? 700 : 600
                      }}
                      className={`mt-5 px-3 py-1 rounded-xl bg-white/90 border text-[13.5px] font-rubik text-center tracking-wide leading-tight group-hover/node:bg-white transition-all duration-300 shadow-sm`}
                      dangerouslySetInnerHTML={{ __html: p.it.label }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Botão de avançar */}
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`cursor-pointer p-3 rounded-full bg-white/15 border border-white/30 transition-all active:scale-95 shrink-0 z-20 max-[768px]:hidden backdrop-blur-sm ml-4 ${
              !canScrollRight ? 'opacity-30 pointer-events-none' : 'opacity-100 hover:bg-white/25'
            }`}
          >
            <img src={nextBtn} className="h-6 w-6 invert" alt="Avançar" />
          </button>
        </motion.div>

        {/* Ficha de Detalhes Dinâmica (Glassmorphism Premium Claro) */}
        <div className="w-full max-w-[760px] min-h-[160px] max-[640px]:min-h-[180px] bg-white/90 border border-white/40 backdrop-blur-lg rounded-2xl p-5 flex max-[540px]:flex-col gap-6 items-center shadow-xl relative overflow-hidden transition-all duration-300">
          <AnimatePresence mode="wait">
            {selectedService ? (
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full flex max-[540px]:flex-col gap-5 items-center"
              >
                {/* Imagem de Fundo (Lado Esquerdo) */}
                <div 
                  className="w-32 h-32 rounded-xl overflow-hidden shrink-0 relative border border-white/40 shadow-inner bg-cover bg-center hidden min-[540px]:block"
                  style={{ backgroundImage: `url(${selectedService.hoverImage})` }}
                >
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Textos Informativos */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2.5">
                    <span 
                      style={{ backgroundColor: selectedService.ac }} 
                      className="w-3.5 h-3.5 rounded-full inline-block animate-pulse shrink-0" 
                    />
                    <h2 
                      className="text-[#1f63a0] font-rubik text-xl font-bold leading-none tracking-wide"
                      dangerouslySetInnerHTML={{ __html: selectedService.label.replace('<br>', ' ') }}
                    />
                  </div>
                  <p className="text-slate-600 font-inter text-sm leading-relaxed mt-3">
                    {selectedService.description}
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full text-center flex flex-col justify-center items-center py-4"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#00b081] animate-ping mb-3" />
                <p className="text-slate-500 font-inter text-sm font-medium tracking-wide">
                  Passe o mouse ou toque em uma área da trilha para ver os detalhes do serviço.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
