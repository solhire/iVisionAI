import React from 'react';

export const metadata = {
  title: 'About | iVision AI',
  description: 'Learn about iVision AI, our mission, values, and technology that helps blind users navigate with unprecedented independence.',
};

export default function AboutLayout({
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