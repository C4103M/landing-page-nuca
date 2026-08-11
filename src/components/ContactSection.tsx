import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import canarioImg from '../assets/icons/canario.webp';

export const ContactSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 884);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    descricao: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const params = {
      name: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      title: formData.assunto,
      message: formData.descricao,
    };

    try {
      // Usando os IDs originais e a chave pública correspondente
      await emailjs.send(
        'service_0akr7wp',
        'template_bynu2r8',
        params,
        'ie7qCY7G09khlthBM'
      );
      
      setStatusMessage({ type: 'success', text: 'Email enviado com sucesso!' });
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        descricao: '',
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setStatusMessage({ type: 'error', text: 'Houve um erro ao enviar o email. Tente novamente mais tarde.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex justify-center items-center min-h-screen py-20 px-4 bg-nuca-secondary overflow-hidden">
      <div className="w-full max-w-[1200px] flex justify-center items-center gap-16 max-[884px]:flex-col max-[884px]:gap-10">
        
        {/* Lado Esquerdo: Card de Formulário */}
        <div className="w-1/2 flex justify-center items-center max-[884px]:w-full">
          <div className="w-[clamp(370px,100%,600px)] max-w-[450px] bg-[#EFEFEF] rounded-lg p-12 shadow-lg max-[480px]:px-6 max-[480px]:py-8 shrink-0">
            <h2 className="text-nuca-teal text-center text-2xl font-bold mb-6 leading-tight">
              Entre em contato <br />
              conosco
            </h2>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Nome */}
              <div className="flex flex-col items-center">
                <div className="w-full pl-[10%] text-left">
                  <label htmlFor="nome" className="block text-sm font-bold text-black mb-1">
                    Nome:
                  </label>
                </div>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome"
                  required
                  className="w-[80%] px-4 py-3 rounded-lg border border-gray-300 bg-nuca-bg-input text-sm text-gray-800 outline-none transition-colors duration-200 focus:border-nuca-teal"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col items-center">
                <div className="w-full pl-[10%] text-left">
                  <label htmlFor="email" className="block text-sm font-bold text-black mb-1">
                    E-mail:
                  </label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Digite um e-mail. Ex: teste@email.com"
                  required
                  className="w-[80%] px-4 py-3 rounded-lg border border-gray-300 bg-nuca-bg-input text-sm text-gray-800 outline-none transition-colors duration-200 focus:border-nuca-teal"
                />
              </div>

              {/* Telefone */}
              <div className="flex flex-col items-center">
                <div className="w-full pl-[10%] text-left">
                  <label htmlFor="telefone" className="block text-sm font-bold text-black mb-1">
                    Telefone:
                  </label>
                </div>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  placeholder="(99) 99999-9999"
                  maxLength={15}
                  required
                  className="w-[80%] px-4 py-3 rounded-lg border border-gray-300 bg-nuca-bg-input text-sm text-gray-800 outline-none transition-colors duration-200 focus:border-nuca-teal"
                />
              </div>

              {/* Assunto */}
              <div className="flex flex-col items-center">
                <div className="w-full pl-[10%] text-left">
                  <label htmlFor="assunto" className="block text-sm font-bold text-black mb-1">
                    Assunto:
                  </label>
                </div>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleInputChange}
                  required
                  className="w-[80%] px-4 py-3 rounded-lg border border-gray-300 bg-nuca-bg-input text-sm text-gray-800 outline-none transition-colors duration-200 focus:border-nuca-teal"
                />
              </div>

              {/* Descrição */}
              <div className="flex flex-col items-center">
                <div className="w-full pl-[10%] text-left">
                  <label htmlFor="descricao" className="block text-sm font-bold text-black mb-1">
                    Descrição:
                  </label>
                </div>
                <textarea
                  id="descricao"
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="w-[80%] px-4 py-3 rounded-lg border border-gray-300 bg-nuca-bg-input text-sm text-gray-800 outline-none transition-colors duration-200 focus:border-nuca-teal resize-none"
                />
              </div>

              {/* Botão Enviar */}
              <button
                type="submit"
                disabled={loading}
                className="w-[180px] block mx-auto py-3 bg-nuca-teal text-white text-base font-bold rounded-lg border-none cursor-pointer shadow-md hover:bg-[#007676] active:translate-y-[2px] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </form>

            {/* Mensagem de Feedback */}
            {statusMessage && (
              <div
                className={`mt-6 text-center text-sm font-semibold p-2.5 rounded-md ${
                  statusMessage.type === 'success' ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'
                }`}
              >
                {statusMessage.text}
              </div>
            )}
          </div>
        </div>

        {/* Lado Direito: Canário animado (saindo da direita e rotacionando) */}
        <div className="w-1/2 flex justify-center items-center max-[884px]:w-full overflow-visible">
          <motion.img
            src={canarioImg}
            alt="Canário NuCa"
            initial={{ opacity: 0, x: isMobile ? 100 : 300, rotate: 0 }}
            whileInView={{ opacity: 1, x: isMobile ? 0 : 140}}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-[145%] max-w-[680px] object-contain origin-center max-[884px]:w-[75%] max-[480px]:w-[90%]"
          />
        </div>

      </div>
    </section>
  );
};
