// Footer.jsx
import React from 'react';
import Photo1 from '../assets/SamsungPay.png';
import Photo2 from '../assets/visa.png';
import Photo3 from '../assets/AmazonPay.png';
import Photo4 from '../assets/Paypall.png';
import Photo5 from '../assets/spherule.png';

const Footers = () => {
  return (
    <footer className="flex flex-wrap items-center justify-center gap-8 py-6 bg-gradient-to-b from-gray-800 to-gray-900">
      <img src={Photo5} alt="Spherule" className="h-8" />
      <img src={Photo1} alt="Samsung" className="h-8" />
      <img src={Photo2} alt="VISA" className="h-8" />
      <img src={Photo3} alt="Amazon Pay" className="h-8" />
      <img src={Photo4} alt="PayPal" className="h-8" />
    </footer>
  );
};

export default Footers;
