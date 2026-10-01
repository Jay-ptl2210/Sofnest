'use client';

import React, { useState, useEffect } from 'react';
import { Star, Trash2, Eye, EyeOff, Plus, Lock, ShieldCheck, Download } from 'lucide-react';
import SEO from '../../components/SEO';
import SofnestLogo from '../../components/SofnestLogo';
import { getAllReviewsForAdmin, saveReview, deleteReview, toggleReviewStatus } from '../../utils/reviews';

export default function AdminReviewsPage() {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [reviewsList, setReviewsList] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  // New Admin Review Form State
  const [newReview, setNewReview] = useState({
    name: '',
    mobile: '',
    city: '',
    product: 'Standard 155 mm Panty Liners',
    rating: 5,
    description: ''
  });

  const loadAdminReviews = () => {
    const list = getAllReviewsForAdmin();
    setReviewsList(list);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadAdminReviews();
      const handleUpdate = () => loadAdminReviews();
      window.addEventListener('sofnest_reviews_updated', handleUpdate);
      return () => window.removeEventListener('sofnest_reviews_updated', handleUpdate);
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Default Admin PIN: sofnest123 or admin
    if (passcode === 'sofnest123' || passcode === 'admin') {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect Admin Passcode. Please try again.');
    }
  };

  const handleToggleStatus = (id) => {
    toggleReviewStatus(id);
    loadAdminReviews();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      deleteReview(id);
      loadAdminReviews();
    }
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const createdObj = {
      id: 'rev-' + Date.now(),
      name: newReview.name,
      mobile: newReview.mobile,
      city: newReview.city,
      product: newReview.product,
      rating: newReview.rating,
      description: newReview.description,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    };

    saveReview(createdObj);
    setShowAddForm(false);
    setNewReview({ name: '', mobile: '', city: '', product: 'Standard 155 mm Panty Liners', rating: 5, description: '' });
    loadAdminReviews();
  };

  const exportCSV = () => {
    const headers = ['ID,Name,Mobile,City,Product,Rating,Description,Date,Status'];
    const rows = reviewsList.map(r => 
      `"${r.id}","${r.name}","${r.mobile}","${r.city}","${r.product}","${r.rating}","${r.description.replace(/"/g, '""')}","${r.date}","${r.status || 'Approved'}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `sofnest_reviews_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Screen 1: Passcode Protection
  if (!isAuthenticated) {
    return (
      <div style={{ backgroundColor: 'var(--bg-page)', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <SEO title="Admin Review Portal | Sofnest" description="Sofnest Admin Portal" canonical="/admin" />
        
        <div className="card" style={{ maxWidth: '440px', width: '100%', padding: '2.5rem', borderRadius: '24px', backgroundColor: '#FFFFFF', boxShadow: '0 20px 50px rgba(41, 49, 91, 0.1)', textAlign: 'center' }}>
          <SofnestLogo variant="navy" height={44} />
          
          <div style={{ margin: '1.5rem 0 0.5rem 0', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#FAF5FF', color: 'var(--berry-deep)', padding: '0.35rem 1rem', borderRadius: '50px', fontSize: '0.78rem', fontWeight: '800' }}>
            <Lock size={14} /> ADMIN ACCESS PORTAL
          </div>
          <h2 style={{ fontSize: '1.75rem', color: 'var(--navy-deep)', marginBottom: '0.5rem' }}>Review Manager</h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Enter your Sofnest Admin Security PIN to manage customer ratings & reviews.
          </p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="password"
              required
              value={passcode}
              onChange={e => setPasscode(e.target.value)}
              placeholder="Enter Admin PIN (Default: sofnest123)"
              style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '12px', border: '1.5px solid #CBD5E1', outline: 'none', textAlign: 'center', fontSize: '1rem', fontWeight: '700' }}
            />

            {errorMsg && (
              <p style={{ color: '#DC2626', fontSize: '0.82rem', margin: 0, fontWeight: '600' }}>{errorMsg}</p>
            )}

            <button type="submit" className="btn btn-gold" style={{ width: '100%', borderRadius: '50px', padding: '0.85rem', fontWeight: '700' }}>
              UNLOCK ADMIN DASHBOARD
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Screen 2: Authenticated Admin Reviews Dashboard
  const approvedList = reviewsList.filter(r => (r.status || 'Approved') === 'Approved');
  const approvedCount = approvedList.length;
  const hiddenCount = reviewsList.filter(r => r.status === 'Hidden').length;
  const calcAvgRating = approvedCount > 0 
    ? (approvedList.reduce((acc, r) => acc + (r.rating || 5), 0) / approvedCount).toFixed(1) 
    : '0.0';

  return (
    <div style={{ backgroundColor: 'var(--bg-page)', minHeight: '85vh', paddingBottom: '4rem' }}>
      <SEO title="Admin Reviews Dashboard | Sofnest" description="Admin Review Portal" canonical="/admin" />

      {/* Header */}
      <section data-header-bg="#E6D6EA" data-header-theme="light" style={{ backgroundColor: '#E6D6EA', color: 'var(--navy-deep)', padding: '2.5rem 0', borderBottom: '1px solid rgba(201, 165, 106, 0.25)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-accent)', fontWeight: '800', fontSize: '0.78rem', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                <ShieldCheck size={16} /> SOFNEST ADMIN DASHBOARD
              </div>
              <h1 style={{ color: 'var(--navy-deep)', fontSize: '2.25rem', margin: 0 }}>
                Customer Reviews & Ratings Manager
              </h1>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button 
                onClick={exportCSV} 
                className="btn btn-outline" 
                style={{ borderRadius: '50px', fontSize: '0.85rem', fontWeight: '700', padding: '0.6rem 1.25rem' }}
              >
                <Download size={15} /> EXPORT CSV
              </button>

              <button 
                onClick={() => setShowAddForm(true)} 
                className="btn btn-gold" 
                style={{ borderRadius: '50px', fontSize: '0.85rem', fontWeight: '700', padding: '0.6rem 1.25rem' }}
              >
                <Plus size={16} /> ADD MANUAL REVIEW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div className="card" style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--gold-accent)', textTransform: 'uppercase' }}>TOTAL REVIEWS</span>
              <h3 style={{ fontSize: '2rem', color: 'var(--navy-deep)', margin: '0.25rem 0 0 0' }}>{reviewsList.length}</h3>
            </div>

            <div className="card" style={{ backgroundColor: '#F0FDF4', padding: '1.25rem', borderRadius: '16px', border: '1px solid #BBF7D0' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#0d6849', textTransform: 'uppercase' }}>PUBLISHED (APPROVED)</span>
              <h3 style={{ fontSize: '2rem', color: '#0d6849', margin: '0.25rem 0 0 0' }}>{approvedCount}</h3>
            </div>

            <div className="card" style={{ backgroundColor: '#FEF2F2', padding: '1.25rem', borderRadius: '16px', border: '1px solid #FCA5A5' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#B91C1C', textTransform: 'uppercase' }}>HIDDEN REVIEWS</span>
              <h3 style={{ fontSize: '2rem', color: '#B91C1C', margin: '0.25rem 0 0 0' }}>{hiddenCount}</h3>
            </div>

            <div className="card" style={{ backgroundColor: '#FFFDF9', padding: '1.25rem', borderRadius: '16px', border: '1px solid #FDE68A' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#D97706', textTransform: 'uppercase' }}>AVERAGE RATING</span>
              <h3 style={{ fontSize: '2rem', color: '#D97706', margin: '0.25rem 0 0 0', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                {calcAvgRating} <Star size={22} fill={Number(calcAvgRating) > 0 ? "#F59E0B" : "#CBD5E1"} color={Number(calcAvgRating) > 0 ? "#F59E0B" : "#CBD5E1"} />
              </h3>
            </div>
          </div>

          {/* Add Manual Review Modal / Drawer */}
          {showAddForm && (
            <div className="card" style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '20px', marginBottom: '2rem', border: '2px solid var(--gold-accent)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--navy-deep)', margin: 0 }}>Add New Customer Review</h3>
                <button onClick={() => setShowAddForm(false)} className="btn btn-outline" style={{ borderRadius: '50px', padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>CANCEL</button>
              </div>

              <form onSubmit={handleAddSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--navy-deep)' }}>Customer Name *</label>
                  <input type="text" required value={newReview.name} onChange={e => setNewReview({ ...newReview, name: e.target.value })} placeholder="e.g. Pooja Shah" style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '8px', border: '1px solid #CBD5E1' }} />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--navy-deep)' }}>Mobile Number *</label>
                  <input type="text" required value={newReview.mobile} onChange={e => setNewReview({ ...newReview, mobile: e.target.value })} placeholder="e.g. +91 9876543210" style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '8px', border: '1px solid #CBD5E1' }} />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--navy-deep)' }}>City *</label>
                  <input type="text" required value={newReview.city} onChange={e => setNewReview({ ...newReview, city: e.target.value })} placeholder="e.g. Rajkot" style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '8px', border: '1px solid #CBD5E1' }} />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--navy-deep)' }}>Product *</label>
                  <select value={newReview.product} onChange={e => setNewReview({ ...newReview, product: e.target.value })} style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '8px', border: '1px solid #CBD5E1', backgroundColor: '#FFF' }}>
                    <option value="Standard 155 mm Panty Liners">Standard 155 mm Panty Liners</option>
                    <option value="Standard 180 mm Panty Liners">Standard 180 mm Panty Liners</option>
                    <option value="Premium Panty Liners">Sofnest Premium Panty Liners</option>
                    <option value="Sofnest Overall Brand">Sofnest Overall Care</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--navy-deep)' }}>Rating (Stars) *</label>
                  <select value={newReview.rating} onChange={e => setNewReview({ ...newReview, rating: Number(e.target.value) })} style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '8px', border: '1px solid #CBD5E1', backgroundColor: '#FFF' }}>
                    <option value={5}>5 Stars ⭐⭐⭐⭐⭐</option>
                    <option value={4}>4 Stars ⭐⭐⭐⭐</option>
                    <option value={3}>3 Stars ⭐⭐⭐</option>
                    <option value={2}>2 Stars ⭐⭐</option>
                    <option value={1}>1 Star ⭐</option>
                  </select>
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--navy-deep)' }}>Review Description *</label>
                  <textarea rows={3} required value={newReview.description} onChange={e => setNewReview({ ...newReview, description: e.target.value })} placeholder="Customer's feedback..." style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '8px', border: '1px solid #CBD5E1' }} />
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <button type="submit" className="btn btn-gold" style={{ borderRadius: '50px', padding: '0.7rem 1.5rem' }}>PUBLISH REVIEW</button>
                </div>
              </form>
            </div>
          )}

          {/* Main Reviews Table Card */}
          <div className="card" style={{ backgroundColor: '#FFFFFF', padding: 0, overflow: 'hidden', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--navy-deep)', color: '#FFFFFF', fontSize: '0.88rem' }}>
                    <th style={{ padding: '1rem 1.25rem' }}>Customer</th>
                    <th style={{ padding: '1rem 1.25rem' }}>Product</th>
                    <th style={{ padding: '1rem 1.25rem' }}>Rating</th>
                    <th style={{ padding: '1rem 1.25rem', width: '35%' }}>Review Description</th>
                    <th style={{ padding: '1rem 1.25rem' }}>Date</th>
                    <th style={{ padding: '1rem 1.25rem' }}>Status</th>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '0.9rem', color: 'var(--navy-deep)' }}>
                  {reviewsList.map((rev) => (
                    <tr key={rev.id} style={{ borderBottom: '1px solid #F1F5F9', backgroundColor: rev.status === 'Hidden' ? '#FEF2F2' : '#FFFFFF' }}>
                      <td style={{ padding: '1rem 1.25rem' }}>
                        <div style={{ fontWeight: '700' }}>{rev.name}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{rev.mobile} • {rev.city}</div>
                      </td>
                      <td style={{ padding: '1rem 1.25rem', fontSize: '0.85rem' }}>
                        {rev.product}
                      </td>
                      <td style={{ padding: '1rem 1.25rem' }}>
                        <div style={{ display: 'flex', color: '#F59E0B' }}>
                          {[...Array(rev.rating || 5)].map((_, i) => (
                            <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                          ))}
                        </div>
                      </td>
                      <td style={{ padding: '1rem 1.25rem', fontStyle: 'italic', fontSize: '0.88rem', lineHeight: 1.45 }}>
                        "{rev.description}"
                      </td>
                      <td style={{ padding: '1rem 1.25rem', fontSize: '0.82rem', whiteSpace: 'nowrap' }}>
                        {rev.date}
                      </td>
                      <td style={{ padding: '1rem 1.25rem' }}>
                        <span style={{
                          fontSize: '0.72rem',
                          fontWeight: '800',
                          padding: '0.2rem 0.65rem',
                          borderRadius: '12px',
                          backgroundColor: (rev.status || 'Approved') === 'Approved' ? '#DCFCE7' : '#FEE2E2',
                          color: (rev.status || 'Approved') === 'Approved' ? '#15803D' : '#B91C1C'
                        }}>
                          {rev.status || 'Approved'}
                        </span>
                      </td>
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                          <button
                            onClick={() => handleToggleStatus(rev.id)}
                            title={rev.status === 'Hidden' ? 'Approve & Show Review' : 'Hide Review'}
                            style={{
                              backgroundColor: 'transparent',
                              border: '1px solid #CBD5E1',
                              borderRadius: '8px',
                              padding: '0.4rem 0.6rem',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                              fontSize: '0.78rem',
                              color: 'var(--navy-deep)'
                            }}
                          >
                            {rev.status === 'Hidden' ? <Eye size={14} /> : <EyeOff size={14} />}
                            {rev.status === 'Hidden' ? 'Show' : 'Hide'}
                          </button>

                          <button
                            onClick={() => handleDelete(rev.id)}
                            title="Delete Review"
                            style={{
                              backgroundColor: '#FEE2E2',
                              color: '#B91C1C',
                              border: '1px solid #FCA5A5',
                              borderRadius: '8px',
                              padding: '0.4rem 0.6rem',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                              fontSize: '0.78rem'
                            }}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
