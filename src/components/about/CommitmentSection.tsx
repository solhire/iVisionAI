"use client";

import { motion } from 'framer-motion';

const CommitmentSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{
        padding: '3rem',
        backgroundColor: '#F9FAFB',
        borderRadius: '1rem',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1F2937', textAlign: 'center' }}>
        Our Commitment
      </h3>
      <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: '1.7', textAlign: 'center' }}>
        We believe technology should empower everyone equally. iVision AI is committed to making the visual 
        world more accessible through responsible innovation and community partnership. We envision a future 
        where visual impairment no longer limits a person's ability to navigate independently and confidently.
      </p>
    </motion.div>
  );
};

export default CommitmentSection; 