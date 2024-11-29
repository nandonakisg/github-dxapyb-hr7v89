import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export function Card({ children, className = '', gradient = false }: CardProps) {
  return (
    <div className={`
      rounded-xl overflow-hidden
      ${gradient 
        ? 'bg-gradient-to-br from-[#1a2332] to-[#1e293b]' 
        : 'bg-[#1a2332]'
      }
      ${className}
    `}>
      {children}
    </div>
  );
}