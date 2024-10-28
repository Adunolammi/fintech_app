import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const FeatureBox = ({ title, description, icon }) => (
  <div className="bg-gradient-to-br from-[#034057] to-[#046077] p-6 rounded-2xl transition-transform hover:scale-[1.02]">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-[#05b993]/20 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const Features = () => {
  const chartData = Array.from({ length: 12 }, (_, i) => ({
    name: `Week ${i + 1}`,
    value: Math.random() * 1000 + 5000
  }));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-[#034057] to-[#046077] p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold">Weekly Stats</h3>
              <select className="bg-[#023047] text-white border border-[#05b993]/30 rounded-lg px-3 py-1 text-sm">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            
            <div className="bg-[#023047]/30 rounded-2xl p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-400">Total Balance</p>
                  <h4 className="text-2xl font-bold text-white">$5,553.00</h4>
                </div>
                <span className="text-[#a3ff6b] bg-[#a3ff6b]/10 px-2 py-1 rounded-lg text-sm">
                  +2.45%
                </span>
              </div>
              
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#05b993" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#023047]/30 rounded-xl p-4">
                <p className="text-sm text-gray-400 mb-1">Revenue</p>
                <p className="text-lg font-semibold">$3,452</p>
                <span className="text-[#a3ff6b] text-sm">+11.2%</span>
              </div>
              <div className="bg-[#023047]/30 rounded-xl p-4">
                <p className="text-sm text-gray-400 mb-1">Expenses</p>
                <p className="text-lg font-semibold">$2,101</p>
                <span className="text-red-400 text-sm">-4.3%</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">ALL YOUR MONEY NEEDS IN ONE APP</h2>
              <p className="text-gray-300"></p>
            </div>
            
            <FeatureBox
              title="Expenses Tracker"
              description="Real-time tracking with smart categorization and instant notifications for every transaction"
              icon={<span className="text-[#05b993]">💰</span>}
            />
            
            <FeatureBox
              title="Crypto Connection"
              description="Seamlessly integrate your crypto wallets and track your digital assets in one place"
              icon={<span className="text-[#05b993]">₿</span>}
            />
            
            <FeatureBox
              title="Automated Investing"
              description="Smart portfolios with automated rebalancing and dividend reinvestment"
              icon={<span className="text-[#05b993]">📈</span>}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;