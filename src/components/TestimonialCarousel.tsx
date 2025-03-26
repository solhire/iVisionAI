'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "iVision AI has completely changed how I navigate my daily life. The spatial awareness it provides gives me confidence I never had before.",
    name: "Sarah Johnson",
    title: "User for 8 months",
    initials: "SJ",
  },
  {
    quote: "As someone who lost their sight later in life, this technology bridges the gap between my visual memory and current reality in ways I never thought possible.",
    name: "David Chen",
    title: "User for 5 months",
    initials: "DC",
  },
  {
    quote: "The most impressive aspect is how it adapts to my preferences. The more I use it, the better it gets at providing the information that matters most to me.",
    name: "Robert Lee",
    title: "User for 1 year",
    initials: "RL",
  },
  {
    quote: "iVision AI gives me the independence to explore new environments without assistance. It's like having a knowledgeable guide with me at all times.",
    name: "Maria Gonzalez",
    title: "User for 3 months",
    initials: "MG",
  },
  {
    quote: "As a mobility specialist, I've seen how this technology complements traditional tools. My students who use iVision AI show remarkable improvements in spatial orientation.",
    name: "Dr. Emily Parker",
    title: "Mobility Specialist",
    initials: "EP",
  },
  {
    quote: "The accuracy of object detection and distance measurements is impressive. This is the first app that reliably warns me about obstacles at head height.",
    name: "James Wilson",
    title: "User for 6 months",
    initials: "JW",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Auto-advance testimonials
  useEffect(() => {
    if (isPaused) return;
    
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);
  
  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const handlePause = () => {
    setIsPaused(true);
    
    // Resume after 30 seconds of inactivity
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 30000);
  };
  
  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '2rem 0'
      }}
      onMouseEnter={handlePause}
      onFocus={handlePause}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          padding: '2.5rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
          textAlign: 'left',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        {/* Accent border */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '4px',
            height: '100%',
            background: 'linear-gradient(to bottom, #3949AB, #5C6BC0)'
          }}
        ></div>
        
        {/* Quote symbol */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: 'rgba(57, 73, 171, 0.1)',
            fontSize: '5rem',
            lineHeight: '1',
            fontFamily: 'serif'
          }}
        >
          <FaQuoteLeft size={48} />
        </div>
        
        <div
          style={{
            position: 'relative',
            zIndex: 1
          }}
        >
          <div
            aria-live="polite"
            style={{
              minHeight: '160px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#4B5563',
                marginBottom: '2rem',
                fontStyle: 'italic'
              }}
            >
              "{testimonials[activeIndex].quote}"
            </p>
          </div>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <div
              style={{
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
              }}
            >
              {testimonials[activeIndex].initials}
            </div>
            <div>
              <p
                style={{
                  fontWeight: 'bold',
                  color: '#1F2937',
                  margin: 0
                }}
              >
                {testimonials[activeIndex].name}
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#6B7280',
                  margin: 0
                }}
              >
                {testimonials[activeIndex].title}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1.5rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '0.25rem'
          }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={activeIndex === index ? 'true' : 'false'}
              style={{
                width: '2rem',
                height: '0.25rem',
                backgroundColor: activeIndex === index ? '#3949AB' : '#E5E7EB',
                border: 'none',
                borderRadius: '1rem',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
            ></button>
          ))}
        </div>
        
        <div
          style={{
            display: 'flex',
            gap: '0.5rem'
          }}
        >
          <button
            onClick={goToPrevious}
            aria-label="Previous testimonial"
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#4B5563',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#F9FAFB';
              e.currentTarget.style.color = '#3949AB';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#4B5563';
            }}
          >
            <FaChevronLeft size={16} />
          </button>
          <button
            onClick={goToNext}
            aria-label="Next testimonial"
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#4B5563',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#F9FAFB';
              e.currentTarget.style.color = '#3949AB';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#4B5563';
            }}
          >
            <FaChevronRight size={16} />
          </button>
        </div>
      </div>
      
      {/* Screen reader announcement for auto-advancing slides */}
      <div className="sr-only" aria-live="polite">
        {isPaused ? 'Carousel paused' : 'Carousel will automatically advance every 6 seconds'}
      </div>
    </div>
  );
};

export default TestimonialCarousel; 