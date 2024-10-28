import React from 'react';
import { ArrowRight, Globe, CreditCard, PieChart } from 'lucide-react';

const BenefitCard = ({ title, description, icon, image, highlight = false, className = '' }) => (
  <div 
    className={`
      relative overflow-hidden group transition-all duration-300
      ${highlight ? 'bg-gradient-to-br from-[#05b993] to-[#04987a]' : 'gradient-card'}
      ${className} rounded-2xl p-6 hover:shadow-lg
    `}
  >
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center
          ${highlight ? 'bg-white/20' : 'bg-[#05b993]/20'}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className={`mb-4 ${highlight ? 'text-white/90' : 'text-gray-300'}`}>
        {description}
      </p>
      {image && (
        <div className="mt-6 relative">
          <img 
            src={image} 
            alt={title}
            className="rounded-xl w-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
        </div>
      )}
    </div>
  </div>
);

const Benefits = () => {
  return (
    <section className="py-20 bg-[#023047]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            CAN HELP YOU ACHIEVE<br />
            FINANCIAL SUCCESS
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our comprehensive suite of financial tools and services are designed to help you reach your financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard
            title="Global Transfers"
            description="Send money across borders instantly and free of charge"
            icon={<Globe className="w-6 h-6 text-[#05b993]" />}
            image="/api/placeholder/400/240"
          />

          <BenefitCard
            title="Custom Cards"
            description="Design your perfect card that reflects your style"
            icon={<CreditCard className="w-6 h-6 text-[#05b993]" />}
            image="/api/placeholder/400/240"
          />

          <BenefitCard
            title="Smart Insights"
            description="Get personalized financial advice and goal tracking"
            icon={<PieChart className="w-6 h-6 text-[#05b993]" />}
            image="/api/placeholder/400/240"
          />

          <BenefitCard
            title="100% Dedication"
            description="Our team is committed to your financial success 24/7"
            highlight={true}
            icon={<span className="text-white text-xl">💪</span>}
          />

          <BenefitCard
            title="Multi-Currency"
            description="Hold and manage money in 30+ global currencies"
            icon={<span className="text-[#05b993] text-xl">🌍</span>}
            className="h-full"
          />

          <div className="bg-gradient-to-br from-[#034057] to-[#046077] rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <h3 className="text-xl font-bold mb-2">Visit Our Services</h3>
              <p className="text-gray-300">Explore our complete range of financial services</p>
            </div>
            <button className="mt-4 flex items-center gap-2 text-[#05b993] hover:gap-3 transition-all duration-300">
              Learn More <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;