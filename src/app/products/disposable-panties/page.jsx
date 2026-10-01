'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Bell, 
  ArrowRight, 
  Sparkles, 
  Feather, 
  ShieldCheck, 
  Heart, 
  ChevronDown, 
  Plane, 
  Building2, 
  Sparkle,
  SparkleIcon,
  Smile
} from 'lucide-react';
import { CottonFluffIcon } from '../../../components/CottonElements';
import SEO from '../../../components/SEO';
import { useModal } from '../../../context/ModalContext';

export default function DisposablePantiesPage({ onOpenNotify }) {
  const modalContext = useModal();
  const handleOpenNotify = onOpenNotify || modalContext.openNotify;

  // FAQ Accordion State (first item open by default)
  const [openFaqs, setOpenFaqs] = useState({ 0: true });

  const toggleFaq = (idx) => {
    setOpenFaqs(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const faqItems = [
    {
      q: 'What are Sofnest Disposable Panties used for?',
      a: 'Sofnest Disposable Panties are lightweight, hygienic single-use cotton underwear designed for travel, vacations, hospital stays, maternity recovery, spa/salon visits, and active routines—allowing you to simply wear and throw away without any laundry hassle.'
    },
    {
      q: 'Can I wear these during my periods with sanitary pads?',
      a: 'Yes! These are regular-use disposable panties designed for maximum everyday comfort. While they do not have a built-in heavy period pad, you can comfortably wear your regular Sofnest sanitary pads or panty liners with them.'
    },
    {
      q: 'Are they hygienic, safe, and breathable for sensitive skin?',
      a: 'Absolutely. Each panty is crafted from 100% pure combed cotton, treated with anti-bacterial protection, and individually sterilized in single-pack pouches to ensure 100% germ-free, rash-free intimate hygiene.'
    },
    {
      q: 'Will the elastic waistband leave marks on my skin?',
      a: 'No. Sofnest Disposable Panties feature a gentle, high-stretch comfort waistband and soft leg cuffs designed to give you a secure, no-ride fit all day without pinching or leaving red marks.'
    },
    {
      q: 'What sizes will be available?',
      a: 'They will be available in 5 sizes: S, M, L, XL, and XXL, designed to give a comfortable, flattering fit for all body types.'
    }
  ];

  const schemas = [
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Sofnest Disposable Panties",
      "image": ["https://sofnest.in/Disposable%20panti%20icons/disposable-panties-3d-box.jpg"],
      "description": "100% pure combed cotton disposable panties for women. Lightweight, hygienic, wear & throw single-use underwear for travel, maternity, hospital stays, and daily convenience. Sizes S to XXL.",
      "sku": "SOF-DP-COT",
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
        { "@type": "ListItem", "position": 3, "name": "Disposable Panties", "item": "https://sofnest.in/products/disposable-panties" }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-page)' }}>
      <SEO 
        title="Sofnest Disposable Panties (Coming Soon) | 100% Cotton Travel & Maternity Underwear"
        description="Lightweight. Hygienic. Wear & Throw! Sofnest 100% pure combed cotton disposable panties for women. Individually sterilized single-packs for travel, hospital stays, and maternity convenience. Sizes S-XXL."
        canonical="/products/disposable-panties"
        keywords="disposable panties, travel disposable underwear, cotton disposable panties, maternity disposable underwear, hospital panties women, single use underwear india"
        schema={schemas}
      />

      {/* =========================================================================
          PRODUCT HERO DETAILS SECTION (Matching Brand Showcase Layout)
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
                  src="/Disposable%20panti%20icons/disposable-panties-3d-box.jpg" 
                  alt="Sofnest Disposable Panties 3D Box Mockup" 
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
                  CONVENIENCE CARE • COMING SOON
                </span>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-soft-blush, #F5E2E6)', marginLeft: '0.85rem' }}></div>
              </div>

              {/* Main Title in 1 Line with Botanical Leaf Accent */}
              <div style={{ marginBottom: '0.5rem' }}>
                <h1 style={{ 
                  fontSize: 'clamp(1.42rem, 5.0vw, 2.35rem)', 
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
                  <span>Sofnest Disposable Panties</span>
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

              {/* 5 Key Feature Icons in the exact Panty Liners grid style */}
              <div className="product-hero-features-grid">
                {/* Feature 1: 100% Cotton */}
                <div className="product-feature-item">
                  <div className="product-feature-circle">
                    <CottonFluffIcon size={20} color="var(--color-deep-plum, #49354F)" />
                  </div>
                  <span className="product-feature-label">
                    100% Cotton
                  </span>
                </div>

                {/* Feature 2: Single Pack */}
                <div className="product-feature-item">
                  <div className="product-feature-circle">
                    <ShieldCheck size={20} color="var(--color-deep-plum, #49354F)" strokeWidth={1.6} />
                  </div>
                  <span className="product-feature-label">
                    Single Pack
                  </span>
                </div>

                {/* Feature 3: Anti-Bacterial */}
                <div className="product-feature-item">
                  <div className="product-feature-circle">
                    <Heart size={20} color="var(--color-deep-plum, #49354F)" strokeWidth={1.6} />
                  </div>
                  <span className="product-feature-label">
                    Anti-Bacterial
                  </span>
                </div>

                {/* Feature 4: Travel Light */}
                <div className="product-feature-item">
                  <div className="product-feature-circle">
                    <Plane size={20} color="var(--color-deep-plum, #49354F)" strokeWidth={1.6} />
                  </div>
                  <span className="product-feature-label">
                    Travel Light
                  </span>
                </div>

                {/* Feature 5: No-Ride Fit */}
                <div className="product-feature-item">
                  <div className="product-feature-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-deep-plum, #49354F)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                    </svg>
                  </div>
                  <span className="product-feature-label">
                    No-Ride Fit
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
                  <span style={{ fontWeight: '700', color: 'var(--color-dusty-rose, #A97887)', minWidth: '70px', flexShrink: 0 }}>Type:</span>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.35rem 0.55rem' }}>
                    <span style={{ fontWeight: '600', backgroundColor: '#FAF0F3', padding: '0.18rem 0.6rem', borderRadius: '6px' }}>Single-Use Disposable</span>
                    <span style={{ color: 'var(--color-dusty-rose, #A97887)', fontWeight: '600' }}>&</span>
                    <span style={{ fontWeight: '600', backgroundColor: '#FAF0F3', padding: '0.18rem 0.6rem', borderRadius: '6px' }}>Wear & Throw</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--color-deep-plum, #49354F)' }}>
                  <span style={{ fontWeight: '700', color: 'var(--color-dusty-rose, #A97887)', minWidth: '70px', flexShrink: 0 }}>Material:</span>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.35rem 0.55rem' }}>
                    <span style={{ fontWeight: '600', backgroundColor: '#FAF0F3', padding: '0.18rem 0.6rem', borderRadius: '6px' }}>100% Pure Combed Cotton</span>
                    <span style={{ color: 'var(--color-dusty-rose, #A97887)', fontWeight: '600' }}>&</span>
                    <span style={{ fontWeight: '600', backgroundColor: '#FAF0F3', padding: '0.18rem 0.6rem', borderRadius: '6px' }}>Breathable Soft</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--color-deep-plum, #49354F)' }}>
                  <span style={{ fontWeight: '700', color: 'var(--color-dusty-rose, #A97887)', minWidth: '70px', flexShrink: 0 }}>Hygiene:</span>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.35rem 0.55rem' }}>
                    <span style={{ fontWeight: '600', backgroundColor: '#FAF0F3', padding: '0.18rem 0.6rem', borderRadius: '6px' }}>Individually Sterilized</span>
                    <span style={{ color: 'var(--color-dusty-rose, #A97887)', fontWeight: '600' }}>&</span>
                    <span style={{ fontWeight: '600', backgroundColor: '#FAF0F3', padding: '0.18rem 0.6rem', borderRadius: '6px' }}>Anti-Bacterial</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--color-deep-plum, #49354F)' }}>
                  <span style={{ fontWeight: '700', color: 'var(--color-dusty-rose, #A97887)', minWidth: '70px', flexShrink: 0, paddingTop: '1px' }}>Sizes:</span>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.35rem 0.55rem' }}>
                    <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>S</span>
                    <span style={{ color: 'var(--color-dusty-rose, #A97887)', opacity: 0.6 }}>•</span>
                    <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>M</span>
                    <span style={{ color: 'var(--color-dusty-rose, #A97887)', opacity: 0.6 }}>•</span>
                    <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>L</span>
                    <span style={{ color: 'var(--color-dusty-rose, #A97887)', opacity: 0.6 }}>•</span>
                    <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>XL</span>
                    <span style={{ color: 'var(--color-dusty-rose, #A97887)', opacity: 0.6 }}>•</span>
                    <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>XXL</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary, #6B5570)', marginLeft: '0.2rem' }}>(Comfort Fit for All Body Types)</span>
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
                  onClick={() => handleOpenNotify('Disposable Panties - Product Showcase')}
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
          FEATURES & BENEFITS / BEST SUITED FOR SECTION (2x2 Grid)
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
              Why Sofnest Disposable Panties?
            </h2>

            <p style={{ 
              fontSize: '1.05rem', 
              fontWeight: '600', 
              color: '#5A445C', 
              margin: '0 auto',
              maxWidth: '540px',
              lineHeight: 1.45
            }}>
              Lightweight. Hygienic. Wear & Throw convenience.
            </p>
          </div>

          <div className="sanitary-features-grid">
            {[
              {
                icon: Plane,
                title: 'Vacations, Trips & Flights',
                desc: 'Travel light with zero laundry. Wear once and discard cleanly.'
              },
              {
                icon: Building2,
                title: 'Hospital & Maternity Stays',
                desc: 'Comfortable, hygienic care for hospital stays & postpartum ease.'
              },
              {
                icon: Sparkles,
                title: 'Spa, Salon & Gym Routine',
                desc: 'Instant fresh change for body massages, spa & post-workout.'
              },
              {
                icon: ShieldCheck,
                title: 'Sterilized & Anti-Bacterial',
                desc: 'Individually wrapped single-packs safe from germs & rashes.'
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

          {/* Minimalist Line Divider Accordion List */}
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
