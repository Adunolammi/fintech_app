import React from 'react';
import Button from '../ui/Button';

const TestimonialCard = ({ quote, author, role, image }) => (
  <div className="gradient-card rounded-2xl p-6">
    <div className="flex items-start space-x-4">
      <img 
        src={image || "/api/placeholder/48/48"} 
        alt={author} 
        className="w-12 h-12 rounded-full"
      />
      <div>
        <p className="text-gray-300 mb-4">{quote}</p>
        <h4 className="font-semibold">{author}</h4>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "We got truly & strongly impressed with this app, they made a task forward for us to achieve with signcrib.",
      author: "Mike Tower",
      role: "USA, Texas",
      image: "/api/placeholder/48/48"
    },
    {
      quote: "We have successed to app signal to put into your hand, anything is possible and made is task forward for us.",
      author: "Michelle Hendrix",
      role: "Product Designer",
      image: "/api/placeholder/48/48"
    },
    {
      quote: "Google being critics professional of the same their put in mind, i easy to put place price of the user.",
      author: "Thomas Magnus",
      role: "Financial Advisor",
      image: "/api/placeholder/48/48"
    },
  ];

  return (
    <section className="py-20 bg-[#023047]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          GET TO KNOW OUR CLIENTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="px-8 py-3"
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;