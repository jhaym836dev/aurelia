import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const rooms = [
{
  id: 1,
  name: 'Ocean Suite',
  type: 'Ocean View',
  size: '85 m²',
  price: 890,
  desc: 'Floor-to-ceiling glass walls frame the Indian Ocean. A private terrace with an infinity plunge pool awaits.',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0d91c49-1772211555732.png",
  alt: 'Luxury ocean suite with floor-to-ceiling windows overlooking turquoise water at sunset',
  tag: 'Most Popular',
  span: 'row'
},
{
  id: 2,
  name: 'Beach Villa',
  type: 'Beachfront',
  size: '120 m²',
  price: 1450,
  desc: 'Step directly onto white sand. Your private villa with butler service and a sunset-facing deck.',
  src: "https://images.unsplash.com/photo-1704284085642-5e0fe5dd3192",
  alt: 'Beachfront villa with private deck and palm trees in warm golden afternoon light',
  tag: 'Beach Access',
  span: 'normal'
},
{
  id: 3,
  name: 'Penthouse Suite',
  type: 'Sky Level',
  size: '210 m²',
  price: 3200,
  desc: 'The pinnacle of Aurelia. A two-level sanctuary with 360° ocean views and a rooftop terrace.',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1124728ec-1768786412372.png",
  alt: 'Penthouse suite with panoramic ocean views, modern luxury furnishings and warm ambient lighting',
  tag: 'Exclusive',
  span: 'normal'
}];


export default function RoomsPreview() {
  return (
    <section className="py-20 px-6 relative" id="rooms">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="reveal-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: 'var(--primary)' }} />
              <span className="text-primary uppercase tracking-widest" style={{ fontSize: '10px', fontWeight: 600 }}>
                Accommodations
              </span>
            </div>
            <h2 className="section-title font-display text-foreground" style={{ fontWeight: 300 }}>
              Rooms &<br />
              <span className="italic" style={{ color: 'var(--accent)' }}>Suites</span>
            </h2>
          </div>
          <div className="reveal-on-scroll stagger-2 flex flex-col items-start md:items-end gap-3">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              87 private sanctuaries, each designed with the ocean as your living room.
            </p>
            <Link
              href="/rooms-suites"
              className="group flex items-center gap-2 text-primary text-xs uppercase tracking-widest font-medium underline-hover">
              
              View All Rooms
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
              className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bento grid — 2 cols desktop */}
        {/* STEP 1: 3 cards: OceanSuite, BeachVilla, PenthouseSuite */}
        {/* STEP 2: Row 1: [col-1: OceanSuite cs-1 rs-2] [col-2: BeachVilla cs-1 rs-1] */}
        {/*         Row 2: [col-1: OceanSuite cont.] [col-2: PenthouseSuite cs-1 rs-1] */}
        {/* STEP 3: Placed 3/3 cards ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Ocean Suite — spans 2 rows */}
          {/* BENTO: col-1, row-span-2 */}
          <div
            className="reveal-on-scroll relative overflow-hidden rounded-2xl group md:row-span-2"
            style={{ minHeight: '520px' }}>
            
            <AppImage
              src={rooms?.[0]?.src}
              alt={rooms?.[0]?.alt}
              fill
              className="object-cover room-card-img"
              sizes="(max-width: 768px) 100vw, 50vw" />
            
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,10,7,0.92) 0%, rgba(13,10,7,0.3) 50%, transparent 100%)' }} />
            
            {/* Tag */}
            <div className="absolute top-5 left-5 z-10">
              <span
                className="px-3 py-1 text-primary-foreground text-xs uppercase tracking-widest font-medium rounded-full"
                style={{ background: 'var(--primary)', fontSize: '9px' }}>
                
                {rooms?.[0]?.tag}
              </span>
            </div>
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <p className="text-muted-foreground uppercase tracking-widest mb-2" style={{ fontSize: '10px' }}>
                {rooms?.[0]?.type} · {rooms?.[0]?.size}
              </p>
              <h3 className="font-display text-foreground text-3xl md:text-4xl mb-3" style={{ fontWeight: 300, fontStyle: 'italic' }}>
                {rooms?.[0]?.name}
              </h3>
              <p className="text-foreground mb-5 leading-relaxed" style={{ fontSize: '14px', opacity: 0.65, maxWidth: '340px' }}>
                {rooms?.[0]?.desc}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-foreground font-display text-2xl" style={{ fontWeight: 300 }}>
                    ${rooms?.[0]?.price}
                  </span>
                  <span className="text-muted-foreground text-xs ml-2">/ night</span>
                </div>
                <Link
                  href="/rooms-suites"
                  className="px-6 py-3 text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:opacity-80"
                  style={{
                    background: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    borderRadius: '2px'
                  }}>
                  
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Beach Villa — col-2, row-1 */}
          {/* BENTO: col-2, row-1 */}
          <div
            className="reveal-on-scroll stagger-2 relative overflow-hidden rounded-2xl group"
            style={{ minHeight: '250px' }}>
            
            <AppImage
              src={rooms?.[1]?.src}
              alt={rooms?.[1]?.alt}
              fill
              className="object-cover room-card-img"
              sizes="(max-width: 768px) 100vw, 50vw" />
            
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,10,7,0.9) 0%, rgba(13,10,7,0.2) 60%, transparent 100%)' }} />
            
            <div className="absolute top-5 left-5 z-10">
              <span
                className="px-3 py-1 text-primary-foreground text-xs uppercase tracking-widest font-medium rounded-full"
                style={{ background: 'rgba(212,137,74,0.85)', fontSize: '9px' }}>
                
                {rooms?.[1]?.tag}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <p className="text-muted-foreground uppercase tracking-widest mb-1" style={{ fontSize: '9px' }}>
                {rooms?.[1]?.type} · {rooms?.[1]?.size}
              </p>
              <h3 className="font-display text-foreground text-2xl mb-1" style={{ fontWeight: 300, fontStyle: 'italic' }}>
                {rooms?.[1]?.name}
              </h3>
              <div className="flex items-center justify-between mt-3">
                <span className="text-foreground font-display text-xl" style={{ fontWeight: 300 }}>
                  ${rooms?.[1]?.price}<span className="text-muted-foreground text-xs ml-1">/ night</span>
                </span>
                <Link
                  href="/rooms-suites"
                  className="text-primary text-xs uppercase tracking-widest underline-hover">
                  
                  Details →
                </Link>
              </div>
            </div>
          </div>

          {/* Penthouse Suite — col-2, row-2 */}
          {/* BENTO: col-2, row-2 */}
          <div
            className="reveal-on-scroll stagger-3 relative overflow-hidden rounded-2xl group"
            style={{ minHeight: '250px' }}>
            
            <AppImage
              src={rooms?.[2]?.src}
              alt={rooms?.[2]?.alt}
              fill
              className="object-cover room-card-img"
              sizes="(max-width: 768px) 100vw, 50vw" />
            
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,10,7,0.9) 0%, rgba(13,10,7,0.2) 60%, transparent 100%)' }} />
            
            <div className="absolute top-5 left-5 z-10">
              <span
                className="px-3 py-1 text-xs uppercase tracking-widest font-medium rounded-full"
                style={{ background: 'rgba(200,150,90,0.2)', color: 'var(--gold-light)', border: '1px solid rgba(200,150,90,0.4)', fontSize: '9px' }}>
                
                {rooms?.[2]?.tag}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <p className="text-muted-foreground uppercase tracking-widest mb-1" style={{ fontSize: '9px' }}>
                {rooms?.[2]?.type} · {rooms?.[2]?.size}
              </p>
              <h3 className="font-display text-foreground text-2xl mb-1" style={{ fontWeight: 300, fontStyle: 'italic' }}>
                {rooms?.[2]?.name}
              </h3>
              <div className="flex items-center justify-between mt-3">
                <span className="text-foreground font-display text-xl" style={{ fontWeight: 300 }}>
                  ${rooms?.[2]?.price}<span className="text-muted-foreground text-xs ml-1">/ night</span>
                </span>
                <Link
                  href="/rooms-suites"
                  className="text-primary text-xs uppercase tracking-widest underline-hover">
                  
                  Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}