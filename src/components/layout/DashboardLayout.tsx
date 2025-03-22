
import React from 'react';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import Sidebar from '@/components/layout/Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole?: 'research_head' | 'professor' | 'student';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  userRole = 'student'
}) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen w-full">
          <Sidebar userRole={userRole} />
          <SidebarInset className="transition-all duration-300">
            <header className="flex items-center h-16 px-4 border-b">
              <SidebarTrigger />
            </header>
            <main className="p-6">
              {children}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
