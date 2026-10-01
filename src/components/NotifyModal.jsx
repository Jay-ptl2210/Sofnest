'use client';

import React, { useState } from 'react';
import { X, Bell, Check } from 'lucide-react';

export default function NotifyModal({ category = 'Sanitary Pads', onClose }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email || phone) {
      setSubmitted(true);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: '2.5rem',
          maxWidth: '480px',
          width: '90%',
          boxShadow: '0 25px 50px rgba(18, 24, 75, 0.25)',
          position: 'relative',
          border: '1px solid var(--glass-border)'
        }}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-secondary)'
          }}
        >
          <X size={22} />
        </button>

        {!submitted ? (
          <div>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'var(--blush-powder)',
              color: 'var(--berry-deep)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Bell size={28} />
            </div>

            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--navy-deep)' }}>
              Be First to Know
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
              We're crafting our <strong>{category}</strong> range with the signature Sofnest touch of softness. Enter your details to get early launch access.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-deep)', marginBottom: '0.35rem' }}>
                  Email Address
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@example.com"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    border: '1.5px solid #E2E8F0',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-deep)', marginBottom: '0.35rem' }}>
                  WhatsApp / Phone Number (Optional)
                </label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    border: '1.5px solid #E2E8F0',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                Notify Me at Launch
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'var(--mint-soft)',
              color: '#0d6849',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <Check size={36} />
            </div>

            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--navy-deep)' }}>
              You're on the VIP List!
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              We'll notify you as soon as <strong>{category}</strong> is officially released. In the meantime, explore our available Panty Liners range.
            </p>

            <button onClick={onClose} className="btn btn-outline" style={{ width: '100%' }}>
              Back to Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
