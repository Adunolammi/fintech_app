import React from 'react';
import { Shield, Lock, Bell } from 'lucide-react';
import { ArrowRight } from "lucide-react"
import Button from '../ui/Button';

const SecurityFeature = ({ icon, title }) => (
  <div className="flex items-center gap-3 bg-[#034057]/50 rounded-xl p-4 backdrop-blur-sm">
    <div className="w-10 h-10 rounded-full bg-[#05b993]/20 flex items-center justify-center">
      {icon}
    </div>
    <span className="text-sm font-medium">{title}</span>
  </div>
);

const Security = () => {
  return (
    <section className="py-20 gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#05b993] blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-[#a3ff6b] blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="/api/placeholder/400/800"
                alt="Security features"
                className="rounded-3xl shadow-2xl"
              />
              
              <div className="absolute -right-16 top-1/4 w-32">
                <SecurityFeature
                  icon={<Shield className="w-5 h-5 text-[#05b993]" />}
                  title="Bank-Grade Security"
                />
              </div>
              
              <div className="absolute -left-16 top-1/2 w-32">
                <SecurityFeature
                  icon={<Lock className="w-5 h-5 text-[#05b993]" />}
                  title="Encrypted Data"
                />
              </div>
              
              <div className="absolute -right-16 bottom-1/4 w-32">
                <SecurityFeature
                  icon={<Bell className="w-5 h-5 text-[#05b993]" />}
                  title="24/7 Monitoring"
                />
              </div>
            </div>
            
            <div className="absolute -left-4 -bottom-4 w-full h-full border-2 border-[#05b993] rounded-3xl" />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              WE VALUE YOUR TRUST<br />
              AND SECURITY
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Your Security Is Our Top Priority. We implement multiple layers of protection:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#05b993]/20 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-[#05b993]" />
                  </div>
                  <span className="text-gray-300">Bank-Level Encryption</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#05b993]/20 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-[#05b993]" />
                  </div>
                  <span className="text-gray-300">Anti-Fraud Protection</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#05b993]/20 flex items-center justify-center">
                    <Bell className="w-4 h-4 text-[#05b993]" />
                  </div>
                  <span className="text-gray-300">24/7 Emergency Help</span>
                </li>
              </ul>
            </div>
            
            <Button 
              variant="primary" 
              className="text-base px-8 py-3 bg-[#05b993] hover:bg-[#05b993]/90 group"
            >
              <span className="flex items-center gap-2">
                Get Started 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;