import React from 'react';

const stats = [
  { value: '24', unit: 'yrs', label: 'Years of Excellence' },
  { value: '87', unit: '+', label: 'Private Villas & Suites' },
  { value: '4.98', unit: '★', label: 'Guest Satisfaction' },
  { value: '12', unit: '+', label: 'Awards Won' },
];

export default function StatsSection() {
  return (
    <section
      className="relative py-20 px-6 border-y"
      style={{ borderColor: 'rgba(212,137,74,0.1)', background: 'rgba(26,18,8,0.5)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
          {stats?.map((stat, i) => (
            <div
              key={stat?.label}
              className={`reveal-on-scroll stagger-${i + 1} text-center md:text-left ${
                i < 3 ? 'md:border-r' : ''
              } px-6 md:px-10`}
              style={{ borderColor: 'rgba(212,137,74,0.1)' }}
            >
              <div className="flex items-baseline gap-1 justify-center md:justify-start mb-2">
                <span
                  className="font-display text-foreground"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.03em' }}
                >
                  {stat?.value}
                </span>
                <span className="text-primary text-xl font-medium">{stat?.unit}</span>
              </div>
              <p className="text-muted-foreground uppercase tracking-widest" style={{ fontSize: '10px', fontWeight: 500 }}>
                {stat?.label}
              </p>
            </div>
          ))}
        </div>

        {/* Brand statement */}
        <div
          className="mt-16 pt-12 reveal-on-scroll"
          style={{ borderTop: '1px solid rgba(212,137,74,0.1)' }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px" style={{ backgroundColor: 'var(--primary)' }} />
              <span className="text-primary uppercase tracking-widest" style={{ fontSize: '10px', fontWeight: 600 }}>
                Our Philosophy
              </span>
            </div>
            <p
              className="font-display text-foreground italic max-w-2xl leading-relaxed"
              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 300 }}
            >
              "Luxury is not about what you have — it is about what you feel. At Aurelia, every sunrise is a ceremony."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}