import React from 'react';

/* ------------------------------ TIPOS ------------------------------ */

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean; // para activar/desactivar sombra
  rounded?: boolean; // para activar/desactivar bordes redondeados
  border?: boolean; // para activar/desactivar borde
  bgColor?: string; // color de fondo opcional
}

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

/* ------------------------------ COMPONENTE PRINCIPAL ------------------------------ */

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  shadow = true,
  rounded = true,
  border = true,
  bgColor = 'bg-white',
}) => {
  const classes = [
    rounded ? 'rounded-lg' : '',
    border ? 'border' : '',
    shadow ? 'shadow-sm' : '',
    bgColor,
    className,
  ].join(' ');

  return <div className={classes}>{children}</div>;
};

/* ------------------------------ HEADER ------------------------------ */

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>
  );
};

/* ------------------------------ CONTENT ------------------------------ */

const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
};

/* ------------------------------ FOOTER ------------------------------ */

const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => {
  return <div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>;
};

/* ------------------------------ EXPORTS ------------------------------ */

export { CardHeader, CardContent, CardFooter };
export default Card;
