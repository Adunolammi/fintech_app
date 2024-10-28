import React from 'react';

function DashboardCard() {
  return (
    <div className="bg-teal-900 rounded-lg p-4 w-64 md:w-80">
      <h2 className="text-white text-lg font-bold">Saving Month</h2>
      <p className="text-white text-2xl font-bold mt-2">$1852,00</p>
      <p className="text-lime-300 text-sm">Increase of 12% from last month</p>
      {/* Chart simulation */}
      <div className="mt-4 relative">
        <div className="flex justify-between text-white text-sm">
          <span>0</span>
          <span>10k</span>
          <span>20k</span>
          <span>50k</span>
        </div>
        <div className="flex items-end justify-around mt-2 h-24">
          <div className="bg-gray-300 h-8 w-4"></div>
          <div className="bg-gray-300 h-10 w-4"></div>
          <div className="bg-gray-300 h-12 w-4"></div>
          <div className="bg-teal-500 h-20 w-4 relative">
            <span className="absolute -top-6 left-0 text-white bg-black px-2 py-1 text-xs rounded">$20,000</span>
          </div>
          <div className="bg-gray-300 h-6 w-4"></div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
