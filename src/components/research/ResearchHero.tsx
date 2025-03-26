"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFlask, FaMicroscope } from 'react-icons/fa';

const ParticleBackground = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10,
  }));

  return (
    <div 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        opacity: 0.2,
        zIndex: 1,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: '#0052CC',
            borderRadius: '50%',
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      ))}
    </div>
  );
};

const GridBackground = () => {
  return (
    <div 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        backgroundImage: 'linear-gradient(#0052CC 1px, transparent 1px), linear-gradient(to right, #0052CC 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.05,
        zIndex: 1,
      }}
      aria-hidden="true"
    ></div>
  );
};

const ResearchHero = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div style={{ 
      position: 'relative', 
      height: '600px', 
      backgroundColor: '#F4F5F7', 
      overflow: 'hidden',
      borderRadius: '0.5rem',
      marginTop: '2rem',
      maxWidth: '1200px',
      margin: '2rem auto 0',
    }}>
      {/* Background elements */}
      <GridBackground />
      {!prefersReducedMotion && <ParticleBackground />}
      
      <div style={{ 
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        zIndex: 10,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <FaFlask size={40} color="#0052CC" style={{ marginRight: '1rem' }} />
            <FaMicroscope size={40} color="#0052CC" />
          </div>
        </motion.div>
        
        <motion.h1
          style={{ 
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#0052CC',
            marginBottom: '1.5rem',
            maxWidth: '800px',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Pioneering Camera-to-Speech Technology for the Visually Impaired
        </motion.h1>
        
        <motion.p
          style={{ 
            fontSize: '1.25rem',
            color: '#4A4A4A',
            maxWidth: '800px',
            marginBottom: '2rem',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Our research team is pushing the boundaries of artificial intelligence and computer vision to create 
          life-changing technology for blind and visually impaired individuals.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}
        >
          <button 
            style={{
              backgroundColor: '#0052CC',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease',
              fontSize: '1rem',
              letterSpacing: '0.01em',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '220px'
            }}
            onMouseOver={(e) => { 
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.15)';
            }}
          >
            View Research Papers
          </button>
          <button 
            style={{
              backgroundColor: 'white',
              color: '#0052CC',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              border: '2px solid #0052CC',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              fontSize: '1rem',
              letterSpacing: '0.01em',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '220px'
            }}
            onMouseOver={(e) => { 
              e.currentTarget.style.backgroundColor = 'rgba(0, 82, 204, 0.05)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            }}
          >
            Our Technology
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchHero; 