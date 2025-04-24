
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';

export interface Pet {
  id: string;
  name: string;
  type: 'dog' | 'cat' | 'other';
  breed: string;
  age: string;
  gender: 'male' | 'female';
  location: string;
  image: string;
  description?: string;
  status?: 'available' | 'adopted' | 'pending';
}

interface PetCardProps {
  pet: Pet;
  favoriteAction?: boolean;
}

const PetCard = ({ pet, favoriteAction = true }: PetCardProps) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    
    if (!isFavorite) {
      toast({
        title: "Added to favorites",
        description: `${pet.name} has been added to your favorites.`,
      });
    } else {
      toast({
        title: "Removed from favorites",
        description: `${pet.name} has been removed from your favorites.`,
      });
    }
  };

  const statusColors = {
    available: "bg-green-500 text-white",
    adopted: "bg-gray-500 text-white",
    pending: "bg-yellow-500 text-white",
  };

  return (
    <Card className="pet-card group">
      <Link to={`/pet/${pet.id}`}>
        <div className="pet-card-image-container">
          <img 
            src={pet.image} 
            alt={pet.name}
            className="pet-card-image"
          />
          {pet.status && (
            <div className={`pet-card-badge ${statusColors[pet.status]}`}>
              {pet.status.charAt(0).toUpperCase() + pet.status.slice(1)}
            </div>
          )}
        </div>
        
        <CardContent className="pet-card-content">
          <div className="flex justify-between items-start mb-2">
            <CardTitle className="text-lg font-bold">{pet.name}</CardTitle>
            {favoriteAction && (
              <button
                onClick={toggleFavorite}
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
              </button>
            )}
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{pet.type.charAt(0).toUpperCase() + pet.type.slice(1)}</span>
              <span>{pet.breed}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Age</span>
              <span>{pet.age}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Gender</span>
              <span>{pet.gender.charAt(0).toUpperCase() + pet.gender.slice(1)}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Location</span>
              <span>{pet.location}</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button className="w-full bg-pet-blue hover:bg-pet-blue-dark">
            View Details
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default PetCard;
