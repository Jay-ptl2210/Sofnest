import React from 'react';

/**
 * Custom SVG Illustrations matching packaging panel artwork for "HOW TO USE" & "AFTER USE & DISPOSAL"
 */

// Step 1: PEEL Illustration
export function PeelIllustration({ size = 140 }) {
  return (
    <img 
      src="/Pentyliner%20icons/Peel.png" 
      alt="PEEL step illustration" 
      style={{ 
        width: size, 
        height: size, 
        objectFit: 'contain',
        mixBlendMode: 'multiply'
      }} 
    />
  );
}

// Step 2: PLACE Illustration
export function PlaceIllustration({ size = 140 }) {
  return (
    <img 
      src="/Pentyliner%20icons/Place.png" 
      alt="PLACE step illustration" 
      style={{ 
        width: size, 
        height: size, 
        objectFit: 'contain',
        mixBlendMode: 'multiply'
      }} 
    />
  );
}

// Step 3: PRESS Illustration
export function PressIllustration({ size = 140 }) {
  return (
    <img 
      src="/Pentyliner%20icons/Press.png" 
      alt="PRESS step illustration" 
      style={{ 
        width: size, 
        height: size, 
        objectFit: 'contain',
        mixBlendMode: 'multiply'
      }} 
    />
  );
}

// Disposal Step 1: WRAP
export function WrapIllustration({ size = 130 }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      border: '2.5px solid #A0AEC0',
      backgroundColor: '#FFFFFF',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      overflow: 'hidden'
    }}>
      <img 
        src="/How%20to%20dispose/wrap.png" 
        alt="WRAP step illustration" 
        style={{ 
          width: '92%', 
          height: '92%', 
          objectFit: 'contain',
          mixBlendMode: 'multiply'
        }} 
      />
    </div>
  );
}

// Disposal Step 2: BIN
export function BinIllustration({ size = 130 }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      border: '2.5px solid #A0AEC0',
      backgroundColor: '#FFFFFF',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      overflow: 'hidden'
    }}>
      <img 
        src="/How%20to%20dispose/bin.png" 
        alt="BIN step illustration" 
        style={{ 
          width: '92%', 
          height: '92%', 
          objectFit: 'contain',
          mixBlendMode: 'multiply'
        }} 
      />
    </div>
  );
}

// Disposal Step 3: DO NOT FLUSH
export function NoFlushIllustration({ size = 130 }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      border: '2.5px solid #A0AEC0',
      backgroundColor: '#FFFFFF',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      overflow: 'hidden'
    }}>
      <img 
        src="/How%20to%20dispose/donotflush.png" 
        alt="DO NOT FLUSH step illustration" 
        style={{ 
          width: '92%', 
          height: '92%', 
          objectFit: 'contain',
          mixBlendMode: 'multiply'
        }} 
      />
    </div>
  );
}
