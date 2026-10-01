'use client';

import React, { useState } from 'react';
import { Mail, Globe, CheckCircle2, Send } from 'lucide-react';
import SofnestLogo from '../../components/SofnestLogo';
import SEO from '../../components/SEO';

export default function ContactPage() {
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    reason: 'Product Question',
    message: ''
  });

  const [submittedInquiry, setSubmittedInquiry] = useState(false);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setSubmittedInquiry(true);
  };

  const contactSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Sofnest Support",
      "description": "Reach out to Sofnest customer care and support.",
      "url": "https://sofnest.in/contact"
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-page)', minHeight: '80vh' }}>
      <SEO 
        title="Contact Us | Sofnest Customer Support"
        description="Get in touch with Sofnest customer care. Reach out for product questions, marketplace orders, or trade inquiries."
        canonical="/contact"
        keywords="contact sofnest, sofnest customer support, sofnest enquiry"
        schema={contactSchemas}
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
        <div className="container" style={{ maxWidth: '720px' }}>
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
              GET IN TOUCH
            </span>
          </div>

          <h1 style={{ 
            color: '#2A1A2C', 
            fontSize: 'clamp(2.4rem, 5vw, 3.25rem)', 
            marginBottom: '0.75rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: '700'
          }}>
            We'd love to hear from you.
          </h1>
          <p style={{ color: '#554257', fontSize: '1.08rem', lineHeight: 1.6, maxWidth: '580px', margin: '0 auto' }}>
            Reach out with any question, partnership inquiry, or product feedback.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {/* Left Column: Official Contact Details */}
            <div>
              <SofnestLogo variant="navy" height={42} />
              <h2 style={{ fontSize: '2rem', margin: '1rem 0 0.5rem 0', color: 'var(--navy-deep)' }}>
                Sofnest Care Team
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
                Have questions about our panty liners or upcoming products? Reach out through our official contact details below.
              </p>

              <div className="card" style={{ backgroundColor: '#FAF5FF', border: '1.5px solid #E9D5FF', marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--berry-deep)', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                  OFFICIAL PACKAGING CONTACT
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--navy-deep)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Mail size={18} style={{ color: 'var(--berry-deep)' }} />
                    <a href="mailto:info@sofnest.com" style={{ color: 'var(--navy-deep)', textDecoration: 'none', fontWeight: '600' }}>info@sofnest.com</a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Globe size={18} style={{ color: 'var(--berry-deep)' }} />
                    <span>www.sofnest.com</span>
                  </div>
                </div>
              </div>

              <div className="card" style={{ backgroundColor: '#FFFFFF' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--navy-deep)' }}>Retail & Distribution Inquiries</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Interested in stocking Sofnest panty liners or trade distribution partnerships? Fill out the contact form to message us.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="card" style={{ padding: '2rem', backgroundColor: '#FFFFFF', borderRadius: '24px', boxShadow: '0 10px 30px rgba(41, 49, 91, 0.06)' }}>
              {!submittedInquiry ? (
                <form onSubmit={handleInquirySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <h3 style={{ fontSize: '1.65rem', color: 'var(--navy-deep)', marginBottom: '0.2rem' }}>Send Us a Message</h3>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-deep)', marginBottom: '0.35rem' }}>
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      required
                      value={inquiryForm.name}
                      onChange={e => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      placeholder="Your Name"
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid #CBD5E1', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-deep)', marginBottom: '0.35rem' }}>
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      required
                      value={inquiryForm.email}
                      onChange={e => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      placeholder="yourname@example.com"
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid #CBD5E1', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-deep)', marginBottom: '0.35rem' }}>
                      Reason for Contact *
                    </label>
                    <select
                      value={inquiryForm.reason}
                      onChange={e => setInquiryForm({ ...inquiryForm, reason: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid #CBD5E1', outline: 'none', backgroundColor: '#FFFFFF' }}
                    >
                      <option value="Product Question">Product Question</option>
                      <option value="Marketplace Order">Marketplace Order Inquiry</option>
                      <option value="Business Enquiry">Business Enquiry</option>
                      <option value="Retail/Distribution">Retail / Distribution</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-deep)', marginBottom: '0.35rem' }}>
                      Your Message *
                    </label>
                    <textarea 
                      rows={4}
                      required
                      value={inquiryForm.message}
                      onChange={e => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      placeholder="How can we help you?"
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid #CBD5E1', outline: 'none', resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', borderRadius: '50px', padding: '0.85rem' }}>
                    <Send size={16} /> SEND MESSAGE
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--mint-soft)', color: '#0d6849', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Thank You!</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    Your message has been received. Our team will get back to you shortly at <strong>{inquiryForm.email}</strong>.
                  </p>
                  <button onClick={() => setSubmittedInquiry(false)} className="btn btn-outline" style={{ borderRadius: '50px' }}>
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
