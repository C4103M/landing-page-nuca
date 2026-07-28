import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toggle } from './ui/Toggle';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

// Importando os ícones da pasta assets
import shieldIcon from '../assets/sec4-icons/shield.svg';
import groupIcon from '../assets/sec4-icons/group.svg';
import domainIcon from '../assets/sec4-icons/domain.svg';
import predioIcon from '../assets/sec4-icons/predio.png';
import dinheiroIcon from '../assets/sec4-icons/dinheiro.png';
import calendarioIcon from '../assets/sec4-icons/calendario.png';
import personSearchIcon from '../assets/sec4-icons/person_search.svg';
import megafoneIcon from '../assets/sec4-icons/megafone.svg';
import schoolIcon from '../assets/sec4-icons/school.svg';
import jornadaIcon from '../assets/sec4-icons/jornada-icon.png';

export const PartnersSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mej' | 'partners'>('mej');

  return (
    <section id="parceiros" className="w-full bg-[#f1efef] py-16 box-border max-[480px]:px-4">
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
              <h1 className="text-[#131516] font-rubik text-[32px] font-semibold mt-10 mb-4">
                Potencialize o impacto da sua EJ com o NuCa
              </h1>
              <p className="text-[#646464] font-rubik text-[20px] font-medium leading-relaxed">
                Conecte-se com os melhores talentos jovens da região e fortaleça sua presença no ecossistema empreendedor através do{' '}
                <span className="text-nuca-secondary font-semibold">Núcleo Campinas.</span>
              </p>
            </div>

            {/* Botões MEJ */}
            <div className="flex gap-4 mt-8 justify-center max-[480px]:flex-col max-[480px]:w-full max-[480px]:px-4">
              <Button variant="primary" className="w-[223px] max-[480px]:w-full">
                Quero Federar Minha EJ
              </Button>
              <Button variant="outline" className="w-[120px] max-[480px]:w-full">
                Saiba mais
              </Button>
            </div>

            {/* Cards MEJ */}
            <div className="flex gap-7 mt-24 justify-center max-[1024px]:flex-wrap max-[480px]:flex-col max-[480px]:w-full max-[480px]:px-4">
              <Card variant="feature">
                <img src={shieldIcon} className="h-8 mb-5" alt="Suporte" />
                <p className="text-nuca-secondary font-rubik text-xl font-semibold mb-3">
                  Segurança e Suporte ao Selo EJ
                </p>
                <p className="text-[#646464] font-rubik text-base font-normal text-left leading-snug">
                  Auxílio direto na regulamentação jurídica e contábil, garantindo a conformidade e a obtenção do Selo EJ.
                </p>
              </Card>

              <Card variant="feature">
                <img src={groupIcon} className="h-8 mb-5" alt="Rede" />
                <p className="text-nuca-secondary font-rubik text-xl font-semibold mb-3">
                  Conexão com a Rede Campinas
                </p>
                <p className="text-[#646464] font-rubik text-base font-normal text-left leading-snug">
                  Networking active com mais de 1.000 empresários juniores para troca de experiências e benchmarking.
                </p>
              </Card>

              <Card variant="feature">
                <img src={domainIcon} className="h-8 mb-5" alt="Representatividade" />
                <p className="text-nuca-secondary font-rubik text-xl font-semibold mb-3">
                  Representatividade Institucional
                </p>
                <p className="text-[#646464] font-rubik text-base font-normal text-left leading-snug">
                  Defesa dos interesses das Empresas Juniores frente às universidades, mercado e poder público.
                </p>
              </Card>
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
                      <Card variant="impact" className="w-[150px] h-[110px] bg-[#c9c9c9] rounded-lg">
                        <img src={predioIcon} className="h-7 mb-2" alt="EJs" />
                        <p className="text-[#646464] font-rubik text-xs font-semibold">
                          EJs federadas <span className="block text-black text-2xl font-bold mt-1">+30</span>
                        </p>
                      </Card>

                      <Card variant="impact" className="w-[150px] h-[110px] bg-[#c9c9c9] rounded-lg">
                        <img src={dinheiroIcon} className="h-7 mb-2" alt="Faturamento" />
                        <p className="text-[#646464] font-rubik text-xs font-semibold">
                          Em Faturamento <span className="block text-black text-2xl font-bold mt-1">R$ +2,2M</span>
                        </p>
                      </Card>

                      <Card variant="impact" className="w-[150px] h-[110px] bg-[#c9c9c9] rounded-lg">
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
              <h1 className="text-[#131516] font-rubik text-[32px] font-semibold mt-10 mb-4">
                Conecte sua marca com os talentos que liderarão o futuro do mercado
              </h1>
              <p className="text-[#646464] font-rubik text-[20px] font-medium leading-relaxed">
                Conecte sua marca aos talentos que liderarão o{' '}
                <span className="text-nuca-primary font-semibold">futuro do mercado.</span>
              </p>
            </div>

            {/* Botões Parceiros */}
            <div className="flex gap-4 mt-8 justify-center max-[480px]:flex-col max-[480px]:w-full max-[480px]:px-4">
              <Button variant="secondary" className="w-[223px] max-[480px]:w-full">
                Seja um parceiro NuCa
              </Button>
              <Button variant="outline" className="w-[120px] max-[480px]:w-full">
                Saiba mais
              </Button>
            </div>

            {/* Cards Parceiros */}
            <div className="flex gap-7 mt-24 justify-center max-[1024px]:flex-wrap max-[480px]:flex-col max-[480px]:w-full max-[480px]:px-4">
              <Card variant="feature">
                <img src={personSearchIcon} className="h-8 mb-5" alt="Acesso a Talentos" />
                <p className="text-nuca-primary font-rubik text-xl font-semibold mb-3">
                  Acesso a Talentos de Alta Performance
                </p>
                <p className="text-[#646464] font-rubik text-base font-normal text-left leading-snug">
                  Conecte-se diretamente com jovens universitários engajados e de alto potencial das melhores Empresas Juniores da região.
                </p>
              </Card>

              <Card variant="feature">
                <img src={megafoneIcon} className="h-8 mb-5" alt="Marca Empregadora" />
                <p className="text-nuca-primary font-rubik text-xl font-semibold mb-3">
                  Fortalecimento de Marca Empregadora
                </p>
                <p className="text-[#646464] font-rubik text-base font-normal text-left leading-snug">
                  Posicione sua marca como referência e primeira escolha para as futures lideranças no mercado em nossos eventos e ações.
                </p>
              </Card>

              <Card variant="feature">
                <img src={schoolIcon} className="h-8 mb-5" alt="Educação" />
                <p className="text-nuca-primary font-rubik text-xl font-semibold mb-3">
                  Impacto na Educação Brasileira
                </p>
                <p className="text-[#646464] font-rubik text-base font-normal text-left leading-snug">
                  Contribua ativamente para o desenvolvimento prático dos estudantes e fomente uma educação empreendedora de qualidade no Brasil.
                </p>
              </Card>
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
              <h2 className="text-[#0f172a] font-rubik text-2xl font-medium tracking-wide mt-24 mb-10 max-[480px]:mt-16">
                NOSSA JORNADA DE MARCA
              </h2>

              <div className="flex gap-[80px] justify-center items-center max-[1024px]:flex-col max-[1024px]:gap-10 max-[480px]:px-4">
                <div className="flex flex-col gap-8 max-w-[473px]">
                  <div className="text-right max-[1024px]:text-center">
                    <h4 className="text-black font-rubik text-xl font-medium mb-2">Visibilidade & Posicionamento</h4>
                    <p className="text-[#646464] font-rubik text-[16px] leading-relaxed max-[1024px]:mx-auto">
                      Amplie sua visibilidade e posicione sua marca como referência no ecossistema empreendedor universitário.
                    </p>
                  </div>

                  <div className="text-right max-[1024px]:text-center">
                    <h4 className="text-black font-rubik text-xl font-medium mb-2">Impulsione sua Força</h4>
                    <p className="text-[#646464] font-rubik text-[16px] leading-relaxed max-[1024px]:mx-auto">
                      Encontre os talentos ideais e impulsione sua força de trabalho com a nova geração de profissionais.
                    </p>
                  </div>

                  <div className="text-right max-[1024px]:text-center">
                    <h4 className="text-black font-rubik text-xl font-medium mb-2">Conexões Autênticas</h4>
                    <p className="text-[#646464] font-rubik text-[16px] leading-relaxed max-[1024px]:mx-auto">
                      Crie conexões autênticas e inspire a próxima geração de líderes, gerando engajamento profundo com sua marca.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 max-[480px]:w-full flex justify-center">
                  <img src={jornadaIcon} className="h-[400px] object-contain max-[480px]:h-auto max-[480px]:w-[80%]" alt="Jornada Icon" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
