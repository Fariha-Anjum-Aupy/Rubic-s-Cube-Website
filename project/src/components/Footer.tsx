import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} CubeMaster. All rights reserved.
        </p>
      </div>
    </footer>
  );
}