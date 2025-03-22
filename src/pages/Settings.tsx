
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import TransitionLayout from '@/components/shared/TransitionLayout';

const Settings: React.FC = () => {
  return (
    <DashboardLayout>
      <TransitionLayout>
        <div className="space-y-6 max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p>This page is under construction.</p>
        </div>
      </TransitionLayout>
    </DashboardLayout>
  );
};

export default Settings;
