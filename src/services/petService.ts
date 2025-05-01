
import { Pet } from '@/components/PetCard';

// Load pets from localStorage or use default data
const loadPets = (): Pet[] => {
  const storedPets = localStorage.getItem('availablePets');
  if (storedPets) {
    return JSON.parse(storedPets);
  }
  
  // Default pets as fallback
  return [
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
};

// Save pets to localStorage
const savePets = (pets: Pet[]) => {
  localStorage.setItem('availablePets', JSON.stringify(pets));
};

// Get all pets
export const getAllPets = (): Pet[] => {
  return loadPets();
};

// Get available pets
export const getAvailablePets = (): Pet[] => {
  return loadPets().filter(pet => pet.status === 'available');
};

// Add a new pet
export const addPet = (pet: Omit<Pet, 'id'>): Pet => {
  const pets = loadPets();
  const newPet = {
    ...pet,
    id: Date.now().toString(), // Generate a unique ID
  };
  
  pets.push(newPet);
  savePets(pets);
  
  return newPet;
};

// Update a pet
export const updatePet = (updatedPet: Pet): Pet | null => {
  const pets = loadPets();
  const index = pets.findIndex(p => p.id === updatedPet.id);
  
  if (index !== -1) {
    pets[index] = updatedPet;
    savePets(pets);
    return updatedPet;
  }
  
  return null;
};

// Delete a pet
export const deletePet = (id: string): boolean => {
  const pets = loadPets();
  const filteredPets = pets.filter(p => p.id !== id);
  
  if (filteredPets.length !== pets.length) {
    savePets(filteredPets);
    return true;
  }
  
  return false;
};
