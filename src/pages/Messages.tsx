
import React, { useState } from 'react';
import { Search, Send, User, UserPlus } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import TransitionLayout from '@/components/shared/TransitionLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

// Mock data for conversations
const mockConversations = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Professor',
    avatar: null,
    lastMessage: 'Please submit your thesis outline by Friday.',
    time: '10:30 AM',
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: 'Alex Thompson',
    role: 'Student',
    avatar: null,
    lastMessage: 'Can we schedule a meeting to discuss my research?',
    time: 'Yesterday',
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: 'Prof. Michael Rodriguez',
    role: 'Research Advisor',
    avatar: null,
    lastMessage: 'I reviewed your methodology section. Let\'s discuss the changes.',
    time: 'Yesterday',
    unread: 0,
    online: true,
  },
  {
    id: 4,
    name: 'Research Department',
    role: 'Admin',
    avatar: null,
    lastMessage: 'New announcement: Thesis submission deadline extended.',
    time: 'Monday',
    unread: 1,
    online: true,
  },
];

// Mock data for messages in active conversation
const mockMessages = [
  {
    id: 1,
    senderId: 1, // Dr. Sarah Johnson
    text: 'Hello! I wanted to check in on your thesis progress.',
    time: '10:15 AM',
    isRead: true,
  },
  {
    id: 2,
    senderId: 'self',
    text: 'Hi Dr. Johnson, I\'ve completed the literature review section and I\'m currently working on the methodology.',
    time: '10:20 AM',
    isRead: true,
  },
  {
    id: 3,
    senderId: 1,
    text: 'That sounds great! Could you please submit your thesis outline by Friday so I can review it?',
    time: '10:30 AM',
    isRead: false,
  },
];

const Messages = () => {
  const [activeConversation, setActiveConversation] = useState(mockConversations[0]);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter conversations based on search query
  const filteredConversations = mockConversations.filter(conversation => 
    conversation.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // In a real app, you would send this message to the API
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 pt-16 md:ml-[70px] lg:ml-64">
          <TransitionLayout>
            <div className="h-[calc(100vh-4rem)] flex flex-col md:flex-row">
              {/* Conversation List */}
              <div className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 dark:border-gray-800 flex flex-col">
                <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                  <h1 className="text-xl font-bold mb-4">Messages</h1>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input 
                      placeholder="Search conversations..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <ScrollArea className="flex-1">
                  {filteredConversations.map(conversation => (
                    <div 
                      key={conversation.id}
                      onClick={() => setActiveConversation(conversation)}
                      className={cn(
                        "flex items-start gap-3 p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                        activeConversation.id === conversation.id && "bg-gray-100 dark:bg-gray-800"
                      )}
                    >
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                          {conversation.avatar ? (
                            <img 
                              src={conversation.avatar} 
                              alt={conversation.name}
                              className="w-full h-full object-cover rounded-full" 
                            />
                          ) : (
                            <User size={20} className="text-gray-500" />
                          )}
                        </div>
                        {conversation.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></span>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <p className="font-medium truncate">{conversation.name}</p>
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-1">{conversation.role}</p>
                        <p className="text-sm truncate">{conversation.lastMessage}</p>
                      </div>
                      
                      {conversation.unread > 0 && (
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-xs text-white">{conversation.unread}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </ScrollArea>
                
                <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <UserPlus size={16} />
                    New Conversation
                  </Button>
                </div>
              </div>
              
              {/* Messages Area */}
              <div className="hidden md:flex md:w-2/3 lg:w-3/4 flex-col">
                {activeConversation ? (
                  <>
                    {/* Conversation Header */}
                    <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            {activeConversation.avatar ? (
                              <img 
                                src={activeConversation.avatar} 
                                alt={activeConversation.name}
                                className="w-full h-full object-cover rounded-full" 
                              />
                            ) : (
                              <User size={20} className="text-gray-500" />
                            )}
                          </div>
                          {activeConversation.online && (
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></span>
                          )}
                        </div>
                        
                        <div>
                          <p className="font-medium">{activeConversation.name}</p>
                          <p className="text-xs text-gray-500">
                            {activeConversation.online ? 'Online' : 'Offline'} • {activeConversation.role}
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <Button variant="ghost" size="sm">
                          View Profile
                        </Button>
                      </div>
                    </div>
                    
                    {/* Messages */}
                    <ScrollArea className="flex-1 p-4">
                      <div className="space-y-4">
                        {mockMessages.map(message => (
                          <div 
                            key={message.id} 
                            className={cn(
                              "flex",
                              message.senderId === 'self' ? "justify-end" : "justify-start"
                            )}
                          >
                            <div 
                              className={cn(
                                "max-w-[70%] rounded-lg p-3",
                                message.senderId === 'self' 
                                  ? "bg-primary text-white rounded-br-none" 
                                  : "bg-gray-100 dark:bg-gray-800 rounded-bl-none"
                              )}
                            >
                              <p>{message.text}</p>
                              <p className={cn(
                                "text-xs mt-1",
                                message.senderId === 'self' ? "text-primary-foreground/70" : "text-gray-500"
                              )}>
                                {message.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    
                    {/* Message Input */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                      <form onSubmit={handleSendMessage} className="flex gap-2">
                        <Input 
                          placeholder="Type a message..." 
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          className="flex-1"
                        />
                        <Button type="submit" disabled={!newMessage.trim()}>
                          <Send size={16} />
                        </Button>
                      </form>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send size={24} className="text-gray-500" />
                      </div>
                      <h2 className="text-xl font-semibold mb-2">Your Messages</h2>
                      <p className="text-gray-500 max-w-sm mx-auto">
                        Select a conversation or start a new one to begin messaging.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Mobile: No conversation selected */}
              <div className="flex md:hidden flex-1 items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-gray-500" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Your Messages</h2>
                  <p className="text-gray-500 max-w-sm mx-auto">
                    Select a conversation to view messages. This will be implemented with a mobile-friendly view.
                  </p>
                </div>
              </div>
            </div>
          </TransitionLayout>
        </main>
      </div>
    </div>
  );
};

export default Messages;
