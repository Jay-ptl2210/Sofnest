import React from 'react';

/**
 * Vector reproduction of official Sofnest Logo from Sofnest.pdf
 * Features:
 * - High-contrast serif typography
 * - Woman silhouette side-profile inside the 'o' emblem
 * - Leaf/feather crossbar flourish on the 't' stem
 */
export default function SofnestLogo({ variant = 'gold', height = 38, className = '', src = null }) {
  // If variant is gold, gold-slogan, navy, dark or custom src is supplied, render the official PNG logo from public/logos
  const imageMap = {
    'gold': '/logos/Sofnest Gold white.png',
    'gold-slogan': '/logos/Sofnest Gold white With slogan.png',
    'slogan': '/logos/Sofnest Gold white With slogan.png',
    'navy': '/logos/Sofnest Dark Blue.png',
    'dark': '/logos/Sofnest Dark Blue.png'
  };

  const imageSrc = src || imageMap[variant] || null;

  if (imageSrc) {
    return (
      <div 
        className={`sofnest-logo-container ${className}`}
        style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          height: `${height}px`,
          cursor: 'pointer',
          userSelect: 'none'
        }}
      >
        <img 
          src={imageSrc} 
          alt="Sofnest Logo" 
          style={{ 
            height: `${height}px`, 
            width: 'auto', 
            objectFit: 'contain' 
          }} 
        />
      </div>
    );
  }

  // Color presets based on user brand strategy
  let primaryColor = '#C99952'; // Champagne Gold
  let secondaryColor = '#FFFFFF';

  if (variant === 'navy') {
    primaryColor = '#29315B'; // Deep Navy
    secondaryColor = '#BE8D92';
  } else if (variant === 'white') {
    primaryColor = '#FFFFFF';
    secondaryColor = '#C99952';
  } else if (variant === 'dark') {
    primaryColor = '#29315B';
    secondaryColor = '#C99952';
  } else if (variant === 'berry') {
    primaryColor = '#BE8D92';
    secondaryColor = '#C99952';
  }

  return (
    <div 
      className={`sofnest-logo-container ${className}`}
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        height: `${height}px`,
        cursor: 'pointer',
        userSelect: 'none'
      }}
    >
      <svg 
        viewBox="0 0 340 95" 
        height={height} 
        style={{ width: 'auto', overflow: 'visible' }}
        aria-label="Sofnest Logo"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5BE6B" />
            <stop offset="50%" stopColor="#D8AA55" />
            <stop offset="100%" stopColor="#B38734" />
          </linearGradient>
        </defs>

        <g fill={variant === 'gold' ? 'url(#goldGradient)' : primaryColor}>
          {/* 'S' - Elegant Serif Swash */}
          <path d="M42 32 C38 25, 28 20, 18 25 C8 30, 4 40, 10 52 C16 63, 34 65, 36 75 C37 83, 27 88, 16 85 C9 83, 4 77, 2 71 L0 74 C3 83, 11 92, 22 92 C36 92, 47 82, 45 68 C43 54, 25 51, 21 41 C18 33, 25 27, 34 29 C40 30, 44 34, 46 38 Z" />

          {/* 'o' - Silhouette Medallion Container Circle */}
          <circle cx="68" cy="58" r="18" fill="none" stroke={variant === 'gold' ? 'url(#goldGradient)' : primaryColor} strokeWidth="3.5" />
          
          {/* Woman Profile Silhouette inside 'o' */}
          <g transform="translate(56, 44) scale(0.65)">
            {/* Smooth side profile facing right */}
            <path d="M 16,3 C 24,3 30,9 30,17 C 30,22 27,27 24,30 C 23,28 22,25 20,24 C 19,23 18,22 18,20 C 18,19 19,18 20,18 C 20.8,18 21.5,18.4 22,19 C 22.8,17 22,15 20,15 C 18,15 17,16.5 16,18 C 15.2,16 14,15 12,15 C 9.5,15 8,17.5 8,20 C 8,24 12,28 15,31 C 11,30 6,26 6,20 C 6,11 11,3 16,3 Z" fill={variant === 'gold' ? 'url(#goldGradient)' : primaryColor} />
            {/* Graceful Hair Wave */}
            <path d="M 12,5 C 7,9 4,16 4,23 C 4,30 9,35 15,37 C 11,35 8,31 8,25 C 8,19 11,12 16,8 Z" opacity="0.8" />
          </g>

          {/* 'f' - Tall Elegant Script Swash */}
          <path d="M 102 18 C 96 18, 92 24, 91 32 L 88 56 L 81 56 L 81 61 L 87 61 L 80 92 L 86 92 L 93 61 L 105 61 L 105 56 L 94 56 L 97 32 C 98 26, 100 23, 104 23 C 106 23, 107 24, 108 25 L 110 21 C 108 19, 105 18, 102 18 Z" />

          {/* 'n' - Classical Serif */}
          <path d="M 112 42 L 119 42 L 119 46 C 123 43, 128 41, 134 41 C 144 41, 149 47, 149 57 L 149 86 L 155 86 L 155 90 L 138 90 L 138 86 L 143 86 L 143 59 C 143 51, 140 46, 133 46 C 126 46, 121 51, 121 60 L 121 86 L 127 86 L 127 90 L 110 90 L 110 86 L 116 86 L 116 46 L 112 46 Z" />

          {/* 'e' - Refined Serif */}
          <path d="M 179 60 C 179 48, 170 41, 160 41 C 149 41, 140 51, 140 65 C 140 79, 149 90, 162 90 C 171 90, 177 84, 179 77 L 173 76 C 171 81, 167 85, 161 85 C 152 85, 146 78, 146 66 L 179 66 C 179 64, 179 62, 179 60 Z M 146 62 C 147 52, 153 46, 160 46 C 167 46, 173 52, 173 62 Z" />

          {/* 's' - Soft Lowercase Serif */}
          <path d="M 200 48 C 196 43, 190 41, 184 44 C 179 47, 177 52, 180 57 C 183 62, 194 63, 196 68 C 197 73, 191 76, 185 75 C 180 74, 176 70, 175 66 L 170 67 C 172 74, 177 80, 185 80 C 194 80, 202 75, 201 67 C 200 59, 187 57, 185 52 C 183 48, 187 45, 192 46 C 196 47, 199 50, 200 53 Z" transform="translate(3, 10)" />

          {/* 't' - Tall Stem & Feather Flourish Crossbar */}
          <path d="M 218 26 L 224 26 L 224 42 L 235 42 L 235 47 L 224 47 L 224 76 C 224 82, 227 85, 233 85 C 236 85, 239 84, 241 82 L 243 86 C 240 89, 235 90, 230 90 C 221 90, 217 84, 217 74 L 217 47 L 209 47 L 209 42 L 217 42 Z" />

          {/* Detailed Feather Emblem on 't' Crossbar */}
          <g transform="translate(225, 20)">
            {/* Feather Main Shaft */}
            <path d="M 0 24 Q 25 18 55 12" stroke={variant === 'gold' ? 'url(#goldGradient)' : strokeColor(variant)} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Upper Vanes */}
            <path d="M 12 21 C 20 12, 35 10, 52 11 C 40 16, 25 19, 12 21 Z" />
            {/* Lower Vanes */}
            <path d="M 18 23 C 28 23, 42 20, 55 12 C 42 24, 28 26, 18 23 Z" opacity="0.85" />
            {/* Subtle Feather Barbs detail */}
            <line x1="22" y1="18" x2="30" y2="13" stroke={primaryColor} strokeWidth="1" />
            <line x1="32" y1="16" x2="40" y2="12" stroke={primaryColor} strokeWidth="1" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function strokeColor(variant) {
  if (variant === 'navy') return '#12184B';
  if (variant === 'white') return '#FFFFFF';
  if (variant === 'berry') return '#9E2557';
  return '#D8AA55';
}
