// src/components/TestimonialCard.jsx
import React from "react";

const TestimonialCard = ({ quote, image, name, title, bgColor }) => {
  return (
    <div className={`p-6 rounded-lg shadow-lg ${bgColor} max-w-xs md:max-w-sm`}>
      <div className="text-green-600 text-3xl mb-4">“</div>
      <p className="text-gray-800 text-lg mb-6">{quote}</p>
      <div className="flex items-center mt-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
      {/* Star ratings */}
      <div className="flex mt-2">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
