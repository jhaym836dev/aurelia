import React from 'react';

const amenities = [
  {
    icon: '🌊',
    title: 'Private Ocean Access',
    desc: 'Every accommodation includes direct or private beach/lagoon access.',
  },
  {
    icon: '🛁',
    title: 'Outdoor Bathtubs',
    desc: 'Open-air soaking tubs with ocean views in all premium rooms.',
  },
  {
    icon: '🍽️',
    title: 'In-Villa Dining',
    desc: '24-hour in-villa dining from all three of Aurelia\'s restaurants.',
  },
  {
    icon: '🧖',
    title: 'Spa Treatments',
    desc: 'In-room spa services available from 7am to 11pm daily.',
  },
  {
    icon: '🤿',
    title: 'Watersports Included',
    desc: 'Snorkeling, kayaking, and paddleboarding included in every stay.',
  },
  {
    icon: '🌅',
    title: 'Sunrise Butler Service',
    desc: 'Wake to fresh fruit, coffee, and your personalized daily itinerary.',
  },
];

export default function AmenitiesSection() {
  return (
    <section
      className="py-20 px-6 relative"
      style={{ background: 'rgba(26,18,8,0.4)', borderTop: '1px solid rgba(212,137,74,0.1)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="reveal-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: 'var(--primary)' }} />
              <span className="text-primary uppercase tracking-widest" style={{ fontSize: '10px', fontWeight: 600 }}>
                Included in Every Stay
              </span>
            </div>
            <h2 className="section-title font-display text-foreground" style={{ fontWeight: 300 }}>
              Resort <span className="italic" style={{ color: 'var(--accent)' }}>Amenities</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs reveal-on-scroll stagger-2">
            Every detail considered. Every comfort included. Every moment extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities?.map((item, i) => (
            <div
              key={item?.title}
              className="reveal-on-scroll p-7 rounded-2xl group transition-all duration-500"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <span className="text-3xl block mb-4">{item?.icon}</span>
              <h3 className="text-foreground font-medium mb-2 text-base">{item?.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}