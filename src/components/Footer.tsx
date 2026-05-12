import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer
      className="relative border-t py-16 px-6"
      style={{ borderColor: 'rgba(212, 137, 74, 0.12)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left: Logo + tagline */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <AppLogo size={32} />
            <span
              className="font-display text-2xl text-foreground"
              style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              Aurelia
            </span>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Where the horizon meets luxury. North Malé Atoll, Maldives.
          </p>
        </div>

        {/* Right: Links */}
        <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm font-medium text-muted-foreground">
          <Link href="/" className="underline-hover hover:text-foreground transition-colors">Home</Link>
          <Link href="/rooms-suites" className="underline-hover hover:text-foreground transition-colors">Rooms</Link>
          <Link href="/gallery" className="underline-hover hover:text-foreground transition-colors">Gallery</Link>
          <a href="/#dining" className="underline-hover hover:text-foreground transition-colors">Dining</a>
          <a href="/#booking" className="underline-hover hover:text-foreground transition-colors">Book Now</a>
          <a href="#" className="underline-hover hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="underline-hover hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
      <div
        className="max-w-7xl mx-auto mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
        style={{ borderTop: '1px solid rgba(212, 137, 74, 0.08)' }}
      >
        <p className="text-muted-foreground text-xs uppercase tracking-widest">
          © 2026 Aurelia Resort. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Instagram', 'Twitter', 'Facebook']?.map((s) => (
            <a
              key={s}
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-xs uppercase tracking-wider"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}