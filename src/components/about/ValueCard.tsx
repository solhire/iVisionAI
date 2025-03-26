"use client";

import { motion } from 'framer-motion';

type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{
        backgroundColor: 'white',
        borderRadius: '0.75rem',
        padding: '2rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#F0F4FF',
          borderRadius: '50%',
          width: '4rem',
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          color: '#3949AB',
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1F2937', textAlign: 'center' }}>
        {title}
      </h3>
      <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: '1.6', textAlign: 'center' }}>
        {description}
      </p>
    </motion.div>
  );
};

export default ValueCard; 