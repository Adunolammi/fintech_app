import React from 'react';
import phoneScreen from '../assets/0140 1.png';
import cardImage from '../assets/image 19.png';

function PhoneCardSection() {
  return (
    <div className="relative flex mt-8 md:mt-0 md:ml-8">
      <img src={phoneScreen} alt="Phone Screen" className="w-56 md:w-64 rounded-lg shadow-lg" />
      <img src={cardImage} alt="Card" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 md:w-40 rounded-lg shadow-lg" />
    </div>
  );
}

export default PhoneCardSection;
