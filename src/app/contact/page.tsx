'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegCheckCircle, FaTwitter, FaFacebook, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import GridBackground from '@/components/GridBackground';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: null });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        submitting: false,
        error: null,
      });
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <GridBackground />
      
      {/* Hero Section */}
      <section style={{ 
        padding: '6rem 2rem 4rem', 
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
          Contact Us
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
          Have questions or want to learn more about iVision AI? We'd love to hear from you.
          Our team is ready to assist with any inquiries about our technology, partnerships, or support.
        </p>
      </section>
      
      {/* Contact Content Section */}
      <section style={{ 
        padding: '2rem 2rem 6rem', 
        position: 'relative'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '3rem',
          justifyContent: 'center'
        }}>
          {/* Contact Form */}
          <div style={{ 
            flex: '1 1 600px',
            backgroundColor: 'white',
            borderRadius: '1rem',
            padding: '2.5rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(57, 73, 171, 0.1)'
          }}>
            <h2 style={{ 
              fontSize: '1.75rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#1F2937'
            }}>
              Send Us a Message
            </h2>
            
            {!formStatus.submitted ? (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label 
                    htmlFor="name" 
                    style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500',
                      color: '#4B5563'
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid #D1D5DB',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3949AB';
                      e.target.style.boxShadow = '0 0 0 3px rgba(57, 73, 171, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#D1D5DB';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label 
                    htmlFor="email" 
                    style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500',
                      color: '#4B5563'
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid #D1D5DB',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3949AB';
                      e.target.style.boxShadow = '0 0 0 3px rgba(57, 73, 171, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#D1D5DB';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label 
                    htmlFor="subject" 
                    style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500',
                      color: '#4B5563'
                    }}
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid #D1D5DB',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none',
                      backgroundColor: 'white',
                      appearance: 'none',
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236B7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1rem'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3949AB';
                      e.target.style.boxShadow = '0 0 0 3px rgba(57, 73, 171, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#D1D5DB';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Please select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Media Inquiry">Media Inquiry</option>
                    <option value="Career Information">Career Information</option>
                  </select>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <label 
                    htmlFor="message" 
                    style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500',
                      color: '#4B5563'
                    }}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid #D1D5DB',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3949AB';
                      e.target.style.boxShadow = '0 0 0 3px rgba(57, 73, 171, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#D1D5DB';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={formStatus.submitting}
                  style={{
                    backgroundColor: '#3949AB',
                    color: 'white',
                    padding: '0.875rem 2rem',
                    borderRadius: '0.5rem',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: formStatus.submitting ? 'not-allowed' : 'pointer',
                    fontSize: '1rem',
                    opacity: formStatus.submitting ? 0.7 : 1,
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                  }}
                  onMouseOver={(e) => {
                    if (!formStatus.submitting) {
                      e.currentTarget.style.backgroundColor = '#303F9F';
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#3949AB';
                  }}
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FaRegCheckCircle size={60} color="#3949AB" />
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  margin: '1.5rem 0 1rem',
                  color: '#1F2937'
                }}>
                  Thank You!
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#4B5563',
                  marginBottom: '2rem',
                  maxWidth: '500px'
                }}>
                  Your message has been received. We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setFormStatus({ submitted: false, submitting: false, error: null })}
                  style={{
                    backgroundColor: '#3949AB',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#303F9F';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#3949AB';
                  }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
          
          {/* Contact Information */}
          <div style={{ 
            flex: '1 1 400px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {/* Contact Info Card */}
            <div style={{ 
              backgroundColor: '#F0F4FF',
              borderRadius: '1rem',
              padding: '2.5rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(57, 73, 171, 0.1)'
            }}>
              <h2 style={{ 
                fontSize: '1.75rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: '#1F2937'
              }}>
                Contact Information
              </h2>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <div style={{
                    backgroundColor: 'rgba(57, 73, 171, 0.1)',
                    borderRadius: '50%',
                    width: '2.5rem',
                    height: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <FaEnvelope size={18} color="#3949AB" />
                  </div>
                  <div>
                    <p style={{
                      fontWeight: '600',
                      color: '#1F2937',
                      marginBottom: '0.25rem'
                    }}>
                      Email
                    </p>
                    <a 
                      href="mailto:contact@ivisionai.com" 
                      style={{
                        color: '#3949AB',
                        textDecoration: 'none',
                        fontWeight: '500',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = '#303F9F';
                        e.currentTarget.style.textDecoration = 'underline';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = '#3949AB';
                        e.currentTarget.style.textDecoration = 'none';
                      }}
                    >
                      contact@ivisionai.com
                    </a>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <div style={{
                    backgroundColor: 'rgba(57, 73, 171, 0.1)',
                    borderRadius: '50%',
                    width: '2.5rem',
                    height: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <FaPhone size={18} color="#3949AB" />
                  </div>
                  <div>
                    <p style={{
                      fontWeight: '600',
                      color: '#1F2937',
                      marginBottom: '0.25rem'
                    }}>
                      Phone
                    </p>
                    <a 
                      href="tel:+18005551234" 
                      style={{
                        color: '#3949AB',
                        textDecoration: 'none',
                        fontWeight: '500',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = '#303F9F';
                        e.currentTarget.style.textDecoration = 'underline';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = '#3949AB';
                        e.currentTarget.style.textDecoration = 'none';
                      }}
                    >
                      +1 (800) 555-1234
                    </a>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <div style={{
                    backgroundColor: 'rgba(57, 73, 171, 0.1)',
                    borderRadius: '50%',
                    width: '2.5rem',
                    height: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <FaMapMarkerAlt size={18} color="#3949AB" />
                  </div>
                  <div>
                    <p style={{
                      fontWeight: '600',
                      color: '#1F2937',
                      marginBottom: '0.25rem'
                    }}>
                      Headquarters
                    </p>
                    <p style={{
                      color: '#4B5563',
                      lineHeight: '1.5'
                    }}>
                      1234 Innovation Way<br />
                      San Francisco, CA 94110<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div style={{
                marginTop: '2.5rem',
                borderTop: '1px solid rgba(57, 73, 171, 0.1)',
                paddingTop: '2rem'
              }}>
                <p style={{
                  fontWeight: '600',
                  color: '#1F2937',
                  marginBottom: '1rem'
                }}>
                  Connect With Us
                </p>
                <div style={{
                  display: 'flex',
                  gap: '1rem'
                }}>
                  <a
                    href="https://x.com/iVisionAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: 'white',
                      color: '#3949AB',
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#3949AB';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.color = '#3949AB';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <FaTwitter size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* FAQ Card */}
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '2.5rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(57, 73, 171, 0.1)'
            }}>
              <h2 style={{ 
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: '#1F2937'
              }}>
                Frequently Asked Questions
              </h2>
              
              <p style={{
                color: '#4B5563',
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                Have a general question? Check our FAQ section for quick answers to commonly asked questions.
              </p>
              
              <Link
                href="/faq"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#3949AB',
                  fontWeight: '600',
                  textDecoration: 'none',
                  paddingTop: '0.5rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#303F9F';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '#3949AB';
                }}
              >
                View FAQ Page <FaArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage; 