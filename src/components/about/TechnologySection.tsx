"use client";

import { motion } from 'framer-motion';

const TechnologySection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '1rem',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1F2937', textAlign: 'center' }}>
          Our Technology
        </h3>
        <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: '1.7', marginBottom: '2rem', textAlign: 'center' }}>
          The iVision Companion app combines advanced computer vision, spatial computing, and natural language 
          processing to translate visual information into helpful audio descriptions. By providing real-time 
          object detection with precise distance measurements, we help blind users build accurate mental maps 
          of their surroundings without physical exploration.
        </p>
        
        <div style={{ 
          backgroundColor: '#F0F4FF',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#3949AB' }}>
            Key Technical Components
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, width: '100%', textAlign: 'left' }}>
            <li style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <span style={{ fontWeight: 'bold', color: '#1F2937' }}>Object Detection:</span> 
              <span style={{ color: '#4B5563' }}> YOLOv9-based algorithms identify thousands of objects in real-time</span>
            </li>
            <li style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <span style={{ fontWeight: 'bold', color: '#1F2937' }}>Spatial Computing:</span> 
              <span style={{ color: '#4B5563' }}> DepthSense™ technology calculates precise distances to objects</span>
            </li>
            <li style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <span style={{ fontWeight: 'bold', color: '#1F2937' }}>Natural Language:</span> 
              <span style={{ color: '#4B5563' }}> Converts visual data to contextual, conversational descriptions</span>
            </li>
            <li style={{ padding: '0.75rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <span style={{ fontWeight: 'bold', color: '#1F2937' }}>On-device Processing:</span> 
              <span style={{ color: '#4B5563' }}> Works offline with complete privacy and minimal latency</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default TechnologySection; 