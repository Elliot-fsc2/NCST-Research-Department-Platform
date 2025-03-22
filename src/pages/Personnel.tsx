import React, { useState } from 'react';
import { Filter, Plus, Search, UserPlus } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import TransitionLayout from '@/components/shared/TransitionLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import PersonnelCard from '@/components/personnel/PersonnelCard';

// Mock personnel data
const mockPersonnel = [
  {
    id: 1,
    name: "Dr. Sarah Wilson",
    role: "Technical Adviser",
    department: "Computer Science",
    email: "sarah.wilson@university.edu.ph",
    phone: "(123) 456-7890",
    status: "Active",
    assignedTheses: 3,
    avatar: null,
  },
  {
    id: 2,
    name: "Prof. Robert Chen",
    role: "Technical Adviser",
    department: "Civil Engineering",
    email: "robert.chen@university.edu.ph",
    phone: "(123) 456-7891",
    status: "Active",
    assignedTheses: 2,
    avatar: null,
  },
  {
    id: 3,
    name: "Dr. Jennifer Adams",
    role: "Language Critic",
    department: "English",
    email: "jennifer.adams@university.edu.ph",
    phone: "(123) 456-7892",
    status: "Active",
    assignedTheses: 1,
    avatar: null,
  },
  {
    id: 4,
    name: "Dr. Thomas Johnson",
    role: "Technical Adviser",
    department: "Information Technology",
    email: "thomas.johnson@university.edu.ph",
    phone: "(123) 456-7893",
    status: "Inactive",
    assignedTheses: 0,
    avatar: null,
  },
  {
    id: 5,
    name: "Prof. David Miller",
    role: "Technical Adviser",
    department: "Electrical Engineering",
    email: "david.miller@university.edu.ph",
    phone: "(123) 456-7894",
    status: "Active",
    assignedTheses: 1,
    avatar: null,
  },
  {
    id: 6,
    name: "Dr. Elizabeth Scott",
    role: "Statistician",
    department: "Mathematics",
    email: "elizabeth.scott@university.edu.ph",
    phone: "(123) 456-7895",
    status: "Active",
    assignedTheses: 1,
    avatar: null,
  },
  {
    id: 7,
    name: "Dr. Patricia Adams",
    role: "Technical Adviser",
    department: "Computer Science",
    email: "patricia.adams@university.edu.ph",
    phone: "(123) 456-7896",
    status: "Active",
    assignedTheses: 1,
    avatar: null,
  },
  {
    id: 8,
    name: "Prof. Richard Hill",
    role: "Statistician",
    department: "Mathematics",
    email: "richard.hill@university.edu.ph",
    phone: "(123) 456-7897",
    status: "Inactive",
    assignedTheses: 0,
    avatar: null,
  },
];

const Personnel = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [roleFilter, setRoleFilter] = useState<string | null>(null);
  const [departmentFilter, setDepartmentFilter] = useState<string | null>(null);
  
  // Get unique roles for filter
  const roles = Array.from(new Set(mockPersonnel.map(person => person.role)));
  
  // Get unique departments for filter
  const departments = Array.from(new Set(mockPersonnel.map(person => person.department)));
  
  // Filter personnel based on search query, tab, role, and department filters
  const filteredPersonnel = mockPersonnel.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         person.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTab = activeTab === 'all' || 
                     (activeTab === 'active' && person.status === 'Active') ||
                     (activeTab === 'inactive' && person.status === 'Inactive');
    
    const matchesRole = !roleFilter || person.role === roleFilter;
    const matchesDepartment = !departmentFilter || person.department === departmentFilter;
    
    return matchesSearch && matchesTab && matchesRole && matchesDepartment;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar userRole="research_head" />
        <main className="flex-1 p-4 pt-20 md:ml-[70px] lg:ml-64">
          <TransitionLayout>
            <div className="container mx-auto max-w-6xl">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h1 className="text-3xl font-bold">Personnel Management</h1>
                <Button className="flex items-center gap-2">
                  <UserPlus size={16} />
                  Add Personnel
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
                <div className="lg:col-span-5 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    placeholder="Search by name or email..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="lg:col-span-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        <Filter className="mr-2" size={16} />
                        Role
                        {roleFilter && <Badge variant="secondary" className="ml-2">{roleFilter}</Badge>}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Filter by Role</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => setRoleFilter(null)}>
                        All Roles
                      </DropdownMenuItem>
                      {roles.map(role => (
                        <DropdownMenuItem key={role} onClick={() => setRoleFilter(role)}>
                          {role}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <div className="lg:col-span-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        <Filter className="mr-2" size={16} />
                        Department
                        {departmentFilter && <Badge variant="secondary" className="ml-2">{departmentFilter}</Badge>}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Filter by Department</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => setDepartmentFilter(null)}>
                        All Departments
                      </DropdownMenuItem>
                      {departments.map(dept => (
                        <DropdownMenuItem key={dept} onClick={() => setDepartmentFilter(dept)}>
                          {dept}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <TabsList>
                  <TabsTrigger value="all">All Personnel</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="inactive">Inactive</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPersonnel.length > 0 ? (
                  filteredPersonnel.map(person => (
                    <PersonnelCard
                      key={person.id}
                      name={person.name}
                      role={person.role}
                      department={person.department}
                      email={person.email}
                      phone={person.phone}
                      status={person.status}
                      assignedTheses={person.assignedTheses}
                      avatar={person.avatar}
                    />
                  ))
                ) : (
                  <div className="col-span-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8 text-center">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search size={24} className="text-gray-500" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No personnel found</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      No personnel match your current search criteria. Try adjusting your filters or search query.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </TransitionLayout>
        </main>
      </div>
    </div>
  );
};

export default Personnel;
