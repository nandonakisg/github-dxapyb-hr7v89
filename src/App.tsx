import React from 'react';
import { Header } from './components/Header';
import { PickerTable } from './components/PickerTable';
import { CarrierStats } from './components/CarrierStats';
import { TotalsPanel } from './components/TotalsPanel';
import { PickTarget } from './components/PickTarget';
import { StatsCard } from './components/ui/StatsCard';
import { pickerData, carrierData, totalsData } from './data/mockData';

export default function App() {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <div className="stats-grid">
          <PickTarget target={164} />
          <StatsCard
            label="Total Lines"
            value={totalsData.grandTotal.lines}
            gradient
          />
          <StatsCard
            label="Average LPH"
            value={totalsData.grandTotal.lph}
            gradient
          />
          <StatsCard
            label="Active Pickers"
            value={pickerData.pickers.filter(p => p.active).length}
            gradient
          />
        </div>
        
        <div className="main-grid">
          <PickerTable {...pickerData} />
          <div className="space-y-4">
            <CarrierStats {...carrierData} />
            <TotalsPanel {...totalsData} />
          </div>
        </div>
      </div>
    </div>
  );
}