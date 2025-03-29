"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const PhoneSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/images/phone3.png', '/images/phone2.png'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto h-[600px] flex flex-col items-center justify-center">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 shadow-2xl shadow-blue-500/20 dark:shadow-blue-500/10 border border-gray-100 dark:border-gray-700">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-3xl" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative flex items-center justify-center"
            style={{ width: '280px', height: '570px' }}
          >
            <Image
              src={images[currentImage]}
              alt={`iVision AI Phone View ${currentImage + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              style={{ 
                objectFit: 'contain',
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
              }}
              priority={true}
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 rounded-3xl pointer-events-none" />
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-gradient-to-r from-blue-400 to-indigo-500 scale-125 shadow-md' 
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            style={{
              transform: index === currentImage ? 'scale(1.2)' : 'scale(1)',
              boxShadow: index === currentImage ? '0 2px 8px rgba(59, 130, 246, 0.5)' : 'none'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PhoneSlider; 