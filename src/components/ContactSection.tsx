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
      await emailjs.send(
        'service_0akr7wp',
        'template_bynu2r8',
        params,
        'ie7qCY7G09khlthBM'
      );
      
      setStatusMessage({ type: 'success', text: 'Mensagem enviada com sucesso!' });
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        descricao: '',
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setStatusMessage({ type: 'error', text: 'Houve um erro ao enviar a mensagem. Tente novamente mais tarde.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex justify-center items-center min-h-screen py-20 px-6 sm:px-12 bg-nuca-secondary overflow-hidden">
      <div className="w-full max-w-[1200px] flex justify-center items-center gap-16 max-[884px]:flex-col max-[884px]:gap-12">
        
        {/* Lado Esquerdo: Card de Formulário */}
        <div className="w-1/2 flex justify-center items-center max-[884px]:w-full">
          <div className="w-full max-w-[480px] bg-white border border-slate-100 rounded-[32px_0_32px_0] p-8 md:p-10 shadow-2xl relative z-10">
            <h2 className="text-[#023C65] text-center text-3xl font-bold mb-8 leading-tight tracking-tight">
              Entre em contato conosco
            </h2>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              {/* Nome */}
              <div className="flex flex-col w-full gap-1.5">
                <label htmlFor="nome" className="text-sm font-bold text-slate-700 text-left">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f8fafc] text-sm text-slate-800 outline-none transition-all duration-200 focus:bg-white focus:border-nuca-teal focus:ring-2 focus:ring-nuca-teal/20"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col w-full gap-1.5">
                <label htmlFor="email" className="text-sm font-bold text-slate-700 text-left">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Ex: seuemail@dominio.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f8fafc] text-sm text-slate-800 outline-none transition-all duration-200 focus:bg-white focus:border-nuca-teal focus:ring-2 focus:ring-nuca-teal/20"
                />
              </div>

              {/* Telefone */}
              <div className="flex flex-col w-full gap-1.5">
                <label htmlFor="telefone" className="text-sm font-bold text-slate-700 text-left">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  placeholder="(99) 99999-9999"
                  maxLength={15}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f8fafc] text-sm text-slate-800 outline-none transition-all duration-200 focus:bg-white focus:border-nuca-teal focus:ring-2 focus:ring-nuca-teal/20"
                />
              </div>

              {/* Assunto */}
              <div className="flex flex-col w-full gap-1.5">
                <label htmlFor="assunto" className="text-sm font-bold text-slate-700 text-left">
                  Assunto
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleInputChange}
                  placeholder="Ex: Como ser parceiro"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f8fafc] text-sm text-slate-800 outline-none transition-all duration-200 focus:bg-white focus:border-nuca-teal focus:ring-2 focus:ring-nuca-teal/20"
                />
              </div>

              {/* Descrição */}
              <div className="flex flex-col w-full gap-1.5">
                <label htmlFor="descricao" className="text-sm font-bold text-slate-700 text-left">
                  Mensagem / Descrição
                </label>
                <textarea
                  id="descricao"
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleInputChange}
                  placeholder="Escreva sua mensagem aqui..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f8fafc] text-sm text-slate-800 outline-none transition-all duration-200 focus:bg-white focus:border-nuca-teal focus:ring-2 focus:ring-nuca-teal/20 resize-none"
                />
              </div>

              {/* Botão Enviar */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 mt-2 bg-nuca-teal text-white text-base font-bold rounded-xl border-none cursor-pointer shadow-lg hover:shadow-nuca-teal/25 active:translate-y-[2px] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-nuca-teal"
              >
                {loading ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>

            {/* Mensagem de Feedback */}
            {statusMessage && (
              <div
                className={`mt-6 text-center text-sm font-semibold p-3.5 rounded-xl border ${
                  statusMessage.type === 'success' 
                    ? 'text-green-700 bg-green-50 border-green-200/50' 
                    : 'text-red-700 bg-red-50 border-red-200/50'
                }`}
              >
                {statusMessage.text}
              </div>
            )}
          </div>
        </div>

        {/* Lado Direito: Canário animado */}
        <div className="w-1/2 flex justify-center items-center max-[884px]:w-full overflow-visible">
          <motion.img
            src={canarioImg}
            alt="Canário NuCa"
            initial={{ opacity: 0, x: isMobile ? 80 : 250 }}
            whileInView={{ opacity: 1, x: isMobile ? 0 : 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-[130%] max-w-[620px] object-contain origin-center max-[884px]:w-[70%] max-[480px]:w-[85%]"
          />
        </div>

      </div>
    </section>
  );
};
