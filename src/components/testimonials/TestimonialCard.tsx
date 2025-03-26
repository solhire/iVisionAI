'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { TestimonialType } from './types';
import { useTheme } from '@/components/ThemeProvider';

interface TestimonialCardProps {
  testimonial: TestimonialType;
  featured?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  featured = false 
}) => {
  const { isDarkMode } = useTheme();
  const { name, title, location, quote } = testimonial;

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        backgroundColor: isDarkMode ? 'var(--card-background-dark)' : 'white',
        borderRadius: '0.75rem',
        padding: featured ? '2rem' : '1.5rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        transition: 'background-color 0.3s ease'
      }}
    >
      <div style={{ marginBottom: '1.5rem' }}>
        <FaQuoteLeft 
          size={featured ? 24 : 20} 
          color={isDarkMode ? '#6B7280' : '#CBD5E1'} 
        />
      </div>

      <p style={{ 
        fontSize: featured ? '1.125rem' : '1rem',
        lineHeight: '1.75',
        color: isDarkMode ? 'var(--text-primary)' : '#1F2937',
        flex: 1,
        marginBottom: '1.5rem'
      }}>
        "{quote}"
      </p>

      <div>
        <h3 style={{ 
          fontSize: featured ? '1.25rem' : '1.125rem',
          fontWeight: '600',
          marginBottom: '0.25rem',
          color: isDarkMode ? 'var(--text-primary)' : '#111827'
        }}>
          {name}
        </h3>
        <p style={{ 
          fontSize: '0.875rem',
          color: isDarkMode ? 'var(--text-secondary)' : '#4B5563',
          marginBottom: '0.25rem'
        }}>
          {title}
        </p>
        <p style={{ 
          fontSize: '0.75rem',
          color: isDarkMode ? 'var(--text-tertiary)' : '#6B7280',
        }}>
          {location}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard; 