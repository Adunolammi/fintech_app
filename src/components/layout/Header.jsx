import React from 'react';
import Button from '../../ui/Button';
import Logo from '../../assets/upgrade-inc-logo-1.png'
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#023047]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 ">Personal Loan</a>
            <a href="#" className="text-gray-300 ">One Card</a>
            <a href="#" className="text-gray-300 ">Savings</a>
            <a href="#" className="text-gray-300 ">Checking</a>
            <a href="#" className="text-gray-300 ">Help</a>

          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline">Sign in</Button>
            
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;