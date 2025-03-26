"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFlask, FaUsers, FaAward, FaRobot, FaMicrochip } from 'react-icons/fa';

const timelineData = [
  {
    id: 1,
    date: 'January 2022',
    title: 'Initial Research',
    description: 'Began foundational research on camera-based object recognition for blind users.',
    icon: <FaFlask size={24} color="#0052CC" />,
    details: 'Our team started with a comprehensive literature review and market analysis to identify gaps in existing assistive technologies for the blind. We established initial parameters for our DenseVision™ algorithm and began data collection.',
  },
  {
    id: 2,
    date: 'June 2022',
    title: 'Algorithm Development',
    description: 'Developed first working prototype of our object recognition algorithm.',
    icon: <FaRobot size={24} color="#0052CC" />,
    details: 'After six months of research, we successfully created our first working prototype with basic object recognition capabilities. The early algorithm achieved 78.3% accuracy in controlled environments, proving the concept\'s viability.',
  },
  {
    id: 3,
    date: 'October 2022',
    title: 'First User Tests',
    description: 'Conducted initial user testing with visually impaired participants.',
    icon: <FaUsers size={24} color="#0052CC" />,
    details: 'Our first user testing phase included 12 participants with varying degrees of visual impairment. This provided critical feedback on the user experience and helped identify key areas for improvement in both accuracy and interface design.',
  },
  {
    id: 4,
    date: 'March 2023',
    title: 'DepthSense™ Integration',
    description: 'Successfully integrated depth sensing technology with our visual recognition system.',
    icon: <FaMicrochip size={24} color="#0052CC" />,
    details: 'A major breakthrough came with the integration of our proprietary DepthSense™ technology, allowing for accurate distance measurement and spatial awareness. This innovation reduced navigation errors by 43% in subsequent testing.',
  },
  {
    id: 5,
    date: 'August 2023',
    title: 'Research Award',
    description: 'Received the Excellence in Assistive Technology Research Award.',
    icon: <FaAward size={24} color="#0052CC" />,
    details: 'Our research team was honored with the prestigious Excellence in Assistive Technology Research Award, recognizing our innovative approach and significant progress in creating practical solutions for the visually impaired community.',
  },
  {
    id: 6,
    date: 'December 2023',
    title: 'ContextSpeak™ Launch',
    description: 'Released our natural language generation system for contextual descriptions.',
    icon: <FaRobot size={24} color="#0052CC" />,
    details: 'The development of our ContextSpeak™ system marked a significant advancement in how visual information is communicated to users. Moving beyond simple object identification to natural, contextual descriptions improved user comprehension by 64%.',
  },
  {
    id: 7,
    date: 'February 2024',
    title: 'Academic Paper Publication',
    description: 'Published research findings in the Journal of Assistive Technologies.',
    icon: <FaFlask size={24} color="#0052CC" />,
    details: 'Our peer-reviewed paper "Camera-to-Speech: Advanced Object Recognition and Natural Language Descriptions for the Visually Impaired" detailed our methodology and results, contributing to the broader scientific community.',
  },
];

const ResearchTimeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleMilestone = (id: number) => {
    if (selectedMilestone === id) {
      setSelectedMilestone(null);
    } else {
      setSelectedMilestone(id);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} aria-label="Research Timeline from 2022 to 2024" style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <motion.div
        className="timeline-container"
        style={{ 
          position: 'relative',
          width: '100%',
          overflowX: 'auto',
          padding: '1.5rem 0',
        }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Main timeline line */}
        <div 
          style={{ 
            position: 'absolute',
            top: '75px',
            left: 0,
            right: 0,
            height: '4px',
            backgroundColor: '#E0E0E0',
            zIndex: 1,
          }}
          aria-hidden="true"
        ></div>
        
        {/* Timeline items */}
        <div style={{ 
          display: 'flex',
          width: 'fit-content',
          minWidth: '100%',
          padding: '0 1.5rem',
        }}>
          {timelineData.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              variants={itemVariants}
              style={{ 
                flex: `1 0 ${Math.max(180, 100 / timelineData.length)}px`,
                padding: '0 0.75rem',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {/* Date */}
              <div 
                style={{ 
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  color: '#0052CC',
                  marginBottom: '0.75rem',
                  minHeight: '2.5rem',
                  textAlign: 'center'
                }}
              >
                {milestone.date}
              </div>
              
              {/* Timeline marker */}
              <motion.div
                style={{ 
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #0052CC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.75rem',
                  cursor: 'pointer',
                  boxShadow: selectedMilestone === milestone.id ? '0 4px 10px rgba(0,82,204,0.3)' : '0 2px 4px rgba(0,0,0,0.1)',
                  margin: '0 auto'
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 4px 10px rgba(0,82,204,0.3)',
                }}
                onClick={() => toggleMilestone(milestone.id)}
                tabIndex={0}
                aria-expanded={selectedMilestone === milestone.id}
                aria-controls={`milestone-details-${milestone.id}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleMilestone(milestone.id);
                    e.preventDefault();
                  }
                }}
              >
                {milestone.icon}
              </motion.div>
              
              {/* Title */}
              <div 
                style={{ 
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: '0.5rem',
                  textAlign: 'center'
                }}
              >
                {milestone.title}
              </div>
              
              {/* Short description */}
              <div 
                style={{ 
                  fontSize: '0.875rem',
                  color: '#666',
                  textAlign: 'center'
                }}
              >
                {milestone.description}
              </div>
              
              {/* Expanded details */}
              {selectedMilestone === milestone.id && (
                <motion.div
                  id={`milestone-details-${milestone.id}`}
                  style={{ 
                    marginTop: '1rem',
                    padding: '1rem',
                    backgroundColor: '#F0F4FF',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                    fontSize: '0.875rem',
                    lineHeight: '1.5',
                    color: '#333',
                  }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {milestone.details}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ResearchTimeline; 