import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function RoomsHero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      <AppImage
        src="https://img.rocket.new/generatedImages/rocket_gen_img_15dadb0d5-1772534098767.png"
        alt="Panoramic view of luxury overwater villas at Aurelia resort with turquoise lagoon at golden hour"
        fill
        priority
        className="object-cover"
        sizes="100vw" />
      
      {/* Dark scrim — white text over photo */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(13,10,7,0.92) 0%, rgba(13,10,7,0.55) 40%, rgba(13,10,7,0.2) 100%)'
        }} />
      

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div
          className="scan-line-anim w-full pointer-events-none"
          style={{ height: '100px', position: 'absolute', top: 0, left: 0 }} />
        
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: 'var(--primary)' }} />
              <span className="text-primary uppercase tracking-widest" style={{ fontSize: '10px', fontWeight: 600 }}>
                Accommodations
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
              
              Rooms &<br />Suites
            </h1>
          </div>
          <div className="max-w-sm">
            <p className="text-foreground leading-relaxed mb-4" style={{ fontSize: '15px', opacity: 0.65 }}>
              87 private sanctuaries, each designed with the ocean as your living room. From intimate ocean-view suites to sprawling over-water villas.
            </p>
            <div className="flex gap-6">
              <div>
                <p className="text-foreground text-2xl font-display" style={{ fontWeight: 300 }}>87</p>
                <p className="text-muted-foreground uppercase tracking-widest" style={{ fontSize: '9px' }}>Total Rooms</p>
              </div>
              <div>
                <p className="text-foreground text-2xl font-display" style={{ fontWeight: 300 }}>3</p>
                <p className="text-muted-foreground uppercase tracking-widest" style={{ fontSize: '9px' }}>Room Types</p>
              </div>
              <div>
                <p className="text-foreground text-2xl font-display" style={{ fontWeight: 300 }}>From $890</p>
                <p className="text-muted-foreground uppercase tracking-widest" style={{ fontSize: '9px' }}>Per Night</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}