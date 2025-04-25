import React, { useState } from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import PetCard, { Pet } from '@/components/PetCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, Filter, FilterX } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const AdoptPage = () => {
  // Mock data for available pets
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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);

  // Filter handlers
  const handleSearch = () => {
    const filtered = allPets.filter(pet => {
      const matchesSearch = searchTerm === '' || 
        pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.location.toLowerCase().includes(searchTerm.toLowerCase());
        
      const matchesType = selectedType === '' || pet.type === selectedType;
      
      return matchesSearch && matchesType;
    });
    
    setFilteredPets(filtered);
  };

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedType('');
    setFilteredPets(allPets);
  };

  // Filtering on input change
  React.useEffect(() => {
    handleSearch();
  }, [selectedType]);

  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-pet-blue-dark mb-4">Adopt a Pet</h1>
          <p className="text-gray-600 max-w-3xl">
            Browse our available pets looking for their forever homes. Use the filters to find the perfect match for your family.
          </p>
        </div>

        {/* Search and filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-grow">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search by name, breed, location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button onClick={handleSearch} className="bg-pet-blue hover:bg-pet-blue-dark">
                Search
              </Button>
              
              <Button 
                variant="outline" 
                className="border-pet-blue text-pet-blue"
                onClick={() => setShowFilters(!showFilters)}
                aria-expanded={showFilters}
              >
                {showFilters ? (
                  <FilterX className="mr-2 h-4 w-4" />
                ) : (
                  <Filter className="mr-2 h-4 w-4" />
                )}
                {showFilters ? 'Hide Filters' : 'Filters'}
              </Button>
              
              {(searchTerm !== '' || selectedType !== '') && (
                <Button variant="ghost" onClick={handleReset}>
                  Reset
                </Button>
              )}
            </div>
          </div>
          
          <Collapsible open={showFilters} onOpenChange={setShowFilters}>
            <CollapsibleContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pet Type</label>
                  <Select value={selectedType} onValueChange={handleTypeChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any type</SelectItem>
                      <SelectItem value="dog">Dogs</SelectItem>
                      <SelectItem value="cat">Cats</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
        
        {/* Results */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            {filteredPets.length} Pets Available
          </h2>
        </div>
        
        {filteredPets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {filteredPets.map((pet) => (
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
      </div>
    </MainLayout>
  );
};

export default AdoptPage;
