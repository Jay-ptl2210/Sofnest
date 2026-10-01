'use client';

import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { useModal } from '../../context/ModalContext';

export default function ProductsPage({ onOpenNotify }) {
  const modalContext = useModal();
  const handleOpenNotify = onOpenNotify || modalContext.openNotify;

  const productsPageSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Sofnest Products Range",
      "description": "Browse Sofnest range of thoughtful women's hygiene essentials: Panty Liners, Sanitary Pads, Period Panties, and Disposable Panties.",
      "url": "https://sofnest.in/products"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sofnest.in" },
        { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://sofnest.in/products" }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-page)', minHeight: '80vh' }}>
      <SEO 
        title="Women's Intimate Hygiene & Care Products Range"
        description="Explore the full range of Sofnest women's care essentials: daily panty liners (155mm & 180mm), organic cotton sanitary pads, period underwear, and disposable panties."
        canonical="/products"
        keywords="women hygiene products, panty liners, sanitary pads, period panties, disposable panties, feminine care range india"
        schema={productsPageSchemas}
      />
      {/* Hero Section (Blueprint Section 07) */}
      <section 
        data-header-bg="#FAF0F3" 
        data-header-theme="light" 
        style={{ 
          backgroundColor: '#FAF0F3', 
          color: '#2A1A2C', 
          padding: '3.75rem 1rem 3.5rem 1rem', 
          textAlign: 'center',
          borderBottom: '1px solid rgba(138, 59, 82, 0.12)'
        }}
      >
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(138, 59, 82, 0.22)',
            padding: '0.3rem 0.95rem',
            borderRadius: '999px',
            marginBottom: '0.9rem'
          }}>
            <span style={{ 
              fontSize: '0.74rem', 
              fontWeight: '800', 
              letterSpacing: '0.14em', 
              color: '#8A3B52', 
              textTransform: 'uppercase' 
            }}>
              SOFNEST PORTFOLIO
            </span>
          </div>

          <h1 style={{ 
            color: '#2A1A2C', 
            fontSize: 'clamp(2.4rem, 5vw, 3.25rem)', 
            marginBottom: '0.85rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: '700'
          }}>
            Care made for more kinds of days.
          </h1>

          <p style={{ color: '#554257', fontSize: '1.08rem', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto' }}>
            Explore the growing Sofnest range of thoughtful women's-care essentials.
          </p>
        </div>
      </section>

      {/* Categories Grid (Blueprint Page 12) */}
      <section className="section-padding">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Panty Liners Card */}
            <div className="card" style={{ backgroundColor: 'var(--mint-soft)', border: '1px solid #bce8d7', display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span className="badge badge-available">AVAILABLE NOW</span>
                <img src="/Pentyliner%20icons/pentyliner.png" alt="Panty Liners Icon" style={{ width: '70px', height: '70px', objectFit: 'contain', margin: '-8px -4px -8px 0' }} />
              </div>
              <h2 style={{ fontSize: '1.65rem', marginBottom: '0.35rem', color: 'var(--navy-deep)', whiteSpace: 'nowrap' }}>Panty Liners</h2>
              <p style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: '#0d6849', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
                EVERYDAY FRESHNESS
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>
                Light, soft and discreet care for everyday discharge, light spotting and period backup.
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--navy-deep)', fontWeight: '600', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                • Regular 155 mm<br />
                • Long 180 mm
              </div>
              <Link href="/products/panty-liners" className="btn btn-primary" style={{ width: '100%', fontSize: '0.85rem', marginTop: 'auto' }}>
                EXPLORE LINERS →
              </Link>
            </div>

            {/* Sanitary Pads Card */}
            <div className="card" style={{ backgroundColor: '#FFFDF9', border: '1px solid rgba(216, 170, 85, 0.3)', display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span className="badge badge-coming">COMING SOON</span>
                <img src="/Sanitary%20pads%20icons/sanitary-pad.png" alt="Sanitary Pads Icon" style={{ width: '56px', height: '56px', objectFit: 'contain' }} />
              </div>
              <h2 style={{ fontSize: '1.65rem', marginBottom: '0.35rem', color: 'var(--navy-deep)', whiteSpace: 'nowrap' }}>Sanitary Pads</h2>
              <p style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gold-accent)', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
                PERIOD CARE
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Thoughtful cotton-soft comfort and protection for period days. Created with the signature Sofnest touch.
              </p>
              <button onClick={() => handleOpenNotify('Sanitary Pads')} className="btn btn-outline" style={{ width: '100%', fontSize: '0.85rem', marginTop: 'auto' }}>
                NOTIFY ME →
              </button>
            </div>

            {/* Period Panties Card */}
            <div className="card" style={{ backgroundColor: 'var(--blush-powder)', border: '1px solid #f3d4e0', display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span className="badge badge-coming">COMING SOON</span>
                <img src="/Period%20penties%20icons/period%20penties.png" alt="Period Panties Icon" style={{ width: '56px', height: '56px', objectFit: 'contain' }} />
              </div>
              <h2 style={{ fontSize: '1.65rem', marginBottom: '0.35rem', color: 'var(--navy-deep)', whiteSpace: 'nowrap' }}>Period Panties</h2>
              <p style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--berry-deep)', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
                WEARABLE PROTECTION
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Wearable period-care protection designed for comfort and peace of mind on period days.
              </p>
              <button onClick={() => handleOpenNotify('Period Panties')} className="btn btn-outline" style={{ width: '100%', fontSize: '0.85rem', marginTop: 'auto' }}>
                NOTIFY ME →
              </button>
            </div>

            {/* Disposable Panties Card */}
            <div className="card" style={{ backgroundColor: '#F0F4FF', border: '1px solid #d0dcfd', display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span className="badge badge-coming">COMING SOON</span>
                <img src="/Disposable%20panti%20icons/disposible%20penties.png" alt="Disposable Panties Icon" style={{ width: '56px', height: '56px', objectFit: 'contain' }} />
              </div>
              <h2 style={{ fontSize: '1.65rem', marginBottom: '0.35rem', color: 'var(--navy-deep)', whiteSpace: 'nowrap' }}>Disposable Panties</h2>
              <p style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--navy-royal)', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
                CONVENIENCE CARE
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Simple, convenient personal care for travel, hospital days and moments when ease matters most.
              </p>
              <button onClick={() => handleOpenNotify('Disposable Panties')} className="btn btn-outline" style={{ width: '100%', fontSize: '0.85rem', marginTop: 'auto' }}>
                NOTIFY ME →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
