
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Edit2, Trash2, FileText, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThesisGroupProps {
  id: string;
  title: string;
  students: string[];
  professor: string;
  status: 'draft' | 'submitted' | 'approved' | 'rejected';
  technicalAdviser?: string;
  statistician?: string;
  languageCritic?: string;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onView?: (id: string) => void;
  className?: string;
}

const ThesisGroup: React.FC<ThesisGroupProps> = ({
  id,
  title,
  students,
  professor,
  status,
  technicalAdviser,
  statistician,
  languageCritic,
  onEdit,
  onDelete,
  onView,
  className,
}) => {
  const statusColorMap = {
    draft: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    submitted: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    approved: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    rejected: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  };

  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 hover:shadow-md group",
      className
    )}>
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <Badge className={cn(
            "uppercase text-xs font-semibold",
            statusColorMap[status]
          )}>
            {status}
          </Badge>
          <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {onEdit && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onEdit(id)}
                className="h-8 w-8"
              >
                <Edit2 size={16} />
              </Button>
            )}
            {onDelete && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(id)}
                className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900"
              >
                <Trash2 size={16} />
              </Button>
            )}
          </div>
        </div>
        <CardTitle className="text-lg font-semibold line-clamp-2 mb-1 mt-2">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Users size={16} className="text-gray-500" />
            <span className="text-sm font-medium">Group Members:</span>
          </div>
          <ul className="text-sm pl-6 space-y-1">
            {students.map((student, index) => (
              <li key={index} className="truncate">{student}</li>
            ))}
          </ul>
          
          <Separator className="my-2" />
          
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-medium">Professor:</span> {professor}
            </p>
            
            {(technicalAdviser || statistician || languageCritic) && (
              <div className="space-y-1">
                <p className="text-sm font-medium">Assigned Personnel:</p>
                <ul className="text-sm pl-2 space-y-1">
                  {technicalAdviser && (
                    <li className="text-xs">
                      <span className="text-gray-500">Technical Adviser:</span> {technicalAdviser}
                    </li>
                  )}
                  {statistician && (
                    <li className="text-xs">
                      <span className="text-gray-500">Statistician:</span> {statistician}
                    </li>
                  )}
                  {languageCritic && (
                    <li className="text-xs">
                      <span className="text-gray-500">Language Critic:</span> {languageCritic}
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 dark:bg-gray-900 p-4 border-t">
        {onView && (
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => onView(id)}
          >
            <FileText size={16} />
            <span>View Details</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ThesisGroup;
