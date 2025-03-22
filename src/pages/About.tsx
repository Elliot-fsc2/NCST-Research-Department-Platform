
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import TransitionLayout from '@/components/shared/TransitionLayout';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <TransitionLayout>
        <div className="container mx-auto px-4 pt-24 pb-16">
          <h1 className="text-3xl font-bold mb-6">About NCST Research</h1>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300">
                The NCST Research Department is dedicated to advancing knowledge through innovative research, 
                fostering academic excellence, and providing a supportive environment for students and faculty 
                to pursue their research interests.
              </p>
              
              <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Our Vision</h2>
              <p className="text-gray-700 dark:text-gray-300">
                To be recognized as a leading research institution that contributes significantly to the advancement 
                of knowledge and addresses critical challenges facing society through collaborative and impactful research.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Core Values</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Academic Excellence and Integrity</li>
                <li>Innovation and Critical Thinking</li>
                <li>Collaboration and Interdisciplinary Approach</li>
                <li>Inclusivity and Diversity</li>
                <li>Social Responsibility and Real-world Impact</li>
              </ul>
              
              <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Research Focus Areas</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Applied Sciences and Engineering</li>
                <li>Information Technology and Computer Science</li>
                <li>Business Administration and Management</li>
                <li>Sustainable Development and Environmental Studies</li>
                <li>Social Sciences and Community Development</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Research Department Leadership</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg">Dr. Jane Smith</h3>
                <p className="text-primary dark:text-primary/90 text-sm">Research Department Head</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Ph.D. in Computer Science, with over 15 years of experience in academic research and administration.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg">Prof. Michael Rodriguez</h3>
                <p className="text-primary dark:text-primary/90 text-sm">Associate Research Director</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Specialist in Engineering Research Methodologies with extensive industry partnerships.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg">Dr. Sarah Johnson</h3>
                <p className="text-primary dark:text-primary/90 text-sm">Student Research Coordinator</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Focused on helping students develop research skills and connecting them with faculty mentors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </TransitionLayout>
    </div>
  );
};

export default About;
