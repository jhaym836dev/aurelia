import React from 'react';
import AppImage from '@/components/ui/AppImage';

const restaurants = [
{
  name: 'Solis',
  type: 'Signature Restaurant',
  desc: 'Sunset tasting menus with panoramic ocean views. Chef Lena Hartmann presents 7-course journeys through coastal Mediterranean cuisine.',
  hours: '18:00 – 23:00',
  cuisine: 'Mediterranean',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_14e141521-1765095380964.png",
  alt: 'Elegant oceanfront restaurant with warm candlelit tables and panoramic sunset view over the water',
  featured: true
},
{
  name: 'Coral',
  type: 'Beach Bar & Grill',
  desc: 'Barefoot dining on white sand. Fresh catches, tropical cocktails, and the sound of waves.',
  hours: '11:00 – 22:00',
  cuisine: 'Seafood & Grill',
  src: "https://images.unsplash.com/photo-1471913561682-88a61d786c46",
  alt: 'Casual beach bar with thatched roof, colorful cocktails and ocean view in golden afternoon light',
  featured: false
},
{
  name: 'Ember',
  type: 'Sky Lounge',
  desc: 'Craft cocktails and small plates 30 meters above sea level. The best sunset in the Maldives.',
  hours: '16:00 – 01:00',
  cuisine: 'Cocktails & Tapas',
  src: "https://images.unsplash.com/photo-1563138216-8ff2e182ccbd",
  alt: 'Rooftop lounge bar at dusk with amber lighting, craft cocktails and cityscape horizon view',
  featured: false
}];


const menuHighlights = [
{ name: 'Saffron Lobster Bisque', price: '$42', note: 'Chef\'s signature' },
{ name: 'Maldivian Reef Fish Crudo', price: '$38', note: 'Daily catch' },
{ name: 'Wagyu Tenderloin A5', price: '$145', note: 'Limited availability' },
{ name: 'Coconut Panna Cotta', price: '$22', note: 'House dessert' }];


export default function DiningSection() {
  return (
    <section className="py-20 px-6 relative" id="dining">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
          <div className="reveal-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: 'var(--primary)' }} />
              <span className="text-primary uppercase tracking-widest" style={{ fontSize: '10px', fontWeight: 600 }}>
                Dining
              </span>
            </div>
            <h2 className="section-title font-display text-foreground" style={{ fontWeight: 300 }}>
              Taste the<br />
              <span className="italic" style={{ color: 'var(--accent)' }}>Horizon</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs reveal-on-scroll stagger-2">
            Three distinct dining experiences, each with ocean views and menus crafted from locally-sourced ingredients.
          </p>
        </div>

        {/* Featured restaurant */}
        <div className="reveal-on-scroll mb-6 relative overflow-hidden rounded-2xl" style={{ minHeight: '420px' }}>
          <AppImage
            src={restaurants?.[0]?.src}
            alt={restaurants?.[0]?.alt}
            fill
            className="object-cover transition-transform duration-1000 hover:scale-105"
            sizes="100vw" />
          
          {/* Dark scrim — text is white, so dark overlay required */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(13,10,7,0.85) 0%, rgba(13,10,7,0.4) 50%, rgba(13,10,7,0.1) 100%)' }} />
          
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-14 z-10">
            <span
              className="inline-block mb-4 px-3 py-1 text-xs uppercase tracking-widest"
              style={{
                border: '1px solid rgba(212,137,74,0.4)',
                color: 'var(--primary)',
                borderRadius: '2px',
                width: 'fit-content',
                fontSize: '9px'
              }}>
              
              {restaurants?.[0]?.type}
            </span>
            <h3
              className="font-display text-foreground mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, fontStyle: 'italic' }}>
              
              {restaurants?.[0]?.name}
            </h3>
            <p className="text-foreground mb-6 leading-relaxed max-w-md" style={{ fontSize: '15px', opacity: 0.7 }}>
              {restaurants?.[0]?.desc}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <p className="text-muted-foreground uppercase tracking-widest mb-1" style={{ fontSize: '9px' }}>Hours</p>
                <p className="text-foreground text-sm">{restaurants?.[0]?.hours}</p>
              </div>
              <div>
                <p className="text-muted-foreground uppercase tracking-widest mb-1" style={{ fontSize: '9px' }}>Cuisine</p>
                <p className="text-foreground text-sm">{restaurants?.[0]?.cuisine}</p>
              </div>
              <button
                className="ml-auto px-7 py-3 text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:opacity-80"
                style={{
                  background: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  borderRadius: '2px'
                }}>
                
                Reserve Table
              </button>
            </div>
          </div>

          {/* Menu highlights overlay */}
          <div
            className="absolute top-6 right-6 glass-card p-6 rounded-xl hidden lg:block"
            style={{ minWidth: '220px' }}>
            
            <p className="text-primary uppercase tracking-widest mb-4" style={{ fontSize: '9px', fontWeight: 600 }}>
              Tonight's Highlights
            </p>
            <div className="space-y-3">
              {menuHighlights?.map((item) =>
              <div key={item?.name} className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-foreground text-xs font-medium">{item?.name}</p>
                    <p className="text-muted-foreground" style={{ fontSize: '9px' }}>{item?.note}</p>
                  </div>
                  <span className="text-accent text-sm font-medium flex-shrink-0">{item?.price}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Secondary restaurants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {restaurants?.slice(1)?.map((r, i) =>
          <div
            key={r?.name}
            className={`reveal-on-scroll stagger-${i + 2} relative overflow-hidden rounded-2xl group`}
            style={{ minHeight: '280px' }}>
            
              <AppImage
              src={r?.src}
              alt={r?.alt}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw" />
            
              <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,10,7,0.92) 0%, rgba(13,10,7,0.2) 60%, transparent 100%)' }} />
            
              <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
                <span
                className="text-primary uppercase tracking-widest mb-2 block"
                style={{ fontSize: '9px' }}>
                
                  {r?.type}
                </span>
                <h3 className="font-display text-foreground text-2xl mb-2" style={{ fontWeight: 300, fontStyle: 'italic' }}>
                  {r?.name}
                </h3>
                <p className="text-foreground text-sm leading-relaxed mb-4" style={{ opacity: 0.6, maxWidth: '280px' }}>
                  {r?.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-xs">{r?.hours}</span>
                  <button
                  className="text-primary text-xs uppercase tracking-widest underline-hover">
                  
                    Reserve →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}