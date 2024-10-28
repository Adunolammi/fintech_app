import React from 'react';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`p-6 rounded-2xl ${className}`}>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      {children}
    </div>
  );
};

export default Card;