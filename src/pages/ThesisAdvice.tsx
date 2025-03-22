
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import TransitionLayout from '@/components/shared/TransitionLayout';
import AIQueryBox from '@/components/ai/AIQueryBox';

const ThesisAdvice: React.FC = () => {
  return (
    <DashboardLayout userRole="student">
      <TransitionLayout>
        <div className="space-y-6 max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold tracking-tight">Thesis Advice</h1>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium mb-4">Ask for Thesis Guidance</h2>
            <AIQueryBox 
              promptType="thesis"
              placeholder="Ask for thesis advice or topic validation..."
            />
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium mb-4">Common Questions</h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>How do I narrow down my thesis topic?</li>
              <li>What are the key components of a research proposal?</li>
              <li>How do I conduct a literature review?</li>
              <li>What statistical methods should I use for my research?</li>
              <li>How do I format citations and references?</li>
            </ul>
          </div>
        </div>
      </TransitionLayout>
    </DashboardLayout>
  );
};

export default ThesisAdvice;
