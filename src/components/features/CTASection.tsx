"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const CTASection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#3949AB',
        borderRadius: '1rem',
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <h2 style={{ 
        fontSize: '2rem', 
        fontWeight: 'bold', 
        marginBottom: '1.5rem', 
        color: 'white', 
        textAlign: 'center' 
      }}>
        Ready to Experience iVision AI?
      </h2>
      <p style={{ 
        fontSize: '1.1rem', 
        lineHeight: '1.7', 
        marginBottom: '2rem',
        maxWidth: '700px',
        margin: '0 auto 2rem',
        color: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'center' 
      }}>
        Download the iVision AI app today and start experiencing the world with unprecedented spatial awareness.
      </p>
      <Link href="/download">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          style={{
            backgroundColor: 'white',
            color: '#3949AB',
            border: 'none',
            padding: '0.75rem 2rem',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            outline: 'none',
          }}
        >
          Download Now
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default CTASection; 