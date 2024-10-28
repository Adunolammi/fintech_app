import React from "react";

const FeatureSection = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center md:flex-row md:text-left my-8 p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto md:max-w-none md:mx-0">
      <img src={imageSrc} alt={title} className="w-32 h-32 md:w-48 md:h-48 object-contain" />
      <div className="mt-4 md:ml-6">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureSection;
