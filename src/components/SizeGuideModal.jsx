'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function SizeGuideModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      style={{
        zIndex: 9999,
        backgroundColor: 'rgba(42, 26, 44, 0.72)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        position: 'fixed',
        inset: 0
      }}
    >
      <div 
        className="modal-content animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(180deg, #FFF9F5 0%, #FFFFFF 25%)',
          borderRadius: '26px',
          padding: 'clamp(1.5rem, 4vw, 2.35rem)',
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 24px 65px -12px rgba(73, 53, 79, 0.35)',
          position: 'relative',
          border: '1.5px solid rgba(201, 165, 106, 0.35)',
          maxHeight: '92vh',
          overflowY: 'auto'
        }}
      >
        {/* Close Icon Button */}
        <button 
          onClick={onClose}
          aria-label="Close size guide"
          style={{
            position: 'absolute',
            top: '1.15rem',
            right: '1.15rem',
            background: 'var(--color-soft-blush, #F5E2E6)',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-deep-plum, #49354F)',
            padding: '0.45rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 6px rgba(73, 53, 79, 0.08)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-deep-plum, #49354F)';
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-soft-blush, #F5E2E6)';
            e.currentTarget.style.color = 'var(--color-deep-plum, #49354F)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <X size={18} />
        </button>

        {/* Brand Tagline Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem', paddingRight: '0.75rem', paddingLeft: '0.75rem' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.35rem', 
            marginBottom: '0.35rem',
            backgroundColor: 'var(--color-soft-blush, #F5E2E6)',
            padding: '0.2rem 0.75rem',
            borderRadius: '999px'
          }}>
            <span style={{ 
              fontSize: '0.7rem', 
              fontWeight: '800', 
              letterSpacing: '0.12em', 
              color: 'var(--color-dusty-rose, #A97887)', 
              textTransform: 'uppercase' 
            }}>
              SOFNEST FIT GUIDE
            </span>
          </div>

          <h3 style={{ 
            fontSize: 'clamp(1.35rem, 2.8vw, 1.75rem)', 
            fontWeight: '600', 
            color: 'var(--color-deep-plum, #49354F)',
            margin: '0.25rem 0 0.35rem 0',
            fontFamily: 'var(--font-heading)',
            lineHeight: 1.25
          }}>
            Choose Your <span style={{ fontStyle: 'italic', color: 'var(--color-dusty-rose, #A97887)' }}>Daily Match</span>
          </h3>
          <p style={{ 
            fontSize: '0.85rem', 
            color: 'var(--text-secondary, #6B5570)', 
            lineHeight: 1.45,
            margin: '0 auto',
            maxWidth: '380px'
          }}>
            Two tailored lengths designed for your unique daily flow, underwear style, and comfort.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '1.25rem',
          alignItems: 'flex-start',
          marginBottom: '1.85rem'
        }}>
          {/* Card 1: Regular 155 mm */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center',
            backgroundColor: '#FFFDFB',
            borderRadius: '18px',
            border: '1.5px solid rgba(229, 213, 219, 0.8)',
            padding: '1.15rem 0.75rem',
            boxShadow: '0 4px 12px rgba(73, 53, 79, 0.03)'
          }}>
            {/* Visual Graphic with Bracket */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: '0.65rem',
              height: '150px',
              marginBottom: '0.85rem',
              width: '100%'
            }}>
              {/* Bracket & Dimension Label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <div style={{ 
                  fontSize: '0.72rem', 
                  fontWeight: '700', 
                  color: 'var(--color-deep-plum, #49354F)', 
                  lineHeight: 1.2,
                  textAlign: 'right'
                }}>
                  <div>155 mm</div>
                  <div style={{ color: 'var(--color-dusty-rose, #A97887)', fontSize: '0.64rem', fontWeight: '500' }}>15.5 cm</div>
                </div>
                {/* Clean Bracket line */}
                <div style={{
                  width: '6px',
                  height: '95px',
                  borderTop: '1.5px solid var(--color-dusty-rose, #A97887)',
                  borderBottom: '1.5px solid var(--color-dusty-rose, #A97887)',
                  borderLeft: '1.5px solid var(--color-dusty-rose, #A97887)'
                }}></div>
              </div>

              {/* Sofnest Rose Outline Pad (155mm) */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="44" height="114" viewBox="0 0 46 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M23 4 C12 4 6 12 6 26 C6 40 10 50 10 58 C10 66 6 76 6 90 C6 104 12 112 23 112 C34 112 40 104 40 90 C40 76 36 66 36 58 C36 50 40 40 40 26 C40 12 34 4 23 4 Z" 
                    fill="#FFF6F8" 
                    stroke="#B35E75" 
                    strokeWidth="3.2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h4 style={{ 
              fontSize: '1.15rem', 
              fontWeight: '700', 
              color: 'var(--color-deep-plum, #49354F)', 
              margin: '0 0 0.35rem 0',
              fontFamily: 'var(--font-heading)'
            }}>
              Regular
            </h4>

            {/* Badge */}
            <span style={{
              fontSize: '0.64rem',
              fontWeight: '700',
              color: 'var(--color-dusty-rose, #A97887)',
              letterSpacing: '0.04em',
              marginBottom: '0.45rem',
              textTransform: 'uppercase'
            }}>
              Everyday Freshness
            </span>

            {/* Use Cases */}
            <p style={{ 
              fontSize: '0.8rem', 
              color: 'var(--text-secondary, #6B5570)', 
              lineHeight: 1.45,
              margin: 0
            }}>
              Best for daily vaginal moisture, non-period discharge & all-day clean comfort.
            </p>
          </div>

          {/* Card 2: Long 180 mm */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center',
            backgroundColor: '#FFFDFB',
            borderRadius: '18px',
            border: '1.5px solid rgba(229, 213, 219, 0.8)',
            padding: '1.15rem 0.75rem',
            boxShadow: '0 4px 12px rgba(73, 53, 79, 0.03)'
          }}>
            {/* Visual Graphic with Bracket */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: '0.65rem',
              height: '150px',
              marginBottom: '0.85rem',
              width: '100%'
            }}>
              {/* Bracket & Dimension Label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <div style={{ 
                  fontSize: '0.72rem', 
                  fontWeight: '700', 
                  color: 'var(--color-deep-plum, #49354F)', 
                  lineHeight: 1.2,
                  textAlign: 'right'
                }}>
                  <div>180 mm</div>
                  <div style={{ color: 'var(--color-dusty-rose, #A97887)', fontSize: '0.64rem', fontWeight: '500' }}>18.0 cm</div>
                </div>
                {/* Clean Bracket line */}
                <div style={{
                  width: '6px',
                  height: '124px',
                  borderTop: '1.5px solid var(--color-dusty-rose, #A97887)',
                  borderBottom: '1.5px solid var(--color-dusty-rose, #A97887)',
                  borderLeft: '1.5px solid var(--color-dusty-rose, #A97887)'
                }}></div>
              </div>

              {/* Sofnest Rose Outline Pad (180mm) */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="48" height="138" viewBox="0 0 50 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M25 4 C13 4 7 14 7 32 C7 50 11 60 11 70 C11 80 7 90 7 108 C7 126 13 136 25 136 C37 136 43 126 43 108 C43 90 39 80 39 70 C39 60 43 50 43 32 C43 14 37 4 25 4 Z" 
                    fill="#FFF6F8" 
                    stroke="#B35E75" 
                    strokeWidth="3.2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h4 style={{ 
              fontSize: '1.15rem', 
              fontWeight: '700', 
              color: 'var(--color-deep-plum, #49354F)', 
              margin: '0 0 0.35rem 0',
              fontFamily: 'var(--font-heading)'
            }}>
              Long
            </h4>

            {/* Badge */}
            <span style={{
              fontSize: '0.64rem',
              fontWeight: '700',
              color: 'var(--color-dusty-rose, #A97887)',
              letterSpacing: '0.04em',
              marginBottom: '0.45rem',
              textTransform: 'uppercase'
            }}>
              Extended Fit (+25 mm)
            </span>

            {/* Use Cases */}
            <p style={{ 
              fontSize: '0.8rem', 
              color: 'var(--text-secondary, #6B5570)', 
              lineHeight: 1.45,
              margin: 0
            }}>
              Best for workouts, light period spotting, ovulation moisture & extra back coverage.
            </p>
          </div>
        </div>

        {/* Footer Action Button */}
        <button
          onClick={onClose}
          style={{
            width: '100%',
            backgroundColor: 'var(--color-deep-plum, #49354F)',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '9999px',
            padding: '0.9rem 1.5rem',
            fontSize: '0.98rem',
            fontWeight: '700',
            letterSpacing: '0.03em',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 6px 18px rgba(73, 53, 79, 0.22)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.45rem'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-dusty-rose, #A97887)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 24px rgba(169, 120, 135, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-deep-plum, #49354F)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(73, 53, 79, 0.22)';
          }}
        >
          Got It, Thanks!
        </button>
      </div>
    </div>
  );
}
