'use client';

import React from 'react';
import SEO from '../../components/SEO';

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-page)', padding: '4rem 0' }}>
      <SEO 
        title="Terms & Conditions | Sofnest"
        description="Sofnest Terms & Conditions for browsing our brand portal and official marketplace purchases."
        canonical="/terms"
      />
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="card" style={{ padding: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--navy-deep)' }}>Terms & Conditions</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Last updated: September 2026</p>
          <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '1.5rem 0' }} />

          <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', color: 'var(--navy-deep)' }}>1. Acceptance of Terms</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            By accessing and browsing www.sofnest.com, you accept and agree to be bound by these terms and conditions.
          </p>

          <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', color: 'var(--navy-deep)' }}>2. Marketplace Purchases</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            Sofnest product purchases are fulfilled through official online marketplaces (Amazon, Flipkart, Meesho). Terms of sale, delivery, and returns follow the respective marketplace policies.
          </p>
        </div>
      </div>
    </div>
  );
}
