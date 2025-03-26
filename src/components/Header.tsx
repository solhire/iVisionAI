"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header style={{
      width: '100%',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 50,
      backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.9)' : 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(8px)',
      transition: 'background-color 0.3s ease',
      color: isDarkMode ? 'white' : 'black'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'block' }}>
          <Image 
            src={isDarkMode ? "/logos/ivlogo-dark.png" : "/logos/ivlogo.png"}
            alt="iVision AI Logo"
            width={200}
            height={60}
            style={{ height: '3.5rem', width: 'auto' }}
            priority
          />
        </Link>
      </div>
      
      <nav style={{ 
        display: isMobile ? 'none' : 'flex', 
        alignItems: 'center', 
        gap: '2rem'
      }}>
        <Link href="/about" style={{ 
          color: isDarkMode ? 'white' : 'black', 
          fontWeight: '500',
          textDecoration: 'none',
          transition: 'color 0.2s ease'
        }}>
          About
        </Link>
        <Link href="/features" style={{ 
          color: isDarkMode ? 'white' : 'black', 
          fontWeight: '500',
          textDecoration: 'none',
          transition: 'color 0.2s ease'
        }}>
          Features
        </Link>
        <Link href="/testimonials" style={{ 
          color: isDarkMode ? 'white' : 'black', 
          fontWeight: '500',
          textDecoration: 'none',
          transition: 'color 0.2s ease'
        }}>
          Testimonials
        </Link>
        <Link href="/research" style={{ 
          color: isDarkMode ? 'white' : 'black', 
          fontWeight: '500',
          textDecoration: 'none',
          transition: 'color 0.2s ease'
        }}>
          Research
        </Link>
      </nav>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link 
          href="/download" 
          style={{
            backgroundColor: '#3949AB',
            color: 'white',
            padding: '0.5rem 1.25rem',
            borderRadius: '0.5rem',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'opacity 0.2s ease'
          }}
        >
          Download App
        </Link>
      </div>
    </header>
  );
};

export default Header; 