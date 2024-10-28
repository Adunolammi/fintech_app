import React from 'react';
import DashboardCard from './ui/DashboardCard'
import Section from './ui/section'
import AboutButton from './ui/AboutButton'


function Appp() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center text-white p-6">
      <AboutButton />
      <div className="flex flex-col md:flex-row items-center gap-8 mt-6">
        <DashboardCard />
        <div className="space-y-4">
          <Section 
            title="Expenses Tracker" 
            description="Our comprehensive selection of medications, supplements, and healthcare products." 
            bgColor="bg-lime-100" 
            textColor="text-gray-800"
          />
          <Section 
            title="Crypto Connection" 
            description="From advanced imaging technology such as MRI and CT scanners to precision surgical tools." 
            bgColor="bg-gray-800" 
            textColor="text-lime-100"
          />
          <Section 
            title="Automated Invoicing" 
            description="We're committed to leveraging the latest innovations in medical technology." 
            bgColor="bg-gray-800" 
            textColor="text-lime-100"
          />
        </div>
      </div>
    </div>
  );
}

export default Appp;
