'use client';

import React, { useState, useEffect } from 'react';
import { FaAccessibleIcon, FaFont, FaVolumeUp, FaTimes, FaChevronUp, FaKeyboard, FaMousePointer } from 'react-icons/fa';

const AccessibilityPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speech, setSpeech] = useState<SpeechSynthesisUtterance | null>(null);
  
  useEffect(() => {
    // Apply font size to root element
    document.documentElement.style.fontSize = `${fontSize}rem`;
    
    // Initialize speech synthesis
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const newSpeech = new SpeechSynthesisUtterance();
      newSpeech.rate = 1;
      newSpeech.pitch = 1;
      newSpeech.volume = 1;
      setSpeech(newSpeech);
      
      // Stop speaking when component unmounts
      return () => {
        window.speechSynthesis.cancel();
      };
    }
  }, [fontSize]);
  
  const speakText = () => {
    if (!speech || !('speechSynthesis' in window)) return;
    
    // If already speaking, stop
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    
    // Get all text from the main content
    const mainElement = document.querySelector('main');
    if (!mainElement) return;
    
    const textToSpeak = mainElement.textContent || '';
    speech.text = "iVision AI Homepage. " + textToSpeak.replace(/\s+/g, ' ').trim();
    
    speech.onstart = () => setIsSpeaking(true);
    speech.onend = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(speech);
  };
  
  const increaseFontSize = () => {
    if (fontSize < 1.5) {
      setFontSize(prev => Math.min(prev + 0.1, 1.5));
    }
  };
  
  const decreaseFontSize = () => {
    if (fontSize > 0.8) {
      setFontSize(prev => Math.max(prev - 0.1, 0.8));
    }
  };
  
  const resetFontSize = () => {
    setFontSize(1);
  };
  
  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open accessibility options"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#3949AB',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          zIndex: 1000,
          transition: 'transform 0.2s ease, background-color 0.2s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.backgroundColor = '#303F9F';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.backgroundColor = '#3949AB';
        }}
      >
        <FaAccessibleIcon size={24} />
      </button>
      
      {/* Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Accessibility Options"
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            width: '320px',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            overflow: 'hidden',
            border: '1px solid #E5E7EB'
          }}
        >
          <div style={{
            padding: '16px',
            borderBottom: '1px solid #E5E7EB',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#F9FAFB'
          }}>
            <h2 style={{ 
              margin: 0, 
              fontSize: '1.1rem', 
              fontWeight: 'bold',
              color: '#1F2937',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <FaAccessibleIcon /> Accessibility Options
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close accessibility panel"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#4B5563',
                display: 'flex'
              }}
            >
              <FaTimes size={18} />
            </button>
          </div>
          
          <div style={{ padding: '16px' }}>
            {/* Text-to-Speech */}
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ 
                fontSize: '1rem', 
                fontWeight: '600', 
                marginTop: 0, 
                marginBottom: '10px',
                color: '#1F2937',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <FaVolumeUp /> Text-to-Speech
              </h3>
              <button
                onClick={speakText}
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: isSpeaking ? '#EF4444' : '#3949AB',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                {isSpeaking ? 'Stop Reading' : 'Read Page Aloud'}
              </button>
            </div>
            
            {/* Font Size Controls */}
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ 
                fontSize: '1rem', 
                fontWeight: '600', 
                marginTop: 0, 
                marginBottom: '10px',
                color: '#1F2937',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <FaFont /> Font Size
              </h3>
              <div style={{ 
                display: 'flex', 
                gap: '8px'
              }}>
                <button
                  onClick={decreaseFontSize}
                  disabled={fontSize <= 0.8}
                  aria-label="Decrease font size"
                  style={{
                    flex: 1,
                    padding: '8px',
                    backgroundColor: '#F3F4F6',
                    color: fontSize <= 0.8 ? '#9CA3AF' : '#1F2937',
                    border: '1px solid #E5E7EB',
                    borderRadius: '6px',
                    cursor: fontSize <= 0.8 ? 'not-allowed' : 'pointer',
                    fontWeight: '500',
                    fontSize: '0.9rem'
                  }}
                >
                  A-
                </button>
                <button
                  onClick={resetFontSize}
                  aria-label="Reset font size"
                  style={{
                    flex: 1,
                    padding: '8px',
                    backgroundColor: '#F3F4F6',
                    color: '#1F2937',
                    border: '1px solid #E5E7EB',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    fontSize: '0.9rem'
                  }}
                >
                  Reset
                </button>
                <button
                  onClick={increaseFontSize}
                  disabled={fontSize >= 1.5}
                  aria-label="Increase font size"
                  style={{
                    flex: 1,
                    padding: '8px',
                    backgroundColor: '#F3F4F6',
                    color: fontSize >= 1.5 ? '#9CA3AF' : '#1F2937',
                    border: '1px solid #E5E7EB',
                    borderRadius: '6px',
                    cursor: fontSize >= 1.5 ? 'not-allowed' : 'pointer',
                    fontWeight: '500',
                    fontSize: '0.9rem'
                  }}
                >
                  A+
                </button>
              </div>
              <div style={{ 
                marginTop: '10px', 
                fontSize: '0.85rem', 
                color: '#6B7280',
                textAlign: 'center'
              }}>
                Current size: {Math.round(fontSize * 100)}%
              </div>
            </div>
            
            {/* Keyboard Shortcuts */}
            <div>
              <h3 style={{ 
                fontSize: '1rem', 
                fontWeight: '600', 
                marginTop: 0, 
                marginBottom: '10px',
                color: '#1F2937',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <FaKeyboard /> Keyboard Shortcuts
              </h3>
              <ul style={{ 
                margin: 0, 
                padding: '0 0 0 20px',
                fontSize: '0.9rem',
                color: '#4B5563'
              }}>
                <li style={{ marginBottom: '5px' }}>
                  Press <kbd style={{ backgroundColor: '#F3F4F6', padding: '2px 5px', borderRadius: '3px', border: '1px solid #E5E7EB' }}>Alt+S</kbd> to start/stop reading
                </li>
                <li style={{ marginBottom: '5px' }}>
                  Press <kbd style={{ backgroundColor: '#F3F4F6', padding: '2px 5px', borderRadius: '3px', border: '1px solid #E5E7EB' }}>Alt+A</kbd> to toggle accessibility panel
                </li>
                <li>
                  Press <kbd style={{ backgroundColor: '#F3F4F6', padding: '2px 5px', borderRadius: '3px', border: '1px solid #E5E7EB' }}>Tab</kbd> to navigate with keyboard
                </li>
              </ul>
            </div>
          </div>
          
          <div style={{ 
            padding: '12px 16px',
            backgroundColor: '#F9FAFB',
            borderTop: '1px solid #E5E7EB',
            fontSize: '0.85rem',
            color: '#6B7280',
            textAlign: 'center'
          }}>
            Press <kbd style={{ backgroundColor: '#F3F4F6', padding: '1px 3px', borderRadius: '3px', border: '1px solid #E5E7EB', fontSize: '0.8rem' }}>Esc</kbd> to close this panel
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityPanel; 