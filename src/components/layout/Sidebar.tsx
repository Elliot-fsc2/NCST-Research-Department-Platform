
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronLeft, 
  Home, 
  Users, 
  BookOpen, 
  UserCheck, 
  MessageSquare, 
  Settings, 
  HelpCircle,
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  userRole?: 'research_head' | 'professor' | 'student';
}

const Sidebar: React.FC<SidebarProps> = ({ userRole = 'student' }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
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
    <>
      {/* Mobile Hamburger for Small Screens */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-lg"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Menu size={20} />
        </Button>
      </div>
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out",
          isCollapsed 
            ? "w-[70px]" 
            : "w-64",
          "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-r border-gray-200 dark:border-gray-800 shadow-sm",
          "md:translate-x-0",
          // Mobile: show/hide based on state
          isCollapsed && "md:w-[70px]",
          !isCollapsed && "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            {!isCollapsed && (
              <span className="text-lg font-semibold truncate bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                NCST Research
              </span>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <ChevronLeft
                size={18}
                className={`transform transition-transform duration-300 ${
                  isCollapsed ? 'rotate-180' : ''
                }`}
              />
            </Button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    <div
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200",
                        isActive(link.path)
                          ? "bg-primary text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800",
                        isCollapsed && "justify-center"
                      )}
                    >
                      <link.icon size={isCollapsed ? 22 : 18} />
                      {!isCollapsed && <span>{link.label}</span>}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <UserCheck size={16} />
              </div>
              {!isCollapsed && (
                <div className="overflow-hidden">
                  <p className="text-sm font-medium truncate">
                    {userRole === 'research_head' ? 'Research Head' : 
                     userRole === 'professor' ? 'Professor' : 'Student'}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    user@university.edu.ph
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
