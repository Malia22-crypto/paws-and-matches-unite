
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PetCard, { Pet } from './PetCard';
import { getAvailablePets } from '@/services/petService';

interface FeaturedPetsProps {
  title?: string;
  limit?: number;
}

const FeaturedPets = ({ title = "Featured Pets", limit = 4 }: FeaturedPetsProps) => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const availablePets = getAvailablePets();
    // Take only the specified number of pets
    setPets(availablePets.slice(0, limit));
  }, [limit]);

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-pet-blue-dark">{title}</h2>
          <Link to="/adopt">
            <Button variant="outline" className="border-pet-blue text-pet-blue hover:bg-pet-blue hover:text-white">
              View All
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
        
        {pets.length === 0 && (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500">No pets available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedPets;
