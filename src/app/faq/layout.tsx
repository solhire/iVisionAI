import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | iVision AI',
  description: 'Frequently asked questions about iVision AI technology, features, and how our app helps blind users navigate their surroundings with confidence.',
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>{children}</>
  );
} 