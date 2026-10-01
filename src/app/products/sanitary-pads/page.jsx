'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Bell, 
  ArrowRight, 
  Sparkles, 
  Feather, 
  Droplets, 
  Layers, 
  ShieldCheck, 
  Heart,
  ChevronDown,
  Check
} from 'lucide-react';
import { CottonFluffIcon } from '../../../components/CottonElements';
import SEO from '../../../components/SEO';
import { useModal } from '../../../context/ModalContext';

export default function SanitaryPadsPage({ onOpenNotify }) {
  const modalContext = useModal();
  const handleOpenNotify = onOpenNotify || modalContext.openNotify;

  // FAQ Accordion State
  const [openFaqs, setOpenFaqs] = useState({ 0: true });

  const toggleFaq = (idx) => {
    setOpenFaqs(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const faqItems = [
    {
      q: 'When will Sofnest Sanitary Pads be available to purchase?',
      a: 'Our Sanitary Pads range is currently in final development and will launch soon. Click "Notify Me When It Launches" to be the first to receive updates and exclusive launch offers.'
    },
    {
      q: 'What options will be available in the range?',
      a: 'Sofnest Sanitary Pads will feature two surface choices (Cotton Soft and Dry Net), two pad profiles (Ultra Thin and Maxi), and three lengths (280mm XL, 320mm XXL, and 360mm XXL).'
    },
    {
      q: 'What is the difference between Cotton Soft and Dry Net?',
      a: 'Cotton Soft is designed for those who prefer a gentle, cushiony-soft feel against sensitive skin, while Dry Net provides an instant dry, clean, and textured feel.'
    },
    {
      q: 'Are Sofnest products free from harsh chemicals?',
      a: 'Yes! All Sofnest products are crafted without elemental chlorine, harsh artificial fragrances, or toxic dyes, ensuring rash-free comfort.'
    }
  ];

  const schemas = [
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Sofnest Sanitary Pads",
      "image": ["https://sofnest.in/Sanitary%20pads%20icons/sanitary-pad-3d-box.jpg"],
      "description": "Comfort designed around your flow, your feel, and your day. Upcoming Sofnest Sanitary Pads with Cotton Soft & Dry Net surfaces, Maxi & Ultra Thin profiles, and 280mm, 320mm, 360mm lengths.",
      "sku": "SOF-SP-CS",
      "brand": {
        "@type": "Brand",
        "name": "Sofnest"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sofnest.in" },
        { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://sofnest.in/products" },
        { "@type": "ListItem", "position": 3, "name": "Sanitary Pads", "item": "https://sofnest.in/products/sanitary-pads" }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-page)' }}>
      <SEO 
        title="Sofnest Sanitary Pads (Coming Soon) | Cotton Soft & Dry Net"
        description="Comfort designed around your flow, your feel, and your day. Upcoming Sofnest Sanitary Pads with Cotton Soft and Dry Net top layers, Maxi and Ultra Thin types, and 280mm, 320mm, and 360mm sizes."
        canonical="/products/sanitary-pads"
        keywords="sofnest sanitary pads, cotton soft pads, dry net sanitary pads, maxi pads, ultra thin sanitary napkins, 280mm xl, 320mm xxl, 360mm xxl, sofnest period care"
        schema={schemas}
      />

      {/* =========================================================================
          PRODUCT HERO DETAILS SECTION (Matching Panty Liners Showcase Layout)
          ========================================================================= */}
      <section 
        data-header-bg="#FFF9F5" 
        data-header-theme="light"
        style={{ 
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF9F5 40%, #FAF0F3 100%)', 
          padding: '2.25rem 0 2.75rem 0', 
          borderBottom: '1px solid rgba(229, 213, 219, 0.7)' 
        }}
      >
        <div className="container" style={{ maxWidth: '1240px', padding: '0 clamp(0.85rem, 3.5vw, 1.5rem)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1.5rem, 3.5vw, 3rem)',
            alignItems: 'center'
          }}>
            {/* Left: 3D Product Mockup Showcase Card */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <div style={{
                position: 'relative',
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow: '0 18px 42px -12px rgba(74, 25, 44, 0.14)',
                border: '1px solid rgba(229, 213, 219, 0.85)',
                width: '100%',
                maxWidth: '520px',
                height: '100%',
                maxHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FAF0F3'
              }}>
                <img 
                  src="/Sanitary%20pads%20icons/sanitary-pad-3d-box.jpg" 
                  alt="Sofnest Sanitary Pads 3D Box" 
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '400px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            </div>

            {/* Right: Product Information & Notification Trigger */}
            <div>
              {/* Category Label with horizontal line */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.45rem' }}>
                <span style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: '800', 
                  letterSpacing: '0.14em', 
                  color: 'var(--color-dusty-rose, #A97887)', 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap'
                }}>
                  PERIOD CARE • COMING SOON
                </span>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-soft-blush, #F5E2E6)', marginLeft: '0.85rem' }}></div>
              </div>

              {/* Main Title in 1 Line with Botanical Leaf Accent */}
              <div style={{ marginBottom: '0.5rem' }}>
                <h1 style={{ 
                  fontSize: 'clamp(1.48rem, 5.2vw, 2.35rem)', 
                  color: 'var(--color-deep-plum, #49354F)', 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: '600',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                  margin: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  whiteSpace: 'nowrap',
                  gap: '0.5rem',
                  maxWidth: '100%'
                }}>
                  <span>Sofnest Sanitary Pads</span>
                  {/* Botanical Leaf Art Accent */}
                  <svg 
                    style={{ 
                      width: 'clamp(22px, 4.2vw, 28px)', 
                      height: 'clamp(22px, 4.2vw, 28px)', 
                      flexShrink: 0 
                    }} 
                    viewBox="0 0 36 36" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 30C6 30 11 19 28 8C28 8 30 23 19 28C13 30.5 8.5 30 6 30Z" stroke="var(--color-dusty-rose, #A97887)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 30C15 23 21.5 16 28 8" stroke="var(--color-dusty-rose, #A97887)" strokeWidth="1.3" strokeLinecap="round"/>
                    <path d="M15 21C18 21 21.5 19 21.5 19" stroke="var(--color-dusty-rose, #A97887)" strokeWidth="1" strokeLinecap="round"/>
                    <path d="M11 25C13.5 25 16 23 16 23" stroke="var(--color-dusty-rose, #A97887)" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                </h1>
              </div>

              {/* Decorative short underline rule */}
              <div style={{ width: '44px', height: '1.5px', backgroundColor: 'var(--color-deep-plum, #49354F)', marginBottom: '1.1rem' }}></div>

              {/* 5 Key Feature Icons - Universal Benefits & Choice Indicators */}
              <div className="product-hero-features-grid">
                {/* Feature 1: Choice of Surface */}
                <div className="product-feature-item">
                  <div className="product-feature-circle">
                    <CottonFluffIcon size={20} color="var(--color-deep-plum, #49354F)" />
                  </div>
                  <span className="product-feature-label">
                    Cotton / Dry Net
                  </span>
                </div>

                {/* Feature 2: Choice of Profile */}
                <div className="product-feature-item">
                  <div className="product-feature-circle">
                    <Layers size={20} color="var(--color-deep-plum, #49354F)" strokeWidth={1.6} />
                  </div>
                  <span className="product-feature-label">
                    Thin / Maxi
                  </span>
                </div>

                {/* Feature 3: Rash Free */}
                <div className="product-feature-item">
                  <div className="product-feature-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-deep-plum, #49354F)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                    </svg>
                  </div>
                  <span className="product-feature-label">
                    Rash-Free
                  </span>
                </div>

                {/* Feature 4: Breathable */}
                <div className="product-feature-item">
                  <div className="product-feature-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-deep-plum, #49354F)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
                      <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
                      <path d="M2 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
                    </svg>
                  </div>
                  <span className="product-feature-label">
                    Breathable
                  </span>
                </div>

                {/* Feature 5: Leak Lock */}
                <div className="product-feature-item">
                  <div className="product-feature-circle">
                    <ShieldCheck size={20} color="var(--color-deep-plum, #49354F)" strokeWidth={1.6} />
                  </div>
                  <span className="product-feature-label">
                    Leak Lock
                  </span>
                </div>
              </div>

              {/* FEATURES Section Tag with Horizontal Rule */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flex: 1 }}>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    fontWeight: '800', 
                    letterSpacing: '0.12em', 
                    color: 'var(--color-dusty-rose, #A97887)', 
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}>
                    FEATURES
                  </span>
                  <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-soft-blush, #F5E2E6)' }}></div>
                </div>
              </div>

              {/* Features Breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--color-deep-plum, #49354F)' }}>
                  <span style={{ fontWeight: '700', color: 'var(--color-dusty-rose, #A97887)', minWidth: '70px', flexShrink: 0 }}>Surface:</span>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.35rem 0.55rem' }}>
                    <span style={{ fontWeight: '600', backgroundColor: '#FAF0F3', padding: '0.18rem 0.6rem', borderRadius: '6px' }}>Cotton Soft</span>
                    <span style={{ color: 'var(--color-dusty-rose, #A97887)', fontWeight: '600' }}>&</span>
                    <span style={{ fontWeight: '600', backgroundColor: '#FAF0F3', padding: '0.18rem 0.6rem', borderRadius: '6px' }}>Dry Net</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--color-deep-plum, #49354F)' }}>
                  <span style={{ fontWeight: '700', color: 'var(--color-dusty-rose, #A97887)', minWidth: '70px', flexShrink: 0 }}>Profile:</span>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.35rem 0.55rem' }}>
                    <span style={{ fontWeight: '600', backgroundColor: '#FAF0F3', padding: '0.18rem 0.6rem', borderRadius: '6px' }}>Ultra Thin</span>
                    <span style={{ color: 'var(--color-dusty-rose, #A97887)', fontWeight: '600' }}>&</span>
                    <span style={{ fontWeight: '600', backgroundColor: '#FAF0F3', padding: '0.18rem 0.6rem', borderRadius: '6px' }}>Maxi Cushioned</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--color-deep-plum, #49354F)' }}>
                  <span style={{ fontWeight: '700', color: 'var(--color-dusty-rose, #A97887)', minWidth: '70px', flexShrink: 0, paddingTop: '1px' }}>Lengths:</span>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.35rem 0.55rem' }}>
                    <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>280 mm <span style={{ fontWeight: '500', color: 'var(--text-secondary, #6B5570)' }}>(XL)</span></span>
                    <span style={{ color: 'var(--color-dusty-rose, #A97887)', opacity: 0.6 }}>•</span>
                    <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>320 mm <span style={{ fontWeight: '500', color: 'var(--text-secondary, #6B5570)' }}>(XXL)</span></span>
                    <span style={{ color: 'var(--color-dusty-rose, #A97887)', opacity: 0.6 }}>•</span>
                    <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>360 mm <span style={{ fontWeight: '500', color: 'var(--text-secondary, #6B5570)' }}>(XXL Extra)</span></span>
                  </div>
                </div>
              </div>

              {/* NOTIFY ME CTA Section Tag */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: '800', 
                  letterSpacing: '0.12em', 
                  color: 'var(--color-dusty-rose, #A97887)', 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap'
                }}>
                  BE THE FIRST TO KNOW
                </span>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-soft-blush, #F5E2E6)', marginLeft: '0.85rem' }}></div>
              </div>

              {/* Notify Button & Subtext */}
              <div>
                <button 
                  onClick={() => handleOpenNotify('Sanitary Pads - Product Showcase')}
                  className="btn btn-primary"
                  style={{ 
                    width: '100%',
                    padding: '0.85rem 1.75rem',
                    fontSize: '0.94rem',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.55rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(73, 53, 79, 0.15)'
                  }}
                >
                  <Bell size={16} /> NOTIFY ME WHEN IT LAUNCHES
                </button>
                <div style={{ marginTop: '0.5rem', fontSize: '0.82rem', color: 'var(--text-light, #8E7A93)', textAlign: 'center' }}>
                  Join the VIP waitlist for launch updates & exclusive offers.
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURES & BENEFITS SECTION (Clean & Elegant)
          ========================================================================= */}
      <section 
        id="features-benefits" 
        style={{ 
          backgroundColor: '#FFF9F5', 
          position: 'relative', 
          overflow: 'hidden', 
          padding: '3rem 0',
          scrollMarginTop: '85px',
          borderBottom: '1px solid rgba(229, 213, 219, 0.7)'
        }}
      >
        <div className="container" style={{ maxWidth: '1120px', padding: '0 clamp(1rem, 3.5vw, 1.5rem)' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#FAF0F3',
              border: '1px solid rgba(179, 94, 117, 0.3)',
              padding: '0.28rem 0.95rem',
              borderRadius: '999px',
              marginBottom: '0.5rem'
            }}>
              <span style={{ 
                fontSize: '0.74rem', 
                fontWeight: '800', 
                letterSpacing: '0.14em', 
                color: '#8A3B52', 
                textTransform: 'uppercase' 
              }}>
                FEATURES & BENEFITS
              </span>
            </div>

            <h2 style={{ 
              fontSize: 'clamp(2rem, 3.8vw, 2.55rem)', 
              fontWeight: '700', 
              fontFamily: 'var(--font-heading)',
              color: '#2A1A2C', 
              marginBottom: '0.35rem',
              lineHeight: 1.2
            }}>
              Why Sofnest Sanitary Pads?
            </h2>

            <p style={{ 
              fontSize: '1.05rem', 
              fontWeight: '600', 
              color: '#5A445C', 
              margin: '0 auto',
              maxWidth: '540px',
              lineHeight: 1.45
            }}>
              Comfort designed around your flow, your feel, and your day.
            </p>
          </div>

          <div className="sanitary-features-grid">
            {[
              {
                icon: Feather,
                title: 'Dual Surface Feel',
                desc: 'Cotton Soft soothing gentleness or Dry Net fresh surface.'
              },
              {
                icon: Layers,
                title: 'Maxi & Ultra Thin',
                desc: 'Cushioned fullness or ultra-thin discreet comfort.'
              },
              {
                icon: ShieldCheck,
                title: '3 Length Options',
                desc: '280mm, 320mm & 360mm daytime to overnight care.'
              },
              {
                icon: Heart,
                title: '0% Toxins & Chlorine',
                desc: 'Dermatologically gentle, fragrance & chlorine-free.'
              }
            ].map((card, i) => {
              const IconComp = card.icon;
              return (
                <div key={i} className="sanitary-feature-card">
                  <div className="sanitary-feature-icon-wrapper">
                    <IconComp size={20} style={{ color: 'var(--color-dusty-rose, #A97887)' }} />
                  </div>
                  <h3 style={{ fontSize: '1.12rem', color: 'var(--color-deep-plum, #49354F)', marginBottom: '0.35rem' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary, #6B5570)', lineHeight: 1.5, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHILE YOU WAIT (Link to Panty Liners)
          ========================================================================= */}
      <section className="section-padding" style={{ backgroundColor: '#FAF0F3', textAlign: 'center', borderBottom: '1px solid rgba(138, 59, 82, 0.1)' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <span className="section-tag" style={{ color: 'var(--color-dusty-rose, #A97887)' }}>
            AVAILABLE NOW
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', color: 'var(--color-deep-plum, #49354F)', marginTop: '0.4rem', marginBottom: '0.75rem' }}>
            Explore Sofnest Panty Liners
          </h2>
          <p style={{ color: 'var(--text-secondary, #6B5570)', fontSize: '1.02rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            Looking for daily discharge freshness or light backup right now? Discover our 155mm & 180mm Panty Liners.
          </p>
          <Link 
            href="/products/panty-liners" 
            className="btn btn-primary"
            style={{ 
              borderRadius: '9999px',
              padding: '0.8rem 2rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 6px 18px rgba(73, 53, 79, 0.12)'
            }}
          >
            EXPLORE PANTY LINERS <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          FAQS SECTION (Matching Panty Liners Product Details & Care Dropdown Design)
          ========================================================================= */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', padding: '4rem 0 5rem' }}>
        <div className="container" style={{ maxWidth: '920px' }}>
          <div className="section-header" style={{ marginBottom: '2.75rem', textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#FAF0F3',
              border: '1px solid rgba(179, 94, 117, 0.3)',
              padding: '0.28rem 0.95rem',
              borderRadius: '999px',
              marginBottom: '0.5rem'
            }}>
              <span style={{ 
                fontSize: '0.74rem', 
                fontWeight: '800', 
                letterSpacing: '0.14em', 
                color: '#8A3B52', 
                textTransform: 'uppercase' 
              }}>
                GOT QUESTIONS?
              </span>
            </div>

            <h2 style={{ 
              fontSize: 'clamp(2rem, 3.8vw, 2.55rem)', 
              fontWeight: '700', 
              fontFamily: 'var(--font-heading)',
              color: '#2A1A2C', 
              marginBottom: '0.35rem',
              lineHeight: 1.2
            }}>
              Frequently Asked Questions
            </h2>
          </div>

          {/* Minimalist Line Divider Accordion List matching Panty Liners */}
          <div style={{ borderTop: '1.5px solid #E2D1D8' }}>
            {faqItems.map((item, idx) => {
              const isFaqOpen = !!openFaqs[idx];
              return (
                <div 
                  key={idx}
                  style={{
                    borderBottom: '1.5px solid #E2D1D8',
                    transition: 'background-color 0.2s ease'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isFaqOpen}
                    style={{
                      width: '100%',
                      padding: '1.35rem 0.6rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      outline: 'none',
                      gap: '1rem'
                    }}
                  >
                    <span style={{
                      fontSize: '1.16rem',
                      fontWeight: '700',
                      color: isFaqOpen ? '#8A3B52' : '#231826',
                      letterSpacing: '-0.01em',
                      transition: 'color 0.2s ease',
                      lineHeight: 1.35
                    }}>
                      {item.q}
                    </span>

                    <div style={{
                      color: isFaqOpen ? '#8A3B52' : '#5A4654',
                      transition: 'transform 0.25s ease, color 0.2s ease',
                      transform: isFaqOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginLeft: '1rem'
                    }}>
                      <ChevronDown size={22} strokeWidth={2.4} />
                    </div>
                  </button>

                  {isFaqOpen && (
                    <div style={{
                      padding: '0 0.5rem 1.65rem 0.6rem',
                      fontSize: '0.94rem',
                      lineHeight: 1.65,
                      color: '#475569',
                      animation: 'fadeIn 0.25s ease'
                    }}>
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.75rem' }}>
            <Link 
              href="/faq" 
              style={{ 
                color: 'var(--color-dusty-rose, #A97887)', 
                fontWeight: '700', 
                fontSize: '0.92rem', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.4rem',
                textDecoration: 'none'
              }}
            >
              Have more questions? View full FAQ center <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
