// src/components/TestimonialsSection.jsx
import React from "react";
import TestimonialCard from "./TestimonialCard";

// Import images for testimonials
import image1 from "../assets/Ellipse 12.jpg";
import image2 from "../assets/Ellipse 13.jpg";
import image3 from "../assets/Ellipse 12.jpg";

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-8 text-center">
      <div className="mb-6">
        <span className="inline-block bg-orange-200 text-orange-600 px-4 py-1 rounded-full text-xs font-semibold uppercase mb-2">
          Testimonial
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Get To Know Our Clients</h2>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <TestimonialCard
          quote="I like getting the SMS & knowing the jobs done. I often refer to it, 'hope you get a ping today!' because my product..."
          image={image1}
          name="Mike Torello"
          title="CEO of Initech"
          bgColor="bg-white"
        />
        
        <TestimonialCard
          quote="We have successfully sold digital products and are happy with the results & look forward to using it again."
          image={image2}
          name="Richards Hawkins"
          title="Marketing Manager of Upnow"
          bgColor="bg-teal-800 text-white"
        />
        
        <TestimonialCard
          quote="Design Monks offers producers a cost-effective selling tool. Having the ability to post prices that you want on an exchange visible."
          image={image3}
          name="Thomas Magnum"
          title="Barellon NSW"
          bgColor="bg-white"
        />
      </div>

      <button className="mt-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-full flex items-center hover:bg-green-700 transition duration-200">
        View More
        <svg
          className="ml-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </button>
    </section>
  );
};

export default TestimonialsSection;
