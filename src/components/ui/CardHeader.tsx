import React from 'react';

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`p-6 border-b border-[#2a3444] ${className}`}>
      {children}
    </div>
  );
}