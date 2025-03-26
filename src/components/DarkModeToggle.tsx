'use client';

import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

interface DarkModeToggleProps {
  onChange?: (isDarkMode: boolean) => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ onChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a preference stored
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setIsDarkMode(savedDarkMode === 'true');
    } else {
      // Check if user prefers dark mode based on system settings
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Add or remove dark mode class from body
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode.toString());
    
    // Call onChange callback if provided
    if (onChange) {
      onChange(isDarkMode);
    }
  }, [isDarkMode, onChange]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        backgroundColor: isDarkMode ? '#1F2937' : 'white',
        color: isDarkMode ? 'white' : '#1F2937',
        border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
        borderRadius: '9999px',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {isDarkMode ? (
        <FaMoon size={18} style={{ opacity: 1, transition: 'opacity 0.2s ease' }} />
      ) : (
        <FaSun size={18} style={{ opacity: 1, transition: 'opacity 0.2s ease' }} />
      )}
      
      {/* Announcement for screen readers */}
      <span 
        role="status" 
        style={{ 
          position: 'absolute', 
          width: '1px', 
          height: '1px', 
          padding: 0, 
          margin: '-1px', 
          overflow: 'hidden', 
          clip: 'rect(0, 0, 0, 0)', 
          whiteSpace: 'nowrap', 
          borderWidth: 0 
        }}
      >
        {isDarkMode ? "Dark mode enabled" : "Light mode enabled"}
      </span>
    </button>
  );
};

export default DarkModeToggle; 