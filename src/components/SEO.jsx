'use client';

import React, { useEffect } from 'react';

const DEFAULT_SITE_URL = 'https://sofnest.in';
const DEFAULT_TITLE = "Sofnest | Daily Panty Liners & Thoughtful Women's Hygiene Care";
const DEFAULT_DESCRIPTION = "Sofnest provides thoughtful women's care designed for everyday freshness, period days, and every moment in between. Discover our breathable, cottony-soft 155mm & 180mm Panty Liners.";
const DEFAULT_IMAGE = `${DEFAULT_SITE_URL}/Pentyliner%20icons/pentyliner.png`;
const DEFAULT_KEYWORDS = "panty liners, daily panty liner, 155mm panty liner, 180mm long liner, cotton panty liner, women hygiene, period care, vaginal discharge care, organic cotton liners, feminine care india";

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  keywords = DEFAULT_KEYWORDS,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noIndex = false,
  schema = null
}) {
  const fullTitle = title ? `${title} | Sofnest` : DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  
  let canonicalUrl = DEFAULT_SITE_URL;
  if (canonical) {
    canonicalUrl = canonical.startsWith('http') ? canonical : `${DEFAULT_SITE_URL}${canonical.startsWith('/') ? '' : '/'}${canonical}`;
  }

  const schemasToRender = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  useEffect(() => {
    document.title = fullTitle;
  }, [fullTitle]);

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywords} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content="Sofnest" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || pageDescription} />
      <meta name="twitter:image" content={ogImage} />

      {schemasToRender.map((schemaObj, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />
      ))}
    </>
  );
}
