
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gradient?: boolean;
  hoverEffect?: boolean;
  glassEffect?: boolean;
  delay?: number;
}

const AnimatedCard = ({
  children,
  className,
  gradient = false,
  hoverEffect = true,
  glassEffect = true,
  delay = 0,
  ...props
}: AnimatedCardProps) => {
  return (
    <div
      className={cn(
        'rounded-xl border p-6 shadow-sm animate-fade-in',
        glassEffect && 'glass-card',
        hoverEffect && 'hover-card',
        gradient && 'bg-gradient-to-br from-white/80 to-white/50 dark:from-gray-900/80 dark:to-gray-900/50',
        className
      )}
      style={{ animationDelay: `${delay * 50}ms` }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
