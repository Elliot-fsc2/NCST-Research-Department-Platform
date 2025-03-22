import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';
import TransitionLayout from '@/components/shared/TransitionLayout';
import WelcomeCard from '@/components/dashboard/WelcomeCard';
import StatsCard, { DefaultStatData } from '@/components/dashboard/StatsCard';
import ThesisGroup from '@/components/thesis/ThesisGroup';
import AIQueryBox from '@/components/ai/AIQueryBox';
import PersonnelCard from '@/components/personnel/PersonnelCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { 
  Plus, 
  ClipboardList, 
  Users, 
  MessageSquare, 
  Settings, 
  BellRing,
  ChevronRight
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

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
];

const mockPersonnel = [
  {
    id: '1',
    name: 'Dr. James Wilson',
    role: 'technical_adviser' as const,
    email: 'jwilson@university.edu.ph',
    phone: '123-456-7890',
    department: 'Computer Science',
    assignedGroups: 5,
  },
  {
    id: '2',
    name: 'Dr. Emily Chen',
    role: 'statistician' as const,
    email: 'echen@university.edu.ph',
    phone: '123-456-7891',
    department: 'Mathematics',
    assignedGroups: 3,
  },
  {
    id: '3',
    name: 'Dr. Robert Brown',
    role: 'language_critic' as const,
    email: 'rbrown@university.edu.ph',
    phone: '123-456-7892',
    department: 'English',
    assignedGroups: 4,
  },
];

const mockAnnouncements = [
  {
    id: '1',
    title: 'Thesis Defense Schedule Update',
    content: 'The thesis defense schedule has been updated. Please check your email for details.',
    date: '2023-05-15T10:00:00Z',
    author: 'Dr. Alan Rodriguez',
  },
  {
    id: '2',
    title: 'New Technical Adviser Assignments',
    content: 'New technical advisers have been assigned to thesis groups. Check the dashboard for your assignment.',
    date: '2023-05-10T14:30:00Z',
    author: 'Research Department',
  },
];

const Dashboard: React.FC = () => {
  const [userRole, setUserRole] = useState<'research_head' | 'professor' | 'student'>('research_head');
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      toast({
        title: "Welcome to the Research Dashboard",
        description: "You are currently logged in as Research Head",
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [toast]);

  const switchRole = (role: 'research_head' | 'professor' | 'student') => {
    setUserRole(role);
    toast({
      title: "Role switched",
      description: `You are now viewing as ${role.replace('_', ' ')}`,
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen w-full">
          <Sidebar userRole={userRole} />
          <SidebarInset className="transition-all duration-300">
            <header className="flex items-center justify-between p-4 border-b">
              <SidebarTrigger />
              <div className="flex items-center justify-end flex-1">
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
            </header>
            
            <main className="p-6">
              <TransitionLayout>
                <div className="space-y-6 max-w-6xl mx-auto">
                  <WelcomeCard 
                    userName={userRole === 'research_head' ? 'Dr. Martinez' : 
                              userRole === 'professor' ? 'Dr. Williams' : 'Alex Johnson'}
                    role={userRole}
                  />
                  
                  {userRole !== 'student' && (
                    <StatsCard data={DefaultStatData} />
                  )}
                  
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="mb-4">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="thesis">
                        {userRole === 'student' ? 'My Thesis' : 'Thesis Groups'}
                      </TabsTrigger>
                      {userRole === 'research_head' && (
                        <TabsTrigger value="personnel">Personnel</TabsTrigger>
                      )}
                      <TabsTrigger value="announcements">Announcements</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="space-y-6">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <h2 className="text-xl font-semibold">Recent Thesis Groups</h2>
                              {userRole !== 'student' && (
                                <Button size="sm" variant="outline" onClick={() => toast({ title: "Create New" })}>
                                  <Plus size={16} className="mr-1" />
                                  New Group
                                </Button>
                              )}
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {mockThesisGroups.slice(0, 2).map((group) => (
                                <ThesisGroup
                                  key={group.id}
                                  {...group}
                                  onView={(id) => toast({ title: `Viewing ${id}` })}
                                  onEdit={userRole !== 'student' ? (id) => toast({ title: `Editing ${id}` }) : undefined}
                                  onDelete={userRole === 'research_head' ? (id) => toast({ title: `Deleting ${id}` }) : undefined}
                                />
                              ))}
                            </div>
                            
                            <Button 
                              variant="link" 
                              className="mt-4"
                              onClick={() => toast({ title: "View All Thesis Groups" })}
                            >
                              View all thesis groups
                              <ChevronRight size={16} className="ml-1" />
                            </Button>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                              { 
                                title: "Manage Thesis", 
                                icon: <ClipboardList size={24} />, 
                                bg: "bg-blue-50 dark:bg-blue-950",
                                visible: userRole !== 'student',
                              },
                              { 
                                title: "Personnel", 
                                icon: <Users size={24} />, 
                                bg: "bg-purple-50 dark:bg-purple-950",
                                visible: userRole === 'research_head',
                              },
                              { 
                                title: "Messages", 
                                icon: <MessageSquare size={24} />, 
                                bg: "bg-green-50 dark:bg-green-950",
                                visible: true,
                              },
                              { 
                                title: "Settings", 
                                icon: <Settings size={24} />, 
                                bg: "bg-amber-50 dark:bg-amber-950",
                                visible: true,
                              },
                            ].filter(item => item.visible).map((item, index) => (
                              <Button
                                key={index}
                                variant="ghost"
                                className={`h-24 flex flex-col items-center justify-center gap-2 ${item.bg} hover:bg-opacity-80 transition-all`}
                                onClick={() => toast({ title: `${item.title} clicked` })}
                              >
                                {item.icon}
                                <span className="text-xs font-medium">{item.title}</span>
                              </Button>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <AIQueryBox 
                            promptType={userRole === 'research_head' ? 'admin' : 'thesis'}
                            placeholder={
                              userRole === 'research_head' 
                                ? "Ask about department statistics..." 
                                : "Ask for thesis advice or topic validation..."
                            }
                          />
                          
                          <div>
                            <h2 className="text-xl font-semibold mb-4">Announcements</h2>
                            <div className="space-y-3">
                              {mockAnnouncements.map((announcement) => (
                                <div 
                                  key={announcement.id}
                                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-pointer"
                                  onClick={() => toast({ title: announcement.title })}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                                      <BellRing size={16} className="text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                      <h3 className="font-medium text-sm">{announcement.title}</h3>
                                     

