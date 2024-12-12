import React from 'react';
import GuideSection from './GuideSection';

export default function GuideContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">The Complete Guide to Rubik's Cubes</h1>
      
      <GuideSection title="Basic Introduction">
        <div className="space-y-4">
          <div className="flex gap-6 items-start">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">What is a Rubik's cube?</h3>
              <p className="text-gray-600">A Rubik's cube is a three-dimensional combination puzzle invented in 1974. It consists of six faces, each covered with nine stickers in different colors. The goal is to rotate the sections to return each face to a solid color.</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?auto=format&fit=crop&w=500" 
              alt="Classic Rubik's Cube" 
              className="w-48 h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Parts and Terminology</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><strong>Center pieces:</strong> Fixed pieces that determine the color of each face</li>
              <li><strong>Edge pieces:</strong> Pieces with two colors</li>
              <li><strong>Corner pieces:</strong> Pieces with three colors</li>
              <li><strong>Face:</strong> Any of the six sides of the cube</li>
              <li><strong>Layer:</strong> A single row or column of pieces</li>
            </ul>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="Historical Background">
        <div className="space-y-4">
          <p className="text-gray-600">The Rubik's Cube was invented by Hungarian sculptor and professor of architecture Ernő Rubik in 1974. Originally called the "Magic Cube," it was licensed to the Ideal Toy Corp in 1980 and renamed "Rubik's Cube."</p>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Key Historical Milestones</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 1974: Initial invention by Ernő Rubik</li>
              <li>• 1977: First cube sold in Hungarian toy shops</li>
              <li>• 1980: International release and worldwide phenomenon</li>
              <li>• 1982: First world championship held in Budapest</li>
              <li>• 2000s: Rise of speedcubing and modern competitions</li>
            </ul>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="World Records and Achievements">
        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Current World Records</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">Single Solve</p>
                <p className="text-gray-600">3.47 seconds - Yusheng Du (2018)</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold">Average of 5</p>
                <p className="text-gray-600">4.86 seconds - Max Park (2023)</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold">Blindfolded</p>
                <p className="text-gray-600">15.50 seconds - Tommy Cherry (2023)</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold">One-handed</p>
                <p className="text-gray-600">6.82 seconds - Max Park (2023)</p>
              </div>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="Solving Methods">
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Beginner's Method Overview</h3>
            <ol className="space-y-3 text-gray-600">
              <li>1. <strong>White Cross:</strong> Create a cross on the white face</li>
              <li>2. <strong>First Layer Corners:</strong> Complete the white face and first layer</li>
              <li>3. <strong>Middle Layer:</strong> Solve the middle layer edges</li>
              <li>4. <strong>Yellow Cross:</strong> Create a cross on the yellow face</li>
              <li>5. <strong>Yellow Corners:</strong> Position and orient yellow corners</li>
            </ol>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Advanced Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">CFOP Method</h4>
                <p className="text-gray-600">Also known as the Fridrich method, used by most speedcubers.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">Roux Method</h4>
                <p className="text-gray-600">An alternative method focusing on block-building.</p>
              </div>
            </div>
          </div>
        </div>
      </GuideSection>

      <GuideSection title="Cube Culture and Community">
        <div className="space-y-4">
          <p className="text-gray-600">The Rubik's Cube community is vibrant and global, with competitions held worldwide under the World Cube Association (WCA).</p>
          
          <div className="bg-white shadow-md rounded-lg p-6 mt-4">
            <h3 className="text-xl font-semibold mb-4">Major Competitions</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• World Cube Championship (Biennial)</li>
              <li>• Continental Championships</li>
              <li>• National Championships</li>
              <li>• Regional Competitions</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mt-6">
            <h3 className="text-xl font-semibold mb-3">Online Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• World Cube Association (WCA)</li>
              <li>• Speedsolving.com Forums</li>
              <li>• CubeSkills Training Platform</li>
              <li>• YouTube Tutorials and Channels</li>
            </ul>
          </div>
        </div>
      </GuideSection>
    </div>
  );
}