'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp, FaArrowRight } from 'react-icons/fa';
import GridBackground from '@/components/GridBackground';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{
      marginBottom: '1.5rem',
      borderBottom: '1px solid #E5E7EB',
      paddingBottom: '1.5rem'
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          textAlign: 'left',
          padding: '0',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          outline: 'none'
        }}
      >
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#1F2937',
          margin: '0'
        }}>
          {question}
        </h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isOpen ? '#3949AB' : '#F3F4F6',
          borderRadius: '50%',
          width: '2rem',
          height: '2rem',
          color: isOpen ? 'white' : '#4B5563',
          transition: 'all 0.2s ease'
        }}>
          {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
        </div>
      </button>
      
      {isOpen && (
        <div 
          style={{
            marginTop: '1rem',
            paddingLeft: '0.5rem',
            color: '#4B5563',
            lineHeight: '1.7',
            fontSize: '1.05rem'
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQPage = () => {
  const faqs = [
    {
      question: "How does iVision AI work?",
      answer: "iVision AI uses your smartphone's camera to capture the environment, processes the visual information through advanced AI models to detect objects and measure distances, and then converts this data into natural language descriptions delivered through speech. All processing happens on-device, ensuring privacy and offline functionality."
    },
    {
      question: "Is iVision AI free to use?",
      answer: "Yes, iVision AI is completely free for all blind and visually impaired users. As a non-profit organization, we rely on donations, grants, and partnerships to fund our development and ensure the technology remains accessible to all who need it."
    },
    {
      question: "Does it work in all lighting conditions?",
      answer: "iVision AI is designed to function in a wide range of lighting conditions, including low-light environments. However, extremely dark settings may reduce accuracy. The app will inform you when lighting conditions might affect performance and will continue to provide the best possible information based on available visual data."
    },
    {
      question: "What languages are supported?",
      answer: "Currently, iVision AI supports English, Spanish, French, German, and Mandarin Chinese. We're actively working to add more languages and improve our natural language processing for existing ones. The app automatically detects your device's language settings."
    },
    {
      question: "Do I need an internet connection to use the app?",
      answer: "No, iVision AI works completely offline. All processing happens on your device, which enhances privacy and allows you to use the app anywhere, even without cellular or WiFi connectivity."
    },
    {
      question: "How accurate is the object detection?",
      answer: "Our latest models achieve over 95% accuracy for common objects in good lighting conditions. The app continuously improves through machine learning and regular updates. For critical navigation and safety decisions, we recommend using iVision AI as a complement to traditional mobility tools."
    },
    {
      question: "How can I contribute to the project?",
      answer: "You can support iVision AI by donating, participating in user testing, or helping spread awareness. Visit our 'Donate' page to learn more about how you can contribute to making this technology available to more blind users worldwide."
    },
    {
      question: "What devices is iVision AI compatible with?",
      answer: "iVision AI is compatible with iOS devices (iPhone 8 and newer running iOS 14+) and Android devices (running Android 9.0+ with ARCore support). We recommend devices with strong processors for optimal performance."
    },
    {
      question: "How does iVision AI protect my privacy?",
      answer: "Privacy is a top priority for us. iVision AI processes all data on-device, meaning your camera feed never leaves your phone. We don't collect or store any images, and no internet connection is required during use."
    },
    {
      question: "Is iVision AI designed for both indoor and outdoor use?",
      answer: "Yes, iVision AI is designed to work in both indoor and outdoor environments. The app adjusts its algorithms based on lighting conditions and environment type to provide the most accurate descriptions possible."
    },
    {
      question: "How does the distance measurement work?",
      answer: "iVision AI uses a combination of computer vision techniques, including depth estimation from a single camera, to measure distances to detected objects. While not as precise as specialized hardware like LiDAR, our technology provides useful approximations that help users understand their spatial relationship to surroundings."
    },
    {
      question: "Can iVision AI recognize faces or read text?",
      answer: "The current version of iVision AI can recognize when faces are present but doesn't identify specific individuals. For text recognition, the app can detect when text is present and read basic signs, labels, and short passages. More advanced OCR (Optical Character Recognition) capabilities are being developed for future releases."
    },
    {
      question: "How do I get started with iVision AI?",
      answer: "Once the app is released, you can download it for free from the App Store or Google Play Store. After installation, the app includes a tutorial mode that guides you through basic features and settings. No registration is required to use the core features of the app."
    },
    {
      question: "Is there a community for iVision AI users?",
      answer: "Yes! We have an active community of users and supporters. You can join our online forums, follow us on social media (@iVisionAI), or participate in our regular virtual meetups. We also work closely with blindness organizations and welcome community feedback to continually improve our technology."
    },
    {
      question: "When will iVision AI be available for download?",
      answer: "iVision AI is currently in final testing phases with our beta user group. We anticipate a public release in the coming months. Sign up on our Download page to be notified when the app becomes available and to potentially join our beta testing program."
    }
  ];

  // Group FAQs by category for easier navigation
  const categories = {
    "Technology & Features": [0, 2, 4, 5, 10, 11],
    "Accessibility & Support": [1, 6, 13, 14],
    "Compatibility & Usage": [3, 7, 8, 9, 12]
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
          Frequently Asked Questions
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
          Find answers to common questions about iVision AI, our technology, and how it helps
          blind users navigate the world with confidence.
        </p>
      </section>
      
      {/* FAQ Sections */}
      <section style={{ 
        padding: '2rem 2rem 6rem', 
        position: 'relative'
      }}>
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto'
        }}>
          {/* Category Navigation */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}>
            {Object.keys(categories).map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                  padding: '0.75rem 1.25rem',
                  backgroundColor: 'white',
                  color: '#1F2937',
                  borderRadius: '0.5rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #E5E7EB',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#F0F4FF';
                  e.currentTarget.style.borderColor = 'rgba(57, 73, 171, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }}
              >
                {category}
              </a>
            ))}
          </div>
          
          {/* FAQ Categories */}
          {Object.entries(categories).map(([category, indices]) => (
            <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')} style={{ marginBottom: '4rem' }}>
              <h2 style={{ 
                fontSize: '1.75rem',
                fontWeight: 'bold',
                marginBottom: '2rem',
                color: '#1F2937',
                borderBottom: '1px solid #E5E7EB',
                paddingBottom: '1rem'
              }}>
                {category}
              </h2>
              
              <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)' }}>
                {indices.map((index) => (
                  <FAQItem 
                    key={index}
                    question={faqs[index].question}
                    answer={faqs[index].answer}
                  />
                ))}
              </div>
            </div>
          ))}
          
          {/* Contact CTA */}
          <div style={{
            backgroundColor: '#F0F4FF',
            borderRadius: '1rem',
            padding: '2.5rem',
            textAlign: 'center',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
            marginTop: '4rem',
            border: '1px solid rgba(57, 73, 171, 0.1)'
          }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#1F2937'
            }}>
              Didn't Find Your Answer?
            </h2>
            
            <p style={{ 
              fontSize: '1.1rem',
              color: '#4B5563',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              lineHeight: '1.7'
            }}>
              We're here to help. Contact our team directly for any questions not addressed in our FAQ.
            </p>
            
            <Link
              href="/contact"
              style={{
                backgroundColor: '#3949AB',
                color: 'white',
                padding: '0.875rem 2rem',
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
                e.currentTarget.style.backgroundColor = '#303F9F';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#3949AB';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact Us <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage; 