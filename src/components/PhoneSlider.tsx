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
          <div className="relative w-[300px] h-[600px] flex items-center justify-center">
            <Image
              src={images[currentImage]}
              alt={`iVision AI Phone View ${currentImage + 1}`}
              width={300}
              height={600}
              className="object-contain max-h-full max-w-full"
              priority={true}
              style={{ 
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
              }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button 
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md hover:bg-white hover:scale-110 transition-all duration-200"
        aria-label="Previous image"
      >
        <FaChevronLeft className="text-blue-600 dark:text-blue-400" size={20} />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md hover:bg-white hover:scale-110 transition-all duration-200"
        aria-label="Next image"
      >
        <FaChevronRight className="text-blue-600 dark:text-blue-400" size={20} />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-blue-600 scale-110' : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`View phone image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhoneSlider; 