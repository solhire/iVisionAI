"use client";

import Header from '@/components/Header';
import PhoneVisualization from '@/components/PhoneVisualization';
import EndorsementLogos from '@/components/EndorsementLogos';
import GridBackground from '@/components/GridBackground';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaChartBar, FaLightbulb, FaBrain, FaSearchLocation, FaMicrochip, FaLanguage, FaMobileAlt, FaArrowRight, FaHandHoldingHeart, FaHandshake, FaUsers, FaTwitter, FaFacebook, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaCheck, FaDownload, FaGlobe, FaShieldAlt, FaStar } from 'react-icons/fa';
import BetaStatusCounter from '@/components/BetaStatusCounter';
import InteractiveDemo from '@/components/InteractiveDemo';
import NewsSection from '@/components/NewsSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import AccessibilityPanel from '@/components/AccessibilityPanel';
import DarkModeToggle from '@/components/DarkModeToggle';
import CookieConsent from '@/components/CookieConsent';
import PhoneSlider from '@/components/PhoneSlider';
import { motion, AnimatePresence } from 'framer-motion';

// Array of taglines to rotate through
const taglines = [
  "The world's first camera-to-speech AI for Blind users.",
  "Revolutionary spatial awareness with precise distance measurements.",
  "Helping blind users navigate the world with unprecedented independence.",
  "Real-time object detection with distance information in natural speech.",
  "Bridging the visual gap through advanced AI technology.",
  "Providing eyes that speak, offering a new way to perceive the world.",
  "Empowering blind individuals with spatial intelligence.",
  "Converting sight into sound with groundbreaking precision.",
  "Building confidence through accurate environmental awareness.",
  "Making the invisible visible through the power of sound."
];

// Technology highlights data
const technologyHighlights = [
  {
    title: "Object Detection",
    subtitle: "YOLOv9-based Framework",
    description: "Real-time identification of 5,000+ distinct objects in various lighting conditions using our optimized YOLO framework.",
    icon: <FaSearchLocation size={24} />
  },
  {
    title: "Spatial Computing",
    subtitle: "DepthSense™ Algorithm",
    description: "Proprietary algorithms calculate precise distances between the user and detected objects, providing critical spatial awareness.",
    icon: <FaBrain size={24} />
  },
  {
    title: "Natural Language",
    subtitle: "Advanced NLP Models",
    description: "Converting technical visual data into natural, conversational speech that prioritizes the most relevant information.",
    icon: <FaLanguage size={24} />
  },
  {
    title: "Edge Computing",
    subtitle: "On-device Processing",
    description: "All processing happens on-device, ensuring privacy and allowing for use without internet connectivity.",
    icon: <FaMicrochip size={24} />
  }
];

// Performance highlights data
const performanceHighlights = [
  {
    metric: "94.7%",
    label: "Object Detection Accuracy",
    description: "High precision identification in varied environments"
  },
  {
    metric: "5cm",
    label: "Distance Measurement Precision",
    description: "Accurate to within 5cm for nearby objects"
  },
  {
    metric: "14",
    label: "Supported Languages",
    description: "Natural-sounding voice descriptions"
  },
  {
    metric: "100%",
    label: "Offline Functionality",
    description: "Complete privacy and reliability"
  }
];

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 mb-4 pb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg text-left font-semibold text-lg text-gray-800 dark:text-white cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
        aria-expanded={isOpen}
      >
        {question}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown size={16} className="text-blue-500" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 mt-2 text-base leading-relaxed text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900/50 rounded-lg"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Effect to cycle through taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000); // Change tagline every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Gradient Background */}
      <motion.section 
        className="relative py-20 md:py-32 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-300/20 to-indigo-300/20 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full"
              initial={{ x: 100, y: -100 }}
              animate={{ 
                x: [100, 120, 100], 
                y: [-100, -80, -100],
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              style={{ filter: "blur(80px)" }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-300/20 to-blue-300/20 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full"
              initial={{ x: -100, y: 100 }}
              animate={{ 
                x: [-100, -80, -100], 
                y: [100, 80, 100],
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              style={{ filter: "blur(70px)" }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-300/20 to-purple-300/20 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              style={{ filter: "blur(60px)" }}
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mb-6 border border-blue-200/50 dark:border-blue-800/50 shadow-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
                Currently in Beta
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Transforming Vision with Artificial Intelligence
              </motion.h1>
              
              <motion.div 
                className="relative h-16 mb-8 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={taglineIndex}
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl absolute"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {taglines[taglineIndex]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link href="/signup" 
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 text-white font-bold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center gap-2 relative overflow-hidden"
                >
                  <span className="relative z-10">Join the Beta</span> 
                  <motion.div
                    className="relative z-10"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaArrowRight size={14} />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link href="/demo" 
                  className="group px-8 py-4 border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-300 font-bold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transform transition-all duration-300 hover:scale-105 hover:border-blue-600 dark:hover:border-blue-300 flex items-center justify-center relative overflow-hidden"
                >
                  <span className="relative z-10">View Demo</span>
                  <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Phone Slider */}
            <motion.div 
              className="lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                type: "spring",
                stiffness: 100
              }}
            >
              <PhoneSlider />
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Endorsement Logos */}
      <motion.div 
        className="relative py-10 bg-white dark:bg-gray-900 border-t border-b border-gray-100 dark:border-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4">
          <EndorsementLogos />
        </div>
      </motion.div>
      
      {/* Beta Status Counter */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-2xl transform rotate-1 scale-105"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <BetaStatusCounter />
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Technology Highlights Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-300 inline-block">
              Our Technology
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Cutting-edge innovations working together to create a seamless experience
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyHighlights.map((tech, index) => (
              <motion.div 
                key={index}
                className="relative group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full -mr-16 -mt-16 transition-transform duration-300 group-hover:scale-110"></div>
                
                <div className="bg-blue-50 dark:bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative">
                  <div className="text-blue-600 dark:text-blue-400">
                    {tech.icon}
                  </div>
                </div>
                
                <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-1 block">{tech.subtitle}</span>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{tech.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Performance Metrics Section */}
      <motion.section 
        className="py-16 bg-blue-50 dark:bg-gray-800/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceHighlights.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.h3 
                  className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {item.metric}
                </motion.h3>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.label}</h4>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Interactive Demo Section */}
      <motion.section 
        className="py-24 bg-white dark:bg-gray-900 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Interactive Experience
              </motion.span>
              
              <motion.h2 
                className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Experience iVision AI in Action
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Upload an image to see how our AI analyzes and describes the scene with detailed object recognition and spatial awareness.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link href="/demo" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Try Full Demo <FaArrowRight size={14} />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl blur-sm"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                  <InteractiveDemo />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Use Cases Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-300 inline-block">
              Real-World Applications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how iVision AI is transforming everyday experiences
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute -inset-2 bg-blue-50 dark:bg-blue-900/20 rounded-2xl blur-sm"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <FaGlobe className="text-blue-500" size={24} />,
                    title: "Navigation Assistance",
                    description: "Helping visually impaired users navigate indoor and outdoor environments with audio descriptions of surroundings and obstacles."
                  },
                  {
                    icon: <FaShieldAlt className="text-blue-500" size={24} />,
                    title: "Safety & Hazard Detection",
                    description: "Identifying potential dangers like traffic, steps, or obstacles and providing immediate audio warnings."
                  },
                  {
                    icon: <FaStar className="text-blue-500" size={24} />,
                    title: "Object Recognition",
                    description: "Identifying everyday objects, their distances, and relevance to provide contextual understanding of surroundings."
                  },
                  {
                    icon: <FaHandHoldingHeart className="text-blue-500" size={24} />,
                    title: "Daily Living Assistance",
                    description: "Reading labels, identifying products, and helping with everyday tasks like grocery shopping or finding personal items."
                  },
                  {
                    icon: <FaHandshake className="text-blue-500" size={24} />,
                    title: "Social Interaction",
                    description: "Recognizing faces, expressions, and social cues to enhance interpersonal communication for visually impaired users."
                  },
                  {
                    icon: <FaUsers className="text-blue-500" size={24} />,
                    title: "Community Integration",
                    description: "Supporting independent participation in community activities and public spaces with reliable spatial awareness."
                  }
                ].map((useCase, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bg-blue-50 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{useCase.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{useCase.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Testimonials Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 dark:bg-blue-500/10 rounded-full"
            animate={{ 
              y: [0, 15, 0],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{ filter: "blur(40px)" }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200/30 dark:bg-indigo-500/10 rounded-full"
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{ filter: "blur(50px)" }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-300 inline-block">
              User Experiences
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear what our beta testers have to say about iVision AI
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl"></div>
              <div className="relative rounded-xl overflow-hidden">
                <TestimonialCarousel />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* News Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="relative">
          <NewsSection />
        </div>
      </motion.div>
      
      {/* FAQ Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-300 inline-block">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get answers to common questions about iVision AI
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <FAQItem 
              question="How accurate is the object detection?" 
              answer="Our technology achieves a 94.7% accuracy rate for object detection across various environments and lighting conditions. This is achieved through our optimized YOLOv9-based framework and continuous model improvements from real-world usage data."
            />
            <FAQItem 
              question="Does iVision AI work offline?" 
              answer="Yes, iVision AI is designed to work entirely offline. All processing happens on your device, ensuring both privacy and functionality in areas with limited or no internet connectivity."
            />
            <FAQItem 
              question="How precise is the spatial awareness feature?" 
              answer="Our DepthSense™ Algorithm provides distance measurements accurate to within 5cm for nearby objects (up to 5 meters). For objects further away, accuracy may vary based on environmental conditions and the device's camera capabilities."
            />
            <FAQItem 
              question="What languages are supported?" 
              answer="iVision AI currently supports 14 languages for voice output, including English, Spanish, French, German, Italian, Portuguese, Japanese, Korean, Mandarin, Cantonese, Russian, Arabic, Hindi, and Dutch. We're continuously adding more languages."
            />
            <FAQItem 
              question="What devices are compatible with iVision AI?" 
              answer="iVision AI is compatible with iOS 14+ and Android 9+ devices. For optimal performance, we recommend devices with at least 4GB of RAM and cameras with a minimum of 12MP resolution."
            />
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section 
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-800 dark:from-blue-700 dark:to-indigo-900"></div>
        
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full"
            animate={{ 
              x: [0, 20, 0], 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{ filter: "blur(80px)" }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full"
            animate={{ 
              x: [0, -20, 0], 
              y: [0, 20, 0],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{ filter: "blur(70px)" }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20 shadow-2xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Ready to Experience the Future of AI Vision?
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Join our beta program today and be among the first to experience the next generation of computer vision technology.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap gap-4 justify-center"
                >
                  <Link href="/signup" 
                    className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/25 focus:outline-none focus:ring-2 focus:ring-white flex items-center justify-center gap-2 relative overflow-hidden"
                  >
                    <span className="relative z-10">Join the Beta Program</span>
                    <motion.div
                      className="relative z-10"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaArrowRight size={14} />
                    </motion.div>
                    <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  
                  <Link href="/contact" 
                    className="group px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white flex items-center justify-center gap-2"
                  >
                    Contact Our Team
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
