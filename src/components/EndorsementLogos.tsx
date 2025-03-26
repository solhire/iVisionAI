import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const logos = [
  {
    name: 'RNIB (Royal National Institute of Blind People)',
    src: '/logos/rnib.png',
    width: 120,
    height: 60
  },
  {
    name: 'National Federation of the Blind',
    src: '/logos/nfb.png',
    width: 160,
    height: 60
  },
  {
    name: 'World Blind Union',
    src: '/logos/wbu.png',
    width: 150,
    height: 60
  }
];

const EndorsementLogos = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Create an animation that loops continuously
    const animationId = setInterval(() => {
      setScrollPosition((prevPosition) => {
        // Reset position once it's scrolled through all logos
        if (prevPosition > logos.length * 300) {
          return 0;
        }
        return prevPosition + 1;
      });
    }, 30);

    return () => clearInterval(animationId);
  }, []);

  return (
    <div style={{ 
      width: '100%',
      maxWidth: '800px',
      marginTop: '3rem',
      marginBottom: '2rem',
      padding: '2rem',
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      borderRadius: '1rem',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      border: '1px solid rgba(57, 73, 171, 0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Grid pattern overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(to right, rgba(57, 73, 171, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(57, 73, 171, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
        opacity: 0.5,
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ 
          textAlign: 'center', 
          fontSize: '0.875rem', 
          fontWeight: '600', 
          color: '#4B5563', 
          marginBottom: '1.5rem', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em' 
        }}>
          Endorsed By
        </p>
        
        <div style={{ 
          position: 'relative',
          width: '100%',
          height: '100px',
          overflow: 'hidden'
        }}>
          {/* Animated logos container */}
          <div style={{ 
            display: 'flex',
            position: 'absolute',
            left: `calc(50% - ${scrollPosition}px)`,
            transition: 'transform 0.5s ease',
            transform: `translateX(${scrollPosition > logos.length * 300 ? 0 : 0}px)`,
            whiteSpace: 'nowrap'
          }}>
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div 
                key={`${logo.name}-1`} 
                style={{ 
                  padding: '1rem 1.5rem',
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 1.5rem',
                  transform: `translateX(${Math.sin(scrollPosition / 100 + index) * 10}px)`,
                  transition: 'transform 0.5s ease'
                }}
              >
                <Image 
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </div>
            ))}
            
            {/* Duplicate logos for seamless infinite scroll */}
            {logos.map((logo, index) => (
              <div 
                key={`${logo.name}-2`} 
                style={{ 
                  padding: '1rem 1.5rem',
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 1.5rem',
                  transform: `translateX(${Math.sin(scrollPosition / 100 + index + 3) * 10}px)`,
                  transition: 'transform 0.5s ease'
                }}
              >
                <Image 
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndorsementLogos; 