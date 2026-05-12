'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Rooms & Suites', href: '/rooms-suites' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Dining', href: '/#dining' },
  { label: 'Book Now', href: '/#booking' },
];

const menuLinks = [
  { label: 'Home', href: '/', number: '01' },
  { label: 'Rooms & Suites', href: '/rooms-suites', number: '02' },
  { label: 'Gallery', href: '/gallery', number: '03' },
  { label: 'Dining', href: '/#dining', number: '04' },
  { label: 'Book Now', href: '/#booking', number: '05' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      setAnimating(true);
      setClosing(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
      setAnimating(false);
    }, 600);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        style={{
          background: scrolled
            ? 'rgba(13, 10, 7, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212, 137, 74, 0.1)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <AppLogo size={36} />
            <span
              className="font-display text-2xl tracking-tight text-foreground"
              style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              Aurelia
            </span>
          </Link>

          <button
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
            className="relative z-[60] flex flex-col gap-1.5 p-2 group"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className="block h-px w-8 bg-foreground transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
                backgroundColor: menuOpen ? 'var(--primary)' : 'var(--foreground)',
              }}
            />
            <span
              className="block h-px bg-foreground transition-all duration-300"
              style={{
                width: menuOpen ? '0' : '24px',
                marginLeft: menuOpen ? '0' : '8px',
                opacity: menuOpen ? 0 : 1,
                backgroundColor: 'var(--foreground)',
              }}
            />
            <span
              className="block h-px w-8 bg-foreground transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
                backgroundColor: menuOpen ? 'var(--primary)' : 'var(--foreground)',
              }}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      {(menuOpen || closing) && (
        <div
          className={`fixed inset-0 z-40 ${closing ? 'menu-overlay-close' : 'menu-overlay-open'}`}
          style={{ background: 'var(--background)' }}
        >
          <div className="noise-overlay" />

          {/* Atmospheric blobs */}
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 blob-sunset pointer-events-none"
            style={{ animation: 'floatY 6s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 blob-gold pointer-events-none"
            style={{ animation: 'floatY 8s ease-in-out infinite reverse' }}
          />

          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 pt-24 pb-16">
            <nav className="space-y-2">
              {menuLinks.map((link, i) => (
                <div
                  key={link.href}
                  className="flex items-baseline gap-6 group"
                  style={{
                    animation: animating && !closing
                      ? `fadeInUp 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 80 + 100}ms forwards`
                      : 'none',
                    opacity: animating && !closing ? 0 : 1,
                  }}
                >
                  <span
                    className="text-muted-foreground font-mono"
                    style={{ fontSize: '11px', letterSpacing: '0.2em' }}
                  >
                    {link.number}
                  </span>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="overlay-menu-link"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>

            <div
              className="mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12"
              style={{
                borderTop: '1px solid rgba(212, 137, 74, 0.15)',
                animation: animating && !closing
                  ? `fadeInUp 0.6s cubic-bezier(0.4,0,0.2,1) 500ms forwards`
                  : 'none',
                opacity: animating && !closing ? 0 : 1,
              }}
            >
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Location</p>
                <p className="text-foreground text-sm">North Malé Atoll, Maldives</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Reservations</p>
                <p className="text-foreground text-sm">+960 400 8800</p>
              </div>
              <div className="sm:ml-auto flex gap-6">
                {['Instagram', 'Twitter', 'Facebook'].map((s) => (
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
          </div>
        </div>
      )}
    </>
  );
}