"use client";

import { motion } from 'framer-motion';

const FeaturesHero = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
        style={{ color: '#1F2937' }}
      >
        Features
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
        style={{ color: '#4B5563', textAlign: 'center' }}
      >
        Discover how iVision AI transforms the way blind users perceive and navigate the world
      </motion.p>
    </div>
  );
};

export default FeaturesHero; 