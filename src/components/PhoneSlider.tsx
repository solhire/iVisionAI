"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PhoneSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const autoSlideTimer = useRef<NodeJS.Timeout | null>(null);
  const images = ['/images/phone2.png', '/images/phone.png'];

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideTimer.current = setTimeout(() => {
      setCurrentImage(1); // Slide to the second image after delay
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (autoSlideTimer.current) {
      clearTimeout(autoSlideTimer.current);
      autoSlideTimer.current = null;
    }
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    startAutoSlide();
  };

  const goToPrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    startAutoSlide();
  };

  const goToSlide = (index: number) => {
    setCurrentImage(index);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto h-[600px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative flex items-center justify-center" style={{ width: '280px', height: '570px' }}>
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
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button 
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 z-10"
        aria-label="Previous image"
      >
        <FaChevronLeft size={18} />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 z-10"
        aria-label="Next image"
      >
        <FaChevronRight size={18} />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
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