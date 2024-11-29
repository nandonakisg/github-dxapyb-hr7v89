import React from 'react';
import { formatDecimal } from '../utils/formatters';

interface Picker {
  id: number;
  active: boolean;
  operator: string;
  lph: number;
  lines: number;
  hoursActive: number;
  minsSinceLastSeen: number;
}

interface PickerTableProps {
  pickers: Picker[];
  grandTotal: {
    lph: number;
    lines: number;
    hoursActive: number;
  };
}

export function PickerTable({ pickers, grandTotal }: PickerTableProps) {
  return (
    <div className="table-container bg-[#1a2332] rounded-xl">
      <div className="p-3 border-b border-[#2a3444]">
        <h2 className="text-2xl font-bold text-white">Picker Status</h2>
      </div>
      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Operator</th>
              <th className="text-right">LPH</th>
              <th className="text-right">Lines</th>
              <th className="text-right">Hours</th>
              <th className="text-right">Last Seen</th>
            </tr>
          </thead>
          <tbody>
            <tr className="grand-total">
              <td colSpan={2}>Grand Total</td>
              <td className="text-right">{grandTotal.lph}</td>
              <td className="text-right">{grandTotal.lines}</td>
              <td className="text-right">{formatDecimal(grandTotal.hoursActive)}</td>
              <td className="text-right">-</td>
            </tr>
            {pickers.map((picker) => (
              <tr key={picker.id}>
                <td>
                  <span className={picker.active ? 'status-active' : 'status-inactive'}>
                    {picker.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>{picker.operator}</td>
                <td className="text-right">{picker.lph}</td>
                <td className="text-right">{picker.lines}</td>
                <td className="text-right">{formatDecimal(picker.hoursActive)}</td>
                <td className="text-right">{picker.minsSinceLastSeen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}