'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SEO from '../../../../components/SEO';

export default function PantyLinerComparisonPage() {
  const comparisonSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "155mm vs 180mm Panty Liners Comparison | Sofnest",
      "description": "Compare Sofnest Regular 155mm and Long 180mm Panty Liners across size, why to choose, primary uses, key benefits, and best fit recommendations.",
      "url": "https://sofnest.in/products/panty-liners/155mm-vs-180mm"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sofnest.in" },
        { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://sofnest.in/products" },
        { "@type": "ListItem", "position": 3, "name": "Panty Liners", "item": "https://sofnest.in/products/panty-liners" },
        { "@type": "ListItem", "position": 4, "name": "155mm vs 180mm", "item": "https://sofnest.in/products/panty-liners/155mm-vs-180mm" }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-page)', minHeight: '80vh' }}>
      <SEO 
        title="155mm vs 180mm Panty Liners Comparison | Sofnest"
        description="Compare Sofnest Regular 155mm vs Long 180mm Panty Liners. Learn the differences in size, why to choose, uses, benefits of use, and best suited recommendation."
        canonical="/products/panty-liners/155mm-vs-180mm"
        keywords="155mm vs 180mm panty liner, panty liner comparison, regular vs long panty liner, sofnest panty liners comparison"
        schema={comparisonSchema}
      />

      {/* Detailed 5-Point Comparison Section */}
      <section 
        data-header-bg="#FAF0F3" 
        data-header-theme="light"
        className="section-padding" 
        style={{ backgroundColor: 'var(--bg-page)', paddingTop: '3.5rem' }}
      >
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="section-header">
            <span className="section-tag">SIDE-BY-SIDE COMPARISON</span>
            <h2>Regular 155 mm vs Long 180 mm</h2>
            <p className="section-subtitle">
              Compare length, daily use cases, key benefits, and discover which liner suits your body best.
            </p>
          </div>

          {/* Comparison Cards / Table Container */}
          <div className="card" style={{ 
            padding: 0, 
            overflow: 'hidden', 
            borderRadius: '24px', 
            border: '1.5px solid rgba(41, 49, 91, 0.2)',
            boxShadow: '0 12px 36px rgba(41, 49, 91, 0.08)',
            backgroundColor: '#FFFFFF'
          }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--navy-deep)', color: '#FFFFFF' }}>
                    <th style={{ padding: '1.2rem 1.5rem', width: '22%', fontSize: '1rem', fontWeight: '700', letterSpacing: '0.05em' }}>Comparison Point</th>
                    <th style={{ padding: '1.2rem 1.5rem', width: '39%', fontSize: '1.1rem', fontWeight: '700', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>Regular 155 mm</span>
                        <span style={{ fontSize: '0.72rem', backgroundColor: 'var(--gold-accent)', color: 'var(--navy-deep)', padding: '0.2rem 0.6rem', borderRadius: '12px', fontWeight: '800' }}>DAILY STANDARD</span>
                      </div>
                    </th>
                    <th style={{ padding: '1.2rem 1.5rem', width: '39%', fontSize: '1.1rem', fontWeight: '700' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>Long 180 mm</span>
                        <span style={{ fontSize: '0.72rem', backgroundColor: '#6B21A8', color: '#FFFFFF', padding: '0.2rem 0.6rem', borderRadius: '12px', fontWeight: '800' }}>EXTENDED FIT</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '0.95rem', color: 'var(--navy-deep)' }}>
                  {/* Point 1: Size */}
                  <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
                    <td style={{ padding: '1rem 1.5rem', fontWeight: '700', backgroundColor: '#FAF9F6', color: 'var(--gold-accent)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      1. Size
                    </td>
                    <td style={{ padding: '1rem 1.5rem', borderRight: '1px solid #E2E8F0', lineHeight: 1.5, fontWeight: '600' }}>
                      155 mm (Regular Fit)
                    </td>
                    <td style={{ padding: '1rem 1.5rem', lineHeight: 1.5, fontWeight: '600' }}>
                      180 mm (+25 mm Extra Length)
                    </td>
                  </tr>

                  {/* Point 2: Why */}
                  <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FAF9F6' }}>
                    <td style={{ padding: '1rem 1.5rem', fontWeight: '700', backgroundColor: '#FAF9F6', color: 'var(--gold-accent)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      2. Why
                    </td>
                    <td style={{ padding: '1rem 1.5rem', borderRight: '1px solid #E2E8F0', lineHeight: 1.5 }}>
                      • Daily discharge & non-period freshness<br />
                      • Invisible, weightless feel
                    </td>
                    <td style={{ padding: '1rem 1.5rem', lineHeight: 1.5 }}>
                      • Extra front-to-back coverage<br />
                      • Active routine & period backup
                    </td>
                  </tr>

                  {/* Point 3: Uses */}
                  <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
                    <td style={{ padding: '1rem 1.5rem', fontWeight: '700', backgroundColor: '#FAF9F6', color: 'var(--gold-accent)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      3. Uses
                    </td>
                    <td style={{ padding: '1rem 1.5rem', borderRight: '1px solid #E2E8F0', lineHeight: 1.5 }}>
                      • Daily discharge & light moisture<br />
                      • College, work & casual wear
                    </td>
                    <td style={{ padding: '1rem 1.5rem', lineHeight: 1.5 }}>
                      • Gym, travel & ovulation days<br />
                      • Heavy discharge & period backup
                    </td>
                  </tr>

                  {/* Point 4: Benefit of use */}
                  <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FAF9F6' }}>
                    <td style={{ padding: '1rem 1.5rem', fontWeight: '700', backgroundColor: '#FAF9F6', color: 'var(--gold-accent)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      4. Benefit of Use
                    </td>
                    <td style={{ padding: '1rem 1.5rem', borderRight: '1px solid #E2E8F0', lineHeight: 1.5 }}>
                      • Ultra-thin & non-bulky profile<br />
                      • Flexible movement with body
                    </td>
                    <td style={{ padding: '1rem 1.5rem', lineHeight: 1.5 }}>
                      • Extended leak-lock protection<br />
                      • Superior absorbency & security
                    </td>
                  </tr>

                  {/* Point 5: For best */}
                  <tr style={{ backgroundColor: '#FFFFFF' }}>
                    <td style={{ padding: '1rem 1.5rem', fontWeight: '700', backgroundColor: '#FAF9F6', color: 'var(--gold-accent)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      5. For Best
                    </td>
                    <td style={{ padding: '1rem 1.5rem', borderRight: '1px solid #E2E8F0', lineHeight: 1.5 }}>
                      Everyday routine hygiene & light daily care
                    </td>
                    <td style={{ padding: '1rem 1.5rem', lineHeight: 1.5 }}>
                      Active days, heavy moisture & cycle transition
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bottom Call To Action Links */}
            <div style={{
              padding: '1.75rem 2rem',
              backgroundColor: '#F8FAFC',
              borderTop: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}>
              <Link 
                href="/products/panty-liners" 
                className="btn btn-outline" 
                style={{ borderRadius: '50px', fontWeight: '700', padding: '0.75rem 1.5rem' }}
              >
                EXPLORE REGULAR 155 MM <ArrowRight size={15} />
              </Link>

              <Link 
                href="/products/panty-liners" 
                className="btn btn-primary" 
                style={{ borderRadius: '50px', fontWeight: '700', padding: '0.75rem 1.5rem', backgroundColor: '#6B21A8', borderColor: '#6B21A8' }}
              >
                EXPLORE PANTY LINERS <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
