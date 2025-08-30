
import React from 'react';
import { CheckCircleIcon } from './Icons';

interface PricingTableProps {
  title: string;
  headers: string[];
  data: string[][];
  note?: string;
  facilities?: string[];
}

const PricingTable: React.FC<PricingTableProps> = ({ title, headers, data, note, facilities }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {headers.map((header, index) => (
                <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className={`px-6 py-4 whitespace-nowrap text-sm ${cellIndex === 0 ? 'font-medium text-gray-900' : 'text-gray-500'}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       {note && <p className="text-xs text-gray-500 mt-4 text-center">{note}</p>}
       {facilities && (
        <div className="pt-6 mt-6 border-t border-gray-200">
            <h4 className="text-xl font-bold mb-4 text-gray-800 text-left">Facilities Include:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {facilities.map((facility, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                        <CheckCircleIcon className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0 mt-1" />
                        <span>{facility}</span>
                    </li>
                ))}
            </ul>
        </div>
      )}
    </div>
  );
};

export default PricingTable;
