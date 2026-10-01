'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import SofnestLogo from '../../components/SofnestLogo';
import SEO from '../../components/SEO';

export default function OurStoryPage() {
  const storySchemas = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Sofnest - Our Story",
      "description": "Learn how Sofnest was built to provide a softer, more comfortable approach to everyday women's hygiene and panty liners.",
      "url": "https://sofnest.in/our-story"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sofnest.in" },
        { "@type": "ListItem", "position": 2, "name": "Our Story", "item": "https://sofnest.in/our-story" }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-page)' }}>
      <SEO 
        title="Our Story | Sofnest Women's Care Brand"
        description="Read the story behind Sofnest: why we created cottony-soft panty liners to bring daily comfort, confidence, and softness to women everywhere."
        canonical="/our-story"
        keywords="sofnest story, about sofnest, women hygiene brand, panty liner brand india, soft feminine care"
        schema={storySchemas}
      />
      {/* Hero */}
      <section 
        data-header-bg="#FAF0F3" 
        data-header-theme="light" 
        style={{ 
          backgroundColor: '#FAF0F3', 
          color: '#2A1A2C', 
          padding: '3.25rem 1rem 3.5rem 1rem', 
          textAlign: 'center',
          borderBottom: '1px solid rgba(138, 59, 82, 0.12)'
        }}
      >
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <SofnestLogo variant="navy" height={44} />
          </div>

          <h1 style={{ 
            color: '#2A1A2C', 
            fontSize: 'clamp(2.2rem, 4.5vw, 3.1rem)', 
            marginBottom: '0.45rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: '700'
          }}>
            We're Sofnest.
          </h1>

          <p style={{ 
            color: '#8A3B52', 
            fontSize: '1.15rem', 
            fontFamily: 'var(--font-heading)', 
            fontStyle: 'italic', 
            marginBottom: '1.65rem' 
          }}>
            A softer approach to women's care.
          </p>

          <Link 
            href="/products" 
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
              boxShadow: '0 6px 18px rgba(138, 59, 82, 0.28)'
            }}
          >
            DISCOVER SOFNEST <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Brand Story Copy Block (Fixed Contrast & Crisp Inter Body Copy) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-tag">OUR JOURNEY & BELIEF</span>
            <h2>How Sofnest Began</h2>
          </div>

          <div style={{
            fontSize: '1.125rem',
            color: 'var(--navy-deep)',
            lineHeight: 1.8,
            fontFamily: 'var(--font-body)',
            backgroundColor: 'var(--bg-card)',
            padding: '3rem 2.5rem',
            borderRadius: '24px',
            border: '2px solid rgba(201, 153, 82, 0.25)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <p style={{ marginBottom: '1.5rem', fontWeight: '400', color: 'var(--navy-deep)' }}>
              Sofnest began with a simple belief: women's care deserves attention in the ordinary moments too. Not only on period days, but on the days between them — the busy days, the lighter days, the unexpected days and the days when a little extra comfort simply makes you feel better.
            </p>
            <p style={{ fontWeight: '400', color: 'var(--navy-deep)' }}>
              That is why our journey begins with everyday panty liners — and why it will not end there. Sofnest is building a growing family of thoughtful women's-care essentials designed around softness, simplicity and everyday comfort. Because sometimes, little care can make a brighter day.
            </p>
          </div>
        </div>
      </section>

      {/* Today vs Tomorrow Roadmap */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="section-header">
            <span className="section-tag">PORTFOLIO ROADMAP</span>
            <h2>Today & Tomorrow</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Today */}
            <div className="card" style={{ backgroundColor: 'var(--mint-soft)', border: '2px solid #bce8d7' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0d6849', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                <Calendar size={20} /> TODAY
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--navy-deep)' }}>Panty Liners</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Our launch product family providing everyday freshness and discreet comfort.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--navy-deep)', fontWeight: '600' }}>
                <li>• Regular 155 mm (50 Liners Pack)</li>
                <li>• Long 180 mm (Extended Fit)</li>
              </ul>
            </div>

            {/* Tomorrow */}
            <div className="card" style={{ backgroundColor: 'var(--blush-powder)', border: '2px solid #f3d4e0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--berry-deep)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                <Sparkles size={20} /> TOMORROW
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--navy-deep)' }}>Expanding Portfolio</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Thoughtful additions designed to support women through every cycle phase.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--navy-deep)', fontWeight: '600' }}>
                <li>• Sanitary Pads (Period Protection)</li>
                <li>• Period Panties (Wearable Protection)</li>
                <li>• Disposable Panties (Convenience Care)</li>
                <li>• And more women-care essentials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
