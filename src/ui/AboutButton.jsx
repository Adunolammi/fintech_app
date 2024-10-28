import React from 'react';

function AboutButton() {
  return (
    <button className="bg-white text-black font-semibold rounded-full px-4 py-1 flex items-center space-x-1">
      <span role="img" aria-label="fire">🔥</span>
      <span>ABOUT US</span>
    </button>
  );
}

export default AboutButton;
