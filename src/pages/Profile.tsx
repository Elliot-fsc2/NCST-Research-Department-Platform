
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Save, User } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import TransitionLayout from '@/components/shared/TransitionLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('general');
  
  // This would come from an auth context or API call in a real app
  const [userData, setUserData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@university.edu.ph',
    role: 'student',
    department: 'Computer Science',
    bio: 'Graduate student focusing on machine learning applications in healthcare.',
    phone: '(555) 123-4567',
    address: 'University Dorm, Room 305',
    avatar: '/placeholder.svg', // Default placeholder
  });

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would submit to an API
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar userRole={userData.role as any} />
        <main className="flex-1 p-4 pt-20 md:ml-[70px] lg:ml-64">
          <TransitionLayout>
            <div className="container mx-auto px-4 py-8 max-w-4xl">
              <h1 className="text-3xl font-bold mb-6">My Profile</h1>
              
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <Card className="md:w-1/3">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                        {userData.avatar ? (
                          <img 
                            src={userData.avatar} 
                            alt={userData.name}
                            className="w-full h-full object-cover" 
                          />
                        ) : (
                          <User size={64} className="text-gray-500" />
                        )}
                      </div>
                      <Button 
                        size="icon"
                        variant="outline"
                        className="absolute bottom-0 right-0 rounded-full bg-white dark:bg-gray-800 shadow-md"
                      >
                        <Camera size={16} />
                      </Button>
                    </div>
                    
                    <h2 className="text-xl font-semibold mb-1">{userData.name}</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{userData.email}</p>
                    
                    <div className="w-full">
                      <div className="bg-primary/10 dark:bg-primary/20 rounded-md px-4 py-2 text-center mb-2">
                        <p className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Role</p>
                        <p className="font-medium capitalize">{userData.role}</p>
                      </div>
                      
                      <div className="bg-primary/10 dark:bg-primary/20 rounded-md px-4 py-2 text-center">
                        <p className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Department</p>
                        <p className="font-medium">{userData.department}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="md:w-2/3">
                  <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid grid-cols-2 mb-6">
                      <TabsTrigger value="general">General Information</TabsTrigger>
                      <TabsTrigger value="security">Security</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="general">
                      <Card>
                        <CardContent className="p-6">
                          <form onSubmit={handleSaveChanges} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">
                                  Full Name
                                </label>
                                <Input 
                                  id="name" 
                                  value={userData.name}
                                  onChange={(e) => setUserData({...userData, name: e.target.value})}
                                  placeholder="Full Name" 
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                  Email Address
                                </label>
                                <Input 
                                  id="email" 
                                  value={userData.email}
                                  disabled
                                  className="bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                                />
                                <p className="text-xs text-gray-500">
                                  University email cannot be changed
                                </p>
                              </div>
                              
                              <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium">
                                  Phone Number
                                </label>
                                <Input 
                                  id="phone" 
                                  value={userData.phone}
                                  onChange={(e) => setUserData({...userData, phone: e.target.value})}
                                  placeholder="Phone Number" 
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <label htmlFor="address" className="text-sm font-medium">
                                  Address
                                </label>
                                <Input 
                                  id="address" 
                                  value={userData.address}
                                  onChange={(e) => setUserData({...userData, address: e.target.value})}
                                  placeholder="Address" 
                                />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <label htmlFor="bio" className="text-sm font-medium">
                                Bio
                              </label>
                              <Textarea 
                                id="bio" 
                                value={userData.bio}
                                onChange={(e) => setUserData({...userData, bio: e.target.value})}
                                rows={4} 
                                placeholder="Tell us about yourself..." 
                              />
                            </div>
                            
                            <div className="flex justify-end">
                              <Button type="submit" className="flex items-center gap-2">
                                <Save size={16} />
                                Save Changes
                              </Button>
                            </div>
                          </form>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="security">
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-medium mb-4">Password</h3>
                          <form className="space-y-4">
                            <div className="space-y-2">
                              <label htmlFor="current-password" className="text-sm font-medium">
                                Current Password
                              </label>
                              <Input 
                                id="current-password" 
                                type="password" 
                                placeholder="Enter current password" 
                              />
                            </div>
                            
                            <Separator />
                            
                            <div className="space-y-2">
                              <label htmlFor="new-password" className="text-sm font-medium">
                                New Password
                              </label>
                              <Input 
                                id="new-password" 
                                type="password" 
                                placeholder="Enter new password" 
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <label htmlFor="confirm-password" className="text-sm font-medium">
                                Confirm New Password
                              </label>
                              <Input 
                                id="confirm-password" 
                                type="password" 
                                placeholder="Confirm new password" 
                              />
                            </div>
                            
                            <div className="flex justify-end">
                              <Button type="submit" className="flex items-center gap-2">
                                <Save size={16} />
                                Update Password
                              </Button>
                            </div>
                          </form>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </TransitionLayout>
        </main>
      </div>
    </div>
  );
};

export default Profile;
