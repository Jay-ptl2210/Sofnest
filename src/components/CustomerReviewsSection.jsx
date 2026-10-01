'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, MessageSquarePlus, ChevronLeft, ChevronRight, CheckCircle2, MapPin } from 'lucide-react';
import { getStoredReviews } from '../utils/reviews';

export default function CustomerReviewsSection({ title, subtitle }) {
  const [reviews, setReviews] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const loadReviews = () => {
    const list = getStoredReviews();
    setReviews(list);
  };

  useEffect(() => {
    loadReviews();
    const handleUpdate = () => loadReviews();
    window.addEventListener('sofnest_reviews_updated', handleUpdate);
    return () => window.removeEventListener('sofnest_reviews_updated', handleUpdate);
  }, []);

  const getCardsPerPage = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const [cardsPerPage, setCardsPerPage] = useState(4);

  useEffect(() => {
    setCardsPerPage(getCardsPerPage());
    const handleResize = () => {
      setCardsPerPage(getCardsPerPage());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => {
      if (reviews.length <= 1) return 0;
      return prev === 0 ? reviews.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    setStartIndex((prev) => {
      if (reviews.length <= 1) return 0;
      return (prev + 1) % reviews.length;
    });
  };

  // Get responsive cards count wrapping around cleanly
  const getVisibleReviews = () => {
    if (reviews.length === 0) return [];
    if (reviews.length <= cardsPerPage) return reviews;

    const visible = [];
    for (let i = 0; i < cardsPerPage; i++) {
      const idx = (startIndex + i) % reviews.length;
      visible.push(reviews[idx]);
    }
    return visible;
  };

  const displayList = getVisibleReviews();

  return (
    <section 
      data-header-bg="#F5E2E6" 
      data-header-theme="light"
      style={{
        backgroundColor: 'var(--color-soft-blush)',
        color: 'var(--color-deep-plum)',
        padding: '4.5rem 0',
        borderTop: '1.5px solid var(--color-muted-gold)',
        textAlign: 'center'
      }}
    >
      <div className="container" style={{ maxWidth: '1180px' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="section-tag" style={{ color: 'var(--color-dusty-rose)' }}>
            CUSTOMER RATINGS & REVIEWS
          </span>
          <h2 style={{ color: 'var(--color-deep-plum)', fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '0.6rem' }}>
            {title || "Like our product? Rate us!"}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '640px', margin: '0 auto' }}>
            {subtitle || "Read real reviews from women across India and share your own rating & feedback with us."}
          </p>

          {/* Average Rating Summary Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            backgroundColor: 'var(--color-warm-ivory)',
            padding: '0.45rem 1.25rem',
            borderRadius: '50px',
            marginTop: '1.25rem',
            boxShadow: '0 4px 14px rgba(73, 53, 79, 0.08)',
            border: '1.5px solid var(--color-muted-gold)'
          }}>
            <div style={{ display: 'flex' }}>
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={18} 
                  fill={reviews.length > 0 ? "#F59E0B" : "#F1F5F9"} 
                  color={reviews.length > 0 ? "#F59E0B" : "#CBD5E1"} 
                />
              ))}
            </div>
            <span style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--navy-deep)' }}>
              {reviews.length > 0 
                ? `${(reviews.reduce((acc, r) => acc + (r.rating || 5), 0) / reviews.length).toFixed(1)} / 5 Rating` 
                : "0.0 / 5 Rating"}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--gold-accent)', fontWeight: '700' }}>
              • {reviews.length > 0 ? `${reviews.length} Verified Customer Review${reviews.length > 1 ? 's' : ''}` : "Be the first to review!"}
            </span>
          </div>
        </div>

        {/* Reviews Cards Slider Carousel */}
        {reviews.length > 0 ? (
          <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
            {/* Left & Right Slider Controls */}
            {reviews.length > 1 && (
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginBottom: '1rem', paddingRight: '0.25rem' }}>
                <button
                  onClick={handlePrev}
                  aria-label="Previous Reviews"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    border: '1.5px solid var(--gold-accent)',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--navy-deep)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--gold-accent)'; e.currentTarget.style.color = '#FFF'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.color = 'var(--navy-deep)'; }}
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next Reviews"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    border: '1.5px solid var(--gold-accent)',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--navy-deep)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--gold-accent)'; e.currentTarget.style.color = '#FFF'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.color = 'var(--navy-deep)'; }}
                >
                  <ChevronRight size={22} />
                </button>
              </div>
            )}

            {/* 4 Cards Responsive Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.25rem',
              textAlign: 'left'
            }}>
              {displayList.map((rev, index) => (
                <div 
                  key={rev.id + '-' + index} 
                  className="card" 
                  style={{
                    backgroundColor: 'var(--color-warm-ivory)',
                    borderRadius: '20px',
                    padding: '1.35rem',
                    border: '1.5px solid rgba(201, 165, 106, 0.4)',
                    boxShadow: '0 8px 24px rgba(73, 53, 79, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '220px'
                  }}
                >
                  <div>
                    {/* Rating Stars & Product Tag */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.3rem' }}>
                      <div style={{ display: 'flex', gap: '2px' }}>
                        {[...Array(rev.rating || 5)].map((_, idx) => (
                          <Star key={idx} size={15} fill="#DFB474" color="#C9A56A" />
                        ))}
                      </div>
                      <span style={{ fontSize: '0.68rem', fontWeight: '700', backgroundColor: 'var(--color-soft-blush)', color: 'var(--color-dusty-rose)', padding: '0.2rem 0.55rem', borderRadius: '12px', border: '1px solid rgba(169, 120, 135, 0.3)' }}>
                        {rev.product}
                      </span>
                    </div>

                    {/* Review Description */}
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-deep-plum)', lineHeight: 1.5, fontStyle: 'italic', marginBottom: '1rem' }}>
                      "{rev.description}"
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.88rem', color: 'var(--navy-deep)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        {rev.name} <CheckCircle2 size={14} style={{ color: '#0d6849' }} title="Verified User" />
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.1rem' }}>
                        <MapPin size={11} style={{ color: 'var(--gold-accent)' }} /> {rev.city}
                      </div>
                    </div>

                    <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>
                      {rev.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Empty State Notice when all reviews deleted */
          <div className="card" style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '2rem 1.5rem',
            margin: '0 auto 2.5rem auto',
            maxWidth: '520px',
            border: '1.5px dashed rgba(201, 153, 82, 0.4)',
            boxShadow: '0 8px 24px rgba(41, 49, 91, 0.04)',
            textAlign: 'center'
          }}>
            <div style={{ display: 'inline-flex', padding: '0.75rem', borderRadius: '50%', backgroundColor: '#FAF5FF', color: 'var(--gold-accent)', marginBottom: '0.75rem' }}>
              <Star size={28} fill="var(--gold-accent)" stroke="none" />
            </div>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--navy-deep)', marginBottom: '0.35rem' }}>
              Be the First to Rate Sofnest!
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
              There are no published reviews yet. Tried our products? Share your experience with us and help other women!
            </p>
          </div>
        )}

        {/* Action Button: Navigate to Contact Us Page with Feedback Form */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link 
            href="/contact?tab=rating" 
            className="btn btn-gold" 
            style={{ fontSize: '1rem', padding: '0.9rem 2.25rem', borderRadius: '50px', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
          >
            <MessageSquarePlus size={18} /> RATE OUR PRODUCT & LEAVE FEEDBACK
          </Link>
        </div>
      </div>
    </section>
  );
}
