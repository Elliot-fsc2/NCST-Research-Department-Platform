
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UserCheck, Mail, Phone, Edit, Trash } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PersonnelCardProps {
  id: string;
  name: string;
  role: 'technical_adviser' | 'statistician' | 'language_critic' | 'professor';
  email: string;
  phone?: string;
  department?: string;
  assignedGroups?: number;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onAssign?: (id: string) => void;
  className?: string;
}

const PersonnelCard: React.FC<PersonnelCardProps> = ({
  id,
  name,
  role,
  email,
  phone,
  department,
  assignedGroups = 0,
  onEdit,
  onDelete,
  onAssign,
  className,
}) => {
  const roleDisplayMap = {
    technical_adviser: 'Technical Adviser',
    statistician: 'Statistician',
    language_critic: 'Language Critic',
    professor: 'Professor',
  };

  const roleColorMap = {
    technical_adviser: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    statistician: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    language_critic: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    professor: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
  };

  return (
    <Card className={cn(
      "overflow-hidden group transition-all duration-300 hover:shadow-md",
      className
    )}>
      <div className="absolute top-0 right-0 pt-2 pr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-1">
        {onEdit && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit(id)}
            className="h-8 w-8"
          >
            <Edit size={16} />
          </Button>
        )}
        {onDelete && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(id)}
            className="h-8 w-8 text-red-500 hover:text-red-600"
          >
            <Trash size={16} />
          </Button>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 text-primary rounded-full p-3">
            <UserCheck size={24} />
          </div>
          
          <div className="space-y-2 flex-1">
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">{name}</h3>
              <Badge className={cn(
                "w-fit text-xs uppercase font-medium tracking-wide mt-1",
                roleColorMap[role]
              )}>
                {roleDisplayMap[role]}
              </Badge>
            </div>
            
            <div className="space-y-1 text-sm">
              {email && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={14} />
                  <span>{email}</span>
                </div>
              )}
              {phone && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={14} />
                  <span>{phone}</span>
                </div>
              )}
              {department && (
                <p className="mt-2 text-xs text-muted-foreground">
                  Department: {department}
                </p>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Assigned Groups</span>
            <span className="text-sm font-medium">{assignedGroups}</span>
          </div>
          <div className="mt-2 h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full"
              style={{ width: `${Math.min(assignedGroups * 10, 100)}%` }}
            />
          </div>
        </div>
      </CardContent>
      
      {onAssign && (
        <CardFooter className="bg-gray-50 dark:bg-gray-900 p-4 border-t">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => onAssign(id)}
          >
            Assign to Group
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default PersonnelCard;
