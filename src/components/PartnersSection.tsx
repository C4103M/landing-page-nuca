import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toggle } from './ui/Toggle';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

// Importando os ícones da pasta assets
import shieldIcon from '../assets/sec4-icons/shield.svg';
import groupIcon from '../assets/sec4-icons/group.svg';
import domainIcon from '../assets/sec4-icons/domain.svg';
import predioIcon from '../assets/sec4-icons/predio.webp';
import dinheiroIcon from '../assets/sec4-icons/dinheiro.webp';
import calendarioIcon from '../assets/sec4-icons/calendario.webp';
import personSearchIcon from '../assets/sec4-icons/person_search.svg';
import megafoneIcon from '../assets/sec4-icons/megafone.svg';
import schoolIcon from '../assets/sec4-icons/school.svg';
import jornadaIcon from '../assets/sec4-icons/jornada-icon.webp';
import papelTexture from '../assets/texturas/textura-de-papel-branco-2.webp';

export const PartnersSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mej' | 'partners'>('mej');

  return (
    <section 
      id="parceiros" 
      className="relative w-full bg-repeat py-16 box-border max-[480px]:px-4 border-t border-gray-200/50"
      style={{ backgroundImage: `url(${papelTexture})` }}
    >
      {/* Soft gradient overlay to blend background paper texture and keep high readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-[#f8fafc]/85 to-[#f1efef]/75 pointer-events-none z-0" />
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Seletor Toggle */}
        <div className="mb-12">
          <Toggle activeTab={activeTab} onChange={setActiveTab} />
        </div>

      <AnimatePresence mode="wait">
        {activeTab === 'mej' ? (
          /* CONTAINER M.E.J */
          <motion.div
            key="mej"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center pb-20"
          >
            {/* Header MEJ */}
            <div className="text-center max-w-[1069px] px-4">
              <h1 className="text-[#131516] font-rubik text-2xl sm:text-3xl md:text-[32px] font-semibold mt-10 mb-4 leading-tight">
                Potencialize o impacto da sua EJ com o NuCa
              </h1>
              <p className="text-[#646464] font-rubik text-base sm:text-lg md:text-[20px] font-medium leading-relaxed">
                Conecte-se com os melhores talentos jovens da região e fortaleça sua presença no ecossistema empreendedor através do{' '}
                <span className="text-nuca-secondary font-semibold">Núcleo Campinas.</span>
              </p>
            </div>

            {/* Botões MEJ */}
            <div className="flex gap-4 mt-8 justify-center max-[768px]:flex-col max-[768px]:w-full max-[768px]:px-4">
              <Button variant="primary" className="w-[223px] max-[768px]:w-full leading-none py-2 h-10">
                Quero Federar Minha EJ
              </Button>
              <Button variant="outline" className="w-[120px] max-[768px]:w-full leading-none py-2 h-10">
                Saiba mais
              </Button>
            </div>

            {/* Cards MEJ */}
            <div className="flex gap-10 mt-24 justify-center max-[1024px]:flex-wrap max-[768px]:flex-col max-[768px]:w-full max-[768px]:px-4">
              {/* Card 1: Segurança e Suporte */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: 0, zIndex: 10 }}
                initial={{ rotate: -2 }}
                className="relative w-[360px] min-h-[260px] p-8 flex flex-col items-start bg-white shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-gray-200/40 rounded-[4px] max-[768px]:w-full transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url(${papelTexture})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Efeito Fita Adesiva (Verde MEJ) */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-nuca-secondary/20 backdrop-blur-[1px] rotate-[-2deg] border-l border-r border-dashed border-nuca-secondary/30 shadow-[0_2px_4px_rgba(0,0,0,0.02)] pointer-events-none" />
                
                <img src={shieldIcon} className="h-8 mb-5 relative z-10" alt="Suporte" />
                <p className="text-nuca-secondary font-rubik text-xl font-bold mb-3 relative z-10">
                  Segurança e Suporte ao Selo EJ
                </p>
                <p className="text-[#334155] font-rubik text-base font-normal text-left leading-relaxed relative z-10">
                  Auxílio direto na regulamentação jurídica e contábil, garantindo a conformidade e a obtenção do Selo EJ.
                </p>
              </motion.div>

              {/* Card 2: Conexão */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: 0, zIndex: 10 }}
                initial={{ rotate: 1.5 }}
                className="relative w-[360px] min-h-[260px] p-8 flex flex-col items-start bg-white shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-gray-200/40 rounded-[4px] max-[768px]:w-full transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url(${papelTexture})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Efeito Fita Adesiva (Verde MEJ) */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-nuca-secondary/20 backdrop-blur-[1px] rotate-[1.5deg] border-l border-r border-dashed border-nuca-secondary/30 shadow-[0_2px_4px_rgba(0,0,0,0.02)] pointer-events-none" />
                
                <img src={groupIcon} className="h-8 mb-5 relative z-10" alt="Rede" />
                <p className="text-nuca-secondary font-rubik text-xl font-bold mb-3 relative z-10">
                  Conexão com a Rede Campinas
                </p>
                <p className="text-[#334155] font-rubik text-base font-normal text-left leading-relaxed relative z-10">
                  Networking active com mais de 1.000 empresários juniores para troca de experiências e benchmarking.
                </p>
              </motion.div>

              {/* Card 3: Representatividade */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: 0, zIndex: 10 }}
                initial={{ rotate: -1 }}
                className="relative w-[360px] min-h-[260px] p-8 flex flex-col items-start bg-white shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-gray-200/40 rounded-[4px] max-[768px]:w-full transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url(${papelTexture})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Efeito Fita Adesiva (Verde MEJ) */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-nuca-secondary/20 backdrop-blur-[1px] rotate-[-1deg] border-l border-r border-dashed border-nuca-secondary/30 shadow-[0_2px_4px_rgba(0,0,0,0.02)] pointer-events-none" />
                
                <img src={domainIcon} className="h-8 mb-5 relative z-10" alt="Representatividade" />
                <p className="text-nuca-secondary font-rubik text-xl font-bold mb-3 relative z-10">
                  Representatividade Institucional
                </p>
                <p className="text-[#334155] font-rubik text-base font-normal text-left leading-relaxed relative z-10">
                  Defesa dos interesses das Empresas Juniores frente às universidades, mercado e poder público.
                </p>
              </motion.div>
            </div>

            {/* Sub-seção MEJ: Impacto Real & Post-its */}
            <div className="w-full pt-48 max-[480px]:pt-20">
              <div className="flex flex-col gap-12">
                {/* Linha 1: Impacto Real */}
                <div className="w-full bg-white py-12 flex justify-center items-center shadow-sm">
                  <div className="w-[80%] flex justify-between items-center max-[1024px]:w-[90%] max-[884px]:flex-col max-[884px]:gap-8 max-[884px]:text-center">
                    <div className="max-w-[375px] text-left max-[884px]:text-center max-[884px]:max-w-full">
                      <h3 className="text-[#0f172a] font-rubik text-2xl font-medium mb-2">Impacto Real</h3>
                      <p className="text-[#646464] font-rubik text-base font-normal leading-snug">
                        Números que comprovam a força da nossa rede na região de campinas
                      </p>
                    </div>

                    <div className="flex gap-14 max-[480px]:flex-col max-[480px]:w-full max-[480px]:gap-6">
                      <Card variant="impact">
                        <img src={predioIcon} className="h-7 mb-2" alt="EJs" />
                        <p className="text-[#646464] font-rubik text-xs font-semibold">
                          EJs federadas <span className="block text-black text-2xl font-bold mt-1">+30</span>
                        </p>
                      </Card>

                      <Card variant="impact">
                        <img src={dinheiroIcon} className="h-7 mb-2" alt="Faturamento" />
                        <p className="text-[#646464] font-rubik text-xs font-semibold">
                          Em Faturamento <span className="block text-black text-2xl font-bold mt-1">R$ +2,2M</span>
                        </p>
                      </Card>

                      <Card variant="impact">
                        <img src={calendarioIcon} className="h-7 mb-2" alt="Anos" />
                        <p className="text-[#646464] font-rubik text-xs font-semibold">
                          Anos de Impacto <span className="block text-black text-2xl font-bold mt-1">+15</span>
                        </p>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Linha 2: Necessidade do Futuro */}
                <div className="w-full py-12 flex justify-center items-center">
                  <div className="w-[80%] flex justify-between items-center max-[1024px]:w-[90%] max-[884px]:flex-col max-[884px]:gap-12">
                    <div className="max-w-[557px] text-left max-[884px]:text-center">
                      <h2 className="text-[#131516] font-rubik text-[32px] font-semibold mb-1">
                        Necessidade do futuro
                      </h2>
                      <p className="text-gray-500 font-rubik text-sm italic font-light mb-4">
                        Movimento Empresa Júnior
                      </p>
                      <p className="text-[#131516] font-rubik text-[20px] font-normal leading-relaxed">
                        O mercado de trabalho futuro demanda certas habilidades, e o MEJ é a oportunidade de desenvolvimento do que o mercado pede.
                      </p>
                    </div>

                    {/* Post-its */}
                    <div className="flex flex-col gap-6 max-[480px]:w-full">
                      <div className="flex w-[345px] h-[77px] p-4 flex-col items-start rounded-[10px_0] bg-nuca-blue-medium justify-center max-[480px]:w-full">
                        <p className="text-white font-rubik text-sm leading-snug text-left">
                          <span className="text-white text-lg font-medium">52,98%</span>
                          <br />
                          dos pós-juniores empregados em <span className="font-semibold text-white">até 3 meses.</span>
                        </p>
                      </div>

                      <div className="flex w-[345px] h-[77px] p-4 flex-col items-start rounded-[10px_0] bg-nuca-secondary justify-center max-[480px]:w-full">
                        <p className="text-white font-rubik text-sm leading-snug text-left">
                          <span className="text-white text-lg font-medium">87%</span>
                          <br />
                          dos pós-juniores encontram <span className="font-semibold text-white">soluções criativas.</span>
                        </p>
                      </div>

                      <div className="flex w-[345px] h-[77px] p-4 flex-col items-start rounded-[10px_0] bg-nuca-blue-medium justify-center max-[480px]:w-full">
                        <p className="text-white font-rubik text-sm leading-snug text-left">
                          <span className="text-white text-lg font-medium">90%</span>
                          <br />
                          dos pós-juniores conseguem <span className="font-semibold text-white">liderar equipes com frequência.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* CONTAINER PARCEIROS */
          <motion.div
            key="partners"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center pb-20"
          >
            {/* Header Parceiros */}
            <div className="text-center max-w-[1069px] px-4">
              <h1 className="text-[#131516] font-rubik text-2xl sm:text-3xl md:text-[32px] font-semibold mt-10 mb-4 leading-tight">
                Conecte sua marca com os talentos que liderarão o futuro do mercado
              </h1>
              <p className="text-[#646464] font-rubik text-base sm:text-lg md:text-[20px] font-medium leading-relaxed">
                Conecte sua marca aos talentos que liderarão o{' '}
                <span className="text-nuca-primary font-semibold">futuro do mercado.</span>
              </p>
            </div>

            {/* Botões Parceiros */}
            <div className="flex gap-4 mt-8 justify-center max-[768px]:flex-col max-[768px]:w-full max-[768px]:px-4">
              <Button variant="secondary" className="w-[223px] max-[768px]:w-full leading-none py-2 h-10">
                Seja um parceiro NuCa
              </Button>
              <Button variant="outline" className="w-[120px] max-[768px]:w-full leading-none py-2 h-10">
                Saiba mais
              </Button>
            </div>

            {/* Cards Parceiros */}
            <div className="flex gap-10 mt-24 justify-center max-[1024px]:flex-wrap max-[768px]:flex-col max-[768px]:w-full max-[768px]:px-4">
              {/* Card 1: Acesso a Talentos */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: 0, zIndex: 10 }}
                initial={{ rotate: -1.5 }}
                className="relative w-[360px] min-h-[260px] p-8 flex flex-col items-start bg-white shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-gray-200/40 rounded-[4px] max-[768px]:w-full transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url(${papelTexture})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Efeito Fita Adesiva (Azul Primário) */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-nuca-primary/15 backdrop-blur-[1px] rotate-[-1.5deg] border-l border-r border-dashed border-nuca-primary/20 shadow-[0_2px_4px_rgba(0,0,0,0.02)] pointer-events-none" />
                
                <img src={personSearchIcon} className="h-8 mb-5 relative z-10" alt="Acesso a Talentos" />
                <p className="text-nuca-primary font-rubik text-xl font-bold mb-3 relative z-10">
                  Acesso a Talentos de Alta Performance
                </p>
                <p className="text-[#334155] font-rubik text-base font-normal text-left leading-relaxed relative z-10">
                  Conecte-se diretamente com jovens universitários engajados e de alto potencial das melhores Empresas Juniores da região.
                </p>
              </motion.div>

              {/* Card 2: Marca Empregadora */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: 0, zIndex: 10 }}
                initial={{ rotate: 2 }}
                className="relative w-[360px] min-h-[260px] p-8 flex flex-col items-start bg-white shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-gray-200/40 rounded-[4px] max-[768px]:w-full transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url(${papelTexture})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Efeito Fita Adesiva (Azul Primário) */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-nuca-primary/15 backdrop-blur-[1px] rotate-[2deg] border-l border-r border-dashed border-nuca-primary/20 shadow-[0_2px_4px_rgba(0,0,0,0.02)] pointer-events-none" />
                
                <img src={megafoneIcon} className="h-8 mb-5 relative z-10" alt="Marca Empregadora" />
                <p className="text-nuca-primary font-rubik text-xl font-bold mb-3 relative z-10">
                  Fortalecimento de Marca Empregadora
                </p>
                <p className="text-[#334155] font-rubik text-base font-normal text-left leading-relaxed relative z-10">
                  Posicione sua marca como referência e primeira escolha para as futures lideranças no mercado em nossos eventos e ações.
                </p>
              </motion.div>

              {/* Card 3: Impacto Educação */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: 0, zIndex: 10 }}
                initial={{ rotate: -1 }}
                className="relative w-[360px] min-h-[260px] p-8 flex flex-col items-start bg-white shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-gray-200/40 rounded-[4px] max-[768px]:w-full transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url(${papelTexture})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Efeito Fita Adesiva (Azul Primário) */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-nuca-primary/15 backdrop-blur-[1px] rotate-[-1deg] border-l border-r border-dashed border-nuca-primary/20 shadow-[0_2px_4px_rgba(0,0,0,0.02)] pointer-events-none" />
                
                <img src={schoolIcon} className="h-8 mb-5 relative z-10" alt="Educação" />
                <p className="text-nuca-primary font-rubik text-xl font-bold mb-3 relative z-10">
                  Impacto na Educação Brasileira
                </p>
                <p className="text-[#334155] font-rubik text-base font-normal text-left leading-relaxed relative z-10">
                  Contribua ativamente para o desenvolvimento prático dos estudantes e fomente uma educação empreendedora de qualidade no Brasil.
                </p>
              </motion.div>
            </div>

            {/* Sub-seção Parceiros: Logos & Jornada */}
            <div className="w-full pt-16 flex flex-col items-center">
              {/* Grid de Logos */}
              <h2 className="text-[#0f172a] font-rubik text-2xl font-medium tracking-wide mb-8">
                NOSSOS PARCEIROS
              </h2>
              
              <div className="grid grid-cols-4 gap-5 w-full max-w-[1200px] px-8 max-[1024px]:grid-cols-2 max-[480px]:grid-cols-1 max-[480px]:px-4">
                {['Siemens Energy', 'Renner', 'Bosch', 'Raízen', 'Ambev', 'Stone', 'Bradesco', 'TV Globo'].map((logoName, idx) => (
                  <Card variant="grid" key={idx}>
                    {logoName}
                  </Card>
                ))}
              </div>

              {/* Jornada de Marca */}
              <h2 className="text-[#0f172a] font-rubik text-2xl font-medium tracking-wide mt-24 mb-10 max-[768px]:mt-16 text-center px-4">
                NOSSA JORNADA DE MARCA
              </h2>

              <div className="flex flex-row max-[768px]:flex-row-reverse gap-4 sm:gap-10 md:gap-16 lg:gap-20 justify-center items-stretch w-full max-w-[1200px] px-8 max-[768px]:px-4">
                {/* Coluna de Textos */}
                <div className="flex flex-col gap-6 md:gap-8 w-full max-w-[473px] justify-between">
                  <div className="text-right max-[768px]:text-left">
                    <h4 className="text-black font-rubik text-base sm:text-lg md:text-xl font-medium mb-1 sm:mb-2">Visibilidade & Posicionamento</h4>
                    <p className="text-[#646464] font-rubik text-[11px] sm:text-sm md:text-[16px] leading-relaxed">
                      Amplie sua visibilidade e posicione sua marca como referência no ecossistema empreendedor universitário.
                    </p>
                  </div>

                  <div className="text-right max-[768px]:text-left">
                    <h4 className="text-black font-rubik text-base sm:text-lg md:text-xl font-medium mb-1 sm:mb-2">Impulsione sua Força</h4>
                    <p className="text-[#646464] font-rubik text-[11px] sm:text-sm md:text-[16px] leading-relaxed">
                      Encontre os talentos ideais e impulsione sua força de trabalho com a nova geração de profissionais.
                    </p>
                  </div>

                  <div className="text-right max-[768px]:text-left">
                    <h4 className="text-black font-rubik text-base sm:text-lg md:text-xl font-medium mb-1 sm:mb-2">Conexões Autênticas</h4>
                    <p className="text-[#646464] font-rubik text-[11px] sm:text-sm md:text-[16px] leading-relaxed">
                      Crie conexões autênticas e inspire a próxima geração de líderes, gerando engajamento profundo com sua marca.
                    </p>
                  </div>
                </div>

                {/* Coluna da Imagem (Sempre esticada para ter a altura exata da coluna de textos, contendo a imagem em escala proporcional) */}
                <div className="w-[45px] sm:w-[70px] md:w-[90px] lg:w-[100px] shrink-0 flex justify-center items-center self-stretch py-1">
                  <img src={jornadaIcon} className="h-full max-h-full w-auto object-contain md:scale-110" alt="Jornada Icon" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </section>
  );
};
