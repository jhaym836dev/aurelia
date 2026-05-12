import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoomsHero from '@/app/rooms-suites/components/RoomsHero';
import RoomsGrid from '@/app/rooms-suites/components/RoomsGrid';
import AmenitiesSection from '@/app/rooms-suites/components/AmenitiesSection';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export default function RoomsSuitesPage() {
  return (
    <main className="relative bg-background min-h-screen overflow-x-hidden">
      <div className="noise-overlay" />
      <Header />
      <RoomsHero />
      <RoomsGrid />
      <AmenitiesSection />
      <Footer />
      <ScrollRevealInit />
    </main>
  );
}