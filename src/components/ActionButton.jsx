import React from 'react';

function ActionButton() {
  return (
    <button className="flex items-center space-x-2 text-green-500 border border-green-500 rounded-full px-4 py-2 mt-4">
      <span>Get Started</span>
      <span className="bg-green-500 text-black rounded-full p-1">
        →
      </span>
    </button>
  );
}

export default ActionButton;
