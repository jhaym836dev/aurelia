'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

type Category = 'All' | 'Rooms' | 'Dining' | 'Beach' | 'Events';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
  category: Category;
  span?: 'wide' | 'tall' | 'normal';
}

const allItems: GalleryItem[] = [
{
  id: 1,
  src: "https://images.unsplash.com/photo-1599826602562-e083aa659710",
  alt: 'Overwater bungalows at sunset with warm amber sky and calm turquoise lagoon below',
  caption: 'Overwater Villas at Dusk',
  category: 'Rooms',
  span: 'wide'
},
{
  id: 2,
  src: "https://images.unsplash.com/photo-1569931908186-c21b306a5023",
  alt: 'Luxury resort infinity pool with sunset reflecting on water surface and palm silhouettes',
  caption: 'Infinity Pool at Sunset',
  category: 'Beach',
  span: 'tall'
},
{
  id: 3,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0d91c49-1772211555732.png",
  alt: 'Modern luxury suite interior with floor-to-ceiling windows and ocean panorama',
  caption: 'Ocean Suite Interior',
  category: 'Rooms',
  span: 'normal'
},
{
  id: 4,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1ed32a98d-1772642868054.png",
  alt: 'Elegant restaurant table setting with candlelight and ocean view at twilight',
  caption: 'Solis — Signature Dining',
  category: 'Dining',
  span: 'normal'
},
{
  id: 5,
  src: "https://images.unsplash.com/photo-1675198221188-767e513b9bd4",
  alt: 'Aerial view of tropical beach resort with crystal clear water and white sand at golden hour',
  caption: 'Aerial Resort View',
  category: 'Beach',
  span: 'wide'
},
{
  id: 6,
  src: "https://images.unsplash.com/photo-1642826914468-84fb898b23f0",
  alt: 'Beachside bar with colorful tropical cocktails and ocean backdrop in warm afternoon light',
  caption: 'Coral Beach Bar',
  category: 'Dining',
  span: 'normal'
},
{
  id: 7,
  src: "https://images.unsplash.com/photo-1681238325543-7477b5f9445a",
  alt: 'Private beach ceremony setup with floral arch and white chairs facing golden sunset ocean',
  caption: 'Private Beach Ceremony',
  category: 'Events',
  span: 'normal'
},
{
  id: 8,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_11c4b220e-1772756965086.png",
  alt: 'Penthouse suite with panoramic views, warm amber lighting and modern luxury furniture',
  caption: 'Penthouse Suite',
  category: 'Rooms',
  span: 'normal'
},
{
  id: 9,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_136d51a22-1778013870140.png",
  alt: 'Beachfront villa exterior with private pool and palm trees in golden afternoon sunlight',
  caption: 'Beach Villa',
  category: 'Rooms',
  span: 'normal'
},
{
  id: 10,
  src: "https://images.unsplash.com/photo-1543529659-f3887dec38cf",
  alt: 'Sky lounge rooftop bar with panoramic ocean horizon view at dusk and glowing amber lights',
  caption: 'Ember Sky Lounge',
  category: 'Dining',
  span: 'normal'
},
{
  id: 11,
  src: "https://images.unsplash.com/photo-1733270725335-8ecee420333b",
  alt: 'Pristine white sand beach at golden hour with shallow turquoise water and warm sky',
  caption: 'Private Beach',
  category: 'Beach',
  span: 'wide'
},
{
  id: 12,
  src: "https://images.unsplash.com/photo-1722428667804-4cc2f260848b",
  alt: 'Twilight beach event with string lights, elegant table settings and ocean backdrop',
  caption: 'Sunset Event',
  category: 'Events',
  span: 'normal'
}];


const categories: Category[] = ['All', 'Rooms', 'Dining', 'Beach', 'Events'];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = activeCategory === 'All' ? allItems : allItems.filter((i) => i.category === activeCategory);

  const openLightbox = (item: GalleryItem, index: number) => {
    setLightbox(item);
    setLightboxIndex(index);
  };

  const prev = () => {
    const newIndex = (lightboxIndex - 1 + filtered.length) % filtered.length;
    setLightbox(filtered[newIndex]);
    setLightboxIndex(newIndex);
  };

  const next = () => {
    const newIndex = (lightboxIndex + 1) % filtered.length;
    setLightbox(filtered[newIndex]);
    setLightboxIndex(newIndex);
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-6 py-2.5 text-xs uppercase tracking-widest font-medium transition-all duration-300"
            style={{
              background: activeCategory === cat ? 'var(--primary)' : 'transparent',
              color: activeCategory === cat ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
              border: `1px solid ${activeCategory === cat ? 'var(--primary)' : 'rgba(212,137,74,0.2)'}`,
              borderRadius: '2px'
            }}>
            
              {cat}
            </button>
          )}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-0" style={{ columnGap: '16px' }}>
          {filtered.map((item, i) =>
          <div
            key={item.id}
            className="gallery-item reveal-on-scroll rounded-xl cursor-pointer mb-4 break-inside-avoid"
            style={{
              transitionDelay: `${i % 3 * 80}ms`,
              height: item.span === 'wide' ? '320px' : item.span === 'tall' ? '440px' : '260px'
            }}
            onClick={() => openLightbox(item, i)}>
            
              <AppImage
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            
              <div className="gallery-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 translate-y-2 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-foreground text-sm font-medium">{item.caption}</p>
                <p className="text-muted-foreground text-xs uppercase tracking-widest mt-0.5">{item.category}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox &&
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: 'rgba(13,10,7,0.95)', backdropFilter: 'blur(12px)' }}
        onClick={(e) => {if (e.target === e.currentTarget) setLightbox(null);}}>
        
          <button
          onClick={() => setLightbox(null)}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full flex items-center justify-center text-foreground transition-colors hover:text-primary"
          style={{ background: 'rgba(212,137,74,0.1)', border: '1px solid rgba(212,137,74,0.2)' }}
          aria-label="Close lightbox">
          
            ✕
          </button>

          <button
          onClick={prev}
          className="absolute left-6 z-10 w-12 h-12 rounded-full flex items-center justify-center text-foreground transition-colors hover:text-primary"
          style={{ background: 'rgba(212,137,74,0.1)', border: '1px solid rgba(212,137,74,0.2)' }}
          aria-label="Previous image">
          
            ←
          </button>

          <div
          className="relative mx-20"
          style={{
            maxWidth: '80vw',
            maxHeight: '80vh',
            width: '900px',
            height: '600px',
            animation: 'scaleIn 0.3s ease-out forwards'
          }}>
          
            <AppImage
            src={lightbox.src}
            alt={lightbox.alt}
            fill
            className="object-contain rounded-xl"
            sizes="80vw"
            priority />
          
          </div>

          <button
          onClick={next}
          className="absolute right-6 z-10 w-12 h-12 rounded-full flex items-center justify-center text-foreground transition-colors hover:text-primary"
          style={{ background: 'rgba(212,137,74,0.1)', border: '1px solid rgba(212,137,74,0.2)' }}
          aria-label="Next image">
          
            →
          </button>

          <div className="absolute bottom-8 left-0 right-0 text-center z-10">
            <p className="text-foreground text-sm font-medium">{lightbox.caption}</p>
            <p className="text-muted-foreground text-xs uppercase tracking-widest mt-1">
              {lightboxIndex + 1} / {filtered.length} · {lightbox.category}
            </p>
          </div>
        </div>
      }
    </section>);

}