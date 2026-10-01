'use client';

import React, { useState } from 'react';
import { 
  ChevronDown, 
  Feather, 
  ShieldCheck, 
  CheckCircle2, 
  Wind,
  Plus,
  Minus
} from 'lucide-react';
import { PeelIllustration, PlaceIllustration, PressIllustration } from './HowToUseIllustrations';

export default function ProductAccordionSection({ 
  productSize = '155mm', 
  productName = 'Sofnest Standard Panty Liners - Regular 155 mm',
  lengthText = '155 mm (Regular Fit)',
  packCountText = '50 Liners'
}) {
  // Allow independent toggling or single accordion - all closed by default
  const [openSections, setOpenSections] = useState({
    'description': false,
    'zero-irritation': false,
    'how-to-use': false,
    'why-sofnest': false,
    'product-info': false,
    'faqs': false
  });

  const toggleSection = (key) => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // State for collapsible FAQ items
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFaq = (idx) => {
    setOpenFaqs(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const faqItems = [
    {
      q: 'What is a panty liner, and how is it different from a sanitary pad?',
      a: 'A panty liner is much thinner, lighter, and flexible than a sanitary pad. Panty liners are designed for daily vaginal discharge, light spotting, ovulation moisture, and workout sweat on non-period days. Sanitary pads are thicker and designed specifically for absorbing menstrual flow.'
    },
    {
      q: 'What is the difference between Regular 155 mm and Long 180 mm panty liners?',
      a: '155 mm Regular is compact and ideal for normal everyday discharge and standard underwear. 180 mm Long gives +25 mm extra length for wider front-to-back coverage, heavier discharge, travel, or light period spotting days.'
    },
    {
      q: 'Can I wear Sofnest Panty Liners every single day?',
      a: 'Yes, absolutely! Sofnest liners are made with 100% dermatologically tested, breathable, and cottony-soft top sheets that allow natural air circulation, preventing moisture build-up, rashes, and bad odor.'
    },
    {
      q: 'How often should I change my panty liner during the day?',
      a: 'For optimal intimate freshness and personal hygiene, we recommend changing your panty liner every 4 to 6 hours, or sooner if you feel moisture after workouts or travel.'
    },
    {
      q: 'Will the panty liner move or bunch up during walking or exercise?',
      a: 'No. Sofnest panty liners feature an edge-to-edge secure adhesive backing that locks firmly onto your underwear gusset, ensuring zero bunching and stay-put comfort all day.'
    },
    {
      q: 'How do I dispose of used panty liners?',
      a: 'Simply roll or wrap the used liner in its wrapper or a piece of paper and discard it in a sanitary waste bin. Never flush panty liners down the toilet.'
    }
  ];

  const sections = [
    {
      id: 'description',
      title: 'Product Description & Use Cases',
      content: (
        <div style={{ paddingTop: '0.35rem', paddingBottom: '0.5rem', color: '#475569' }}>
          {/* Main Short Description */}
          <p style={{ 
            fontSize: '0.94rem', 
            lineHeight: 1.6, 
            color: '#334155', 
            marginBottom: '0.9rem' 
          }}>
            <strong>Sofnest Panty Liners</strong> are ultra-thin (&lt;1 mm) and breathable daily liners designed to keep your underwear fresh, dry, and stain-free with zero bulk or skin irritation.
          </p>

          {/* Quick 4-point concise list */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '0.55rem 1.5rem',
            marginBottom: '0.9rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.88rem', lineHeight: 1.45 }}>
              <span style={{ color: 'var(--color-dusty-rose, #A97887)', fontWeight: 'bold', fontSize: '1rem', lineHeight: 1 }}>•</span>
              <span><strong style={{ color: '#1E293B' }}>Daily Freshness:</strong> Protects against natural discharge & odor.</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.88rem', lineHeight: 1.45 }}>
              <span style={{ color: 'var(--color-dusty-rose, #A97887)', fontWeight: 'bold', fontSize: '1rem', lineHeight: 1 }}>•</span>
              <span><strong style={{ color: '#1E293B' }}>Light Spotting:</strong> Discreet absorbency for ovulation or cycle transitions.</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.88rem', lineHeight: 1.45 }}>
              <span style={{ color: 'var(--color-dusty-rose, #A97887)', fontWeight: 'bold', fontSize: '1rem', lineHeight: 1 }}>•</span>
              <span><strong style={{ color: '#1E293B' }}>Workouts & Travel:</strong> Absorbs sweat during gym, yoga & commute.</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.88rem', lineHeight: 1.45 }}>
              <span style={{ color: 'var(--color-dusty-rose, #A97887)', fontWeight: 'bold', fontSize: '1rem', lineHeight: 1 }}>•</span>
              <span><strong style={{ color: '#1E293B' }}>Backup Security:</strong> Leak protection with tampons or menstrual cups.</span>
            </div>
          </div>

          {/* Compact Size Note */}
          <div style={{
            fontSize: '0.84rem',
            color: '#64748B',
            borderTop: '1px solid #F1E5EB',
            paddingTop: '0.65rem'
          }}>
            <strong style={{ color: 'var(--color-deep-plum, #49354F)' }}>Sizes:</strong> Regular 155 mm (Everyday Fit) • Long 180 mm (+25 mm Extended Coverage)
          </div>
        </div>
      )
    },
    {
      id: 'zero-irritation',
      title: 'Know more about Zero Irritation Promise',
      content: (
        <div style={{ paddingTop: '0.35rem', paddingBottom: '0.5rem', color: '#475569' }}>
          {/* Main Short Promise Intro */}
          <p style={{ 
            fontSize: '0.94rem', 
            lineHeight: 1.6, 
            color: '#334155', 
            marginBottom: '0.9rem' 
          }}>
            Engineered specifically for sensitive intimate skin to guarantee <strong>100% rash-free, non-chafing daily comfort</strong>.
          </p>

          {/* Clean 4-point list */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '0.55rem 1.5rem' 
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.88rem', lineHeight: 1.45 }}>
              <span style={{ color: '#0d6849', fontWeight: 'bold', fontSize: '1rem', lineHeight: 1 }}>✓</span>
              <span><strong style={{ color: '#1E293B' }}>100% Cottony Soft:</strong> Gentle, non-abrasive top sheet for sensitive skin.</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.88rem', lineHeight: 1.45 }}>
              <span style={{ color: '#0d6849', fontWeight: 'bold', fontSize: '1rem', lineHeight: 1 }}>✓</span>
              <span><strong style={{ color: '#1E293B' }}>Breathable Micro-Airflow:</strong> Prevents trapped heat, sweat & bad odor.</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.88rem', lineHeight: 1.45 }}>
              <span style={{ color: '#0d6849', fontWeight: 'bold', fontSize: '1rem', lineHeight: 1 }}>✓</span>
              <span><strong style={{ color: '#1E293B' }}>0% Chlorine & Chemicals:</strong> Zero artificial fragrances, chlorine, or dyes.</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.88rem', lineHeight: 1.45 }}>
              <span style={{ color: '#0d6849', fontWeight: 'bold', fontSize: '1rem', lineHeight: 1 }}>✓</span>
              <span><strong style={{ color: '#1E293B' }}>Ultra-Thin (&lt;1 mm):</strong> Naturally contours with underwear with zero bunching.</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'how-to-use',
      title: 'How to Use',
      content: (
        <div style={{ paddingTop: '0.5rem', paddingBottom: '0.75rem' }}>
          {/* Top Pill & Motto */}
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span style={{
              backgroundColor: '#EDE9FE',
              color: '#4C1D95',
              padding: '0.25rem 0.9rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: '800',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              HOW TO USE
            </span>
            <div style={{
              color: '#6B21A8',
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontSize: '1rem',
              fontWeight: '600',
              marginTop: '0.35rem'
            }}>
              Small Steps. Big Comfort.
            </div>
          </div>

          {/* 3 Step Visual Columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            textAlign: 'center'
          }}>
            {/* Step 1: PEEL */}
            <div style={{
              backgroundColor: '#FAF5FF',
              borderRadius: '16px',
              padding: '1.35rem 1rem',
              border: '1.5px solid #E9D5FF',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem' }}>
                <span style={{
                  backgroundColor: '#4C1D95',
                  color: '#FFFFFF',
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '0.75rem'
                }}>1</span>
                <span style={{
                  backgroundColor: '#EDE9FE',
                  color: '#4C1D95',
                  padding: '0.15rem 0.65rem',
                  borderRadius: '9999px',
                  fontWeight: '800',
                  fontSize: '0.78rem',
                  letterSpacing: '0.05em'
                }}>PEEL</span>
              </div>

              <div style={{ marginBottom: '0.6rem', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PeelIllustration size={95} />
              </div>

              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--navy-deep)', marginBottom: '0.25rem' }}>
                Peel Release Paper
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.4, margin: 0 }}>
                Peel away the release paper from the adhesive side.
              </p>
            </div>

            {/* Step 2: PLACE */}
            <div style={{
              backgroundColor: '#FAF5FF',
              borderRadius: '16px',
              padding: '1.35rem 1rem',
              border: '1.5px solid #E9D5FF',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem' }}>
                <span style={{
                  backgroundColor: '#4C1D95',
                  color: '#FFFFFF',
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '0.75rem'
                }}>2</span>
                <span style={{
                  backgroundColor: '#EDE9FE',
                  color: '#4C1D95',
                  padding: '0.15rem 0.65rem',
                  borderRadius: '9999px',
                  fontWeight: '800',
                  fontSize: '0.78rem',
                  letterSpacing: '0.05em'
                }}>PLACE</span>
              </div>

              <div style={{ marginBottom: '0.6rem', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PlaceIllustration size={95} />
              </div>

              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--navy-deep)', marginBottom: '0.25rem' }}>
                Center in Underwear
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.4, margin: 0 }}>
                Place the liner securely in the centre of your underwear.
              </p>
            </div>

            {/* Step 3: PRESS */}
            <div style={{
              backgroundColor: '#FAF5FF',
              borderRadius: '16px',
              padding: '1.35rem 1rem',
              border: '1.5px solid #E9D5FF',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem' }}>
                <span style={{
                  backgroundColor: '#4C1D95',
                  color: '#FFFFFF',
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '0.75rem'
                }}>3</span>
                <span style={{
                  backgroundColor: '#EDE9FE',
                  color: '#4C1D95',
                  padding: '0.15rem 0.65rem',
                  borderRadius: '9999px',
                  fontWeight: '800',
                  fontSize: '0.78rem',
                  letterSpacing: '0.05em'
                }}>PRESS</span>
              </div>

              <div style={{ marginBottom: '0.6rem', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PressIllustration size={95} />
              </div>

              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--navy-deep)', marginBottom: '0.25rem' }}>
                Press for Fit
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.4, margin: 0 }}>
                Press gently for a secure and comfortable fit.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'why-sofnest',
      title: 'Why Sofnest',
      content: (
        <div style={{ paddingTop: '0.35rem', paddingBottom: '0.5rem', color: '#475569' }}>
          {/* Main Short Intro */}
          <p style={{ 
            fontSize: '0.94rem', 
            lineHeight: 1.6, 
            color: '#334155', 
            marginBottom: '0.9rem' 
          }}>
            Sofnest is reimagining daily intimate wellness with <strong>certified cleanroom manufacturing, BIS compliance, and dermatologically tested safe materials</strong>.
          </p>

          {/* Clean 4-point list including BIS Standard */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '0.55rem 1.5rem' 
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.88rem', lineHeight: 1.45 }}>
              <span style={{ color: '#0d6849', fontWeight: 'bold', fontSize: '1rem', lineHeight: 1 }}>✓</span>
              <span><strong style={{ color: '#1E293B' }}>BIS Standard Compliant:</strong> Formulated in adherence to Bureau of Indian Standards norms.</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.88rem', lineHeight: 1.45 }}>
              <span style={{ color: '#0d6849', fontWeight: 'bold', fontSize: '1rem', lineHeight: 1 }}>✓</span>
              <span><strong style={{ color: '#1E293B' }}>Cleanroom & GMP Certified:</strong> 100% automated, untouched production in ISO cleanroom facilities.</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.88rem', lineHeight: 1.45 }}>
              <span style={{ color: '#0d6849', fontWeight: 'bold', fontSize: '1rem', lineHeight: 1 }}>✓</span>
              <span><strong style={{ color: '#1E293B' }}>Dermatologically Tested:</strong> Hypoallergenic & rash-free for everyday sensitive skin use.</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.88rem', lineHeight: 1.45 }}>
              <span style={{ color: '#0d6849', fontWeight: 'bold', fontSize: '1rem', lineHeight: 1 }}>✓</span>
              <span><strong style={{ color: '#1E293B' }}>Crafted in India:</strong> Purpose-built for Indian climates, daily routines, and active lifestyles.</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'product-info',
      title: 'Product Information',
      content: (
        <div style={{ paddingTop: '0.5rem', paddingBottom: '0.75rem' }}>
          <div style={{ 
            backgroundColor: '#FAF9F6', 
            borderRadius: '16px', 
            border: '1px solid #E2E8F0', 
            overflow: 'hidden' 
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '0.85rem 1.25rem', fontWeight: '700', color: 'var(--navy-deep)', width: '35%' }}>Product Name</td>
                  <td style={{ padding: '0.85rem 1.25rem', color: 'var(--text-secondary)' }}>{productName}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
                  <td style={{ padding: '0.85rem 1.25rem', fontWeight: '700', color: 'var(--navy-deep)' }}>Length & Size</td>
                  <td style={{ padding: '0.85rem 1.25rem', color: 'var(--text-secondary)' }}>{lengthText}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '0.85rem 1.25rem', fontWeight: '700', color: 'var(--navy-deep)' }}>Pack Count</td>
                  <td style={{ padding: '0.85rem 1.25rem', color: 'var(--text-secondary)' }}>{packCountText}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
                  <td style={{ padding: '0.85rem 1.25rem', fontWeight: '700', color: 'var(--navy-deep)' }}>Top Sheet Material</td>
                  <td style={{ padding: '0.85rem 1.25rem', color: 'var(--text-secondary)' }}>100% Cottony Soft Touch</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '0.85rem 1.25rem', fontWeight: '700', color: 'var(--navy-deep)' }}>Profile</td>
                  <td style={{ padding: '0.85rem 1.25rem', color: 'var(--text-secondary)' }}>Ultra Thin & Flexible</td>
                </tr>
                <tr style={{ backgroundColor: '#FFFFFF' }}>
                  <td style={{ padding: '0.85rem 1.25rem', fontWeight: '700', color: 'var(--navy-deep)' }}>Shelf Life</td>
                  <td style={{ padding: '0.85rem 1.25rem', color: 'var(--text-secondary)' }}>36 Months from Date of Manufacturing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'faqs',
      title: 'FAQs',
      content: (
        <div style={{ paddingTop: '0.35rem', paddingBottom: '0.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {faqItems.map((item, idx) => {
              const isFaqOpen = !!openFaqs[idx];
              return (
                <div 
                  key={idx}
                  style={{
                    border: '1px solid rgba(229, 213, 219, 0.8)',
                    borderRadius: '12px',
                    backgroundColor: isFaqOpen ? '#FFF9F5' : '#FFFFFF',
                    transition: 'all 0.2s ease',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '0.95rem 1.15rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      gap: '0.75rem'
                    }}
                  >
                    <span style={{
                      fontSize: '0.94rem',
                      fontWeight: '600',
                      color: isFaqOpen ? 'var(--color-deep-plum, #49354F)' : '#1E293B',
                      lineHeight: 1.4
                    }}>
                      {item.q}
                    </span>

                    <span style={{
                      color: 'var(--color-dusty-rose, #A97887)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      backgroundColor: isFaqOpen ? 'rgba(169, 120, 135, 0.15)' : '#FAF0F3',
                      transition: 'all 0.2s ease'
                    }}>
                      {isFaqOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>

                  {isFaqOpen && (
                    <div style={{
                      padding: '0 1.15rem 1rem 1.15rem',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      color: '#475569',
                      borderTop: '1px solid rgba(229, 213, 219, 0.5)'
                    }}>
                      <div style={{ paddingTop: '0.5rem' }}>
                        {item.a}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#FFFFFF', padding: '4rem 0 5rem' }}>
      <div className="container" style={{ maxWidth: '920px' }}>
        {/* Main Section Heading matching Sofnest brand theme (Dark & Bold) */}
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.35rem', 
            marginBottom: '0.6rem',
            backgroundColor: '#FAF0F3',
            border: '1px solid rgba(179, 94, 117, 0.3)',
            padding: '0.3rem 0.95rem',
            borderRadius: '999px'
          }}>
            <span style={{ 
              fontSize: '0.74rem', 
              fontWeight: '800', 
              letterSpacing: '0.14em', 
              color: '#8A3B52', 
              textTransform: 'uppercase' 
            }}>
              PRODUCT DETAILS & CARE
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: '700',
            fontFamily: 'var(--font-heading)',
            color: '#2A1A2C',
            margin: 0,
            lineHeight: 1.2
          }}>
            Discover every detail,{' '}
            <span style={{ fontStyle: 'italic', color: '#8A3B52', fontWeight: '700' }}>
              crafted for your daily comfort
            </span>
          </h2>
        </div>

        {/* Minimalist Accordion List with Sofnest Divider Borders */}
        <div style={{
          borderTop: '1.5px solid #E2D1D8'
        }}>
          {sections.map((sec) => {
            const isOpen = !!openSections[sec.id];
            return (
              <div 
                key={sec.id}
                style={{
                  borderBottom: '1.5px solid #E2D1D8',
                  transition: 'background-color 0.2s ease'
                }}
              >
                {/* Accordion Row Header */}
                <button
                  onClick={() => toggleSection(sec.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '1.35rem 0.6rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    outline: 'none'
                  }}
                >
                  <span style={{
                    fontSize: '1.16rem',
                    fontWeight: '700',
                    color: isOpen ? '#8A3B52' : '#231826',
                    letterSpacing: '-0.01em',
                    transition: 'color 0.2s ease'
                  }}>
                    {sec.title}
                  </span>

                  <div style={{
                    color: isOpen ? '#8A3B52' : '#5A4654',
                    transition: 'transform 0.25s ease, color 0.2s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginLeft: '1rem'
                  }}>
                    <ChevronDown size={22} strokeWidth={2.4} />
                  </div>
                </button>

                {/* Accordion Dropdown Content */}
                {isOpen && (
                  <div style={{
                    padding: '0 0.5rem 1.75rem',
                    animation: 'fadeIn 0.25s ease'
                  }}>
                    {sec.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
