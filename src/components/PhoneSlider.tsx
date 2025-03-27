"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PhoneSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/images/phone3.png', '/images/phone2.png'];

  const goToNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-sm mx-auto h-[600px] flex flex-col items-center justify-center gap-6">
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

      {/* Navigation buttons */}
      <div className="flex items-center gap-4 mt-4">
        <button 
          onClick={goToPrev}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300"
          aria-label="Previous image"
        >
          <FaChevronLeft size={20} />
        </button>
        
        <button 
          onClick={goToNext}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300"
          aria-label="Next image"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-gradient-to-r from-blue-400 to-indigo-500 scale-125 shadow-md' 
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            aria-label={`View phone image ${index + 1}`}
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