'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, X, BookOpen, ShoppingBag, HelpCircle } from 'lucide-react';

const SEARCH_DATABASE = [
  { title: 'Panty Liners Regular 155 mm', type: 'Product', path: '/products/panty-liners', desc: '50 Liners - Ultra Thin, Cottony Soft, Breathable for daily discharge & light spotting.' },
  { title: 'Panty Liners Long 180 mm', type: 'Product', path: '/products/panty-liners', desc: 'Longer everyday fit for extra coverage and protection.' },
  { title: 'Sanitary Pads (Coming Soon)', type: 'Product', path: '/products/sanitary-pads', desc: 'Thoughtful period protection made with Sofnest comfort.' },
  { title: 'Period Panties (Coming Soon)', type: 'Product', path: '/products/period-panties', desc: 'Wearable protective period wear.' },
  { title: 'Disposable Panties (Coming Soon)', type: 'Product', path: '/products/disposable-panties', desc: 'Convenience care for travel, hospital, and busy days.' },
  { title: 'What Is a Panty Liner and When Should You Use One?', type: 'Care Guide', path: '/care-guide/article-1', desc: 'Complete introductory guide on panty liners usage.' },
  { title: 'Panty Liner vs Sanitary Pad: What\'s the Difference?', type: 'Care Guide', path: '/care-guide/article-2', desc: 'Comparing absorbency, thickness, and daily use cases.' },
  { title: '155 mm vs 180 mm Panty Liners: Which Size Should I Choose?', type: 'Care Guide', path: '/care-guide/article-5', desc: 'Choosing between regular and long panty liners.' },
  { title: 'How to Wear a Panty Liner Correctly', type: 'Care Guide', path: '/care-guide/article-6', desc: 'Peel, Place & Press instructions for a secure fit.' },
  { title: 'How to Dispose of Panty Liners Properly', type: 'Care Guide', path: '/care-guide/article-9', desc: 'Wrap, Bin, Do Not Flush environmental care instructions.' },
  { title: 'Where can I buy Sofnest products?', type: 'FAQ', path: '/faq', desc: 'Available online on Amazon India, Flipkart, and Meesho.' },
  { title: 'Does Sofnest sell directly on this website?', type: 'FAQ', path: '/faq', desc: 'Currently we convert via trusted marketplaces for fastest shipping.' }
];

export default function SearchModal({ onClose }) {
  const [query, setQuery] = useState('');

  const filtered = query.trim() === '' 
    ? SEARCH_DATABASE.slice(0, 5) 
    : SEARCH_DATABASE.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.desc.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: '2rem',
          maxWidth: '640px',
          width: '90%',
          boxShadow: '0 25px 50px rgba(18, 24, 75, 0.25)',
          position: 'relative'
        }}
      >
        {/* Search Input Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '2px solid var(--mint-soft)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
          <Search size={24} style={{ color: 'var(--berry-deep)' }} />
          <input 
            type="text" 
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, care guides, FAQs..."
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '1.2rem',
              fontFamily: 'var(--font-body)',
              color: 'var(--navy-deep)'
            }}
          />
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
            <X size={24} />
          </button>
        </div>

        {/* Results List */}
        <div>
          <p style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-accent)', marginBottom: '1rem' }}>
            {query ? `Search Results (${filtered.length})` : 'Popular Searches'}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '360px', overflowY: 'auto' }}>
            {filtered.length > 0 ? (
              filtered.map((item, idx) => (
                <Link 
                  key={idx} 
                  href={item.path} 
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1rem',
                    borderRadius: '12px',
                    backgroundColor: 'var(--bg-page)',
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--mint-soft)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-page)'}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: item.type === 'Product' ? 'var(--blush-powder)' : item.type === 'Care Guide' ? 'var(--mint-soft)' : '#FEF3C7',
                    color: item.type === 'Product' ? 'var(--berry-deep)' : item.type === 'Care Guide' ? '#0d6849' : '#B45309',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {item.type === 'Product' ? <ShoppingBag size={18} /> : item.type === 'Care Guide' ? <BookOpen size={18} /> : <HelpCircle size={18} />}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <h4 style={{ fontSize: '1rem', color: 'var(--navy-deep)', margin: 0 }}>{item.title}</h4>
                      <span className="badge" style={{ fontSize: '0.65rem', backgroundColor: '#E2E8F0', color: 'var(--navy-deep)' }}>{item.type}</span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{item.desc}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                No matching results found for "{query}". Try searching "Panty Liners", "Discharge", or "155 mm".
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
