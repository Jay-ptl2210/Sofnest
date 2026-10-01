'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  ArrowUpRight
} from 'lucide-react';
import SofnestLogo from './SofnestLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const helpfulLinks = [
    { label: 'FAQS', href: '/faq' },
    { label: 'WHY SOFNEST', href: '/why-sofnest' },
    { label: 'WHERE TO BUY', href: '/where-to-buy' },
    { label: 'RETURNS AND CANCELLATION POLICY', href: '/terms' },
    { label: 'CONTACT US', href: '/contact' },
  ];

  return (
    <footer className="sofnest-minimal-footer">
      {/* Main Footer Section */}
      <div className="footer-main-container">
        <div className="footer-grid">
          {/* Column 1: Brand & Social */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo-link" aria-label="Sofnest Home">
              <SofnestLogo variant="gold-slogan" height={36} />
            </Link>
            
            <p className="footer-tagline">
              Thoughtful women&apos;s-care essentials for everyday freshness, period days, and every little moment in between.
            </p>

            <div className="footer-social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-btn">
                <Instagram size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon-btn">
                <Facebook size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon-btn">
                <Twitter size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-btn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Helpful Links */}
          <div className="footer-links-col">
            <h3 className="footer-heading">Helpful Links</h3>
            <div className="helpful-links-list">
              {helpfulLinks.map((item, index) => (
                <Link key={index} href={item.href} className="helpful-link-row">
                  <span className="helpful-link-text">{item.label}</span>
                  <ArrowUpRight size={18} className="helpful-link-arrow" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className="footer-contact-col">
            <h3 className="footer-heading">Contact Us</h3>
            
            <div className="contact-details-group">
              <div className="contact-item">
                <span className="contact-label">For queries & customer support:</span>
                <a href="mailto:info@sofnest.com" className="contact-link">info@sofnest.com</a>
              </div>

              <div className="contact-item phone-item">
                <span className="contact-label">Phone / WhatsApp:</span>
                <a href="tel:+918320302774" className="contact-phone">
                  +91 83203 02774
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="bottom-bar-container">
          <div className="bottom-legal-links">
            <Link href="/privacy-policy" className="bottom-link">Privacy Policy</Link>
            <Link href="/terms" className="bottom-link">Terms of Service</Link>
            <Link href="/disclaimer" className="bottom-link">Disclaimer</Link>
          </div>
          <div className="bottom-copyright">
            Copyright@{currentYear} Sofnest All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}




