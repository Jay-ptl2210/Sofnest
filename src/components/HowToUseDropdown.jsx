'use client';

import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { PeelIllustration, PlaceIllustration, PressIllustration } from './HowToUseIllustrations';

export default function HowToUseDropdown({ 
  defaultOpen = true, 
  title = "How to Use Sofnest Panty Liners",
  subtitle = "Simple 3-step guide: PEEL → PLACE → PRESS"
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [activeTab, setActiveTab] = useState('use'); // 'use' | 'dispose'

  return (
    <section className="section-padding" style={{ padding: '2.5rem 0 3.5rem', backgroundColor: 'var(--bg-page)' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          border: '1.5px solid #E9D5FF',
          boxShadow: '0 10px 30px rgba(107, 33, 168, 0.06)',
          overflow: 'hidden',
          transition: 'all 0.3s ease'
        }}>
          {/* FAQ-Style Accordion Header */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            style={{
              width: '100%',
              backgroundColor: isOpen ? '#FAF5FF' : '#FFFFFF',
              padding: '1.4rem 1.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              border: 'none',
              borderBottom: isOpen ? '1.5px solid #E9D5FF' : 'none',
              textAlign: 'left',
              transition: 'background-color 0.25s ease',
              outline: 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: '#EDE9FE',
                color: '#4C1D95',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(76, 29, 149, 0.1)'
              }}>
                <Sparkles size={22} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
                  <span style={{
                    backgroundColor: '#EDE9FE',
                    color: '#4C1D95',
                    padding: '0.2rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontWeight: '800',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                  }}>
                    HOW TO USE
                  </span>
                  <span style={{
                    fontSize: '0.8rem',
                    color: '#6B21A8',
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    fontWeight: '600'
                  }}>
                    Small Steps. Big Comfort.
                  </span>
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'var(--navy-deep)',
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  {title}
                </h3>
              </div>
            </div>

            {/* Expand / Collapse Chevron Icon */}
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: isOpen ? '#EDE9FE' : '#F8FAFC',
              color: '#4C1D95',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              flexShrink: 0,
              marginLeft: '0.75rem'
            }}>
              <ChevronDown size={20} />
            </div>
          </button>

          {/* Accordion Dropdown Content Body */}
          {isOpen && (
            <div style={{ padding: '2rem 1.75rem', animation: 'fadeIn 0.3s ease' }}>
              {/* Tab Selector for Usage / Disposal */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <button
                  onClick={() => setActiveTab('use')}
                  style={{
                    padding: '0.45rem 1.25rem',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: activeTab === 'use' ? '1.5px solid #4C1D95' : '1px solid #E2E8F0',
                    backgroundColor: activeTab === 'use' ? '#4C1D95' : '#FFFFFF',
                    color: activeTab === 'use' ? '#FFFFFF' : '#4C1D95'
                  }}
                >
                  Step-by-Step Usage Guide
                </button>
                <button
                  onClick={() => setActiveTab('dispose')}
                  style={{
                    padding: '0.45rem 1.25rem',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: activeTab === 'dispose' ? '1.5px solid #4C1D95' : '1px solid #E2E8F0',
                    backgroundColor: activeTab === 'dispose' ? '#4C1D95' : '#FFFFFF',
                    color: activeTab === 'dispose' ? '#FFFFFF' : '#4C1D95'
                  }}
                >
                  Disposal & Daily Hygiene Tips
                </button>
              </div>

              {activeTab === 'use' ? (
                /* 3-Step Visual Guide */
                <div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '1.5rem',
                    textAlign: 'center'
                  }}>
                    {/* Step 1: PEEL */}
                    <div style={{
                      backgroundColor: '#FFF9F5',
                      borderRadius: '16px',
                      padding: '1.5rem 1.2rem',
                      border: '1px solid rgba(229, 213, 219, 0.85)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                        <span style={{
                          backgroundColor: '#8A3B52',
                          color: '#FFFFFF',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '700',
                          fontSize: '0.8rem'
                        }}>1</span>
                        <span style={{
                          backgroundColor: '#FAF0F3',
                          color: '#8A3B52',
                          padding: '0.2rem 0.75rem',
                          borderRadius: '9999px',
                          fontWeight: '800',
                          fontSize: '0.82rem',
                          letterSpacing: '0.06em'
                        }}>PEEL</span>
                      </div>

                      <div style={{ marginBottom: '0.75rem', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <PeelIllustration size={105} />
                      </div>

                      <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#2A1A2C', marginBottom: '0.35rem' }}>
                        Peel Release Paper
                      </h4>
                      <p style={{ color: '#665569', fontSize: '0.88rem', lineHeight: 1.45, margin: 0 }}>
                        Peel away the release paper from the adhesive side of the liner.
                      </p>
                    </div>

                    {/* Step 2: PLACE */}
                    <div style={{
                      backgroundColor: '#FFF9F5',
                      borderRadius: '16px',
                      padding: '1.5rem 1.2rem',
                      border: '1px solid rgba(229, 213, 219, 0.85)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                        <span style={{
                          backgroundColor: '#8A3B52',
                          color: '#FFFFFF',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '700',
                          fontSize: '0.8rem'
                        }}>2</span>
                        <span style={{
                          backgroundColor: '#FAF0F3',
                          color: '#8A3B52',
                          padding: '0.2rem 0.75rem',
                          borderRadius: '9999px',
                          fontWeight: '800',
                          fontSize: '0.82rem',
                          letterSpacing: '0.06em'
                        }}>PLACE</span>
                      </div>

                      <div style={{ marginBottom: '0.75rem', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <PlaceIllustration size={105} />
                      </div>

                      <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#2A1A2C', marginBottom: '0.35rem' }}>
                        Center in Underwear
                      </h4>
                      <p style={{ color: '#665569', fontSize: '0.88rem', lineHeight: 1.45, margin: 0 }}>
                        Place the liner securely along the centre gusset of your underwear.
                      </p>
                    </div>

                    {/* Step 3: PRESS */}
                    <div style={{
                      backgroundColor: '#FFF9F5',
                      borderRadius: '16px',
                      padding: '1.5rem 1.2rem',
                      border: '1px solid rgba(229, 213, 219, 0.85)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                        <span style={{
                          backgroundColor: '#8A3B52',
                          color: '#FFFFFF',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '700',
                          fontSize: '0.8rem'
                        }}>3</span>
                        <span style={{
                          backgroundColor: '#FAF0F3',
                          color: '#8A3B52',
                          padding: '0.2rem 0.75rem',
                          borderRadius: '9999px',
                          fontWeight: '800',
                          fontSize: '0.82rem',
                          letterSpacing: '0.06em'
                        }}>PRESS</span>
                      </div>

                      <div style={{ marginBottom: '0.75rem', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <PressIllustration size={105} />
                      </div>

                      <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#2A1A2C', marginBottom: '0.35rem' }}>
                        Press Gently for Fit
                      </h4>
                      <p style={{ color: '#665569', fontSize: '0.88rem', lineHeight: 1.45, margin: 0 }}>
                        Press gently across the length for a secure, zero-bunching comfortable fit.
                      </p>
                    </div>
                  </div>

                  {/* Pro Tip Box */}
                  <div style={{
                    marginTop: '1.5rem',
                    backgroundColor: '#FAF0F3',
                    borderRadius: '14px',
                    padding: '0.9rem 1.25rem',
                    border: '1px solid rgba(138, 59, 82, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <CheckCircle2 size={20} style={{ color: '#8A3B52', flexShrink: 0 }} />
                    <p style={{ fontSize: '0.88rem', color: '#2A1A2C', margin: 0, lineHeight: 1.45 }}>
                      <strong>Hygiene Tip:</strong> For best freshness and skin breathability, change your liner every <strong>4 to 6 hours</strong> or immediately following workout sessions.
                    </p>
                  </div>
                </div>
              ) : (
                /* Disposal & Hygiene Tips */
                <div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '1.25rem'
                  }}>
                    <div style={{
                      backgroundColor: '#FFF9F5',
                      borderRadius: '16px',
                      padding: '1.25rem',
                      border: '1px solid rgba(229, 213, 219, 0.85)'
                    }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: '#8A3B52',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '700',
                        fontSize: '0.85rem',
                        marginBottom: '0.75rem'
                      }}>
                        1
                      </div>
                      <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#2A1A2C', marginBottom: '0.35rem' }}>
                        Wrap It Securely
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: '#665569', margin: 0, lineHeight: 1.45 }}>
                        Roll or fold the used panty liner and wrap it in the wrapper or a piece of paper.
                      </p>
                    </div>

                    <div style={{
                      backgroundColor: '#FFF9F5',
                      borderRadius: '16px',
                      padding: '1.25rem',
                      border: '1px solid rgba(229, 213, 219, 0.85)'
                    }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: '#8A3B52',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '700',
                        fontSize: '0.85rem',
                        marginBottom: '0.75rem'
                      }}>
                        2
                      </div>
                      <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#2A1A2C', marginBottom: '0.35rem' }}>
                        Dispose in Waste Bin
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: '#665569', margin: 0, lineHeight: 1.45 }}>
                        Always discard the wrapped liner into a sanitary waste bin.
                      </p>
                    </div>

                    <div style={{
                      backgroundColor: '#FFF1F2',
                      borderRadius: '16px',
                      padding: '1.25rem',
                      border: '1px solid #FECDD3'
                    }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: '#BE123C',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '700',
                        fontSize: '0.85rem',
                        marginBottom: '0.75rem'
                      }}>
                        ✕
                      </div>
                      <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#9F1239', marginBottom: '0.35rem' }}>
                        Do Not Flush
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: '#881337', margin: 0, lineHeight: 1.45 }}>
                        Never flush panty liners down the toilet to avoid plumbing blockage and protect the environment.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
