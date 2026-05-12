'use client';

import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Room {
  id: number;
  name: string;
  type: string;
  size: string;
  price: number;
  src: string;
  alt: string;
}

interface BookingModalProps {
  room: Room;
  onClose: () => void;
}

export default function BookingModal({ room, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [guests, setGuests] = useState(2);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(13,10,7,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{
          background: 'var(--card)',
          border: '1px solid rgba(212,137,74,0.2)',
          animation: 'scaleIn 0.35s cubic-bezier(0.4,0,0.2,1) forwards',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:text-primary"
          style={{ background: 'rgba(212,137,74,0.1)', color: 'var(--muted-foreground)' }}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Room preview */}
        <div className="relative overflow-hidden rounded-t-2xl" style={{ height: '200px' }}>
          <AppImage src={room.src} alt={room.alt} fill className="object-cover" sizes="672px" />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(13,10,7,0.8) 0%, transparent 60%)' }}
          />
          <div className="absolute bottom-5 left-6 z-10">
            <h3 className="font-display text-foreground text-2xl" style={{ fontWeight: 300, fontStyle: 'italic' }}>
              {room.name}
            </h3>
            <p className="text-muted-foreground text-xs uppercase tracking-widest">
              {room.type} · {room.size} · from ${room.price}/night
            </p>
          </div>
        </div>

        <div className="p-7">
          {submitted ? (
            <div className="text-center py-10" style={{ animation: 'scaleIn 0.4s ease-out forwards' }}>
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: 'rgba(212,137,74,0.15)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="font-display text-foreground text-xl mb-2" style={{ fontStyle: 'italic', fontWeight: 300 }}>
                Booking Request Sent
              </h4>
              <p className="text-muted-foreground text-sm mb-6">
                Our concierge team will confirm your {room.name} booking within 2 hours.
              </p>
              <button
                onClick={onClose}
                className="px-8 py-3 text-xs uppercase tracking-widest font-medium transition-all hover:opacity-80"
                style={{ background: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: '2px' }}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h4 className="text-foreground font-medium mb-2">Reservation Details</h4>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-muted-foreground uppercase tracking-widest mb-2" style={{ fontSize: '9px' }}>Check-In</label>
                  <input type="date" required className="booking-input" />
                </div>
                <div>
                  <label className="block text-muted-foreground uppercase tracking-widest mb-2" style={{ fontSize: '9px' }}>Check-Out</label>
                  <input type="date" required className="booking-input" />
                </div>
              </div>

              <div>
                <label className="block text-muted-foreground uppercase tracking-widest mb-2" style={{ fontSize: '9px' }}>Guests</label>
                <div className="flex items-center gap-4 border-b pb-3" style={{ borderColor: 'rgba(212,137,74,0.3)' }}>
                  <button
                    type="button"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:text-primary"
                    style={{ border: '1px solid rgba(212,137,74,0.3)', color: 'var(--foreground)' }}
                  >−</button>
                  <span className="text-foreground font-medium w-8 text-center">{guests}</span>
                  <button
                    type="button"
                    onClick={() => setGuests(Math.min(8, guests + 1))}
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:text-primary"
                    style={{ border: '1px solid rgba(212,137,74,0.3)', color: 'var(--foreground)' }}
                  >+</button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-muted-foreground uppercase tracking-widest mb-2" style={{ fontSize: '9px' }}>Full Name</label>
                  <input type="text" placeholder="Your name" required className="booking-input" />
                </div>
                <div>
                  <label className="block text-muted-foreground uppercase tracking-widest mb-2" style={{ fontSize: '9px' }}>Email</label>
                  <input type="email" placeholder="your@email.com" required className="booking-input" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, var(--sunset-deep) 0%, var(--primary) 100%)',
                  color: 'var(--primary-foreground)',
                  borderRadius: '2px',
                }}
              >
                Confirm Booking Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}