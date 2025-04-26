
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import { Pet } from '@/components/PetCard';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/adopt/SearchBar';
import FiltersSection from '@/components/adopt/FiltersSection';
import PetResults from '@/components/adopt/PetResults';
import { toast } from '@/components/ui/use-toast';

const AdoptPage = () => {
  const location = useLocation();
  const adoptionSubmitted = location.state?.adoptionSubmitted;
  const petName = location.state?.petName;

  const allPets: Pet[] = [
    {
      id: "1",
      name: "Bella",
      type: "dog",
      breed: "Golden Retriever",
      age: "2 years",
      gender: "female",
      location: "Boston, MA",
      image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=500&auto=format&fit=crop",
      status: "available",
      description: "Bella is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. She's great with children and other dogs."
    },
    {
      id: "2",
      name: "Oliver",
      type: "cat",
      breed: "Tabby",
      age: "1 year",
      gender: "male",
      location: "Portland, OR",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=500&auto=format&fit=crop",
      status: "available",
      description: "Oliver is a playful tabby who enjoys chasing toys and cuddling on the couch. He's litter trained and good with other cats."
    },
    {
      id: "3",
      name: "Max",
      type: "dog",
      breed: "Labrador Mix",
      age: "3 years",
      gender: "male",
      location: "Denver, CO",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=500&auto=format&fit=crop",
      status: "available",
      description: "Max is a calm and well-behaved Labrador mix who loves to please. He's house-trained and knows basic commands."
    },
    {
      id: "4",
      name: "Lucy",
      type: "cat",
      breed: "Siamese",
      age: "4 years",
      gender: "female",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=500&auto=format&fit=crop",
      status: "pending",
      description: "Lucy is a beautiful Siamese with striking blue eyes. She's quiet and enjoys lounging in sunny spots."
    },
    {
      id: "5",
      name: "Rocky",
      type: "dog",
      breed: "German Shepherd",
      age: "2 years",
      gender: "male",
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=500&auto=format&fit=crop",
      status: "available",
      description: "Rocky is an intelligent German Shepherd with lots of energy. He would thrive in an active home with a yard."
    },
    {
      id: "6",
      name: "Chloe",
      type: "cat",
      breed: "Maine Coon",
      age: "3 years",
      gender: "female",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=500&auto=format&fit=crop",
      status: "available",
      description: "Chloe is a majestic Maine Coon with a gentle personality. She loves to be brushed and petted."
    }
  ];

  const [filteredPets, setFilteredPets] = useState<Pet[]>(allPets);
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedBreed, setSelectedBreed] = useState<string>('');
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedAge, setSelectedAge] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isVaccinated, setIsVaccinated] = useState<boolean>(false);
  const [isSpayed, setIsSpayed] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Show adoption submission toast if redirected from PetDetailsPage
  useEffect(() => {
    if (adoptionSubmitted && petName) {
      toast({
        title: "Application Received",
        description: `Your application to adopt ${petName} has been received. Our team will contact you soon!`,
      });
      
      // Clear location state
      window.history.replaceState({}, document.title);
    }
  }, [adoptionSubmitted, petName]);

  const handleSearch = () => {
    const filtered = allPets.filter(pet => {
      const matchesSearch = searchTerm === '' || 
        pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.location.toLowerCase().includes(searchTerm.toLowerCase());
        
      const matchesType = selectedType === '' || selectedType === 'all' || pet.type === selectedType;
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
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-pet-blue-dark mb-4">Adopt a Pet</h1>
          <p className="text-gray-600 max-w-3xl">
            Browse our available pets looking for their forever homes. Use the filters to find the perfect match for your family.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onSearch={handleSearch}
            />
            
            <div className="flex gap-2">
              <Button onClick={handleSearch} className="bg-pet-blue hover:bg-pet-blue-dark">
                Search
              </Button>
              
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
        </div>
        
        <PetResults pets={filteredPets} />
      </div>
    </MainLayout>
  );
};

export default AdoptPage;
