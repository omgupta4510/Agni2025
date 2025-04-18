import React from 'react';
import { Check, X } from 'lucide-react';

const SponsorshipTable = ({ data }) => {
  const renderBoolean = (value) =>
    value ? (
      <div className="flex items-center justify-center gap-1 text-green-600">
        <Check className="w-4 h-4" />
        <span className="text-sm font-medium">Yes</span>
      </div>
    ) : (
      <div className="flex items-center justify-center gap-1 text-red-500">
        <X className="w-4 h-4" />
        <span className="text-sm font-medium">No</span>
      </div>
    );

  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 py-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Sponsorship Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-center border-separate border-spacing-0">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="border border-green-600 px-4 py-3">Sponsorship</th>
              <th className="border border-green-600 px-4 py-3">Amount (INR)</th>
              <th className="border border-green-600 px-4 py-3">Free Delegates</th>
              <th className="border border-green-600 px-4 py-3">Stall Area (sq.ft.)</th>
              <th className="border border-green-600 px-4 py-3">Backdrop Banner</th>
              <th className="border border-green-600 px-4 py-3">Presentation Slot</th>
              <th className="border border-green-600 px-4 py-3">Advertisement</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="even:bg-gray-50 odd:bg-white hover:bg-blue-50 transition-colors duration-200"
              >
                <td className="border border-blue-200 px-4 py-2 font-medium text-gray-800">{item.type}</td>
                <td className="border border-blue-200 px-4 py-2 text-gray-700">
                  {item.amount.toLocaleString('en-IN') + '/-'}
                </td>
                <td className="border border-blue-200 px-4 py-2 text-gray-700">{item.delegates}</td>
                <td className="border border-blue-200 px-4 py-2 text-gray-700">
                  {item.stallarea > 0 ? item.stallarea : 'No'}
                </td>
                <td className="border border-blue-200 px-4 py-2">{renderBoolean(item.backdropBanner)}</td>
                <td className="border border-blue-200 px-4 py-2">{renderBoolean(item.presentationSlot)}</td>
                <td className="border border-blue-200 px-4 py-2 text-gray-700">{item.addvertisement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SponsorshipTable;
