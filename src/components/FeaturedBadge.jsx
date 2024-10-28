import React from 'react';

function FeaturedBadge() {
  return (
    <div className="inline-flex items-center bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">
      <span role="img" aria-label="fire">🔥</span>
      <span className="ml-1">FEATURED</span>
    </div>
  );
}

export default FeaturedBadge;
