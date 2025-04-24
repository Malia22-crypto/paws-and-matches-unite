
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const RehomePage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-pet-blue-dark mb-4">Rehome Your Pet</h1>
          <p className="text-gray-600">
            We understand that circumstances change. Our rehoming service helps you find a loving new home for your pet in a safe, responsible way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center shadow-md">
            <CardHeader className="pb-2">
              <div className="mx-auto bg-pet-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-pet-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <CardTitle className="text-xl">Create a Listing</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              <p>Create a detailed profile for your pet with photos and information about their personality and needs.</p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-md">
            <CardHeader className="pb-2">
              <div className="mx-auto bg-pet-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-pet-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <CardTitle className="text-xl">Review Adopters</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              <p>Review applications from potential adopters and communicate with them to find the perfect match.</p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-md">
            <CardHeader className="pb-2">
              <div className="mx-auto bg-pet-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-pet-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <CardTitle className="text-xl">Safe Transition</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              <p>Ensure a smooth transition for your pet with our guidance on transfers, agreements, and follow-ups.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-pet-blue-dark mb-4">Why Choose Our Rehoming Service?</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our private rehoming service helps you find a loving new home for your pet without them having to enter a shelter system.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 mr-2 text-pet-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p><strong>Safety:</strong> We review all potential adopters to ensure they're suitable for your pet.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-5 w-5 mr-2 text-pet-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p><strong>Control:</strong> You decide who adopts your pet based on applications received.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-5 w-5 mr-2 text-pet-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p><strong>Support:</strong> Our team provides guidance throughout the entire process.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-5 w-5 mr-2 text-pet-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p><strong>Peace of mind:</strong> Stay updated on your pet's transition to their new home.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/rehome/start">
                  <Button size="lg" className="bg-pet-blue hover:bg-pet-blue-dark">
                    Start Rehoming Process
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-[url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=800&auto=format')] bg-cover bg-center">
              {/* Background image div */}
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-pet-blue-dark text-center mb-8">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1602979677071-1781b7f40023?q=80&w=200&auto=format"
                    alt="Dog with new family"
                    className="rounded-full w-20 h-20 object-cover border-4 border-pet-cream"
                  />
                </div>
                <p className="text-gray-600 italic text-center mb-4">
                  "When my job required me to relocate overseas, I was devastated at the thought of leaving my dog behind. Get Your Pet connected me with a wonderful family who sends me regular updates. I'm so grateful that Max is thriving in his new home."
                </p>
                <p className="text-center font-semibold">
                  - Sarah T., Former Dog Owner
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=200&auto=format"
                    alt="Cat with new owner"
                    className="rounded-full w-20 h-20 object-cover border-4 border-pet-cream"
                  />
                </div>
                <p className="text-gray-600 italic text-center mb-4">
                  "After developing severe allergies, I had to find a new home for my cat Luna. Through Get Your Pet, I was able to interview potential adopters and find someone who would give her the same love and care that I did. The transition was smooth and respectful."
                </p>
                <p className="text-center font-semibold">
                  - Michael R., Former Cat Owner
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-pet-cream rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-pet-blue-dark text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-pet-blue-dark">How does the rehoming process work?</h3>
              <p className="text-gray-600 mt-2">
                You'll create a detailed profile for your pet, review applications from potential adopters, communicate with candidates, and ultimately choose the best new home for your pet.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-semibold text-lg text-pet-blue-dark">Is there a fee for using the rehoming service?</h3>
              <p className="text-gray-600 mt-2">
                Our basic rehoming service is free. We do offer premium options for featured listings and additional support if needed.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-semibold text-lg text-pet-blue-dark">How do you screen potential adopters?</h3>
              <p className="text-gray-600 mt-2">
                All potential adopters must complete a comprehensive application that includes questions about their experience, living situation, and why they want to adopt. You'll review these applications and can ask additional questions before making your decision.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-semibold text-lg text-pet-blue-dark">What if I change my mind about rehoming?</h3>
              <p className="text-gray-600 mt-2">
                You can withdraw your pet's listing at any time before finalizing an adoption. We understand that circumstances can change.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-semibold text-lg text-pet-blue-dark">What support do you provide during the transition?</h3>
              <p className="text-gray-600 mt-2">
                We provide guidance on safe transfers, adoption agreements, and recommended follow-up practices. Our team is available to answer questions throughout the process.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-pet-blue-dark mb-4">Ready to Find a New Loving Home for Your Pet?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our rehoming process is designed to ensure your pet transitions smoothly to a home that's right for them.
          </p>
          <Link to="/rehome/start">
            <Button size="lg" className="bg-pet-blue hover:bg-pet-blue-dark">
              Start Rehoming Process
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default RehomePage;
