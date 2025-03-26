'use client';

import React, { useState, useRef } from 'react';
import { FaUpload, FaImages, FaRobot, FaSync, FaTimesCircle } from 'react-icons/fa';

const InteractiveDemo: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Sample objects that can be "detected" in this demo
  const sampleObjects = [
    { name: 'chair', distance: '1.5 meters' },
    { name: 'table', distance: '2 meters' },
    { name: 'window', distance: '3 meters' },
    { name: 'door', distance: '4 meters' },
    { name: 'book', distance: '0.5 meters' },
    { name: 'plant', distance: '1.8 meters' },
    { name: 'cup', distance: '0.8 meters' },
    { name: 'laptop', distance: '0.7 meters' },
    { name: 'person', distance: '2.5 meters' }
  ];
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setResult(null);
    
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file (jpg, png, etc.)');
      return;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  const processImage = () => {
    if (!image) return;
    
    setIsProcessing(true);
    setResult(null);
    
    // Simulate processing delay
    setTimeout(() => {
      // Randomly select 3-5 objects from the sample list
      const numObjects = Math.floor(Math.random() * 3) + 3;
      const shuffled = [...sampleObjects].sort(() => 0.5 - Math.random());
      const selectedObjects = shuffled.slice(0, numObjects);
      
      // Generate description
      const description = generateDescription(selectedObjects);
      setResult(description);
      setIsProcessing(false);
    }, 2000);
  };
  
  const generateDescription = (objects: { name: string, distance: string }[]) => {
    // Sort objects by distance (closest first)
    const sorted = [...objects].sort((a, b) => {
      const distA = parseFloat(a.distance.split(' ')[0]);
      const distB = parseFloat(b.distance.split(' ')[0]);
      return distA - distB;
    });
    
    // Build the description
    let description = "I detect ";
    
    if (sorted.length === 1) {
      description += `a ${sorted[0].name} about ${sorted[0].distance} in front of you.`;
    } else {
      sorted.forEach((obj, index) => {
        if (index === 0) {
          description += `a ${obj.name} about ${obj.distance} in front of you`;
        } else if (index === sorted.length - 1) {
          description += `, and a ${obj.name} about ${obj.distance} away`;
        } else {
          description += `, a ${obj.name} about ${obj.distance} away`;
        }
      });
      description += ".";
    }
    
    // Add some context based on objects
    if (sorted.some(obj => obj.name === 'chair' || obj.name === 'table')) {
      description += " This appears to be an indoor setting.";
    }
    
    if (sorted.some(obj => obj.name === 'person')) {
      description += " There is someone nearby, you might want to greet them.";
    }
    
    return description;
  };
  
  const resetDemo = () => {
    setImage(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>
        Interactive Demo: Try iVision AI
      </h3>
      
      <p style={{
        color: '#4B5563',
        marginBottom: '1.5rem',
        textAlign: 'center',
        fontSize: '1.05rem'
      }}>
        Upload an image to see how iVision AI would process and describe it to a blind user.
      </p>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
        
        {/* Image preview or upload area */}
        <div
          style={{
            width: '100%',
            height: '300px',
            border: '2px dashed #E5E7EB',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F9FAFB',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {image ? (
            <>
              <img
                src={image}
                alt="Uploaded image"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />
              <button
                onClick={resetDemo}
                aria-label="Remove image"
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <FaTimesCircle size={16} />
              </button>
            </>
          ) : (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <FaImages size={48} style={{ color: '#9CA3AF' }} />
              <div>
                <p style={{ fontWeight: '500', color: '#4B5563', marginBottom: '0.5rem' }}>
                  Drag and drop an image here, or
                </p>
                <button
                  onClick={handleUploadClick}
                  style={{
                    backgroundColor: '#3949AB',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    fontWeight: '500',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#303F9F';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#3949AB';
                  }}
                >
                  <FaUpload size={16} /> Browse Files
                </button>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                Supported formats: JPG, PNG, GIF (Max 5MB)
              </p>
            </div>
          )}
        </div>
        
        {/* Error message */}
        {error && (
          <div style={{
            backgroundColor: '#FEE2E2',
            color: '#B91C1C',
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem',
            width: '100%',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}
        
        {/* Process button */}
        {image && !result && !isProcessing && (
          <button
            onClick={processImage}
            style={{
              backgroundColor: '#3949AB',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              padding: '0.75rem 2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '1.05rem',
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
            <FaRobot size={18} /> Process with iVision AI
          </button>
        )}
        
        {/* Loading indicator */}
        {isProcessing && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <FaSync 
              size={28} 
              style={{ 
                color: '#3949AB',
                animation: 'spin 1s linear infinite'
              }} 
            />
            <p style={{ color: '#4B5563' }}>Processing image...</p>
            <style jsx global>{`
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        )}
        
        {/* Result display */}
        {result && (
          <div style={{
            backgroundColor: '#F0F4FF',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            width: '100%',
            border: '1px solid rgba(57, 73, 171, 0.2)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.75rem'
            }}>
              <FaRobot size={20} style={{ color: '#3949AB' }} />
              <h4 style={{ 
                margin: 0, 
                fontWeight: '600', 
                fontSize: '1.1rem',
                color: '#1F2937'
              }}>
                iVision AI Description:
              </h4>
            </div>
            
            <p style={{
              color: '#374151',
              fontSize: '1.05rem',
              lineHeight: '1.6',
              margin: 0
            }}>
              "{result}"
            </p>
            
            <div style={{
              marginTop: '1.5rem',
              textAlign: 'center'
            }}>
              <button
                onClick={resetDemo}
                style={{
                  backgroundColor: '#F3F4F6',
                  color: '#4B5563',
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Try Another Image
              </button>
            </div>
          </div>
        )}
        
        <p style={{
          fontSize: '0.875rem',
          color: '#6B7280',
          textAlign: 'center',
          maxWidth: '90%'
        }}>
          Note: This is a demonstration using simulated responses. The actual iVision AI app processes images in real-time with more sophisticated object detection and distance measurements.
        </p>
      </div>
    </div>
  );
};

export default InteractiveDemo; 