import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import instagramIcon from '../assets/footer-icons/instagram.webp';
import whatsappIcon from '../assets/footer-icons/whatsapp.webp';
import linkedinIcon from '../assets/footer-icons/linkedin.webp';

export const Footer: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-nuca-dark-blue text-[#f3f3f3] py-16 px-5 text-sm leading-relaxed max-[768px]:py-10 max-[768px]:px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Grid Layout */}
        <div className="flex flex-wrap justify-between gap-[30px] max-[768px]:flex-col">
          
          {/* Coluna 1: Sobre */}
          <div className="flex-1 min-w-[250px] mb-5 max-[768px]:w-full">
            <h3 className="text-white text-[18px] font-bold mb-5 relative uppercase tracking-wider after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:bg-nuca-secondary after:w-10 after:h-[3px]">
              Núcleo Campinas
            </h3>
            <p className="text-nuca-text-grey mb-5 mt-4">
              Somos responsáveis por representar, conectar e potencializar o Movimento Empresa Júnior na Região Campinas.
            </p>
            <p className="text-nuca-text-grey mb-5">
              <strong>Missão:</strong> Formar, por meio da vivência empresarial, líderes comprometidos e capazes de transformar o Brasil em um país empreendedor.
            </p>
            <p className="text-nuca-text-grey font-bold">
              <span className="text-nuca-secondary">49 EJs • 13 Cidades • 14 IES</span>
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="flex-1 min-w-[250px] mb-5 max-[768px]:w-full">
            <h3 className="text-white text-[18px] font-bold mb-5 relative uppercase tracking-wider after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:bg-nuca-secondary after:w-10 after:h-[3px]">
              Navegação
            </h3>
            <ul className="list-none p-0 mt-4 space-y-3">
              <li>
                <button
                  onClick={() => handleScroll('about')}
                  className="text-nuca-text-grey hover:text-nuca-secondary hover:translate-x-1 transition-all duration-300 bg-transparent border-none cursor-pointer inline-block text-left"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('services')}
                  className="text-nuca-text-grey hover:text-nuca-secondary hover:translate-x-1 transition-all duration-300 bg-transparent border-none cursor-pointer inline-block text-left"
                >
                  Portfólio de Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('parceiros')}
                  className="text-nuca-text-grey hover:text-nuca-secondary hover:translate-x-1 transition-all duration-300 bg-transparent border-none cursor-pointer inline-block text-left"
                >
                  Seja um Parceiro
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('contact')}
                  className="text-nuca-text-grey hover:text-nuca-secondary hover:translate-x-1 transition-all duration-300 bg-transparent border-none cursor-pointer inline-block text-left"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Fale Conosco */}
          <div className="flex-1 min-w-[250px] mb-5 max-[768px]:w-full">
            <h3 className="text-white text-[18px] font-bold mb-5 relative uppercase tracking-wider after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:bg-nuca-secondary after:w-10 after:h-[3px]">
              Fale Conosco
            </h3>
            <p className="text-nuca-text-grey mb-5 mt-4">
              Quer impulsionar sua empresa ou apoiar o MEJ?
            </p>

            <div className="flex items-start mb-4 text-nuca-text-grey">
              <Mail className="text-nuca-secondary mr-2.5 mt-1 shrink-0" size={18} />
              <div className="flex flex-col gap-1 text-sm">
                <a href="mailto:vpnegocios@nucleocampinas.org" className="hover:text-white hover:underline">
                  vpnegocios@nucleocampinas.org
                </a>
                <a href="mailto:gabriella.reis@nucleocampinas.org" className="hover:text-white hover:underline">
                  gabriella.reis@nucleocampinas.org
                </a>
                <a href="mailto:vinicius.lenci@nucleocampinas.org" className="hover:text-white hover:underline">
                  vinicius.lenci@nucleocampinas.org
                </a>
              </div>
            </div>

            <div className="flex items-center text-nuca-text-grey">
              <MapPin className="text-nuca-secondary mr-2.5 shrink-0" size={18} />
              <span>Campinas e Região, SP</span>
            </div>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div className="flex-1 min-w-[250px] mb-5 max-[768px]:w-full">
            <h3 className="text-white text-[18px] font-bold mb-5 relative uppercase tracking-wider after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:bg-nuca-secondary after:w-10 after:h-[3px]">
              Acompanhe
            </h3>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                aria-label="Instagram"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-nuca-secondary hover:text-nuca-dark-blue"
              >
                <img src={instagramIcon} className="w-[60%] h-[60%] object-contain" alt="Instagram" />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-nuca-secondary hover:text-nuca-dark-blue"
              >
                <img src={whatsappIcon} className="w-[60%] h-[60%] object-contain" alt="WhatsApp" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-nuca-secondary hover:text-nuca-dark-blue"
              >
                <img src={linkedinIcon} className="w-[60%] h-[60%] object-contain" alt="LinkedIn" />
              </a>
            </div>

            <div className="mt-[30px]">
              <h4 className="text-white text-sm font-bold mb-2">Afiliação:</h4>
              <div className="flex gap-2.5 text-nuca-text-grey font-bold text-sm">
                <span>BRASIL JÚNIOR</span> | <span>FEJESP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-white/10 mt-10 pt-5 text-center text-nuca-text-grey text-xs">
          <p>&copy; {new Date().getFullYear()} Núcleo Campinas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
