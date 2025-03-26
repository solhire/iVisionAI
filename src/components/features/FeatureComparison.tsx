"use client";

import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';

type ComparisonFeature = {
  name: string;
  ivisionAI: boolean;
  traditionalApps: boolean;
  screenReaders: boolean;
};

const features: ComparisonFeature[] = [
  {
    name: "Real-time object detection",
    ivisionAI: true,
    traditionalApps: true,
    screenReaders: false
  },
  {
    name: "Distance measurement",
    ivisionAI: true,
    traditionalApps: false,
    screenReaders: false
  },
  {
    name: "Spatial awareness context",
    ivisionAI: true,
    traditionalApps: false,
    screenReaders: false
  },
  {
    name: "Natural language descriptions",
    ivisionAI: true,
    traditionalApps: true,
    screenReaders: true
  },
  {
    name: "Works without internet connection",
    ivisionAI: true,
    traditionalApps: false,
    screenReaders: true
  },
  {
    name: "Low cognitive load",
    ivisionAI: true,
    traditionalApps: false,
    screenReaders: false
  },
  {
    name: "Privacy-focused design",
    ivisionAI: true,
    traditionalApps: false,
    screenReaders: true
  }
];

const FeatureComparison = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{
        width: '100%',
        maxWidth: '900px',
        margin: '3rem auto',
        textAlign: 'center',
      }}
    >
      <h2 style={{ 
        fontSize: '2rem', 
        fontWeight: 'bold', 
        marginBottom: '2rem', 
        color: '#1F2937', 
        textAlign: 'center' 
      }}>
        How iVision AI Compares
      </h2>
      
      <div style={{
        overflowX: 'auto',
        padding: '1rem 0',
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'separate',
          borderSpacing: '0',
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        }}>
          <thead>
            <tr>
              <th style={{
                padding: '1.25rem 1rem',
                textAlign: 'left',
                backgroundColor: '#F9FAFB',
                borderBottom: '1px solid #E5E7EB',
                fontWeight: '600',
                color: '#4B5563',
              }}>
                Feature
              </th>
              <th style={{
                padding: '1.25rem 1rem',
                textAlign: 'center',
                backgroundColor: '#F0F4FF',
                borderBottom: '1px solid #E5E7EB',
                fontWeight: '600',
                color: '#3949AB',
              }}>
                iVision AI
              </th>
              <th style={{
                padding: '1.25rem 1rem',
                textAlign: 'center',
                backgroundColor: '#F9FAFB',
                borderBottom: '1px solid #E5E7EB',
                fontWeight: '600',
                color: '#4B5563',
              }}>
                Traditional Apps
              </th>
              <th style={{
                padding: '1.25rem 1rem',
                textAlign: 'center',
                backgroundColor: '#F9FAFB',
                borderBottom: '1px solid #E5E7EB',
                fontWeight: '600',
                color: '#4B5563',
              }}>
                Screen Readers
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} style={{
                backgroundColor: index % 2 === 0 ? 'white' : '#F9FAFB',
              }}>
                <td style={{
                  padding: '1rem',
                  textAlign: 'left',
                  borderBottom: '1px solid #E5E7EB',
                  color: '#4B5563',
                  fontWeight: '500',
                }}>
                  {feature.name}
                </td>
                <td style={{
                  padding: '1rem',
                  textAlign: 'center',
                  borderBottom: '1px solid #E5E7EB',
                  color: feature.ivisionAI ? '#3949AB' : '#9CA3AF',
                }}>
                  {feature.ivisionAI ? (
                    <FaCheck size={18} color="#3949AB" style={{ margin: '0 auto' }} />
                  ) : (
                    <FaTimes size={18} color="#9CA3AF" style={{ margin: '0 auto' }} />
                  )}
                </td>
                <td style={{
                  padding: '1rem',
                  textAlign: 'center',
                  borderBottom: '1px solid #E5E7EB',
                  color: feature.traditionalApps ? '#3949AB' : '#9CA3AF',
                }}>
                  {feature.traditionalApps ? (
                    <FaCheck size={18} color="#3949AB" style={{ margin: '0 auto' }} />
                  ) : (
                    <FaTimes size={18} color="#9CA3AF" style={{ margin: '0 auto' }} />
                  )}
                </td>
                <td style={{
                  padding: '1rem',
                  textAlign: 'center',
                  borderBottom: '1px solid #E5E7EB',
                  color: feature.screenReaders ? '#3949AB' : '#9CA3AF',
                }}>
                  {feature.screenReaders ? (
                    <FaCheck size={18} color="#3949AB" style={{ margin: '0 auto' }} />
                  ) : (
                    <FaTimes size={18} color="#9CA3AF" style={{ margin: '0 auto' }} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default FeatureComparison; 