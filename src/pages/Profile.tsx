
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import TransitionLayout from '@/components/shared/TransitionLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserCircle, Mail, Phone, Building, GraduationCap, Save, User } from 'lucide-react';

const Profile = () => {
  return (
    <DashboardLayout userRole="research_head">
      <TransitionLayout>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">My Profile</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Summary Card */}
            <Card className="md:col-span-1">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback>
                    <User size={40} />
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4">Dr. Martinez</CardTitle>
                <CardDescription>Research Head</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>martinez@university.edu.ph</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>+63 912 345 6789</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Building className="w-4 h-4 text-muted-foreground" />
                    <span>College of Computer Studies</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="w-4 h-4 text-muted-foreground" />
                    <span>Ph.D. in Computer Science</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Change Password</Button>
              </CardFooter>
            </Card>
            
            {/* Profile Edit Tabs */}
            <div className="md:col-span-2">
              <Tabs defaultValue="personal">
                <TabsList className="mb-4">
                  <TabsTrigger value="personal">Personal Info</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                </TabsList>
                
                <TabsContent value="personal">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Update your personal details here.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue="Maria" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Martinez" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="martinez@university.edu.ph" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue="+63 912 345 6789" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Input id="bio" defaultValue="Research Head with 15 years of experience in academic research." />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="ml-auto">
                        <Save className="mr-2 h-4 w-4" /> Save Changes
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="education">
                  <Card>
                    <CardHeader>
                      <CardTitle>Education</CardTitle>
                      <CardDescription>Your academic background</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="degree">Highest Degree</Label>
                        <Input id="degree" defaultValue="Ph.D. in Computer Science" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="university">University</Label>
                        <Input id="university" defaultValue="University of the Philippines" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="year">Year Completed</Label>
                        <Input id="year" defaultValue="2015" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="ml-auto">
                        <Save className="mr-2 h-4 w-4" /> Save Changes
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="preferences">
                  <Card>
                    <CardHeader>
                      <CardTitle>Preferences</CardTitle>
                      <CardDescription>Customize your account settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="language">Preferred Language</Label>
                        <Input id="language" defaultValue="English" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="theme">Theme</Label>
                        <Input id="theme" defaultValue="Light" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="ml-auto">
                        <Save className="mr-2 h-4 w-4" /> Save Changes
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </TransitionLayout>
    </DashboardLayout>
  );
};

export default Profile;
