"use client";

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import GridBackground from '@/components/GridBackground';
import { FaUniversalAccess, FaLightbulb, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { 
  AboutHero, 
  ValueCard, 
  TechnologySection, 
  CommitmentSection 
} from '@/components/about';

// Note: Metadata should be defined in a separate layout.tsx file for this route

export default function AboutPage() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #F9FAFB, #FFFFFF)',
      position: 'relative',
      textAlign: 'center'
    }}>
      <GridBackground />
      
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <AboutHero />
      
      {/* Mission Section */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1F2937', textAlign: 'center' }}>
            Our Mission
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}>
            At iVision AI, we're dedicated to transforming how blind individuals navigate and perceive the world around them. 
            Through pioneering camera-to-speech technology with distance measurement, we create tools that enhance 
            independence, safety, and confidence in everyday life.
          </p>
        </motion.div>
        
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1F2937', textAlign: 'center' }}>
              Our Innovation
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}>
              What distinguishes iVision AI is our integrated approach to spatial awareness. Our technology not only identifies 
              objects but precisely measures their distance and position, creating a comprehensive audio description of the user's 
              surroundings. This breakthrough provides blind users with contextual information previously unavailable through 
              assistive technology.
            </p>
          </motion.div>
        </div>
        
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem', color: '#1F2937', textAlign: 'center' }}>
              Our Values
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto',
              justifyContent: 'center'
            }}>
              <ValueCard 
                icon={<FaUniversalAccess size={28} />} 
                title="Accessibility First" 
                description="We design with and for the blind community, ensuring our technology meets real needs."
              />
              <ValueCard 
                icon={<FaLightbulb size={28} />} 
                title="Continuous Innovation" 
                description="We improve our technology based on user feedback and advances in AI research."
              />
              <ValueCard 
                icon={<FaShieldAlt size={28} />} 
                title="Ethical Development" 
                description="We maintain the highest standards of privacy and data security in all our products."
              />
              <ValueCard 
                icon={<FaUsers size={28} />} 
                title="Inclusive Design" 
                description="We ensure our products work for users of all backgrounds and abilities."
              />
            </div>
          </motion.div>
        </div>
        
        <TechnologySection />
      </section>
      
      {/* Commitment Section */}
      <section style={{ padding: '2rem 2rem 6rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <CommitmentSection />
      </section>
    </main>
  );
} 