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

// Importação dos logotipos dos parceiros salvos localmente na pasta assets/icons
import siemensLogo from '../assets/icons/siemens.svg';
import rennerLogo from '../assets/icons/renner.svg';
import boschLogo from '../assets/icons/bosch.svg';
import raizenLogo from '../assets/icons/raizen.svg';
import ambevLogo from '../assets/icons/ambev.svg';
import stoneLogo from '../assets/icons/stone.svg';
import bradescoLogo from '../assets/icons/bradesco.svg';
import globoLogo from '../assets/icons/globo.svg';

const PartnerLogo: React.FC<{ name: string }> = ({ name }) => {
  const defaultImgClasses = "h-7 sm:h-8 max-w-[85%] object-contain transition-all duration-300 filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100";
  
  switch (name) {
    case 'Siemens Energy':
      return <img src={siemensLogo} className={defaultImgClasses} alt="Siemens Energy" />;
    case 'Renner':
      return <img src={rennerLogo} className={defaultImgClasses} alt="Renner" />;
    case 'Bosch':
      return <img src={boschLogo} className={defaultImgClasses} alt="Bosch" />;
    case 'Raízen':
      return <img src={raizenLogo} className={defaultImgClasses} alt="Raízen" />;
    case 'Ambev':
      return <img src={ambevLogo} className={defaultImgClasses} alt="Ambev" />;
    case 'Stone':
      return <img src={stoneLogo} className={defaultImgClasses} alt="Stone" />;
    case 'Bradesco':
      return <img src={bradescoLogo} className={defaultImgClasses} alt="Bradesco" />;
    case 'TV Globo':
      return <img src={globoLogo} className={defaultImgClasses} alt="TV Globo" />;
    default:
      return <span className="text-slate-700 font-bold">{name}</span>;
  }
};

export const PartnersSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mej' | 'partners'>('mej');

  return (
    <section 
      id="parceiros" 
      className="relative w-full bg-cover bg-center bg-no-repeat py-20 box-border border-t border-gray-200/50"
      style={{ backgroundImage: `url(${papelTexture})` }}
    >
      {/* Soft gradient overlay to blend background paper texture and keep high readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-[#f8fafc]/85 to-[#f1efef]/75 pointer-events-none z-0" />
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Seletor Toggle */}
        <div className="mb-12">
          <Toggle activeTab={activeTab} onChange={setActiveTab} />
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'mej' ? (
            /* CONTAINER M.E.J */
            <motion.div
              key="mej"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center pb-12"
            >
              {/* Header MEJ */}
              <div className="text-center max-w-[800px] px-4">
                <h1 className="text-nuca-primary-dark font-rubik text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                  Potencialize o impacto da sua EJ com o NuCa
                </h1>
                <p className="text-nuca-text-dark-grey font-rubik text-lg sm:text-xl font-normal leading-relaxed">
                  Conecte-se com os melhores talentos jovens da região e fortaleça sua presença no ecossistema empreendedor através do{' '}
                  <span className="text-nuca-secondary font-semibold">Núcleo Campinas.</span>
                </p>
              </div>

              {/* Botões MEJ */}
              <div className="flex gap-4 mt-8 justify-center max-[768px]:flex-col max-[768px]:w-full max-[768px]:px-4">
                <Button 
                  variant="primary" 
                  className="w-[223px] max-[768px]:w-full rounded-xl shadow-lg hover:shadow-nuca-secondary/30 h-12 text-base font-semibold"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Quero Federar Minha EJ
                </Button>
                <Button 
                  variant="outline" 
                  className="w-[140px] max-[768px]:w-full rounded-xl h-12 text-base font-semibold"
                  onClick={() => {
                    const el = document.getElementById('about');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Saiba mais
                </Button>
              </div>

              {/* Cards MEJ */}
              <div className="flex gap-8 lg:gap-12 mt-20 justify-center flex-wrap max-[768px]:flex-col max-[768px]:w-full max-[768px]:px-4">
                {/* Card 1: Segurança e Suporte */}
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 0, zIndex: 10 }}
                  initial={{ rotate: -1.5 }}
                  className="relative w-[350px] min-h-[260px] p-8 flex flex-col items-start bg-white shadow-md border border-slate-100 rounded-2xl max-[768px]:w-full max-[768px]:rotate-0 transition-all duration-300 hover:shadow-xl hover:border-nuca-secondary/20"
                >
                  {/* Efeito Fita Adesiva (Verde MEJ) */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-nuca-secondary/15 backdrop-blur-[1px] rotate-[-1.5deg] border-l border-r border-dashed border-nuca-secondary/20 pointer-events-none" />
                  
                  <div className="w-12 h-12 rounded-full bg-nuca-secondary/10 flex items-center justify-center mb-5">
                    <img src={shieldIcon} className="h-6 w-6" alt="Suporte" />
                  </div>
                  <h3 className="text-nuca-primary-dark font-rubik text-xl font-bold mb-3">
                    Segurança e Suporte ao Selo EJ
                  </h3>
                  <p className="text-slate-600 font-rubik text-sm sm:text-base font-normal leading-relaxed text-left">
                    Auxílio direto na regulamentação jurídica e contábil, garantindo a conformidade e a obtenção do Selo EJ.
                  </p>
                </motion.div>

                {/* Card 2: Conexão */}
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 0, zIndex: 10 }}
                  initial={{ rotate: 1 }}
                  className="relative w-[350px] min-h-[260px] p-8 flex flex-col items-start bg-white shadow-md border border-slate-100 rounded-2xl max-[768px]:w-full max-[768px]:rotate-0 transition-all duration-300 hover:shadow-xl hover:border-nuca-secondary/20"
                >
                  {/* Efeito Fita Adesiva (Verde MEJ) */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-nuca-secondary/15 backdrop-blur-[1px] rotate-[1deg] border-l border-r border-dashed border-nuca-secondary/20 pointer-events-none" />
                  
                  <div className="w-12 h-12 rounded-full bg-nuca-secondary/10 flex items-center justify-center mb-5">
                    <img src={groupIcon} className="h-6 w-6" alt="Rede" />
                  </div>
                  <h3 className="text-nuca-primary-dark font-rubik text-xl font-bold mb-3">
                    Conexão com a Rede Campinas
                  </h3>
                  <p className="text-slate-600 font-rubik text-sm sm:text-base font-normal leading-relaxed text-left">
                    Networking ativo com mais de 1.000 empresários juniores para troca de experiências e benchmarking.
                  </p>
                </motion.div>

                {/* Card 3: Representatividade */}
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 0, zIndex: 10 }}
                  initial={{ rotate: -0.5 }}
                  className="relative w-[350px] min-h-[260px] p-8 flex flex-col items-start bg-white shadow-md border border-slate-100 rounded-2xl max-[768px]:w-full max-[768px]:rotate-0 transition-all duration-300 hover:shadow-xl hover:border-nuca-secondary/20"
                >
                  {/* Efeito Fita Adesiva (Verde MEJ) */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-nuca-secondary/15 backdrop-blur-[1px] rotate-[-0.5deg] border-l border-r border-dashed border-nuca-secondary/20 pointer-events-none" />
                  
                  <div className="w-12 h-12 rounded-full bg-nuca-secondary/10 flex items-center justify-center mb-5">
                    <img src={domainIcon} className="h-6 w-6" alt="Representatividade" />
                  </div>
                  <h3 className="text-nuca-primary-dark font-rubik text-xl font-bold mb-3">
                    Representatividade Institucional
                  </h3>
                  <p className="text-slate-600 font-rubik text-sm sm:text-base font-normal leading-relaxed text-left">
                    Defesa dos interesses das Empresas Juniores frente às universidades, mercado e poder público.
                  </p>
                </motion.div>
              </div>

              {/* Sub-seção MEJ: Impacto Real & Post-its */}
              <div className="w-full pt-32">
                <div className="flex flex-col gap-16">
                  {/* Linha 1: Impacto Real */}
                  <div className="w-full bg-white/70 backdrop-blur-sm rounded-[32px] border border-slate-100 py-10 px-6 sm:px-12 flex justify-center items-center shadow-sm">
                    <div className="w-full flex justify-between items-center max-[1024px]:flex-col max-[1024px]:gap-8 max-[1024px]:text-center">
                      <div className="max-w-[375px] text-left max-[1024px]:text-center max-[1024px]:max-w-full">
                        <h3 className="text-nuca-primary-dark font-rubik text-2xl sm:text-3xl font-bold mb-2">
                          Impacto Real
                        </h3>
                        <p className="text-nuca-text-dark-grey font-rubik text-sm sm:text-base font-medium leading-relaxed">
                          Números que comprovam a força da nossa rede na região de Campinas.
                        </p>
                      </div>

                      <div className="flex gap-6 sm:gap-10 max-[550px]:flex-col max-[550px]:w-full">
                        <Card variant="impact" className="w-[200px] h-[140px] rounded-2xl border-slate-100 flex flex-col justify-center items-start p-6">
                          <img src={predioIcon} className="h-6 w-6 mb-2" alt="EJs" />
                          <p className="text-slate-500 font-rubik text-xs font-semibold uppercase tracking-wider">
                            EJs federadas
                          </p>
                          <span className="text-nuca-primary-dark text-3xl font-bold leading-none mt-1">
                            +45
                          </span>
                        </Card>

                        <Card variant="impact" className="w-[200px] h-[140px] rounded-2xl border-slate-100 flex flex-col justify-center items-start p-6">
                          <img src={dinheiroIcon} className="h-6 w-6 mb-2" alt="Faturamento" />
                          <p className="text-slate-500 font-rubik text-xs font-semibold uppercase tracking-wider">
                            Faturamento
                          </p>
                          <span className="text-nuca-primary-dark text-3xl font-bold leading-none mt-1">
                            R$ +2,2M
                          </span>
                        </Card>

                        <Card variant="impact" className="w-[200px] h-[140px] rounded-2xl border-slate-100 flex flex-col justify-center items-start p-6">
                          <img src={calendarioIcon} className="h-6 w-6 mb-2" alt="Anos" />
                          <p className="text-slate-500 font-rubik text-xs font-semibold uppercase tracking-wider">
                            Anos de Impacto
                          </p>
                          <span className="text-nuca-primary-dark text-3xl font-bold leading-none mt-1">
                            +15
                          </span>
                        </Card>
                      </div>
                    </div>
                  </div>

                  {/* Linha 2: Necessidade do Futuro */}
                  <div className="w-full py-6 flex justify-center items-center">
                    <div className="w-full flex justify-between items-center max-[1024px]:w-[90%] max-[1024px]:flex-col max-[1024px]:gap-12 max-[1024px]:w-full">
                      <div className="max-w-[557px] text-left max-[1024px]:text-center">
                        <h2 className="text-nuca-primary-dark font-rubik text-3xl sm:text-4xl font-bold mb-2">
                          Necessidade do futuro
                        </h2>
                        <p className="text-nuca-secondary font-rubik text-sm italic font-semibold tracking-wider mb-4 uppercase">
                          Movimento Empresa Júnior
                        </p>
                        <p className="text-slate-600 font-rubik text-base sm:text-lg md:text-[20px] font-normal leading-relaxed">
                          O mercado de trabalho futuro demanda certas habilidades, e o MEJ é a oportunidade ideal de desenvolvimento do que o mercado pede.
                        </p>
                      </div>

                      {/* Post-its */}
                      <div className="flex flex-col gap-5 max-[480px]:w-full">
                        <div className="flex w-[345px] h-[85px] p-5 flex-col items-start rounded-[16px_0_16px_0] bg-nuca-blue-medium justify-center max-[480px]:w-full shadow-md">
                          <p className="text-white font-rubik text-xs sm:text-sm leading-snug text-left font-medium">
                            <span className="text-white text-lg font-bold">52,98%</span>
                            <br />
                            dos pós-juniores empregados em <span className="font-bold text-white underline decoration-white/40">até 3 meses.</span>
                          </p>
                        </div>

                        <div className="flex w-[345px] h-[85px] p-5 flex-col items-start rounded-[16px_0_16px_0] bg-nuca-secondary justify-center max-[480px]:w-full shadow-md">
                          <p className="text-white font-rubik text-xs sm:text-sm leading-snug text-left font-medium">
                            <span className="text-white text-lg font-bold">87%</span>
                            <br />
                            dos pós-juniores encontram <span className="font-bold text-white underline decoration-white/40">soluções criativas.</span>
                          </p>
                        </div>

                        <div className="flex w-[345px] h-[85px] p-5 flex-col items-start rounded-[16px_0_16px_0] bg-nuca-blue-medium justify-center max-[480px]:w-full shadow-md">
                          <p className="text-white font-rubik text-xs sm:text-sm leading-snug text-left font-medium">
                            <span className="text-white text-lg font-bold">90%</span>
                            <br />
                            dos pós-juniores conseguem <span className="font-bold text-white underline decoration-white/40">liderar equipes com frequência.</span>
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center pb-12"
            >
              {/* Header Parceiros */}
              <div className="text-center max-w-[800px] px-4">
                <h1 className="text-nuca-primary-dark font-rubik text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                  Conecte sua marca com os talentos que liderarão o futuro do mercado
                </h1>
                <p className="text-nuca-text-dark-grey font-rubik text-lg sm:text-xl font-normal leading-relaxed">
                  Conecte sua marca aos talentos que liderarão o{' '}
                  <span className="text-nuca-primary font-semibold">futuro do mercado.</span>
                </p>
              </div>

              {/* Botões Parceiros */}
              <div className="flex gap-4 mt-8 justify-center max-[768px]:flex-col max-[768px]:w-full max-[768px]:px-4">
                <Button 
                  variant="secondary" 
                  className="w-[223px] max-[768px]:w-full rounded-xl shadow-lg hover:shadow-nuca-primary/30 h-12 text-base font-semibold"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Seja um parceiro NuCa
                </Button>
                <Button 
                  variant="outline" 
                  className="w-[140px] max-[768px]:w-full rounded-xl h-12 text-base font-semibold"
                  onClick={() => {
                    const el = document.getElementById('about');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Saiba mais
                </Button>
              </div>

              {/* Cards Parceiros */}
              <div className="flex gap-8 lg:gap-12 mt-20 justify-center flex-wrap max-[768px]:flex-col max-[768px]:w-full max-[768px]:px-4">
                {/* Card 1: Acesso a Talentos */}
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 0, zIndex: 10 }}
                  initial={{ rotate: -1 }}
                  className="relative w-[350px] min-h-[260px] p-8 flex flex-col items-start bg-white shadow-md border border-slate-100 rounded-2xl max-[768px]:w-full max-[768px]:rotate-0 transition-all duration-300 hover:shadow-xl hover:border-nuca-primary/20"
                >
                  {/* Efeito Fita Adesiva (Azul Primário) */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-nuca-primary/15 backdrop-blur-[1px] rotate-[-1deg] border-l border-r border-dashed border-nuca-primary/20 pointer-events-none" />
                  
                  <div className="w-12 h-12 rounded-full bg-nuca-primary/10 flex items-center justify-center mb-5">
                    <img src={personSearchIcon} className="h-6 w-6" alt="Acesso a Talentos" />
                  </div>
                  <h3 className="text-nuca-primary-dark font-rubik text-xl font-bold mb-3">
                    Acesso a Talentos de Alta Performance
                  </h3>
                  <p className="text-slate-600 font-rubik text-sm sm:text-base font-normal leading-relaxed text-left">
                    Conecte-se diretamente com jovens universitários engajados e de alto potencial das melhores Empresas Juniores da região.
                  </p>
                </motion.div>

                {/* Card 2: Marca Empregadora */}
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 0, zIndex: 10 }}
                  initial={{ rotate: 1.5 }}
                  className="relative w-[350px] min-h-[260px] p-8 flex flex-col items-start bg-white shadow-md border border-slate-100 rounded-2xl max-[768px]:w-full max-[768px]:rotate-0 transition-all duration-300 hover:shadow-xl hover:border-nuca-primary/20"
                >
                  {/* Efeito Fita Adesiva (Azul Primário) */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-nuca-primary/15 backdrop-blur-[1px] rotate-[1.5deg] border-l border-r border-dashed border-nuca-primary/20 pointer-events-none" />
                  
                  <div className="w-12 h-12 rounded-full bg-nuca-primary/10 flex items-center justify-center mb-5">
                    <img src={megafoneIcon} className="h-6 w-6" alt="Marca Empregadora" />
                  </div>
                  <h3 className="text-nuca-primary-dark font-rubik text-xl font-bold mb-3">
                    Fortalecimento de Marca Empregadora
                  </h3>
                  <p className="text-slate-600 font-rubik text-sm sm:text-base font-normal leading-relaxed text-left">
                    Posicione sua marca como referência e primeira escolha para as futures lideranças no mercado em nossos eventos e ações.
                  </p>
                </motion.div>

                {/* Card 3: Impacto Educação */}
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 0, zIndex: 10 }}
                  initial={{ rotate: -1.5 }}
                  className="relative w-[350px] min-h-[260px] p-8 flex flex-col items-start bg-white shadow-md border border-slate-100 rounded-2xl max-[768px]:w-full max-[768px]:rotate-0 transition-all duration-300 hover:shadow-xl hover:border-nuca-primary/20"
                >
                  {/* Efeito Fita Adesiva (Azul Primário) */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-nuca-primary/15 backdrop-blur-[1px] rotate-[-1.5deg] border-l border-r border-dashed border-nuca-primary/20 pointer-events-none" />
                  
                  <div className="w-12 h-12 rounded-full bg-nuca-primary/10 flex items-center justify-center mb-5">
                    <img src={schoolIcon} className="h-6 w-6" alt="Educação" />
                  </div>
                  <h3 className="text-nuca-primary-dark font-rubik text-xl font-bold mb-3">
                    Impacto na Educação Brasileira
                  </h3>
                  <p className="text-slate-600 font-rubik text-sm sm:text-base font-normal leading-relaxed text-left">
                    Contribua ativamente para o desenvolvimento prático dos estudantes e fomente uma educação empreendedora de qualidade no Brasil.
                  </p>
                </motion.div>
              </div>

              {/* Sub-seção Parceiros: Logos & Jornada */}
              <div className="w-full pt-20 flex flex-col items-center">
                {/* Grid de Logos */}
                <h2 className="text-[#0f172a] font-rubik text-2xl font-bold tracking-wide mb-8">
                  NOSSOS PARCEIROS
                </h2>
                
                <div className="grid grid-cols-4 gap-6 w-full max-w-[1100px] px-4 max-[1024px]:grid-cols-2 max-[480px]:grid-cols-1">
                  {['Siemens Energy', 'Renner', 'Bosch', 'Raízen', 'Ambev', 'Stone', 'Bradesco', 'TV Globo'].map((logoName, idx) => (
                    <Card 
                      variant="grid" 
                      key={idx}
                      className="group select-none border-slate-100 bg-white shadow-sm flex items-center justify-center h-16 p-2 rounded-xl transition-all duration-300 hover:border-slate-200 hover:shadow-md hover:scale-[1.02]"
                    >
                      <PartnerLogo name={logoName} />
                    </Card>
                  ))}
                </div>

                {/* Jornada de Marca */}
                <h2 className="text-nuca-primary-dark font-rubik text-2xl sm:text-3xl font-bold tracking-wide mt-28 mb-12 max-[768px]:mt-20 text-center px-4">
                  NOSSA JORNADA DE MARCA
                </h2>

                <div className="flex flex-row max-[768px]:flex-col gap-8 sm:gap-12 md:gap-16 justify-center items-center w-full max-w-[1000px] px-4">
                  {/* Coluna de Textos */}
                  <div className="flex flex-col gap-6 md:gap-8 w-full max-w-[480px] justify-between">
                    <div className="text-right max-[768px]:text-center">
                      <h4 className="text-nuca-primary-dark font-rubik text-lg md:text-xl font-bold mb-2">Visibilidade & Posicionamento</h4>
                      <p className="text-slate-600 font-rubik text-sm md:text-base leading-relaxed">
                        Amplie sua visibilidade e posicione sua marca como referência no ecossistema empreendedor universitário.
                      </p>
                    </div>

                    <div className="text-right max-[768px]:text-center">
                      <h4 className="text-nuca-primary-dark font-rubik text-lg md:text-xl font-bold mb-2">Impulsione sua Força</h4>
                      <p className="text-slate-600 font-rubik text-sm md:text-base leading-relaxed">
                        Encontre os talentos ideais e impulsione sua força de trabalho com a nova geração de profissionais.
                      </p>
                    </div>

                    <div className="text-right max-[768px]:text-center">
                      <h4 className="text-nuca-primary-dark font-rubik text-lg md:text-xl font-bold mb-2">Conexões Autênticas</h4>
                      <p className="text-slate-600 font-rubik text-sm md:text-base leading-relaxed">
                        Crie conexões autênticas e inspire a próxima geração de líderes, gerando engajamento profundo com sua marca.
                      </p>
                    </div>
                  </div>

                  {/* Coluna da Imagem (Sempre esticada para ter a altura exata da coluna de textos, contendo a imagem em escala proporcional) */}
                  <div className="w-[50px] sm:w-[70px] md:w-[90px] shrink-0 flex justify-center items-center py-2 max-[768px]:rotate-90 max-[768px]:w-[40px] max-[768px]:py-4">
                    <img src={jornadaIcon} className="h-full max-h-[300px] md:max-h-[360px] w-auto object-contain md:scale-105" alt="Jornada Icon" />
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
