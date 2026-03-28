import React from 'react';
import { Header } from '../components/Header/Header';
import { 
  HeroSection, 
  GallerySection, 
  FeatureDarkSection, 
  ServicesSection, 
  TeamSection,
  CallToActionSection 
} from '../components/Sections/Sections';
import { Footer } from '../components/Footer/Footer';
import { FloatingEmergencyButton } from '../components/Forms/Forms';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <GallerySection />
      <FeatureDarkSection />
      <ServicesSection />
      <TeamSection />
      <CallToActionSection />
      <Footer />
      <FloatingEmergencyButton />
    </main>
  );
}
