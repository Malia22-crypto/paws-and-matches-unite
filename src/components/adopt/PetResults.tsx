
import React from 'react';
import PetCard, { Pet } from '@/components/PetCard';

interface PetResultsProps {
  pets: Pet[];
}

const PetResults = ({ pets }: PetResultsProps) => {
  return (
    <>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">
          {pets.length} Pets Available
        </h2>
      </div>
      
      {pets.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">No pets found</h3>
          <p className="text-gray-500">
            Try adjusting your search criteria or check back later.
          </p>
        </div>
      )}
    </>
  );
};

export default PetResults;
