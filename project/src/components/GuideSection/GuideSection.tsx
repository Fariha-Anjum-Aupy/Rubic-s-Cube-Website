import React from 'react';

interface GuideSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function GuideSection({ title, children, className = '' }: GuideSectionProps) {
  return (
    <section className={`mb-12 ${className}`}>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
      {children}
    </section>
  );
}