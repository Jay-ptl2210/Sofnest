import React from 'react';
import Link from 'next/link';
import { ARTICLES_DATA } from '../../../data/articles';
import { ArrowLeft, Clock, ShieldAlert } from 'lucide-react';
import SEO from '../../../components/SEO';

export function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    id: article.id,
  }));
}

/**
 * Helper to parse inline **bold** syntax into React <strong> tags
 */
function parseInlineBold(text) {
  if (!text) return text;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ color: '#2A1A2C', fontWeight: '700' }}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

/**
 * Robust markdown to clean React JSX parser for article content
 */
function renderArticleJSX(content) {
  if (!content) return null;
  const blocks = content.split('\n\n').map(b => b.trim()).filter(Boolean);

  return blocks.map((block, idx) => {
    // Heading 3
    if (block.startsWith('###')) {
      return (
        <h3 key={idx} style={{ 
          fontSize: '1.45rem', 
          color: '#2A1A2C', 
          marginTop: '2.25rem', 
          marginBottom: '1rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: '700'
        }}>
          {parseInlineBold(block.replace(/^###\s*/, ''))}
        </h3>
      );
    }

    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
    const isList = lines.length > 1 && lines.every(l => l.startsWith('-') || /^\d+\./.test(l));

    // Bullet or Numbered List
    if (isList) {
      return (
        <ul key={idx} style={{ 
          paddingLeft: '1.5rem', 
          marginBottom: '1.75rem', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.75rem',
          color: '#554257',
          fontFamily: 'var(--font-body)',
          fontSize: '1.02rem',
          lineHeight: 1.65
        }}>
          {lines.map((line, lIdx) => {
            const cleanLine = line.replace(/^(-\s*|\d+\.\s*)/, '');
            return (
              <li key={lIdx} style={{ listStyleType: 'disc' }}>
                {parseInlineBold(cleanLine)}
              </li>
            );
          })}
        </ul>
      );
    }

    // Standard Clean Paragraph
    return (
      <p key={idx} style={{ 
        marginBottom: '1.35rem', 
        lineHeight: 1.75, 
        color: '#554257',
        fontFamily: 'var(--font-body)',
        fontSize: '1.02rem'
      }}>
        {parseInlineBold(block)}
      </p>
    );
  });
}

export default function ArticleDetailPage({ params }) {
  const articleId = params?.id;
  const article = ARTICLES_DATA.find(a => a.id === articleId) || ARTICLES_DATA[0];

  const articleSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.summary,
      "articleSection": article.category,
      "url": `https://sofnest.in/care-guide/${article.id}`,
      "publisher": {
        "@type": "Organization",
        "name": "Sofnest",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sofnest.in/Pentyliner%20icons/pentyliner.png"
        }
      },
      "author": {
        "@type": "Organization",
        "name": "Sofnest Editorial Team"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sofnest.in" },
        { "@type": "ListItem", "position": 2, "name": "Care Guide", "item": "https://sofnest.in/care-guide" },
        { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://sofnest.in/care-guide/${article.id}` }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-page)', minHeight: '80vh' }}>
      <SEO 
        title={`${article.title} | Sofnest Care Guide`}
        description={article.summary}
        canonical={`/care-guide/${article.id}`}
        ogType="article"
        keywords={`${article.title}, ${article.category}, panty liners guide, women personal care, sofnest hygiene`}
        schema={articleSchemas}
      />
      {/* Header Banner */}
      <section 
        data-header-bg="#FAF0F3" 
        data-header-theme="light"
        style={{ 
          backgroundColor: '#FAF0F3', 
          color: '#2A1A2C', 
          padding: '3.75rem 1rem 3.5rem 1rem',
          borderBottom: '1px solid rgba(138, 59, 82, 0.12)'
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <Link 
            href="/care-guide" 
            style={{ 
              color: '#8A3B52', 
              textDecoration: 'none', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              fontSize: '0.85rem', 
              marginBottom: '1.25rem', 
              fontWeight: '700',
              letterSpacing: '0.05em'
            }}
          >
            <ArrowLeft size={16} /> BACK TO CARE GUIDE
          </Link>
          
          <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span style={{ 
              backgroundColor: '#FFFFFF', 
              color: '#8A3B52', 
              fontWeight: '700',
              fontSize: '0.74rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              padding: '0.25rem 0.75rem',
              borderRadius: '999px',
              border: '1px solid rgba(138, 59, 82, 0.2)'
            }}>
              {article.category}
            </span>
            <span style={{ fontSize: '0.82rem', color: '#88748A', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Clock size={14} /> {article.readTime}
            </span>
          </div>

          <h1 style={{ 
            color: '#2A1A2C', 
            fontSize: 'clamp(2rem, 4vw, 2.85rem)', 
            lineHeight: 1.22, 
            marginBottom: '0.85rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: '700'
          }}>
            {article.title}
          </h1>
          <p style={{ color: '#554257', fontSize: '1.08rem', lineHeight: 1.6, margin: 0 }}>
            {article.summary}
          </p>
        </div>
      </section>

      {/* Formatted Article Body */}
      <section className="section-padding" style={{ backgroundColor: '#FFFDFB' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ 
            padding: '3rem 2.5rem', 
            backgroundColor: '#FFFFFF', 
            borderRadius: '24px',
            border: '1px solid rgba(229, 213, 219, 0.85)',
            boxShadow: '0 8px 30px rgba(73, 53, 79, 0.03)'
          }}>
            {renderArticleJSX(article.content)}

            <hr style={{ border: 'none', borderTop: '1px solid rgba(229, 213, 219, 0.6)', margin: '2.75rem 0 2rem 0' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <Link 
                href="/care-guide" 
                style={{ 
                  fontSize: '0.84rem', 
                  fontWeight: '700',
                  padding: '0.65rem 1.35rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(138, 59, 82, 0.35)',
                  color: '#8A3B52',
                  backgroundColor: '#FAF0F3',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.25s ease'
                }}
              >
                <ArrowLeft size={14} /> MORE CARE GUIDES
              </Link>
              <Link 
                href="/products" 
                style={{ 
                  background: 'linear-gradient(135deg, #8A3B52 0%, #6E263B 100%)',
                  color: '#FFFFFF',
                  fontSize: '0.84rem', 
                  fontWeight: '700',
                  padding: '0.65rem 1.45rem',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  boxShadow: '0 4px 14px rgba(138, 59, 82, 0.25)'
                }}
              >
                EXPLORE SOFNEST PRODUCTS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Health Disclaimer */}
      <section style={{ backgroundColor: '#FAF0F3', padding: '2rem 1rem', borderTop: '1px solid rgba(138, 59, 82, 0.12)' }}>
        <div className="container" style={{ maxWidth: '800px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <ShieldAlert size={28} style={{ color: '#8A3B52', flexShrink: 0 }} />
          <p style={{ fontSize: '0.84rem', color: '#554257', margin: 0, lineHeight: 1.55 }}>
            <strong style={{ color: '#2A1A2C' }}>Health Content Notice:</strong> This article is provided for general educational purposes only. For clinical or symptom-specific concerns, please consult a qualified healthcare professional.
          </p>
        </div>
      </section>
    </div>
  );
}
