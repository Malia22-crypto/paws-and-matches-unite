
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import Hero from '@/components/Hero';
import FeaturedPets from '@/components/FeaturedPets';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import InfoSection from '@/components/InfoSection';
import StatsSection from '@/components/StatsSection';
import { Pet } from '@/components/PetCard';

const Index = () => {
  // Mock data for featured pets
  const featuredPets: Pet[] = [
    {
      id: "1",
      name: "Bella",
      type: "dog",
      breed: "Golden Retriever",
      age: "2 years",
      gender: "female",
      location: "Boston, MA",
      image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=500&auto=format&fit=crop",
      status: "available"
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
      status: "available"
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
      status: "available"
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
      status: "pending"
    }
  ];

  return (
    <MainLayout>
      <div className="space-y-16">
        <Hero />
        <FeaturedPets pets={featuredPets} />
        <FeatureSection />
        <InfoSection />
        <StatsSection />
        <TestimonialSection />
      </div>
    </MainLayout>
  );
};

export default Index;
