
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  BookOpen, 
  UserCheck, 
  MessageSquare, 
  Settings, 
  HelpCircle,
} from 'lucide-react';

import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from '@/components/ui/sidebar';

interface SidebarWrapperProps {
  userRole?: 'research_head' | 'professor' | 'student';
}

const SidebarWrapper: React.FC<SidebarWrapperProps> = ({ userRole = 'student' }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Define navigation links based on user role
  const getNavLinks = () => {
    const commonLinks = [
      { path: '/dashboard', label: 'Dashboard', icon: Home },
      { path: '/profile', label: 'Profile', icon: UserCheck },
    ];

    if (userRole === 'research_head') {
      return [
        ...commonLinks,
        { path: '/theses', label: 'Thesis Groups', icon: BookOpen },
        { path: '/personnel', label: 'Personnel', icon: Users },
        { path: '/messages', label: 'Messages', icon: MessageSquare },
        { path: '/settings', label: 'Settings', icon: Settings },
      ];
    }
    
    if (userRole === 'professor') {
      return [
        ...commonLinks,
        { path: '/theses', label: 'Thesis Groups', icon: BookOpen },
        { path: '/messages', label: 'Messages', icon: MessageSquare },
      ];
    }
    
    // Student links
    return [
      ...commonLinks,
      { path: '/thesis-advice', label: 'Thesis Advice', icon: HelpCircle },
      { path: '/messages', label: 'Messages', icon: MessageSquare },
    ];
  };

  const navLinks = getNavLinks();

  return (
    <ShadcnSidebar>
      <SidebarHeader className="flex items-center p-4">
        <span className="text-lg font-semibold truncate bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
          NCST Research
        </span>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarMenu>
          {navLinks.map((link) => (
            <SidebarMenuItem key={link.path}>
              <SidebarMenuButton asChild isActive={isActive(link.path)} tooltip={link.label}>
                <Link to={link.path}>
                  <link.icon />
                  <span>{link.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <UserCheck size={16} />
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium truncate">
              {userRole === 'research_head' ? 'Research Head' : 
               userRole === 'professor' ? 'Professor' : 'Student'}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              user@university.edu.ph
            </p>
          </div>
        </div>
      </SidebarFooter>
    </ShadcnSidebar>
  );
};

export default SidebarWrapper;
