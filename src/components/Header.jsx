'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import SofnestLogo from './SofnestLogo';
import { useModal } from '../context/ModalContext';

export default function Header({ onOpenSearch, onOpenNotify }) {
  const modalContext = useModal();
  const handleOpenSearch = onOpenSearch || modalContext.openSearch;
  const handleOpenNotify = onOpenNotify || modalContext.openNotify;

  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [headerTheme, setHeaderTheme] = useState({ bg: '#F6D7D4', mode: 'light' });
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Close menus on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileNavOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  const isHomePage = pathname === '/';
  const showLogo = !isHomePage || isScrolled || megaMenuOpen || mobileNavOpen;
  const isTransparentHeader = isHomePage && !isScrolled && !mobileNavOpen && !megaMenuOpen;

  // Transparent on Hero banner top, Clean Solid Warm White on Scroll, Menu open, & other pages
  const activeBg = isTransparentHeader ? 'transparent' : '#FFFFFF';
  const textColor = '#2A1A2C';
  const logoVariant = 'dark';

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} style={{
      position: isHomePage ? (!isScrolled ? 'absolute' : 'fixed') : 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: activeBg,
      borderBottom: isTransparentHeader ? 'none' : '1px solid rgba(138, 59, 82, 0.1)',
      boxShadow: isScrolled ? '0 4px 20px rgba(73, 53, 79, 0.08)' : 'none',
      transition: 'all 0.35s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px',
        position: 'relative'
      }}>
        {/* Brand Logo - Animated on Scroll for Homepage */}
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            opacity: showLogo ? 1 : 0,
            transform: showLogo ? 'translateY(0) scale(1)' : 'translateY(-12px) scale(0.85)',
            pointerEvents: showLogo ? 'auto' : 'none',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <SofnestLogo variant={logoVariant} height={42} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          {/* Products Mega Menu Trigger */}
          <div
            className="nav-item-has-menu"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
            style={{ position: 'relative', height: '76px', display: 'flex', alignItems: 'center' }}
          >
            <Link
              href="/products"
              className="nav-link-hover"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: '600',
                color: textColor,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.35rem 0',
                transition: 'color 0.3s ease'
              }}
            >
              Products <ChevronDown size={15} style={{ color: '#8A3B52', transform: megaMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </Link>

            {/* Mega Menu Dropdown */}
            {megaMenuOpen && (
              <div
                className="mega-menu"
                style={{
                  position: 'absolute',
                  top: '76px',
                  left: '-100px',
                  width: '780px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid rgba(138, 59, 82, 0.14)',
                  boxShadow: '0 20px 50px rgba(42, 26, 44, 0.16), 0 4px 12px rgba(138, 59, 82, 0.06)',
                  padding: '2rem 2.25rem',
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1.2fr 1.5fr',
                  gap: '2rem',
                  animation: 'fadeIn 0.2s ease-out',
                  zIndex: 101
                }}
              >
                {/* Column 1: Period Care (Contains Panty Liners, Sanitary Pads, Period Panties) */}
                <div>
                  <h4 style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold-accent)', marginBottom: '1.2rem' }}>
                    Period Care
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <Link href="/products/panty-liners" style={{ fontWeight: '700', color: 'var(--navy-deep)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}>
                      Panty Liners
                    </Link>
                    <Link href="/products/sanitary-pads" style={{ color: 'var(--navy-deep)', textDecoration: 'none', fontSize: '0.92rem', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      Sanitary Pads <span style={{ fontSize: '0.62rem', fontWeight: '700', padding: '0.15rem 0.5rem', borderRadius: '12px', backgroundColor: '#F7EBF0', color: 'var(--berry-deep)', letterSpacing: '0.04em' }}>SOON</span>
                    </Link>
                    <Link href="/products/period-panties" style={{ color: 'var(--navy-deep)', textDecoration: 'none', fontSize: '0.92rem', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      Period Panties <span style={{ fontSize: '0.62rem', fontWeight: '700', padding: '0.15rem 0.5rem', borderRadius: '12px', backgroundColor: '#F7EBF0', color: 'var(--berry-deep)', letterSpacing: '0.04em' }}>SOON</span>
                    </Link>
                    <button
                      onClick={() => handleOpenNotify('Sanitary Pads & Period Panties')}
                      style={{ marginTop: '0.3rem', background: 'none', border: 'none', textAlign: 'left', fontSize: '0.85rem', fontWeight: '600', color: 'var(--berry-deep)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: 0 }}
                    >
                      Explore upcoming care <ArrowRight size={13} />
                    </button>
                  </div>
                </div>

                {/* Column 2: Convenience Care */}
                <div>
                  <h4 style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold-accent)', marginBottom: '1.2rem' }}>
                    Convenience Care
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <Link href="/products/disposable-panties" style={{ color: 'var(--navy-deep)', textDecoration: 'none', fontSize: '0.92rem', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      Disposable Panties <span style={{ fontSize: '0.62rem', fontWeight: '700', padding: '0.15rem 0.5rem', borderRadius: '12px', backgroundColor: '#F7EBF0', color: 'var(--berry-deep)', letterSpacing: '0.04em' }}>SOON</span>
                    </Link>
                    <Link href="/products" style={{ marginTop: '0.8rem', fontSize: '0.85rem', fontWeight: '600', color: 'var(--berry-deep)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      Explore all products <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>

                {/* Column 3: Marketplaces */}
                <div style={{ paddingLeft: '0.2rem' }}>
                  <h4 style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold-accent)', marginBottom: '1.2rem' }}>
                    Marketplaces
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1.2rem', lineHeight: 1.5 }}>
                    Shop genuine Sofnest products directly on your preferred channel.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.85rem', flexWrap: 'nowrap' }}>
                    <a
                      href="https://www.amazon.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="marketplace-item-btn"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'transparent',
                        padding: '0.3rem 0',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        border: 'none',
                        flexShrink: 0
                      }}
                    >
                      <img src="/Marketplace%20icons/amazon-clean.png" alt="Amazon India" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
                    </a>

                    <a
                      href="https://www.flipkart.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="marketplace-item-btn"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'transparent',
                        padding: '0.3rem 0',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        border: 'none',
                        flexShrink: 0
                      }}
                    >
                      <img src="/Marketplace%20icons/flipkart-clean.png" alt="Flipkart" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
                    </a>

                    <a
                      href="https://www.meesho.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="marketplace-item-btn"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'transparent',
                        padding: '0.3rem 0',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        border: 'none',
                        flexShrink: 0
                      }}
                    >
                      <img src="/Marketplace%20icons/meesho-clean.png" alt="Meesho" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/why-sofnest"
            className="nav-link-hover"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: '600', color: textColor, transition: 'color 0.3s ease' }}
          >
            Why Sofnest
          </Link>

          <Link
            href="/care-guide"
            className="nav-link-hover"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: '600', color: textColor, transition: 'color 0.3s ease' }}
          >
            Care Guide
          </Link>

          <Link
            href="/our-story"
            className="nav-link-hover"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: '600', color: textColor, transition: 'color 0.3s ease' }}
          >
            Our Story
          </Link>
        </nav>

        {/* Header Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: textColor,
              cursor: 'pointer',
              padding: '0.5rem',
              transition: 'color 0.3s ease'
            }}
          >
            {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Clean Solid Background */}
      {mobileNavOpen && (
        <div className="mobile-nav-drawer" style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(138, 59, 82, 0.12)',
          boxShadow: '0 16px 40px rgba(42, 26, 44, 0.12)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
          maxHeight: '85vh',
          overflowY: 'auto',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          {/* Level 1: Products Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                background: 'none',
                border: 'none',
                fontWeight: '700',
                fontSize: '1.1rem',
                color: 'var(--navy-deep)',
                padding: '0.4rem 0',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span>Products</span>
              <ChevronDown
                size={18}
                style={{
                  transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease',
                  color: 'var(--gold-accent)'
                }}
              />
            </button>

            {/* Expanded Level 1 Items */}
            {mobileProductsOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '0.75rem', marginTop: '0.35rem', borderLeft: '2px solid rgba(201, 153, 82, 0.3)' }}>
                <Link href="/products" onClick={() => setMobileNavOpen(false)} style={{ fontWeight: '600', fontSize: '0.92rem', color: 'var(--navy-deep)', textDecoration: 'none' }}>
                  All Products Overview
                </Link>

                <Link
                  href="/products/panty-liners"
                  onClick={() => setMobileNavOpen(false)}
                  style={{
                    fontWeight: '600',
                    fontSize: '0.92rem',
                    color: 'var(--navy-deep)',
                    textDecoration: 'none'
                  }}
                >
                  Panty Liners
                </Link>

                <Link href="/products/sanitary-pads" onClick={() => setMobileNavOpen(false)} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  Sanitary Pads <span style={{ fontSize: '0.6rem', fontWeight: '700', padding: '0.1rem 0.4rem', borderRadius: '10px', backgroundColor: '#F7EBF0', color: 'var(--berry-deep)' }}>SOON</span>
                </Link>

                <Link href="/products/period-panties" onClick={() => setMobileNavOpen(false)} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  Period Panties <span style={{ fontSize: '0.6rem', fontWeight: '700', padding: '0.1rem 0.4rem', borderRadius: '10px', backgroundColor: '#F7EBF0', color: 'var(--berry-deep)' }}>SOON</span>
                </Link>

                <Link href="/products/disposable-panties" onClick={() => setMobileNavOpen(false)} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  Disposable Panties <span style={{ fontSize: '0.6rem', fontWeight: '700', padding: '0.1rem 0.4rem', borderRadius: '10px', backgroundColor: '#F7EBF0', color: 'var(--berry-deep)' }}>SOON</span>
                </Link>
              </div>
            )}
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(41, 49, 91, 0.15)', margin: '0.25rem 0' }} />
          <Link href="/why-sofnest" onClick={() => setMobileNavOpen(false)} style={{ fontWeight: '600', color: 'var(--navy-deep)', textDecoration: 'none' }}>Why Sofnest</Link>
          <Link href="/care-guide" onClick={() => setMobileNavOpen(false)} style={{ fontWeight: '600', color: 'var(--navy-deep)', textDecoration: 'none' }}>Care Guide</Link>
          <Link href="/our-story" onClick={() => setMobileNavOpen(false)} style={{ fontWeight: '600', color: 'var(--navy-deep)', textDecoration: 'none' }}>Our Story</Link>
        </div>
      )}

      {/* Background Blur Overlay when Mega Menu is Open */}
      {megaMenuOpen && (
        <div
          onClick={() => setMegaMenuOpen(false)}
          style={{
            position: 'fixed',
            top: '76px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(41, 49, 91, 0.15)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 90,
            animation: 'fadeIn 0.2s ease-out'
          }}
        />
      )}

      <style>{`
        .desktop-nav a:hover {
          color: var(--color-dusty-rose) !important;
        }
        .mega-sublink:hover {
          color: var(--color-dusty-rose) !important;
          transform: translateX(4px);
        }
        .marketplace-item-btn:hover {
          background-color: transparent !important;
          transform: translateY(-2px) scale(1.06);
          opacity: 0.9;
        }
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-toggle { display: block !important; }
        }
        @media (max-width: 768px) {
          .header-wtb-btn {
            font-size: 0.72rem !important;
            padding: 0.45rem 0.8rem !important;
            white-space: nowrap !important;
            letter-spacing: 0.02em !important;
          }
        }
      `}</style>
    </header>
  );
}
