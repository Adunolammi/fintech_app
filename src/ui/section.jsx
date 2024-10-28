import React from 'react';

function Section({ title, description, bgColor, textColor }) {
  return (
    <div className={`${bgColor} rounded-lg p-4 ${textColor}`}>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm mt-1">{description}</p>
    </div>
  );
}

export default Section;
