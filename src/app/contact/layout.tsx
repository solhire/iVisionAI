import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | iVision AI',
  description: 'Get in touch with the iVision AI team for inquiries, support, or partnerships. We are dedicated to making the visual world accessible to everyone.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>{children}</>
  );
} 