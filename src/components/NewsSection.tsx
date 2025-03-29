'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaNewspaper, FaAward, FaRegCalendarAlt, FaArrowRight, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';

type NewsItem = {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
  link: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "iVision AI Launches Beta Program",
    summary: "Our team is excited to announce the launch of our beta program, offering early access to our innovative camera-to-speech technology for blind users.",
    date: "March 15, 2023",
    category: "Announcement",
    image: "/images/news/beta-launch.jpg",
    link: "/news/beta-launch"
  },
  {
    id: 2,
    title: "New Research Partnership with Vision Institute",
    summary: "We've partnered with the Vision Institute to advance our object detection algorithms and expand our capabilities to more complex environments.",
    date: "February 28, 2023",
    category: "Partnership",
    image: "/images/news/research-partnership.jpg",
    link: "/news/research-partnership"
  },
  {
    id: 3,
    title: "Accessibility Award for iVision AI",
    summary: "Our technology has been recognized with the Global Accessibility Innovation Award for its contribution to improving the lives of visually impaired individuals.",
    date: "January 12, 2023",
    category: "Award",
    image: "/images/news/award.jpg",
    link: "/news/accessibility-award"
  },
  {
    id: 4,
    title: "Featured in Tech Accessibility Magazine",
    summary: "iVision AI's approach to spatial awareness for blind users was featured in this month's edition of Tech Accessibility Magazine.",
    date: "December 5, 2022",
    category: "Media",
    image: "/images/news/magazine.jpg",
    link: "/news/tech-accessibility-magazine"
  }
];
x
const NewsSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    // Mock subscription success
    setIsSubscribed(true);
    setError('');
  };

  return (
    <div className="news-section">
      <div style={{ 
        backgroundColor: 'white',
        borderRadius: '1rem',
        padding: '2.5rem',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1F2937',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <FaNewspaper style={{ color: '#3949AB' }} />
            Latest News & Updates
          </h3>
          
          <Link 
            href="/news" 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#3949AB',
              fontWeight: '500',
              fontSize: '0.95rem',
              textDecoration: 'none',
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
            View All <FaArrowRight size={12} />
          </Link>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {newsItems.map((item) => (
            <div key={item.id} style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(229, 231, 235, 0.5)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
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
              {/* Image placeholder (using background color instead of actual images) */}
              <div style={{
                backgroundColor: '#F0F4FF',
                height: '160px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  backgroundColor: '#3949AB',
                  color: 'white',
                  padding: '0.375rem 0.75rem',
                  borderRadius: '0.375rem',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  zIndex: 1
                }}>
                  {item.category}
                </div>
              </div>
              
              <div style={{
                padding: '1.5rem',
                flex: '1',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.75rem',
                  color: '#6B7280',
                  fontSize: '0.875rem'
                }}>
                  <FaCalendarAlt style={{ marginRight: '0.5rem' }} />
                  {item.date}
                </div>
                
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '0.75rem',
                  color: '#1F2937'
                }}>
                  {item.title}
                </h3>
                
                <p style={{
                  color: '#4B5563',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  flex: '1'
                }}>
                  {item.summary}
                </p>
                
                <Link 
                  href={item.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: '#3949AB',
                    fontWeight: '600',
                    textDecoration: 'none',
                    gap: '0.25rem',
                    alignSelf: 'flex-start'
                  }}
                >
                  Read More <FaChevronRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Newsletter Subscription */}
        <div style={{
          backgroundColor: '#F0F4FF',
          borderRadius: '1rem',
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#1F2937'
          }}>
            Stay Updated with Our Newsletter
          </h3>
          
          <p style={{
            fontSize: '1.1rem',
            color: '#4B5563',
            maxWidth: '600px',
            margin: '0 auto 1.5rem',
            lineHeight: '1.7'
          }}>
            Join our community to receive updates on our development progress, new features, and impact stories.
          </p>
          
          {isSubscribed ? (
            <div style={{
              backgroundColor: 'rgba(57, 73, 171, 0.1)',
              borderRadius: '0.5rem',
              padding: '1.25rem',
              maxWidth: '500px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                backgroundColor: '#3949AB',
                color: 'white',
                borderRadius: '50%',
                width: '1.5rem',
                height: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: 'bold'
              }}>
                ✓
              </div>
              <span style={{ fontWeight: '500', color: '#3949AB' }}>
                Thank you for subscribing! We'll keep you updated.
              </span>
            </div>
          ) : (
            <form 
              onSubmit={handleSubscribe}
              style={{
                display: 'flex',
                gap: '0.75rem',
                maxWidth: '500px',
                width: '100%',
                margin: '0 auto',
                flexWrap: 'wrap'
              }}
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address for newsletter"
                style={{
                  padding: '0.75rem 1.25rem',
                  borderRadius: '0.5rem',
                  flex: '1',
                  minWidth: '200px',
                  border: error ? '1px solid #DC2626' : '1px solid rgba(229, 231, 235, 0.8)',
                  outline: 'none',
                  fontSize: '1rem'
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#3949AB',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Subscribe <FaArrowRight size={14} />
              </button>
              {error && (
                <p style={{
                  color: '#DC2626',
                  fontSize: '0.875rem',
                  margin: '0.5rem 0 0 0',
                  width: '100%'
                }}>
                  {error}
                </p>
              )}
            </form>
          )}
          
          <p style={{
            fontSize: '0.875rem',
            color: '#6B7280',
            maxWidth: '500px',
            margin: '1rem auto 0',
            lineHeight: '1.5'
          }}>
            We respect your privacy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsSection; 