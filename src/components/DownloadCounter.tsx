'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaUsers, FaCode, FaClock, FaLightbulb } from 'react-icons/fa';

const BetaStatusCounter: React.FC = () => {
  // Beta counter stats
  const [betaTesters, setBetaTesters] = useState(0);
  const [daysInBeta, setDaysInBeta] = useState(0);
  const [featuresBuilt, setFeaturesBuilt] = useState(0);
  
  const initialBetaTesters = 156;
  const initialDaysInBeta = 47;
  const initialFeaturesBuilt = 28;
  
  // References to track animation
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const animationCompleteRef = useRef(false);
  
  // Animation function
  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const interval = duration / steps;
    
    let currentStep = 0;
    
    const incrementCounter = () => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);
      
      // Easing function for smoother animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      setBetaTesters(Math.floor(initialBetaTesters * easedProgress));
      setDaysInBeta(Math.floor(initialDaysInBeta * easedProgress));
      setFeaturesBuilt(Math.floor(initialFeaturesBuilt * easedProgress));
      
      if (currentStep < steps) {
        animationRef.current = setTimeout(incrementCounter, interval);
      } else {
        // Set final values precisely
        setBetaTesters(initialBetaTesters);
        setDaysInBeta(initialDaysInBeta);
        setFeaturesBuilt(initialFeaturesBuilt);
        animationCompleteRef.current = true;
      }
    };
    
    incrementCounter();
  };
  
  // Start animation when the component appears in viewport
  useEffect(() => {
    // Check if we need to run the animation or if it's already completed
    if (!animationCompleteRef.current) {
      // Create an observer to detect when the element is visible
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      
      // Target element to observe
      const target = document.getElementById('beta-counter');
      if (target) {
        observer.observe(target);
      }
      
      return () => {
        if (animationRef.current) {
          clearTimeout(animationRef.current);
        }
        observer.disconnect();
      };
    }
  }, []);
  
  return (
    <div 
      id="beta-counter"
      style={{
        backgroundColor: 'white',
        borderRadius: '1rem',
        padding: '2.5rem',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
        marginBottom: '4rem'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        marginBottom: '1rem'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1F2937',
          textAlign: 'center',
          margin: 0
        }}>
          iVision AI is Currently in Beta
        </h3>
        <span style={{
          backgroundColor: '#ECFDF5',
          color: '#059669',
          padding: '0.3rem 0.75rem',
          borderRadius: '9999px',
          fontSize: '0.8rem',
          fontWeight: '600',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>
          BETA
        </span>
      </div>
      
      <p style={{
        textAlign: 'center',
        color: '#4B5563',
        fontSize: '1.1rem',
        maxWidth: '700px',
        margin: '0 auto 2.5rem'
      }}>
        Our application is currently being refined with input from our beta testers
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        textAlign: 'center'
      }}>
        {/* Beta Testers Counter */}
        <div>
          <div style={{
            backgroundColor: '#F0F4FF',
            width: '5rem',
            height: '5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem',
            color: '#3949AB'
          }}>
            <FaUsers size={32} />
          </div>
          
          <div style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1F2937',
            marginBottom: '0.5rem',
            lineHeight: '1'
          }} aria-live="polite">
            {betaTesters}
          </div>
          
          <div style={{
            color: '#6B7280',
            fontSize: '1.1rem'
          }}>
            Beta Testers
          </div>
        </div>
        
        {/* Days in Beta Counter */}
        <div>
          <div style={{
            backgroundColor: '#F0F4FF',
            width: '5rem',
            height: '5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem',
            color: '#3949AB'
          }}>
            <FaClock size={32} />
          </div>
          
          <div style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1F2937',
            marginBottom: '0.5rem',
            lineHeight: '1'
          }} aria-live="polite">
            {daysInBeta}
          </div>
          
          <div style={{
            color: '#6B7280',
            fontSize: '1.1rem'
          }}>
            Days in Beta
          </div>
        </div>
        
        {/* Features Counter */}
        <div>
          <div style={{
            backgroundColor: '#F0F4FF',
            width: '5rem',
            height: '5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem',
            color: '#3949AB'
          }}>
            <FaLightbulb size={32} />
          </div>
          
          <div style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1F2937',
            marginBottom: '0.5rem',
            lineHeight: '1'
          }} aria-live="polite">
            {featuresBuilt}
          </div>
          
          <div style={{
            color: '#6B7280',
            fontSize: '1.1rem'
          }}>
            Features Built
          </div>
        </div>
      </div>
      
      {/* Join Beta CTA */}
      <div style={{
        marginTop: '3rem',
        textAlign: 'center'
      }}>
        <a
          href="/join-beta"
          style={{
            backgroundColor: '#3949AB',
            color: 'white',
            padding: '0.875rem 2rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.05rem',
            display: 'inline-block',
            transition: 'transform 0.2s ease, background-color 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.backgroundColor = '#303F9F';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.backgroundColor = '#3949AB';
          }}
        >
          Join the Beta Program
        </a>
        
        <p style={{
          fontSize: '0.9rem',
          color: '#6B7280',
          margin: '1rem 0 0'
        }}>
          Help us shape the future of accessibility technology
        </p>
      </div>
    </div>
  );
};

export default BetaStatusCounter; 