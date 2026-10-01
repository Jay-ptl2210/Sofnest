'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Search,
  Layers,
  ShieldCheck,
  CreditCard,
  Sparkles,
  HeartHandshake,
  Package,
  Phone
} from 'lucide-react';
import SEO from '../../components/SEO';

const FAQ_CATEGORIES = [
  {
    id: 'panty-liners',
    title: 'Sofnest Panty Liners (155mm & 180mm)',
    icon: Sparkles,
    questions: [
      {
        q: 'What is a panty liner and how is it different from a sanitary pad?',
        a: 'A panty liner is significantly thinner, lighter, and more flexible than a sanitary pad. It is specially designed for daily intimate hygiene, vaginal discharge, light spotting, ovulation moisture, and workout sweat, whereas sanitary pads are thicker and designed specifically for medium-to-heavy menstrual flow.'
      },
      {
        q: 'Can I wear Sofnest Panty Liners every single day?',
        a: 'Yes, absolutely! Sofnest panty liners are made with breathable, 100% dermatologically tested, cottony-soft top sheets that allow natural air circulation, preventing moisture build-up, rashes, and bad odor for all-day freshness.'
      },
      {
        q: 'What is the difference between 155 mm Regular and 180 mm Long panty liners?',
        a: '155 mm Regular is a compact, ultra-thin size ideal for daily light discharge and standard underwear. 180 mm Long offers 25 mm of extra length and wider wings for enhanced front-to-back coverage, heavier discharge, or pre/post-period spotting.'
      },
      {
        q: 'How often should I change my panty liner during the day?',
        a: 'For optimal intimate freshness and gynecological hygiene, we recommend changing your panty liner every 4 to 6 hours, or sooner if you feel moisture after workouts or travel.'
      }
    ]
  },
  {
    id: 'sanitary-pads',
    title: 'Sanitary Pads (Period Protection)',
    icon: ShieldCheck,
    questions: [
      {
        q: 'What sizes and absorbency levels will Sofnest Sanitary Pads offer?',
        a: 'Sofnest Sanitary Pads will be available in Regular (240 mm), XL (280 mm), and XXL Night (320 mm). Each pad is engineered with Japanese SAP (Super Absorbent Polymer) cores for instant dry-lock absorption without bulkiness.'
      },
      {
        q: 'Are Sofnest Sanitary Pads rash-free and chemical-free?',
        a: 'Yes. Our sanitary pads feature a 100% chlorine-free, fragrance-free, and hypoallergenic cotton-soft surface that prevents rashes, chafing, and skin irritation even during heavy flow days.'
      },
      {
        q: 'How do Sofnest pads prevent side leakage during sleep and sports?',
        a: 'Our pads feature flexible 3D leak-guard wings, deep fluid-channeling grooves, and wider contoured back wings designed to move with your body and keep you leak-free all night.'
      }
    ]
  },
  {
    id: 'period-panties',
    title: 'Period Panties (Washable & Leakproof)',
    icon: Layers,
    questions: [
      {
        q: 'How do Sofnest Reusable Period Panties work?',
        a: 'Sofnest Period Panties feature an innovative 4-layer absorption system: a moisture-wicking organic cotton top layer, an antibacterial absorbent core, a breathable leakproof barrier, and a soft outer fabric that replaces or backs up traditional pads.'
      },
      {
        q: 'How do I wash and care for reusable period panties?',
        a: 'Rinse in cold tap water immediately after use until the water runs clear. Then machine wash on a gentle cycle or hand wash with mild detergent. Hang to air dry. Do not use bleach, hot water, or fabric softeners.'
      },
      {
        q: 'How long do reusable period panties last?',
        a: 'With proper gentle washing and care, Sofnest Period Panties can be reused for up to 2 years (50+ wash cycles) while retaining full absorption efficiency.'
      }
    ]
  },
  {
    id: 'disposable-panties',
    title: 'Disposable Panties (Travel & Postpartum)',
    icon: Package,
    questions: [
      {
        q: 'When should I use Sofnest Disposable Panties?',
        a: 'Disposable panties are designed for maximum convenience during travel, hospital stays, postpartum recovery, camping trips, spa visits, and unexpected period emergencies where washing and drying underwear is difficult.'
      },
      {
        q: 'Are disposable panties hygienic and individually packed?',
        a: 'Yes. Each pair is medically sterilized, individually sealed in a compact pocket-sized pouch, and ready-to-use straight out of the package for 100% hygiene.'
      },
      {
        q: 'What fabric are disposable panties made of?',
        a: 'They are crafted from breathable, non-woven pure cotton fabric with an elastic multi-strand waistband, offering the softness and snug fit of regular cotton underwear.'
      }
    ]
  },
  {
    id: 'orders-payment',
    title: 'Orders, Payment & Shipping',
    icon: CreditCard,
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major secure payment methods: UPI (Google Pay, PhonePe, Paytm, BHIM), Debit & Credit Cards (Visa, MasterCard, RuPay), Net Banking, and Cash on Delivery (COD) on supported pincodes.'
      },
      {
        q: 'How long does shipping take across India?',
        a: 'Orders are processed within 24 hours. Standard delivery takes 2 to 5 business days across metro and tier-1/tier-2 cities in India with real-time SMS & email tracking updates.'
      },
      {
        q: 'Is the delivery packaging discreet?',
        a: 'Yes, 100%. All Sofnest orders are shipped in plain, unmarked, tamper-evident outer boxes or pouches with no product descriptions visible on the package exterior.'
      },
      {
        q: 'What is your return or cancellation policy?',
        a: 'You can cancel your order before dispatch. Due to personal intimate hygiene and health safety guidelines, opened hygiene products cannot be returned once delivered, but we offer immediate replacements or refunds for damaged/defective shipments.'
      }
    ]
  },
  {
    id: 'brand-quality',
    title: 'Brand, Quality & Safety Certifications',
    icon: HeartHandshake,
    questions: [
      {
        q: 'What quality and safety standards do Sofnest products adhere to?',
        a: 'Sofnest products are manufactured in certified cleanroom facilities conforming to GMP (Good Manufacturing Practice), ISO 9001/ISO 13485 standards, and are dermatologically certified safe for sensitive intimate skin.'
      },
      {
        q: 'Are Sofnest products made in India?',
        a: 'Yes! Sofnest is an Indian women-care brand dedicated to creating world-class intimate wellness essentials crafted proudly in India with sustainably sourced materials.'
      },
      {
        q: 'How can I reach Sofnest customer care for support?',
        a: 'Our customer support team is available Monday to Saturday (9 AM - 7 PM). You can email us at info@sofnest.com or call / WhatsApp us at +91 83203 02774.'
      }
    ]
  }
];

export default function FaqPage() {
  const [openItems, setOpenItems] = useState({
    'panty-liners-0': true,
    'sanitary-pads-0': true,
    'orders-payment-0': true
  });
  const [collapsedCategories, setCollapsedCategories] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const toggleQuestion = (catId, qIdx) => {
    const key = `${catId}-${qIdx}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleCategoryCollapse = (catId) => {
    setCollapsedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  // Filtered categories based on search and active tab
  const filteredCategories = FAQ_CATEGORIES.map(cat => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) {
      return null;
    }

    if (!searchQuery.trim()) {
      return cat;
    }

    const qLower = searchQuery.toLowerCase();
    const matchingQuestions = cat.questions.filter(item =>
      item.q.toLowerCase().includes(qLower) ||
      item.a.toLowerCase().includes(qLower) ||
      cat.title.toLowerCase().includes(qLower)
    );

    if (matchingQuestions.length === 0) return null;

    return {
      ...cat,
      questions: matchingQuestions
    };
  }).filter(Boolean);

  // Schema generation
  const faqSchemaItems = FAQ_CATEGORIES.flatMap(cat =>
    cat.questions.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  );

  const faqSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqSchemaItems
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sofnest.in" },
        { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://sofnest.in/faq" }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-page)', minHeight: '80vh' }}>
      <SEO
        title="Frequently Asked Questions - Sofnest Products, Orders & Care"
        description="Got questions about Sofnest Panty Liners, Sanitary Pads, Period Panties, payments, shipping, or intimate hygiene? Find detailed answers here."
        canonical="/faq"
        keywords="sofnest faq, panty liner questions, sanitary pads faq, period panties care, intimate hygiene answers, shipping payment sofnest"
        schema={faqSchemas}
      />

      {/* Hero Header */}
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
              HELP & SUPPORT
            </span>
          </div>

          <h1 style={{
            color: '#2A1A2C',
            fontSize: 'clamp(2.3rem, 5vw, 3rem)',
            marginBottom: '0.75rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: '700'
          }}>
            Frequently Asked Questions
          </h1>
          <p style={{ color: '#554257', fontSize: '1.08rem', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '620px', margin: '0 auto 2rem auto' }}>
            Have questions about our products, usage, ordering, or payment? We&apos;ve got clear answers for you.
          </p>

          {/* Search Bar */}
          <div style={{
            position: 'relative',
            maxWidth: '560px',
            margin: '0 auto',
            boxShadow: '0 8px 24px rgba(73, 53, 79, 0.08)',
            borderRadius: '50px'
          }}>
            <Search size={20} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. daily wear, payment, sanitary pad, wash)..."
              style={{
                width: '100%',
                padding: '0.9rem 1.25rem 0.9rem 3.25rem',
                borderRadius: '50px',
                border: '1.5px solid #CBD5E1',
                outline: 'none',
                fontSize: '0.95rem',
                backgroundColor: '#FFFFFF',
                color: 'var(--navy-deep)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section style={{ padding: '1.75rem 0 0.5rem', backgroundColor: '#FFFFFF', borderBottom: '1px solid #ECECEC' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem',
            scrollbarWidth: 'none',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setActiveCategory('all')}
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: '50px',
                border: activeCategory === 'all' ? '1.5px solid #49354F' : '1px solid #E2E8F0',
                backgroundColor: activeCategory === 'all' ? '#49354F' : '#FFFFFF',
                color: activeCategory === 'all' ? '#FFFFFF' : '#49354F',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              All Topics ({FAQ_CATEGORIES.reduce((acc, cat) => acc + cat.questions.length, 0)})
            </button>
            {FAQ_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: '50px',
                  border: activeCategory === cat.id ? '1.5px solid #49354F' : '1px solid #E2E8F0',
                  backgroundColor: activeCategory === cat.id ? '#49354F' : '#FFFFFF',
                  color: activeCategory === cat.id ? '#FFFFFF' : '#49354F',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap'
                }}
              >
                {cat.title.split(' (')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main FAQ Accordion Section */}
      <section className="section-padding" style={{ padding: '3rem 0 5rem' }}>
        <div className="container" style={{ maxWidth: '920px' }}>
          {filteredCategories.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--navy-deep)', marginBottom: '0.5rem' }}>No matching questions found</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Try searching with different words or reset the filter.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="btn btn-primary"
                style={{ borderRadius: '50px', padding: '0.65rem 1.5rem' }}
              >
                View All FAQs
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {filteredCategories.map((cat) => {
                const IconComponent = cat.icon;
                const isCatCollapsed = !!collapsedCategories[cat.id];

                return (
                  <div
                    key={cat.id}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1.5px solid #F0E6EC',
                      boxShadow: '0 4px 20px rgba(73, 53, 79, 0.04)',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Category Header Banner */}
                    <div
                      onClick={() => toggleCategoryCollapse(cat.id)}
                      style={{
                        backgroundColor: '#FAF5F7',
                        padding: '1.1rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        borderBottom: isCatCollapsed ? 'none' : '1px solid #F0E6EC'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          backgroundColor: '#49354F',
                          color: '#C9A56A',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <IconComponent size={18} />
                        </div>
                        <h2 style={{ fontSize: '1.18rem', fontWeight: '700', color: 'var(--navy-deep)', margin: 0 }}>
                          {cat.title}
                        </h2>
                      </div>
                      <div style={{ color: 'var(--navy-deep)', display: 'flex', alignItems: 'center' }}>
                        {isCatCollapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
                      </div>
                    </div>

                    {/* Question Items List */}
                    {!isCatCollapsed && (
                      <div style={{ padding: '0.5rem 1.5rem 1rem' }}>
                        {cat.questions.map((item, qIdx) => {
                          const isOpen = !!openItems[`${cat.id}-${qIdx}`];
                          return (
                            <div
                              key={qIdx}
                              style={{
                                borderBottom: qIdx === cat.questions.length - 1 ? 'none' : '1px solid #F1F5F9',
                                padding: '1.1rem 0'
                              }}
                            >
                              {/* Question Row */}
                              <div
                                onClick={() => toggleQuestion(cat.id, qIdx)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  justifyContent: 'space-between',
                                  cursor: 'pointer',
                                  gap: '1rem'
                                }}
                              >
                                <h3 style={{
                                  fontSize: '1rem',
                                  fontWeight: '600',
                                  color: isOpen ? '#A94860' : '#2D2233',
                                  lineHeight: 1.5,
                                  margin: 0,
                                  transition: 'color 0.2s ease'
                                }}>
                                  <span style={{ color: '#C9A56A', marginRight: '0.5rem', fontWeight: '700' }}>
                                    {qIdx + 1}.
                                  </span>
                                  {item.q}
                                </h3>
                                <div style={{
                                  color: isOpen ? '#A94860' : '#8E7A93',
                                  marginTop: '0.2rem',
                                  transition: 'transform 0.2s ease',
                                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                  flexShrink: 0
                                }}>
                                  <ChevronDown size={18} />
                                </div>
                              </div>

                              {/* Answer Text */}
                              {isOpen && (
                                <div style={{
                                  marginTop: '0.75rem',
                                  paddingLeft: '1.5rem',
                                  paddingRight: '0.5rem',
                                  color: '#55444F',
                                  fontSize: '0.94rem',
                                  lineHeight: 1.65
                                }}>
                                  <p style={{ margin: 0 }}>
                                    {item.a}
                                  </p>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Contact Support Help Box */}
          <div style={{
            marginTop: '3.5rem',
            backgroundColor: '#FFFFFF',
            padding: '2.5rem 2rem',
            borderRadius: '20px',
            textAlign: 'center',
            border: '1.5px solid #F0E6EC',
            boxShadow: '0 8px 30px rgba(73, 53, 79, 0.05)'
          }}>
            <span className="section-tag" style={{ color: 'var(--gold-accent)' }}>STILL HAVE QUESTIONS?</span>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--navy-deep)', margin: '0.35rem 0 0.5rem' }}>
              We&apos;re here to help you anytime
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 1.75rem', fontSize: '0.95rem' }}>
              Have a specific question about our intimate care range, orders, or trade queries? Reach out to our dedicated care team.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="mailto:info@sofnest.com"
                className="btn btn-primary"
                style={{ borderRadius: '50px', padding: '0.75rem 1.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Mail size={16} /> Email: info@sofnest.com
              </a>
              <a
                href="https://wa.me/918320302774"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ borderRadius: '50px', padding: '0.75rem 1.75rem', borderColor: '#49354F', color: '#49354F', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Phone size={16} /> WhatsApp: +91 83203 02774
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
