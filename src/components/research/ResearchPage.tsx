"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import {
  ResearchHero,
  ResearchTimeline,
  TechnicalInnovations,
  PerformanceMetrics,
  Publications,
  UserTestingResults,
  ResearchRoadmap
} from '@/components/research';
import Header from '@/components/Header';
import GridBackground from '@/components/GridBackground';

// Dynamically import components with client-side only rendering
const DynamicResearchHero = dynamic(() => import('@/components/research').then(mod => mod.ResearchHero), {
  ssr: false
});

const DynamicPerformanceMetrics = dynamic(() => import('@/components/research').then(mod => mod.PerformanceMetrics), {
  ssr: false
});

export default function ResearchPage() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll to update active section
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionId = section.getAttribute('id') as string;
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted]);

  // Scroll to section when nav link is clicked
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white" style={{ position: 'relative' }}>
      <GridBackground />
      
      {/* Header */}
      <Header />
      
      {/* Navigation Bar */}
      {isMounted && (
        <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex overflow-x-auto space-x-4 py-4 items-center justify-center text-sm font-medium" style={{
              listStyle: 'none',
              padding: '1rem 0',
              margin: 0,
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    transition: 'all 0.2s ease',
                    outline: 'none',
                    border: '1px solid #e5e7eb',
                    background: activeSection === 'hero' ? '#3949AB' : 'white',
                    color: activeSection === 'hero' ? 'white' : '#4B5563',
                    boxShadow: activeSection === 'hero' ? '0 4px 8px rgba(57, 73, 171, 0.25)' : 'none',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    if (activeSection !== 'hero') {
                      e.currentTarget.style.background = 'rgba(57, 73, 171, 0.1)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeSection !== 'hero') {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('timeline')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    transition: 'all 0.2s ease',
                    outline: 'none',
                    border: '1px solid #e5e7eb',
                    background: activeSection === 'timeline' ? '#3949AB' : 'white',
                    color: activeSection === 'timeline' ? 'white' : '#4B5563',
                    boxShadow: activeSection === 'timeline' ? '0 4px 8px rgba(57, 73, 171, 0.25)' : 'none',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    if (activeSection !== 'timeline') {
                      e.currentTarget.style.background = 'rgba(57, 73, 171, 0.1)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeSection !== 'timeline') {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  Timeline
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('innovations')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    transition: 'all 0.2s ease',
                    outline: 'none',
                    border: '1px solid #e5e7eb',
                    background: activeSection === 'innovations' ? '#3949AB' : 'white',
                    color: activeSection === 'innovations' ? 'white' : '#4B5563',
                    boxShadow: activeSection === 'innovations' ? '0 4px 8px rgba(57, 73, 171, 0.25)' : 'none',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    if (activeSection !== 'innovations') {
                      e.currentTarget.style.background = 'rgba(57, 73, 171, 0.1)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeSection !== 'innovations') {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  Innovations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('metrics')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    transition: 'all 0.2s ease',
                    outline: 'none',
                    border: '1px solid #e5e7eb',
                    background: activeSection === 'metrics' ? '#3949AB' : 'white',
                    color: activeSection === 'metrics' ? 'white' : '#4B5563',
                    boxShadow: activeSection === 'metrics' ? '0 4px 8px rgba(57, 73, 171, 0.25)' : 'none',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    if (activeSection !== 'metrics') {
                      e.currentTarget.style.background = 'rgba(57, 73, 171, 0.1)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeSection !== 'metrics') {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  Metrics
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('publications')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    transition: 'all 0.2s ease',
                    outline: 'none',
                    border: '1px solid #e5e7eb',
                    background: activeSection === 'publications' ? '#3949AB' : 'white',
                    color: activeSection === 'publications' ? 'white' : '#4B5563',
                    boxShadow: activeSection === 'publications' ? '0 4px 8px rgba(57, 73, 171, 0.25)' : 'none',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    if (activeSection !== 'publications') {
                      e.currentTarget.style.background = 'rgba(57, 73, 171, 0.1)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeSection !== 'publications') {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  Publications
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testing')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    transition: 'all 0.2s ease',
                    outline: 'none',
                    border: '1px solid #e5e7eb',
                    background: activeSection === 'testing' ? '#3949AB' : 'white',
                    color: activeSection === 'testing' ? 'white' : '#4B5563',
                    boxShadow: activeSection === 'testing' ? '0 4px 8px rgba(57, 73, 171, 0.25)' : 'none',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    if (activeSection !== 'testing') {
                      e.currentTarget.style.background = 'rgba(57, 73, 171, 0.1)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeSection !== 'testing') {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  Testing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('roadmap')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    transition: 'all 0.2s ease',
                    outline: 'none',
                    border: '1px solid #e5e7eb',
                    background: activeSection === 'roadmap' ? '#3949AB' : 'white',
                    color: activeSection === 'roadmap' ? 'white' : '#4B5563',
                    boxShadow: activeSection === 'roadmap' ? '0 4px 8px rgba(57, 73, 171, 0.25)' : 'none',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    if (activeSection !== 'roadmap') {
                      e.currentTarget.style.background = 'rgba(57, 73, 171, 0.1)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeSection !== 'roadmap') {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  Roadmap
                </button>
              </li>
            </ul>
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <section id="hero" className="pb-16 pt-8">
        <DynamicResearchHero />
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Research Timeline
          </h2>
          <ResearchTimeline />
        </motion.div>
      </section>

      {/* Technical Innovations Section */}
      <section id="innovations" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Technical Innovations
          </h2>
          <TechnicalInnovations />
        </motion.div>
      </section>

      {/* Performance Metrics Section */}
      <section id="metrics" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Performance Metrics
          </h2>
          <DynamicPerformanceMetrics />
        </motion.div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Publications
          </h2>
          <Publications />
        </motion.div>
      </section>

      {/* User Testing Results Section */}
      <section id="testing" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            User Testing Results
          </h2>
          <UserTestingResults />
        </motion.div>
      </section>

      {/* Research Roadmap Section */}
      <section id="roadmap" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Research Roadmap
          </h2>
          <ResearchRoadmap />
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Research Efforts</h2>
          <p className="mb-8 text-blue-100">
            We're always looking for researchers, institutions, and visually impaired participants 
            to collaborate with us on advancing this technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button style={{ 
              backgroundColor: 'white',
              color: '#3949AB',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              border: 'none',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1rem',
              letterSpacing: '0.01em',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '220px'
            }} 
            onMouseOver={(e) => { 
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.15)';
            }}>
              Become a Research Partner
            </button>
            <button style={{ 
              backgroundColor: 'transparent',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              border: '2px solid white',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1rem',
              letterSpacing: '0.01em',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '220px'
            }}
            onMouseOver={(e) => { 
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            }}>
              Volunteer as a Tester
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 