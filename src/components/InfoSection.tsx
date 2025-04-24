
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const InfoSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-pet-blue rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            {/* Image side */}
            <div className="bg-[url('https://images.unsplash.com/photo-1535268647677-300dbf3d78d1')] bg-cover bg-center min-h-[300px] md:min-h-[400px]">
              <div className="w-full h-full bg-pet-blue-dark/30 flex items-center justify-center">
                {/* This space intentionally left with just the background image */}
              </div>
            </div>
            
            {/* Content side */}
            <div className="p-8 md:p-12 flex items-center">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
                <p className="mb-6">
                  Every adoption, rehoming, or reunion makes a difference in the lives of pets and their human companions. Join our community and help create more happy pet stories.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/register">
                    <Button size="lg" className="bg-white text-pet-blue hover:bg-pet-cream-dark w-full sm:w-auto">
                      Create Account
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 w-full sm:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
