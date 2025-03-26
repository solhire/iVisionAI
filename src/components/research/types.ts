import React from 'react';

// Timeline Types
export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

// Technical Innovations Types
export interface Innovation {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

// Performance Metrics Types
export interface MetricData {
  name: string;
  value: number;
}

export interface ProcessingTimeData {
  name: string;
  old: number;
  new: number;
}

// Research Team Types
export interface TeamMember {
  id: number;
  name: string;
  title: string;
  credentials: string;
  bio: string;
  image: string;
  links: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface PartnerLogo {
  id: number;
  name: string;
  logo: string;
  description: string;
}

// Publications Types
export interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal?: string;
  conference?: string;
  year: number;
  doi?: string;
  link: string;
  abstract: string;
  keywords: string[];
}

export interface PublicationsData {
  peerReviewed: Publication[];
  whitepapers: Publication[];
}

// User Testing Results Types
export interface TestResult {
  id: number;
  metric: string;
  value: number;
  description: string;
  color: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  location: string;
}

// Research Roadmap Types
export interface Milestone {
  text: string;
  completed: boolean;
}

export interface RoadmapItem {
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