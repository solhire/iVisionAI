import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate | iVision AI',
  description: 'Support the iVision AI project and help make the visual world accessible to everyone. Your donations fund research, development, and free device distribution to those in need.',
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>{children}</>
  );
} 