
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import { Pet } from '@/components/PetCard';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/adopt/SearchBar';
import FiltersSection from '@/components/adopt/FiltersSection';
import PetResults from '@/components/adopt/PetResults';
import { toast } from '@/components/ui/use-toast';
import { getAllPets } from '@/services/petService';

const AdoptPage = () => {
  const location = useLocation();
  const adoptionSubmitted = location.state?.adoptionSubmitted;
  const petName = location.state?.petName;
  
  const quickSearch = location.state?.quickSearch;
  const quickSearchPetType = location.state?.petType;
  const quickSearchLocation = location.state?.location;

  const [allPets, setAllPets] = useState<Pet[]>([]);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [selectedType, setSelectedType] = useState<string>(quickSearchPetType || '');
  const [selectedBreed, setSelectedBreed] = useState<string>('');
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedAge, setSelectedAge] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isVaccinated, setIsVaccinated] = useState<boolean>(false);
  const [isSpayed, setIsSpayed] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState(quickSearchLocation || '');
  const [showFilters, setShowFilters] = useState(false);

  // Load pets from service
  useEffect(() => {
    const pets = getAllPets();
    setAllPets(pets);
    setFilteredPets(pets);
  }, []);

  useEffect(() => {
    if (adoptionSubmitted && petName) {
      toast({
        title: "Application Received",
        description: `Your application to adopt ${petName} has been received. Our team will contact you soon!`,
      });
      
      window.history.replaceState({}, document.title);
    }
    
    if (quickSearch) {
      handleSearch();
      
      const newState = {...location.state};
      delete newState.quickSearch;
      window.history.replaceState(newState, document.title);
    }
  }, [adoptionSubmitted, petName, quickSearch]);

  const handleSearch = () => {
    const filtered = allPets.filter(pet => {
      const matchesSearch = searchTerm === '' || 
        pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.location.toLowerCase().includes(searchTerm.toLowerCase());
        
      const matchesType = selectedType === '' || selectedType === 'all' || selectedType === 'any' || pet.type === selectedType;
      const matchesBreed = selectedBreed === '' || selectedBreed === 'all' || pet.breed.toLowerCase().includes(selectedBreed.toLowerCase());
      const matchesGender = selectedGender === '' || selectedGender === 'all' || pet.gender === selectedGender;
      
      return matchesSearch && matchesType && matchesBreed && matchesGender;
    });
    
    setFilteredPets(filtered);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedType('');
    setSelectedBreed('');
    setSelectedGender('');
    setSelectedAge('');
    setSelectedSize('');
    setIsVaccinated(false);
    setIsSpayed(false);
    setFilteredPets(allPets);
  };

  const hasActiveFilters = searchTerm !== '' || 
    selectedType !== '' || 
    selectedBreed !== '' || 
    selectedGender !== '' || 
    selectedAge !== '' || 
    selectedSize !== '' || 
    isVaccinated !== false || 
    isSpayed !== false;

  useEffect(() => {
    handleSearch();
  }, [selectedType, selectedBreed, selectedGender, selectedAge, selectedSize, isVaccinated, isSpayed]);

  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-pet-blue-dark mb-4">Adopt a Pet</h1>
          <p className="text-gray-600 max-w-3xl">
            Browse our available pets looking for their forever homes. Use the filters to find the perfect match for your family.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onSearch={handleSearch}
            />
            
            <Button 
              onClick={handleSearch} 
              className="md:w-auto w-full bg-pet-blue hover:bg-pet-blue-dark font-medium"
            >
              Search
            </Button>
          </div>
          
          <div className="mt-4">
            <FiltersSection 
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              selectedType={selectedType}
              selectedBreed={selectedBreed}
              selectedGender={selectedGender}
              selectedAge={selectedAge}
              selectedSize={selectedSize}
              isVaccinated={isVaccinated}
              isSpayed={isSpayed}
              onTypeChange={setSelectedType}
              onBreedChange={setSelectedBreed}
              onGenderChange={setSelectedGender}
              onAgeChange={setSelectedAge}
              onSizeChange={setSelectedSize}
              onVaccinatedChange={setIsVaccinated}
              onSpayedChange={setIsSpayed}
              onReset={handleReset}
              hasActiveFilters={hasActiveFilters}
            />
          </div>
        </div>
        
        <PetResults pets={filteredPets} />
      </div>
    </MainLayout>
  );
};

export default AdoptPage;
