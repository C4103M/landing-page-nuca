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
    // Seção 4: Segurança, Suporte, etc.
    feature: 'w-[380px] h-[260px] rounded-2xl border border-[#e4e3e3] bg-white shadow-[0_4px_24px_0_rgba(0,0,0,0.08)] p-[34px] flex flex-col items-start max-[480px]:w-full max-[480px]:h-auto',
    // Seção 4 (MEJ): Cards de Impacto Real
    impact: 'flex flex-col items-start p-5 rounded-lg w-[150px] h-[110px] bg-[#c9c9c9] max-[480px]:w-full max-[480px]:h-auto',
    // Seção 4 (Parceiros): Grid de Logos
    grid: 'bg-white text-nuca-primary font-bold w-[200px] h-[64px] rounded-md flex items-center justify-center text-center shadow-[0_2px_5px_rgba(0,0,0,0.05)] transition-all duration-200 cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)] max-[480px]:w-full',
  };

  return (
    <div className={`${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};
