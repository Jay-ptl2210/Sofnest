import React, { useState } from 'react';

/**
 * Beautiful Organic Cotton Boll Illustration SVG
 */
export function CottonFluffIcon({ size = 20, color = '#C9A56A', className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`cotton-fluff-icon ${className}`}
    >
      {/* Fluffy Cotton Cloud Outline */}
      <path d="M12 3.8a3.8 3.8 0 0 0-3.4 2.1A3.8 3.8 0 0 0 4 9.8a3.8 3.8 0 0 0 1.8 3.3A4.2 4.2 0 0 0 12 16.8a4.2 4.2 0 0 0 6.2-3.7A3.8 3.8 0 0 0 20 9.8a3.8 3.8 0 0 0-4.6-3.9A3.8 3.8 0 0 0 12 3.8z" />
      {/* Inner Sepal Detail */}
      <path d="M9 11.8l3 2.2 3-2.2" />
      {/* Stem */}
      <path d="M12 16.8v4.2" />
    </svg>
  );
}

/**
 * Panty Liner Shape SVG Icon
 */
export function PantyLinerIcon({ size = 32, color = '#7B9B7A', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" className={className}>
      {/* Outer Liner Contour */}
      <path 
        d="M 30,6 C 18,6 16,18 20,30 C 16,42 18,54 30,54 C 42,54 44,42 40,30 C 44,18 42,6 30,6 Z" 
        fill={color} 
        fillOpacity="0.15" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinejoin="round" 
      />
      {/* Inner Embossed Line Pattern */}
      <path 
        d="M 30,13 C 23,13 22,21 24,30 C 22,39 23,47 30,47 C 37,47 38,39 36,30 C 38,21 37,13 30,13 Z" 
        stroke={color} 
        strokeWidth="1.8" 
        strokeDasharray="2 2" 
        strokeOpacity="0.75" 
      />
      {/* Micro Perforation Central Dots */}
      <circle cx="30" cy="22" r="1.8" fill={color} />
      <circle cx="30" cy="30" r="1.8" fill={color} />
      <circle cx="30" cy="38" r="1.8" fill={color} />
    </svg>
  );
}

/**
 * Disposable Panties Vector SVG Icon
 */
export function DisposablePantiesIcon({ size = 32, color = '#29315B', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" className={className}>
      {/* Panties Silhouette Contour */}
      <path 
        d="M 10,18 C 18,22 42,22 50,18 L 44,44 C 36,52 24,52 16,44 Z" 
        fill={color} 
        fillOpacity="0.12" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinejoin="round" 
      />
      {/* Elastic Waistband Detail */}
      <path 
        d="M 10,18 Q 30,23 50,18" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      {/* Leg Hole Contours */}
      <path 
        d="M 10,18 Q 22,34 30,50" 
        stroke={color} 
        strokeWidth="1.8" 
        strokeDasharray="2.5 2.5" 
      />
      <path 
        d="M 50,18 Q 38,34 30,50" 
        stroke={color} 
        strokeWidth="1.8" 
        strokeDasharray="2.5 2.5" 
      />
    </svg>
  );
}

/**
 * Botanical Leaf Motif Vector
 */
export function BotanicalLeafIcon({ size = 36, color = '#D8AA55', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" className={className}>
      <path d="M 10 50 C 20 20, 45 10, 50 10 C 50 15, 40 40, 10 50 Z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M 10 50 Q 30 30 50 10" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 22 40 Q 28 34 32 36" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 32 30 Q 38 24 42 26" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Interactive 5-Layer Cotton Construction Diagram
 */
export function CottonLayersDiagram() {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      title: '1. Cottony Soft Top Sheet',
      subtitle: '100% Organic Feel & Gentle Skin Contact',
      desc: 'Formulated with ultra-soft micro-perforated cottony fibers that channel moisture away instantly while keeping your skin dry and friction-free.',
      color: '#0d6849',
      bgColor: '#EAF8F3',
      icon: '🌿'
    },
    {
      title: '2. 3D Breathable Air-Flow Core',
      subtitle: 'Continuous Micro-Ventilation Layer',
      desc: 'Engineered with thousands of microscopic air vents allowing natural thermal circulation to prevent humidity and heat buildup.',
      color: '#29315B',
      bgColor: '#F1E3F6',
      icon: '💨'
    },
    {
      title: '3. Ultra-Thin Micro-Lock Matrix',
      subtitle: 'Lightweight Absorbency Without Bulk',
      desc: 'Compact absorbent core that locks away natural discharge and light moisture, maintaining a feather-light 1.2 mm profile.',
      color: '#BE8D92',
      bgColor: '#F1D8DD',
      icon: '✨'
    },
    {
      title: '4. Flexible Anti-Bunching Shield',
      subtitle: 'Dynamic Contour & Body-Conforming Fit',
      desc: 'Moves fluidly with your body contours during walking, workouts, or sitting without twisting, clumping, or losing shape.',
      color: '#C99952',
      bgColor: '#FFF9FA',
      icon: '🛡️'
    },
    {
      title: '5. Secure Full-Length Adhesive Backing',
      subtitle: 'Stay-Put Grip & Zero Slip Guarantee',
      desc: 'Edge-to-edge non-toxic adhesive strip anchors the liner securely to cotton, satin, or seamless underwear fabrics.',
      color: '#12184B',
      bgColor: '#FAF9F6',
      icon: '🔒'
    }
  ];

  return (
    <div className="card floating-element" style={{
      padding: '2.5rem',
      backgroundColor: '#FFFFFF',
      borderRadius: '24px',
      boxShadow: '0 20px 40px rgba(18, 24, 75, 0.08)',
      border: '1px solid rgba(216, 170, 85, 0.3)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="badge badge-available" style={{ marginBottom: '0.5rem' }}>INNER ANATOMY & TECHNOLOGY</span>
        <h3 style={{ fontSize: '2.25rem', color: 'var(--navy-deep)' }}>
          Inside Sofnest Panty Liners
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '600px', margin: '0.5rem auto 0 auto' }}>
          Explore our 5-layer cotton-soft technology designed for maximum breathability, comfort, and stay-put security.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
        {/* Visual 3D Stack Illustration */}
        <div style={{ position: 'relative', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.75rem' }}>
          {layers.map((layer, idx) => {
            const isSelected = activeLayer === idx;
            return (
              <div 
                key={idx}
                onClick={() => setActiveLayer(idx)}
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '16px',
                  backgroundColor: isSelected ? layer.bgColor : '#FFFFFF',
                  border: isSelected ? `2px solid ${layer.color}` : '1.5px solid #E2E8F0',
                  boxShadow: isSelected ? `0 8px 20px ${layer.color}25` : 'none',
                  cursor: 'pointer',
                  transform: isSelected ? 'scale(1.03) translateX(8px)' : 'scale(1)',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <span style={{ fontSize: '1.35rem' }}>{layer.icon}</span>
                  <div>
                    <h5 style={{ fontSize: '1rem', color: isSelected ? layer.color : 'var(--navy-deep)', margin: 0, fontWeight: '700' }}>
                      {layer.title}
                    </h5>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      {layer.subtitle}
                    </span>
                  </div>
                </div>

                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: isSelected ? layer.color : '#CBD5E1',
                  transition: 'background-color 0.3s'
                }} />
              </div>
            );
          })}
        </div>

        {/* Selected Layer Feature Detail Card */}
        <div style={{
          backgroundColor: layers[activeLayer].bgColor,
          borderRadius: '20px',
          padding: '2rem',
          border: `2px solid ${layers[activeLayer].color}40`,
          animation: 'fadeIn 0.3s ease-out'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '2.5rem' }}>{layers[activeLayer].icon}</span>
            <div>
              <span className="badge" style={{ backgroundColor: `${layers[activeLayer].color}20`, color: layers[activeLayer].color }}>
                LAYER {activeLayer + 1} OF 5
              </span>
              <h4 style={{ fontSize: '1.5rem', color: layers[activeLayer].color, margin: '0.2rem 0 0 0' }}>
                {layers[activeLayer].title}
              </h4>
            </div>
          </div>

          <p style={{ fontSize: '1.05rem', color: 'var(--navy-deep)', fontWeight: '600', marginBottom: '0.75rem' }}>
            {layers[activeLayer].subtitle}
          </p>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            {layers[activeLayer].desc}
          </p>

          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: '600' }}>
              Click layers to inspect anatomy
            </span>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {layers.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveLayer(i)}
                  style={{
                    width: i === activeLayer ? '20px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: i === activeLayer ? layers[activeLayer].color : '#CBD5E1',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
