"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  reversed?: boolean;
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  imageSrc, 
  imageAlt = 'Feature illustration',
  reversed = false
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{
        display: 'flex',
        flexDirection: reversed ? 'row-reverse' : 'row',
        alignItems: 'center',
        gap: '2rem',
        padding: '2rem',
        margin: '2rem 0',
        backgroundColor: 'white',
        borderRadius: '1rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        flexWrap: 'wrap',
      }}
    >
      {/* Content */}
      <div style={{ 
        flex: '1 1 400px',
        minWidth: '300px',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            backgroundColor: '#F0F4FF',
            borderRadius: '50%',
            width: '3.5rem',
            height: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '1rem',
            color: '#3949AB',
          }}>
            {icon}
          </div>
          <h3 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: '#1F2937'
          }}>
            {title}
          </h3>
        </div>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#4B5563', 
          lineHeight: '1.7',
          textAlign: 'center'
        }}>
          {description}
        </p>
      </div>
      
      {/* Image */}
      {imageSrc && (
        <div style={{ 
          flex: '1 1 400px',
          minWidth: '300px',
          position: 'relative',
          height: '300px'
        }}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{ 
              objectFit: 'contain',
              borderRadius: '0.5rem'
            }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default FeatureCard; 