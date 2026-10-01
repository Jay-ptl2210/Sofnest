'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import SEO from '../../components/SEO';
import { ARTICLES_DATA } from '../../data/articles';

export default function CareGuidePage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Everyday Care', 'Period Care', 'Product Guides', 'Women\'s Wellness'];

  const filtered = activeCategory === 'All' 
    ? ARTICLES_DATA 
    : ARTICLES_DATA.filter(a => a.category === activeCategory);

  const guideSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Sofnest Women's Care & Hygiene Educational Guide",
      "description": "Educational guide and insights on panty liner usage, daily vaginal discharge care, cycle wellness, and feminine hygiene tips.",
      "url": "https://sofnest.in/care-guide"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sofnest.in" },
        { "@type": "ListItem", "position": 2, "name": "Care Guide", "item": "https://sofnest.in/care-guide" }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-page)', minHeight: '80vh' }}>
      <SEO 
        title="Women's Personal Care & Hygiene Guide | Sofnest Education Hub"
        description="Learn about panty liner uses, daily discharge care, cycle shifts, and everyday hygiene tips. Simple, practical answers for women's personal wellness."
        canonical="/care-guide"
        keywords="panty liner guide, vaginal discharge guide, how to use panty liner, panty liner vs sanitary pad, daily hygiene routine women"
        schema={guideSchemas}
      />
      {/* Education Hub Hero */}
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
              SOFNEST EDUCATION HUB
            </span>
          </div>

          <h1 style={{ 
            color: '#2A1A2C', 
            fontSize: 'clamp(2.4rem, 5vw, 3.25rem)', 
            fontWeight: '700',
            fontFamily: 'var(--font-heading)',
            lineHeight: 1.15,
            marginBottom: '0.85rem' 
          }}>
            Let's talk care.
          </h1>

          <p style={{ 
            color: '#554257', 
            fontSize: '1.08rem', 
            lineHeight: 1.6, 
            maxWidth: '620px', 
            margin: '0 auto' 
          }}>
            Simple, practical answers for everyday women's personal care, daily discharge, and cycle wellness.
          </p>
        </div>
      </section>

      {/* Category Tabs & Articles */}
      <section className="section-padding" style={{ backgroundColor: '#FFFDFB' }}>
        <div className="container">
          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '2.75rem' }}>
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveCategory(cat)}
                style={{ 
                  fontSize: '0.85rem', 
                  padding: '0.55rem 1.35rem',
                  borderRadius: '999px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  border: activeCategory === cat ? 'none' : '1px solid rgba(138, 59, 82, 0.22)',
                  background: activeCategory === cat ? 'linear-gradient(135deg, #8A3B52 0%, #6E263B 100%)' : '#FFFFFF',
                  color: activeCategory === cat ? '#FFFFFF' : '#554257',
                  boxShadow: activeCategory === cat ? '0 4px 14px rgba(138, 59, 82, 0.25)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
            {filtered.map(article => (
              <div 
                key={article.id} 
                style={{ 
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid rgba(229, 213, 219, 0.85)',
                  padding: '1.75rem',
                  boxShadow: '0 6px 20px rgba(73, 53, 79, 0.03)',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                    <span style={{ fontSize: '0.74rem', fontWeight: '800', letterSpacing: '0.08em', color: '#8A3B52' }}>
                      ARTICLE {article.number}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#88748A' }}>
                      {article.readTime}
                    </span>
                  </div>

                  <div style={{ marginBottom: '0.9rem' }}>
                    <span style={{ 
                      display: 'inline-block',
                      backgroundColor: '#FAF0F3', 
                      color: '#8A3B52', 
                      fontSize: '0.74rem',
                      fontWeight: '700',
                      letterSpacing: '0.05em',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '999px',
                      border: '1px solid rgba(138, 59, 82, 0.18)',
                      textTransform: 'uppercase'
                    }}>
                      {article.category}
                    </span>
                  </div>

                  <h3 style={{ 
                    fontSize: '1.28rem', 
                    color: '#2A1A2C', 
                    marginBottom: '0.65rem', 
                    lineHeight: 1.35, 
                    fontWeight: '700',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {article.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#665569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {article.summary}
                  </p>
                </div>

                <Link 
                  href={`/care-guide/${article.id}`} 
                  style={{ 
                    fontSize: '0.84rem', 
                    fontWeight: '700',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '999px',
                    border: '1px solid rgba(138, 59, 82, 0.35)',
                    color: '#8A3B52',
                    backgroundColor: '#FAF0F3',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#8A3B52';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#FAF0F3';
                    e.currentTarget.style.color = '#8A3B52';
                  }}
                >
                  READ ARTICLE <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Disclaimer Footer */}
      <section style={{ backgroundColor: '#FAF0F3', padding: '2rem 1rem', borderTop: '1px solid rgba(138, 59, 82, 0.12)' }}>
        <div className="container" style={{ maxWidth: '800px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <ShieldAlert size={28} style={{ color: '#8A3B52', flexShrink: 0 }} />
          <p style={{ fontSize: '0.84rem', color: '#554257', margin: 0, lineHeight: 1.55 }}>
            <strong style={{ color: '#2A1A2C' }}>Health Content Notice:</strong> This educational content is provided for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. For symptom-specific or clinical health concerns, please consult a qualified healthcare provider.
          </p>
        </div>
      </section>
    </div>
  );
}
