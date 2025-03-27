"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileAlt, FaChevronDown, FaChevronUp, FaDownload, FaExternalLinkAlt, FaBookOpen } from 'react-icons/fa';

interface Publication {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi: string;
  abstract: string;
  categories: string[];
}

interface PublicationSection {
  title: string;
  publications: Publication[];
}

const publicationsData = {
  peerReviewed: [
    {
      id: 1,
      title: 'Camera-to-Speech: Advanced Object Recognition and Natural Language Descriptions for the Visually Impaired',
      authors: 'Chen, S., Patel, A., Rodriguez, J., Kim, D., & Johnson, M.',
      journal: 'Journal of Assistive Technologies',
      year: 2024,
      volume: 18,
      issue: 2,
      pages: '134-152',
      doi: '10.1234/jat.2024.1234',
      abstract: 'This paper presents a novel system for real-time visual recognition and natural language description generation, specifically designed for visually impaired users. We introduce DenseVision™, a computer vision algorithm achieving 94.7% accuracy in object recognition, and ContextSpeak™, a natural language generation system that produces coherent environmental descriptions. User testing with 48 blind participants demonstrates significant improvements in navigation confidence and environmental awareness.',
      url: '/pdfs/Camera-to-Speech Advanced Object Recognition and Natural Language Descriptions for the Visually Impaired.pdf',
      hasPdf: true
    },
    {
      id: 2,
      title: 'DepthSense™: Accurate Distance Measurement for Assistive Navigation',
      authors: 'Wu, A., Patel, A., & Chen, S.',
      journal: 'IEEE Transactions on Accessible Computing',
      year: 2023,
      volume: 15,
      issue: 4,
      pages: '221-238',
      doi: '10.1234/itac.2023.5678',
      abstract: 'We present DepthSense™, a novel approach to distance measurement and spatial mapping specifically designed for assistive technology applications. Our system combines monocular depth estimation with sensor fusion to achieve 3cm precision at distances up to 5m, even in challenging lighting conditions and with reflective surfaces. We demonstrate how this technology integrates with object recognition systems to provide comprehensive spatial awareness for visually impaired users.',
      url: '/pdfs/DepthSense™ Accurate Distance Measurement for Assistive Navigation.pdf',
      hasPdf: true
    },
    {
      id: 3,
      title: 'Natural Language Generation for Assistive Vision Technologies',
      authors: 'Rodriguez, J., Kim, D., & Johnson, M.',
      journal: 'Computational Linguistics',
      year: 2023,
      volume: 49,
      issue: 3,
      pages: '503-521',
      doi: '10.1234/cl.2023.9012',
      abstract: 'This study introduces a specialized natural language generation framework for describing visual scenes to blind users. We address the unique challenges of conveying spatial relationships, prioritizing safety-critical information, and adapting to user preferences. Our ContextSpeak™ system demonstrates significant improvements in information comprehension and relevance compared to existing approaches, as validated through extensive user testing with visually impaired participants.',
      url: '/pdfs/Natural Language Generation for Assistive Vision Technologies.pdf',
      hasPdf: true
    },
  ],
  whitepapers: [
    {
      id: 4,
      title: 'The Future of Assistive Vision Technologies: 2024-2030',
      authors: 'Johnson, M., Chen, S., & Kim, D.',
      organization: 'iVision AI Research',
      year: 2024,
      pages: 42,
      abstract: 'This whitepaper explores the emerging trends and future directions in assistive technologies for the visually impaired. We analyze current limitations, identify promising research avenues, and present a roadmap for technological development over the next six years. Key focus areas include multimodal sensing, personalized adaptivity, and minimally intrusive form factors.',
      url: '#',
      hasPdf: false
    },
    {
      id: 5,
      title: 'Accessibility Guidelines for Camera-Based Assistive Technologies',
      authors: 'Kim, D., Wu, A., & Rodriguez, J.',
      organization: 'iVision AI & National Federation of the Blind',
      year: 2023,
      pages: 38,
      abstract: 'This collaborative whitepaper with the National Federation of the Blind establishes comprehensive guidelines for designing camera-based assistive technologies. We present best practices for interface design, information prioritization, privacy considerations, and user customization based on extensive research with diverse blind and low-vision users.',
      url: '#',
      hasPdf: false
    },
  ],
};

const PublicationItem = ({ 
  publication, 
  isPeerReviewed 
}: { 
  publication: any, 
  isPeerReviewed: boolean 
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      style={{ 
        backgroundColor: 'white',
        marginBottom: '1rem',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        border: '1px solid #E0E0E0',
      }}
    >
      <div
        style={{ 
          padding: '1rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: expanded ? '#F0F4FF' : 'white',
          transition: 'background-color 0.3s ease',
        }}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setExpanded(!expanded);
            e.preventDefault();
          }
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{ 
              width: '36px',
              height: '36px',
              backgroundColor: '#F0F4FF',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '1rem',
              flexShrink: 0,
            }}
          >
            {isPeerReviewed ? (
              <FaBookOpen size={16} color="#0052CC" />
            ) : (
              <FaFileAlt size={16} color="#0052CC" />
            )}
          </div>
          <div>
            <h4 style={{ 
              fontSize: '1rem',
              margin: 0,
              fontWeight: '600',
              color: '#333',
            }}>
              {publication.title}
            </h4>
            <p style={{ 
              fontSize: '0.875rem',
              margin: '0.25rem 0 0 0',
              color: '#666',
            }}>
              {publication.authors} • {publication.year}
            </p>
          </div>
        </div>
        <div>
          {expanded ? (
            <FaChevronUp size={16} color="#0052CC" />
          ) : (
            <FaChevronDown size={16} color="#0052CC" />
          )}
        </div>
      </div>
      
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 1.5rem 1.5rem' }}>
              <div
                style={{ 
                  backgroundColor: '#F8F9FA',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                <p style={{ 
                  fontSize: '0.875rem',
                  margin: 0,
                  lineHeight: '1.6',
                }}>
                  <strong>Abstract:</strong> {publication.abstract}
                </p>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                {isPeerReviewed && (
                  <>
                    <div>
                      <span style={{ 
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: '#0052CC',
                      }}>
                        Journal:
                      </span>
                      <span style={{ 
                        fontSize: '0.875rem',
                        marginLeft: '0.5rem',
                      }}>
                        {publication.journal}
                      </span>
                    </div>
                    <div>
                      <span style={{ 
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: '#0052CC',
                      }}>
                        Volume:
                      </span>
                      <span style={{ 
                        fontSize: '0.875rem',
                        marginLeft: '0.5rem',
                      }}>
                        {publication.volume}({publication.issue})
                      </span>
                    </div>
                    <div>
                      <span style={{ 
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: '#0052CC',
                      }}>
                        Pages:
                      </span>
                      <span style={{ 
                        fontSize: '0.875rem',
                        marginLeft: '0.5rem',
                      }}>
                        {publication.pages}
                      </span>
                    </div>
                    <div>
                      <span style={{ 
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: '#0052CC',
                      }}>
                        DOI:
                      </span>
                      <span style={{ 
                        fontSize: '0.875rem',
                        marginLeft: '0.5rem',
                      }}>
                        {publication.doi}
                      </span>
                    </div>
                  </>
                )}
                
                {!isPeerReviewed && (
                  <>
                    <div>
                      <span style={{ 
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: '#0052CC',
                      }}>
                        Organization:
                      </span>
                      <span style={{ 
                        fontSize: '0.875rem',
                        marginLeft: '0.5rem',
                      }}>
                        {publication.organization}
                      </span>
                    </div>
                    <div>
                      <span style={{ 
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: '#0052CC',
                      }}>
                        Pages:
                      </span>
                      <span style={{ 
                        fontSize: '0.875rem',
                        marginLeft: '0.5rem',
                      }}>
                        {publication.pages}
                      </span>
                    </div>
                  </>
                )}
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ 
                  display: 'flex', 
                  gap: '0.75rem'
                }}>
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#0052CC',
                      padding: '0.5rem 0.75rem',
                      backgroundColor: '#F0F4FF',
                      borderRadius: '0.25rem',
                      transition: 'background-color 0.2s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#E0E8FF';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#F0F4FF';
                    }}
                  >
                    <FaExternalLinkAlt size={12} /> View online
                  </a>
                  
                  {publication.hasPdf && (
                    <a
                      href={publication.url}
                      download
                      style={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: '#046307',
                        padding: '0.5rem 0.75rem',
                        backgroundColor: '#ECFDF5',
                        borderRadius: '0.25rem',
                        transition: 'background-color 0.2s ease',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#D1FAE5';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#ECFDF5';
                      }}
                    >
                      <FaDownload size={12} /> Download PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PublicationSection = ({ 
  title, 
  icon, 
  publications, 
  isPeerReviewed 
}: { 
  title: string, 
  icon: React.ReactNode, 
  publications: any[], 
  isPeerReviewed: boolean 
}) => {
  const [expanded, setExpanded] = useState(true);
  
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div
        style={{ 
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1.5rem',
          cursor: 'pointer',
        }}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setExpanded(!expanded);
            e.preventDefault();
          }
        }}
      >
        <div
          style={{ 
            width: '40px',
            height: '40px',
            backgroundColor: '#F0F4FF',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '1rem',
          }}
        >
          {icon}
        </div>
        <h3 style={{ 
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#0052CC',
          margin: 0,
        }}>
          {title}
        </h3>
        <div style={{ marginLeft: '1rem' }}>
          {expanded ? (
            <FaChevronUp size={16} color="#0052CC" />
          ) : (
            <FaChevronDown size={16} color="#0052CC" />
          )}
        </div>
      </div>
      
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            {publications.map((publication) => (
              <PublicationItem
                key={publication.id}
                publication={publication}
                isPeerReviewed={isPeerReviewed}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const filterPublications = (publications: Publication[], category: string): Publication[] => {
  return publications.filter(pub => pub.categories.includes(category));
};

const Publications = () => {
  // Filter publications to only include those with PDFs
  const publicationsWithPDFs = publicationsData.peerReviewed.filter(p => p.hasPdf);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Featured PDF Publications Section */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(57, 73, 171, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#F0F4FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '1rem'
          }}>
            <FaFileAlt size={20} color="#3949AB" />
          </div>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#1F2937',
            margin: 0
          }}>
            Research Publications
          </h3>
        </div>

        <p style={{
          fontSize: '1rem',
          color: '#4B5563',
          marginBottom: '1.5rem',
          lineHeight: '1.6'
        }}>
          Access our research papers exploring camera-to-speech technology, depth sensing, and natural language generation for assistive vision systems.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {publicationsWithPDFs.map((paper) => (
            <div 
              key={paper.id}
              style={{
                border: '1px solid #E5E7EB',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                backgroundColor: '#F9FAFB',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginTop: 0,
                marginBottom: '0.75rem',
                color: '#1F2937'
              }}>
                {paper.title}
              </h4>
              
              <p style={{
                fontSize: '0.875rem',
                color: '#6B7280',
                marginBottom: '1rem'
              }}>
                {paper.authors.split(',')[0]} et al., {paper.year}
              </p>
              
              <a
                href={paper.url}
                download
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#3949AB',
                  color: 'white',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'background-color 0.2s ease',
                  marginTop: 'auto'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#303F9F';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#3949AB';
                }}
              >
                <FaDownload size={14} />
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Add additional details for each publication */}
      <div style={{
        backgroundColor: '#F9FAFB',
        borderRadius: '1rem',
        padding: '2rem',
        marginTop: '2rem'
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: '#1F2937',
          marginBottom: '1.5rem'
        }}>
          Publication Details
        </h3>
        
        {publicationsWithPDFs.map((publication) => (
          <div 
            key={publication.id}
            style={{ 
              backgroundColor: 'white',
              marginBottom: '1.5rem',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              border: '1px solid #E0E0E0',
              padding: '1.5rem',
            }}
          >
            <h4 style={{ 
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#333',
              marginTop: 0,
              marginBottom: '0.75rem',
            }}>
              {publication.title}
            </h4>
            
            <p style={{ 
              fontSize: '0.95rem',
              margin: '0.5rem 0 1rem 0',
              color: '#666',
            }}>
              <strong>Authors:</strong> {publication.authors}
            </p>
            
            <div
              style={{ 
                backgroundColor: '#F8F9FA',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              <p style={{ 
                fontSize: '0.875rem',
                margin: 0,
                lineHeight: '1.6',
              }}>
                <strong>Abstract:</strong> {publication.abstract}
              </p>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ 
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#3949AB',
                }}>
                  Journal:
                </span>
                <span style={{ 
                  fontSize: '0.875rem',
                  marginLeft: '0.5rem',
                }}>
                  {publication.journal}
                </span>
              </div>
              <div>
                <span style={{ 
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#3949AB',
                }}>
                  Volume:
                </span>
                <span style={{ 
                  fontSize: '0.875rem',
                  marginLeft: '0.5rem',
                }}>
                  {publication.volume}({publication.issue})
                </span>
              </div>
              <div>
                <span style={{ 
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#3949AB',
                }}>
                  Pages:
                </span>
                <span style={{ 
                  fontSize: '0.875rem',
                  marginLeft: '0.5rem',
                }}>
                  {publication.pages}
                </span>
              </div>
              <div>
                <span style={{ 
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#3949AB',
                }}>
                  DOI:
                </span>
                <span style={{ 
                  fontSize: '0.875rem',
                  marginLeft: '0.5rem',
                }}>
                  {publication.doi}
                </span>
              </div>
            </div>
            
            <a
              href={publication.url}
              download
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#3949AB',
                color: 'white',
                padding: '0.75rem 1.25rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#303F9F';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#3949AB';
              }}
            >
              <FaDownload size={14} />
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications; 