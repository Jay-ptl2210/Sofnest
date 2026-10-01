'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Feather, Sparkles, Sun, ArrowRight, Quote } from 'lucide-react';
import SEO from '../../components/SEO';

export default function WhySofnestPage() {
  const whySchemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sofnest.in" },
        { "@type": "ListItem", "position": 2, "name": "Why Sofnest", "item": "https://sofnest.in/why-sofnest" }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-page)' }}>
      <SEO 
        title="Why Sofnest | Everyday Women's Care & Freshness Philosophy"
        description="Discover why Sofnest is changing women's personal care. Everyday freshness, breathable comfort, and thoughtful products made for all days, not just period days."
        canonical="/why-sofnest"
        keywords="why sofnest, daily women care, panty liners philosophy, everyday freshness, cottony soft hygiene"
        schema={whySchemas}
      />
      {/* Fresh & Warm Soft-Luxe Hero Section */}
      <section 
        data-header-bg="#FAF0F3" 
        data-header-theme="light" 
        style={{ 
          backgroundColor: '#FAF0F3', 
          color: '#2A1A2C', 
          padding: '3.5rem 1rem 3.5rem 1rem', 
          textAlign: 'center',
          borderBottom: '1px solid rgba(138, 59, 82, 0.12)'
        }}
      >
        <div className="container" style={{ maxWidth: '680px' }}>
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
              WHY SOFNEST
            </span>
          </div>

          <h1 style={{ 
            color: '#2A1A2C', 
            fontSize: 'clamp(2.2rem, 4.5vw, 3.1rem)', 
            fontWeight: '700',
            fontFamily: 'var(--font-heading)',
            lineHeight: 1.15,
            marginBottom: '0.85rem' 
          }}>
            Care for your everyday rhythm
          </h1>

          <p style={{ 
            color: '#554257', 
            fontSize: '1.05rem', 
            lineHeight: 1.6, 
            marginBottom: '1.85rem',
            margin: '0 auto 1.85rem auto',
            maxWidth: '540px'
          }}>
            Because intimate wellness is about all 30 days of the month — not just the 5 days of your period.
          </p>

          <Link 
            href="/products" 
            style={{ 
              background: 'linear-gradient(135deg, #8A3B52 0%, #6E263B 100%)',
              color: '#FFFFFF',
              fontSize: '0.92rem', 
              padding: '0.82rem 2rem',
              borderRadius: '9999px',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              textDecoration: 'none',
              boxShadow: '0 6px 18px rgba(138, 59, 82, 0.28)',
              transition: 'all 0.25s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 24px rgba(138, 59, 82, 0.35)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(138, 59, 82, 0.28)';
            }}
          >
            EXPLORE OUR PRODUCTS <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Authentic Human Brand Purpose (Clear & Highly Readable) */}
      <section style={{ backgroundColor: '#FFFDFB', padding: '2.5rem 1rem 3rem 1rem' }}>
        <div className="container" style={{ maxWidth: '780px', textAlign: 'center' }}>
          <div style={{ 
            padding: '2rem 2.25rem', 
            backgroundColor: '#FFF9F5', 
            borderRadius: '20px', 
            border: '1.5px solid rgba(229, 213, 219, 0.9)',
            boxShadow: '0 4px 16px rgba(73, 53, 79, 0.04)',
            position: 'relative'
          }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '36px', 
              height: '36px', 
              borderRadius: '50%', 
              backgroundColor: '#FAF0F3', 
              color: '#8A3B52',
              marginBottom: '0.9rem'
            }}>
              <Quote size={18} />
            </div>

            <p style={{ 
              fontSize: '1.18rem', 
              color: '#2A1A2C', 
              lineHeight: 1.7, 
              fontFamily: "'Inter', sans-serif", 
              fontWeight: '500',
              margin: 0,
              letterSpacing: '-0.01em'
            }}>
              "Period pads only cover a few days a month. Sofnest was built for the rest of your routine — natural moisture, workout sweat, cycle spotting, and all the everyday moments where you deserve to feel clean, dry, and truly comfortable."
            </p>
          </div>
        </div>
      </section>

      {/* 4 Brand Pillars (Compact & Real) */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '3rem 1rem 3.5rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1180px' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ 
              fontSize: '0.72rem', 
              fontWeight: '800', 
              letterSpacing: '0.12em', 
              color: '#8A3B52', 
              textTransform: 'uppercase' 
            }}>
              FOUR BRAND FOUNDATIONS
            </span>
            <h2 style={{ 
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', 
              color: '#2A1A2C', 
              fontWeight: '700',
              fontFamily: 'var(--font-heading)',
              marginTop: '0.35rem'
            }}>
              What drives Sofnest
            </h2>
          </div>

          <div className="why-pillars-grid">
            <div className="why-pillar-card">
              <div style={{ color: '#8A3B52', marginBottom: '0.65rem' }}><Feather size={26} /></div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.35rem', color: '#2A1A2C' }}>Cottony Soft</h3>
              <p style={{ color: '#665569', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                100% gentle, non-abrasive surface layer crafted specifically for sensitive skin with zero chafing.
              </p>
            </div>

            <div className="why-pillar-card">
              <div style={{ color: '#8A3B52', marginBottom: '0.65rem' }}><Sparkles size={26} /></div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.35rem', color: '#2A1A2C' }}>Ultra-Thin (&lt;1 mm)</h3>
              <p style={{ color: '#665569', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                Featherlight profile with micro-airflow channels to circulate air and prevent trapped moisture.
              </p>
            </div>

            <div className="why-pillar-card">
              <div style={{ color: '#8A3B52', marginBottom: '0.65rem' }}><Heart size={26} /></div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.35rem', color: '#2A1A2C' }}>Zero Irritation</h3>
              <p style={{ color: '#665569', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                Dermatologically tested with zero chlorine, synthetic fragrances, or harsh artificial dyes.
              </p>
            </div>

            <div className="why-pillar-card">
              <div style={{ color: '#8A3B52', marginBottom: '0.65rem' }}><Sun size={26} /></div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.35rem', color: '#2A1A2C' }}>Real Everyday Use</h3>
              <p style={{ color: '#665569', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                Engineered with edge-to-edge stay-put adhesive for active workouts, workdays, and travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Government & Quality Certifications Section */}
      <section className="section-padding" style={{ backgroundColor: '#FAF0F3', borderTop: '1px solid rgba(138, 59, 82, 0.12)', borderBottom: '1px solid rgba(138, 59, 82, 0.12)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-tag" style={{ color: '#8A3B52', fontWeight: '700', letterSpacing: '0.12em' }}>GOVERNMENT & QUALITY CERTIFICATIONS</span>
            <h2 style={{ color: '#2A1A2C', fontSize: '2.35rem', fontFamily: 'var(--font-heading)', marginTop: '0.35rem' }}>Certified for Safety & Quality</h2>
            <p style={{ color: '#554257', maxWidth: '640px', margin: '0.5rem auto 0 auto', lineHeight: 1.6 }}>
              Manufactured with highest quality standards, ISI compliance, ISO guidelines, and strict dermatological hygiene practices in India.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            {/* 1. ISI Certified */}
            <div className="card" style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '20px', border: '1px solid rgba(229, 213, 219, 0.8)', textAlign: 'center', boxShadow: '0 6px 20px rgba(73, 53, 79, 0.04)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#FAF0F3', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid rgba(138, 59, 82, 0.2)', overflow: 'hidden', padding: '6px' }}>
                <img src="/Quality%20icons/isi.png" alt="ISI Certified Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#2A1A2C', marginBottom: '0.4rem', fontWeight: '700' }}>ISI Certified</h3>
              <p style={{ fontSize: '0.88rem', color: '#665569', margin: 0, lineHeight: 1.55 }}>
                Complies with Indian Standards Institute (ISI) rigorous product safety and raw material quality benchmarks.
              </p>
            </div>

            {/* 2. ISO Certified */}
            <div className="card" style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '20px', border: '1px solid rgba(229, 213, 219, 0.8)', textAlign: 'center', boxShadow: '0 6px 20px rgba(73, 53, 79, 0.04)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#FAF0F3', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid rgba(138, 59, 82, 0.2)', overflow: 'hidden', padding: '6px' }}>
                <img src="/Quality%20icons/ISO.png" alt="ISO Certified Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#2A1A2C', marginBottom: '0.4rem', fontWeight: '700' }}>ISO Certified</h3>
              <p style={{ fontSize: '0.88rem', color: '#665569', margin: 0, lineHeight: 1.55 }}>
                Manufactured in ISO-standardized facilities ensuring international quality management systems.
              </p>
            </div>

            {/* 3. Make in India */}
            <div className="card" style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '20px', border: '1px solid rgba(229, 213, 219, 0.8)', textAlign: 'center', boxShadow: '0 6px 20px rgba(73, 53, 79, 0.04)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#FAF0F3', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid rgba(138, 59, 82, 0.2)', overflow: 'hidden', padding: '6px' }}>
                <img src="/Quality%20icons/makeinindia.png" alt="Make In India Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#2A1A2C', marginBottom: '0.4rem', fontWeight: '700' }}>Make In India</h3>
              <p style={{ fontSize: '0.88rem', color: '#665569', margin: 0, lineHeight: 1.55 }}>
                Proudly designed, sourced, and manufactured in India to empower local production and women's hygiene.
              </p>
            </div>

            {/* 4. GMP Quality */}
            <div className="card" style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '20px', border: '1px solid rgba(229, 213, 219, 0.8)', textAlign: 'center', boxShadow: '0 6px 20px rgba(73, 53, 79, 0.04)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#FAF0F3', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid rgba(138, 59, 82, 0.2)', overflow: 'hidden', padding: '6px' }}>
                <img src="/Quality%20icons/GMP.png" alt="GMP Quality Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#2A1A2C', marginBottom: '0.4rem', fontWeight: '700' }}>GMP Quality</h3>
              <p style={{ fontSize: '0.88rem', color: '#665569', margin: 0, lineHeight: 1.55 }}>
                Good Manufacturing Practice (GMP) certified process for maximum cleanliness, safety, and hygiene assurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Page Journey Footer */}
      <section className="section-padding" data-header-bg="#FAF0F3" data-header-theme="light" style={{ backgroundColor: '#FFF9F5', color: '#2A1A2C', textAlign: 'center', borderTop: '1px solid rgba(229, 213, 219, 0.6)' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 style={{ color: '#2A1A2C', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>Where We Are Going</h2>
          <p style={{ color: '#554257', marginBottom: '1.75rem', lineHeight: 1.6 }}>
            From everyday panty liners to sanitary pads, period panties, and disposable panties — building a complete women's care brand.
          </p>
          <Link 
            href="/our-story" 
            style={{ 
              background: 'linear-gradient(135deg, #8A3B52 0%, #6E263B 100%)',
              color: '#FFFFFF',
              fontSize: '0.9rem', 
              padding: '0.75rem 1.85rem',
              borderRadius: '9999px',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              textDecoration: 'none',
              boxShadow: '0 6px 18px rgba(138, 59, 82, 0.25)'
            }}
          >
            READ OUR STORY <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
