import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'about' | 'feature' | 'impact' | 'grid';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'feature',
  ...props
}) => {
  const variantStyles = {
    // Seção 2: Missão, Visão, Valores
    about: 'w-[285px] h-[372px] rounded-[30px] relative transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] flex flex-col justify-center items-center overflow-hidden',
    // Seção 4: Segurança, Suporte, etc. (cantos assimétricos e borda sutil)
    feature: 'w-[380px] h-[260px] rounded-[32px_0_32px_0] border border-gray-200/80 bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] p-[34px] flex flex-col items-start max-[480px]:w-full max-[480px]:h-auto transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]',
    // Seção 4 (MEJ): Cards de Impacto Real (dimensões ampliadas e flexíveis para evitar quebras de texto)
    impact: 'flex flex-col items-start p-4 rounded-[16px_0_16px_0] w-[185px] min-h-[125px] h-auto bg-nuca-primary/5 border border-nuca-primary/10 max-[480px]:w-full transition-all duration-300 hover:bg-nuca-primary/10 shadow-sm',
    // Seção 4 (Parceiros): Grid de Logos (cantos assimétricos e hover aprimorado)
    grid: 'bg-white text-nuca-primary font-bold w-[200px] h-[64px] rounded-[12px_0_12px_0] border border-gray-100 flex items-center justify-center text-center shadow-[0_4px_15px_-3px_rgba(0,0,0,0.04)] transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:border-nuca-primary/30 hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.08)] max-[480px]:w-full',
  };

  return (
    <div className={`${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};
