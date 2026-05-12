import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function GalleryHero() {
  return (
    <section className="relative flex items-end pb-16 overflow-hidden" style={{ minHeight: '60vh' }}>
      <AppImage
        src="https://images.unsplash.com/photo-1609299630827-db3bf39003c8"
        alt="Breathtaking panoramic beach at golden hour with warm sunset colors reflecting on calm shallow water"
        fill
        priority
        className="object-cover"
        sizes="100vw" />
      
      {/* Dark scrim — white text */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(13,10,7,0.9) 0%, rgba(13,10,7,0.4) 50%, rgba(13,10,7,0.15) 100%)'
        }} />
      

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ backgroundColor: 'var(--primary)' }} />
          <span className="text-primary uppercase tracking-widest" style={{ fontSize: '10px', fontWeight: 600 }}>
            Visual Journey
          </span>
        </div>
        <h1
          className="font-display text-foreground"
          style={{
            fontSize: 'clamp(3rem, 9vw, 8rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 0.9,
            letterSpacing: '-0.02em'
          }}>
          
          Gallery
        </h1>
        <p className="text-foreground mt-5 max-w-md leading-relaxed" style={{ fontSize: '15px', opacity: 0.65 }}>
          Through every frame, experience the warmth of Aurelia — where light dances on the water and every moment is a memory.
        </p>
      </div>
    </section>);

}