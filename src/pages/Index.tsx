
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import Hero from '@/components/Hero';
import FeaturedPets from '@/components/FeaturedPets';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import InfoSection from '@/components/InfoSection';
import StatsSection from '@/components/StatsSection';

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-16">
        <Hero />
        <FeaturedPets />
        <FeatureSection />
        <InfoSection />
        <StatsSection />
        <TestimonialSection />
      </div>
    </MainLayout>
  );
};

export default Index;
