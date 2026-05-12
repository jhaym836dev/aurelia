'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import BookingModal from './BookingModal';

type FilterType = 'All' | 'Ocean View' | 'Beachfront' | 'Penthouse';

interface Room {
  id: number;
  name: string;
  type: FilterType;
  size: string;
  capacity: number;
  price: number;
  desc: string;
  longDesc: string;
  src: string;
  alt: string;
  amenities: string[];
  tag?: string;
}

const rooms: Room[] = [
{
  id: 1,
  name: 'Lagoon Suite',
  type: 'Ocean View',
  size: '65 m²',
  capacity: 2,
  price: 890,
  desc: 'Elevated above the lagoon with panoramic sunrise views and a glass-floor bathroom.',
  longDesc: 'Wake to the sound of gentle waves. The Lagoon Suite features a king bed, glass-floor bathroom revealing the ocean below, and a private sun deck with direct water access.',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c93cd4d2-1772250230487.png",
  alt: 'Modern overwater suite with glass floor panel revealing turquoise lagoon below, king bed and ocean view',
  amenities: ['King Bed', 'Glass Floor', 'Sun Deck', 'Minibar', 'Rain Shower', 'Butler Service'],
  tag: 'Ocean View'
},
{
  id: 2,
  name: 'Ocean Suite',
  type: 'Ocean View',
  size: '85 m²',
  capacity: 2,
  price: 1100,
  desc: 'Floor-to-ceiling glass frames the Indian Ocean. A plunge pool terrace awaits.',
  longDesc: 'The Ocean Suite is our most popular accommodation. Uninterrupted ocean views from every angle, a private infinity plunge pool on the terrace, and luxurious amenities throughout.',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0d91c49-1772211555732.png",
  alt: 'Luxury ocean suite with floor-to-ceiling windows, infinity plunge pool terrace and sunset ocean panorama',
  amenities: ['King Bed', 'Plunge Pool', 'Ocean Terrace', 'Espresso Machine', 'Butler Service', 'Free Minibar'],
  tag: 'Most Popular'
},
{
  id: 3,
  name: 'Reef Villa',
  type: 'Beachfront',
  size: '110 m²',
  capacity: 3,
  price: 1450,
  desc: 'Beachfront villa with direct sand access, private pool, and outdoor dining pavilion.',
  longDesc: 'Step directly onto white sand from your private villa. The Reef Villa features an outdoor pool, a shaded dining pavilion for in-villa dining, and a dedicated butler service.',
  src: "https://images.unsplash.com/photo-1572247930279-6eeefca4f1f1",
  alt: 'Beachfront villa with private pool, thatched dining pavilion and direct access to white sand beach',
  amenities: ['King Bed', 'Private Pool', 'Beach Access', 'Outdoor Dining', 'Butler Service', 'Snorkel Equipment'],
  tag: 'Beach Access'
},
{
  id: 4,
  name: 'Beach Villa',
  type: 'Beachfront',
  size: '140 m²',
  capacity: 4,
  price: 1800,
  desc: 'Expansive beachfront villa with two bedrooms, private pool, and sunset-facing deck.',
  longDesc: 'Our largest beachfront offering. Two bedrooms, a spacious living area, private pool, and a sunset-facing deck that makes evenings truly unforgettable. Ideal for families or couples seeking space.',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1036a2f0f-1775715485823.png",
  alt: 'Expansive beach villa with two-bedroom layout, private infinity pool and sunset view over calm ocean',
  amenities: ['2 Bedrooms', 'Private Pool', 'Sunset Deck', 'Full Kitchen', 'Butler Service', 'Private Beach'],
  tag: 'Family'
},
{
  id: 5,
  name: 'Sky Penthouse',
  type: 'Penthouse',
  size: '210 m²',
  capacity: 2,
  price: 3200,
  desc: '360° ocean views from the highest point. Two levels, rooftop terrace, private chef.',
  longDesc: 'The pinnacle of Aurelia. Two levels of pure luxury with a rooftop terrace offering 360° views of the Maldivian horizon. A private chef, dedicated butler, and Aurelia\'s finest furnishings.',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1491fff69-1772462165372.png",
  alt: 'Two-level penthouse suite with rooftop terrace, 360 degree ocean panorama and premium luxury furnishings',
  amenities: ['Master Suite', 'Rooftop Terrace', '360° Views', 'Private Chef', 'Butler Service', 'Jacuzzi'],
  tag: 'Exclusive'
},
{
  id: 6,
  name: 'Grand Penthouse',
  type: 'Penthouse',
  size: '320 m²',
  capacity: 4,
  price: 5500,
  desc: 'The ultimate expression of Aurelia luxury. Private pool, cinema, and full concierge.',
  longDesc: 'Aurelia\'s crown jewel. Three bedrooms, a private rooftop pool, home cinema, wine cellar, and a team of dedicated staff. Reserved for those who accept nothing less than the extraordinary.',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_13a0e984e-1770606956968.png",
  alt: 'Grand penthouse with rooftop pool, private cinema room and panoramic Maldivian ocean views at twilight',
  amenities: ['3 Bedrooms', 'Rooftop Pool', 'Private Cinema', 'Wine Cellar', 'Full Concierge', 'Helipad Access'],
  tag: 'Ultra-Luxury'
}];


const filters: FilterType[] = ['All', 'Ocean View', 'Beachfront', 'Penthouse'];

export default function RoomsGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const filtered = activeFilter === 'All' ? rooms : rooms.filter((r) => r.type === activeFilter);

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) =>
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className="px-6 py-2.5 text-xs uppercase tracking-widest font-medium transition-all duration-300"
            style={{
              background: activeFilter === f ? 'var(--primary)' : 'transparent',
              color: activeFilter === f ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
              border: `1px solid ${activeFilter === f ? 'var(--primary)' : 'rgba(212,137,74,0.2)'}`,
              borderRadius: '2px'
            }}>
            
              {f}
            </button>
          )}
        </div>

        {/* Rooms grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((room, i) =>
          <div
            key={room.id}
            className="reveal-on-scroll group relative overflow-hidden rounded-2xl flex flex-col"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              transitionDelay: `${i * 80}ms`
            }}>
            
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: '240px' }}>
                <AppImage
                src={room.src}
                alt={room.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-108"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              
                {room.tag &&
              <div className="absolute top-4 left-4 z-10">
                    <span
                  className="px-3 py-1 text-xs uppercase tracking-widest font-medium"
                  style={{
                    background: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    borderRadius: '2px',
                    fontSize: '9px'
                  }}>
                  
                      {room.tag}
                    </span>
                  </div>
              }
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-muted-foreground uppercase tracking-widest mb-1" style={{ fontSize: '9px' }}>
                      {room.type}
                    </p>
                    <h3 className="font-display text-foreground text-xl" style={{ fontWeight: 300, fontStyle: 'italic' }}>
                      {room.name}
                    </h3>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <span className="font-display text-foreground text-xl" style={{ fontWeight: 300 }}>
                      ${room.price.toLocaleString()}
                    </span>
                    <p className="text-muted-foreground" style={{ fontSize: '9px' }}>/ night</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {room.desc}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" />
                    </svg>
                    {room.size}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" />
                    </svg>
                    {room.capacity} guests
                  </span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {room.amenities.slice(0, 4).map((a) =>
                <span
                  key={a}
                  className="px-2 py-1 text-muted-foreground"
                  style={{
                    background: 'rgba(212,137,74,0.07)',
                    border: '1px solid rgba(212,137,74,0.12)',
                    borderRadius: '2px',
                    fontSize: '10px'
                  }}>
                  
                      {a}
                    </span>
                )}
                  {room.amenities.length > 4 &&
                <span
                  className="px-2 py-1 text-muted-foreground"
                  style={{
                    background: 'rgba(212,137,74,0.07)',
                    border: '1px solid rgba(212,137,74,0.12)',
                    borderRadius: '2px',
                    fontSize: '10px'
                  }}>
                  
                      +{room.amenities.length - 4} more
                    </span>
                }
                </div>

                <button
                onClick={() => setSelectedRoom(room)}
                className="w-full py-3 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, var(--sunset-deep) 0%, var(--primary) 100%)',
                  color: 'var(--primary-foreground)',
                  borderRadius: '2px'
                }}>
                
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedRoom &&
      <BookingModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      }
    </section>);

}