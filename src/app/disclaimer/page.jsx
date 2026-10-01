'use client';

import React from 'react';
import SEO from '../../components/SEO';

export default function DisclaimerPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-page)', padding: '4rem 0' }}>
      <SEO 
        title="Health Disclaimer | Sofnest"
        description="General educational disclaimer regarding Sofnest women's care and health information content."
        canonical="/disclaimer"
      />
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="card" style={{ padding: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--navy-deep)' }}>Health & Product Disclaimer</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Last updated: September 2026</p>
          <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '1.5rem 0' }} />

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            The content, educational guides, and information on this website are provided for general educational and informational purposes only. They are not intended as medical advice or clinical guarantees. Always consult a qualified healthcare professional regarding any medical conditions or symptoms.
          </p>
        </div>
      </div>
    </div>
  );
}
