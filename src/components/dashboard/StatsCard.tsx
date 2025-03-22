
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, BookOpen, CheckCircle, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedCard from '../shared/AnimatedCard';

interface StatData {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
}

interface StatsCardProps {
  data: StatData[];
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ data, className }) => {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", className)}>
      {data.map((stat, index) => (
        <AnimatedCard 
          key={stat.title} 
          className="p-6 hover:shadow-md transition-shadow duration-300"
          delay={index}
        >
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
              
              {stat.change && (
                <p className={cn(
                  "text-xs font-medium flex items-center space-x-1",
                  stat.change.type === 'increase' ? 'text-green-500' : 'text-red-500'
                )}>
                  {stat.change.type === 'increase' ? (
                    <span className="inline-block">↑</span>
                  ) : (
                    <span className="inline-block">↓</span>
                  )}
                  <span>{stat.change.value}%</span>
                  <span className="text-gray-500 dark:text-gray-400">from last month</span>
                </p>
              )}
            </div>
            
            <div className="p-2 bg-primary/10 text-primary rounded-full">
              {stat.icon}
            </div>
          </div>
        </AnimatedCard>
      ))}
    </div>
  );
};

export const DefaultStatData: StatData[] = [
  {
    title: "Total Thesis Groups",
    value: 48,
    icon: <BookOpen size={18} />,
    change: {
      value: 12,
      type: "increase"
    }
  },
  {
    title: "Total Students",
    value: 156,
    icon: <Users size={18} />,
    change: {
      value: 8,
      type: "increase"
    }
  },
  {
    title: "Approved Thesis",
    value: 32,
    icon: <CheckCircle size={18} />,
    change: {
      value: 24,
      type: "increase"
    }
  },
  {
    title: "Pending Reviews",
    value: 16,
    icon: <Clock size={18} />,
    change: {
      value: 5,
      type: "decrease"
    }
  }
];

export default StatsCard;
