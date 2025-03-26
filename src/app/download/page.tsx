"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import GridBackground from '@/components/GridBackground';
import Image from 'next/image';
import { FaMobileAlt, FaApple, FaAndroid, FaEnvelope, FaArrowRight } from 'react-icons/fa';

export default function DownloadPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real app, this would submit to a server
    // For now, just show success message
    setSubmitted(true);
    setError('');
  };

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #F9FAFB, #FFFFFF)',
      position: 'relative',
      textAlign: 'center'
    }}>
      <GridBackground />
      
      {/* Header */}
      <Header />
      
      {/* Coming Soon Banner */}
      <section style={{ 
        padding: '4rem 2rem 2rem', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        textAlign: 'center',
        position: 'relative' 
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: '#F0F4FF',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            display: 'inline-block',
            marginBottom: '1.5rem'
          }}
        >
          <span style={{ 
            fontWeight: 'bold', 
            color: '#3949AB',
            fontSize: '1rem'
          }}>
            Coming Soon
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#1F2937',
            marginBottom: '1.5rem',
            maxWidth: '800px',
            margin: '0 auto 1.5rem'
          }}
        >
          iVision AI is Currently in Development
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontSize: '1.25rem',
            color: '#4B5563',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            lineHeight: '1.7'
          }}
        >
          We're working hard to bring you the world's first camera-to-speech AI 
          with precise distance measurements for blind users. Sign up to be notified 
          when we launch.
        </motion.p>
        
        {/* Phone Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            position: 'relative',
            height: '350px',
            maxWidth: '600px',
            margin: '0 auto 4rem'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '2rem',
            backgroundColor: '#3949AB',
            width: '220px',
            height: '220px',
            opacity: 0.1,
            filter: 'blur(30px)'
          }} />
          
          <FaMobileAlt size={180} color="#3949AB" style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }} />
          
          <div style={{
            position: 'absolute',
            top: '35%',
            right: '30%',
            backgroundColor: 'white',
            padding: '0.75rem 1rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            fontWeight: 'bold',
            color: '#3949AB',
            fontSize: '0.9rem'
          }}>
            Coming Q2 2025
          </div>
        </motion.div>
      </section>
      
      {/* App Store Availability */}
      <section style={{ 
        padding: '2rem 2rem 4rem', 
        maxWidth: '1000px', 
        margin: '0 auto', 
        textAlign: 'center' 
      }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            fontSize: '1.75rem',
            fontWeight: 'bold',
            color: '#1F2937',
            marginBottom: '2rem'
          }}
        >
          Will be Available On
        </motion.h2>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1.5rem 2rem',
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              minWidth: '240px'
            }}
          >
            <FaApple size={42} color="#1F2937" style={{ marginRight: '1rem' }} />
            <div style={{ textAlign: 'left' }}>
              <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                Coming soon to
              </p>
              <p style={{ color: '#1F2937', fontWeight: 'bold', fontSize: '1.1rem' }}>
                Apple App Store
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1.5rem 2rem',
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              minWidth: '240px'
            }}
          >
            <FaAndroid size={42} color="#1F2937" style={{ marginRight: '1rem' }} />
            <div style={{ textAlign: 'left' }}>
              <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                Coming soon to
              </p>
              <p style={{ color: '#1F2937', fontWeight: 'bold', fontSize: '1.1rem' }}>
                Google Play Store
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Sign Up Section */}
      <section style={{ 
        padding: '4rem 2rem 6rem', 
        maxWidth: '800px', 
        margin: '0 auto', 
        textAlign: 'center',
        backgroundColor: '#F9FAFB',
        borderRadius: '1rem'
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 'bold',
            color: '#1F2937',
            marginBottom: '1rem'
          }}>
            Be the First to Know When We Launch
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#4B5563',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            Join our waiting list and we'll notify you as soon as the app is ready for download.
          </p>
          
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                backgroundColor: '#ECFDF5',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                maxWidth: '500px',
                margin: '0 auto'
              }}
            >
              <h3 style={{ 
                color: '#065F46', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                fontSize: '1.2rem'
              }}>
                Thank You for Signing Up!
              </h3>
              <p style={{ color: '#065F46' }}>
                We'll notify you at {email} when iVision AI is ready for download.
              </p>
            </motion.div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              style={{
                maxWidth: '500px',
                margin: '0 auto'
              }}
            >
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: error ? '0.5rem' : '0',
                flexWrap: 'wrap'
              }}>
                <div style={{ 
                  flex: '1 1 300px',
                  position: 'relative' 
                }}>
                  <FaEnvelope 
                    size={16} 
                    color="#9CA3AF" 
                    style={{ 
                      position: 'absolute',
                      top: '50%',
                      left: '1rem',
                      transform: 'translateY(-50%)'
                    }} 
                  />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      padding: '1rem 1rem 1rem 2.5rem',
                      borderRadius: '0.5rem',
                      border: '1px solid #E5E7EB',
                      width: '100%',
                      fontSize: '1rem',
                      outline: 'none',
                      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: '1rem 1.5rem',
                    backgroundColor: '#3949AB',
                    color: 'white',
                    borderRadius: '0.5rem',
                    border: 'none',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    flex: '0 0 auto'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#303F9F';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#3949AB';
                  }}
                >
                  Notify Me <FaArrowRight size={14} />
                </button>
              </div>
              {error && (
                <p style={{ 
                  color: '#DC2626', 
                  textAlign: 'left', 
                  marginTop: '0.5rem',
                  fontSize: '0.9rem'
                }}>
                  {error}
                </p>
              )}
              <p style={{
                fontSize: '0.875rem',
                color: '#6B7280',
                marginTop: '1rem',
                textAlign: 'center'
              }}>
                We respect your privacy and will never share your information.
              </p>
            </form>
          )}
        </motion.div>
      </section>
    </main>
  );
} 