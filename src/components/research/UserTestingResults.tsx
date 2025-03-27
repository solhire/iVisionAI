"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface TestResult {
  category: string;
  score: number;
  feedback: string;
  participants: number;
}

interface TestCategory {
  name: string;
  description: string;
  results: TestResult[];
}

const testResults = [
  {
    id: 1,
    metric: 'Object Identification',
    value: 81.6,
    description: 'Faster object identification compared to existing assistive technologies',
    color: '#0052CC',
  },
  {
    id: 2,
    metric: 'Navigation Confidence',
    value: 64.2,
    description: 'Increase in user confidence while navigating unfamiliar environments',
    color: '#36B37E',
  },
  {
    id: 3,
    metric: 'Obstacle Avoidance',
    value: 30.2,
    description: 'Improvement in obstacle avoidance success rate',
    color: '#6554C0',
  },
  {
    id: 4,
    metric: 'Independent Task Completion',
    value: 45.4,
    description: 'Increase in independent task completion rate',
    color: '#FF5630',
  },
];

const testimonials = [
  {
    id: 1,
    quote: "This technology has transformed how I experience the world. It's like having a knowledgeable companion who can describe my surroundings in a natural, conversational way.",
    author: "Michael T.",
    role: "iVision AI User",
    location: "Boston, MA",
  },
  {
    id: 2,
    quote: "The spatial awareness features are remarkable. I can now navigate unfamiliar spaces with much greater confidence and independence.",
    author: "Sarah L.",
    role: "Research Participant",
    location: "Chicago, IL",
  },
  {
    id: 3,
    quote: "As someone who lost my sight later in life, iVision AI helps bridge the gap between my visual memory and current experience. The contextual descriptions are thoughtful and relevant.",
    author: "David K.",
    role: "iVision AI Beta Tester",
    location: "Seattle, WA",
  },
  {
    id: 4,
    quote: "What impressed me most was the system's ability to prioritize information. It focuses on what matters most in my surroundings, rather than overwhelming me with details.",
    author: "Rebecca W.",
    role: "Accessibility Advocate",
    location: "Austin, TX",
  },
];

const ProgressBar = ({ metric, value, description, color, inView }: any) => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{metric}</div>
        <div style={{ fontWeight: 'bold', fontSize: '1rem', color }}>{value}%</div>
      </div>
      
      <div style={{ 
        height: '12px', 
        backgroundColor: '#E0E0E0', 
        borderRadius: '6px', 
        overflow: 'hidden',
        marginBottom: '0.5rem',
      }}>
        <motion.div
          style={{ 
            height: '100%', 
            backgroundColor: color,
            borderRadius: '6px',
          }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${value}%` : 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
      
      <div style={{ fontSize: '0.875rem', color: '#666' }}>{description}</div>
    </div>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  
  useEffect(() => {
    if (inView && !isAnimating) {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length);
          setIsAnimating(false);
        }, 500);
      }, 8000);
      
      return () => clearInterval(interval);
    }
  }, [inView, isAnimating]);
  
  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }
  };
  
  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }
  };
  
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 500 : -500,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 500 : -500,
        opacity: 0,
      };
    },
  };
  
  const testimonial = testimonials[currentIndex];

  return (
    <div ref={ref} style={{ position: 'relative', padding: '1rem 0' }}>
      <div
        style={{ 
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          marginBottom: '1rem',
          minHeight: '260px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <FaQuoteLeft 
          size={24} 
          color="#E0E0E0" 
          style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }} 
        />
        
        <div style={{ padding: '0 3rem' }}>
          <motion.div
            key={testimonial.id}
            custom={currentIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <p style={{ 
              fontSize: '1.125rem',
              lineHeight: '1.7',
              color: '#333',
              fontStyle: 'italic',
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}>
              "{testimonial.quote}"
            </p>
            
            <div style={{ textAlign: 'center' }}>
              <p style={{ 
                fontWeight: 'bold',
                color: '#0052CC',
                margin: 0,
              }}>
                {testimonial.author}
              </p>
              <p style={{ 
                fontSize: '0.875rem',
                color: '#666',
                margin: '0.25rem 0 0 0',
              }}>
                {testimonial.role} • {testimonial.location}
              </p>
            </div>
          </motion.div>
        </div>
        
        <FaQuoteRight 
          size={24} 
          color="#E0E0E0" 
          style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem' }} 
        />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
        <button
          aria-label="Previous testimonial"
          onClick={handlePrev}
          style={{ 
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#F0F4FF',
            color: '#0052CC',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <FaChevronLeft size={14} />
        </button>
        
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {testimonials.map((_, index) => (
            <div
              key={index}
              style={{ 
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: index === currentIndex ? '#0052CC' : '#E0E0E0',
                transition: 'background-color 0.3s ease',
              }}
            />
          ))}
        </div>
        
        <button
          aria-label="Next testimonial"
          onClick={handleNext}
          style={{ 
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#F0F4FF',
            color: '#0052CC',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <FaChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

const calculateAverageScore = (results: TestResult[]): number => {
  return results.reduce((acc, curr) => acc + curr.score, 0) / results.length;
};

const UserTestingResults = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} style={{ 
      width: '100%',
      maxWidth: '1100px',
      margin: '0 auto'
    }}>
      <p style={{ 
        fontSize: '1.1rem',
        color: '#4A4A4A',
        maxWidth: '800px',
        margin: '0 auto 2.5rem',
        textAlign: 'center',
        lineHeight: '1.6',
      }}>
        Our rigorous user testing with 48 visually impaired participants demonstrated 
        significant improvements across key performance metrics.
      </p>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        width: '100%',
      }}>
        <div>
          <h3 style={{ 
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#0052CC',
            marginBottom: '1.5rem',
          }}>
            Performance Improvements
          </h3>
          
          {testResults.map((result) => (
            <ProgressBar
              key={result.id}
              metric={result.metric}
              value={result.value}
              description={result.description}
              color={result.color}
              inView={inView}
            />
          ))}
        </div>
        
        <div>
          <h3 style={{ 
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#0052CC',
            marginBottom: '1.5rem',
          }}>
            User Testimonials
          </h3>
          
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};

export default UserTestingResults; 