"use client";

import { useEffect, useState, useRef } from 'react';
import { FaUsers, FaCalendarAlt, FaPuzzlePiece } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const BetaStatusCounter = () => {
  const [betaTesters, setBetaTesters] = useState(0);
  const [daysInBeta, setDaysInBeta] = useState(0);
  const [featuresBuilt, setFeaturesBuilt] = useState(0);
  const hasAnimated = useRef(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const targetBetaTesters = 156;
  const targetDaysInBeta = 47;
  const targetFeaturesBuilt = 28;

  const animateValue = (setter: React.Dispatch<React.SetStateAction<number>>, start: number, end: number, duration: number) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setter(Math.floor(easedProgress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      animateValue(setBetaTesters, 0, targetBetaTesters, 2000);
      animateValue(setDaysInBeta, 0, targetDaysInBeta, 2000);
      animateValue(setFeaturesBuilt, 0, targetFeaturesBuilt, 2000);
    }
  }, [inView]);

  return (
    <div ref={ref} className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">iVision AI Beta</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're currently in beta, refining our technology with input from our early testers. Join our community and help shape the future of accessibility.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center transform transition-all duration-300 hover:scale-105">
            <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
              <FaUsers size={48} />
            </div>
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{betaTesters}</div>
            <div className="text-gray-600 dark:text-gray-300 text-lg">Beta Testers</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center transform transition-all duration-300 hover:scale-105">
            <div className="text-indigo-600 dark:text-indigo-400 mb-4 flex justify-center">
              <FaCalendarAlt size={48} />
            </div>
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{daysInBeta}</div>
            <div className="text-gray-600 dark:text-gray-300 text-lg">Days in Beta</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center transform transition-all duration-300 hover:scale-105">
            <div className="text-purple-600 dark:text-purple-400 mb-4 flex justify-center">
              <FaPuzzlePiece size={48} />
            </div>
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{featuresBuilt}</div>
            <div className="text-gray-600 dark:text-gray-300 text-lg">Features Built</div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300">
            Join Our Beta Program
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BetaStatusCounter; 