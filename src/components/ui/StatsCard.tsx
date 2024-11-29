import React from 'react';
import { Card } from './Card';

interface StatsCardProps {
  label: string;
  value: string | number;
  className?: string;
  gradient?: boolean;
}

export function StatsCard({ label, value, className = '', gradient = false }: StatsCardProps) {
  return (
    <Card gradient={gradient} className={`p-4 ${className}`}>
      <div className="text-base font-medium text-slate-400">{label}</div>
      <div className="text-3xl font-bold text-white mt-2">{value}</div>
    </Card>
  );
}