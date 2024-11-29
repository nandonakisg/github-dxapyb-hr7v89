import React from 'react';
import { Clock } from 'lucide-react';

export function Header() {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#1a2332] border-b border-[#2a3444] h-[80px] flex items-center px-6">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-3xl font-bold text-white">NSW NDC Erskine Park - AMR Picking</h1>
        <div className="flex items-center gap-3 text-2xl font-medium text-slate-200">
          <Clock className="h-8 w-8" />
          {currentTime.toLocaleString()}
        </div>
      </div>
    </div>
  );
}