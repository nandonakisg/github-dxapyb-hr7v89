import React from 'react';
import { Card } from './ui/Card';
import { CardHeader } from './ui/CardHeader';

interface CarrierData {
  carrier: string;
  allocated: number;
  picked: number;
}

interface CarrierStatsProps {
  carriers: CarrierData[];
  grandTotal: {
    allocated: number;
    picked: number;
  };
}

export function CarrierStats({ carriers, grandTotal }: CarrierStatsProps) {
  return (
    <Card gradient>
      <CardHeader>
        <h2 className="text-3xl font-bold text-white">Carrier Status</h2>
      </CardHeader>
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>Carrier</th>
              <th className="text-right">Allocated</th>
              <th className="text-right">Picked</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#2a3444]/50 grand-total">
              <td className="font-semibold">Grand Total</td>
              <td className="text-right font-semibold">{grandTotal.allocated}</td>
              <td className="text-right font-semibold">{grandTotal.picked}</td>
            </tr>
            {carriers.map((carrier) => (
              <tr key={carrier.carrier}>
                <td>{carrier.carrier}</td>
                <td className="text-right">{carrier.allocated}</td>
                <td className="text-right">{carrier.picked}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}