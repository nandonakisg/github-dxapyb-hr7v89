import React from 'react';

interface PickTargetProps {
  target: number;
}

export function PickTarget({ target }: PickTargetProps) {
  return (
    <div className="bg-[#6366f1] rounded-xl p-4">
      <div className="text-lg font-medium text-indigo-200">Pick Target</div>
      <div className="text-4xl font-bold text-white mt-2">{target}</div>
    </div>
  );
}