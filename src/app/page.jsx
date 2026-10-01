'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { CottonFluffIcon } from '../components/CottonElements';
import SEO from '../components/SEO';
import { useModal } from '../context/ModalContext';

export default function HomePage({ onOpenNotify }) {
  const modalContext = useModal();
  const handleOpenNotify = onOpenNotify || modalContext.openNotify;

  const homeSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Sofnest",
      "alternateName": "Sofnest Care",
      "url": "https://sofnest.in",
      "logo": "https://sofnest.in/Pentyliner%20icons/pentyliner.png",
      "description": "Sofnest provides thoughtful women's care designed for everyday freshness, period days, and every moment in between.",
      "sameAs": [
        "https://www.amazon.in",
        "https://www.flipkart.com",
        "https://www.meesho.com"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Sofnest",
      "url": "https://sofnest.in"
    }
  ];

  return (
    <div className="homepage">
      <SEO
        title="Sofnest | Daily Panty Liners & Thoughtful Women's Hygiene Care"
        description="Discover Sofnest Panty Liners in 155mm Regular & 180mm Long sizes. Cottony-soft, ultra-thin, breathable daily freshness for everyday discharge, light spotting, and period backup."
        canonical="/"
        schema={homeSchemas}
      />
      {/* =========================================================================
          HERO SECTION (Full-Bleed Design with Hero image.png Background)
          Master Brand Promise: "A softer way to care for you."
         ========================================================================= */}
      <section className="homepage-hero-banner" data-header-bg="#FAF0F3" data-header-theme="light" style={{
        width: '100%',
        backgroundColor: '#FAF0F3',
        position: 'relative',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Desktop Hero Image Banner - 100% Exact Full Viewport (No Side Space, No Bottom Cut) */}
        <div className="hero-desktop-wrapper" style={{ width: '100%', height: '100%', margin: 0, padding: 0 }}>
          <img
            src="/image.png"
            alt="Sofnest - A softer way to care for you"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'fill',
              display: 'block',
              margin: 0,
              padding: 0
            }}
          />
        </div>

        {/* Mobile Dedicated Hero Image Banner - 100% Full Width No Cropping */}
        <div className="hero-mobile-wrapper" style={{ width: '100%', margin: 0, padding: 0 }}>
          <img
            src="/image%20copy%203.png"
            alt="Sofnest - A softer way to care for you (Mobile)"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: 0,
              padding: 0
            }}
          />
        </div>

        <style>{`
          .homepage-hero-banner {
            width: 100% !important;
            height: 100vh !important;
            min-height: 100vh !important;
            max-height: 100vh !important;
            background-color: #FAF0F3 !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            display: flex !important;
          }
          .hero-desktop-wrapper { 
            display: flex !important; 
            width: 100% !important; 
            height: 100% !important; 
            margin: 0 !important; 
            padding: 0 !important; 
          }
          .hero-desktop-wrapper img {
            width: 100% !important;
            height: 100% !important;
            object-fit: fill !important;
            display: block !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .hero-mobile-wrapper { display: none !important; width: 100% !important; height: 100% !important; margin: 0 !important; padding: 0 !important; }

          @media (max-width: 768px) {
            .homepage-hero-banner {
              min-height: 100dvh !important;
              height: 100dvh !important;
              max-height: 100dvh !important;
              background-color: #FAF0F3 !important;
              display: flex !important;
              margin: 0 !important;
              padding: 0 !important;
              overflow: hidden !important;
            }
            .hero-desktop-wrapper { display: none !important; }
            .hero-mobile-wrapper { 
              display: flex !important; 
              width: 100% !important;
              height: 100% !important;
              min-height: 100dvh !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            .hero-mobile-wrapper img {
              width: 100% !important;
              height: 100% !important;
              object-fit: fill !important;
              display: block !important;
              margin: 0 !important;
              padding: 0 !important;
            }
          }
        `}</style>
      </section>

      {/* =========================================================================
          SHOP BY CATEGORY (Blueprint Page 7 - Section 05)
          4 Categories: Panty Liners, Sanitary Pads, Period Panties, Disposable Panties
         ========================================================================= */}
      <section className="section-padding" data-header-bg="#F5E2E6" data-header-theme="light" style={{ backgroundColor: 'var(--color-soft-blush)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: 'var(--color-dusty-rose)' }}>PORTFOLIO DISCOVERY</span>
            <h2 style={{ color: 'var(--color-deep-plum)' }}>Shop by Category</h2>
            <p className="section-subtitle" style={{ color: 'var(--color-deep-plum)' }}>
              A growing family of personal care essentials designed around comfort and real-life routines.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Category 1: Panty Liners */}
            <div className="card" style={{ backgroundColor: 'var(--color-warm-ivory)', border: '1.5px solid var(--color-muted-gold)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span className="badge badge-available">AVAILABLE NOW</span>
                <img src="/Pentyliner%20icons/pentyliner.png" alt="Panty Liners Icon" style={{ width: '86px', height: '86px', objectFit: 'contain', margin: '-11px -8px -11px 0' }} />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--color-sofnest-navy)' }}>
                Panty Liners
              </h3>
              <p style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-dusty-rose)', marginBottom: '0.75rem' }}>
                EVERYDAY FRESHNESS
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Light, discreet care for daily discharge, light spotting and lighter days around your period.
              </p>
              <Link href="/products/panty-liners" className="btn btn-primary" style={{ width: '100%', fontSize: '0.85rem', marginTop: 'auto' }}>
                SHOP NOW →
              </Link>
            </div>

            {/* Category 2: Sanitary Pads */}
            <div className="card" style={{ backgroundColor: 'var(--color-warm-ivory)', border: '1px solid rgba(201, 165, 106, 0.4)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span className="badge badge-coming">COMING SOON</span>
                <img src="/Sanitary%20pads%20icons/sanitary-pad.png" alt="Sanitary Pads Icon" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--color-sofnest-navy)' }}>
                Sanitary Pads
              </h3>
              <p style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-muted-gold)', marginBottom: '0.75rem' }}>
                PERIOD CARE
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Thoughtful cotton-soft comfort and protection for period days.
              </p>
              <button onClick={() => handleOpenNotify('Sanitary Pads')} className="btn btn-outline" style={{ width: '100%', fontSize: '0.85rem', marginTop: 'auto' }}>
                NOTIFY ME →
              </button>
            </div>

            {/* Category 3: Period Panties */}
            <div className="card" style={{ backgroundColor: 'var(--color-warm-ivory)', border: '1px solid rgba(169, 120, 135, 0.4)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span className="badge badge-coming">COMING SOON</span>
                <img src="/Period%20penties%20icons/period%20penties.png" alt="Period Panties Icon" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--color-sofnest-navy)' }}>
                Period Panties
              </h3>
              <p style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-dusty-rose)', marginBottom: '0.75rem' }}>
                WEARABLE PROTECTION
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Comfortable protective wear designed for period-day needs and additional peace of mind.
              </p>
              <button onClick={() => handleOpenNotify('Period Panties')} className="btn btn-outline" style={{ width: '100%', fontSize: '0.85rem', marginTop: 'auto' }}>
                NOTIFY ME →
              </button>
            </div>

            {/* Category 4: Disposable Panties */}
            <div className="card" style={{ backgroundColor: 'var(--color-warm-ivory)', border: '1px solid rgba(73, 53, 79, 0.25)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span className="badge badge-coming">COMING SOON</span>
                <img src="/Disposable%20panti%20icons/disposible%20penties.png" alt="Disposable Panties Icon" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--color-sofnest-navy)' }}>
                Disposable Panties
              </h3>
              <p style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-deep-plum)', marginBottom: '0.75rem' }}>
                CONVENIENCE CARE
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                A simple, convenient personal-care category for travel, hospital days and moments when ease matters.
              </p>
              <button onClick={() => handleOpenNotify('Disposable Panties')} className="btn btn-outline" style={{ width: '100%', fontSize: '0.85rem', marginTop: 'auto' }}>
                NOTIFY ME →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BRAND BELIEF (Blueprint Page 7 - Section 05)
          "Little Care. Brighter Days."
         ========================================================================= */}
      <section className="section-padding" data-header-bg="#FFFFFF" data-header-theme="light" style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid rgba(138, 59, 82, 0.12)',
        borderBottom: '1px solid rgba(138, 59, 82, 0.12)',
        position: 'relative'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <CottonFluffIcon size={44} color="#C9A56A" />
          </div>
          <span className="section-tag" style={{ color: '#8A3B52', fontWeight: '800', letterSpacing: '0.12em' }}>BRAND PHILOSOPHY</span>
          <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', marginBottom: '1.25rem', color: '#2A1A2C', fontFamily: 'var(--font-heading)', marginTop: '0.35rem' }}>
            Little Care. Brighter Days.
          </h2>
          <p style={{ fontSize: '1.12rem', color: '#554257', lineHeight: 1.75, marginBottom: '2rem' }}>
            We believe women's care is made up of more than just period days. It's in the everyday moments too — when you want to feel fresh, comfortable, prepared and simply more at ease. Sofnest is creating thoughtful essentials designed to make those little moments feel softer.
          </p>
          <Link
            href="/why-sofnest"
            style={{
              background: 'linear-gradient(135deg, #8A3B52 0%, #6E263B 100%)',
              color: '#FFFFFF',
              fontSize: '0.9rem',
              padding: '0.8rem 2rem',
              borderRadius: '9999px',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              textDecoration: 'none',
              boxShadow: '0 6px 18px rgba(138, 59, 82, 0.25)'
            }}
          >
            DISCOVER OUR PHILOSOPHY <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          THE SOFNEST DIFFERENCE (Blueprint Page 8 - Section 05)
         ========================================================================= */}
      <section
        className="section-padding"
        data-header-bg="#FAF0F3"
        data-header-theme="light"
        style={{
          backgroundColor: '#FAF0F3',
          color: '#2A1A2C',
          borderBottom: '1px solid rgba(138, 59, 82, 0.12)'
        }}
      >
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-tag" style={{ color: '#8A3B52', fontWeight: '800', letterSpacing: '0.12em' }}>OUR PILLARS</span>
            <h2 style={{ color: '#2A1A2C', fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginTop: '0.35rem' }}>
              The Sofnest Difference
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '1.25rem'
          }}>
            <div style={{
              padding: '1.75rem 1.4rem',
              backgroundColor: '#FFFFFF',
              borderRadius: '18px',
              border: '1px solid rgba(229, 213, 219, 0.9)',
              boxShadow: '0 6px 20px rgba(73, 53, 79, 0.04)',
              transition: 'all 0.25s ease'
            }}>
              <h3 style={{ color: '#2A1A2C', fontSize: '1.18rem', marginBottom: '0.5rem', fontWeight: '700' }}>Soft at Heart</h3>
              <p style={{ color: '#665569', fontSize: '0.88rem', lineHeight: 1.55, margin: 0 }}>
                Comfort is at the centre of everything we create. Designed for gentle everyday skin contact.
              </p>
            </div>

            <div style={{
              padding: '1.75rem 1.4rem',
              backgroundColor: '#FFFFFF',
              borderRadius: '18px',
              border: '1px solid rgba(229, 213, 219, 0.9)',
              boxShadow: '0 6px 20px rgba(73, 53, 79, 0.04)',
              transition: 'all 0.25s ease'
            }}>
              <h3 style={{ color: '#2A1A2C', fontSize: '1.18rem', marginBottom: '0.5rem', fontWeight: '700' }}>Made for Real Life</h3>
              <p style={{ color: '#665569', fontSize: '0.88rem', lineHeight: 1.55, margin: 0 }}>
                Care designed around everyday routines, work, travel, and real women's moments.
              </p>
            </div>

            <div style={{
              padding: '1.75rem 1.4rem',
              backgroundColor: '#FFFFFF',
              borderRadius: '18px',
              border: '1px solid rgba(229, 213, 219, 0.9)',
              boxShadow: '0 6px 20px rgba(73, 53, 79, 0.04)',
              transition: 'all 0.25s ease'
            }}>
              <h3 style={{ color: '#2A1A2C', fontSize: '1.18rem', marginBottom: '0.5rem', fontWeight: '700' }}>Simple by Design</h3>
              <p style={{ color: '#665569', fontSize: '0.88rem', lineHeight: 1.55, margin: 0 }}>
                Easy-to-understand essentials without unnecessary complexity or exaggerated promises.
              </p>
            </div>

            <div style={{
              padding: '1.75rem 1.4rem',
              backgroundColor: '#FFFFFF',
              borderRadius: '18px',
              border: '1px solid rgba(229, 213, 219, 0.9)',
              boxShadow: '0 6px 20px rgba(73, 53, 79, 0.04)',
              transition: 'all 0.25s ease'
            }}>
              <h3 style={{ color: '#2A1A2C', fontSize: '1.18rem', marginBottom: '0.5rem', fontWeight: '700' }}>Growing with You</h3>
              <p style={{ color: '#665569', fontSize: '0.88rem', lineHeight: 1.55, margin: 0 }}>
                From everyday freshness to period care and beyond, expanding with your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ONLINE MARKETPLACES SECTION (Amazon, Flipkart, Meesho)
         ========================================================================= */}
      <section
        data-header-bg="#FFF9F5"
        data-header-theme="light"
        className="section-padding"
        style={{
          backgroundColor: '#FFF9F5',
          color: '#2A1A2C',
          textAlign: 'center',
          padding: '4rem 1rem 4.5rem'
        }}
      >
        <div className="container" style={{ maxWidth: '720px' }}>
          <span className="section-tag" style={{ color: '#8A3B52', fontWeight: '800', letterSpacing: '0.12em' }}>ONLINE MARKETPLACES</span>
          <h2 style={{ color: '#2A1A2C', marginBottom: '0.5rem', fontSize: '2.35rem', fontFamily: 'var(--font-heading)', marginTop: '0.35rem' }}>
            Available Online Across India
          </h2>
          <p style={{ color: '#554257', marginBottom: '2.25rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Order Sofnest panty liners with fast, discreet shipping directly on your favorite trusted shopping platform.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            {/* Amazon */}
            <a
              href="https://www.amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              className="marketplace-home-pill"
              aria-label="Buy on Amazon"
            >
              <img src="/Marketplace%20icons/amazon-clean.png" alt="Amazon India" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
            </a>

            {/* Flipkart */}
            <a
              href="https://www.flipkart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="marketplace-home-pill"
              aria-label="Buy on Flipkart"
            >
              <img src="/Marketplace%20icons/flipkart-clean.png" alt="Flipkart" style={{ height: '34px', width: 'auto', objectFit: 'contain' }} />
            </a>

            {/* Meesho */}
            <a
              href="https://www.meesho.com"
              target="_blank"
              rel="noopener noreferrer"
              className="marketplace-home-pill"
              aria-label="Buy on Meesho"
            >
              <img src="/Marketplace%20icons/meesho-clean.png" alt="Meesho" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
            </a>
          </div>

          <style>{`
            .marketplace-home-pill {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              padding: 0.85rem 2.4rem;
              background-color: #FFFFFF;
              border-radius: 50px;
              border: 1.5px solid #EAE0E4;
              box-shadow: 0 4px 15px rgba(73, 53, 79, 0.07);
              text-decoration: none;
              transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .marketplace-home-pill:hover {
              transform: translateY(-5px) scale(1.04);
              box-shadow: 0 14px 28px rgba(138, 59, 82, 0.16), 0 3px 8px rgba(73, 53, 79, 0.06);
              border-color: #8A3B52;
              background-color: #FFFDFE;
            }
            .marketplace-home-pill:active {
              transform: translateY(-2px) scale(1.01);
            }
          `}</style>
        </div>
      </section>
    </div>
  );
}

