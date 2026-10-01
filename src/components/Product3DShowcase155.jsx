'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Feather, Wind, Heart, ShieldCheck } from 'lucide-react';
import { CottonFluffIcon } from './CottonElements';

export default function Product3DShowcase155() {
  const [rotX, setRotX] = useState(8);
  const [rotY, setRotY] = useState(-10);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoFloating, setIsAutoFloating] = useState(true);
  const [activeFeature, setActiveFeature] = useState(null);
  const dragStartRef = useRef({ x: 0, y: 0, rotX: 8, rotY: -10 });
  const containerRef = useRef(null);

  // Gentle idle floating & subtle breathing tilt
  useEffect(() => {
    if (!isAutoFloating || isDragging) return;
    const interval = setInterval(() => {
      const time = Date.now() / 1600;
      setRotY((prev) => Math.sin(time) * 10);
      setRotX((prev) => 6 + Math.cos(time * 1.2) * 5);
    }, 30);
    return () => clearInterval(interval);
  }, [isAutoFloating, isDragging]);

  // Pointer & Touch Drag to Rotate
  const handlePointerDown = (e) => {
    setIsDragging(true);
    setIsAutoFloating(false);
    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
    dragStartRef.current = {
      x: clientX,
      y: clientY,
      rotX,
      rotY
    };
  };

  const handlePointerMove = useCallback((e) => {
    if (!isDragging) return;
    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
    const deltaX = clientX - dragStartRef.current.x;
    const deltaY = clientY - dragStartRef.current.y;

    const sensitivity = 0.45;
    const nextRotY = dragStartRef.current.rotY + deltaX * sensitivity;
    const nextRotX = Math.max(-25, Math.min(30, dragStartRef.current.rotX - deltaY * sensitivity));

    setRotY(nextRotY);
    setRotX(nextRotX);
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handlePointerMove);
      window.addEventListener('mouseup', handlePointerUp);
      window.addEventListener('touchmove', handlePointerMove, { passive: false });
      window.addEventListener('touchend', handlePointerUp);
    } else {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
    }
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [isDragging, handlePointerMove, handlePointerUp]);

  const featuresList = [
    {
      id: 'ultraThin',
      title: 'Ultra Thin',
      desc: 'Comfort without bulk. Feels like wearing nothing extra.',
      icon: <Feather size={24} color="#4A0427" strokeWidth={1.8} />,
      targetAngle: { x: 8, y: -16 }
    },
    {
      id: 'cottonySoft',
      title: 'Cottony Soft',
      desc: 'Soft against your skin for delicate daily comfort.',
      icon: <CottonFluffIcon size={24} color="#4A0427" />,
      targetAngle: { x: 8, y: 16 }
    },
    {
      id: 'breathable',
      title: 'Breathable',
      desc: 'Fresh & comfortable feel throughout busy hours.',
      icon: <Wind size={24} color="#4A0427" strokeWidth={1.8} />,
      targetAngle: { x: 4, y: -14 }
    },
    {
      id: 'flexibleFit',
      title: 'Flexible Fit',
      desc: 'Moves comfortably with your body and underwear style.',
      icon: <Heart size={24} color="#4A0427" strokeWidth={1.8} />,
      targetAngle: { x: 4, y: 14 }
    },
    {
      id: 'secureAdhesive',
      title: 'Secure Adhesive',
      desc: 'Helps keep the liner securely in place all day.',
      icon: <ShieldCheck size={24} color="#4A0427" strokeWidth={1.8} />,
      targetAngle: { x: 16, y: 0 }
    }
  ];

  const features = {
    ultraThin: featuresList[0],
    cottonySoft: featuresList[1],
    breathable: featuresList[2],
    flexibleFit: featuresList[3],
    secureAdhesive: featuresList[4]
  };

  const triggerFeature = (key) => {
    setActiveFeature(key);
    setIsAutoFloating(false);
    if (features[key]) {
      setRotX(features[key].targetAngle.x);
      setRotY(features[key].targetAngle.y);
    }
  };

  return (
    <div className="sofnest-feature-showcase-container">
      {/* ========================================================= */}
      {/* DESKTOP VIEW: RADIAL ANATOMICAL DIAGRAM WITH SVG POINTERS */}
      {/* ========================================================= */}
      <div className="desktop-diagram-wrapper">
        {/* Center Halo Disc */}
        <div className="center-halo-disc" />

        {/* SVG Connecting Lines */}
        <svg className="svg-connector-canvas" viewBox="0 0 1000 440" preserveAspectRatio="none">
          {/* Ultra Thin */}
          <path
            d="M 310 70 C 370 70, 415 90, 455 105"
            fill="none"
            stroke={activeFeature === 'ultraThin' ? '#8A1C4D' : '#C7A8BD'}
            strokeWidth={activeFeature === 'ultraThin' ? '2.4' : '1.4'}
            strokeDasharray="4 3"
          />
          <circle cx="310" cy="70" r="3.5" fill="#8A1C4D" />
          <circle cx="455" cy="105" r="4" fill="#8A1C4D" />

          {/* Breathable */}
          <path
            d="M 310 215 C 370 215, 415 200, 458 190"
            fill="none"
            stroke={activeFeature === 'breathable' ? '#8A1C4D' : '#C7A8BD'}
            strokeWidth={activeFeature === 'breathable' ? '2.4' : '1.4'}
            strokeDasharray="4 3"
          />
          <circle cx="310" cy="215" r="3.5" fill="#8A1C4D" />
          <circle cx="458" cy="190" r="4" fill="#8A1C4D" />

          {/* Cottony Soft */}
          <path
            d="M 690 70 C 630 70, 585 90, 545 105"
            fill="none"
            stroke={activeFeature === 'cottonySoft' ? '#8A1C4D' : '#C7A8BD'}
            strokeWidth={activeFeature === 'cottonySoft' ? '2.4' : '1.4'}
            strokeDasharray="4 3"
          />
          <circle cx="690" cy="70" r="3.5" fill="#8A1C4D" />
          <circle cx="545" cy="105" r="4" fill="#8A1C4D" />

          {/* Flexible Fit */}
          <path
            d="M 690 215 C 630 215, 585 200, 542 190"
            fill="none"
            stroke={activeFeature === 'flexibleFit' ? '#8A1C4D' : '#C7A8BD'}
            strokeWidth={activeFeature === 'flexibleFit' ? '2.4' : '1.4'}
            strokeDasharray="4 3"
          />
          <circle cx="690" cy="215" r="3.5" fill="#8A1C4D" />
          <circle cx="542" cy="190" r="4" fill="#8A1C4D" />

          {/* Secure Adhesive */}
          <path
            d="M 500 335 C 500 305, 500 280, 500 260"
            fill="none"
            stroke={activeFeature === 'secureAdhesive' ? '#8A1C4D' : '#C7A8BD'}
            strokeWidth={activeFeature === 'secureAdhesive' ? '2.4' : '1.4'}
            strokeDasharray="4 3"
          />
          <circle cx="500" cy="335" r="3.5" fill="#8A1C4D" />
          <circle cx="500" cy="260" r="4" fill="#8A1C4D" />
        </svg>

        {/* 3-Column Diagram Grid */}
        <div className="showcase-diagram-grid">
          {/* Left Column: Ultra Thin, Breathable */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div
              className={`feature-node-box ${activeFeature === 'ultraThin' ? 'active' : ''}`}
              onMouseEnter={() => triggerFeature('ultraThin')}
              onMouseLeave={() => setActiveFeature(null)}
              onClick={() => triggerFeature('ultraThin')}
            >
              <div className="feature-circle-icon">{features.ultraThin.icon}</div>
              <div className="feature-title-text">{features.ultraThin.title}</div>
              <p className="feature-desc-text">{features.ultraThin.desc}</p>
            </div>

            <div
              className={`feature-node-box ${activeFeature === 'breathable' ? 'active' : ''}`}
              onMouseEnter={() => triggerFeature('breathable')}
              onMouseLeave={() => setActiveFeature(null)}
              onClick={() => triggerFeature('breathable')}
            >
              <div className="feature-circle-icon">{features.breathable.icon}</div>
              <div className="feature-title-text">{features.breathable.title}</div>
              <p className="feature-desc-text">{features.breathable.desc}</p>
            </div>
          </div>

          {/* Center Column: 3D Panty Liner */}
          <div
            ref={containerRef}
            className="stage-3d-liner"
            onPointerDown={handlePointerDown}
          >
            <div className="liner-3d-viewport">
              <div
                className="liner-3d-card"
                style={{
                  transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`,
                  transition: isDragging ? 'none' : 'transform 0.2s ease-out'
                }}
              >
                <img
                  src="/Pentyliner%20icons/155%20mm%20pentyliner.png"
                  alt="Sofnest Standard Panty Liner 155 mm"
                  className="floating-pad-img"
                  draggable={false}
                />
              </div>
            </div>

            <div style={{
              width: '130px',
              height: '14px',
              borderRadius: '50%',
              background: 'radial-gradient(ellipse at center, rgba(138, 28, 77, 0.22) 0%, rgba(138, 28, 77, 0.04) 50%, transparent 75%)',
              transform: `scaleX(${1 + Math.abs(Math.sin(rotY * (Math.PI / 180))) * 0.3})`,
              marginTop: '-8px',
              pointerEvents: 'none'
            }} />
          </div>

          {/* Right Column: Cottony Soft, Flexible Fit */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div
              className={`feature-node-box ${activeFeature === 'cottonySoft' ? 'active' : ''}`}
              onMouseEnter={() => triggerFeature('cottonySoft')}
              onMouseLeave={() => setActiveFeature(null)}
              onClick={() => triggerFeature('cottonySoft')}
            >
              <div className="feature-circle-icon">{features.cottonySoft.icon}</div>
              <div className="feature-title-text">{features.cottonySoft.title}</div>
              <p className="feature-desc-text">{features.cottonySoft.desc}</p>
            </div>

            <div
              className={`feature-node-box ${activeFeature === 'flexibleFit' ? 'active' : ''}`}
              onMouseEnter={() => triggerFeature('flexibleFit')}
              onMouseLeave={() => setActiveFeature(null)}
              onClick={() => triggerFeature('flexibleFit')}
            >
              <div className="feature-circle-icon">{features.flexibleFit.icon}</div>
              <div className="feature-title-text">{features.flexibleFit.title}</div>
              <p className="feature-desc-text">{features.flexibleFit.desc}</p>
            </div>
          </div>
        </div>

        {/* Bottom Center: Secure Adhesive */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6rem', position: 'relative', zIndex: 4 }}>
          <div
            className={`feature-node-box ${activeFeature === 'secureAdhesive' ? 'active' : ''}`}
            onMouseEnter={() => triggerFeature('secureAdhesive')}
            onMouseLeave={() => setActiveFeature(null)}
            onClick={() => triggerFeature('secureAdhesive')}
            style={{ maxWidth: '280px' }}
          >
            <div className="feature-circle-icon" style={{ width: '54px', height: '54px', marginBottom: '0.35rem' }}>
              {features.secureAdhesive.icon}
            </div>
            <div className="feature-title-text" style={{ fontSize: '1.3rem' }}>{features.secureAdhesive.title}</div>
            <p className="feature-desc-text">{features.secureAdhesive.desc}</p>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE VIEW: CLEAN DEDICATED 3D STAGE & FEATURE CARDS     */}
      {/* ========================================================= */}
      <div className="mobile-diagram-wrapper">
        {/* Mobile 3D Interactive Stage */}
        <div
          className="mobile-stage-card"
          onPointerDown={handlePointerDown}
        >
          <div style={{
            perspective: '1000px',
            width: '100%',
            height: '210px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`,
                transition: isDragging ? 'none' : 'transform 0.2s ease-out'
              }}
            >
              <img
                src="/Pentyliner%20icons/155%20mm%20pentyliner.png"
                alt="Sofnest Panty Liner 155mm 3D"
                style={{
                  maxHeight: '200px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 10px 16px rgba(74, 4, 39, 0.14))',
                  pointerEvents: 'none'
                }}
              />
            </div>
          </div>

          <div style={{
            width: '110px',
            height: '10px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(138, 28, 77, 0.2) 0%, transparent 75%)',
            marginTop: '-6px'
          }} />

          <div className="mobile-hint-pill">
            <span>👆</span> <span>Touch & Swipe to Rotate 3D</span>
          </div>
        </div>

        {/* Mobile 2-Column Feature Cards */}
        <div className="mobile-features-grid">
          {/* Ultra Thin */}
          <div
            className={`mobile-feature-card ${activeFeature === 'ultraThin' ? 'active' : ''}`}
            onClick={() => triggerFeature('ultraThin')}
          >
            <div className="mobile-circle-icon">{features.ultraThin.icon}</div>
            <div className="mobile-card-title">{features.ultraThin.title}</div>
            <p className="mobile-card-desc">{features.ultraThin.desc}</p>
          </div>

          {/* Cottony Soft */}
          <div
            className={`mobile-feature-card ${activeFeature === 'cottonySoft' ? 'active' : ''}`}
            onClick={() => triggerFeature('cottonySoft')}
          >
            <div className="mobile-circle-icon">{features.cottonySoft.icon}</div>
            <div className="mobile-card-title">{features.cottonySoft.title}</div>
            <p className="mobile-card-desc">{features.cottonySoft.desc}</p>
          </div>

          {/* Breathable */}
          <div
            className={`mobile-feature-card ${activeFeature === 'breathable' ? 'active' : ''}`}
            onClick={() => triggerFeature('breathable')}
          >
            <div className="mobile-circle-icon">{features.breathable.icon}</div>
            <div className="mobile-card-title">{features.breathable.title}</div>
            <p className="mobile-card-desc">{features.breathable.desc}</p>
          </div>

          {/* Flexible Fit */}
          <div
            className={`mobile-feature-card ${activeFeature === 'flexibleFit' ? 'active' : ''}`}
            onClick={() => triggerFeature('flexibleFit')}
          >
            <div className="mobile-circle-icon">{features.flexibleFit.icon}</div>
            <div className="mobile-card-title">{features.flexibleFit.title}</div>
            <p className="mobile-card-desc">{features.flexibleFit.desc}</p>
          </div>

          {/* Secure Adhesive (Full Span 2 Columns on Mobile) */}
          <div
            className={`mobile-feature-card full-span ${activeFeature === 'secureAdhesive' ? 'active' : ''}`}
            onClick={() => triggerFeature('secureAdhesive')}
          >
            <div className="mobile-circle-icon">{features.secureAdhesive.icon}</div>
            <div>
              <div className="mobile-card-title">{features.secureAdhesive.title}</div>
              <p className="mobile-card-desc">{features.secureAdhesive.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
