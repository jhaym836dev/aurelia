import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryHero from '@/app/gallery/components/GalleryHero';
import GalleryGrid from '@/app/gallery/components/GalleryGrid';
import VideoSection from '@/app/gallery/components/VideoSection';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export default function GalleryPage() {
  return (
    <main className="relative bg-background min-h-screen overflow-x-hidden">
      <div className="noise-overlay" />
      <Header />
      <GalleryHero />
      <GalleryGrid />
      <VideoSection />
      <Footer />
      <ScrollRevealInit />
    </main>
  );
}