'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CottonFluffIcon } from '../../../components/CottonElements';
import Product3DShowcase155 from '../../../components/Product3DShowcase155';
import SEO from '../../../components/SEO';
import ProductAccordionSection from '../../../components/ProductAccordionSection';
import SizeGuideModal from '../../../components/SizeGuideModal';

export default function PantyLinersPage() {
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartXRef = useRef(null);

  const productImages = [
    {
      src: '/Pentyliner%20icons/Hero%20image.png',
      alt: 'Sofnest Standard Panty Liners 50 Pack Hero Image'
    },
    {
      src: '/Pentyliner%20icons/Second.png',
      alt: 'Sofnest Standard Panty Liners Feature Showcase'
    },
    {
      src: '/Pentyliner%20icons/Third.png',
      alt: 'Sofnest Standard Panty Liners Comfort & Breathability'
    },
    {
      src: '/Pentyliner%20icons/Fourth.png',
      alt: 'Sofnest Standard Panty Liners Daily Freshness & Hygiene'
    }
  ];

  // Auto-rotate photos every 3 seconds (pauses when user hovers)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev < productImages.length - 1 ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered, productImages.length]);

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      // Swiped left -> Next
      setActiveImageIndex((prev) => (prev < productImages.length - 1 ? prev + 1 : 0));
    } else if (diff < -45) {
      // Swiped right -> Prev
      setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : productImages.length - 1));
    }
    touchStartXRef.current = null;
  };

  const schemas = [
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Sofnest Standard Panty Liners",
      "image": [
        "https://sofnest.in/Pentyliner%20icons/Hero%20image.png",
        "https://sofnest.in/Pentyliner%20icons/Second.png",
        "https://sofnest.in/Pentyliner%20icons/Third.png",
        "https://sofnest.in/Pentyliner%20icons/Fourth.png"
      ],
      "description": "Ultra-thin, cottony-soft panty liners designed for daily discharge protection, non-period moisture, and light spotting. Available in Regular 155mm & Long 180mm.",
      "sku": "SOF-PL-50P",
      "brand": {
        "@type": "Brand",
        "name": "Sofnest"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://sofnest.in/products/panty-liners",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sofnest.in" },
        { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://sofnest.in/products" },
        { "@type": "ListItem", "position": 3, "name": "Panty Liners", "item": "https://sofnest.in/products/panty-liners" }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-page)' }}>
      <SEO 
        title="Sofnest Standard Panty Liners | Regular 155mm & Long 180mm"
        description="Buy Sofnest Standard Panty Liners (50 Liners Pack). Ultra-thin, cottony-soft daily discharge protection for non-period days. Breathable comfort all day long."
        canonical="/products/panty-liners"
        keywords="panty liners, 155mm panty liners, 180mm panty liners, regular panty liners, daily panty liner 50 pack, cottony soft liner, discharge liners, breathable panty liners"
        schema={schemas}
      />

      {/* Product Hero Details Section (Side-by-Side Interactive Gallery Design) */}
      <section 
        data-header-bg="#FFF9F5" 
        data-header-theme="light"
        style={{ 
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF9F5 40%, #FAF0F3 100%)', 
          padding: '2.25rem 0 2.5rem 0', 
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
            {/* Left: Interactive Side-by-Side Product Image Gallery */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', width: '100%', maxWidth: '520px' }}>
                
                {/* Main Slider Viewport */}
                <div 
                  style={{
                    position: 'relative',
                    borderRadius: '22px',
                    overflow: 'hidden',
                    boxShadow: '0 18px 42px -12px rgba(74, 25, 44, 0.14)',
                    border: '1px solid rgba(229, 213, 219, 0.85)',
                    backgroundColor: '#FAF0F3',
                    aspectRatio: '1448 / 1086',
                    width: '100%',
                    maxHeight: '400px',
                    userSelect: 'none'
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Sliding Track */}
                  <div style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    transform: `translateX(-${activeImageIndex * 100}%)`,
                    transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                    willChange: 'transform'
                  }}>
                    {productImages.map((img, idx) => (
                      <div 
                        key={idx} 
                        style={{ 
                          minWidth: '100%', 
                          width: '100%', 
                          height: '100%', 
                          flexShrink: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#FAF0F3'
                        }}
                      >
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            pointerEvents: 'none'
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Sleek Ultra-Transparent Left Arrow Button */}
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : productImages.length - 1))}
                    aria-label="Previous image"
                    style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.35)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.65)',
                      color: 'var(--color-deep-plum, #49354F)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 10px rgba(73, 53, 79, 0.08)',
                      transition: 'all 0.25s ease',
                      zIndex: 3
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(73, 53, 79, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.35)';
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                      e.currentTarget.style.boxShadow = '0 2px 10px rgba(73, 53, 79, 0.08)';
                    }}
                  >
                    <ChevronLeft size={19} strokeWidth={2.4} />
                  </button>

                  {/* Sleek Ultra-Transparent Right Arrow Button */}
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev < productImages.length - 1 ? prev + 1 : 0))}
                    aria-label="Next image"
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.35)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.65)',
                      color: 'var(--color-deep-plum, #49354F)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 10px rgba(73, 53, 79, 0.08)',
                      transition: 'all 0.25s ease',
                      zIndex: 3
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(73, 53, 79, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.35)';
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                      e.currentTarget.style.boxShadow = '0 2px 10px rgba(73, 53, 79, 0.08)';
                    }}
                  >
                    <ChevronRight size={19} strokeWidth={2.4} />
                  </button>

                  {/* Slide Counter Badge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '14px',
                    backgroundColor: 'rgba(73, 53, 79, 0.72)',
                    backdropFilter: 'blur(6px)',
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '20px',
                    letterSpacing: '0.04em',
                    zIndex: 2
                  }}>
                    {activeImageIndex + 1} / {productImages.length}
                  </div>
                </div>

                {/* Side-by-Side Clickable Thumbnail Previews (Compact & Centered) */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.5rem',
                  width: '100%',
                  marginTop: '-0.1rem'
                }}>
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`View photo ${idx + 1}`}
                      style={{
                        width: '64px',
                        height: '48px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        border: activeImageIndex === idx 
                          ? '2px solid var(--color-dusty-rose, #A97887)' 
                          : '1px solid rgba(229, 213, 219, 0.8)',
                        boxShadow: activeImageIndex === idx 
                          ? '0 3px 10px rgba(169, 120, 135, 0.35)' 
                          : 'none',
                        opacity: activeImageIndex === idx ? 1 : 0.55,
                        transform: activeImageIndex === idx ? 'scale(1.05)' : 'scale(1)',
                        transition: 'all 0.25s ease',
                        padding: 0,
                        backgroundColor: '#FAF0F3',
                        cursor: 'pointer',
                        flexShrink: 0
                      }}
                      onMouseEnter={(e) => {
                        if (activeImageIndex !== idx) e.currentTarget.style.opacity = '0.9';
                      }}
                      onMouseLeave={(e) => {
                        if (activeImageIndex !== idx) e.currentTarget.style.opacity = '0.55';
                      }}
                    >
                      <img 
                        src={img.src} 
                        alt={`Thumbnail ${idx + 1}`} 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    </button>
                  ))}
                </div>

              </div>
            </div>

            {/* Right: Product Information & Purchase Options */}
            <div>
              {/* Everyday Standard Label with horizontal line */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.45rem' }}>
                <span style={{ 
                  fontSize: 'clamp(0.85rem, 2.2vw, 0.92rem)', 
                  fontWeight: '800', 
                  letterSpacing: '0.14em', 
                  color: 'var(--color-dusty-rose, #A97887)', 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap'
                }}>
                  EVERYDAY STANDARD
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
                  <span>Sofnest Standard Panty Liners</span>
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

              {/* 5 Key Feature Icons in a Grid */}
              <div className="product-hero-features-grid">
                {/* Feature 1: Ultra Thin */}
                <div className="product-feature-item">
                  <div className="product-feature-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-deep-plum, #49354F)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                    </svg>
                  </div>
                  <span className="product-feature-label">
                    Ultra Thin
                  </span>
                </div>

                {/* Feature 2: Cottony Soft */}
                <div className="product-feature-item">
                  <div className="product-feature-circle">
                    <CottonFluffIcon size={20} color="var(--color-deep-plum, #49354F)" />
                  </div>
                  <span className="product-feature-label">
                    Cottony Soft
                  </span>
                </div>

                {/* Feature 3: Breathable */}
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

                {/* Feature 4: Flexible Fit */}
                <div className="product-feature-item">
                  <div className="product-feature-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-deep-plum, #49354F)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6"/>
                      <path d="M9 21H3v-6"/>
                      <path d="M21 3l-7 7"/>
                      <path d="M3 21l7-7"/>
                    </svg>
                  </div>
                  <span className="product-feature-label">
                    Flexible Fit
                  </span>
                </div>

                {/* Feature 5: Secure Adhesive */}
                <div className="product-feature-item">
                  <div className="product-feature-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-deep-plum, #49354F)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <span className="product-feature-label">
                    Secure Adhesive
                  </span>
                </div>
              </div>

              {/* AVAILABLE SIZES Section Tag with Horizontal Rule & Size Guide Trigger */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flex: 1 }}>
                  <span style={{ 
                    fontSize: 'clamp(0.85rem, 2.2vw, 0.92rem)', 
                    fontWeight: '800', 
                    letterSpacing: '0.12em', 
                    color: 'var(--color-dusty-rose, #A97887)', 
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}>
                    AVAILABLE SIZES
                  </span>
                  <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-soft-blush, #F5E2E6)' }}></div>
                </div>

                {/* Clickable Size Guide Link */}
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  type="button"
                  aria-label="Open size guide comparison popup"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '0 0 0 0.85rem',
                    color: 'var(--color-dusty-rose, #A97887)',
                    fontSize: 'clamp(0.88rem, 2.2vw, 0.95rem)',
                    fontWeight: '700',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-deep-plum, #49354F)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-dusty-rose, #A97887)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Size Guide
                </button>
              </div>

              {/* Simple Text Sizes Display */}
              <div className="product-sizes-row">
                <div className="product-size-badge">
                  <span className="product-size-name">
                    Regular 155 mm
                  </span>
                </div>

                <span className="product-size-bullet">•</span>

                <div className="product-size-badge">
                  <span className="product-size-name">
                    Long 180 mm
                  </span>
                </div>
              </div>

              {/* BUY FROM YOUR FAVOURITE PLATFORM Section Tag */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ 
                  fontSize: 'clamp(0.85rem, 2.2vw, 0.92rem)', 
                  fontWeight: '800', 
                  letterSpacing: '0.12em', 
                  color: 'var(--color-dusty-rose, #A97887)', 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap'
                }}>
                  BUY FROM YOUR FAVOURITE PLATFORM
                </span>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-soft-blush, #F5E2E6)', marginLeft: '0.85rem' }}></div>
              </div>

              {/* 3 Marketplace Cards Row */}
              <div className="marketplace-buttons-grid">
                {/* Amazon Button */}
                <a 
                  href="https://www.amazon.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Buy on Amazon"
                  className="marketplace-btn"
                >
                  <img 
                    src="/Marketplace%20icons/amazon-clean.png" 
                    alt="Amazon" 
                    style={{ height: '24px', maxWidth: '95px', objectFit: 'contain', display: 'block' }} 
                  />
                </a>

                {/* Flipkart Button */}
                <a 
                  href="https://www.flipkart.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Buy on Flipkart"
                  className="marketplace-btn"
                >
                  <img 
                    src="/Marketplace%20icons/flipkart-clean.png" 
                    alt="Flipkart" 
                    style={{ height: '24px', maxWidth: '95px', objectFit: 'contain', display: 'block' }} 
                  />
                </a>

                {/* Meesho Button */}
                <a 
                  href="https://www.meesho.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Buy on Meesho"
                  className="marketplace-btn"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <img 
                      src="/Marketplace%20icons/meesho-clean.png" 
                      alt="Meesho" 
                      style={{ height: '24px', width: '24px', objectFit: 'contain', display: 'block', borderRadius: '4px' }} 
                    />
                    <span style={{ fontWeight: '800', fontSize: '1rem', color: '#572249', letterSpacing: '-0.02em' }}>
                      meesho
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights & 3D Interactive Showcase */}
      <section 
        id="features-benefits" 
        style={{ 
          backgroundColor: '#FFF9F5', 
          position: 'relative', 
          overflow: 'hidden', 
          padding: '2.5rem 0',
          scrollMarginTop: '85px'
        }}
      >
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
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
              Why Sofnest Standard Panty Liner?
            </h2>

            <p style={{ 
              fontSize: '1.05rem', 
              fontWeight: '600', 
              color: '#5A445C', 
              margin: '0 auto',
              maxWidth: '520px',
              lineHeight: 1.45
            }}>
              Comfort that fits your everyday routine.
            </p>
          </div>

          <Product3DShowcase155 />
        </div>
      </section>

      {/* Product Detail & Use Cases Accordion Section */}
      <ProductAccordionSection 
        productSize="155mm"
        productName="Sofnest Standard Panty Liners (155mm & 180mm)"
        lengthText="Regular 155 mm & Long 180 mm"
        packCountText="50 Liners"
      />

      {/* Interactive Size Guide Modal Popup */}
      <SizeGuideModal 
        isOpen={isSizeGuideOpen} 
        onClose={() => setIsSizeGuideOpen(false)} 
      />
    </div>
  );
}
