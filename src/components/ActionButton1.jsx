import React from 'react';

function ActionButton1() {
  return (
    <button className="flex items-center space-x-2 bg-green-500 text-black font-semibold rounded-full px-4 py-2 mt-6 hover:bg-green-400">
      <span>Get Started</span>
      <span className="bg-white text-green-500 rounded-full p-1">
        →
      </span>
    </button>
  );
}

export default ActionButton1;
