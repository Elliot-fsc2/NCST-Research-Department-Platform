
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import TransitionLayout from '@/components/shared/TransitionLayout';
import ThesisGroup from '@/components/thesis/ThesisGroup';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Plus } from 'lucide-react';

const mockThesisGroups = [
  {
    id: '1',
    title: 'Blockchain-based Academic Records Verification System',
    students: ['John Smith', 'Maria Garcia', 'David Lee', 'Sarah Johnson'],
    professor: 'Dr. Alan Rodriguez',
    status: 'approved' as const,
    technicalAdviser: 'Dr. James Wilson',
    statistician: 'Dr. Emily Chen',
    languageCritic: 'Dr. Robert Brown',
  },
  {
    id: '2',
    title: 'Machine Learning Approaches to Predict Student Performance in Online Learning Environments',
    students: ['Michael Davis', 'Jennifer White', 'Daniel Martinez'],
    professor: 'Dr. Susan Williams',
    status: 'submitted' as const,
    technicalAdviser: 'Dr. Thomas Clark',
  },
  {
    id: '3',
    title: 'Development of a Mobile Application for University Library Resources',
    students: ['Kevin Wilson', 'Lisa Anderson', 'James Brown', 'Emily Taylor'],
    professor: 'Dr. Patricia Jones',
    status: 'draft' as const,
  },
  {
    id: '4',
    title: 'IoT-based Smart Campus Energy Management System',
    students: ['Robert Johnson', 'Emily Chen', 'Christopher Lee'],
    professor: 'Dr. William Taylor',
    status: 'draft' as const,
  },
  {
    id: '5',
    title: 'Augmented Reality for Enhanced Learning in STEM Courses',
    students: ['Jessica Wilson', 'Andrew Martinez', 'Stephanie Brown'],
    professor: 'Dr. Elizabeth Garcia',
    status: 'submitted' as const,
    technicalAdviser: 'Dr. Richard Anderson',
  },
];

const Theses: React.FC = () => {
  const { toast } = useToast();
  const [userRole, setUserRole] = React.useState<'research_head' | 'professor' | 'student'>('research_head');

  const switchRole = (role: 'research_head' | 'professor' | 'student') => {
    setUserRole(role);
    toast({
      title: "Role switched",
      description: `You are now viewing as ${role.replace('_', ' ')}`,
    });
  };

  return (
    <DashboardLayout userRole={userRole}>
      <TransitionLayout>
        <div className="space-y-6 max-w-6xl mx-auto">
          <header className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Thesis Groups</h1>
            {userRole !== 'student' && (
              <Button onClick={() => toast({ title: "Create New Thesis Group" })}>
                <Plus size={16} className="mr-1" />
                New Group
              </Button>
            )}
          </header>

          <div className="flex items-center justify-end mb-4">
            <div className="flex items-center bg-gray-100 dark:bg-gray-900 rounded-lg p-1">
              <button
                onClick={() => switchRole('research_head')}
                className={`px-3 py-1.5 text-xs font-medium rounded ${
                  userRole === 'research_head' 
                    ? 'bg-white dark:bg-gray-800 shadow-sm' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Research Head
              </button>
              <button
                onClick={() => switchRole('professor')}
                className={`px-3 py-1.5 text-xs font-medium rounded ${
                  userRole === 'professor' 
                    ? 'bg-white dark:bg-gray-800 shadow-sm' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Professor
              </button>
              <button
                onClick={() => switchRole('student')}
                className={`px-3 py-1.5 text-xs font-medium rounded ${
                  userRole === 'student' 
                    ? 'bg-white dark:bg-gray-800 shadow-sm' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Student
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockThesisGroups.map((group) => (
              <ThesisGroup
                key={group.id}
                {...group}
                onView={(id) => toast({ title: `Viewing ${id}` })}
                onEdit={userRole !== 'student' ? (id) => toast({ title: `Editing ${id}` }) : undefined}
                onDelete={userRole === 'research_head' ? (id) => toast({ title: `Deleting ${id}` }) : undefined}
              />
            ))}
          </div>
        </div>
      </TransitionLayout>
    </DashboardLayout>
  );
};

export default Theses;
