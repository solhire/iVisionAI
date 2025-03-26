"use client";

import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaRocket, 
  FaMicrochip, 
  FaMobileAlt, 
  FaGlobeAmericas, 
  FaLightbulb,
  FaChevronRight
} from 'react-icons/fa';

interface Milestone {
  text: string;
  completed: boolean;
}

interface RoadmapItem {
  id: number;
  phase: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  status: string;
  completion: number;
  milestones: Milestone[];
}

interface RoadmapItemProps {
  item: RoadmapItem;
  isActive: boolean;
  onClick: () => void;
}

const roadmapData = [
  {
    id: 1,
    phase: 'Current',
    title: 'Enhanced Object Recognition',
    description: 'Fine-tuning our computer vision models to recognize a wider variety of objects and provide more detailed contextual descriptions.',
    icon: <FaLightbulb size={24} />,
    color: '#0052CC',
    status: 'In Progress',
    completion: 65,
    milestones: [
      { text: 'Expand training dataset to include 100,000+ additional images', completed: true },
      { text: 'Implement support for 50+ new object categories', completed: true },
      { text: 'Improve accuracy in low-light conditions', completed: false },
      { text: 'Reduce false positive rate by 40%', completed: false },
    ],
  },
  {
    id: 2,
    phase: 'Q3 2024',
    title: 'Miniaturized Hardware',
    description: 'Developing smaller, lighter hardware that can be easily integrated into existing eyewear and mobility devices.',
    icon: <FaMicrochip size={24} />,
    color: '#36B37E',
    status: 'Planned',
    completion: 30,
    milestones: [
      { text: 'Reduce camera module size by 65%', completed: true },
      { text: 'Design new PCB layout for miniaturized components', completed: true },
      { text: 'Prototype integration with standard eyewear frames', completed: false },
      { text: 'Achieve 12+ hour battery life in compact form factor', completed: false },
    ],
  },
  {
    id: 3,
    phase: 'Q4 2024',
    title: 'Mobile App Expansion',
    description: 'Expanding our mobile application capabilities to include user customization, preference learning, and integration with other assistive technologies.',
    icon: <FaMobileAlt size={24} />,
    color: '#6554C0',
    status: 'Planned',
    completion: 15,
    milestones: [
      { text: 'Implement user profiles and customization options', completed: true },
      { text: 'Develop adaptive UI based on user patterns', completed: false },
      { text: 'Create open APIs for third-party integrations', completed: false },
      { text: 'Build robust offline functionality', completed: false },
    ],
  },
  {
    id: 4,
    phase: 'H1 2025',
    title: 'Global Accessibility Initiative',
    description: 'Launching our Global Accessibility Initiative to bring iVision AI technology to underserved communities worldwide through partnerships and subsidized pricing.',
    icon: <FaGlobeAmericas size={24} />,
    color: '#FF5630',
    status: 'Planning',
    completion: 10,
    milestones: [
      { text: 'Establish partnerships with 5+ international blind advocacy groups', completed: true },
      { text: 'Create subsidized pricing tiers for qualifying users', completed: false },
      { text: 'Develop localization for 15+ languages', completed: false },
      { text: 'Train support teams for global deployment', completed: false },
    ],
  },
  {
    id: 5,
    phase: 'H2 2025',
    title: 'Next-Gen Neural Interface',
    description: 'Beginning research into direct neural interfaces for a more seamless user experience with reduced latency and cognitive load.',
    icon: <FaRocket size={24} />,
    color: '#00B8D9',
    status: 'Research',
    completion: 5,
    milestones: [
      { text: 'Complete literature review and technology assessment', completed: true },
      { text: 'Establish research partnership with neuroscience institutes', completed: false },
      { text: 'Develop initial prototypes for testing', completed: false },
      { text: 'Conduct preliminary safety and efficacy trials', completed: false },
    ],
  },
];

const RoadmapItem = ({ item, isActive, onClick }: RoadmapItemProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: item.id * 0.1 }}
      onClick={onClick}
      style={{
        backgroundColor: 'white',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        marginBottom: '1rem',
        boxShadow: isActive ? `0 8px 24px rgba(0,0,0,0.12)` : `0 4px 12px rgba(0,0,0,0.05)`,
        cursor: 'pointer',
        border: `2px solid ${isActive ? item.color : 'transparent'}`,
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            fontSize: '0.8rem', 
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: item.color,
            padding: '0.25rem 0.75rem',
            borderRadius: '1rem',
            marginBottom: '0.5rem',
          }}>
            {item.phase}
          </div>
          
          <h3 style={{ 
            display: 'flex', 
            alignItems: 'center', 
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#333',
            margin: '0.5rem 0',
          }}>
            <span style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              backgroundColor: item.color + '15',
              borderRadius: '50%',
              marginRight: '0.75rem',
              color: item.color,
            }}>
              {item.icon}
            </span>
            {item.title}
          </h3>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <div style={{ 
            fontSize: '0.875rem',
            color: item.status === 'In Progress' ? '#0052CC' : 
                   item.status === 'Planned' ? '#36B37E' : 
                   item.status === 'Planning' ? '#FF5630' : '#6554C0',
            fontWeight: 'medium',
          }}>
            {item.status}
          </div>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            fontSize: '0.875rem',
            color: '#666',
            marginTop: '0.25rem',
          }}>
            <div style={{ 
              width: '60px', 
              height: '6px', 
              backgroundColor: '#E0E0E0',
              borderRadius: '3px',
              overflow: 'hidden',
              marginRight: '0.5rem',
            }}>
              <div style={{ 
                width: `${item.completion}%`, 
                height: '100%', 
                backgroundColor: item.color,
                borderRadius: '3px',
              }} />
            </div>
            {item.completion}%
          </div>
        </div>
        
        <FaChevronRight 
          style={{ 
            color: '#CCC',
            transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }} 
        />
      </div>
      
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          style={{ marginTop: '1rem' }}
        >
          <p style={{ 
            fontSize: '1rem',
            color: '#4A4A4A',
            lineHeight: '1.6',
            marginBottom: '1rem',
          }}>
            {item.description}
          </p>
          
          <h4 style={{ 
            fontSize: '0.9rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '0.75rem',
          }}>
            Key Milestones:
          </h4>
          
          <ul style={{ 
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}>
            {item.milestones.map((milestone: Milestone, index: number) => (
              <li 
                key={index}
                style={{ 
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  color: '#4A4A4A',
                }}
              >
                <div style={{ 
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  border: `2px solid ${milestone.completed ? item.color : '#CCC'}`,
                  backgroundColor: milestone.completed ? item.color : 'transparent',
                  marginRight: '0.75rem',
                  marginTop: '0.25rem',
                  flexShrink: 0,
                }} />
                <span style={{ 
                  textDecoration: milestone.completed ? 'line-through' : 'none',
                  opacity: milestone.completed ? 0.75 : 1,
                }}>
                  {milestone.text}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

const ResearchRoadmap = () => {
  const [activeItemId, setActiveItemId] = useState(1);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleItemClick = (id: number) => {
    setActiveItemId(id === activeItemId ? 0 : id);
  };

  return (
    <div ref={ref} style={{ 
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <p style={{ 
          fontSize: '1.1rem',
          color: '#4A4A4A',
          maxWidth: '800px',
          margin: '0 auto 2.5rem',
          textAlign: 'center',
          lineHeight: '1.6',
        }}>
          Our research roadmap outlines future developments that will enhance accessibility,
          improve performance, and expand the capabilities of our technology.
        </p>
        
        {roadmapData.map(item => (
          <RoadmapItem 
            key={item.id}
            item={item}
            isActive={item.id === activeItemId}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ResearchRoadmap; 