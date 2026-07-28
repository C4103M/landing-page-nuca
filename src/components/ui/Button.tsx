import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'header';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 cursor-pointer focus:outline-none';
  
  const variants = {
    // Verde / Secundário (MEJ)
    primary: 'bg-nuca-secondary text-white hover:bg-opacity-90 active:scale-95 shadow-md shadow-nuca-secondary/20 px-6 py-3 text-base h-10',
    // Azul / Primário (Parceiros)
    secondary: 'bg-nuca-primary text-white hover:bg-opacity-90 active:scale-95 shadow-md shadow-nuca-primary/20 px-6 py-3 text-base h-10',
    // Outline com fundo branco / sombra suave
    outline: 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 active:scale-95 shadow-sm px-6 py-3 text-base h-10',
    // Botão de cabeçalho
    header: 'bg-nuca-secondary text-white hover:bg-opacity-90 active:scale-95 px-5 py-2 text-sm font-semibold h-[48px] max-[428px]:h-[24px] max-[428px]:px-3 max-[428px]:text-[12px] rounded-lg border-none',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
