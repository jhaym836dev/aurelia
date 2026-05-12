import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import StatsSection from '@/app/components/StatsSection';
import RoomsPreview from '@/app/components/RoomsPreview';
import DiningSection from '@/app/components/DiningSection';
import BookingSection from '@/app/components/BookingSection';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export default function HomePage() {
  return (
    <main className="relative bg-background min-h-screen overflow-x-hidden">
      <div className="noise-overlay" />
      <Header />
      <HeroSection />
      <StatsSection />
      <RoomsPreview />
      <DiningSection />
      <BookingSection />
      <Footer />
      <ScrollRevealInit />
    </main>
  );
}