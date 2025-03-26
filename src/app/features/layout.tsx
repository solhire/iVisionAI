import React from 'react';

export const metadata = {
  title: 'Features | iVision AI',
  description: 'Explore the key features of iVision AI, including real-time object detection with distance measurements to help blind users navigate their surroundings.',
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 