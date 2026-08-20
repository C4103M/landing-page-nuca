import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import instagramIcon from '../assets/footer-icons/instagram.webp';
import whatsappIcon from '../assets/footer-icons/whatsapp.webp';
import linkedinIcon from '../assets/footer-icons/linkedin.webp';

export const Footer: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-nuca-dark-blue text-[#cbd5e1] py-16 px-6 sm:px-12 border-t border-white/5 relative z-10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Coluna 1: Sobre */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-white text-lg font-bold mb-6 relative uppercase tracking-wider after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:bg-nuca-secondary after:w-8 after:h-[3px] after:rounded-full">
              Núcleo Campinas
            </h3>
            <p className="text-slate-400 mt-2 mb-4 text-sm leading-relaxed">
              Representamos, conectamos e potencializamos o Movimento Empresa Júnior na Região de Campinas.
            </p>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              <strong>Missão:</strong> Formar, por meio da vivência empresarial, líderes comprometidos e capazes de transformar o Brasil.
            </p>
            <span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-bold text-nuca-secondary">
              49 EJs • 13 Cidades • 14 IES
            </span>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-white text-lg font-bold mb-6 relative uppercase tracking-wider after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:bg-nuca-secondary after:w-8 after:h-[3px] after:rounded-full">
              Navegação
            </h3>
            <ul className="list-none p-0 mt-2 space-y-3.5 w-full">
              {[
                { label: 'Sobre Nós', target: 'about' },
                { label: 'Portfólio de Serviços', target: 'services' },
                { label: 'Seja um Parceiro', target: 'parceiros' },
                { label: 'Contato', target: 'contact' }
              ].map((item, idx) => (
                <li key={idx} className="w-full">
                  <button
                    onClick={() => handleScroll(item.target)}
                    className="text-slate-400 hover:text-nuca-secondary focus:text-nuca-secondary hover:translate-x-1.5 transition-all duration-300 bg-transparent border-none cursor-pointer text-left text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-nuca-secondary rounded px-1.5 py-0.5"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Fale Conosco */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-white text-lg font-bold mb-6 relative uppercase tracking-wider after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:bg-nuca-secondary after:w-8 after:h-[3px] after:rounded-full">
              Fale Conosco
            </h3>
            <p className="text-slate-400 mt-2 mb-6 text-sm leading-relaxed">
              Quer impulsionar sua empresa ou apoiar o MEJ?
            </p>

            <div className="flex items-start mb-4 text-slate-400">
              <Mail className="text-nuca-secondary mr-3 mt-0.5 shrink-0" size={18} />
              <div className="flex flex-col gap-1.5 text-sm font-semibold">
                <a href="mailto:vpnegocios@nucleocampinas.org" className="hover:text-white transition-colors duration-200 hover:underline">
                  vpnegocios@nucleocampinas.org
                </a>
                <a href="mailto:gabriella.reis@nucleocampinas.org" className="hover:text-white transition-colors duration-200 hover:underline">
                  gabriella.reis@nucleocampinas.org
                </a>
                <a href="mailto:vinicius.lenci@nucleocampinas.org" className="hover:text-white transition-colors duration-200 hover:underline">
                  vinicius.lenci@nucleocampinas.org
                </a>
              </div>
            </div>

            <div className="flex items-center text-slate-400 mt-2">
              <MapPin className="text-nuca-secondary mr-3 shrink-0" size={18} />
              <span className="text-sm font-semibold">Campinas e Região, SP</span>
            </div>
          </div>

          {/* Coluna 4: Acompanhe */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-white text-lg font-bold mb-6 relative uppercase tracking-wider after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:bg-nuca-secondary after:w-8 after:h-[3px] after:rounded-full">
              Acompanhe
            </h3>
            <div className="flex gap-4 mt-2">
              {[
                { name: 'Instagram', icon: instagramIcon, url: 'https://instagram.com/nucleocampinas' },
                { name: 'WhatsApp', icon: whatsappIcon, url: '#' },
                { name: 'LinkedIn', icon: linkedinIcon, url: 'https://linkedin.com/company/nucleocampinas' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 transition-all duration-300 hover:bg-nuca-secondary hover:scale-105 outline-none focus-visible:ring-2 focus-visible:ring-nuca-secondary"
                >
                  <img src={social.icon} className="w-[60%] h-[60%] object-contain" alt={social.name} />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-3">Afiliação</h4>
              <div className="flex gap-3 text-slate-400 font-bold text-xs">
                <span className="hover:text-white transition-colors duration-200 cursor-pointer">BRASIL JÚNIOR</span>
                <span className="text-white/20">|</span>
                <span className="hover:text-white transition-colors duration-200 cursor-pointer">FEJESP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-white/5 pt-8 text-center text-slate-500 text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Núcleo Campinas. Todos os direitos reservados.</p>
          <p className="text-slate-600 font-medium">Desenvolvido com excelência</p>
        </div>
      </div>
    </footer>
  );
};
