import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Heart, Calendar, MapPin } from 'lucide-react';
import { Pet } from '@/components/PetCard';
import { toast } from '@/components/ui/use-toast';

const PetDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [pet, setPet] = useState<Pet | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  
  React.useEffect(() => {
    const mockPets: Pet[] = [
      {
        id: "1",
        name: "Bella",
        type: "dog",
        breed: "Golden Retriever",
        age: "2 years",
        gender: "female",
        location: "Boston, MA",
        image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=800&auto=format&fit=crop",
        status: "available",
        description: "Bella is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. She's great with children and other dogs. She was surrendered by her previous owner who moved to an apartment that doesn't allow pets. Bella is fully vaccinated, spayed, and microchipped."
      },
      {
        id: "2",
        name: "Oliver",
        type: "cat",
        breed: "Tabby",
        age: "1 year",
        gender: "male",
        location: "Portland, OR",
        image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=800&auto=format&fit=crop",
        status: "available",
        description: "Oliver is a playful tabby who enjoys chasing toys and cuddling on the couch. He's litter trained and good with other cats. Oliver was found as a stray and has been in foster care for the past month. He's neutered, vaccinated, and ready for his forever home."
      }
    ];
    
    const foundPet = mockPets.find(p => p.id === id);
    setPet(foundPet || null);
  }, [id]);
  
  if (!pet) {
    return (
      <MainLayout>
        <div className="container mx-auto text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Pet not found</h2>
          <p className="mb-8">The pet you're looking for doesn't exist or has been adopted.</p>
          <Link to="/adopt">
            <Button>Browse Available Pets</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleApplyToAdopt = () => {
    toast({
      title: "Application Submitted",
      description: `Thank you for your interest in adopting ${pet?.name}! We'll contact you soon.`,
    });
    
    setTimeout(() => {
      navigate('/adopt', { 
        state: { 
          adoptionSubmitted: true,
          petName: pet?.name
        }
      });
    }, 2000);
  };

  const statusColors = {
    available: "bg-green-100 text-green-800 hover:bg-green-200",
    adopted: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
  };

  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="mb-6">
          <Link to="/adopt" className="text-pet-blue hover:underline mb-4 inline-block">
            &larr; Back to Available Pets
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-[400px] object-cover"
              />
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-pet-blue-dark">{pet.name}</h1>
                    <p className="text-gray-600">{pet.breed} • {pet.age} • {pet.gender}</p>
                  </div>
                  
                  {pet.status && (
                    <Badge className={`${statusColors[pet.status as keyof typeof statusColors]}`}>
                      {pet.status.charAt(0).toUpperCase() + pet.status.slice(1)}
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="h-4 w-4 mr-1" /> {pet.location}
                </div>
                
                <Tabs defaultValue="about">
                  <TabsList className="mb-4">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="adoption">Adoption Info</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="about" className="space-y-4">
                    <p>{pet.description}</p>
                    
                    <div className="mt-6">
                      <h3 className="font-semibold mb-2">Personality</h3>
                      <div className="flex flex-wrap gap-2">
                        {pet.type === 'dog' ? (
                          <>
                            <Badge variant="outline">Friendly</Badge>
                            <Badge variant="outline">Energetic</Badge>
                            <Badge variant="outline">Playful</Badge>
                            <Badge variant="outline">Good with kids</Badge>
                          </>
                        ) : (
                          <>
                            <Badge variant="outline">Playful</Badge>
                            <Badge variant="outline">Cuddly</Badge>
                            <Badge variant="outline">Independent</Badge>
                            <Badge variant="outline">Litter trained</Badge>
                          </>
                        )}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="details">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-semibold">Breed</h3>
                          <p>{pet.breed}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold">Age</h3>
                          <p>{pet.age}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold">Gender</h3>
                          <p>{pet.gender === 'male' ? 'Male' : 'Female'}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold">Size</h3>
                          <p>{pet.type === 'dog' ? 'Medium' : 'Small'}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold">Color</h3>
                          <p>{pet.type === 'dog' ? 'Golden' : 'Grey Tabby'}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold">Vaccinated</h3>
                          <p>Yes</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="adoption">
                    <div className="space-y-4">
                      <p>
                        {pet.name} is looking for a loving forever home. The adoption fee is ${pet.type === 'dog' ? '250' : '150'}, which includes spay/neuter, vaccinations, and microchip.
                      </p>
                      
                      <div className="mt-4">
                        <h3 className="font-semibold mb-2">Adoption Requirements</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Valid ID and proof of residence</li>
                          <li>Landlord approval if renting</li>
                          <li>Meet and greet with all household members</li>
                          <li>Home visit may be required</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Interested in {pet.name}?</CardTitle>
                <CardDescription>Take the next step in your adoption journey</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {pet.status === 'available' ? (
                  <>
                    <Button 
                      className="w-full bg-pet-blue hover:bg-pet-blue-dark"
                      onClick={handleApplyToAdopt}
                    >
                      Apply to Adopt {pet.name}
                    </Button>
                  
                    <Button 
                      variant="outline" 
                      className="w-full border-pet-blue text-pet-blue hover:bg-pet-blue/10"
                      onClick={toggleFavorite}
                    >
                      <Heart className={`mr-2 h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                      {isFavorite ? 'Saved to Favorites' : 'Save to Favorites'}
                    </Button>
                  </>
                ) : (
                  <div className="text-center p-4 bg-gray-100 rounded-lg">
                    <p className="font-medium text-gray-700 mb-2">
                      {pet.status === 'adopted' ? 'This pet has been adopted' : 'This pet is pending adoption'}
                    </p>
                    <Link to="/adopt">
                      <Button variant="outline">Browse Other Pets</Button>
                    </Link>
                  </div>
                )}
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold mb-2">Contact Info</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    Email: adopt@getyourpet.com
                  </p>
                  <p className="text-sm text-gray-600">
                    Phone: (555) 123-4567
                  </p>
                </div>
                
                <div className="bg-pet-cream p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 mr-2 text-pet-blue" />
                    <h3 className="font-semibold">Available Since</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Share {pet.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-x-2">
                <Button variant="outline" size="sm" className="rounded-full">
                  <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                  Share
                </Button>
                
                <Button variant="outline" size="sm" className="rounded-full">
                  <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  Tweet
                </Button>
                
                <Button variant="outline" size="sm" className="rounded-full">
                  <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M7.843 2h8.314c3.279 0 5.843 2.564 5.843 5.843v8.314c0 3.279-2.564 5.843-5.843 5.843H7.843C4.564 22 2 19.436 2 16.157V7.843C2 4.564 4.564 2 7.843 2zm8.32 3.89c-.82 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.68-1.5-1.5-1.5zm-4.168 1.34c-2.76 0-5.007 2.247-5.007 5.007s2.246 5.007 5.007 5.007 5.007-2.246 5.007-5.007-2.247-5.007-5.007-5.007zm0 1.5c1.928 0 3.507 1.578 3.507 3.507s-1.578 3.507-3.507 3.507-3.507-1.579-3.507-3.507 1.579-3.507 3.507-3.507z" clipRule="evenodd" />
                  </svg>
                  Instagram
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PetDetailsPage;
