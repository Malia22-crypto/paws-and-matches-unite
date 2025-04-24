
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Emma Thompson",
      role: "Founder & CEO",
      bio: "Emma founded Get Your Pet after working in animal shelters for over a decade. She's passionate about improving pet adoption experiences.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Marcus Chen",
      role: "Chief Technology Officer",
      bio: "Marcus leads our technology team, focusing on developing our AI-powered matching system for lost and found pets.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Sophia Rodriguez",
      role: "Adoption Coordinator",
      bio: "With a background in animal welfare, Sophia ensures our adoption processes are effective, humane, and beneficial for all parties.",
      image: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="bg-pet-blue text-white rounded-3xl overflow-hidden shadow-xl mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pet-blue-dark to-transparent opacity-90"></div>
            <div className="relative z-10 p-8 md:p-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">About Get Your Pet</h1>
              <p className="text-xl md:max-w-2xl">
                We're dedicated to connecting pets with loving homes, helping pet owners rehome their animals, and reuniting lost pets with their families through innovative technology.
              </p>
            </div>
            <div className="h-64 md:h-96 bg-[url('https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1600&auto=format')] bg-cover bg-center"></div>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-pet-blue-dark mb-4">Our Mission</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Get Your Pet, we believe every pet deserves a loving home and every pet owner deserves support when facing difficult decisions. Our platform creates meaningful connections to ensure the best outcomes for pets and people.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-pet-blue">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-pet-blue-dark mb-3">Simplify Pet Adoption</h3>
                <p className="text-gray-600">
                  We strive to make the pet adoption process transparent, straightforward, and rewarding for both adopters and pets.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-pet-blue">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-pet-blue-dark mb-3">Support Responsible Rehoming</h3>
                <p className="text-gray-600">
                  We provide a safe alternative to surrendering pets to shelters, helping owners find the perfect new home directly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-pet-blue">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-pet-blue-dark mb-3">Reunite Lost Pets</h3>
                <p className="text-gray-600">
                  Our innovative AI-powered matching system increases the chances of reuniting lost pets with their anxious owners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-pet-blue-dark mb-4">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Get Your Pet began in 2020 when our founder, Emma Thompson, witnessed the overwhelming number of pets surrendered to shelters due to life changes like moves, allergies, or financial hardship.
                  </p>
                  <p>
                    Having worked in animal welfare for over a decade, Emma knew many of these surrenders could be avoided if pet owners had better options for rehoming their pets directly to new loving homes.
                  </p>
                  <p>
                    What started as a small community initiative has grown into a comprehensive platform serving thousands of pets and pet lovers across the country, with our innovative lost and found matching system added in 2022.
                  </p>
                </div>
              </div>
              
              <div className="bg-[url('https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=800&auto=format')] bg-cover bg-center">
                {/* Background image div */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-pet-blue-dark text-center mb-8">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-pet-blue-dark">{member.name}</h3>
                  <p className="text-pet-blue font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Impact Section */}
        <div className="bg-pet-cream rounded-xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold text-pet-blue-dark text-center mb-8">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-pet-blue mb-2">2,500+</div>
              <p className="text-gray-600">Pets Adopted</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-pet-blue mb-2">1,200+</div>
              <p className="text-gray-600">Successful Rehomings</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-pet-blue mb-2">400+</div>
              <p className="text-gray-600">Lost Pets Reunited</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-pet-blue mb-2">5,000+</div>
              <p className="text-gray-600">Active Users</p>
            </div>
          </div>
          
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Together with our community of pet lovers, we've made a significant impact on animal welfare by reducing shelter intake and helping pets find their perfect homes.
          </p>
        </div>
        
        {/* Partner Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-pet-blue-dark text-center mb-8">Our Partners</h2>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
              <div className="flex justify-center">
                <div className="h-12 w-32 bg-gray-300 rounded"></div>
              </div>
              <div className="flex justify-center">
                <div className="h-12 w-32 bg-gray-300 rounded"></div>
              </div>
              <div className="flex justify-center">
                <div className="h-12 w-32 bg-gray-300 rounded"></div>
              </div>
              <div className="flex justify-center">
                <div className="h-12 w-32 bg-gray-300 rounded"></div>
              </div>
            </div>
            
            <p className="text-center text-gray-600 mt-8">
              We collaborate with veterinary clinics, animal welfare organizations, and pet care brands to provide the best service to our community.
            </p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-pet-blue-dark mb-4">Ready to Join Our Community?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Whether you're looking to adopt, need to rehome a pet, or want to help reunite lost pets with their owners, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-pet-blue hover:bg-pet-blue-dark w-full sm:w-auto">
                Create an Account
              </Button>
            </Link>
            <Link to="/adopt">
              <Button size="lg" variant="outline" className="border-pet-blue text-pet-blue hover:bg-pet-blue/10 w-full sm:w-auto">
                Browse Available Pets
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
