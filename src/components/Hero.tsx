
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-pet-blue to-pet-blue-dark text-white py-16 md:py-24 px-4 rounded-3xl shadow-xl">
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find Your Perfect Pet Companion
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Connect with adoptable pets, safely rehome your pet, or use our AI-powered system to find lost pets.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link to="/adopt">
              <Button size="lg" className="bg-white text-pet-blue hover:bg-pet-cream-dark w-full sm:w-auto">
                <Search className="mr-2 h-5 w-5" />
                Find a Pet
              </Button>
            </Link>
            <Link to="/rehome">
              <Button size="lg" variant="outline" className="border-white text-[#4E7A8E] hover:bg-white/20 w-full sm:w-auto font-medium">
                <Home className="mr-2 h-5 w-5" />
                Rehome a Pet
              </Button>
            </Link>
            <Link to="/lost-found">
              <Button size="lg" variant="outline" className="border-white text-[4E7A8E] hover:bg-white/20 w-full sm:w-auto font-medium">
                <Heart className="mr-2 h-5 w-5" />
                Lost & Found
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-center">Quick Search</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pet-type" className="block text-sm font-medium mb-1">
                Pet Type
              </label>
              <select 
                id="pet-type"
                className="w-full rounded-md border-gray-300 bg-white/80 text-pet-blue-dark px-3 py-2"
              >
                <option value="">Any type</option>
                <option value="dog">Dogs</option>
                <option value="cat">Cats</option>
                <option value="other">Other Pets</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="City or ZIP code"
                className="w-full rounded-md border-gray-300 bg-white/80 text-pet-blue-dark px-3 py-2"
              />
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <Button className="bg-pet-blue-dark hover:bg-pet-blue border-white border">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-16 -left-16 w-32 h-32 md:w-64 md:h-64 rounded-full bg-white"></div>
        <div className="absolute top-32 right-10 w-16 h-16 md:w-32 md:h-32 rounded-full bg-white"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 md:w-48 md:h-48 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default Hero;
