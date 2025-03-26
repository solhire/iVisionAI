'use client';

import React from 'react';
import { TestimonialCategoryType } from './types';

interface TestimonialCategoriesProps {
  categories: TestimonialCategoryType[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const TestimonialCategories: React.FC<TestimonialCategoriesProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
      marginBottom: '2.5rem',
      justifyContent: 'center'
    }}>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '9999px',
            border: `1px solid ${activeCategory === category.id ? '#3949AB' : '#E5E7EB'}`,
            backgroundColor: activeCategory === category.id ? '#3949AB' : 'white',
            color: activeCategory === category.id ? 'white' : '#4B5563',
            fontSize: '0.875rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: activeCategory === category.id 
              ? '0 4px 12px rgba(57, 73, 171, 0.25)' 
              : '0 1px 3px rgba(0, 0, 0, 0.05)'
          }}
          aria-pressed={activeCategory === category.id}
          onMouseOver={(e) => {
            if (activeCategory !== category.id) {
              e.currentTarget.style.backgroundColor = '#F9FAFB';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
            }
          }}
          onMouseOut={(e) => {
            if (activeCategory !== category.id) {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
            }
          }}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default TestimonialCategories; 