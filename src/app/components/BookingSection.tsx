'use client';

import React, { useState } from 'react';

export default function BookingSection() {
  const [guests, setGuests] = useState(2);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden" id="booking">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #1A0D05 0%, #2E1208 40%, #1A1208 100%)',
          }}
        />
        <div className="grid-dot-bg absolute inset-0 opacity-40" />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 blob-sunset pointer-events-none"
          style={{ animation: 'floatY 8s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 blob-gold pointer-events-none"
          style={{ animation: 'floatY 6s ease-in-out infinite reverse' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal-on-scroll">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ backgroundColor: 'var(--primary)' }} />
            <span className="text-primary uppercase tracking-widest" style={{ fontSize: '10px', fontWeight: 600 }}>
              Reservations
            </span>
            <div className="w-8 h-px" style={{ backgroundColor: 'var(--primary)' }} />
          </div>
          <h2 className="section-title font-display text-foreground mb-4" style={{ fontWeight: 300 }}>
            Begin Your <span className="italic" style={{ color: 'var(--accent)' }}>Journey</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
            Reserve your sanctuary. Our concierge team will curate every detail of your stay.
          </p>
        </div>

        {/* Booking form */}
        <div
          className="reveal-on-scroll glass-card rounded-2xl p-8 md:p-12"
          style={{ border: '1px solid rgba(212,137,74,0.15)' }}
        >
          {submitted ? (
            <div className="text-center py-12" style={{ animation: 'scaleIn 0.4s ease-out forwards' }}>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(212,137,74,0.15)', animation: 'pulseGlow 2s ease-in-out infinite' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display text-foreground text-2xl mb-3" style={{ fontStyle: 'italic', fontWeight: 300 }}>
                Request Received
              </h3>
              <p className="text-muted-foreground text-sm">
                Our concierge team will contact you within 2 hours to confirm your reservation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Row 1: Dates */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <label className="block text-muted-foreground uppercase tracking-widest mb-3" style={{ fontSize: '9px', fontWeight: 600 }}>
                    Check-In
                  </label>
                  <input
                    type="date"
                    className="booking-input"
                    required
                  />
                </div>
                <div>
                  <label className="block text-muted-foreground uppercase tracking-widest mb-3" style={{ fontSize: '9px', fontWeight: 600 }}>
                    Check-Out
                  </label>
                  <input
                    type="date"
                    className="booking-input"
                    required
                  />
                </div>
                <div>
                  <label className="block text-muted-foreground uppercase tracking-widest mb-3" style={{ fontSize: '9px', fontWeight: 600 }}>
                    Room Type
                  </label>
                  <select className="booking-input">
                    <option value="">Select Room</option>
                    <option value="ocean">Ocean Suite</option>
                    <option value="beach">Beach Villa</option>
                    <option value="penthouse">Penthouse Suite</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Guests + Personal info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <label className="block text-muted-foreground uppercase tracking-widest mb-3" style={{ fontSize: '9px', fontWeight: 600 }}>
                    Guests
                  </label>
                  <div className="flex items-center gap-4 border-b pb-3" style={{ borderColor: 'rgba(212,137,74,0.3)' }}>
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-foreground transition-colors hover:text-primary"
                      style={{ border: '1px solid rgba(212,137,74,0.3)' }}
                    >
                      −
                    </button>
                    <span className="text-foreground font-medium flex-1 text-center">{guests}</span>
                    <button
                      type="button"
                      onClick={() => setGuests(Math.min(8, guests + 1))}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-foreground transition-colors hover:text-primary"
                      style={{ border: '1px solid rgba(212,137,74,0.3)' }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-muted-foreground uppercase tracking-widest mb-3" style={{ fontSize: '9px', fontWeight: 600 }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="booking-input"
                    required
                  />
                </div>
                <div>
                  <label className="block text-muted-foreground uppercase tracking-widest mb-3" style={{ fontSize: '9px', fontWeight: 600 }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="booking-input"
                    required
                  />
                </div>
              </div>

              {/* Special requests */}
              <div>
                <label className="block text-muted-foreground uppercase tracking-widest mb-3" style={{ fontSize: '9px', fontWeight: 600 }}>
                  Special Requests
                </label>
                <textarea
                  placeholder="Honeymoon setup, dietary requirements, arrival time..."
                  rows={3}
                  className="booking-input resize-none"
                  style={{ borderBottom: '1px solid rgba(212,137,74,0.3)', paddingBottom: '8px' }}
                />
              </div>

              {/* Submit */}
              <div
                className="flex flex-col md:flex-row items-center justify-between gap-5 pt-6"
                style={{ borderTop: '1px solid rgba(212,137,74,0.1)' }}
              >
                <p className="text-muted-foreground max-w-xs leading-relaxed" style={{ fontSize: '11px' }}>
                  No payment required. Our concierge team will contact you within 2 hours to confirm your stay.
                </p>
                <button
                  type="submit"
                  className="group flex items-center gap-3 px-10 py-4 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:opacity-90 w-full md:w-auto justify-center"
                  style={{
                    background: 'linear-gradient(135deg, var(--sunset-deep) 0%, var(--primary) 50%, var(--accent) 100%)',
                    color: 'var(--primary-foreground)',
                    borderRadius: '2px',
                  }}
                >
                  Request Reservation
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Concierge note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 reveal-on-scroll">
          {[
            { icon: '📞', label: 'Reservations', value: '+960 400 8800' },
            { icon: '✉️', label: 'Email', value: 'stay@aurelia.mv' },
            { icon: '⏰', label: 'Concierge', value: '24/7 Available' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 text-center">
              <span style={{ fontSize: '18px' }}>{item.icon}</span>
              <div className="text-left">
                <p className="text-muted-foreground uppercase tracking-widest" style={{ fontSize: '9px' }}>{item.label}</p>
                <p className="text-foreground text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}