"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCamera, FaRuler, FaCommentAlt } from 'react-icons/fa';

const innovationsData = [
  {
    id: 1,
    title: 'DenseVision™',
    subtitle: 'Object Detection Technology',
    description: 'Our proprietary computer vision algorithm delivers 94.7% accuracy in identifying objects in complex environments.',
    icon: <FaCamera size={28} color="#0052CC" />,
    details: [
      'High-throughput image processing and classification',
      'Category recognition across 2,300+ common objects',
      'Specialized training for indoor and outdoor environments',
      'Real-time processing with minimal latency',
      'Contextual understanding of object relationships',
    ],
  },
  {
    id: 2,
    title: 'DepthSense™',
    subtitle: 'Distance Measurement System',
    description: 'Advanced spatial awareness technology providing accurate distance measurement and obstacle detection.',
    icon: <FaRuler size={28} color="#0052CC" />,
    details: [
      'Real-time depth mapping with 3cm precision at distances up to 5m',
      'Multi-surface recognition including glass and reflective surfaces',
      'Low-light performance optimization',
      'Spatial relationship mapping between detected objects',
      'Energy-efficient processing for extended device battery life',
    ],
  },
  {
    id: 3,
    title: 'ContextSpeak™',
    subtitle: 'Natural Language Generation',
    description: 'Generates coherent, natural language descriptions of the user\'s environment based on visual input.',
    icon: <FaCommentAlt size={28} color="#0052CC" />,
    details: [
      'Customizable detail levels based on user preference',
      'Priority-based information delivery for critical objects',
      'Natural cadence and pacing for improved comprehension',
      'Environmental context incorporation for situational awareness',
      'Adaptive learning from user interactions and feedback',
    ],
  },
];

const TechnicalInnovations = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleCardHover = (id: number | null) => {
    setActiveCard(id);
  };

  return (
    <div ref={ref} style={{ 
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <motion.div
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <p style={{ 
          fontSize: '1.1rem',
          color: '#4A4A4A',
          maxWidth: '900px',
          margin: '0 auto 2rem',
          textAlign: 'center',
          lineHeight: '1.6',
        }}>
          Our research has yielded three core technologies that work in concert to provide 
          an unprecedented level of environmental awareness and description for visually impaired users.
        </p>
        
        <div style={{ 
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
        }}>
          {innovationsData.map((innovation) => (
            <motion.div
              key={innovation.id}
              variants={cardVariants}
              style={{ 
                width: '320px',
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                boxShadow: activeCard === innovation.id 
                  ? '0 10px 25px rgba(0,82,204,0.2)' 
                  : '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.3s ease',
                border: activeCard === innovation.id 
                  ? '1px solid #0052CC' 
                  : '1px solid #E0E0E0',
                height: '450px',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={() => handleCardHover(innovation.id)}
              onMouseLeave={() => handleCardHover(null)}
              onFocus={() => handleCardHover(innovation.id)}
              onBlur={() => handleCardHover(null)}
              tabIndex={0}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              {/* Card Top Section */}
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                backgroundColor: '#F0F4FF',
                textAlign: 'center'
              }}>
                <motion.div
                  style={{ 
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                    margin: '0 auto'
                  }}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {innovation.icon}
                </motion.div>
                <h3 style={{ 
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#0052CC',
                  marginBottom: '0.5rem',
                  textAlign: 'center'
                }}>
                  {innovation.title}
                </h3>
                <p style={{ 
                  fontSize: '0.875rem',
                  color: '#666',
                  fontWeight: '500',
                  textAlign: 'center'
                }}>
                  {innovation.subtitle}
                </p>
              </div>
              
              {/* Card Bottom Section */}
              <div style={{ 
                padding: '1.5rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center'
              }}>
                <p style={{ 
                  fontSize: '0.875rem',
                  color: '#333',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6',
                  textAlign: 'center'
                }}>
                  {innovation.description}
                </p>
                
                <div style={{ 
                  marginTop: 'auto',
                }}>
                  <h4 style={{ 
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    color: '#0052CC',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.75rem',
                    textAlign: 'center'
                  }}>
                    Key Features
                  </h4>
                  <ul style={{ 
                    listStyleType: 'none',
                    padding: 0,
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    {innovation.details.map((detail, index) => (
                      <motion.li
                        key={index}
                        style={{ 
                          fontSize: '0.8rem',
                          marginBottom: '0.5rem',
                          position: 'relative',
                          lineHeight: '1.5',
                          paddingLeft: '0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem'
                        }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={activeCard === innovation.id ? 
                          { opacity: 1, x: 0 } : 
                          { opacity: 0.7, x: 0 }
                        }
                        transition={{ delay: index * 0.1 }}
                      >
                        <span style={{ 
                          width: '4px',
                          height: '4px',
                          backgroundColor: '#0052CC',
                          borderRadius: '50%',
                          display: 'inline-block',
                          marginRight: '4px'
                        }}></span>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TechnicalInnovations; 