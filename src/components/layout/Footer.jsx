import React from 'react';

const Footer = () => {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'News'],
    Product: ['Features', 'Pricing', 'Support', 'Documentation'],
    Resources: ['Blog', 'Newsletter', 'Events', 'Help center'],
    Social: ['Twitter', 'LinkedIn', 'Facebook', 'GitHub'],
  };

  return (
    <footer className="bg-[#022037] py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold text-[#05b993] mb-4">signcrib</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for secure and flexible financial solutions.
              Banking made simple and accessible for everyone.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-[#05b993]"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#05b993]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 signcrib. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#05b993] text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#05b993] text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#05b993] text-sm">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;