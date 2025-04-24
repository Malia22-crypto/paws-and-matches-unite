
import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: "2,500+", label: "Pets Adopted" },
    { value: "1,200+", label: "Families Found" },
    { value: "400+", label: "Pets Reunited" },
    { value: "5,000+", label: "Active Users" },
  ];

  return (
    <section className="py-12 bg-pet-blue-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Making a Difference Together</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white animate-pulse-gentle">
                {stat.value}
              </div>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
