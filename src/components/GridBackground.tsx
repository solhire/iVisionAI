"use client";

import React from 'react';

interface GridBackgroundProps {
  className?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ className = '' }) => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: -1,
      opacity: 0.6
    }} className={className}>
      {/* Main grid pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(to right, rgba(57, 73, 171, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(57, 73, 171, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Secondary grid pattern - smaller */}
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
        backgroundSize: '10px 10px'
      }}></div>
      
      {/* Accent circle 1 */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '15%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(57, 73, 171, 0.2) 0%, rgba(57, 73, 171, 0) 70%)',
        filter: 'blur(50px)'
      }}></div>
      
      {/* Accent circle 2 */}
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(73, 97, 220, 0.15) 0%, rgba(73, 97, 220, 0) 70%)',
        filter: 'blur(50px)'
      }}></div>
      
      {/* Accent circle 3 */}
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '30%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(57, 73, 171, 0.1) 0%, rgba(57, 73, 171, 0) 60%)',
        filter: 'blur(40px)'
      }}></div>
    </div>
  );
};

export default GridBackground; 