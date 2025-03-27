"use client";

import Header from '@/components/Header';
import PhoneVisualization from '@/components/PhoneVisualization';
import EndorsementLogos from '@/components/EndorsementLogos';
import GridBackground from '@/components/GridBackground';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaChartBar, FaLightbulb, FaBrain, FaSearchLocation, FaMicrochip, FaLanguage, FaMobileAlt, FaArrowRight, FaHandHoldingHeart, FaHandshake, FaUsers, FaTwitter, FaFacebook, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaCheck, FaDownload, FaGlobe, FaShieldAlt, FaStar } from 'react-icons/fa';
import BetaStatusCounter from '@/components/BetaStatusCounter';
import InteractiveDemo from '@/components/InteractiveDemo';
import NewsSection from '@/components/NewsSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import AccessibilityPanel from '@/components/AccessibilityPanel';
import DarkModeToggle from '@/components/DarkModeToggle';
import CookieConsent from '@/components/CookieConsent';

// Array of taglines to rotate through
const taglines = [
  "The world's first camera-to-speech AI for Blind users.",
  "Revolutionary spatial awareness with precise distance measurements.",
  "Helping blind users navigate the world with unprecedented independence.",
  "Real-time object detection with distance information in natural speech.",
  "Bridging the visual gap through advanced AI technology.",
  "Providing eyes that speak, offering a new way to perceive the world.",
  "Empowering blind individuals with spatial intelligence.",
  "Converting sight into sound with groundbreaking precision.",
  "Building confidence through accurate environmental awareness.",
  "Making the invisible visible through the power of sound."
];

// Technology highlights data
const technologyHighlights = [
  {
    title: "Object Detection",
    subtitle: "YOLOv9-based Framework",
    description: "Real-time identification of 5,000+ distinct objects in various lighting conditions using our optimized YOLO framework.",
    icon: <FaSearchLocation size={24} />
  },
  {
    title: "Spatial Computing",
    subtitle: "DepthSense™ Algorithm",
    description: "Proprietary algorithms calculate precise distances between the user and detected objects, providing critical spatial awareness.",
    icon: <FaBrain size={24} />
  },
  {
    title: "Natural Language",
    subtitle: "Advanced NLP Models",
    description: "Converting technical visual data into natural, conversational speech that prioritizes the most relevant information.",
    icon: <FaLanguage size={24} />
  },
  {
    title: "Edge Computing",
    subtitle: "On-device Processing",
    description: "All processing happens on-device, ensuring privacy and allowing for use without internet connectivity.",
    icon: <FaMicrochip size={24} />
  }
];

// Performance highlights data
const performanceHighlights = [
  {
    metric: "94.7%",
    label: "Object Detection Accuracy",
    description: "High precision identification in varied environments"
  },
  {
    metric: "5cm",
    label: "Distance Measurement Precision",
    description: "Accurate to within 5cm for nearby objects"
  },
  {
    metric: "14",
    label: "Supported Languages",
    description: "Natural-sounding voice descriptions"
  },
  {
    metric: "100%",
    label: "Offline Functionality",
    description: "Complete privacy and reliability"
  }
];

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div style={{
      borderBottom: '1px solid #E5E7EB',
      marginBottom: '1rem',
      paddingBottom: '1rem'
    }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          textAlign: 'left',
          fontWeight: '600',
          fontSize: '1.1rem',
          color: '#1F2937',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)'
        }}
        aria-expanded={isOpen}
      >
        {question}
        {isOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
      </button>
      
      {isOpen && (
        <div 
          style={{
            padding: '1rem 1.5rem',
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#4B5563',
            backgroundColor: 'rgba(240, 244, 255, 0.5)',
            borderRadius: '0 0 0.5rem 0.5rem',
            marginTop: '0.5rem'
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Effect to cycle through taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000); // Change tagline every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <GridBackground />
      
      <Header />
      
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <section style={{ 
          padding: '4rem 2rem', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          minHeight: '80vh',
          position: 'relative'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#1F2937'
          }}>
            Camera-to-Speech AI for
            <br />
            <span style={{ color: '#3949AB' }}>Blind Users</span>
          </h1>
          
          <div style={{ 
            height: '80px', 
            overflow: 'hidden',
            marginBottom: '2rem',
            position: 'relative'
          }}>
            <p style={{ 
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              position: 'absolute',
              width: '100%',
              opacity: isTransitioning ? 0 : 1,
              transform: `translateY(${isTransitioning ? '20px' : '0'})`,
              transition: 'opacity 0.5s ease, transform 0.5s ease',
              color: '#4B5563',
              maxWidth: '800px'
            }}>
              {taglines[taglineIndex]}
            </p>
          </div>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <Link 
              href="/download" 
              style={{
                backgroundColor: '#3949AB',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              Learn More
            </Link>
            <Link 
              href="/about" 
              style={{
                backgroundColor: 'white',
                color: '#4B5563',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: 'bold',
                textDecoration: 'none',
                border: '1px solid #E5E7EB'
              }}
            >
              About Us
            </Link>
          </div>
          
          {/* Non-Profit Banner */}
          <div style={{
            backgroundColor: 'rgba(57, 73, 171, 0.1)', 
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            marginBottom: '3rem',
            maxWidth: '700px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap'
          }}>
            <span style={{ 
              fontWeight: '500',
              color: '#3949AB',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem' 
            }}>
              <FaHandHoldingHeart size={18} /> Non-profit organization
            </span>
            <span style={{ color: '#4B5563' }}>
              Help us make this technology accessible to all
            </span>
            <Link 
              href="/donate" 
              style={{
                backgroundColor: '#3949AB',
                color: 'white',
                padding: '0.375rem 0.75rem',
                borderRadius: '0.375rem',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '0.875rem',
                whiteSpace: 'nowrap'
              }}
            >
              Support our mission
            </Link>
          </div>
          
          {/* Enhanced Hero Visual with Phone Image */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1100px',
            margin: '2rem auto 4rem',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem'
          }}>
            {/* Phone Image */}
            <div style={{
              flex: '0 0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                zIndex: -1,
                top: '-2rem',
                left: '-3rem',
                width: '16rem',
                height: '16rem',
                background: 'radial-gradient(circle, rgba(57, 73, 171, 0.15) 0%, rgba(57, 73, 171, 0) 70%)',
                borderRadius: '50%',
                filter: 'blur(30px)'
              }}></div>
              
              <div style={{
                position: 'absolute',
                zIndex: -1,
                bottom: '-2.5rem',
                right: '-3.5rem',
                width: '20rem',
                height: '20rem',
                background: 'radial-gradient(circle, rgba(57, 73, 171, 0.2) 0%, rgba(57, 73, 171, 0) 70%)',
                borderRadius: '50%',
                filter: 'blur(30px)'
              }}></div>
              
        <Image
                src="/images/phone.png"
                alt="iVision AI App Interface"
                width={300}
                height={600}
                style={{
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))',
                  zIndex: 1
                }}
          priority
        />
            </div>
            
            {/* Description */}
            <div style={{
              flex: '1 1 500px',
              textAlign: 'left',
              padding: '2rem'
            }}>
              <h2 style={{ 
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#1F2937',
                position: 'relative',
                display: 'inline-block'
              }}>
                Revolutionary AI for Blind Users
              </h2>
              
              <p style={{ 
                fontSize: '1.1rem',
                color: '#4B5563',
                marginBottom: '2rem',
                lineHeight: '1.7'
              }}>
                iVision AI instantly identifies objects, measures distances, and delivers natural
                voice descriptions to help blind users navigate their surroundings with confidence.
              </p>
              
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  padding: '1rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                }}>
                  <div style={{ 
                    backgroundColor: '#F0F4FF',
                    borderRadius: '50%',
                    width: '2.5rem',
                    height: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3949AB'
                  }}>
                    <FaSearchLocation size={18} />
                  </div>
                  <span style={{ fontWeight: '500' }}>Real-time object detection</span>
                </div>
                
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  padding: '1rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                }}>
                  <div style={{ 
                    backgroundColor: '#F0F4FF',
                    borderRadius: '50%',
                    width: '2.5rem',
                    height: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3949AB'
                  }}>
                    <FaLanguage size={18} />
                  </div>
                  <span style={{ fontWeight: '500' }}>Natural speech descriptions</span>
                </div>
                
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  padding: '1rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                }}>
                  <div style={{ 
                    backgroundColor: '#F0F4FF',
                    borderRadius: '50%',
                    width: '2.5rem',
                    height: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3949AB'
                  }}>
                    <FaMicrochip size={18} />
                  </div>
                  <span style={{ fontWeight: '500' }}>Offline functionality</span>
                </div>
              </div>
              
              <div style={{ display: 'flex' }}>
                <Link 
                  href="/download" 
                  style={{
                    backgroundColor: '#3949AB',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 12px rgba(57, 73, 171, 0.15)',
                    transition: 'all 0.2s ease'
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
                  Download App <FaArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
          
          <EndorsementLogos />
        </section>

        {/* Technology Overview Section */}
        <section style={{ 
          padding: '6rem 2rem', 
          backgroundColor: '#F9FAFB',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#1F2937',
              position: 'relative',
              display: 'inline-block'
            }}>
              Technology Overview
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                backgroundColor: '#3949AB',
                borderRadius: '1.5px'
              }} />
            </h2>
            
            <p style={{ 
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: '#4B5563',
              maxWidth: '800px',
              margin: '2rem auto 4rem',
              lineHeight: '1.7'
            }}>
              At iVision AI, we've developed groundbreaking technology that transforms visual information into 
              helpful audio descriptions. Our system combines advanced AI with spatial computing for unprecedented results.
            </p>
            
            {/* Technology Highlights Grid */}
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '5rem'
            }}>
              {technologyHighlights.map((item, index) => (
                <div key={index} style={{ 
                  backgroundColor: 'white',
                  borderRadius: '1rem',
                  padding: '2.5rem 2rem',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  height: '100%',
                  transform: 'translateY(0)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.05)';
                }}
                >
                  <div style={{ 
                    backgroundColor: '#F0F4FF',
                    borderRadius: '50%',
                    width: '4.5rem',
                    height: '4.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.75rem',
                    color: '#3949AB',
                    boxShadow: '0 5px 15px rgba(57, 73, 171, 0.15)'
                  }}>
                    {item.icon}
        </div>
                  
                  <h3 style={{ 
                    fontSize: '1.35rem',
                    fontWeight: 'bold',
                    color: '#1F2937',
                    marginBottom: '0.75rem',
                  }}>
                    {item.title}
                  </h3>
                  
                  <p style={{ 
                    fontSize: '0.9rem',
                    color: '#6B7280',
                    fontWeight: '500',
                    marginBottom: '1.25rem',
                  }}>
                    {item.subtitle}
                  </p>
                  
                  <p style={{ 
                    fontSize: '1rem',
                    color: '#4B5563',
                    lineHeight: '1.6',
                    flex: '1',
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Video Showcase Section */}
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '1.5rem',
              padding: '3.5rem',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
              marginBottom: '4rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <h3 style={{ 
                fontSize: '1.75rem',
                fontWeight: 'bold',
                color: '#1F2937',
                marginBottom: '2rem',
                position: 'relative',
                display: 'inline-block'
              }}>
                See iVision AI in Action
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '3px',
                  backgroundColor: '#3949AB',
                  borderRadius: '1.5px'
                }} />
              </h3>
              
              <p style={{ 
                fontSize: '1.1rem',
                color: '#4B5563',
                maxWidth: '800px',
                margin: '0 auto 2.5rem',
                lineHeight: '1.7'
              }}>
                Watch a real-world demonstration of our technology helping blind users navigate their environment with confidence
              </p>
              
              <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                borderRadius: '1rem',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <video 
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: '100%',
                    display: 'block',
                    borderRadius: '1rem'
                  }}
                >
                  <source src="/example.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  padding: '0.75rem 1rem',
                  fontSize: '0.9rem',
                  textAlign: 'center',
                  borderRadius: '0 0 1rem 1rem'
                }}>
                  <span style={{ fontWeight: 'bold' }}>YOLOv9-based technology</span> detecting objects and calculating distances in real-time
                </div>
              </div>
            </div>
            
            {/* Two-Column Approach Section */}
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '1.5rem',
              padding: '3.5rem',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
              marginBottom: '4rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <h3 style={{ 
                fontSize: '1.75rem',
                fontWeight: 'bold',
                color: '#1F2937',
                marginBottom: '2.5rem',
                textAlign: 'center',
                position: 'relative',
                display: 'inline-block'
              }}>
                Our Dual-Processing Approach
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '3px',
                  backgroundColor: '#3949AB',
                  borderRadius: '1.5px'
                }} />
              </h3>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '3rem',
                marginTop: '2rem'
              }}>
                {/* Column 1: Visual Processing */}
                <div style={{
                  padding: '2rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(57, 73, 171, 0.1)',
                  backgroundColor: '#F9FAFB',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '5px',
                    background: 'linear-gradient(to right, #3949AB, #5C6BC0)'
                  }} />
                  
                  <h4 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1F2937',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <FaSearchLocation size={22} style={{ color: '#3949AB' }} />
                    YOLO-Based Object Detection
                  </h4>
                  
                  <p style={{
                    color: '#4B5563',
                    lineHeight: '1.7',
                    fontSize: '1.05rem',
                    marginBottom: '2rem'
                  }}>
                    We've implemented and optimized the YOLO (You Only Look Once) framework, renowned for its speed and accuracy 
                    in real-time object detection. Our modified version identifies over 5,000 objects in milliseconds while 
                    calculating precise distances.
                  </p>
                  
                  <div style={{
                    backgroundColor: 'rgba(57, 73, 171, 0.05)',
                    padding: '1.25rem',
                    borderRadius: '0.75rem',
                    marginBottom: '1.5rem'
                  }}>
                    <p style={{
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      color: '#3949AB',
                      marginBottom: '0.75rem'
                    }}>
                      KEY METRICS
                    </p>
                    <p style={{
                      color: '#4B5563',
                      fontSize: '1.05rem'
                    }}>
                      94.7% detection accuracy with only 76ms processing time per frame
                    </p>
                  </div>
                </div>
                
                {/* Column 2: Audio Processing */}
                <div style={{
                  padding: '2rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(57, 73, 171, 0.1)',
                  backgroundColor: '#F9FAFB',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '5px',
                    background: 'linear-gradient(to right, #3949AB, #5C6BC0)'
                  }} />
                  
                  <h4 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1F2937',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <FaLanguage size={22} style={{ color: '#3949AB' }} />
                    Proprietary Speech Synthesis
                  </h4>
                  
                  <p style={{
                    color: '#4B5563',
                    lineHeight: '1.7',
                    fontSize: '1.05rem',
                    marginBottom: '2rem'
                  }}>
                    Our custom-built audio AI transforms visual data into natural, conversational speech. 
                    Unlike generic text-to-speech systems, our technology prioritizes spatial information 
                    and adapts to environmental context.
                  </p>
                  
                  <div style={{
                    backgroundColor: 'rgba(57, 73, 171, 0.05)',
                    padding: '1.25rem',
                    borderRadius: '0.75rem',
                    marginBottom: '1.5rem'
                  }}>
                    <p style={{
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      color: '#3949AB',
                      marginBottom: '0.75rem'
                    }}>
                      KEY FEATURES
                    </p>
                    <p style={{
                      color: '#4B5563',
                      fontSize: '1.05rem'
                    }}>
                      Adjustable speech patterns, 14 language options, and distance-priority algorithms that focus on what matters most
                    </p>
                  </div>
                </div>
              </div>
              
              <p style={{
                textAlign: 'center',
                fontSize: '1.15rem',
                fontWeight: '500',
                color: '#1F2937',
                maxWidth: '800px',
                margin: '3rem auto 0',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                backgroundColor: 'rgba(57, 73, 171, 0.05)'
              }}>
                This seamless integration of vision and voice creates the world's first truly comprehensive spatial awareness system for blind users.
              </p>
            </div>
            
            {/* How It Works Section */}
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '1.5rem',
              padding: '3.5rem',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
              marginBottom: '4rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Background pattern */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'radial-gradient(circle, rgba(63, 73, 171, 0.05) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.5,
                pointerEvents: 'none'
              }} />
              
              <h3 style={{ 
                fontSize: '1.75rem',
                fontWeight: 'bold',
                color: '#1F2937',
                marginBottom: '3rem',
                position: 'relative',
                display: 'inline-block'
              }}>
                How It Works
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '3px',
                  backgroundColor: '#3949AB',
                  borderRadius: '1.5px'
                }} />
              </h3>
              
              <div style={{ 
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '3rem',
                position: 'relative',
                zIndex: 2
              }}>
                <div style={{ 
                  flex: '1 1 220px',
                  maxWidth: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <div style={{ 
                    backgroundColor: '#F0F4FF',
                    borderRadius: '50%',
                    width: '5rem',
                    height: '5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: '#3949AB',
                    position: 'relative',
                    boxShadow: '0 8px 20px rgba(57, 73, 171, 0.15)'
                  }}>
                    <FaMobileAlt size={28} />
                    <div style={{ 
                      position: 'absolute',
                      top: '-5px',
                      right: '-5px',
                      backgroundColor: '#3949AB',
                      color: 'white',
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                    }}>1</div>
                  </div>
                  <p style={{ 
                    textAlign: 'center', 
                    color: '#4B5563',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    maxWidth: '200px',
                    lineHeight: '1.5'
                  }}>
                    Smartphone camera captures the environment
                  </p>
                </div>
                
                {/* Connector line */}
                <div style={{
                  alignSelf: 'center',
                  width: '60px',
                  height: '2px',
                  backgroundColor: 'rgba(57, 73, 171, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#3949AB'
                  }} />
                </div>
                
                <div style={{ 
                  flex: '1 1 220px',
                  maxWidth: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <div style={{ 
                    backgroundColor: '#F0F4FF',
                    borderRadius: '50%',
                    width: '5rem',
                    height: '5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: '#3949AB',
                    position: 'relative',
                    boxShadow: '0 8px 20px rgba(57, 73, 171, 0.15)'
                  }}>
                    <FaSearchLocation size={28} />
                    <div style={{ 
                      position: 'absolute',
                      top: '-5px',
                      right: '-5px',
                      backgroundColor: '#3949AB',
                      color: 'white',
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                    }}>2</div>
                  </div>
                  <p style={{ 
                    textAlign: 'center', 
                    color: '#4B5563',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    maxWidth: '200px',
                    lineHeight: '1.5'
                  }}>
                    AI identifies objects and measures distances
                  </p>
                </div>
                
                {/* Connector line */}
                <div style={{
                  alignSelf: 'center',
                  width: '60px',
                  height: '2px',
                  backgroundColor: 'rgba(57, 73, 171, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#3949AB'
                  }} />
                </div>
                
                <div style={{ 
                  flex: '1 1 220px',
                  maxWidth: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <div style={{ 
                    backgroundColor: '#F0F4FF',
                    borderRadius: '50%',
                    width: '5rem',
                    height: '5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: '#3949AB',
                    position: 'relative',
                    boxShadow: '0 8px 20px rgba(57, 73, 171, 0.15)'
                  }}>
                    <FaLanguage size={28} />
                    <div style={{ 
                      position: 'absolute',
                      top: '-5px',
                      right: '-5px',
                      backgroundColor: '#3949AB',
                      color: 'white',
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                    }}>3</div>
                  </div>
                  <p style={{ 
                    textAlign: 'center', 
                    color: '#4B5563',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    maxWidth: '220px',
                    lineHeight: '1.5'
                  }}>
                    Natural language descriptions generated in milliseconds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
            
        {/* Performance Metrics Section */}
        <section style={{ 
          padding: '6rem 2rem', 
          textAlign: 'center',
          background: 'linear-gradient(to bottom, #ffffff, #f5f7ff)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#1F2937',
              position: 'relative',
              display: 'inline-block'
            }}>
              Performance Metrics
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                backgroundColor: '#3949AB',
                borderRadius: '1.5px'
              }} />
            </h2>
            
            <p style={{ 
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: '#4B5563',
              maxWidth: '800px',
              margin: '2rem auto 4rem',
              lineHeight: '1.7'
            }}>
              Our technology has been rigorously tested to ensure reliability, accuracy, and usability
              for blind users in real-world scenarios.
            </p>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {performanceHighlights.map((item, index) => (
                <div key={index} style={{ 
                  backgroundColor: 'white',
                  borderRadius: '1rem',
                  padding: '2.5rem',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(57, 73, 171, 0.1)'
                }}>
                  {/* Background accent */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '6px',
                    width: '100%',
                    backgroundImage: 'linear-gradient(to right, #3949AB, #5C6BC0)',
                    zIndex: 1
                  }} />
                  
                  <div style={{ 
                    fontSize: '3.5rem',
                    fontWeight: 'bold',
                    color: '#3949AB',
                    marginBottom: '1rem',
                    position: 'relative'
                  }}>
                    {item.metric}
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#1F2937',
                    marginBottom: '1rem'
                  }}>
                    {item.label}
                  </h3>
                  
                  <p style={{ 
                    color: '#4B5563',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div style={{
              backgroundColor: 'rgba(57, 73, 171, 0.02)',
              borderRadius: '1.5rem',
              padding: '3.5rem',
              textAlign: 'center',
              border: '1px solid rgba(57, 73, 171, 0.1)',
              boxShadow: '0 20px 40px rgba(57, 73, 171, 0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Background decorative elements */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                backgroundColor: 'rgba(57, 73, 171, 0.03)',
                zIndex: 0
              }} />
              
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                left: '-30px',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                backgroundColor: 'rgba(57, 73, 171, 0.03)',
                zIndex: 0
              }} />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ 
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                  color: '#1F2937',
                  marginBottom: '1.5rem'
                }}>
                  Impact
                </h3>
                
                <p style={{ 
                  fontSize: '1.1rem',
                  color: '#4B5563',
                  maxWidth: '900px',
                  margin: '0 auto 2.5rem',
                  lineHeight: '1.7'
                }}>
                  Our camera-to-speech technology helps blind users navigate with unprecedented confidence 
                  and independence, providing spatial information that was previously unavailable through 
                  assistive technology.
                </p>
                
                <Link 
                  href="/research" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#3949AB',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: 'white',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 12px rgba(57, 73, 171, 0.1)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    transform: 'translateY(0)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(57, 73, 171, 0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(57, 73, 171, 0.1)';
                  }}
                >
                  Learn more about our research <FaArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Funding and Support Section */}
        <section style={{
          padding: '6rem 2rem',
          textAlign: 'center',
          backgroundColor: '#F0F4FF'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
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
                height: '3px',
                backgroundColor: '#3949AB',
                borderRadius: '1.5px'
              }} />
            </h2>
            
            <p style={{ 
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: '#4B5563',
              maxWidth: '800px',
              margin: '2rem auto 4rem',
              lineHeight: '1.7'
            }}>
              As a non-profit organization, we rely on the generosity of donors and partners to continue 
              developing our technology and making it accessible to those who need it most.
            </p>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '1rem',
                padding: '2.5rem 2rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                height: '100%'
              }}>
                <div style={{ 
                  backgroundColor: '#F0F4FF',
                  borderRadius: '50%',
                  width: '4.5rem',
                  height: '4.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.75rem',
                  color: '#3949AB',
                  boxShadow: '0 5px 15px rgba(57, 73, 171, 0.15)'
                }}>
                  <FaHandHoldingHeart size={28} />
                </div>
                
                <h3 style={{ 
                  fontSize: '1.35rem',
                  fontWeight: 'bold',
                  color: '#1F2937',
                  marginBottom: '0.75rem',
                }}>
                  Donate
                </h3>
                
                <p style={{ 
                  fontSize: '1rem',
                  color: '#4B5563',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  flex: '1'
                }}>
                  Your donation helps fund research, development, and distribution of our technology to blind users worldwide.
                </p>
                
                <Link 
                  href="/donate" 
                  style={{
                    backgroundColor: '#3949AB',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Donate Now
                </Link>
              </div>
              
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '1rem',
                padding: '2.5rem 2rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                height: '100%'
              }}>
                <div style={{ 
                  backgroundColor: '#F0F4FF',
                  borderRadius: '50%',
                  width: '4.5rem',
                  height: '4.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.75rem',
                  color: '#3949AB',
                  boxShadow: '0 5px 15px rgba(57, 73, 171, 0.15)'
                }}>
                  <FaHandshake size={28} />
                </div>
                
                <h3 style={{ 
                  fontSize: '1.35rem',
                  fontWeight: 'bold',
                  color: '#1F2937',
                  marginBottom: '0.75rem',
                }}>
                  Partner With Us
                </h3>
                
                <p style={{ 
                  fontSize: '1rem',
                  color: '#4B5563',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  flex: '1'
                }}>
                  Become a corporate partner and help us expand our reach through funding, technology, or expertise.
                </p>
                
                <Link 
                  href="/contact" 
                  style={{
                    backgroundColor: '#F0F4FF',
                    color: '#3949AB',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    border: '1px solid rgba(57, 73, 171, 0.2)'
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section style={{ 
          padding: '6rem 2rem', 
          textAlign: 'center',
          background: 'linear-gradient(to bottom, #ffffff, #F9FAFB)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#1F2937',
              position: 'relative',
              display: 'inline-block'
            }}>
              User Experiences
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                backgroundColor: '#3949AB',
                borderRadius: '1.5px'
              }} />
            </h2>
            
            <p style={{ 
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: '#4B5563',
              maxWidth: '800px',
              margin: '2rem auto 4rem',
              lineHeight: '1.7'
            }}>
              Discover how iVision AI is transforming the lives of blind users through innovative technology
              that enhances independence and spatial awareness.
            </p>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              marginBottom: '3rem'
            }}>
              {/* Testimonial 1 */}
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '1rem',
                padding: '2.5rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Accent border */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: 'linear-gradient(to bottom, #3949AB, #5C6BC0)'
                }}></div>
                
                {/* Quote symbol */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  color: 'rgba(57, 73, 171, 0.1)',
                  fontSize: '5rem',
                  lineHeight: '1',
                  fontFamily: 'serif'
                }}>"</div>
                
                <div style={{ 
                  position: 'relative',
                  zIndex: 1
                }}>
                  <p style={{ 
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: '#4B5563',
                    marginBottom: '2rem',
                    fontStyle: 'italic'
                  }}>
                    iVision AI has completely changed how I navigate my daily life. I can identify 
                    objects, gauge distances, and feel more confident when exploring new environments.
                  </p>
                  
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <div style={{ 
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#F0F4FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#3949AB',
                      fontWeight: 'bold',
                      marginRight: '1rem'
                    }}>
                      MJ
                    </div>
                    <div>
                      <p style={{ 
                        fontWeight: 'bold',
                        color: '#1F2937',
                        margin: 0
                      }}>
                        Michael Johnson
                      </p>
                      <p style={{ 
                        fontSize: '0.875rem',
                        color: '#6B7280',
                        margin: 0
                      }}>
                        iVision AI user for 8 months
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '1rem',
                padding: '2.5rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Accent border */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: 'linear-gradient(to bottom, #3949AB, #5C6BC0)'
                }}></div>
                
                {/* Quote symbol */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  color: 'rgba(57, 73, 171, 0.1)',
                  fontSize: '5rem',
                  lineHeight: '1',
                  fontFamily: 'serif'
                }}>"</div>
                
                <div style={{ 
                  position: 'relative',
                  zIndex: 1
                }}>
                  <p style={{ 
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: '#4B5563',
                    marginBottom: '2rem',
                    fontStyle: 'italic'
                  }}>
                    As an orientation and mobility specialist, I've seen firsthand how this technology 
                    empowers my clients with unprecedented spatial awareness and independence.
                  </p>
                  
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <div style={{ 
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#F0F4FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#3949AB',
                      fontWeight: 'bold',
                      marginRight: '1rem'
                    }}>
                      SP
                    </div>
                    <div>
                      <p style={{ 
                        fontWeight: 'bold',
                        color: '#1F2937',
                        margin: 0
                      }}>
                        Sarah Parker, COMS
                      </p>
                      <p style={{ 
                        fontSize: '0.875rem',
                        color: '#6B7280',
                        margin: 0
                      }}>
                        Mobility Specialist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '1rem',
                padding: '2.5rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Accent border */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: 'linear-gradient(to bottom, #3949AB, #5C6BC0)'
                }}></div>
                
                {/* Quote symbol */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  color: 'rgba(57, 73, 171, 0.1)',
                  fontSize: '5rem',
                  lineHeight: '1',
                  fontFamily: 'serif'
                }}>"</div>
                
                <div style={{ 
                  position: 'relative',
                  zIndex: 1
                }}>
                  <p style={{ 
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: '#4B5563',
                    marginBottom: '2rem',
                    fontStyle: 'italic'
                  }}>
                    The most impressive aspect is how it adapts to my preferences. The more I use it,
                    the better it gets at providing the information that matters most to me.
                  </p>
                  
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <div style={{ 
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#F0F4FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#3949AB',
                      fontWeight: 'bold',
                      marginRight: '1rem'
                    }}>
                      RL
                    </div>
                    <div>
                      <p style={{ 
                        fontWeight: 'bold',
                        color: '#1F2937',
                        margin: 0
                      }}>
                        Robert Lee
                      </p>
                      <p style={{ 
                        fontSize: '0.875rem',
                        color: '#6B7280',
                        margin: 0
                      }}>
                        iVision AI user for 1 year
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Link 
              href="/testimonials" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#3949AB',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '1.1rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 12px rgba(57, 73, 171, 0.1)',
                border: '1px solid rgba(57, 73, 171, 0.1)'
              }}
            >
              Read More Stories <FaArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ 
          padding: '6rem 2rem', 
          textAlign: 'center',
          backgroundColor: '#F9FAFB'
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#1F2937',
              position: 'relative',
              display: 'inline-block'
            }}>
              Frequently Asked Questions
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                backgroundColor: '#3949AB',
                borderRadius: '1.5px'
              }} />
            </h2>
            
            <p style={{ 
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: '#4B5563',
              maxWidth: '800px',
              margin: '2rem auto 4rem',
              lineHeight: '1.7'
            }}>
              Get answers to common questions about iVision AI, our technology, and how it can help enhance
              independence for blind users.
            </p>
            
            <div style={{ textAlign: 'left' }}>
              <FAQItem 
                question="How does iVision AI work?"
                answer="iVision AI uses your smartphone's camera to capture the environment, processes the visual information through advanced AI models to detect objects and measure distances, and then converts this data into natural language descriptions delivered through speech. All processing happens on-device, ensuring privacy and offline functionality."
              />
              
              <FAQItem 
                question="Is iVision AI free to use?"
                answer="Yes, iVision AI is completely free for all blind and visually impaired users. As a non-profit organization, we rely on donations, grants, and partnerships to fund our development and ensure the technology remains accessible to all who need it."
              />
              
              <FAQItem 
                question="Does it work in all lighting conditions?"
                answer="iVision AI is designed to function in a wide range of lighting conditions, including low-light environments. However, extremely dark settings may reduce accuracy. The app will inform you when lighting conditions might affect performance and will continue to provide the best possible information based on available visual data."
              />
              
              <FAQItem 
                question="What languages are supported?"
                answer="Currently, iVision AI supports English, Spanish, French, German, and Mandarin Chinese. We're actively working to add more languages and improve our natural language processing for existing ones. The app automatically detects your device's language settings."
              />
              
              <FAQItem 
                question="Do I need an internet connection to use the app?"
                answer="No, iVision AI works completely offline. All processing happens on your device, which enhances privacy and allows you to use the app anywhere, even without cellular or WiFi connectivity."
              />
              
              <FAQItem 
                question="How accurate is the object detection?"
                answer="Our latest models achieve over 95% accuracy for common objects in good lighting conditions. The app continuously improves through machine learning and regular updates. For critical navigation and safety decisions, we recommend using iVision AI as a complement to traditional mobility tools."
              />
              
              <FAQItem 
                question="How can I contribute to the project?"
                answer="You can support iVision AI by donating, volunteering your skills, participating in user testing, or helping spread awareness. Visit our 'Support' page to learn more about how you can contribute to making this technology available to more blind users worldwide."
              />
            </div>
            
            <Link 
              href="/faq" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#3949AB',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '1.1rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 12px rgba(57, 73, 171, 0.1)',
                border: '1px solid rgba(57, 73, 171, 0.1)',
                marginTop: '3rem'
              }}
            >
              View All FAQs <FaArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* Footer Section */}
        <footer style={{
          backgroundColor: '#1F2937',
          color: 'white',
          padding: '4rem 2rem 2rem',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '3rem',
              textAlign: 'left',
              marginBottom: '3rem'
            }}>
              {/* Company Info */}
              <div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  color: 'white'
                }}>iVision AI</h3>
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  marginTop: '1rem'
                }}>
                  <a href="https://x.com/iVisionAI" target="_blank" rel="noopener noreferrer" style={{ 
                    color: '#D1D5DB',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#D1D5DB';
                  }}>
                    <FaTwitter size={20} /> <span style={{ marginLeft: '0.25rem', fontSize: '0.9rem' }}>X</span>
                  </a>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  color: 'white'
                }}>Quick Links</h3>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  <li>
                    <Link href="/about" style={{ 
                      color: '#D1D5DB', 
                      textDecoration: 'none',
                      fontSize: '0.95rem'
                    }}>About Us</Link>
                  </li>
                  <li>
                    <Link href="/features" style={{ 
                      color: '#D1D5DB', 
                      textDecoration: 'none',
                      fontSize: '0.95rem'
                    }}>Features</Link>
                  </li>
                  <li>
                    <Link href="/research" style={{ 
                      color: '#D1D5DB', 
                      textDecoration: 'none',
                      fontSize: '0.95rem'
                    }}>Research</Link>
                  </li>
                  <li>
                    <Link href="/download" style={{ 
                      color: '#D1D5DB', 
                      textDecoration: 'none',
                      fontSize: '0.95rem'
                    }}>Download</Link>
                  </li>
                </ul>
              </div>
              
              {/* Resources */}
              <div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  color: 'white'
                }}>Resources</h3>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  <li>
                    <Link href="/faq" style={{ 
                      color: '#D1D5DB', 
                      textDecoration: 'none',
                      fontSize: '0.95rem'
                    }}>FAQ</Link>
                  </li>
                  <li>
                    <Link href="/donate" style={{ 
                      color: '#D1D5DB', 
                      textDecoration: 'none',
                      fontSize: '0.95rem'
                    }}>Donate</Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div style={{
              borderTop: '1px solid #374151',
              paddingTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <p style={{ fontSize: '0.875rem', color: '#9CA3AF' }}>
                © {new Date().getFullYear()} iVision AI. All rights reserved.
              </p>
            </div>
          </div>
      </footer>
      </main>
    </div>
  );
}
