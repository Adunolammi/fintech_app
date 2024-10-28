import React from 'react';
import Button from '../ui/Button';

const AllFeatures = () => {
  return (
    <section className="py-20 bg-[#023047]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ALL THE FEATURES<br />
            IN ONE APP
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get All Our Features In One App Functionalities To Fit
            Your Growing Need.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <Button 
              variant="primary" 
              className="text-base px-8 py-3 bg-[#05b993] hover:bg-[#05b993]/90 mb-8"
            >
              Get Started
            </Button>
            
            <img 
              src="/api/placeholder/400/800"
              alt="App features preview"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div className="md:w-1/2 relative">
            <img 
              src="/api/placeholder/400/800"
              alt="App interface"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-[#05b993] rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllFeatures;