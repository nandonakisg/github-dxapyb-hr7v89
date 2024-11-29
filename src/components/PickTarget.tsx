import React from 'react';
import { StatsCard } from './ui/StatsCard';

interface PickTargetProps {
  target: number;
}

export function PickTarget({ target }: PickTargetProps) {
  return (
    <StatsCard
      label="Pick Target"
      value={target}
      className="bg-gradient-to-br from-indigo-600 to-indigo-700"
    />
  );
}