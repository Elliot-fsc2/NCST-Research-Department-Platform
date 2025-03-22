
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface WelcomeCardProps {
  userName: string;
  role: 'research_head' | 'professor' | 'student';
  className?: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ 
  userName, 
  role,
  className 
}) => {
  const getWelcomeText = () => {
    switch (role) {
      case 'research_head':
        return "Welcome to the Research Department Management System. As Research Head, you have access to all features including personnel assignment, thesis management, and more.";
      case 'professor':
        return "Welcome to the Research Department Management System. You can manage thesis groups, communicate with students, and submit forms here.";
      case 'student':
        return "Welcome to the Research Department Management System. You can seek AI advice on thesis topics and communicate with your professors here.";
      default:
        return "Welcome to the Research Department Management System.";
    }
  };

  return (
    <Card className={cn(
      "overflow-hidden border-none shadow-lg",
      className
    )}>
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90"></div>
        
        <CardContent className="relative z-10 p-6 sm:p-8">
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-medium text-blue-100 uppercase tracking-wider">
              {role === 'research_head' ? 'Research Head' : 
               role === 'professor' ? 'Professor' : 'Student'}
            </span>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Good day, {userName}
            </h2>
            
            <p className="text-blue-100 max-w-lg">
              {getWelcomeText()}
            </p>
            
            <div className="absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4 w-32 h-32 rounded-full bg-blue-500 opacity-30 blur-xl"></div>
            <div className="absolute top-0 right-0 transform -translate-y-1/3 translate-x-1/4 w-24 h-24 rounded-full bg-blue-300 opacity-20 blur-xl"></div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default WelcomeCard;
