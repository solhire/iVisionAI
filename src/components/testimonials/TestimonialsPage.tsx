'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import GridBackground from '@/components/GridBackground';
import TestimonialCard from './TestimonialCard';
import TestimonialCategories from './TestimonialCategories';
import { TestimonialType, TestimonialCategoryType } from './types';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { useTheme } from '@/components/ThemeProvider';

// Sample testimonial data
const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: 'Michael Johnson',
    title: 'Software Engineer & Blind User',
    location: 'Boston, MA',
    category: 'blind-users',
    quote: 'iVision AI has completely changed how I navigate my daily life. I can identify objects, gauge distances, and feel more confident when exploring new environments. The most impressive aspect is how it adapts to my preferences over time.',
    featured: true
  },
  {
    id: 2,
    name: 'Sarah Parker',
    title: 'Certified Orientation & Mobility Specialist',
    location: 'Chicago, IL',
    category: 'professionals',
    quote: 'As an orientation and mobility specialist, I\'ve seen firsthand how this technology empowers my clients with unprecedented spatial awareness and independence. The distance measurement accuracy is particularly valuable for teaching safe navigation.',
    featured: true
  },
  {
    id: 3,
    name: 'Robert Lee',
    title: 'Retired Teacher & Low Vision User',
    location: 'Portland, OR',
    category: 'blind-users',
    quote: 'The most impressive aspect is how it adapts to my preferences. The more I use it, the better it gets at providing the information that matters most to me. It\'s like having a companion who learns what I need.',
    featured: false
  },
  {
    id: 4,
    name: 'Dr. Emily Chen',
    title: 'Accessibility Researcher',
    location: 'San Francisco, CA',
    category: 'researchers',
    quote: 'From a research perspective, iVision AI represents a significant advancement in assistive technology. The combination of real-time object detection with natural language generation creates a seamless experience that reduces cognitive load for users.',
    featured: false
  },
  {
    id: 5,
    name: 'James Wilson',
    title: 'IT Professional & Blind User',
    location: 'Austin, TX',
    category: 'blind-users',
    quote: 'What sets iVision AI apart is its offline functionality. I can use it anywhere without worrying about connectivity, which is essential when navigating unfamiliar places or when traveling internationally.',
    featured: false
  },
  {
    id: 6,
    name: 'Maria Rodriguez',
    title: 'Rehabilitation Counselor',
    location: 'Miami, FL',
    category: 'professionals',
    quote: 'The clients I work with have shown remarkable improvements in confidence and independence after integrating iVision AI into their daily routines. The learning curve is minimal compared to other assistive technologies.',
    featured: false
  },
  {
    id: 7,
    name: 'David Nguyen',
    title: 'Computer Science Student & User',
    location: 'Seattle, WA',
    category: 'blind-users',
    quote: 'As a computer science student who lost my vision in adulthood, iVision AI has been instrumental in helping me continue my education. The detailed descriptions of diagrams and visual materials allow me to participate fully in classes.',
    featured: false
  },
  {
    id: 8,
    name: 'Dr. Thomas Wright',
    title: 'Professor of Computer Vision',
    location: 'Atlanta, GA',
    category: 'researchers',
    quote: 'The technical achievements of iVision AI are impressive. Their implementation of depth estimation from monocular video is particularly noteworthy, achieving accuracy that rivals specialized hardware at a fraction of the cost.',
    featured: false
  },
  {
    id: 9,
    name: 'Karen Phillips',
    title: 'Parent of Blind Teenager',
    location: 'Denver, CO',
    category: 'family-members',
    quote: 'My daughter has gained so much independence since using iVision AI. As a parent, the peace of mind knowing she can navigate safely on her own is invaluable. It\'s opened up opportunities we didn\'t think were possible.',
    featured: false
  },
  {
    id: 10,
    name: 'Richard Taylor',
    title: 'Accessibility Advocate',
    location: 'Washington, DC',
    category: 'professionals',
    quote: 'What impresses me most about iVision AI is their commitment to continual improvement based on user feedback. They genuinely listen to the blind community and iterate their technology accordingly.',
    featured: false
  },
  {
    id: 11,
    name: 'Lisa Johnson',
    title: 'High School Student & User',
    location: 'Minneapolis, MN',
    category: 'blind-users',
    quote: 'Using iVision AI at school has made a huge difference. I can navigate the hallways confidently, identify people around me, and read information on bulletin boards that I couldn\'t access before.',
    featured: false
  },
  {
    id: 12,
    name: 'Dr. Samantha Wong',
    title: 'Neurologist & Vision Researcher',
    location: 'Baltimore, MD',
    category: 'researchers',
    quote: 'The neural processing approach used by iVision AI mimics aspects of human visual cognition in fascinating ways. Their prioritization algorithms for relevant information closely parallel how the brain filters visual stimuli.',
    featured: false
  }
];

// Categories
const categories: TestimonialCategoryType[] = [
  { id: 'all', label: 'All Stories' },
  { id: 'blind-users', label: 'Blind Users' },
  { id: 'professionals', label: 'Professionals' },
  { id: 'researchers', label: 'Researchers' },
  { id: 'family-members', label: 'Family Members' }
];

const TestimonialsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredTestimonials, setFilteredTestimonials] = useState<TestimonialType[]>(testimonials);
  const { isDarkMode } = useTheme();

  // Filter testimonials when category changes
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredTestimonials(testimonials);
    } else {
      setFilteredTestimonials(testimonials.filter(t => t.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div style={{ 
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: isDarkMode ? 'var(--background-color)' : 'white',
      color: isDarkMode ? 'var(--text-primary)' : 'inherit',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      <GridBackground />
      <Header />
      
      <main style={{ 
        padding: '2rem 1rem 4rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Back Link */}
        <div style={{ marginBottom: '2rem' }}>
          <Link 
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: isDarkMode ? 'var(--text-secondary)' : '#4B5563',
              fontSize: '0.875rem',
              fontWeight: '500',
              textDecoration: 'none',
              padding: '0.5rem 0',
              transition: 'color 0.2s ease'
            }}
          >
            <FaArrowLeft size={12} />
            Back to Home
          </Link>
        </div>
      
        {/* Hero Section */}
        <section style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: isDarkMode ? 'var(--text-primary)' : '#1F2937'
          }}>
            User Testimonials
          </h1>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            color: isDarkMode ? 'var(--text-secondary)' : '#4B5563',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Discover how iVision AI is transforming the lives of blind users through innovative 
            technology that enhances independence and spatial awareness.
          </p>
        </section>
        
        {/* Categories */}
        <TestimonialCategories 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        {/* Featured Testimonials */}
        {activeCategory === 'all' && (
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: isDarkMode ? 'var(--text-primary)' : '#1F2937',
              position: 'relative',
              display: 'inline-block'
            }}>
              Featured Stories
              <div style={{
                position: 'absolute',
                bottom: '-8px',
                left: '0',
                width: '60px',
                height: '3px',
                backgroundColor: '#3949AB',
                borderRadius: '1.5px'
              }} />
            </h2>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 500px), 1fr))',
              gap: '2rem',
              marginTop: '2rem'
            }}>
              {testimonials.filter(t => t.featured).map(testimonial => (
                <TestimonialCard 
                  key={testimonial.id} 
                  testimonial={testimonial}
                  featured 
                />
              ))}
            </div>
          </section>
        )}
        
        {/* All Testimonials */}
        <section>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeCategory !== 'all' && (
                <h2 style={{ 
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  color: isDarkMode ? 'var(--text-primary)' : '#1F2937'
                }}>
                  {categories.find(c => c.id === activeCategory)?.label}
                </h2>
              )}
              
              {activeCategory === 'all' && (
                <h2 style={{ 
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  color: isDarkMode ? 'var(--text-primary)' : '#1F2937',
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  All Testimonials
                  <div style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '0',
                    width: '60px',
                    height: '3px',
                    backgroundColor: '#3949AB',
                    borderRadius: '1.5px'
                  }} />
                </h2>
              )}
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
                gap: '2rem',
                marginTop: '2rem'
              }}>
                {activeCategory === 'all' 
                  ? filteredTestimonials.filter(t => !t.featured).map(testimonial => (
                      <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))
                  : filteredTestimonials.map(testimonial => (
                      <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))
                }
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
        
        {/* Call to Action */}
        <section style={{ 
          marginTop: '6rem',
          backgroundColor: isDarkMode ? 'var(--primary-light)' : '#F0F4FF',
          padding: '3rem 2rem',
          borderRadius: '1rem',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '1.75rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: isDarkMode ? 'var(--text-primary)' : '#1F2937'
          }}>
            Share Your iVision AI Story
          </h2>
          <p style={{ 
            fontSize: '1.1rem',
            color: isDarkMode ? 'var(--text-secondary)' : '#4B5563',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            lineHeight: '1.7'
          }}>
            We'd love to hear about your experience with iVision AI. Your story could inspire others
            and help us improve our technology for everyone.
          </p>
          <Link 
            href="/contact" 
            style={{
              display: 'inline-block',
              backgroundColor: '#3949AB',
              color: 'white',
              padding: '0.875rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              textDecoration: 'none',
              fontSize: '1rem',
              boxShadow: '0 4px 12px rgba(57, 73, 171, 0.15)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            Submit Your Story
          </Link>
        </section>
      </main>
    </div>
  );
};

export default TestimonialsPage; 