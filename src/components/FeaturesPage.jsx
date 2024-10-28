import React from "react";
import FeatureSection from "../components/FeatureSection";

// Importing images
import phoneScreen1 from "../assets/Mockup 1.jpg";
import phoneScreen2 from "../assets/Mobile 1.jpg";

const FeaturesPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-green-900 min-h-screen text-white flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-bold mb-10">We Value Your Trust and Security</h1>
      
      <FeatureSection 
        imageSrc={phoneScreen1} 
        title="Transfers Across The Globe Are Free" 
        description="We offer seamless, borderless transactions, accessible to users worldwide."
      />

      <FeatureSection 
        imageSrc={phoneScreen2} 
        title="Create A Card That Is Unique And Customized" 
        description="We offer a comprehensive range of innovative financial services tailored to meet your needs."
      />

      <FeatureSection 
        imageSrc={phoneScreen1} 
        title="Personalized Insights And Financial Goals" 
        description="Savings accounts that offer competitive interest rates and flexible deposit options."
      />

      <FeatureSection 
        imageSrc={phoneScreen2} 
        title="Hold Money In 30+ Currencies" 
        description="Hold, convert, and transfer money across multiple currencies with ease."
      />
    </div>
  );
};

export default FeaturesPage;
