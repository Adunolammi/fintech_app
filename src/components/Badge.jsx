import React from 'react';

function Badge() {
  return (
    <div className="inline-flex items-center bg-green-800 text-green-200 rounded-full px-3 py-1 text-xs font-semibold">
      <span role="img" aria-label="fire">🔥</span>
      <span className="ml-1">TRUSTWORTHINESS</span>
    </div>
  );
}

export default Badge;
