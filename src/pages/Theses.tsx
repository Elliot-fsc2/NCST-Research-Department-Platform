
import React, { useState } from 'react';
import { Filter, Plus, Search, SlidersHorizontal } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import TransitionLayout from '@/components/shared/TransitionLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Mock thesis groups data
const mockThesisGroups = [
  {
    id: 1,
    title: "Machine Learning for Healthcare Diagnostics",
    department: "Computer Science",
    section: "CS-4A",
    status: "Active",
    members: ["John Smith", "Emma Johnson", "Michael Brown", "Olivia Davis"],
    advisers: [
      { name: "Dr. Sarah Wilson", role: "Technical Adviser" }
    ],
    lastUpdated: "2023-06-15"
  },
  {
    id: 2,
    title: "Sustainable Urban Development Models",
    department: "Civil Engineering",
    section: "CE-5B",
    status: "Active",
    members: ["James Wilson", "Sophia Martinez", "Alexander Lee"],
    advisers: [
      { name: "Prof. Robert Chen", role: "Technical Adviser" },
      { name: "Dr. Jennifer Adams", role: "Language Critic" }
    ],
    lastUpdated: "2023-06-10"
  },
  {
    id: 3,
    title: "Blockchain Applications in Supply Chain Management",
    department: "Information Technology",
    section: "IT-4C",
    status: "Draft",
    members: ["Ethan Clark", "Ava Rodriguez", "Noah Thompson", "Isabella White", "William Harris"],
    advisers: [
      { name: "Dr. Thomas Johnson", role: "Technical Adviser" }
    ],
    lastUpdated: "2023-06-05"
  },
  {
    id: 4,
    title: "Renewable Energy Integration in Rural Communities",
    department: "Electrical Engineering",
    section: "EE-5A",
    status: "Completed",
    members: ["Benjamin Taylor", "Charlotte Lewis", "Daniel Walker", "Mia Green"],
    advisers: [
      { name: "Prof. David Miller", role: "Technical Adviser" },
      { name: "Dr. Elizabeth Scott", role: "Statistician" }
    ],
    lastUpdated: "2023-05-25"
  },
  {
    id: 5,
    title: "Artificial Intelligence in Educational Assessment",
    department: "Computer Science",
    section: "CS-4B",
    status: "Active",
    members: ["Matthew Allen", "Amelia King", "Samuel Scott", "Grace Young"],
    advisers: [
      { name: "Dr. Patricia Adams", role: "Technical Adviser" },
      { name: "Prof. Richard Hill", role: "Statistician" }
    ],
    lastUpdated: "2023-05-20"
  },
];

const Theses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [departmentFilter, setDepartmentFilter] = useState<string | null>(null);
  
  // Filter thesis groups based on search query and filters
  const filteredTheses = mockThesisGroups.filter(thesis => {
    const matchesSearch = thesis.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         thesis.members.some(member => member.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesStatus = !statusFilter || thesis.status === statusFilter;
    const matchesDepartment = !departmentFilter || thesis.department === departmentFilter;
    
    return matchesSearch && matchesStatus && matchesDepartment;
  });
  
  // Get unique departments for filter
  const departments = Array.from(new Set(mockThesisGroups.map(thesis => thesis.department)));
  
  // Get unique statuses for filter
  const statuses = Array.from(new Set(mockThesisGroups.map(thesis => thesis.status)));

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/10 text-green-600 hover:bg-green-500/20';
      case 'Draft':
        return 'bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20';
      case 'Completed':
        return 'bg-blue-500/10 text-blue-600 hover:bg-blue-500/20';
      default:
        return 'bg-gray-500/10 text-gray-600 hover:bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 pt-20 md:ml-[70px] lg:ml-64">
          <TransitionLayout>
            <div className="container mx-auto max-w-6xl">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h1 className="text-3xl font-bold">Thesis Groups</h1>
                <Button className="flex items-center gap-2">
                  <Plus size={16} />
                  New Thesis Group
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
                <div className="md:col-span-8 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    placeholder="Search thesis title or members..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        <Filter className="mr-2" size={16} />
                        Status
                        {statusFilter && <Badge variant="secondary" className="ml-2">{statusFilter}</Badge>}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => setStatusFilter(null)}>
                        All Statuses
                      </DropdownMenuItem>
                      {statuses.map(status => (
                        <DropdownMenuItem key={status} onClick={() => setStatusFilter(status)}>
                          {status}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <div className="md:col-span-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        <SlidersHorizontal className="mr-2" size={16} />
                        Department
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTheses.length > 0 ? (
                  filteredTheses.map(thesis => (
                    <Card key={thesis.id} className="overflow-hidden">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{thesis.title}</CardTitle>
                            <CardDescription className="mt-1">
                              {thesis.department} • Section {thesis.section}
                            </CardDescription>
                          </div>
                          <Badge className={getStatusColor(thesis.status)}>
                            {thesis.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pb-3">
                        <h4 className="text-sm font-medium mb-2">Team Members</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {thesis.members.map((member, index) => (
                            <Badge key={index} variant="outline">
                              {member}
                            </Badge>
                          ))}
                        </div>
                        
                        <h4 className="text-sm font-medium mb-2">Advisers</h4>
                        <div className="space-y-1">
                          {thesis.advisers.map((adviser, index) => (
                            <div key={index} className="flex items-center justify-between text-sm">
                              <span>{adviser.name}</span>
                              <span className="text-gray-500">{adviser.role}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      
                      <Separator />
                      
                      <CardFooter className="flex justify-between py-3">
                        <span className="text-xs text-gray-500">
                          Last updated: {new Date(thesis.lastUpdated).toLocaleDateString()}
                        </span>
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8 text-center">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search size={24} className="text-gray-500" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No thesis groups found</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      No thesis groups match your current search criteria. Try adjusting your filters or search query.
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

export default Theses;
