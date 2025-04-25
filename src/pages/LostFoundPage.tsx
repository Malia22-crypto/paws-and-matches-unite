
import React, { useState } from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Search, MapPin, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface PetReport {
  id: string;
  type: 'lost' | 'found';
  petType: 'dog' | 'cat' | 'other';
  breed?: string;
  color: string;
  gender?: 'male' | 'female' | 'unknown';
  date: string;
  location: string;
  description: string;
  image?: string;
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
}

const LostFoundPage = () => {
  const [activeTab, setActiveTab] = useState('lost');
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  
  const [lostPetDialogOpen, setLostPetDialogOpen] = useState(false);
  const [foundPetDialogOpen, setFoundPetDialogOpen] = useState(false);
  
  const petReports: PetReport[] = [
    {
      id: "l1",
      type: 'lost',
      petType: 'dog',
      breed: 'Beagle',
      color: 'Brown and white',
      gender: 'male',
      date: '2023-04-15',
      location: 'Central Park, New York',
      description: "Max went missing during our afternoon walk. He's a small beagle with brown and white fur, wearing a red collar with tags. Very friendly and responds to his name.",
      image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=400&auto=format&fit=crop',
      contactName: 'John Smith',
      contactEmail: 'john.smith@example.com',
      contactPhone: '(555) 123-4567'
    },
    {
      id: "l2",
      type: 'lost',
      petType: 'cat',
      breed: 'Calico',
      color: 'Tricolor (orange, black, white)',
      gender: 'female',
      date: '2023-04-18',
      location: 'Maple Street, Seattle',
      description: "Luna slipped out through an open window. She's a medium-sized calico with distinctive orange, black and white patches. Shy around strangers but may approach if offered treats.",
      image: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?q=80&w=400&auto=format&fit=crop',
      contactName: 'Emily Johnson',
      contactEmail: 'emily.j@example.com',
      contactPhone: '(555) 987-6543'
    },
    {
      id: "f1",
      type: 'found',
      petType: 'dog',
      breed: 'Terrier Mix',
      color: 'White with black spots',
      gender: 'unknown',
      date: '2023-04-20',
      location: 'Washington Park, Denver',
      description: 'Found this small terrier mix wandering alone near the playground. No collar but appears well-cared for and friendly. Currently being held at Denver Animal Shelter.',
      image: 'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?q=80&w=400&auto=format&fit=crop',
      contactName: 'Denver Animal Shelter',
      contactEmail: 'info@denvershelter.org',
      contactPhone: '(555) 789-0123'
    },
    {
      id: "f2",
      type: 'found',
      petType: 'cat',
      breed: 'Tabby',
      color: 'Grey with stripes',
      gender: 'male',
      date: '2023-04-17',
      location: 'Oak Street, Portland',
      description: "Found this friendly male tabby in my backyard. Has a blue collar but no tags. Very affectionate and appears to be someone's pet. Currently keeping him safe at home.",
      image: 'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?q=80&w=400&auto=format&fit=crop',
      contactName: 'Michael Lee',
      contactEmail: 'michael.lee@example.com',
      contactPhone: '(555) 456-7890'
    }
  ];
  
  const filteredReports = petReports.filter(report => {
    if (activeTab !== 'all' && report.type !== activeTab) return false;
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        report.petType.toLowerCase().includes(searchLower) ||
        (report.breed && report.breed.toLowerCase().includes(searchLower)) ||
        report.color.toLowerCase().includes(searchLower) ||
        report.location.toLowerCase().includes(searchLower) ||
        report.description.toLowerCase().includes(searchLower)
      );
    }
    
    return true;
  });
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleLostPetSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLostPetDialogOpen(false);
    toast({
      title: "Report Submitted",
      description: "Your lost pet report has been submitted successfully.",
    });
  };

  const handleFoundPetSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFoundPetDialogOpen(false);
    toast({
      title: "Report Submitted",
      description: "Your found pet report has been submitted successfully.",
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-pet-blue-dark mb-4">Lost & Found Pets</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Report a lost pet or a pet you've found. Our AI matching system helps reunite pets with their owners by comparing lost and found reports.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/2">
            <Card className="h-full bg-gradient-to-br from-pet-blue to-pet-blue-dark text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Lost Your Pet?</CardTitle>
                <CardDescription className="text-gray-100">Report your lost pet with details and photo to help find them</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Our AI system will automatically match your report with found pets in the area, increasing your chances of a reunion.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Detailed lost pet reporting
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    AI-powered matching with found pets
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Instant email notifications for potential matches
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Dialog open={lostPetDialogOpen} onOpenChange={setLostPetDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-white text-pet-blue hover:bg-pet-cream-dark">
                      Report Lost Pet
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Report a Lost Pet</DialogTitle>
                      <DialogDescription>
                        Please provide as much information as possible about your lost pet to help us find them.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleLostPetSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="petType">Pet Type</Label>
                          <Select required>
                            <SelectTrigger id="petType">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="dog">Dog</SelectItem>
                              <SelectItem value="cat">Cat</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="breed">Breed (if known)</Label>
                          <Input id="breed" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="color">Color</Label>
                          <Input id="color" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="gender">Gender</Label>
                          <Select>
                            <SelectTrigger id="gender">
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="unknown">Unknown</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="date">Date Last Seen</Label>
                        <Input id="date" type="date" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Last Seen Location</Label>
                        <Input id="location" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea 
                          id="description" 
                          placeholder="Describe your pet, any unique features, collar, tags, and circumstances of disappearance"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="image">Upload Image (optional)</Label>
                        <Input id="image" type="file" accept="image/*" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactName">Your Name</Label>
                        <Input id="contactName" required />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="contactEmail">Email</Label>
                          <Input id="contactEmail" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contactPhone">Phone (optional)</Label>
                          <Input id="contactPhone" type="tel" />
                        </div>
                      </div>

                      <DialogFooter>
                        <Button type="submit" className="bg-pet-blue hover:bg-pet-blue-dark">Submit Report</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
          
          <div className="lg:w-1/2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-pet-blue-dark">Found a Pet?</CardTitle>
                <CardDescription>Help reunite a lost pet with their owner</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  Your report could help reunite a pet with their worried family. Provide as many details as possible for the best chance of finding the owner.
                </p>
                <ul className="space-y-2 mb-8 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-pet-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Simple reporting process
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-pet-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Photo upload capability
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-pet-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Anonymous contact options
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Dialog open={foundPetDialogOpen} onOpenChange={setFoundPetDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-pet-blue hover:bg-pet-blue-dark">
                      Report Found Pet
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Report a Found Pet</DialogTitle>
                      <DialogDescription>
                        Please provide details about the pet you've found to help us reunite them with their owner.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleFoundPetSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="foundPetType">Pet Type</Label>
                          <Select required>
                            <SelectTrigger id="foundPetType">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="dog">Dog</SelectItem>
                              <SelectItem value="cat">Cat</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="foundBreed">Breed (if known)</Label>
                          <Input id="foundBreed" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="foundColor">Color</Label>
                          <Input id="foundColor" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="foundGender">Gender</Label>
                          <Select>
                            <SelectTrigger id="foundGender">
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="unknown">Unknown</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="foundDate">Date Found</Label>
                        <Input id="foundDate" type="date" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="foundLocation">Location Found</Label>
                        <Input id="foundLocation" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="foundDescription">Description</Label>
                        <Textarea 
                          id="foundDescription" 
                          placeholder="Describe the pet, any collar or tags, and where/how they were found"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="foundImage">Upload Image (optional)</Label>
                        <Input id="foundImage" type="file" accept="image/*" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="foundContactName">Your Name</Label>
                        <Input id="foundContactName" required />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="foundContactEmail">Email</Label>
                          <Input id="foundContactEmail" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="foundContactPhone">Phone (optional)</Label>
                          <Input id="foundContactPhone" type="tel" />
                        </div>
                      </div>

                      <DialogFooter>
                        <Button type="submit" className="bg-pet-blue hover:bg-pet-blue-dark">Submit Report</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow p-6 mb-12">
          <h2 className="text-2xl font-bold text-pet-blue-dark mb-6">Recent Lost & Found Reports</h2>
          
          <div className="mb-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search reports by pet type, color, location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="lost">Lost Pets</TabsTrigger>
              <TabsTrigger value="found">Found Pets</TabsTrigger>
              <TabsTrigger value="all">All Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="lost" className="mt-0">
              <ReportsList reports={filteredReports} />
            </TabsContent>
            
            <TabsContent value="found" className="mt-0">
              <ReportsList reports={filteredReports} />
            </TabsContent>
            
            <TabsContent value="all" className="mt-0">
              <ReportsList reports={filteredReports} />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="bg-pet-cream rounded-xl p-8 shadow mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-pet-blue-dark mb-4">How Our AI Matching System Works</h2>
            <p className="text-gray-700 mb-6">
              Our intelligent system compares details from lost and found pet reports to identify potential matches, helping reunite pets with their owners faster.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-pet-blue mb-3 flex justify-center">
                  <div className="p-3 bg-pet-blue/10 rounded-full">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-center mb-2">Submit a Report</h3>
                <p className="text-gray-600 text-center text-sm">
                  Report your lost pet or a pet you found with detailed information and photos.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-pet-blue mb-3 flex justify-center">
                  <div className="p-3 bg-pet-blue/10 rounded-full">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7 9a2 2 0 114 0 2 2 0 01-4 0zm4 0a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-center mb-2">AI Matching</h3>
                <p className="text-gray-600 text-center text-sm">
                  Our system analyzes pet descriptions, locations, and images to find potential matches.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-pet-blue mb-3 flex justify-center">
                  <div className="p-3 bg-pet-blue/10 rounded-full">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-center mb-2">Get Notified</h3>
                <p className="text-gray-600 text-center text-sm">
                  Receive instant notifications when our system finds a potential match.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Button className="bg-pet-blue hover:bg-pet-blue-dark">
                Learn More About Our Technology
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

interface ReportsListProps {
  reports: PetReport[];
}

const ReportsList = ({ reports }: ReportsListProps) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="space-y-6">
      {reports.length > 0 ? (
        reports.map((report) => (
          <div key={report.id} className="border rounded-lg overflow-hidden shadow-sm bg-white">
            <div className="flex flex-col md:flex-row">
              {report.image && (
                <div className="md:w-1/4">
                  <div className="h-full">
                    <img
                      src={report.image}
                      alt={`${report.petType} ${report.type === 'lost' ? 'lost' : 'found'}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              )}
              
              <div className={`flex-1 p-6 ${!report.image ? 'md:w-full' : ''}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <Badge className={report.type === 'lost' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}>
                      {report.type === 'lost' ? 'Lost Pet' : 'Found Pet'}
                    </Badge>
                    <h3 className="text-xl font-semibold mt-2">
                      {report.type === 'lost' ? 'Lost' : 'Found'} {report.petType.charAt(0).toUpperCase() + report.petType.slice(1)}
                      {report.breed ? ` - ${report.breed}` : ''}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <Calendar className="h-4 w-4 mr-2 mt-1 text-gray-500" />
                    <span>{formatDate(report.date)}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-1 text-gray-500" />
                    <span>{report.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 line-clamp-2">
                  {report.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    Contact: {report.contactName}
                  </div>
                  
                  <Button>
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">No matching reports found</h3>
          <p className="text-gray-500">
            Try adjusting your search criteria or check back later.
          </p>
        </div>
      )}
    </div>
  );
};

export default LostFoundPage;
