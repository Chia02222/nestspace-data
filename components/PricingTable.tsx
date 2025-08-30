
import React from 'react';

interface PricingTableProps {
  title: string;
  headers: string[];
  data: string[][];
  note?: string;
}

const PricingTable: React.FC<PricingTableProps> = ({ title, headers, data, note }) => {
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
    </div>
  );
};

export default PricingTable;
