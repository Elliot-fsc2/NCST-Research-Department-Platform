
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import TransitionLayout from '@/components/shared/TransitionLayout';
import PersonnelCard from '@/components/personnel/PersonnelCard';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Plus } from 'lucide-react';

const mockPersonnel = [
  {
    id: '1',
    name: 'Dr. James Wilson',
    role: 'technical_adviser',
    email: 'jwilson@university.edu.ph',
    phone: '123-456-7890',
    department: 'Computer Science',
    assignedGroups: 5,
  },
  {
    id: '2',
    name: 'Dr. Emily Chen',
    role: 'statistician',
    email: 'echen@university.edu.ph',
    phone: '123-456-7891',
    department: 'Mathematics',
    assignedGroups: 3,
  },
  {
    id: '3',
    name: 'Dr. Robert Brown',
    role: 'language_critic',
    email: 'rbrown@university.edu.ph',
    phone: '123-456-7892',
    department: 'English',
    assignedGroups: 4,
  },
  {
    id: '4',
    name: 'Dr. Sarah Johnson',
    role: 'professor',
    email: 'sjohnson@university.edu.ph',
    phone: '123-456-7893',
    department: 'Computer Engineering',
    assignedGroups: 2,
  },
  {
    id: '5',
    name: 'Dr. Michael Davis',
    role: 'technical_adviser',
    email: 'mdavis@university.edu.ph',
    phone: '123-456-7894',
    department: 'Information Technology',
    assignedGroups: 3,
  },
  {
    id: '6',
    name: 'Dr. Jennifer White',
    role: 'language_critic',
    email: 'jwhite@university.edu.ph',
    phone: '123-456-7895',
    department: 'Communication',
    assignedGroups: 2,
  },
];

// Map string roles to the expected PersonnelCard role type
const roleMapping = {
  'professor': 'professor' as const,
  'technical_adviser': 'technical_adviser' as const,
  'statistician': 'statistician' as const,
  'language_critic': 'language_critic' as const,
};

const Personnel: React.FC = () => {
  const { toast } = useToast();

  return (
    <DashboardLayout userRole="research_head">
      <TransitionLayout>
        <div className="space-y-6 max-w-6xl mx-auto">
          <header className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Personnel</h1>
            <Button onClick={() => toast({ title: "Add New Personnel" })}>
              <Plus size={16} className="mr-1" />
              Add Personnel
            </Button>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockPersonnel.map((person) => (
              <PersonnelCard
                key={person.id}
                id={person.id}
                name={person.name}
                role={roleMapping[person.role as keyof typeof roleMapping]}
                email={person.email}
                phone={person.phone}
                department={person.department}
                assignedGroups={person.assignedGroups}
                onEdit={() => toast({ title: `Editing ${person.name}` })}
                onDelete={() => toast({ title: `Deleting ${person.name}` })}
              />
            ))}
          </div>
        </div>
      </TransitionLayout>
    </DashboardLayout>
  );
};

export default Personnel;
