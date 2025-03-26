"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { FaLinkedin, FaGlobe, FaUniversity } from 'react-icons/fa';

const teamData = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    title: 'Chief Research Officer',
    credentials: 'Ph.D. Computer Vision, MIT',
    bio: 'Dr. Chen leads our research division with over 15 years of experience in computer vision and machine learning. Prior to joining iVision AI, she was a Principal Scientist at Google Research.',
    links: {
      linkedin: 'https://linkedin.com/',
      website: 'https://example.com',
    },
  },
  {
    id: 2,
    name: 'Prof. Michael Johnson',
    title: 'Research Advisor',
    credentials: 'Ph.D. Artificial Intelligence, Stanford',
    bio: 'Prof. Johnson is a tenured faculty member at Stanford\'s AI Lab and serves as our senior research advisor, bringing academic rigor and cutting-edge insights to our team.',
    links: {
      linkedin: 'https://linkedin.com/',
      university: 'https://stanford.edu',
    },
  },
  {
    id: 3,
    name: 'Dr. Aisha Patel',
    title: 'Lead Algorithm Developer',
    credentials: 'Ph.D. Machine Learning, Berkeley',
    bio: 'Dr. Patel specializes in real-time computer vision algorithms and is the principal architect behind our DenseVision™ object recognition system.',
    links: {
      linkedin: 'https://linkedin.com/',
      website: 'https://example.com',
    },
  },
  {
    id: 4,
    name: 'Dr. James Rodriguez',
    title: 'Senior NLP Researcher',
    credentials: 'Ph.D. Computational Linguistics, CMU',
    bio: 'Dr. Rodriguez leads our natural language processing team, focusing on translating visual data into natural, context-aware descriptions for visually impaired users.',
    links: {
      linkedin: 'https://linkedin.com/',
      university: 'https://cmu.edu',
    },
  },
  {
    id: 5,
    name: 'Amanda Wu, M.Eng.',
    title: 'Lead Systems Engineer',
    credentials: 'M.Eng. Electrical Engineering, Cornell',
    bio: 'Amanda specializes in embedded systems and leads the integration of our software algorithms with compact, energy-efficient hardware platforms.',
    links: {
      linkedin: 'https://linkedin.com/',
    },
  },
  {
    id: 6,
    name: 'Dr. David Kim',
    title: 'Lead Accessibility Researcher',
    credentials: 'Ph.D. Human-Computer Interaction, UW',
    bio: 'With extensive experience in accessibility research, Dr. Kim ensures our technologies meet the real-world needs of visually impaired users through rigorous user testing and feedback integration.',
    links: {
      linkedin: 'https://linkedin.com/',
      university: 'https://washington.edu',
    },
  },
];

const partnerLogos = [
  {
    id: 1,
    name: 'MIT Computer Science & Artificial Intelligence Laboratory',
    description: 'Research partnership on advanced computer vision algorithms',
  },
  {
    id: 2,
    name: 'Stanford Artificial Intelligence Laboratory',
    description: 'Collaborative research on contextual AI systems',
  },
  {
    id: 3,
    name: 'Berkeley Vision and Learning Center',
    description: 'Joint development of low-light vision algorithms',
  },
  {
    id: 4,
    name: 'National Federation of the Blind',
    description: 'User testing and research validation partner',
  },
];

const ResearchTeam = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);
  
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div ref={ref} style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <p style={{ 
          fontSize: '1.1rem',
          color: '#4A4A4A',
          maxWidth: '800px',
          margin: '0 auto 2.5rem',
          textAlign: 'center',
          lineHeight: '1.6',
        }}>
          Our multidisciplinary team combines expertise in computer vision, machine learning, 
          accessibility, and engineering to create groundbreaking technology.
        </p>
        
        {/* Team Members */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
        }}>
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              style={{ 
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                boxShadow: hoveredMember === member.id 
                  ? '0 10px 25px rgba(0,82,204,0.2)' 
                  : '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: hoveredMember === member.id ? 'translateY(-10px)' : 'translateY(0)',
              }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              onFocus={() => setHoveredMember(member.id)}
              onBlur={() => setHoveredMember(null)}
              tabIndex={0}
              aria-label={`${member.name}, ${member.title}`}
            >
              <div style={{ 
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid #E0E0E0',
              }}>
                <div style={{ 
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  position: 'relative',
                  marginRight: '1rem',
                  backgroundColor: '#F0F4FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#3949AB',
                  fontWeight: 'bold',
                  fontSize: '1.5rem'
                }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div>
                  <h3 style={{ 
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#0052CC',
                    margin: '0 0 0.25rem 0',
                  }}>
                    {member.name}
                  </h3>
                  <p style={{ 
                    fontSize: '0.875rem',
                    color: '#666',
                    margin: '0 0 0.5rem 0',
                  }}>
                    {member.title}
                  </p>
                  <p style={{ 
                    fontSize: '0.75rem',
                    color: '#0052CC',
                    fontWeight: '500',
                    margin: 0,
                  }}>
                    {member.credentials}
                  </p>
                </div>
              </div>
              
              <div style={{ padding: '1.5rem' }}>
                <p style={{ 
                  fontSize: '0.875rem',
                  color: '#4A4A4A',
                  lineHeight: '1.6',
                  margin: '0 0 1.5rem 0',
                }}>
                  {member.bio}
                </p>
                
                <div style={{ 
                  display: 'flex',
                  gap: '1rem',
                }}>
                  {member.links.linkedin && (
                    <a 
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn profile`}
                      style={{ 
                        color: '#0052CC',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  
                  {member.links.website && (
                    <a 
                      href={member.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s personal website`}
                      style={{ 
                        color: '#0052CC',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      <FaGlobe size={20} />
                    </a>
                  )}
                  
                  {member.links.university && (
                    <a 
                      href={member.links.university}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s university profile`}
                      style={{ 
                        color: '#0052CC',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      <FaUniversity size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Academic Partners */}
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ 
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#0052CC',
            textAlign: 'center',
            marginBottom: '2rem',
          }}>
            Our Research Partners
          </h3>
          
          <div style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            alignItems: 'center',
          }}>
            {partnerLogos.map((partner) => (
              <motion.div
                key={partner.id}
                variants={itemVariants}
                style={{ 
                  position: 'relative',
                  minWidth: '200px',
                  padding: '1.5rem',
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'help',
                  textAlign: 'center'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                }}
                onMouseEnter={() => setHoveredLogo(partner.id)}
                onMouseLeave={() => setHoveredLogo(null)}
                onFocus={() => setHoveredLogo(partner.id)}
                onBlur={() => setHoveredLogo(null)}
                aria-label={partner.name}
                tabIndex={0}
              >
                <p style={{
                  margin: 0,
                  fontWeight: 'bold',
                  color: '#3949AB',
                  fontSize: '0.9rem'
                }}>
                  {partner.name}
                </p>
                
                {hoveredLogo === partner.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    style={{ 
                      position: 'absolute',
                      bottom: '130%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'white',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                      width: '200px',
                      zIndex: 10,
                    }}
                  >
                    <p style={{ 
                      fontSize: '0.75rem',
                      margin: 0,
                      color: '#666',
                    }}>
                      {partner.description}
                    </p>
                    <div style={{ 
                      position: 'absolute',
                      bottom: '-8px',
                      left: '50%',
                      marginLeft: '-8px',
                      width: '0',
                      height: '0',
                      borderLeft: '8px solid transparent',
                      borderRight: '8px solid transparent',
                      borderTop: '8px solid white',
                    }}></div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResearchTeam; 