
import React from 'react';
import { Heart, Home, Search } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <Search className="h-10 w-10 text-pet-blue" />,
      title: "Find Your Perfect Match",
      description: "Browse through our database of pets available for adoption. Filter by species, breed, age, and more to find your perfect companion.",
    },
    {
      icon: <Home className="h-10 w-10 text-pet-blue" />,
      title: "Rehome Your Pet",
      description: "Need to find a new home for your pet? Create a detailed listing and connect with potential adopters committed to providing a loving home.",
    },
    {
      icon: <Heart className="h-10 w-10 text-pet-blue" />,
      title: "Reunite Lost Pets",
      description: "Our AI-powered system helps match lost pets with found pet reports, increasing the chances of reuniting pets with their owners.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-white to-pet-cream-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pet-blue-dark mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md transition-transform hover:transform hover:scale-105"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-pet-cream rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-pet-blue-dark">
                {feature.title}
              </h3>
              <p className="text-center text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
