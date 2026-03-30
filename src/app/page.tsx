import React from 'react';
import { Header } from '../components/Header/Header';
import { 
  HeroSection,
  StatsBridgeSection,
  GallerySection, 
  FeatureDarkSection, 
  ServicesSection, 
  CallToActionSection 
} from '../components/Sections/Sections';
import { TeamSection } from '../components/TeamCarousel/TeamCarousel';
import { GalleryMosaicSection } from '../components/GalleryMosaic/GalleryMosaic';
import { Footer } from '../components/Footer/Footer';
import { FloatingEmergencyButton } from '../components/Forms/Forms';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StatsBridgeSection />

      {/* Padding extra para acomodar o stats bridge que transborda 44px */}
      <div className={styles.statsSpacingBuffer}>
        <GallerySection />
      </div>

      <FeatureDarkSection />
      <ServicesSection />
      <GalleryMosaicSection />
      <TeamSection />
      <CallToActionSection />
      <Footer />
      <FloatingEmergencyButton />
    </main>
  );
}
