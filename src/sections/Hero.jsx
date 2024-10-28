// Hero.jsx
import React from 'react';
import Button from '../ui/Button';
import Photo from '../assets/Group.png';
import Footers from '../sections/Footer1'

const Hero = () => {
  return (
    <section className="pt-32 pb-16 gradient-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              FINANCE WITH <br />
              SECURITY AND <br />
              <span className="text-[#a3ff6b]">FLEXIBILITY</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              No-Free Checking Account with Cash Back Rewards. Enjoy Free-Fee Banking And Earn Cash Back On Your Everyday Purchases.
            </p>
            <Button 
              variant="primary" 
              className="text-base px-8 py-3 bg-[#05b993] hover:bg-[#05b993]/90"
            >
              Open Account
            </Button>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src={Photo}
                alt="Mobile app interface"
                className="relative rounded-3xl shadow-2xl"
              />
              <div className="absolute -right-4 -bottom-4 w-full h-full b rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </section>
  );
};

export default Hero;