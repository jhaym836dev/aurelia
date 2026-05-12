'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const slides = [
{
  src: "https://images.unsplash.com/photo-1659360536653-b8b027ed0bcc",
  alt: 'Aerial view of tropical beach resort with crystal blue water and white sand at golden hour',
  caption: 'Oceanfront Paradise'
},
{
  src: "https://images.unsplash.com/photo-1599826602562-e083aa659710",
  alt: 'Overwater bungalows at sunset with warm orange sky reflecting on calm ocean waters',
  caption: 'Overwater Villas'
},
{
  src: "https://images.unsplash.com/photo-1727520018086-10a6d53ecfdb",
  alt: 'Luxury resort infinity pool overlooking tropical ocean at dusk, warm amber lighting',
  caption: 'Infinity Horizons'
},
{
  src: "https://images.unsplash.com/photo-1698322155385-0a24f51da3a3",
  alt: 'Private beach with palm trees and sun loungers bathed in golden sunset light',
  caption: 'Private Beaches'
}];


export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setPrev(current);
    setCurrent(index);
    setTimeout(() => {
      setPrev(null);
      setTransitioning(false);
    }, 900);
  }, [current, transitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goToSlide]);

  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden" style={{ paddingTop: 0 }}>
      {/* Left: Slideshow */}
      <div className="relative w-full md:w-3/5 min-h-screen overflow-hidden">
        {/* Slides */}
        {slides.map((slide, i) =>
        <div
          key={i}
          className="absolute inset-0 transition-opacity"
          style={{
            opacity: i === current ? 1 : 0,
            transitionDuration: '900ms',
            transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
            zIndex: i === current ? 2 : i === prev ? 1 : 0
          }}>
          
            <AppImage
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="60vw" />
          
            {/* Gradient scrim for text contrast */}
            <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(13,10,7,0.2) 0%, transparent 60%), linear-gradient(to top, rgba(13,10,7,0.7) 0%, transparent 40%)'
            }} />
          
          </div>
        )}

        {/* Scan line animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <div
            className="scan-line-anim w-full pointer-events-none"
            style={{ height: '120px', position: 'absolute', top: 0, left: 0 }} />
          
        </div>

        {/* Slide caption bottom left */}
        <div className="absolute bottom-10 left-8 z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px" style={{ backgroundColor: 'var(--primary)' }} />
            <span
              className="text-foreground uppercase tracking-widest"
              style={{ fontSize: '10px', fontWeight: 500 }}>
              
              {slides[current].caption}
            </span>
          </div>
          {/* Slide dots */}
          <div className="flex gap-2">
            {slides.map((_, i) =>
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? '24px' : '6px',
                height: '2px',
                backgroundColor: i === current ? 'var(--primary)' : 'rgba(245,237,224,0.3)',
                border: 'none',
                cursor: 'pointer',
                padding: 0
              }}
              aria-label={`Go to slide ${i + 1}`} />

            )}
          </div>
        </div>

        {/* Slide counter */}
        <div
          className="absolute top-8 left-8 z-10 font-mono text-foreground"
          style={{ fontSize: '11px', letterSpacing: '0.2em', opacity: 0.5 }}>
          
          0{current + 1} / 0{slides.length}
        </div>

        {/* Right edge gradient to blend with right panel */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10 hidden md:block"
          style={{ background: 'linear-gradient(to right, transparent, var(--background))' }} />
        
      </div>

      {/* Right: Aurelia heading + content */}
      <div
        className="hidden md:flex flex-col justify-center relative w-2/5 px-10 lg:px-16 pt-24 pb-12"
        style={{ background: 'var(--background)' }}>
        
        {/* Atmospheric blob */}
        <div
          className="absolute top-1/3 right-0 w-72 h-72 blob-sunset pointer-events-none"
          style={{ animation: 'floatY 7s ease-in-out infinite' }} />
        

        <div className="relative z-10">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-8 fade-in-up"
            style={{ animationDelay: '0.1s' }}>
            
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--primary)', animation: 'pulseGlow 2s ease-in-out infinite' }} />
            
            <span
              className="text-primary uppercase tracking-widest"
              style={{ fontSize: '10px', fontWeight: 600 }}>
              
              North Malé Atoll, Maldives
            </span>
          </div>

          {/* Main title */}
          <h1
            className="hero-title text-foreground fade-in-up delay-100"
            style={{ fontStyle: 'italic', fontWeight: 300 }}>
            
            Aurelia
          </h1>

          {/* Subtitle */}
          <p
            className="text-muted-foreground mt-6 mb-10 leading-relaxed fade-in-up delay-200"
            style={{ maxWidth: '320px', fontSize: '15px', fontWeight: 300 }}>
            
            Where the sun meets the sea. A sanctuary of unhurried luxury crafted for those who seek the extraordinary.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 fade-in-up delay-300">
            <Link
              href="/#booking"
              className="group flex items-center justify-between border-b pb-4 transition-colors duration-300"
              style={{ borderColor: 'rgba(212,137,74,0.3)' }}>
              
              <span className="text-foreground text-xs uppercase tracking-widest font-medium">Reserve Your Stay</span>
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1"
                className="text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                
                <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/rooms-suites"
              className="group flex items-center justify-between border-b pb-4 transition-colors duration-300"
              style={{ borderColor: 'rgba(212,137,74,0.15)' }}>
              
              <span className="text-muted-foreground text-xs uppercase tracking-widest font-medium group-hover:text-foreground transition-colors">Explore Rooms</span>
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1"
                className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-primary">
                
                <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Award badge */}
          <div
            className="glass-card mt-12 inline-flex items-center gap-4 px-5 py-4 rounded-xl"
            style={{ animation: 'floatY 5s ease-in-out infinite' }}>
            
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(212,137,74,0.15)' }}>
              
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-foreground text-sm font-medium">World's Best Resort</p>
              <p className="text-muted-foreground uppercase tracking-widest" style={{ fontSize: '9px' }}>Travel + Leisure 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hero overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end pb-16 px-6 z-20 md:hidden">
        
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(13,10,7,0.9) 0%, rgba(13,10,7,0.3) 50%, transparent 100%)' }} />
        
        <div className="relative z-10">
          <h1
            className="font-display text-foreground mb-4"
            style={{ fontSize: 'clamp(3.5rem, 18vw, 7rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
            
            Aurelia
          </h1>
          <p className="text-foreground mb-6 leading-relaxed" style={{ fontSize: '14px', opacity: 0.7, maxWidth: '280px' }}>
            Where the sun meets the sea. A sanctuary of unhurried luxury.
          </p>
          <Link
            href="/#booking"
            className="inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-widest font-semibold transition-all duration-300"
            style={{
              background: 'var(--primary)',
              color: 'var(--primary-foreground)',
              borderRadius: '2px'
            }}>
            
            Reserve Now
          </Link>
        </div>
      </div>
    </section>);

}