'use client';

import React, { useState, useEffect } from 'react';
import { FaCookieBite, FaTimes } from 'react-icons/fa';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    
    // Show banner if no consent yet
    if (!hasConsented) {
      // Small delay to prevent banner from showing immediately on page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };
  
  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div 
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
      className="cookie-banner"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <div style={{
            backgroundColor: 'rgba(57, 73, 171, 0.1)',
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <FaCookieBite size={20} style={{ color: '#3949AB' }} />
          </div>
          <div>
            <h2 
              id="cookie-title"
              style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                margin: '0 0 0.25rem 0',
                color: '#1F2937'
              }}
            >
              Cookie Consent
            </h2>
            <p 
              id="cookie-description"
              style={{
                fontSize: '0.95rem',
                margin: 0,
                color: '#4B5563',
                maxWidth: '80ch'
              }}
            >
              We use cookies to enhance your experience on our website. Some are essential for the site to function, 
              while others help us understand how you use the site and improve our services.
            </p>
          </div>
        </div>
        
        <button
          aria-label="Close cookie consent banner"
          onClick={acceptEssential}
          style={{
            background: 'none',
            border: 'none',
            color: '#6B7280',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '0.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '1rem',
            flexShrink: 0
          }}
        >
          <FaTimes size={18} />
        </button>
      </div>
      
      <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
        <a 
          href="/privacy"
          style={{
            fontSize: '0.9rem',
            color: '#3949AB',
            marginRight: 'auto'
          }}
        >
          View our Privacy Policy
        </a>
        
        <button
          onClick={acceptEssential}
          style={{
            padding: '0.6rem 1.25rem',
            backgroundColor: 'white',
            color: '#1F2937',
            border: '1px solid #E5E7EB',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '500'
          }}
        >
          Essential Only
        </button>
        
        <button
          onClick={acceptAll}
          style={{
            padding: '0.6rem 1.25rem',
            backgroundColor: '#3949AB',
            color: 'white',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '500'
          }}
        >
          Accept All
        </button>
      </div>
    </div>
  );
};

export default CookieConsent; 