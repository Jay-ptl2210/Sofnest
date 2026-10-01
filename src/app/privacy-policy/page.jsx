'use client';

import React from 'react';
import SEO from '../../components/SEO';

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-page)', padding: '4rem 0' }}>
      <SEO 
        title="Privacy Policy | Sofnest"
        description="Sofnest Privacy Policy outlining how we collect, handle, and protect user contact information."
        canonical="/privacy-policy"
      />
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="card" style={{ padding: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--navy-deep)' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Last updated: September 2026</p>
          <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '1.5rem 0' }} />
          
          <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', color: 'var(--navy-deep)' }}>1. Data We Collect</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            When you subscribe for product launch notifications or submit an inquiry on Sofnest, we collect your email address, phone number, and name to keep you updated.
          </p>

          <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', color: 'var(--navy-deep)' }}>2. Use of Information</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            We use your contact information exclusively to respond to your queries, inform you of product restocks, and communicate brand news. We do not sell your personal data.
          </p>

          <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', color: 'var(--navy-deep)' }}>3. Contact Us</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            If you have questions regarding this privacy policy, please contact info@sofnest.com.
          </p>
        </div>
      </div>
    </div>
  );
}
