'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLightbulb, FaUsers, FaMobile, FaArrowRight } from 'react-icons/fa';
import GridBackground from '@/components/GridBackground';

const DonatePage = () => {
  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <GridBackground />
      
      {/* Hero Section */}
      <section style={{ 
        padding: '6rem 2rem 3rem', 
        textAlign: 'center', 
        position: 'relative'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: '#1F2937',
          position: 'relative',
          display: 'inline-block'
        }}>
          Support Our Mission
          <div style={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            backgroundColor: '#3949AB',
            borderRadius: '2px'
          }} />
        </h1>
        
        <p style={{ 
          fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
          color: '#4B5563',
          maxWidth: '800px',
          margin: '2rem auto',
          lineHeight: '1.7'
        }}>
          Your generous donations make it possible for us to continue developing iVision AI
          and provide our technology free of charge to those who need it most.
        </p>
        
        <div style={{ 
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          maxWidth: '600px',
          margin: '0 auto 3rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ 
              backgroundColor: 'rgba(57, 73, 171, 0.1)',
              borderRadius: '50%',
              width: '2.5rem',
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#3949AB'
            }}>
              <FaLightbulb size={18} />
            </div>
            <span style={{ fontWeight: '500', color: '#1F2937' }}>Fund Research & Development</span>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ 
              backgroundColor: 'rgba(57, 73, 171, 0.1)',
              borderRadius: '50%',
              width: '2.5rem',
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#3949AB'
            }}>
              <FaUsers size={18} />
            </div>
            <span style={{ fontWeight: '500', color: '#1F2937' }}>Support Blind Communities</span>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ 
              backgroundColor: 'rgba(57, 73, 171, 0.1)',
              borderRadius: '50%',
              width: '2.5rem',
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#3949AB'
            }}>
              <FaMobile size={18} />
            </div>
            <span style={{ fontWeight: '500', color: '#1F2937' }}>Provide Free Devices</span>
          </div>
        </div>
      </section>
      
      {/* Pump.fun Section */}
      <section style={{ 
        padding: '0 2rem 3rem', 
        textAlign: 'center', 
        position: 'relative'
      }}>
        <div style={{
          backgroundColor: '#F0F4FF',
          borderRadius: '1rem',
          padding: '3rem 2rem',
          maxWidth: '1000px',
          margin: '0 auto',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.06)',
          border: '1px solid rgba(57, 73, 171, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '50%',
                width: '3.5rem',
                height: '3.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}>
                <svg width="24" height="24" viewBox="0 0 38 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.2,12.5c-0.4-0.2-0.9-0.3-1.4-0.3l-29.3-0.1c-0.3,0-0.5,0.1-0.7,0.2c-0.2,0.1-0.4,0.3-0.5,0.5
                  c-0.1,0.2-0.2,0.4-0.2,0.7c0,0.2,0.1,0.5,0.2,0.7l6.8,11.9c0.1,0.2,0.3,0.4,0.5,0.5c0.2,0.1,0.4,0.2,0.7,0.2h14.3
                  c0.2,0,0.5-0.1,0.7-0.2c0.2-0.1,0.4-0.3,0.5-0.5l6.8-11.9c0.1-0.2,0.2-0.4,0.2-0.7C37.7,13.2,37.1,12.7,36.2,12.5z M18.5,20.5
                  c-1.6,0-2.9-1.3-2.9-2.9c0-1.6,1.3-2.9,2.9-2.9c1.6,0,2.9,1.3,2.9,2.9C21.4,19.2,20.1,20.5,18.5,20.5z" fill="#00FFA3"/>
                  <path d="M7.3,7.3c-0.1,0.2-0.2,0.4-0.2,0.7c0,0.2,0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.4,0.5,0.5
                  c0.2,0.1,0.4,0.2,0.7,0.2h20.1c0.2,0,0.5-0.1,0.7-0.2c0.2-0.1,0.4-0.3,0.5-0.5c0.1-0.2,0.2-0.4,0.2-0.7c0-0.2-0.1-0.5-0.2-0.7
                  C29.6,7.1,29.4,7,29.2,6.8c-0.2-0.1-0.4-0.2-0.7-0.2H8.5c-0.2,0-0.5,0.1-0.7,0.2C7.6,7,7.4,7.1,7.3,7.3z" fill="#00FFA3"/>
                  <path d="M3.2,17c-0.4,0.2-0.7,0.5-0.9,0.9c-0.2,0.4-0.3,0.8-0.3,1.2c0,0.4,0.1,0.8,0.3,1.2
                  c0.2,0.4,0.5,0.7,0.9,0.9l7.1,4.1c0.4,0.2,0.8,0.3,1.2,0.3c0.4,0,0.8-0.1,1.2-0.3c0.4-0.2,0.7-0.5,0.9-0.9l0.9-1.5l-4.7-8.4
                  L3.2,17z" fill="#03E1FF"/>
                  <path d="M33.9,17l-6.6-3.8l-0.8,1.4l4.7,8.4l0.9,1.5c0.2,0.4,0.5,0.7,0.9,0.9c0.4,0.2,0.8,0.3,1.2,0.3
                  c0.4,0,0.8-0.1,1.2-0.3l3.7-2.1c0.4-0.2,0.7-0.5,0.9-0.9c0.2-0.4,0.3-0.8,0.3-1.2c0-0.4-0.1-0.8-0.3-1.2
                  C34.6,17.5,34.3,17.2,33.9,17z" fill="#03E1FF"/>
                  <path d="M10.5,7.1C10.2,7.1,10,7.2,9.8,7.4C9.6,7.6,9.5,7.7,9.4,8c-0.1,0.2-0.1,0.5,0,0.7
                  c0.1,0.2,0.2,0.5,0.4,0.6l0.9,0.5l5.5-3.2L10.5,7.1z" fill="#69FABD"/>
                  <path d="M27.6,9.8l0.6-0.3c0.2-0.1,0.3-0.4,0.4-0.6c0.1-0.2,0.1-0.5,0-0.7c-0.1-0.2-0.2-0.4-0.4-0.6
                  c-0.2-0.1-0.4-0.2-0.6-0.3l-5.7-0.5L27.6,9.8z" fill="#69FABD"/>
                </svg>
              </div>
            </div>
            
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#1F2937'
            }}>
              Donate with Solana via Pump.fun
            </h2>
            
            <p style={{ 
              fontSize: '1.1rem',
              color: '#4B5563',
              maxWidth: '700px',
              marginBottom: '2rem',
              lineHeight: '1.7'
            }}>
              We've partnered with <strong>Pump.fun</strong> to accept Solana cryptocurrency donations. 
              Your support helps us make advanced AI accessibility technology available to those who need it most.
            </p>
          </div>
          
          <a 
            href="https://pump.fun/profile/iVisionAI" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#3949AB',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 12px rgba(57, 73, 171, 0.15)',
              transition: 'all 0.2s ease',
              fontSize: '1.125rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(57, 73, 171, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(57, 73, 171, 0.15)';
            }}
          >
            Visit Our Pump.fun Profile <FaArrowRight size={14} />
          </a>
        </div>
      </section>
      
      {/* Impact Stats */}
      <section style={{ 
        padding: '5rem 2rem', 
        backgroundColor: '#F9FAFB',
        borderTop: '1px solid rgba(57, 73, 171, 0.1)',
        borderBottom: '1px solid rgba(57, 73, 171, 0.1)',
        position: 'relative'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 'bold',
            marginBottom: '3rem',
            color: '#1F2937'
          }}>
            The Impact of Your Support
          </h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(57, 73, 171, 0.05)'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#3949AB',
                marginBottom: '1rem'
              }}>
                5K+
              </div>
              <p style={{
                fontWeight: '600',
                color: '#1F2937',
                marginBottom: '0.5rem'
              }}>
                Lives Impacted
              </p>
              <p style={{
                color: '#6B7280',
                fontSize: '0.875rem'
              }}>
                Blind individuals using our technology worldwide
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(57, 73, 171, 0.05)'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#3949AB',
                marginBottom: '1rem'
              }}>
                500+
              </div>
              <p style={{
                fontWeight: '600',
                color: '#1F2937',
                marginBottom: '0.5rem'
              }}>
                Free Devices
              </p>
              <p style={{
                color: '#6B7280',
                fontSize: '0.875rem'
              }}>
                Distributed to those unable to afford them
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(57, 73, 171, 0.05)'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#3949AB',
                marginBottom: '1rem'
              }}>
                12
              </div>
              <p style={{
                fontWeight: '600',
                color: '#1F2937',
                marginBottom: '0.5rem'
              }}>
                Partner Organizations
              </p>
              <p style={{
                color: '#6B7280',
                fontSize: '0.875rem'
              }}>
                Collaborating to improve accessibility
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(57, 73, 171, 0.05)'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#3949AB',
                marginBottom: '1rem'
              }}>
                97%
              </div>
              <p style={{
                fontWeight: '600',
                color: '#1F2937',
                marginBottom: '0.5rem'
              }}>
                Funds to Mission
              </p>
              <p style={{
                color: '#6B7280',
                fontSize: '0.875rem'
              }}>
                Of every donation goes directly to our mission
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section style={{ 
        padding: '6rem 2rem', 
        position: 'relative',
        textAlign: 'center'
      }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto'
        }}>
          <h2 style={{ 
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#1F2937'
          }}>
            Ready to Make a Difference?
          </h2>
          
          <p style={{ 
            fontSize: '1.125rem',
            color: '#4B5563',
            marginBottom: '2.5rem',
            lineHeight: '1.7'
          }}>
            Your support today will help us create a more accessible tomorrow. 
            Visit our Pump.fun profile to donate and join our mission to make the visual 
            world accessible to everyone.
          </p>
          
          <a 
            href="https://pump.fun/profile/iVisionAI" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#3949AB',
              color: 'white',
              padding: '1rem 3rem',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 12px rgba(57, 73, 171, 0.15)',
              transition: 'all 0.2s ease',
              fontSize: '1.125rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(57, 73, 171, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(57, 73, 171, 0.15)';
            }}
          >
            Donate Now <FaArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default DonatePage; 