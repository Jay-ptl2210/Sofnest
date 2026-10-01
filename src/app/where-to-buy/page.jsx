'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import SEO from '../../components/SEO';

export default function WhereToBuyPage() {
  const whereSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sofnest.in" },
        { "@type": "ListItem", "position": 2, "name": "Where to Buy", "item": "https://sofnest.in/where-to-buy" }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-page)', minHeight: '80vh' }}>
      <SEO 
        title="Where to Buy Sofnest Panty Liners | Amazon, Flipkart & Meesho"
        description="Buy genuine Sofnest Panty Liners on Amazon, Flipkart, and Meesho with fast delivery and official seller warranty across India."
        canonical="/where-to-buy"
        keywords="buy sofnest, panty liners amazon, panty liners flipkart, panty liners meesho, buy panty liners online india"
        schema={whereSchemas}
      />
      {/* Hero */}
      <section 
        data-header-bg="#FAF0F3" 
        data-header-theme="light" 
        style={{ 
          backgroundColor: '#FAF0F3', 
          color: '#2A1A2C', 
          padding: '3.75rem 1rem 4rem 1rem', 
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
              OFFICIAL MARKETPLACE CHANNELS
            </span>
          </div>

          <h1 style={{ 
            color: '#2A1A2C', 
            fontSize: 'clamp(2.4rem, 5vw, 3.25rem)', 
            marginBottom: '0.85rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: '700'
          }}>
            Shop Sofnest your way.
          </h1>

          <p style={{ color: '#554257', fontSize: '1.08rem', lineHeight: 1.6, maxWidth: '620px', margin: '0 auto' }}>
            Find genuine Sofnest products on your preferred online marketplace with fast nationwide delivery and buyer protection.
          </p>
        </div>
      </section>

      {/* Clean Marketplace Buttons with Logos & Icons */}
      <section className="section-padding" style={{ marginTop: '-2.5rem' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            justifyContent: 'center'
          }}>
            {/* Amazon India */}
            <a 
              href="https://www.amazon.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '50px',
                border: '2px solid #FF9900',
                padding: '1rem 1.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(255, 153, 0, 0.12)',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <img src="/Marketplace%20icons/amazon-clean.png" alt="Amazon India" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
                <span style={{ fontWeight: '700', color: '#131921', fontSize: '1.05rem' }}>Amazon India</span>
              </div>
              <ExternalLink size={18} style={{ color: '#FF9900' }} />
            </a>

            {/* Flipkart */}
            <a 
              href="https://www.flipkart.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '50px',
                border: '2px solid #2874F0',
                padding: '1rem 1.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(40, 116, 240, 0.12)',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <img src="/Marketplace%20icons/flipkart-clean.png" alt="Flipkart" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
                <span style={{ fontWeight: '700', color: '#131921', fontSize: '1.05rem' }}>Flipkart</span>
              </div>
              <ExternalLink size={18} style={{ color: '#2874F0' }} />
            </a>

            {/* Meesho */}
            <a 
              href="https://www.meesho.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '50px',
                border: '2px solid #E52D71',
                padding: '1rem 1.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(229, 45, 113, 0.12)',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <img src="/Marketplace%20icons/meesho-clean.png" alt="Meesho" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
                <span style={{ fontWeight: '700', color: '#131921', fontSize: '1.05rem' }}>Meesho</span>
              </div>
              <ExternalLink size={18} style={{ color: '#E52D71' }} />
            </a>
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '2.5rem' }}>
            Note: Marketplace pricing, special offers, and local delivery schedules may vary by platform.
          </p>
        </div>
      </section>
    </div>
  );
}
