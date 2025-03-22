
import React from 'react';
import { Bell, Eye, Lock, Mail, Moon, Shield, Sun, User, Users } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import TransitionLayout from '@/components/shared/TransitionLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Settings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar userRole="research_head" />
        <main className="flex-1 p-4 pt-20 md:ml-[70px] lg:ml-64">
          <TransitionLayout>
            <div className="container mx-auto max-w-4xl">
              <h1 className="text-3xl font-bold mb-6">Settings</h1>

              <Tabs defaultValue="general" className="mb-6">
                <TabsList className="grid grid-cols-4 md:grid-cols-4 lg:w-[400px]">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="appearance">Appearance</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>
                
                <TabsContent value="general" className="space-y-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User size={18} />
                        Account Settings
                      </CardTitle>
                      <CardDescription>
                        Update your personal information and email preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Full Name
                          </label>
                          <Input 
                            id="name" 
                            placeholder="Your Name" 
                            defaultValue="Research Department Head"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email Address
                          </label>
                          <Input 
                            id="email" 
                            type="email" 
                            defaultValue="research.head@university.edu.ph"
                            disabled
                            className="bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                          />
                          <p className="text-xs text-gray-500">
                            University email cannot be changed
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="timezone" className="text-sm font-medium">
                          Timezone
                        </label>
                        <select 
                          id="timezone" 
                          className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md"
                          defaultValue="Asia/Manila"
                        >
                          <option value="Asia/Manila">Philippines (GMT+8)</option>
                          <option value="America/New_York">Eastern Time (GMT-4)</option>
                          <option value="America/Los_Angeles">Pacific Time (GMT-7)</option>
                          <option value="Europe/London">London (GMT+1)</option>
                          <option value="Asia/Tokyo">Tokyo (GMT+9)</option>
                        </select>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Email Preferences</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <label htmlFor="marketing-emails" className="text-sm font-medium">
                                Marketing Emails
                              </label>
                              <p className="text-xs text-gray-500">
                                Receive emails about research events and university updates
                              </p>
                            </div>
                            <Switch id="marketing-emails" defaultChecked={true} />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <label htmlFor="activity-emails" className="text-sm font-medium">
                                Activity Emails
                              </label>
                              <p className="text-xs text-gray-500">
                                Receive emails when there's activity on your account
                              </p>
                            </div>
                            <Switch id="activity-emails" defaultChecked={true} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button>Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users size={18} />
                        Research Department Settings
                      </CardTitle>
                      <CardDescription>
                        Configure global settings for the research department
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="department-name" className="text-sm font-medium">
                          Department Name
                        </label>
                        <Input 
                          id="department-name" 
                          placeholder="Department Name" 
                          defaultValue="NCST Research Department"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="base-fee" className="text-sm font-medium">
                          Base Thesis Fee
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">₱</span>
                          <Input 
                            id="base-fee" 
                            placeholder="350" 
                            defaultValue="350"
                            type="number"
                            className="pl-8"
                          />
                        </div>
                        <p className="text-xs text-gray-500">
                          Base fee per student for thesis groups
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="max-group-size" className="text-sm font-medium">
                          Maximum Group Size
                        </label>
                        <Input 
                          id="max-group-size" 
                          placeholder="5" 
                          defaultValue="5"
                          type="number"
                        />
                        <p className="text-xs text-gray-500">
                          Maximum number of students allowed in a thesis group
                        </p>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button>Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="appearance" className="space-y-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Eye size={18} />
                        Appearance
                      </CardTitle>
                      <CardDescription>
                        Customize the look and feel of the application
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Theme Mode</h3>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <input 
                              type="radio" 
                              id="theme-light" 
                              name="theme" 
                              value="light" 
                              className="w-4 h-4" 
                              defaultChecked 
                            />
                            <label htmlFor="theme-light" className="flex items-center gap-1.5">
                              <Sun size={16} /> Light
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input 
                              type="radio" 
                              id="theme-dark" 
                              name="theme" 
                              value="dark" 
                              className="w-4 h-4"
                            />
                            <label htmlFor="theme-dark" className="flex items-center gap-1.5">
                              <Moon size={16} /> Dark
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input 
                              type="radio" 
                              id="theme-system" 
                              name="theme" 
                              value="system" 
                              className="w-4 h-4"
                            />
                            <label htmlFor="theme-system">System</label>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Font Size</h3>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <input 
                              type="radio" 
                              id="font-small" 
                              name="font-size" 
                              value="small" 
                              className="w-4 h-4"
                            />
                            <label htmlFor="font-small">Small</label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input 
                              type="radio" 
                              id="font-medium" 
                              name="font-size" 
                              value="medium" 
                              className="w-4 h-4"
                              defaultChecked
                            />
                            <label htmlFor="font-medium">Medium</label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input 
                              type="radio" 
                              id="font-large" 
                              name="font-size" 
                              value="large" 
                              className="w-4 h-4"
                            />
                            <label htmlFor="font-large">Large</label>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Interface Density</h3>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <input 
                              type="radio" 
                              id="density-compact" 
                              name="density" 
                              value="compact" 
                              className="w-4 h-4"
                            />
                            <label htmlFor="density-compact">Compact</label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input 
                              type="radio" 
                              id="density-comfortable" 
                              name="density" 
                              value="comfortable" 
                              className="w-4 h-4"
                              defaultChecked
                            />
                            <label htmlFor="density-comfortable">Comfortable</label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button>Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="notifications" className="space-y-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Bell size={18} />
                        Notification Preferences
                      </CardTitle>
                      <CardDescription>
                        Control which notifications you receive
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-medium">Thesis Submissions</h3>
                            <p className="text-xs text-gray-500">
                              Receive notifications when professors submit new thesis groups
                            </p>
                          </div>
                          <Switch id="notify-submissions" defaultChecked={true} />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-medium">Personnel Assignments</h3>
                            <p className="text-xs text-gray-500">
                              Receive notifications when personnel are assigned to thesis groups
                            </p>
                          </div>
                          <Switch id="notify-assignments" defaultChecked={true} />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-medium">Messages</h3>
                            <p className="text-xs text-gray-500">
                              Receive notifications for new messages
                            </p>
                          </div>
                          <Switch id="notify-messages" defaultChecked={true} />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-medium">System Updates</h3>
                            <p className="text-xs text-gray-500">
                              Receive notifications about system updates and maintenance
                            </p>
                          </div>
                          <Switch id="notify-system" defaultChecked={true} />
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Notification Methods</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Bell size={16} />
                              <span>In-app Notifications</span>
                            </div>
                            <Switch id="method-app" defaultChecked={true} />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Mail size={16} />
                              <span>Email Notifications</span>
                            </div>
                            <Switch id="method-email" defaultChecked={true} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button>Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="security" className="space-y-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lock size={18} />
                        Password
                      </CardTitle>
                      <CardDescription>
                        Change your password
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
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
                        <Button>Update Password</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield size={18} />
                        Account Security
                      </CardTitle>
                      <CardDescription>
                        Configure additional security measures for your account
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
                          <p className="text-xs text-gray-500">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Button variant="outline">Setup 2FA</Button>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Recent Login Activity</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <div>
                              <p>Today, 10:30 AM</p>
                              <p className="text-xs text-gray-500">Manila, Philippines</p>
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                              Current
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <div>
                              <p>Yesterday, 3:45 PM</p>
                              <p className="text-xs text-gray-500">Manila, Philippines</p>
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <div>
                              <p>June 10, 2023, 9:15 AM</p>
                              <p className="text-xs text-gray-500">Manila, Philippines</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-start">
                        <Button variant="outline">View All Activity</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </TransitionLayout>
        </main>
      </div>
    </div>
  );
};

export default Settings;
