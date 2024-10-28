import React from 'react';
import phoneScreen1 from '../assets/Photo2.png';
import phoneScreen2 from '../assets/Photo3.jpg';

function PhoneScreens() {
  return (
    <div className="flex mt-8 md:mt-0 md:ml-8 space-x-4">
      <img src={phoneScreen1} alt="Phone Screen 1" className="w-32 md:w-40 rounded-lg" />
      <img src={phoneScreen2} alt="Phone Screen 2" className="w-32 md:w-40 rounded-lg" />
    </div>
  );
}

export default PhoneScreens;
