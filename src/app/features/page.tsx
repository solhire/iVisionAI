"use client";

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import GridBackground from '@/components/GridBackground';
import { 
  FeaturesHero, 
  FeatureCard, 
  FeatureComparison,
  CTASection
} from '@/components/features';
import { 
  FaCamera, 
  FaRulerHorizontal, 
  FaVolumeUp,
  FaWifi,
  FaBrain,
  FaShieldAlt
} from 'react-icons/fa';

export default function FeaturesPage() {
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
      <FeaturesHero />
      
      {/* Features Section */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1F2937', textAlign: 'center' }}>
            Core Features
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto 2rem', textAlign: 'center' }}>
            Discover the powerful capabilities that make iVision AI a revolutionary tool for blind users,
            enabling unprecedented spatial awareness and independence.
          </p>
        </motion.div>
        
        <FeatureCard 
          icon={<FaCamera size={24} />}
          title="Advanced Object Detection"
          description="Using cutting-edge computer vision models, iVision AI identifies objects in the user's environment with high accuracy and minimal latency, even in challenging lighting conditions."
        />
        
        <FeatureCard 
          icon={<FaRulerHorizontal size={24} />}
          title="Spatial Awareness"
          description="Unlike traditional apps, iVision AI precisely measures the distance to detected objects, providing crucial spatial context that helps users understand their surroundings without physical exploration."
          reversed={true}
        />
        
        <FeatureCard 
          icon={<FaVolumeUp size={24} />}
          title="Natural Speech Interface"
          description="Information is conveyed through natural language descriptions, making the experience intuitive and reducing cognitive load. Users receive clear, concise audio about their surroundings."
        />
        
        <FeatureCard 
          icon={<FaWifi size={24} />}
          title="Offline Functionality"
          description="The app works without an internet connection, ensuring reliability in any situation. All processing happens on-device, maintaining privacy and enabling use in areas with poor connectivity."
          reversed={true}
        />
        
        <FeatureCard 
          icon={<FaBrain size={24} />}
          title="Adaptive Learning"
          description="iVision AI learns from user interactions and adapts to individual preferences over time, providing increasingly personalized and relevant information about the environment."
        />
        
        <FeatureCard 
          icon={<FaShieldAlt size={24} />}
          title="Privacy by Design"
          description="Built with user privacy as a core principle, iVision AI processes all data on-device and never stores images or recordings. Your visual world remains entirely private."
          reversed={true}
        />
      </section>
      
      {/* Comparison Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#F9FAFB', textAlign: 'center' }}>
        <FeatureComparison />
      </section>
      
      {/* CTA Section */}
      <section style={{ padding: '4rem 2rem 6rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <CTASection />
      </section>
    </main>
  );
} 